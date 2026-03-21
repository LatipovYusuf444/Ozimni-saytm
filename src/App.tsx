import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Github,
  Globe,
  Instagram,
  LayoutDashboard,
  Linkedin,
  Mail,
  Menu,
  MonitorSmartphone,
  Paintbrush,
  Phone,
  Send,
  Sparkles,
  Star,
  UserRound,
  Wrench,
  X,
} from 'lucide-react'
import * as THREE from 'three'
import erpImage from './assets/ERP.png'
import landingPageImage from './assets/LandingPage.png'
import brandLogo from './assets/logo.bgyoq.png'
import notebookCodeImage from './assets/noutbuk.code.png'
import tripzyyImage from './assets/Tripzyy.web.png'
import './App.css'

type ProjectCategory = 'Barchasi' | 'Landing Page' | 'ERP UI' | 'Web Sayt'
type ContactSubmitState = 'idle' | 'success' | 'error' | 'unconfigured'
type AppLanguage = 'uz' | 'ru' | 'en'

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

const profile = {
  name: 'Latipov Yusuf',
  role: 'Frontend Developer',
  age: '22 yosh',
  experience: '1 yil tajriba',
  tagline:
    'Men premium ko‘rinishga ega, tez ishlaydigan va foydalanuvchi uchun qulay frontend sahifalar yarataman.',
  shortBio:
    'Frontend yo‘nalishida ERP System, Landing Page, web-sayt va turli biznes loyihalar ustida ishlaganman. Asosiy maqsadim dizayn va funksionallikni bitta kuchli interfeysga birlashtirish.',
  email: 'Ylatipov007@gmail.com',
  phone: '+998955595445',
  location: 'O‘zbekiston',
  logo: 'LY',
  analyticsId: import.meta.env.VITE_GA_ID,
  github: 'https://github.com/LatipovYusuf444',
  telegram: 'https://t.me/ysvfl444',
  instagram: 'https://www.instagram.com/ysvf.l444?igsh=MTRxb3VmZXQ5MzVzbA==',
  currentCompany: 'Height Company',
  currentCompanyUrl: 'https://height-company.uz/',
}

const navLabels: Record<AppLanguage, { about: string; projects: string; services: string; contact: string; cta: string }> = {
  uz: {
    about: 'Men haqimda',
    projects: 'Loyihalar',
    services: 'Xizmatlar',
    contact: 'Aloqa',
    cta: 'Men bilan bog‘laning',
  },
  ru: {
    about: 'Обо мне',
    projects: 'Проекты',
    services: 'Услуги',
    contact: 'Контакты',
    cta: 'Связаться',
  },
  en: {
    about: 'About',
    projects: 'Projects',
    services: 'Services',
    contact: 'Contact',
    cta: 'Contact me',
  },
}

const navItems = (language: AppLanguage) => [
  { label: navLabels[language].about, href: '#about' },
  { label: navLabels[language].projects, href: '#projects' },
  { label: navLabels[language].services, href: '#services' },
  { label: navLabels[language].contact, href: '#contact' },
]

const metrics = [
  { value: profile.age, label: 'Yoshim' },
  { value: profile.experience, label: 'Ish tajribam' },
  { value: 'ERP / Landing / Web', label: 'Asosiy yo‘nalishlar' },
]

const heroSignals = [
  { label: 'Interfeys tizimlari', value: 'ERP dashboard, table, filter va form oqimlari' },
  { label: 'Interaktivlik', value: 'Hover, reveal, transition va foydalanuvchi harakatiga mos animatsiyalar' },
  { label: 'Asosiy fokus', value: 'Tez ishlaydigan, real biznesga mos frontend' },
]

const aboutHighlights = [
  { title: 'Tizimli yondashuv', text: 'Har bir sahifani layout, oqim va keyingi kengayish nuqtai nazaridan yig?aman.' },
  { title: 'Interfeys sifati', text: 'Spacing, hierarchy va motion orqali mahsulotni aniq va ishonchli ko?rsataman.' },
  { title: 'Toza implementatsiya', text: 'Responsive layout va aniq component structure bilan real ishlaydigan natija qilaman.' },
]

