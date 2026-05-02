import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { AppLanguage } from '../i18n'

type PageId = 'home' | 'about' | 'projects' | 'services' | 'contact'

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
  ctaLabel: string
  mobileLabels: {
    title: string
    open: string
    close: string
  }
}

export default function Navbar({ logo, profileName, navItems, activePage, language, onLanguageChange, ctaLabel, mobileLabels }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()

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

  return (
    <>
      <motion.header
        className={`luxury-navbar sticky top-0 z-50 border-b backdrop-blur-2xl transition-[background,border-color,box-shadow] duration-500 ${
          isScrolled
            ? 'border-[#F5B971]/25 bg-[#05070d]/82 shadow-[0_18px_70px_-52px_rgba(245,185,113,0.58)]'
            : 'border-white/[0.06] bg-[#05070d]/70 shadow-[0_18px_70px_-52px_rgba(245,194,122,0.35)]'
        }`}
        initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex min-h-[5.2rem] w-full max-w-none items-center justify-between px-5 sm:px-6 lg:px-10 xl:px-12">
          <a className="group flex items-center gap-3" href="#home" aria-label={profileName}>
            <motion.img
              className="ml-6 h-16 w-16 object-contain brightness-125 sepia saturate-150 drop-shadow-[0_10px_22px_rgba(245,194,122,0.28)]"
              src={logo}
              alt={`${profileName} logo`}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.06, y: -2 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            />
          </a>

          <nav className="hidden items-center gap-14 text-[1rem] font-bold text-white/[0.86] lg:flex">
            {navItems.map((item) => {
              const page = item.href.replace('#', '') as PageId
              return (
                <motion.a
                  key={item.href}
                  className={`group relative py-2 transition duration-300 hover:text-white ${activePage === page ? 'text-white' : ''}`}
                  href={item.href}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-[#F5B971] via-[#ffdca0] to-[#EAA14A] shadow-[0_0_14px_rgba(245,185,113,0.45)] transition-transform duration-500 ease-out group-hover:scale-x-100 ${activePage === page ? 'scale-x-100' : 'scale-x-0'}`} />
                </motion.a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center gap-2">
              {(['uz', 'ru', 'en'] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`h-10 min-w-10 rounded-full text-[0.78rem] font-extrabold uppercase tracking-[0.1em] transition ${language === code ? 'bg-gradient-to-br from-[#F5B971] to-[#EAA14A] text-[#120b05] shadow-[0_0_22px_rgba(245,185,113,0.34)]' : 'text-white/[0.72] hover:text-white'}`}
                  onClick={() => onLanguageChange(code)}
                >
                  {code}
                </button>
              ))}
            </div>
            <motion.a
              className="group inline-flex min-h-[2.75rem] items-center gap-2.5 rounded-full border border-[#EAA14A]/[0.42] bg-[#F5B971]/[0.045] px-7 text-[0.88rem] font-extrabold text-white shadow-[0_20px_56px_-34px_rgba(245,185,113,0.72)] transition hover:border-[#F5B971]/70 hover:bg-[#F5B971]/10"
              href="#contact"
              whileHover={shouldReduceMotion ? undefined : { y: -3, boxShadow: '0 0 28px rgba(245,185,113,0.28)' }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              {ctaLabel}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </motion.a>
          </div>

          <button type="button" className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-[#f5c27a]/20 bg-white/[0.04] text-white lg:hidden" aria-label={isOpen ? mobileLabels.close : mobileLabels.open} aria-expanded={isOpen} onClick={() => setIsOpen((current) => !current)}>
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </motion.header>

      <div className={`fixed inset-0 z-40 bg-black/[0.55] backdrop-blur-sm transition lg:hidden ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setIsOpen(false)} />
      <aside className={`fixed right-3 top-3 z-50 w-[min(23rem,calc(100vw-1.5rem))] rounded-3xl border border-[#f5c27a]/[0.18] bg-[#080b12]/95 p-5 shadow-[0_30px_90px_-38px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition lg:hidden ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[calc(100%+1rem)] opacity-0'}`}>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-[#f5c27a]">{mobileLabels.title}</div>
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
              <a key={item.href} className={`rounded-2xl border px-4 py-3 font-semibold transition ${activePage === page ? 'border-[#f5c27a]/[0.35] bg-[#f5c27a]/[0.12] text-white' : 'border-white/[0.08] bg-white/[0.03] text-white/[0.78]'}`} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="mt-5 flex gap-2">
          {(['uz', 'ru', 'en'] as const).map((code) => (
            <button key={code} type="button" className={`h-10 flex-1 rounded-full text-xs font-bold uppercase tracking-[0.12em] ${language === code ? 'bg-[#f5c27a] text-[#120b05]' : 'bg-white/[0.04] text-white/70'}`} onClick={() => onLanguageChange(code)}>
              {code}
            </button>
          ))}
        </div>

        <a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f5c27a] to-[#b87333] px-5 py-3 font-bold text-[#120b05]" href="#contact" onClick={() => setIsOpen(false)}>
          {ctaLabel}
          <ArrowRight size={16} />
        </a>
      </aside>
    </>
  )
}
