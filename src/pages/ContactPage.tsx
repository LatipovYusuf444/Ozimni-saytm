import type { FormEvent } from 'react'
import { Github, Instagram, Linkedin, Mail, Phone, Send } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { profile } from '../content/siteContent'
import { translations, type AppLanguage, type ContactSubmitState } from '../i18n'

type ContactPageProps = {
  contact: (typeof translations)[AppLanguage]['contact']
  contactState: ContactSubmitState
  isSending: boolean
  isSubscribed: boolean
  onContactSubmit: (event: FormEvent<HTMLFormElement>) => void
  onSubscribe: () => void
}

function ContactPage({ contact, contactState, isSending, isSubscribed, onContactSubmit, onSubscribe }: ContactPageProps) {
  const t = { contact }
  const handleContactSubmit = onContactSubmit
  const setIsSubscribed = (value: boolean) => {
    if (value) onSubscribe()
  }

  return (
    <AnimatedSection id="contact" className="w-full max-w-none px-6 py-16 lg:px-16 xl:px-20">
      <div className="glass-panel grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div>
          <p className="section-eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-300">{t.contact.description}</p>
          <div className="mt-8 space-y-3 text-slate-300">
            <a className="contact-row" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a>
            <a className="contact-row" href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={18} />{profile.phone}</a>
            <a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn</a>
            <a className="contact-row" href={profile.instagram} target="_blank" rel="noreferrer"><Instagram size={18} />Instagram</a>
            <a className="contact-row" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} />GitHub</a>
            <a className="contact-row" href={profile.telegram} target="_blank" rel="noreferrer"><Send size={18} />Telegram</a>
          </div>
        </div>
        <div className="grid gap-6">
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
          <div className="rounded-[1.5rem] bg-[#020817d9] p-6 text-stone-50">
            <p className="text-sm uppercase tracking-[0.22em] text-stone-400">{t.contact.quick.eyebrow}</p>
            <h3 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em]">{t.contact.quick.title}</h3>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); setIsSubscribed(true) }}>
              <input className="newsletter-input" type="email" placeholder={t.contact.quick.placeholder} required />
              <button className="button button-primary justify-center border-0" type="submit">{t.contact.quick.submit}</button>
            </form>
            {isSubscribed ? <p className="mt-4 text-sm text-emerald-300">{t.contact.quick.success}</p> : <p className="mt-4 text-sm text-stone-400">{t.contact.quick.idle}</p>}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ContactPage
