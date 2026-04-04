import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Send,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react'
import erpImage from './assets/ERP.png'
import brandLogo from './assets/logo.bgyoq.png'
import notebookCodeImage from './assets/noutbuk.code.png'
import { serviceIcons, techStack, translations, type AppLanguage, type ContactSubmitState, type ProjectCategory } from './i18n'
import './App.css'

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
const BackgroundScene = lazy(() => import('./BackgroundScene'))

const profile = {
  name: 'Latipov Yusuf',
  email: 'Ylatipov007@gmail.com',
  phone: '+998955595445',
  analyticsId: import.meta.env.VITE_GA_ID,
  github: 'https://github.com/LatipovYusuf444',
  telegram: 'https://t.me/ysvfl444',
  instagram: 'https://www.instagram.com/ysvf.l444?igsh=MTRxb3VmZXQ5MzVzbA==',
  linkedin: 'https://linkedin.com',
  currentCompany: 'Height Company',
  currentCompanyUrl: 'https://height-company.uz/',
}

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

const journeyContent = {
  uz: {
    eyebrow: "Yo'lim",
    title: "Loyihalardan keyingi asosiy o'sish nuqtalarim.",
    description: "Bu blok mening frontend yo'lim qanday shakllanganini ko'rsatadi. Rasmga o'xshash ruhda, lekin portfolio uslubimga mos va boshqacha joylashuvda qurildi.",
    items: [
      {
        point: 'Bosqich A',
        title: 'Frontend asosi',
        text: "HTML, CSS, SCSS va Git bilan saytning ko'rinadigan qismini toza yig'ish, joylashuvni ushlash va birinchi real natijalarni olish bosqichi.",
        result: "Natija: sahifa yig'ish tezligi, toza verstka va birinchi ishonchli frontend asos paydo bo'ldi.",
        visuals: ['HTML', 'CSS', 'SCSS', 'Git', 'GitHub'],
      },
      {
        point: 'Bosqich B',
        title: 'Sof JavaScript',
        text: "DOM, event, API va komponentga o'xshash fikrlash orqali sahifani statik holatdan interaktiv holatga olib chiqish bosqichi.",
        result: "Natija: foydalanuvchi bilan ishlaydigan dinamik bloklar, form logic va real interaktivlikni yozishni boshladim.",
        visuals: ['JavaScript', 'DOM', 'API', 'Logic'],
      },
      {
        point: 'Bosqich C',
        title: 'React ekotizimi',
        text: "React, TypeScript, Tailwind va Framer Motion orqali portfolio, landing page va ERP interfeyslarni tizimli darajada qurish bosqichi.",
        result: "Natija: murakkabroq dashboard, component architecture va real biznesga mos frontend yechimlar yaratadigan darajaga chiqdim.",
        visuals: ['React', 'TypeScript', 'Tailwind', 'Motion', 'ERP UI'],
      },
    ],
  },
  ru: {
    eyebrow: 'Мой путь',
    title: 'Главные точки роста после блока проектов.',
    description: 'Этот блок показывает, как формировался мой путь во frontend. Он вдохновлен примером, но собран в стиле моего портфолио и с другой композицией.',
    items: [
      {
        point: 'Этап A',
        title: 'Основа frontend',
        text: 'Этап, где с помощью HTML, CSS, SCSS и Git я научился чисто собирать визуальную часть сайта, держать структуру и получать первые реальные результаты.',
        result: 'Результат: выросла скорость сборки страниц, появилась чистая верстка и надежная база frontend.',
        visuals: ['HTML', 'CSS', 'SCSS', 'Git', 'GitHub'],
      },
      {
        point: 'Этап B',
        title: 'Чистый JavaScript',
        text: 'Этап перехода от статичных страниц к интерактивным интерфейсам через DOM, события, API и более системное мышление.',
        result: 'Результат: я начал писать динамические блоки, form logic и реальную интерактивность для пользователя.',
        visuals: ['JavaScript', 'DOM', 'API', 'Logic'],
      },
      {
        point: 'Этап C',
        title: 'Экосистема React',
        text: 'Этап, где с React, TypeScript, Tailwind и Framer Motion я вышел на системную сборку portfolio, landing page и ERP интерфейсов.',
        result: 'Результат: я вышел на уровень более сложных dashboard, component architecture и frontend-решений для реального бизнеса.',
        visuals: ['React', 'TypeScript', 'Tailwind', 'Motion', 'ERP UI'],
      },
    ],
  },
  en: {
    eyebrow: 'My Path',
    title: 'The main growth points behind my frontend work.',
    description: 'This section shows how my frontend path was built. It keeps the same spirit as the reference, but the layout is redesigned to match this portfolio.',
    items: [
      {
        point: 'Point A',
        title: 'Front-end Foundation',
        text: 'This was the stage where HTML, CSS, SCSS, and Git gave me control over layout, clean structure, and the first real frontend results.',
        result: 'Result: faster page building, cleaner markup, and a solid frontend base.',
        visuals: ['HTML', 'CSS', 'SCSS', 'Git', 'GitHub'],
      },
      {
        point: 'Point B',
        title: 'Vanilla JavaScript',
        text: 'This stage moved me from static pages to interactive interfaces through DOM work, events, APIs, and stronger UI logic.',
        result: 'Result: I started building dynamic blocks, form logic, and real interactivity for users.',
        visuals: ['JavaScript', 'DOM', 'API', 'Logic'],
      },
      {
        point: 'Point C',
        title: 'React Ecosystem',
        text: 'With React, TypeScript, Tailwind, and Framer Motion, I reached a more systematic way of building portfolios, landing pages, and ERP interfaces.',
        result: 'Result: I moved into more advanced dashboards, component architecture, and frontend solutions for real business.',
        visuals: ['React', 'TypeScript', 'Tailwind', 'Motion', 'ERP UI'],
      },
    ],
  },
} as const

