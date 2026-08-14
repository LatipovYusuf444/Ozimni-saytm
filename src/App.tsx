import { useEffect, useState, type FormEvent } from 'react'
import { useReducedMotion } from 'framer-motion'
import brandLogo from './assets/logo-yl-mark.png'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'
import { aboutPageContent, footerContent, formspreeEndpoint, getPageFromHash, profile, type PageId } from './content/siteContent'
import { translations, type AppLanguage, type ContactSubmitState, type ProjectCategory } from './i18n'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import TechnologiesPage from './pages/TechnologiesPage'
import './App.css'

function App() {
  
    const [contactState, setContactState] = useState<ContactSubmitState>('idle')
    const [isSending, setIsSending] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [language, setLanguage] = useState<AppLanguage>(() => {
      const savedLanguage = window.localStorage.getItem('app-language')
      return savedLanguage === 'uz' || savedLanguage === 'ru' || savedLanguage === 'en' ? savedLanguage : 'ru'
    })
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
    const [activePage, setActivePage] = useState<PageId>(() => getPageFromHash())
    const reduceMotion = Boolean(useReducedMotion())
  
    const t = translations[language]
    const homeLabel = language === 'uz' ? 'Bosh sahifa' : language === 'ru' ? 'Главная' : 'Home'
    const navItems = [
      { label: homeLabel, href: '#home' },
      { label: t.nav.projects, href: '#projects' },
      { label: t.nav.services, href: '#services' },
      { label: t.nav.technologies, href: '#technologies' },
      { label: t.nav.about, href: '#about' },
      { label: t.nav.contact, href: '#contact' },
    ]
    const categories = (Object.keys(t.projects.categories) as ProjectCategory[]).map((key) => ({ key, label: t.projects.categories[key] }))
    const filteredProjects = activeCategory === 'all' ? t.projects.items : t.projects.items.filter((project) => project.category === activeCategory)
    const visibleProjects = filteredProjects
    const heroStats = t.metrics
    const heroTitle = t.hero.title
    const heroDescription = t.hero.description

    const handleNavigate = (page: PageId) => {
      setActivePage(page)
      window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
    }
  
    useEffect(() => {
      if (!profile.analyticsId) return
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${profile.analyticsId}`
      document.head.appendChild(script)
      const inlineScript = document.createElement('script')
      inlineScript.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${profile.analyticsId}');`
      document.head.appendChild(inlineScript)
      return () => {
        script.remove()
        inlineScript.remove()
      }
    }, [])
  
    useEffect(() => {
      document.documentElement.lang = language
      window.localStorage.setItem('app-language', language)
    }, [language])
  
    useEffect(() => {
      const updatePage = () => {
        setActivePage(getPageFromHash())
        window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
      }
      updatePage()
      window.addEventListener('hashchange', updatePage)
      return () => window.removeEventListener('hashchange', updatePage)
    }, [])
  
    useEffect(() => {
      setActiveCategory('all')
      setContactState('idle')
      setIsSubscribed(false)
    }, [language])
  
    const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (!formspreeEndpoint) {
        setContactState('unconfigured')
        return
      }
      setIsSending(true)
      setContactState('idle')
      const form = event.currentTarget
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        })
        if (!response.ok) throw new Error('Form submit failed')
        form.reset()
        setContactState('success')
      } catch {
        setContactState('error')
      } finally {
        setIsSending(false)
      }
    }
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

  return (
    <div className="site-shell min-h-screen text-slate-100">
      <Navbar
        logo={brandLogo}
        profileName={profile.name}
        navItems={navItems}
        activePage={activePage}
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={handleNavigate}
        ctaLabel={t.nav.cta}
        mobileLabels={t.mobileMenu}
        socialLinks={{ github: profile.github, telegram: profile.telegram, instagram: profile.instagram, facebook: profile.facebook, linkedin: profile.linkedin }}
      />
      <main id={activePage} className="relative z-10">
        {activePage === 'home' ? (
          <HomePage
            pill={t.hero.pill}
            title={heroTitle}
            highlight={t.hero.highlight}
            description={heroDescription}
            primaryAction={t.hero.viewProjects}
            secondaryAction={t.hero.contact}
            stats={heroStats}
            homeServices={t.homeServices}
            whyChooseUs={t.whyChooseUs}
          />
        ) : null}

        {activePage === 'about' ? <AboutPage aboutPage={aboutPageContent[language]} /> : null}

        {activePage === 'projects' ? (
          <ProjectsPage
            projects={t.projects}
            categories={categories}
            activeCategory={activeCategory}
            visibleProjects={visibleProjects}
            onCategoryChange={setActiveCategory}
            stats={heroStats}
          />
        ) : null}

        {activePage === 'services' ? <ServicesPage services={t.services} /> : null}

        {activePage === 'technologies' ? <TechnologiesPage technologies={t.technologies} /> : null}

        {activePage === 'contact' ? (
          <ContactPage
            contact={t.contact}
            contactState={contactState}
            isSending={isSending}
            isSubscribed={isSubscribed}
            onContactSubmit={handleContactSubmit}
            onSubscribe={() => setIsSubscribed(true)}
          />
        ) : null}
      </main>
      <SiteFooter
        footer={footerContent[language]}
        footerDescription={t.footer.description}
        rights={t.footer.rights}
        navItems={navItems}
        reduceMotion={reduceMotion}
        onScrollToTop={scrollToTop}
      />
    </div>
  )
}

export default App