const services = [
  {
    title: 'Landing Page Yaratish',
    description:
      'Brendni kuchli ko‘rsatadigan, konversiyaga ishlaydigan va premium ko‘rinishga ega landing page lar tayyorlayman.',
    icon: LayoutDashboard,
  },
  {
    title: 'ERP System Frontend',
    description:
      'Murakkab dashboard, table, form, filter va ichki tizim interfeyslarini tartibli va qulay holatda ishlab chiqaman.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Web Sayt Interfeyslari',
    description:
      'Korporativ sayt, portfolio, product page va xizmat sahifalarini zamonaviy uslubda quraman.',
    icon: Globe,
  },
  {
    title: 'UI/UX va Animatsiya',
    description:
      'Hover, reveal, transition va micro interaction lar bilan sahifaga jon va premium hissiyot olib kiraman.',
    icon: Sparkles,
  },
]

const techStack = [
  { label: 'React', icon: Code2 },
  { label: 'TypeScript', icon: BadgeCheck },
  { label: 'Tailwind CSS', icon: Paintbrush },
  { label: 'Framer Motion', icon: Wrench },
  { label: 'UI Animation', icon: Star },
  { label: 'Responsive UI', icon: MonitorSmartphone },
]

const projects = [
  {
    title: 'ERP System UI',
    category: 'ERP UI' as ProjectCategory,
    description:
      'Ichki tizim uchun dashboard, jadval, form va boshqaruv modullaridan iborat frontend interfeyslar.',
    tech: ['React', 'TypeScript', 'Dashboard UI'],
    image: 'ERP interfeys, analitika bloklari va boshqaruv paneli',
    imageSrc: erpImage,
    github: 'https://github.com/LatipovYusuf444',
    live: 'https://github.com/LatipovYusuf444',
  },
  {
    title: 'Mirano Landing Page',
    category: 'Landing Page' as ProjectCategory,
    description:
      'Brend, xizmat va portfolio ni premium ko‘rinishda taqdim etuvchi zamonaviy marketing sahifasi.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    image: 'Luxury landing page, tipografiya va yorqin CTA bloklari',
    imageSrc: landingPageImage,
    github: 'https://github.com/LatipovYusuf444',
    live: 'https://mirano-text.vercel.app/',
  },
  {
    title: 'Tripzyy Web Sayt',
    category: 'Web Sayt' as ProjectCategory,
    description:
      'Kompaniya haqida, xizmatlar, portfolio va aloqa bo‘limlariga ega professional korporativ sayt.',
    tech: ['Frontend', 'Responsive', 'SEO'],
    image: 'Korporativ sahifa, kontent bloklari va premium fon',
    imageSrc: tripzyyImage,
    github: 'https://github.com/LatipovYusuf444',
    live: 'https://tripzyy.vercel.app/',
  },
  {
    title: 'Service Company Website',
    category: 'Web Sayt' as ProjectCategory,
    description:
      'Xizmat ko‘rsatuvchi biznes uchun ishonch uyg‘otadigan va mobilga mos sayt interfeysi.',
    tech: ['Website UI', 'Tailwind', 'Responsive'],
    image: 'Xizmat sahifasi, CTA bloklar va toza layout',
    github: 'https://github.com/LatipovYusuf444',
    live: 'https://example.com',
  },
]