const caseStudyContent = {
  uz: {
    eyebrow: 'Case Study',
    title: "Loyihani shunchaki chiroyli emas, ishlaydigan mahsulotga aylantirish jarayonim.",
    description: "Bu bo'limda bir tipik ish uslubimni ko'rsatdim: vazifa qanday boshlanadi, men nimaga e'tibor beraman va yakunda qanday natija chiqadi.",
    featured: {
      label: 'Asosiy yondashuv',
      title: 'ERP va landing page ishlarda men avval tizimni, keyin vizualni quraman.',
      text: "Agar interfeys ichida mantiq, oqim va ustuvorliklar aniq bo'lmasa, chiroyli dizayn ham uzoqqa bormaydi. Shuning uchun men bloklarni foydalanuvchi oqimi, component structure va real foydalanish holatlari bilan yig'aman.",
      imageAlt: 'Case study cover',
      tags: ['User Flow', 'Structure', 'Real Usage'],
    },
    cards: [
      {
        step: '01',
        title: 'Muammo',
        text: "Ko'p loyihalarda sahifa chiroyli ko'rinadi, lekin foydalanuvchi qayerga bosishini, form qanday ishlashini yoki ma'lumot qayerga olib borishini tez tushunmaydi.",
      },
      {
        step: '02',
        title: 'Yechim',
        text: "Men layoutni hierarchy asosida yig'aman, muhim CTA'larni oldinga olib chiqaman, componentlarni qayta ishlatishga mos qilaman va animatsiyani faqat foydali joylarda ishlataman.",
      },
      {
        step: '03',
        title: 'Natija',
        text: "Natijada interfeys nafaqat premium ko'rinadi, balki tezroq tushuniladi, mobilga yaxshi moslashadi va keyingi o'sish uchun ham tayyor bo'ladi.",
      },
    ],
    metrics: [
      { value: 'UI + Logic', label: 'Birga quriladi' },
      { value: 'Responsive', label: 'Desktop va telefon' },
      { value: 'Clean Delivery', label: 'Topshirish sifati' },
    ],
  },
  ru: {
    eyebrow: 'Case Study',
    title: 'Как я превращаю проект не просто в красивую страницу, а в рабочий продукт.',
    description: 'Здесь я показал типичный для себя подход: с чего начинается задача, на что я смотрю в первую очередь и какой результат должен получить бизнес и пользователь.',
    featured: {
      label: 'Основной подход',
      title: 'В ERP и landing page проектах я сначала строю систему, а потом усиливаю визуал.',
      text: 'Если внутри интерфейса нет логики, потока и понятных приоритетов, даже красивый дизайн быстро теряет ценность. Поэтому я собираю блоки через user flow, component structure и реальные сценарии использования.',
      imageAlt: 'Обложка case study',
      tags: ['User Flow', 'Structure', 'Real Usage'],
    },
    cards: [
      {
        step: '01',
        title: 'Проблема',
        text: 'Во многих проектах страница выглядит красиво, но пользователь не сразу понимает, куда нажимать, как работает форма и куда ведет нужное действие.',
      },
      {
        step: '02',
        title: 'Решение',
        text: 'Я собираю layout через hierarchy, выношу важные CTA вперед, делаю component-структуру пригодной для повторного использования и оставляю анимацию только там, где она реально усиливает интерфейс.',
      },
      {
        step: '03',
        title: 'Результат',
        text: 'В итоге интерфейс выглядит premium, быстрее считывается, лучше работает на мобильных устройствах и остается готовым к дальнейшему росту продукта.',
      },
    ],
    metrics: [
      { value: 'UI + Logic', label: 'Собираются вместе' },
      { value: 'Responsive', label: 'Desktop и телефон' },
      { value: 'Clean Delivery', label: 'Качество сдачи' },
    ],
  },
  en: {
    eyebrow: 'Case Study',
    title: 'How I turn a project into a working product, not just a good-looking page.',
    description: 'This section shows my typical process: how the task starts, what I focus on first, and what kind of outcome I try to deliver for both the user and the business.',
    featured: {
      label: 'Core approach',
      title: 'In ERP and landing page work, I build the system first and then sharpen the visual layer.',
      text: 'If the interface does not have clear logic, flow, and priorities, even a beautiful design loses value quickly. That is why I shape blocks around user flow, component structure, and real usage scenarios.',
      imageAlt: 'Case study cover',
      tags: ['User Flow', 'Structure', 'Real Usage'],
    },
    cards: [
      {
        step: '01',
        title: 'Problem',
        text: 'Many projects look polished at first glance, but users still struggle to understand where to click, how a form behaves, and what each action leads to.',
      },
      {
        step: '02',
        title: 'Solution',
        text: 'I build the layout through clear hierarchy, push key CTAs forward, shape reusable component structure, and keep animation only where it improves the experience.',
      },
      {
        step: '03',
        title: 'Outcome',
        text: 'The final interface feels premium, becomes easier to understand, adapts better to mobile, and stays ready for future product growth.',
      },
    ],
    metrics: [
      { value: 'UI + Logic', label: 'Built together' },
      { value: 'Responsive', label: 'Desktop and mobile' },
      { value: 'Clean Delivery', label: 'Delivery quality' },
    ],
  },
} as const

