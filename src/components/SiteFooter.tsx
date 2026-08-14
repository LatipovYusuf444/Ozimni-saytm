import { motion } from 'framer-motion'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, BookOpen, BriefcaseBusiness, ChevronUp, Facebook, FileText, FolderOpen, Github, Globe, Instagram, Linkedin, Mail, MapPin, Newspaper, Phone, Send, X } from 'lucide-react'
import footerLogo from '../assets/logo-yl-mark.png'
import resumeImage from '../assets/yusuf_resume_mobile.svg'
import { footerContent, profile } from '../content/siteContent'
import type { AppLanguage } from '../i18n'

type FooterContent = (typeof footerContent)[AppLanguage]

type SiteFooterProps = {
  footer: FooterContent
  footerDescription: string
  rights: string
  navItems: Array<{ label: string; href: string }>
  reduceMotion: boolean
  onScrollToTop: () => void
}

function SiteFooter({ footer, footerDescription, rights, navItems, reduceMotion, onScrollToTop }: SiteFooterProps) {
  const scrollToTop = onScrollToTop
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const resumeModal = isResumeOpen ? createPortal(
    <motion.div
      className="resume-modal"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
      onClick={() => setIsResumeOpen(false)}
    >
      <motion.div
        className="resume-modal__panel"
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="resume-modal__header">
          <div>
            <p className="resume-modal__eyebrow">Resume</p>
            <h2>{profile.name}</h2>
          </div>
          <button className="resume-modal__close" type="button" onClick={() => setIsResumeOpen(false)} aria-label="Close resume preview">
            <X size={18} />
          </button>
        </div>
        <div className="resume-preview">
          <img className="resume-preview__image" src={resumeImage} alt={`${profile.name} resume`} />
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  ) : null

  return (
    <>
      <footer className="footer-luxury relative z-10 px-5 py-5 lg:px-10 xl:px-12">
        <motion.div
          className="footer-luxury__inner relative overflow-hidden rounded-[1.1rem] border border-[#E7AD43]/20 bg-[#050708] px-5 py-7 shadow-[0_28px_90px_-55px_rgba(231,173,67,0.5)] lg:px-8"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
        <div className="relative z-10 grid gap-7 lg:grid-cols-[1.35fr_0.82fr_0.9fr_1.15fr_1.15fr]">
          <div className="footer-luxury__brand">
            <div className="flex items-center gap-3">
              <img className="h-11 w-11 object-contain drop-shadow-[0_0_20px_rgba(231,173,67,0.24)]" src={footerLogo} alt={`${profile.name} logo`} />
              <p className="text-[1.05rem] font-extrabold tracking-[-0.02em] text-white">{profile.name}</p>
            </div>
            <p className="mt-5 max-w-[18rem] text-[0.9rem] leading-7 text-white/62">{footerDescription}</p>
            <div className="mt-6 flex gap-3">
              <a className="footer-social" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a className="footer-social" href={profile.telegram} target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={17} /></a>
              <a className="footer-social" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a className="footer-social" href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
              <a className="footer-social" href={profile.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
            </div>
          </div>
    
          <div className="footer-column">
            <p className="footer-heading">{footer.navigation}</p>
            <div className="mt-6 grid gap-4">
              {navItems.map((item) => <a key={item.href} className="footer-link footer-link--dot" href={item.href}>{item.label}</a>)}
            </div>
          </div>
    
          <div className="footer-column">
            <p className="footer-heading">{footer.resources}</p>
            <div className="mt-6 grid gap-4">
              {footer.resourcesList.map((item, index) => {
                const icons = [Newspaper, Globe, FileText, FolderOpen]
                const Icon = icons[index] ?? BookOpen
                if (index === 2) {
                  return (
                    <button key={item} className="footer-link footer-link-button" type="button" onClick={() => setIsResumeOpen(true)}>
                      <Icon size={16} />{item}
                    </button>
                  )
                }

                return <a key={item} className="footer-link" href="#projects"><Icon size={16} />{item}</a>
              })}
            </div>
          </div>
    
          <div className="footer-column">
            <p className="footer-heading">{footer.contacts}</p>
            <div className="mt-6 grid gap-4">
              <a className="footer-link" href={`mailto:${profile.email}`}><Mail size={16} />{profile.email}</a>
              <a className="footer-link" href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={16} />{profile.phone}</a>
              <span className="footer-link"><MapPin size={16} />{footer.location}</span>
              <a className="footer-link" href={profile.telegram} target="_blank" rel="noreferrer"><Send size={16} />Telegram</a>
            </div>
            <a className="footer-help" href="#contact">
              <span className="footer-help__icon"><BriefcaseBusiness size={18} /></span>
              <span>
                <span className="block text-[0.82rem] font-bold text-white">{footer.questionTitle}</span>
                <span className="mt-1 block text-[0.78rem] leading-5 text-white/58">{footer.questionText}</span>
              </span>
              <ArrowRight className="ml-auto text-[#E7AD43]" size={18} />
            </a>
          </div>
    
          <div className="footer-column">
            <p className="footer-heading">{footer.subscribe}</p>
            <p className="mt-6 max-w-[15rem] text-[0.86rem] leading-7 text-white/58">{footer.subscribeText}</p>
            <form className="mt-6 flex overflow-hidden rounded-[0.7rem] border border-white/12 bg-white/[0.025]" onSubmit={(event) => event.preventDefault()}>
              <input className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[0.84rem] text-white outline-none placeholder:text-white/40" type="email" placeholder={footer.emailPlaceholder} />
              <button className="grid w-12 place-items-center bg-gradient-to-br from-[#E7AD43] to-[#FFD06A] text-[#120b05]" type="submit" aria-label={footer.subscribe}>
                <Send size={17} />
              </button>
            </form>
          </div>
        </div>
    
        <div className="relative z-10 mt-7 flex flex-col gap-4 border-t border-white/10 pt-5 text-[0.78rem] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 {profile.name}. {rights}</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-[#E7AD43]" href="#contact">{footer.privacy}</a>
            <span className="text-[#E7AD43]">•</span>
            <a className="transition hover:text-[#E7AD43]" href="#contact">{footer.terms}</a>
            <button className="footer-back-top" type="button" onClick={scrollToTop} aria-label="Back to top">
              <ChevronUp size={15} />
            </button>
          </div>
        </div>
        </motion.div>
      </footer>
      {resumeModal}
    </>
  )
}

export default SiteFooter
