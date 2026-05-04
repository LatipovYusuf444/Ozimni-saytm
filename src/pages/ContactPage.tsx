import type { FormEvent } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail, Phone, Send } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import contactBg from '../assets/images/grid_background_hd.webp'
import { profile } from '../content/siteContent'
import { translations, type AppLanguage, type ContactSubmitState } from '../i18n'
import { smoothEase } from '../lib/motion'

type ContactPageProps = {
  contact: (typeof translations)[AppLanguage]['contact']
  contactState: ContactSubmitState
  isSending: boolean
  isSubscribed: boolean
  onContactSubmit: (event: FormEvent<HTMLFormElement>) => void
  onSubscribe: () => void
}

const contactReveal: Record<'left' | 'right' | 'up' | 'zoom', Variants> = {
  left: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: smoothEase } },
  },
  right: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: smoothEase } },
  },
  up: {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.82, ease: smoothEase } },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.86, ease: smoothEase } },
  },
}

const contactStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
}

function ContactPage({ contact, contactState, isSending, isSubscribed, onContactSubmit, onSubscribe }: ContactPageProps) {
  const t = { contact }
  const reduceMotion = Boolean(useReducedMotion())
  const motionInitial = reduceMotion ? false : 'hidden'
  const viewport = { once: true, amount: 0.22 }
  const handleContactSubmit = onContactSubmit
  const setIsSubscribed = (value: boolean) => {
    if (value) onSubscribe()
  }

  return (
    <AnimatedSection id="contact" className="contact-page w-full max-w-none px-3 py-8 sm:px-4 lg:px-6 xl:px-8">
      <img className="contact-bg" src={contactBg} alt="" aria-hidden="true" loading="eager" decoding="async" />
      <div className="contact-page__glow" />
      <motion.div className="contact-shell" initial={motionInitial} whileInView="visible" viewport={viewport} variants={contactStagger}>
        <motion.div className="contact-copy" variants={contactReveal.left}>
          <p className="section-eyebrow contact-eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section-title contact-title">{t.contact.title}</h2>
          <p className="contact-description">{t.contact.description}</p>
          <motion.div className="contact-list" variants={contactStagger}>
            <motion.a className="contact-row" href={`mailto:${profile.email}`} variants={contactReveal.up}><Mail size={18} />{profile.email}</motion.a>
            <motion.a className="contact-row" href={`tel:${profile.phone.replaceAll(' ', '')}`} variants={contactReveal.up}><Phone size={18} />{profile.phone}</motion.a>
            <motion.a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer" variants={contactReveal.up}><Linkedin size={18} />LinkedIn</motion.a>
            <motion.a className="contact-row" href={profile.instagram} target="_blank" rel="noreferrer" variants={contactReveal.up}><Instagram size={18} />Instagram</motion.a>
            <motion.a className="contact-row" href={profile.github} target="_blank" rel="noreferrer" variants={contactReveal.up}><Github size={18} />GitHub</motion.a>
            <motion.a className="contact-row" href={profile.telegram} target="_blank" rel="noreferrer" variants={contactReveal.up}><Send size={18} />Telegram</motion.a>
          </motion.div>
        </motion.div>
        <motion.div className="contact-form-panel" variants={contactReveal.right}>
          <form className="grid gap-4" onSubmit={handleContactSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="field"><span>{t.contact.form.name}</span><input type="text" name="name" placeholder={t.contact.form.namePlaceholder} required /></label>
              <label className="field"><span>{t.contact.form.email}</span><input type="email" name="email" placeholder={t.contact.form.emailPlaceholder} required /></label>
            </div>
            <label className="field"><span>{t.contact.form.type}</span><input type="text" name="type" placeholder={t.contact.form.typePlaceholder} /></label>
            <label className="field"><span>{t.contact.form.message}</span><textarea name="message" rows={5} placeholder={t.contact.form.messagePlaceholder} required /></label>
            <button className="button button-primary w-full justify-center sm:w-fit" type="submit" disabled={isSending}>
              {isSending ? t.contact.form.sending : t.contact.form.submit}
              <Send size={16} />
            </button>
            {contactState === 'success' ? <p className="rounded-2xl border border-emerald-700/15 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{t.contact.form.success}</p> : null}
            {contactState === 'error' ? <p className="rounded-2xl border border-rose-700/15 bg-rose-50 px-4 py-3 text-sm text-rose-800">{t.contact.form.error}</p> : null}
            {contactState === 'unconfigured' ? <p className="rounded-2xl border border-amber-700/15 bg-amber-50 px-4 py-3 text-sm text-amber-800">{t.contact.form.unconfigured}</p> : null}
          </form>
          <motion.div className="contact-quick-card" variants={contactReveal.zoom}>
            <p className="text-sm uppercase tracking-[0.22em] text-stone-400">{t.contact.quick.eyebrow}</p>
            <h3 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em]">{t.contact.quick.title}</h3>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); setIsSubscribed(true) }}>
              <input className="newsletter-input" type="email" placeholder={t.contact.quick.placeholder} required />
              <button className="button button-primary justify-center border-0" type="submit">{t.contact.quick.submit}</button>
            </form>
            {isSubscribed ? <p className="mt-4 text-sm text-emerald-300">{t.contact.quick.success}</p> : <p className="mt-4 text-sm text-stone-400">{t.contact.quick.idle}</p>}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}

export default ContactPage