function Button({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <a className={secondary ? 'button button-secondary' : 'button button-primary'} href={href}>{children}</a>
}

function TechGlyph({ label }: { label: string }) {
  if (label === 'HTML') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#e44d26" d="M10 6h44l-4 45-18 6-18-6z" />
        <path fill="#f16529" d="M32 57l15-5 3-40H32z" />
        <path fill="#ebebeb" d="M32 26H21l-1-8h12V10H11l3 24h18z" />
        <path fill="#fff" d="M32 42l-.1.1-7.6-2.6-.5-6h-8l1 12 15.9 5.5.3-.1z" />
        <path fill="#fff" d="M32 26v8h10.2l-1 10-9.2 3V55l16-5.5 2-23.5zM32 10v8h19l.7-8z" />
      </svg>
    )
  }

  if (label === 'CSS') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#264de4" d="M10 6h44l-4 45-18 6-18-6z" />
        <path fill="#2965f1" d="M32 57l15-5 3-40H32z" />
        <path fill="#ebebeb" d="M32 26H21l-1-8h12V10H11l3 24h18z" />
        <path fill="#ebebeb" d="M32 42l-.1.1-7.6-2.6-.5-6h-8l1 12 15.9 5.5.3-.1z" />
        <path fill="#fff" d="M32 26v8h10.2l-1 10-9.2 3V55l16-5.5 2-23.5zM32 10v8h19l.7-8z" />
      </svg>
    )
  }

  if (label === 'SCSS') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="6" width="52" height="52" rx="16" fill="#cc6699" />
        <path fill="#fff" d="M42 20c-3-3-8-2-11 1-2 2-4 4-4 7 0 5 8 6 8 10 0 2-2 3-4 3-3 0-5-2-6-4l-4 3c2 4 6 6 10 6 6 0 10-3 10-9 0-6-8-7-8-10 0-1 1-2 2-3 2-2 4-2 5-1 1 1 1 3-1 6l4 3c4-5 4-10-1-15z" />
      </svg>
    )
  }

  if (label === 'Git') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="10" width="44" height="44" rx="12" transform="rotate(45 32 32)" fill="#f05133" />
        <path fill="#fff" d="M39 25a4 4 0 1 0-4-4v9a4 4 0 1 0 2 3.5V24a4 4 0 0 0 2-7.5zM29 41a4 4 0 1 0 4 4v-9a4 4 0 1 0-2-3.5V41a4 4 0 0 0-2 0z" />
      </svg>
    )
  }

  if (label === 'GitHub') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="6" width="52" height="52" rx="16" fill="#111827" />
        <path fill="#fff" d="M32 16c-8.8 0-16 7.3-16 16.3 0 7.2 4.6 13.3 10.9 15.4.8.2 1.1-.4 1.1-.8v-3c-4.4 1-5.3-1.9-5.3-1.9-.7-1.9-1.7-2.4-1.7-2.4-1.4-1 .1-1 .1-1 1.5.1 2.3 1.6 2.3 1.6 1.4 2.4 3.6 1.7 4.4 1.3.1-1 .5-1.7 1-2.1-3.5-.4-7.1-1.8-7.1-8 0-1.8.6-3.2 1.6-4.4-.2-.4-.7-2 .2-4.2 0 0 1.3-.4 4.4 1.6a14.8 14.8 0 0 1 8 0c3-2 4.4-1.6 4.4-1.6.9 2.2.4 3.8.2 4.2 1 1.2 1.6 2.6 1.6 4.4 0 6.3-3.7 7.6-7.2 8 .6.5 1.1 1.5 1.1 3.1v4.6c0 .4.3 1 1.1.8A16.2 16.2 0 0 0 48 32.3C48 23.3 40.8 16 32 16z" />
      </svg>
    )
  }

  if (label === 'JavaScript') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#f7df1e" />
        <path fill="#111827" d="M35 20h6v19c0 9-5 12-11 12-5 0-8-2.5-10-5.5l5-3.3c1 1.8 2 3.3 4.4 3.3 2.2 0 3.6-.9 3.6-4.3zm-16.6 20.4l5-2.9c1.3 2.1 3 3.7 6 3.7 2.5 0 4.2-1.2 4.2-3 0-2.1-1.7-2.9-4.5-4.1l-1.5-.6c-4.4-1.9-7.3-4.2-7.3-9.1 0-4.5 3.5-8 8.8-8 3.8 0 6.6 1.3 8.5 4.8l-4.6 2.9c-1-1.8-2.1-2.5-3.9-2.5-1.8 0-2.9 1.1-2.9 2.5 0 1.8 1.1 2.5 3.7 3.6l1.5.6c5.2 2.2 8.1 4.5 8.1 9.6 0 5.5-4.3 8.4-10.2 8.4-5.8 0-9.5-2.7-11.4-6.3z" />
      </svg>
    )
  }

  if (label === 'React') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="4.5" fill="#61dafb" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" transform="rotate(-60 32 32)" />
      </svg>
    )
  }

  if (label === 'TypeScript') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#3178c6" />
        <path fill="#fff" d="M18 24h22v5h-8v23h-6V29h-8zm28 8c4.4 0 7 2.2 7.4 6.2h-5.2c-.2-1.4-1-2.1-2.6-2.1-1.5 0-2.4.6-2.4 1.7 0 1 .6 1.5 3 2l1.8.4c4.5 1 6.3 2.7 6.3 6.2 0 4.3-3.6 6.8-8.7 6.8-5.3 0-8.5-2.5-8.9-6.7H42c.3 1.6 1.4 2.4 3.4 2.4 1.8 0 2.8-.7 2.8-1.8 0-.9-.6-1.4-2.6-1.9l-1.8-.4c-4.2-.9-6.5-2.8-6.5-6.4 0-4.1 3.2-6.4 8.7-6.4z" />
      </svg>
    )
  }

  if (label === 'Tailwind') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#38bdf8" d="M20 26c3-4 6-6 10-6 6 0 9 4 11 8 1-2 3-4 6-4 3 0 5 2 7 6-3-4-6-6-10-6-6 0-9 4-11 8-1 2-3 4-6 4-3 0-5-2-7-6zm-11 12c3-4 6-6 10-6 6 0 9 4 11 8 1-2 3-4 6-4 3 0 5 2 7 6-3-4-6-6-10-6-6 0-9 4-11 8-1 2-3 4-6 4-3 0-5-2-7-6z" />
      </svg>
    )
  }

  if (label === 'Motion') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#8b5cf6" d="M12 44h10l10-24h10L32 44h10l10-24v24H12z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="rgba(255,255,255,0.16)" />
      <path fill="#fff" d="M20 32h24v4H20zm12-12l12 12-12 12-2.8-2.8L38.3 32l-9.1-9.2z" />
    </svg>
  )
}

