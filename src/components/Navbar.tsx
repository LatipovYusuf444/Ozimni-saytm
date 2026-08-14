import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Facebook, Github, Instagram, Linkedin, Menu, Send, Wrench, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { PageId } from '../content/siteContent'
import type { AppLanguage } from '../i18n'

type NavItem = {
  label: string
  href: string
}

type NavbarProps = {
  logo: string
  profileName: string
  navItems: NavItem[]
  activePage: PageId
  language: AppLanguage
  onLanguageChange: (language: AppLanguage) => void
  onNavigate: (page: PageId) => void
  ctaLabel: string
  mobileLabels: {
    title: string
    open: string
    close: string
  }
  socialLinks: {
    github: string
    telegram: string
    instagram: string
    facebook: string
    linkedin: string
  }
}

export default function Navbar({ logo, profileName, navItems, activePage, language, onLanguageChange, onNavigate, ctaLabel, mobileLabels, socialLinks }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const languageOptions = [
    { code: 'uz', label: 'UZ' },
    { code: 'en', label: 'ENG' },
    { code: 'ru', label: 'RUS' },
  ] as const
  const maintenanceNotice = {
    uz: {
      badge: 'Muhim',
      text: 'Saytda yangilanish ishlari olib borilmoqda — ayrim kamchiliklar uchun uzr so‘raymiz. Tushunganingiz uchun rahmat!',
    },
    en: {
      badge: 'Notice',
      text: 'We are improving the website — please excuse any temporary issues. Thank you for your understanding!',
    },
    ru: {
      badge: 'Важно',
      text: 'На сайте ведутся работы — приносим извинения за временные неудобства. Спасибо за понимание!',
    },
  }[language]

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  const handleNavigate = (page: PageId) => {
    onNavigate(page)
    setIsOpen(false)
  }

  return (
    <>
      <motion.header
        className={`luxury-navbar sticky top-0 z-50 border-b backdrop-blur-2xl transition-[background,border-color,box-shadow] duration-500 ${
          isScrolled
            ? 'border-[#E7AD43]/25 bg-[#050708]/82 shadow-[0_18px_70px_-52px_rgba(231,173,67,0.58)]'
            : 'border-white/[0.06] bg-[#050708]/70 shadow-[0_18px_70px_-52px_rgba(231,173,67,0.35)]'
        }`}
        initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex min-h-[5.2rem] w-full max-w-none items-center justify-between px-5 sm:px-6 lg:px-10 xl:px-12">
          <a className="group flex items-center gap-3" href="#home" aria-label={profileName} onClick={() => handleNavigate('home')}>
            <motion.img
              className="ml-6 h-14 w-14 object-contain drop-shadow-[0_10px_22px_rgba(231,173,67,0.28)]"
              src={logo}
              alt={`${profileName} logo`}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.06, y: -2 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            />
          </a>

          <nav className="hidden items-center gap-8 text-[0.95rem] font-bold text-white/[0.86] xl:gap-10 lg:flex">
            {navItems.map((item) => {
              const page = item.href.replace('#', '') as PageId
              return (
                <motion.a
                  key={item.href}
                  className={`group relative py-2 transition duration-300 hover:text-white ${activePage === page ? 'text-white' : ''}`}
                  href={item.href}
                  onClick={() => handleNavigate(page)}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-[#E7AD43] via-[#FFD06A] to-[#E7AD43] shadow-[0_0_14px_rgba(231,173,67,0.45)] transition-transform duration-500 ease-out group-hover:scale-x-100 ${activePage === page ? 'scale-x-100' : 'scale-x-0'}`} />
                </motion.a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center gap-2">
              {languageOptions.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  className={`h-10 min-w-10 rounded-full text-[0.78rem] font-extrabold uppercase tracking-[0.1em] transition ${language === code ? 'bg-gradient-to-br from-[#E7AD43] to-[#FFD06A] text-[#120b05] shadow-[0_0_22px_rgba(231,173,67,0.34)]' : 'text-white/[0.72] hover:text-white'}`}
                  onClick={() => onLanguageChange(code)}
                >
                  {label}
                </button>
              ))}
            </div>
            <motion.a
              className="group inline-flex min-h-[2.75rem] items-center gap-2.5 rounded-full border border-[#FFD06A]/[0.42] bg-[#E7AD43]/[0.045] px-7 text-[0.88rem] font-extrabold text-white shadow-[0_20px_56px_-34px_rgba(231,173,67,0.72)] transition hover:border-[#E7AD43]/70 hover:bg-[#E7AD43]/10"
              href="#contact"
              whileHover={shouldReduceMotion ? undefined : { y: -3, boxShadow: '0 0 28px rgba(231,173,67,0.28)' }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              {ctaLabel}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </motion.a>
          </div>

          <button type="button" className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-[#E7AD43]/20 bg-white/[0.04] text-white lg:hidden" aria-label={isOpen ? mobileLabels.close : mobileLabels.open} aria-expanded={isOpen} onClick={() => setIsOpen((current) => !current)}>
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <section className="maintenance-ticker" role="status" aria-label={`${maintenanceNotice.badge}: ${maintenanceNotice.text}`}>
          <div className="maintenance-ticker__edge maintenance-ticker__edge--left" aria-hidden="true" />
          <div className="maintenance-ticker__viewport" aria-hidden="true">
            <div className="maintenance-ticker__track">
              {[0, 1].map((copy) => (
                <div className="maintenance-ticker__group" key={copy}>
                  <span className="maintenance-ticker__badge">
                    <Wrench size={13} strokeWidth={2.3} />
                    {maintenanceNotice.badge}
                  </span>
                  <span className="maintenance-ticker__text">{maintenanceNotice.text}</span>
                  <span className="maintenance-ticker__spark">✦</span>
                </div>
              ))}
            </div>
          </div>
          <div className="maintenance-ticker__edge maintenance-ticker__edge--right" aria-hidden="true" />
        </section>
      </motion.header>

      <div className={`fixed inset-0 z-40 bg-black/[0.55] backdrop-blur-sm transition lg:hidden ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setIsOpen(false)} />
      <aside className={`fixed right-3 top-3 z-50 w-[min(23rem,calc(100vw-1.5rem))] rounded-3xl border border-[#E7AD43]/[0.18] bg-[#090C10]/95 p-5 shadow-[0_30px_90px_-38px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition lg:hidden ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[calc(100%+1rem)] opacity-0'}`}>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-[#E7AD43]">{mobileLabels.title}</div>
            <div className="mt-1 text-lg font-bold text-white">{profileName}</div>
          </div>
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white" aria-label={mobileLabels.close} onClick={() => setIsOpen(false)}>
            <X size={19} />
          </button>
        </div>

        <nav className="grid gap-2">
          {navItems.map((item) => {
            const page = item.href.replace('#', '') as PageId
            return (
              <a key={item.href} className={`rounded-2xl border px-4 py-3 font-semibold transition ${activePage === page ? 'border-[#E7AD43]/[0.35] bg-[#E7AD43]/[0.12] text-white' : 'border-white/[0.08] bg-white/[0.03] text-white/[0.78]'}`} href={item.href} onClick={() => handleNavigate(page)}>
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="mt-5 flex gap-2">
          {languageOptions.map(({ code, label }) => (
            <button key={code} type="button" className={`h-10 flex-1 rounded-full text-xs font-bold uppercase tracking-[0.12em] ${language === code ? 'bg-[#E7AD43] text-[#120b05]' : 'bg-white/[0.04] text-white/70'}`} onClick={() => onLanguageChange(code)}>
              {label}
            </button>
          ))}
        </div>

        <a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E7AD43] to-[#FFD06A] px-5 py-3 font-bold text-[#120b05]" href="#contact" onClick={() => handleNavigate('contact')}>
          {ctaLabel}
          <ArrowRight size={16} />
        </a>

        <div className="mt-5 flex items-center justify-center gap-3">
          <a className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7AD43]/[0.28] bg-white/[0.025] text-[#E7AD43]" href={socialLinks.telegram} target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={17} /></a>
          <a className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7AD43]/[0.28] bg-white/[0.025] text-[#E7AD43]" href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
          <a className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7AD43]/[0.28] bg-white/[0.025] text-[#E7AD43]" href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
          <a className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7AD43]/[0.28] bg-white/[0.025] text-[#E7AD43]" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7AD43]/[0.28] bg-white/[0.025] text-[#E7AD43]" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
        </div>
      </aside>
    </>
  )
}