const categories: ProjectCategory[] = ['Barchasi', 'Landing Page', 'ERP UI', 'Web Sayt']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function BackgroundNetwork({ pointer }: { pointer: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)

  const network = useMemo(() => {
    const nodes: [number, number, number][] = []
    const nodePositions: number[] = []
    const nodeColors: number[] = []
    const linePositions: number[] = []
    const lineColors: number[] = []
    const nodeCount = 28

    for (let index = 0; index < nodeCount; index += 1) {
      const x = (Math.random() - 0.5) * 16
      const y = (Math.random() - 0.5) * 8.6
      const z = (Math.random() - 0.5) * 6
      nodes.push([x, y, z])
      nodePositions.push(x, y, z)

      const tone = index % 5 === 0
        ? new THREE.Color('#f6c36a')
        : index % 3 === 0
          ? new THREE.Color('#8ed8ff')
          : new THREE.Color('#d9ecff')

      nodeColors.push(tone.r, tone.g, tone.b)
    }

    for (let source = 0; source < nodes.length; source += 1) {
      for (let target = source + 1; target < nodes.length; target += 1) {
        const a = nodes[source]
        const b = nodes[target]
        const distance = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])

        if (distance > 3.7) continue

        linePositions.push(a[0], a[1], a[2], b[0], b[1], b[2])

        const strength = THREE.MathUtils.clamp(1 - distance / 3.7, 0.2, 1)
        const colorA = source % 4 === 0 ? new THREE.Color('#f6c36a') : new THREE.Color('#88d8ff')
        const colorB = target % 5 === 0 ? new THREE.Color('#ffd18b') : new THREE.Color('#dbeafe')

        lineColors.push(
          colorA.r * strength,
          colorA.g * strength,
          colorA.b * strength,
          colorB.r * strength,
          colorB.g * strength,
          colorB.b * strength,
        )
      }
    }

    return {
      nodePositions: new Float32Array(nodePositions),
      nodeColors: new Float32Array(nodeColors),
      linePositions: new Float32Array(linePositions),
      lineColors: new Float32Array(lineColors),
      glowNodes: nodes.filter((_, index) => index % 6 === 0),
    }
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return

    const targetX = THREE.MathUtils.lerp(-0.16, 0.16, pointer.y / 100)
    const targetY = THREE.MathUtils.lerp(-0.28, 0.28, pointer.x / 100)

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.04)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY + state.clock.elapsedTime * 0.02, 0.04)
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
  })

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {[
        { position: [-5.8, 0.2, -0.8] as [number, number, number], scale: 0.8, opacity: 0.24 },
        { position: [4.9, -0.15, 0.3] as [number, number, number], scale: 0.9, opacity: 0.34 },
      ].map((layer, layerIndex) => (
        <group key={layerIndex} position={layer.position} scale={layer.scale}>
          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[network.linePositions, 3]}
                count={network.linePositions.length / 3}
                itemSize={3}
              />
              <bufferAttribute
                attach="attributes-color"
                args={[network.lineColors, 3]}
                count={network.lineColors.length / 3}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial vertexColors transparent opacity={layer.opacity} blending={THREE.AdditiveBlending} />
          </lineSegments>

          <points>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[network.nodePositions, 3]}
                count={network.nodePositions.length / 3}
                itemSize={3}
              />
              <bufferAttribute
                attach="attributes-color"
                args={[network.nodeColors, 3]}
                count={network.nodeColors.length / 3}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial
              size={0.12}
              sizeAttenuation
              transparent
              opacity={layer.opacity + 0.2}
              depthWrite={false}
              vertexColors
              blending={THREE.AdditiveBlending}
            />
          </points>
        </group>
      ))}

      {network.glowNodes.map((node, index) => (
        <mesh key={`${node.join('-')}-${index}`} position={[node[0] * 1.2, node[1], node[2]]} scale={index % 2 === 0 ? 0.24 : 0.16}>
          <sphereGeometry args={[1, 18, 18]} />
          <meshBasicMaterial
            color={index % 2 === 0 ? '#ffd089' : '#8fdcff'}
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  )
}

function HeroCanvas({ pointer }: { pointer: { x: number; y: number } }) {
  return (
    <div className="hero-canvas">
      <Canvas camera={{ position: [0, 0, 8], fov: 48 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.45} />
        <pointLight position={[4, 2, 4]} intensity={2.2} color="#8bd4ff" />
        <pointLight position={[-3, -2, 3]} intensity={1.3} color="#ffc56a" />
        <BackgroundNetwork pointer={pointer} />
      </Canvas>
    </div>
  )
}

function Button({
  href,
  children,
  secondary = false,
}: {
  href: string
  children: ReactNode
  secondary?: boolean
}) {
  return <a className={secondary ? 'button button-secondary' : 'button button-primary'} href={href}>{children}</a>
}

function App() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Barchasi')
  const [contactState, setContactState] = useState<ContactSubmitState>('idle')
  const [isSending, setIsSending] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [language, setLanguage] = useState<AppLanguage>('uz')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [pointer, setPointer] = useState({ x: 50, y: 20 })

  useEffect(() => {
    if (!profile.analyticsId) return
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${profile.analyticsId}`
    document.head.appendChild(script)
    const inlineScript = document.createElement('script')
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${profile.analyticsId}');
    `
    document.head.appendChild(inlineScript)
    return () => {
      script.remove()
      inlineScript.remove()
    }
  }, [])

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100
      setPointer({ x, y })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  useEffect(() => {
    let ticking = false

    const updateScrollState = () => {
      const nextScrolled = window.scrollY > 32
      setIsScrolled((current) => (current === nextScrolled ? current : nextScrolled))
      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateScrollState)
    }

    updateScrollState()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  const filteredProjects =
    activeCategory === 'Barchasi'
      ? projects
      : projects.filter((project) => project.category === activeCategory)
  const visibleProjects = filteredProjects.slice(0, 3)

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formspreeEndpoint) {
      setContactState('unconfigured')
      return
    }

    setIsSending(true)
    setContactState('idle')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form submit failed')
      }

      form.reset()
      setContactState('success')
    } catch {
      setContactState('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="site-shell min-h-screen text-slate-100">
      <HeroCanvas pointer={pointer} />
      <div
        className="pointer-glow"
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
        }}
      />
      <header className={`site-header sticky top-0 z-50 ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="mx-auto max-w-  px-4 py-3 lg:px-8">
          <div className={`site-header__inner flex items-center justify-between ${isScrolled ? 'site-header__inner--scrolled' : ''}`}>
            <a className="site-brand flex items-center" href="#home" aria-label="Bosh sahifaga o'tish">
              <div className={`site-brand__logo flex items-center justify-center ${isScrolled ? 'site-brand__logo--scrolled' : ''}`}>
                <img className="site-brand__logo-image" src={brandLogo} alt={`${profile.name} logo`} />
              </div>
            </a>
            <div className="site-header__right hidden lg:flex lg:items-center">
              <nav className={`site-nav items-center font-medium text-slate-300 lg:flex ${isScrolled ? 'site-nav--scrolled' : ''}`}>
                {navItems(language).map((item) => (
                  <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>
                ))}
              </nav>
              <div className={`language-switcher ${isScrolled ? 'language-switcher--scrolled' : ''}`}>
                {(['uz', 'ru', 'en'] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    className={`language-switcher__button ${language === code ? 'language-switcher__button--active' : ''}`}
                    onClick={() => setLanguage(code)}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <a className={`site-header__cta inline-flex items-center gap-2 rounded-full border border-sky-200/12 bg-[rgba(219,234,254,0.08)] font-semibold text-slate-50 transition backdrop-blur-xl hover:bg-[rgba(219,234,254,0.14)] ${isScrolled ? 'site-header__cta--scrolled' : ''}`} href="#contact">
                {navLabels[language].cta}
                <ArrowRight size={16} />
              </a>
            </div>
            <button
              type="button"
              className="mobile-menu-button lg:hidden"
              aria-label={isMobileMenuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'mobile-menu-overlay--open' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
      <aside className={`mobile-menu-drawer ${isMobileMenuOpen ? 'mobile-menu-drawer--open' : ''}`}>
        <div className="mobile-menu-drawer__header">
          <div className="mobile-menu-drawer__brand">
            <div className="site-brand__logo site-brand__logo--drawer flex items-center justify-center">
              <img className="site-brand__logo-image" src={brandLogo} alt={`${profile.name} logo`} />
            </div>
            <div>
              <p className="mobile-menu-drawer__eyebrow">Navigation</p>
              <p className="mobile-menu-drawer__title">{profile.name}</p>
            </div>
          </div>
          <button type="button" className="mobile-menu-close" aria-label="Menyuni yopish" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="mobile-menu-nav">
          {navItems(language).map((item) => (
            <a key={item.href} className="mobile-menu-nav__link" href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-language">
          {(['uz', 'ru', 'en'] as const).map((code) => (
            <button
              key={code}
              type="button"
              className={`language-switcher__button ${language === code ? 'language-switcher__button--active' : ''}`}
              onClick={() => setLanguage(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <a className="mobile-menu-cta" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
          {navLabels[language].cta}
          <ArrowRight size={16} />
        </a>
      </aside>
      <main id="home" className="relative z-10">
        <motion.section className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-24 lg:pt-20" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="hero-pill">
              <Sparkles size={16} className="text-sky-300" />
              ERP, landing page va web platformalar uchun product frontend yechimlar
            </div>
            <div className="space-y-7">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">{profile.role}</p>
                <h1 className="max-w-4xl text-[2.45rem] font-semibold leading-[0.96] tracking-[-0.05em] text-slate-50 sm:text-[3.3rem] lg:text-[4.5rem]">Real biznes uchun toza, <span className="hero-title-accent">tizimli va qimmat ko‘rinadigan</span> frontend interfeyslar.</h1>
                <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-300 sm:text-[1.08rem]">ERP panel, landing page va service web-saytlar uchun dizayn, tezlik va foydalanuvchi oqimini bitta kuchli frontend tajribaga birlashtiraman.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="#projects">Loyihalarni ko‘rish<ArrowRight size={18} /></Button>
              <Button href="#contact" secondary>Bog‘lanish</Button>
            </div>
            <div className="hero-marquee">
              <span>Frontend architecture</span>
              <span>ERP workflows</span>
              <span>Animation systems</span>
              <span>Responsive UI</span>
              <span>Clean delivery</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="hero-stat-card">
                  <p className="text-[1.45rem] font-semibold tracking-[-0.03em] text-slate-50 sm:text-[1.8rem]">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-36 w-36 rounded-full bg-blue-300/18 blur-3xl" />
            <div className="hero-profile-shell">
              <div className="flex items-center justify-between text-sm text-stone-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"><UserRound size={14} />Shaxsiy profil</span>
                <span>{profile.location}</span>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="hero-profile-main">
                    <p className="hero-profile-label">Positioning</p>
                    <h2 className="text-[1.95rem] font-semibold leading-[1.02] tracking-[-0.04em]">{profile.name}</h2>
                    <p className="max-w-lg text-[0.98rem] leading-8 text-stone-300">{profile.shortBio}</p>
                  </div>
                  <div className="hero-availability-card">
                    <span className="hero-availability-dot" />
                    <p className="hero-profile-label">Status</p>
                    <h3 className="text-lg font-semibold text-slate-50">Yangi loyiha uchun ochiq</h3>
                    <p className="text-sm leading-6 text-slate-300">Frontend implementation, redesign va premium landing ishlari.</p>
                  </div>
              </div>
              <div className="mt-6 grid gap-3">
                {heroSignals.map((signal, index) => (
                  <motion.div
                    key={signal.label}
                    className="hero-signal-row"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}
                  >
                    <span className="hero-signal-index">0{index + 1}</span>
                    <div>
                      <p className="hero-profile-label">{signal.label}</p>
                      <p className="text-sm leading-6 text-slate-200">{signal.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-7 hero-company-card">
                <div>
                  <p className="hero-profile-label">Hozirgi kompaniyam</p>
                  <h3 className="text-[1.05rem] font-semibold text-slate-50">{profile.currentCompany}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Hozir shu kompaniya loyihalari ustida ishlayapman. Ularning saytini ko‘rish uchun quyidagi button ishlaydi.</p>
                </div>
                <a
                  className="hero-company-link"
                  href={profile.currentCompanyUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe size={16} />
                  Ko‘rish
                </a>
              </div>
              <div className="mt-8 grid gap-4 text-sm text-stone-300 sm:grid-cols-2">
                <a className="contact-chip" href={`mailto:${profile.email}`}><Mail size={16} />{profile.email}</a>
                <a className="contact-chip" href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={16} />{profile.phone}</a>
              </div>
            </div>
          </motion.div>
        </motion.section>
        <section id="about" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="about-shell">
            <div className="about-grid">
              <div className="space-y-6">
                <div>
                  <p className="section-eyebrow">Men haqimda</p>
                  <h2 className="section-title max-w-4xl">Frontend’da tartibli arxitektura, aniq interfeys va real ishlaydigan experience ustida ishlayman.</h2>
                </div>
                <p className="max-w-2xl text-[1rem] leading-8 text-slate-300 sm:text-[1.04rem]">
                  ERP System, landing page va biznes web-saytlar ustida ishlab, men uchun eng muhim narsa bitta bo‘lib qoldi: foydalanuvchi ko‘radigan har bir blok aniq, tez va ishonch uyg‘otadigan bo‘lishi kerak.
                </p>
                <div className="about-media-card">
                  <div className="about-media-card__image">
                    <span className="about-media-card__image-badge">Frontend Workspace</span>
                    <img src={notebookCodeImage} alt="Kod yozilayotgan noutbuk workspace preview" />
                  </div>
                  <div className="about-media-card__content">
                    <p className="about-media-card__eyebrow">Ish jarayoni</p>
                    <h3 className="about-media-card__title">Kod, dizayn va implementatsiya bitta oqimda ishlaydi.</h3>
                    <p className="about-media-card__text">UI build, component structure va foydalanuvchi oqimini parallel olib borib, sahifani faqat chiroyli emas, real ishlaydigan holatda yig‘aman.</p>
                    <div className="about-media-card__chips">
                      <span>UI Build</span>
                      <span>Code Review</span>
                      <span>Real Delivery</span>
                    </div>
                  </div>
                </div>
                <div className="about-quote">
                  <p className="about-quote-mark">"</p>
                  <p className="text-[1.02rem] leading-8 text-slate-200">Ortiqcha bezak emas, toza hierarchy, kuchli layout va foydalanuvchi uchun tushunarli oqim men uchun asosiy standart.</p>
                </div>
              </div>
              <div className="grid gap-4">
                {aboutHighlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="about-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                  >
                    <span className="about-card-index">0{index + 1}</span>
                    <h3 className="mt-4 text-[1.1rem] font-semibold text-slate-50">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-eyebrow">Loyihalar</p>
              <h2 className="section-title">Asosiy ishlagan yo‘nalishlarim.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button key={category} type="button" className={`filter-pill ${activeCategory === category ? 'filter-pill-active' : ''}`} onClick={() => setActiveCategory(category)}>{category}</button>
              ))}
            </div>
          </div>
          <motion.div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
            {visibleProjects.map((project) => (
              <motion.article key={project.title} variants={itemVariants} className="project-card group">
                <a
                  className="project-visual"
                  aria-label={project.image}
                  href={project.live}
                  role="img"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-badge">{project.category}</span>
                  {'imageSrc' in project ? (
                    <>
                      <img className="project-image" src={project.imageSrc} alt={project.title} />
                      <div className="project-image-overlay" />
                    </>
                  ) : (
                    <>
                      <div className="project-lines" />
                      <div className="project-glow" />
                    </>
                  )}
                </a>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-slate-50">{project.title}</h3>
                    <span className="text-xs uppercase tracking-[0.24em] text-stone-400">Loyiha</span>
                  </div>
                  <p className="leading-7 text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="tag-chip">{item}</span>)}</div>
                  <div className="flex gap-4 pt-2">
                    <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100" href={project.github}><Github size={16} />GitHub</a>
                    <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100" href={project.live}><Globe size={16} />Live Demo</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
        <section id="services" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-eyebrow">Xizmatlar va ko‘nikmalar</p>
              <h2 className="section-title">Qisqa va aniq xizmatlar.</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">Landing page, ERP UI va biznes web-saytlar uchun frontend yechimlar.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {techStack.map((item) => {
                  const Icon = item.icon
                  return <div key={item.label} className="stack-pill"><Icon size={16} />{item.label}</div>
                })}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <motion.div key={service.title} className="service-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55 }}>
                    <div className="service-icon"><Icon size={22} /></div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-50">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="glass-panel grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div>
              <p className="section-eyebrow">Aloqa</p>
              <h2 className="section-title">Loyiha bo‘lsa, yozing.</h2>
              <p className="mt-5 max-w-lg leading-7 text-slate-300">Frontend, ERP UI yoki landing page kerak bo‘lsa, men bilan bog‘lanishingiz mumkin.</p>
              <div className="mt-8 space-y-3 text-slate-300">
                <a className="contact-row" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a>
                <a className="contact-row" href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={18} />{profile.phone}</a>
                <a className="contact-row" href="https://linkedin.com"><Linkedin size={18} />LinkedIn</a>
                <a className="contact-row" href={profile.instagram} target="_blank" rel="noreferrer"><Instagram size={18} />Instagram</a>
                <a className="contact-row" href={profile.github}><Github size={18} />GitHub</a>
                <a className="contact-row" href={profile.telegram}><Send size={18} />Telegram</a>
              </div>
            </div>
            <div className="grid gap-6">
              <form className="grid gap-4" onSubmit={handleContactSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="field"><span>Ism</span><input type="text" name="name" placeholder="Ismingiz" required /></label>
                  <label className="field"><span>Email</span><input type="email" name="email" placeholder="Email manzilingiz" required /></label>
                </div>
                <label className="field"><span>Loyiha turi</span><input type="text" name="type" placeholder="ERP, landing page, web-sayt..." /></label>
                <label className="field"><span>Xabar</span><textarea name="message" rows={5} placeholder="Qanday loyiha kerakligini yozing." required /></label>
                <button className="button button-primary w-full justify-center sm:w-fit" type="submit" disabled={isSending}>
                  {isSending ? 'Yuborilmoqda...' : 'Xabar yuborish'}
                  <Send size={16} />
                </button>
                {contactState === 'success' ? <p className="rounded-2xl border border-emerald-700/15 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">Rahmat. Xabar yuborildi va emailga tushadi.</p> : null}
                {contactState === 'error' ? <p className="rounded-2xl border border-rose-700/15 bg-rose-50 px-4 py-3 text-sm text-rose-800">Xabar yuborishda xatolik bo‘ldi. Qayta urinib ko‘ring.</p> : null}
                {contactState === 'unconfigured' ? <p className="rounded-2xl border border-amber-700/15 bg-amber-50 px-4 py-3 text-sm text-amber-800">Form endpoint hali ulanmagan. `.env` ichiga `VITE_FORMSPREE_ENDPOINT` qo‘shish kerak.</p> : null}
              </form>
              <div className="rounded-[1.5rem] bg-[#020817d9] p-6 text-stone-50">
                <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Tez aloqa</p>
                <h3 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.03em]">Frontend loyiha uchun tayyorman.</h3>
                <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); setIsSubscribed(true) }}>
                  <input className="newsletter-input" type="email" placeholder="Email manzilingiz" required />
                  <button className="button button-primary justify-center border-0" type="submit">Yuborish</button>
                </form>
                {isSubscribed ? <p className="mt-4 text-sm text-emerald-300">Aloqa UI ichida tayyor. Keyin email service bilan ulash mumkin.</p> : <p className="mt-4 text-sm text-stone-400">GitHub va Telegram orqali ham tez bog‘lanish uchun tayyor blok.</p>}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-[#08101dcc] backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_auto_auto] lg:px-8">
          <div>
            <p className="text-[1.35rem] font-semibold tracking-[-0.02em] text-slate-50">{profile.name}</p>
            <p className="mt-3 max-w-xl text-slate-300">ERP System UI, landing page, web-sayt va premium frontend tajribalar yaratishga ixtisoslashgan portfolio sahifa.</p>
          </div>
          <div className="space-y-3">{navItems(language).map((item) => <a key={item.href} className="block text-slate-300 transition hover:text-white" href={item.href}>{item.label}</a>)}</div>
          <div className="space-y-3 text-slate-300">
            <a className="block transition hover:text-white" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="block transition hover:text-white" href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
            <a className="block transition hover:text-white" href={profile.github}>GitHub</a>
            <a className="block transition hover:text-white" href={profile.telegram}>Telegram</a>
            <p>© 2026 {profile.name}. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