function TechVisual({ label }: { label: string }) {
  const normalizedLabel = label.toLowerCase()
  const compactLabel = label === 'GitHub' ? 'GitHub' : label

  return (
    <span className={`journey-badge ${normalizedLabel.includes('html') || normalizedLabel.includes('javascript') || normalizedLabel.includes('github') || normalizedLabel.includes('erp') ? 'journey-badge--1' : normalizedLabel.includes('css') || normalizedLabel.includes('dom') || normalizedLabel.includes('typescript') ? 'journey-badge--2' : normalizedLabel.includes('scss') || normalizedLabel.includes('api') || normalizedLabel.includes('tailwind') ? 'journey-badge--3' : 'journey-badge--4'}`}>
      <span className="journey-badge-icon">
        <TechGlyph label={label} />
      </span>
      <span className="journey-badge-text">{compactLabel}</span>
    </span>
  )
}

function App() {
  const [contactState, setContactState] = useState<ContactSubmitState>('idle')
  const [isSending, setIsSending] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [language, setLanguage] = useState<AppLanguage>(() => {
    const savedLanguage = window.localStorage.getItem('app-language')
    return savedLanguage === 'uz' || savedLanguage === 'ru' || savedLanguage === 'en' ? savedLanguage : 'uz'
  })
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [shouldRenderScene, setShouldRenderScene] = useState(false)
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false)
  const [hasFinePointer, setHasFinePointer] = useState(true)
  const [pointer, setPointer] = useState({ x: 50, y: 20 })
  const pointerFrame = useRef<number | null>(null)

  const t = translations[language]
  const caseStudy = caseStudyContent[language]
  const journey = journeyContent[language]
  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.contact, href: '#contact' },
  ]
  const categories = (Object.keys(t.projects.categories) as ProjectCategory[]).map((key) => ({ key, label: t.projects.categories[key] }))
  const filteredProjects = activeCategory === 'all' ? t.projects.items : t.projects.items.filter((project) => project.category === activeCategory)
  const visibleProjects = filteredProjects.slice(0, 3)

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
  }, [hasFinePointer])

  useEffect(() => {
    const compactQuery = window.matchMedia('(max-width: 900px)')
    const coarseQuery = window.matchMedia('(pointer: coarse)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateDeviceMode = () => {
      const lowPower = compactQuery.matches || coarseQuery.matches || reducedMotionQuery.matches
      setIsLowPowerDevice(lowPower)
      setHasFinePointer(!coarseQuery.matches && !reducedMotionQuery.matches)
    }

    updateDeviceMode()
    const enableSceneTimer = window.setTimeout(() => setShouldRenderScene(true), 200)

    compactQuery.addEventListener('change', updateDeviceMode)
    coarseQuery.addEventListener('change', updateDeviceMode)
    reducedMotionQuery.addEventListener('change', updateDeviceMode)

    return () => {
      window.clearTimeout(enableSceneTimer)
      compactQuery.removeEventListener('change', updateDeviceMode)
      coarseQuery.removeEventListener('change', updateDeviceMode)
      reducedMotionQuery.removeEventListener('change', updateDeviceMode)
    }
  }, [])

  useEffect(() => {
    if (!hasFinePointer) return

    const handlePointerMove = (event: PointerEvent) => {
      if (pointerFrame.current !== null) return

      pointerFrame.current = window.requestAnimationFrame(() => {
        setPointer({
          x: (event.clientX / window.innerWidth) * 100,
          y: (event.clientY / window.innerHeight) * 100,
        })
        pointerFrame.current = null
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (pointerFrame.current !== null) {
        window.cancelAnimationFrame(pointerFrame.current)
        pointerFrame.current = null
      }
    }
  }, [])

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 32)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('app-language', language)
  }, [language])

  useEffect(() => {
    setActiveCategory('all')
    setContactState('idle')
    setIsSubscribed(false)
  }, [language])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <div className="site-shell min-h-screen text-slate-100">
      {shouldRenderScene ? (
        <Suspense fallback={null}>
          <BackgroundScene pointer={pointer} lowPower={isLowPowerDevice} />
        </Suspense>
      ) : null}
      {hasFinePointer ? <div className="pointer-glow" style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }} /> : null}
      <header className={`site-header sticky top-0 z-50 ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-8">
          <div className={`site-header__inner flex items-center justify-between ${isScrolled ? 'site-header__inner--scrolled' : ''}`}>
            <a className="site-brand flex items-center" href="#home" aria-label={t.mobileMenu.title}>
              <div className={`site-brand__logo flex items-center justify-center ${isScrolled ? 'site-brand__logo--scrolled' : ''}`}>
                <img className="site-brand__logo-image" src={brandLogo} alt={`${profile.name} logo`} />
              </div>
            </a>
            <div className="site-header__right hidden lg:flex lg:items-center">
              <nav className={`site-nav items-center font-medium text-slate-300 lg:flex ${isScrolled ? 'site-nav--scrolled' : ''}`}>
                {navItems.map((item) => <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>)}
              </nav>
              <div className={`language-switcher ${isScrolled ? 'language-switcher--scrolled' : ''}`}>
                {(['uz', 'ru', 'en'] as const).map((code) => (
                  <button key={code} type="button" className={`language-switcher__button ${language === code ? 'language-switcher__button--active' : ''}`} onClick={() => setLanguage(code)}>
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <a className={`site-header__cta inline-flex items-center gap-2 rounded-full border border-sky-200/12 bg-[rgba(219,234,254,0.08)] font-semibold text-slate-50 transition backdrop-blur-xl hover:bg-[rgba(219,234,254,0.14)] ${isScrolled ? 'site-header__cta--scrolled' : ''}`} href="#contact">
                {t.nav.cta}
                <ArrowRight size={16} />
              </a>
            </div>
            <button type="button" className="mobile-menu-button lg:hidden" aria-label={isMobileMenuOpen ? t.mobileMenu.close : t.mobileMenu.open} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((current) => !current)}>
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
              <p className="mobile-menu-drawer__eyebrow">{t.mobileMenu.title}</p>
              <p className="mobile-menu-drawer__title">{profile.name}</p>
            </div>
          </div>
          <button type="button" className="mobile-menu-close" aria-label={t.mobileMenu.close} onClick={() => setIsMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="mobile-menu-nav">
          {navItems.map((item) => <a key={item.href} className="mobile-menu-nav__link" href={item.href} onClick={() => setIsMobileMenuOpen(false)}>{item.label}</a>)}
        </nav>
        <div className="mobile-menu-language">
          {(['uz', 'ru', 'en'] as const).map((code) => (
            <button key={code} type="button" className={`language-switcher__button ${language === code ? 'language-switcher__button--active' : ''}`} onClick={() => setLanguage(code)}>
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <a className="mobile-menu-cta" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
          {t.nav.cta}
          <ArrowRight size={16} />
        </a>
      </aside>
      <main id="home" className="relative z-10">
        <motion.section className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-24 lg:pt-20" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="hero-pill">
              <Sparkles size={16} className="text-sky-300" />
              {t.hero.pill}
            </div>
            <div className="space-y-7">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">{t.profile.role}</p>
              <h1 className="max-w-4xl text-[2.45rem] font-semibold leading-[0.96] tracking-[-0.05em] text-slate-50 sm:text-[3.3rem] lg:text-[4.5rem]">{t.hero.title}</h1>
              <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-300 sm:text-[1.08rem]">{t.hero.description}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="#projects">{t.hero.viewProjects}<ArrowRight size={18} /></Button>
              <Button href="#contact" secondary>{t.hero.contact}</Button>
            </div>
            <div className="hero-marquee">
              {t.hero.marquee.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.metrics.map((metric) => (
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
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"><UserRound size={14} />{t.hero.profileBadge}</span>
                <span>{t.profile.location}</span>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="hero-profile-main">
                  <p className="hero-profile-label">{t.hero.positioning}</p>
                  <h2 className="text-[1.95rem] font-semibold leading-[1.02] tracking-[-0.04em]">{profile.name}</h2>
                  <p className="max-w-lg text-[0.98rem] leading-8 text-stone-300">{t.profile.shortBio}</p>
                </div>
                <div className="hero-availability-card">
                  <span className="hero-availability-dot" />
                  <p className="hero-profile-label">{t.hero.statusLabel}</p>
                  <h3 className="text-lg font-semibold text-slate-50">{t.hero.statusTitle}</h3>
                  <p className="text-sm leading-6 text-slate-300">{t.hero.statusText}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {t.heroSignals.map((signal, index) => (
                  <motion.div key={signal.label} className="hero-signal-row" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}>
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
                  <p className="hero-profile-label">{t.hero.companyLabel}</p>
                  <h3 className="text-[1.05rem] font-semibold text-slate-50">{profile.currentCompany}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{t.hero.companyText}</p>
                </div>
                <a className="hero-company-link" href={profile.currentCompanyUrl} target="_blank" rel="noreferrer">
                  <Globe size={16} />
                  {t.hero.companyAction}
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
                  <p className="section-eyebrow">{t.about.eyebrow}</p>
                  <h2 className="section-title max-w-4xl">{t.about.title}</h2>
                </div>
                <p className="max-w-2xl text-[1rem] leading-8 text-slate-300 sm:text-[1.04rem]">{t.about.description}</p>
                <div className="about-media-card">
                  <div className="about-media-card__image">
                    <span className="about-media-card__image-badge">{t.about.mediaBadge}</span>
                    <img src={notebookCodeImage} alt={t.about.imageAlt} loading="lazy" decoding="async" />
                  </div>
                  <div className="about-media-card__content">
                    <p className="about-media-card__eyebrow">{t.about.processEyebrow}</p>
                    <h3 className="about-media-card__title">{t.about.processTitle}</h3>
                    <p className="about-media-card__text">{t.about.processText}</p>
                    <div className="about-media-card__chips">
                      {t.about.chips.map((chip) => <span key={chip}>{chip}</span>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                {t.about.highlights.map((item, index) => (
                  <motion.div key={item.title} className="about-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.08, duration: 0.45 }}>
                    <span className="about-card-index">0{index + 1}</span>
                    <h3 className="font-semibold text-slate-50">{item.title}</h3>
                    <p className="text-slate-300">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="about-quote">
                <p className="about-quote-mark">"</p>
                <p className="text-[1.02rem] leading-8 text-slate-200">{t.about.quote}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-eyebrow">{t.projects.eyebrow}</p>
              <h2 className="section-title">{t.projects.title}</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button key={category.key} type="button" className={`filter-pill ${activeCategory === category.key ? 'filter-pill-active' : ''}`} onClick={() => setActiveCategory(category.key)}>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          <motion.div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
            {visibleProjects.map((project) => (
              <motion.article key={`${project.category}-${project.title}`} variants={itemVariants} className="project-card group">
                <a className="project-visual" aria-label={project.image} href={project.live} role="img" target="_blank" rel="noreferrer">
                  <span className="project-badge">{t.projects.categories[project.category]}</span>
                  {project.imageSrc ? (
                    <>
                      <img className="project-image" src={project.imageSrc} alt={project.title} loading="lazy" decoding="async" />
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
                    <span className="text-xs uppercase tracking-[0.24em] text-stone-400">{t.projects.label}</span>
                  </div>
                  <p className="leading-7 text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="tag-chip">{item}</span>)}</div>
                  <div className="flex gap-4 pt-2">
                    <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100" href={project.github}><Github size={16} />{t.projects.github}</a>
                    <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100" href={project.live}><Globe size={16} />{t.projects.live}</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="case-study-shell">
            <div className="case-study-header">
              <div>
                <p className="section-eyebrow">{caseStudy.eyebrow}</p>
                <h2 className="section-title">{caseStudy.title}</h2>
              </div>
              <p className="case-study-header__text">{caseStudy.description}</p>
            </div>

            <div className="case-study-grid">
              <article className="case-study-feature">
                <div className="case-study-feature__visual">
                  <img src={erpImage} alt={caseStudy.featured.imageAlt} loading="lazy" decoding="async" />
                  <div className="case-study-feature__overlay" />
                  <div className="case-study-feature__tags">
                    {caseStudy.featured.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="case-study-feature__content">
                  <p className="case-study-feature__label">{caseStudy.featured.label}</p>
                  <h3 className="case-study-feature__title">{caseStudy.featured.title}</h3>
                  <p className="case-study-feature__text">{caseStudy.featured.text}</p>
                </div>
              </article>

              <div className="case-study-side">
                <div className="case-study-metrics">
                  {caseStudy.metrics.map((metric) => (
                    <div key={metric.label} className="case-study-metric">
                      <p className="case-study-metric__value">{metric.value}</p>
                      <p className="case-study-metric__label">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="case-study-cards">
                  {caseStudy.cards.map((card) => (
                    <article key={card.step} className="case-study-card">
                      <span className="case-study-card__step">{card.step}</span>
                      <h3 className="case-study-card__title">{card.title}</h3>
                      <p className="case-study-card__text">{card.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="journey-shell">
            <div className="max-w-3xl">
              <p className="section-eyebrow">{journey.eyebrow}</p>
              <h2 className="section-title">{journey.title}</h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-300">{journey.description}</p>
            </div>
            <div className="journey-grid">
              {journey.items.map((item, index) => (
                <motion.article
                  key={item.title}
                  className={`journey-row ${index % 2 === 1 ? 'journey-row--reverse' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="journey-copy">
                    <p className="journey-point">{item.point}</p>
                    <h3 className="journey-title">{item.title}</h3>
                    <p className="journey-text">{item.text}</p>
                    <p className="journey-result">{item.result}</p>
                  </div>
                  <div className="journey-visual">
                    <div className="journey-visual-glow" />
                    <div className="journey-badges">
                      {item.visuals.map((visual) => <TechVisual key={visual} label={visual} />)}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-eyebrow">{t.services.eyebrow}</p>
              <h2 className="section-title">{t.services.title}</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">{t.services.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {techStack.map((item) => {
                  const Icon = item.icon
                  return <div key={item.label} className="stack-pill"><Icon size={16} />{item.label}</div>
                })}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {t.services.items.map((service, index) => {
                const Icon = serviceIcons[index]
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
        </section>
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-[#08101dcc] backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_auto_auto] lg:px-8">
          <div>
            <p className="text-[1.35rem] font-semibold tracking-[-0.02em] text-slate-50">{profile.name}</p>
            <p className="mt-3 max-w-xl text-slate-300">{t.footer.description}</p>
          </div>
          <div className="space-y-3">
            {navItems.map((item) => <a key={item.href} className="block text-slate-300 transition hover:text-white" href={item.href}>{item.label}</a>)}
          </div>
          <div className="space-y-3 text-slate-300">
            <a className="block transition hover:text-white" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="block transition hover:text-white" href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
            <a className="block transition hover:text-white" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="block transition hover:text-white" href={profile.telegram} target="_blank" rel="noreferrer">Telegram</a>
            <p>(c) 2026 {profile.name}. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
