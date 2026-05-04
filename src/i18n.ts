import { BadgeCheck, BriefcaseBusiness, Code2, Globe, LayoutDashboard, MonitorSmartphone, Paintbrush, Sparkles, Star, Wrench } from 'lucide-react'
import erpImage from './assets/ERP.png'
import landingPageImage from './assets/LandingPage.png'
import tripzyyImage from './assets/Tripzyy.png'

export type ProjectCategory = 'all' | 'landing' | 'erp' | 'website'
export type ContactSubmitState = 'idle' | 'success' | 'error' | 'unconfigured'
export type AppLanguage = 'uz' | 'ru' | 'en'

type ProjectItem = {
  category: ProjectCategory
  title: string
  description: string
  tech: string[]
  image: string
  imageSrc?: string
  github: string
  live: string
}

type TranslationSet = {
  profile: { role: string; shortBio: string; location: string }
  nav: { about: string; projects: string; services: string; contact: string; cta: string }
  mobileMenu: { title: string; open: string; close: string }
  hero: {
    pill: string; title: string; description: string; viewProjects: string; contact: string; marquee: string[]
    profileBadge: string; positioning: string; statusLabel: string; statusTitle: string; statusText: string
    companyLabel: string; companyText: string; companyAction: string
  }
  metrics: Array<{ value: string; label: string }>
  heroSignals: Array<{ label: string; value: string }>
  about: {
    eyebrow: string; title: string; description: string; mediaBadge: string; processEyebrow: string
    processTitle: string; processText: string; chips: string[]; quote: string; imageAlt: string
    highlights: Array<{ title: string; text: string }>
  }
  projects: {
    eyebrow: string; title: string; label: string; github: string; live: string
    categories: Record<ProjectCategory, string>; items: ProjectItem[]
  }
  services: { eyebrow: string; title: string; description: string; items: Array<{ title: string; description: string }> }
  contact: {
    eyebrow: string; title: string; description: string
    form: {
      name: string; namePlaceholder: string; email: string; emailPlaceholder: string; type: string
      typePlaceholder: string; message: string; messagePlaceholder: string; sending: string; submit: string
      success: string; error: string; unconfigured: string
    }
    quick: { eyebrow: string; title: string; placeholder: string; submit: string; success: string; idle: string }
  }
  footer: { description: string; rights: string }
}

const projectLinks = {
  github: 'https://github.com/LatipovYusuf444',
  erp: 'https://erp-solution-orcin.vercel.app/',
  mirano: 'https://mirano-text.vercel.app/',
  tripzyy: 'https://tripzyy.vercel.app/',
  service: 'https://example.com',
}

export const techStack = [
  { label: 'React', icon: Code2 },
  { label: 'TypeScript', icon: BadgeCheck },
  { label: 'Tailwind CSS', icon: Paintbrush },
  { label: 'Framer Motion', icon: Wrench },
  { label: 'UI Animation', icon: Star },
  { label: 'Responsive UI', icon: MonitorSmartphone },
]

export const serviceIcons = [LayoutDashboard, BriefcaseBusiness, Globe, Sparkles]

export const translations: Record<AppLanguage, TranslationSet> = {
  uz: {
    profile: {
      role: 'Frontend dasturchi',
      shortBio: "Frontend yo'nalishida ERP tizimi, landing page, web-sayt va turli biznes loyihalar ustida ishlaganman. Asosiy maqsadim dizayn va funksionallikni bitta kuchli interfeysga birlashtirish.",
      location: "O'zbekiston",
    },
    nav: { about: 'Men haqimda', projects: 'Loyihalar', services: 'Xizmatlar', contact: 'Aloqa', cta: "Men bilan bog'laning" },
    mobileMenu: { title: 'Navigatsiya', open: 'Menyuni ochish', close: 'Menyuni yopish' },
    hero: {
      pill: 'ERP, landing page va web platformalar uchun frontend yechimlar',
      title: "Real biznes uchun toza, tizimli va qimmat ko'rinadigan frontend interfeyslar.",
      description: "ERP panel, landing page va xizmat web-saytlari uchun dizayn, tezlik va foydalanuvchi oqimini bitta kuchli frontend tajribaga birlashtiraman.",
      viewProjects: "Loyihalarni ko'rish",
      contact: "Bog'lanish",
      marquee: ['Frontend arxitekturasi', 'ERP jarayonlari', 'Animatsiya tizimlari', 'Moslashuvchan interfeys', 'Toza yakun'],
      profileBadge: 'Shaxsiy profil',
      positioning: "Yo'nalishim",
      statusLabel: 'Holat',
      statusTitle: 'Yangi loyiha uchun ochiq',
      statusText: 'Frontend ishlab chiqish, qayta dizayn va premium landing ishlari.',
      companyLabel: 'Hozirgi kompaniyam',
      companyText: "Hozir shu kompaniya loyihalari ustida ishlayapman. Ularning saytini ko'rish uchun quyidagi tugma ishlaydi.",
      companyAction: "Ko'rish",
    },
    metrics: [
      { value: '22 yosh', label: 'Yoshim' },
      { value: '1 yil tajriba', label: 'Ish tajribam' },
      { value: 'ERP / Landing / Web', label: "Asosiy yo'nalishlar" },
    ],
    heroSignals: [
      { label: 'Interfeys tizimlari', value: 'ERP dashboard, table, filter va form oqimlari' },
      { label: 'Interaktivlik', value: 'Hover, reveal, transition va foydalanuvchi harakatiga mos animatsiyalar' },
      { label: 'Asosiy fokus', value: 'Tez ishlaydigan, real biznesga mos frontend' },
    ],
    about: {
      eyebrow: 'Men haqimda',
      title: "Frontend'da tartibli arxitektura, aniq interfeys va real ishlaydigan tajriba ustida ishlayman.",
      description: "ERP tizimi, landing page va biznes web-saytlar ustida ishlab, men uchun eng muhim narsa bitta bo'lib qoldi: foydalanuvchi ko'radigan har bir blok aniq, tez va ishonch uyg'otadigan bo'lishi kerak.",
      mediaBadge: 'Frontend ish maydoni',
      processEyebrow: 'Ish jarayoni',
      processTitle: 'Kod, dizayn va implementatsiya bitta oqimda ishlaydi.',
      processText: "Interfeys yig'ish, komponent tuzilmasi va foydalanuvchi oqimini parallel olib borib, sahifani faqat chiroyli emas, real ishlaydigan holatda yig'aman.",
      chips: ["Interfeys yig'ish", 'Kod tahlili', 'Tayyor natija'],
      quote: "Ortiqcha bezak emas, toza ierarxiya, kuchli joylashuv va foydalanuvchi uchun tushunarli oqim men uchun asosiy standart.",
      imageAlt: 'Kod yozilayotgan noutbuk ish maydoni tasviri',
      highlights: [
        { title: 'Tizimli yondashuv', text: "Har bir sahifani joylashuv, oqim va keyingi kengayish nuqtai nazaridan yig'aman." },
        { title: 'Interfeys sifati', text: "Masofalar, ierarxiya va harakat orqali mahsulotni aniq va ishonchli ko'rsataman." },
        { title: 'Toza implementatsiya', text: "Moslashuvchan joylashuv va aniq komponent tuzilmasi bilan real ishlaydigan natija qilaman." },
      ],
    },
    projects: {
      eyebrow: 'Loyihalar',
      title: "Asosiy ishlagan yo'nalishlarim.",
      label: 'Loyiha',
      github: 'GitHub',
      live: "Jonli ko'rish",
      categories: { all: 'Barchasi', landing: 'Landing sahifa', erp: 'ERP interfeys', website: 'Web-sayt' },
      items: [
        { category: 'erp', title: 'ERP System UI', description: "Ichki tizim uchun dashboard, jadval, form va boshqaruv modullaridan iborat frontend interfeyslar.", tech: ['React', 'TypeScript', 'Dashboard UI'], image: 'ERP interfeys, analitika bloklari va boshqaruv paneli', imageSrc: erpImage, github: projectLinks.github, live: projectLinks.erp },
        { category: 'landing', title: 'Mirano Landing Page', description: "Brend, xizmat va portfolio ni premium ko'rinishda taqdim etuvchi zamonaviy marketing sahifasi.", tech: ['React', 'Tailwind', 'Framer Motion'], image: 'Hashamatli landing sahifa, tipografiya va yorqin CTA bloklari', imageSrc: landingPageImage, github: projectLinks.github, live: projectLinks.mirano },
        { category: 'website', title: 'Tripzyy Web Sayt', description: "Kompaniya haqida, xizmatlar, portfolio va aloqa bo'limlariga ega professional korporativ sayt.", tech: ['Frontend', 'Responsive', 'SEO'], image: 'Korporativ sahifa, kontent bloklari va premium fon', imageSrc: tripzyyImage, github: projectLinks.github, live: projectLinks.tripzyy },
      ],
    },
    services: {
      eyebrow: "Xizmatlar va ko'nikmalar",
      title: 'Qisqa va aniq xizmatlar.',
      description: 'Landing page, ERP interfeys va biznes web-saytlar uchun frontend yechimlar.',
      items: [
        { title: 'Landing Page Yaratish', description: "Brendni kuchli ko'rsatadigan, konversiyaga ishlaydigan va premium ko'rinishga ega landing page lar tayyorlayman." },
        { title: 'ERP System Frontend', description: 'Murakkab dashboard, jadval, forma, filter va ichki tizim interfeyslarini tartibli va qulay holatda ishlab chiqaman.' },
        { title: 'Web Sayt Interfeyslari', description: 'Korporativ sayt, portfolio, product page va xizmat sahifalarini zamonaviy uslubda quraman.' },
        { title: 'UI/UX va Animatsiya', description: 'Hover, reveal, transition va micro interaction lar bilan sahifaga jon va premium hissiyot olib kiraman.' },
      ],
    },
    contact: {
      eyebrow: 'Aloqa',
      title: "Loyiha bo'lsa, yozing.",
      description: "Frontend, ERP interfeys yoki landing page kerak bo'lsa, men bilan bog'lanishingiz mumkin.",
      form: {
        name: 'Ism', namePlaceholder: 'Ismingiz', email: 'Email', emailPlaceholder: 'Email manzilingiz', type: 'Loyiha turi',
        typePlaceholder: "ERP, landing page, web-sayt...", message: 'Xabar', messagePlaceholder: 'Qanday loyiha kerakligini yozing.',
        sending: 'Yuborilmoqda...', submit: 'Xabar yuborish', success: 'Rahmat. Xabar yuborildi va emailga tushadi.',
        error: "Xabar yuborishda xatolik bo'ldi. Qayta urinib ko'ring.", unconfigured: "Form endpoint hali ulanmagan. `.env` ichiga `VITE_FORMSPREE_ENDPOINT` qo'shish kerak.",
      },
      quick: {
        eyebrow: 'Tez aloqa', title: 'Frontend loyiha uchun tayyorman.', placeholder: 'Email manzilingiz', submit: 'Yuborish',
        success: "Aloqa interfeysi tayyor. Keyin email xizmati bilan ulash mumkin.", idle: "GitHub va Telegram orqali ham tez bog'lanish uchun tayyor blok.",
      },
    },
    footer: { description: 'ERP tizimi interfeyslari, landing page, web-sayt va premium frontend tajribalar yaratishga ixtisoslashgan portfolio sahifa.', rights: 'Barcha huquqlar himoyalangan.' },
  },
  ru: {
    profile: {
      role: 'Frontend разработчик',
      shortBio: 'Я работал над ERP-системами, landing page, веб-сайтами и разными бизнес-проектами. Моя главная цель - объединять дизайн и функциональность в одном сильном интерфейсе.',
      location: 'Узбекистан',
    },
    nav: { about: 'Обо мне', projects: 'Проекты', services: 'Услуги', contact: 'Контакты', cta: 'Связаться со мной' },
    mobileMenu: { title: 'Навигация', open: 'Открыть меню', close: 'Закрыть меню' },
    hero: {
      pill: 'Frontend-решения для ERP, landing page и веб-платформ',
      title: 'Чистые, системные и дорогие на вид frontend интерфейсы для реального бизнеса.',
      description: 'Для ERP-панелей, landing page и сервисных сайтов я объединяю дизайн, скорость и пользовательский поток в один сильный frontend опыт.',
      viewProjects: 'Смотреть проекты',
      contact: 'Связаться',
      marquee: ['Архитектура frontend', 'ERP-процессы', 'Системы анимации', 'Адаптивный интерфейс', 'Чистая сдача'],
      profileBadge: 'Личный профиль',
      positioning: 'Позиционирование',
      statusLabel: 'Статус',
      statusTitle: 'Открыт к новым проектам',
      statusText: 'Frontend implementation, redesign и premium landing проекты.',
      companyLabel: 'Моя текущая компания',
      companyText: 'Сейчас я работаю над проектами этой компании. Сайт можно открыть по кнопке ниже.',
      companyAction: 'Открыть',
    },
    metrics: [
      { value: '22 года', label: 'Возраст' },
      { value: '1 год опыта', label: 'Опыт работы' },
      { value: 'ERP / Landing / Web', label: 'Основные направления' },
    ],
    heroSignals: [
      { label: 'Системы интерфейсов', value: 'ERP dashboard, table, filter и form сценарии' },
      { label: 'Интерактивность', value: 'Hover, reveal, transition и анимации под действия пользователя' },
      { label: 'Главный фокус', value: 'Быстрый frontend, подходящий под реальные бизнес-задачи' },
    ],
    about: {
      eyebrow: 'Обо мне',
      title: 'Во frontend я делаю упорядоченную архитектуру, точные интерфейсы и реально работающий опыт.',
      description: 'Работая над ERP-системами, landing page и бизнес-сайтами, я пришел к одному главному выводу: каждый блок, который видит пользователь, должен быть понятным, быстрым и вызывать доверие.',
      mediaBadge: 'Frontend workspace',
      processEyebrow: 'Процесс работы',
      processTitle: 'Код, дизайн и реализация работают как один поток.',
      processText: 'Я параллельно веду UI build, структуру компонентов и пользовательский поток, чтобы страница была не только красивой, но и реально работающей.',
      chips: ['Сборка UI', 'Проверка кода', 'Готовый результат'],
      quote: 'Не лишний декор, а чистая иерархия, сильный layout и понятный для пользователя поток - мой базовый стандарт.',
      imageAlt: 'Превью рабочего пространства ноутбука с кодом',
      highlights: [
        { title: 'Системный подход', text: 'Я собираю каждую страницу с учетом layout, пользовательского потока и будущего расширения.' },
        { title: 'Качество интерфейса', text: 'Через spacing, hierarchy и motion я делаю продукт понятным и вызывающим доверие.' },
        { title: 'Чистая реализация', text: 'С responsive layout и понятной структурой компонентов я довожу работу до реального результата.' },
      ],
    },
    projects: {
      eyebrow: 'Проекты',
      title: 'Ключевые направления, с которыми я работал.',
      label: 'Проект',
      github: 'GitHub',
      live: 'Live Demo',
      categories: { all: 'Все', landing: 'Landing Page', erp: 'ERP UI', website: 'Веб-сайт' },
      items: [
        { category: 'erp', title: 'ERP System UI', description: 'Frontend интерфейсы для внутренней системы: dashboard, таблицы, формы и управленческие модули.', tech: ['React', 'TypeScript', 'Dashboard UI'], image: 'ERP интерфейс, блоки аналитики и панель управления', imageSrc: erpImage, github: projectLinks.github, live: projectLinks.erp },
        { category: 'landing', title: 'Mirano Landing Page', description: 'Современная маркетинговая страница, которая премиально презентует бренд, услуги и портфолио.', tech: ['React', 'Tailwind', 'Framer Motion'], image: 'Luxury landing page, типографика и яркие CTA блоки', imageSrc: landingPageImage, github: projectLinks.github, live: projectLinks.mirano },
        { category: 'website', title: 'Tripzyy Web Sayt', description: 'Профессиональный корпоративный сайт с разделами о компании, услугах, портфолио и контактах.', tech: ['Frontend', 'Responsive', 'SEO'], image: 'Корпоративная страница, контентные блоки и премиальный фон', imageSrc: tripzyyImage, github: projectLinks.github, live: projectLinks.tripzyy },
      ],
    },
    services: {
      eyebrow: 'Услуги и навыки',
      title: 'Коротко и по делу об услугах.',
      description: 'Frontend решения для landing page, ERP UI и бизнес-сайтов.',
      items: [
        { title: 'Создание Landing Page', description: 'Делаю landing page с сильной подачей бренда, заточенные на конверсию и премиальный внешний вид.' },
        { title: 'ERP System Frontend', description: 'Разрабатываю сложные dashboard, table, form, filter и интерфейсы внутренних систем в упорядоченном и удобном виде.' },
        { title: 'Интерфейсы веб-сайтов', description: 'Создаю корпоративные сайты, портфолио, product page и страницы услуг в современном стиле.' },
        { title: 'UI/UX и анимация', description: 'Добавляю странице жизнь и premium ощущение через hover, reveal, transition и micro interaction.' },
      ],
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Если есть проект, напишите.',
      description: 'Если вам нужен frontend, ERP UI или landing page, со мной можно связаться.',
      form: {
        name: 'Имя', namePlaceholder: 'Ваше имя', email: 'Email', emailPlaceholder: 'Ваш email', type: 'Тип проекта',
        typePlaceholder: 'ERP, landing page, веб-сайт...', message: 'Сообщение', messagePlaceholder: 'Опишите, какой проект вам нужен.',
        sending: 'Отправляется...', submit: 'Отправить сообщение', success: 'Спасибо. Сообщение отправлено и придет на email.',
        error: 'Не удалось отправить сообщение. Попробуйте еще раз.', unconfigured: 'Form endpoint пока не подключен. Нужно добавить `VITE_FORMSPREE_ENDPOINT` в `.env`.',
      },
      quick: {
        eyebrow: 'Быстрая связь', title: 'Готов к frontend проекту.', placeholder: 'Ваш email', submit: 'Отправить',
        success: 'Блок связи уже готов в UI. Позже можно подключить email service.', idle: 'Также есть готовый блок для быстрой связи через GitHub и Telegram.',
      },
    },
    footer: { description: 'Портфолио-страница, ориентированная на создание ERP system UI, landing page, веб-сайтов и premium frontend опыта.', rights: 'Все права защищены.' },
  },
  en: {
    profile: {
      role: 'Frontend Developer',
      shortBio: 'I have worked on ERP systems, landing pages, websites, and different business projects. My main goal is to combine design and functionality into one strong interface.',
      location: 'Uzbekistan',
    },
    nav: { about: 'About', projects: 'Projects', services: 'Services', contact: 'Contact', cta: 'Contact me' },
    mobileMenu: { title: 'Navigation', open: 'Open menu', close: 'Close menu' },
    hero: {
      pill: 'Product frontend solutions for ERP, landing pages, and web platforms',
      title: 'Clean, structured, premium-looking frontend interfaces for real business.',
      description: 'For ERP panels, landing pages, and service websites, I combine design, speed, and user flow into one strong frontend experience.',
      viewProjects: 'View projects',
      contact: 'Contact',
      marquee: ['Frontend architecture', 'ERP workflows', 'Animation systems', 'Responsive UI', 'Clean delivery'],
      profileBadge: 'Personal profile',
      positioning: 'Positioning',
      statusLabel: 'Status',
      statusTitle: 'Open for new projects',
      statusText: 'Frontend implementation, redesign, and premium landing work.',
      companyLabel: 'Current company',
      companyText: 'I am currently working on this company’s projects. You can open their website with the button below.',
      companyAction: 'View',
    },
    metrics: [
      { value: '22 years old', label: 'Age' },
      { value: '1 year experience', label: 'Work experience' },
      { value: 'ERP / Landing / Web', label: 'Main directions' },
    ],
    heroSignals: [
      { label: 'Interface systems', value: 'ERP dashboard, table, filter, and form flows' },
      { label: 'Interactivity', value: 'Hover, reveal, transition, and animations matched to user actions' },
      { label: 'Main focus', value: 'Fast frontend built for real business needs' },
    ],
    about: {
      eyebrow: 'About',
      title: 'I work on structured frontend architecture, clear interfaces, and experiences that actually perform.',
      description: 'Working on ERP systems, landing pages, and business websites taught me one thing: every block the user sees should feel clear, fast, and trustworthy.',
      mediaBadge: 'Frontend Workspace',
      processEyebrow: 'Workflow',
      processTitle: 'Code, design, and implementation move in one flow.',
      processText: 'I build UI, component structure, and user flow in parallel so the page is not only beautiful, but truly usable in production.',
      chips: ['UI Build', 'Code Review', 'Real Delivery'],
      quote: 'Not extra decoration, but clean hierarchy, strong layout, and a user-friendly flow are my core standard.',
      imageAlt: 'Notebook workspace preview with code',
      highlights: [
        { title: 'System thinking', text: 'I build every page with layout, flow, and future growth in mind.' },
        { title: 'Interface quality', text: 'Through spacing, hierarchy, and motion, I make the product clear and trustworthy.' },
        { title: 'Clean implementation', text: 'I deliver real results with responsive layouts and a clear component structure.' },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Main directions I have worked on.',
      label: 'Project',
      github: 'GitHub',
      live: 'Live Demo',
      categories: { all: 'All', landing: 'Landing Page', erp: 'ERP UI', website: 'Website' },
      items: [
        { category: 'erp', title: 'ERP System UI', description: 'Frontend interfaces for an internal system with dashboards, tables, forms, and management modules.', tech: ['React', 'TypeScript', 'Dashboard UI'], image: 'ERP interface, analytics blocks, and control panel', imageSrc: erpImage, github: projectLinks.github, live: projectLinks.erp },
        { category: 'landing', title: 'Mirano Landing Page', description: 'A modern marketing page that presents brand, services, and portfolio in a premium style.', tech: ['React', 'Tailwind', 'Framer Motion'], image: 'Luxury landing page with typography and bright CTA blocks', imageSrc: landingPageImage, github: projectLinks.github, live: projectLinks.mirano },
        { category: 'website', title: 'Tripzyy Website', description: 'A professional corporate website with company, services, portfolio, and contact sections.', tech: ['Frontend', 'Responsive', 'SEO'], image: 'Corporate page with content blocks and premium background', imageSrc: tripzyyImage, github: projectLinks.github, live: projectLinks.tripzyy },
      ],
    },
    services: {
      eyebrow: 'Services and skills',
      title: 'Short and clear service offering.',
      description: 'Frontend solutions for landing pages, ERP UI, and business websites.',
      items: [
        { title: 'Landing Page Development', description: 'I create landing pages that present the brand strongly, support conversion, and feel premium.' },
        { title: 'ERP System Frontend', description: 'I build complex dashboards, tables, forms, filters, and internal system interfaces in a clear and usable way.' },
        { title: 'Website Interfaces', description: 'I design corporate websites, portfolios, product pages, and service pages in a modern style.' },
        { title: 'UI/UX and Animation', description: 'I bring pages to life with hover, reveal, transition, and micro-interactions for a premium feel.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'If you have a project, write to me.',
      description: 'If you need frontend, ERP UI, or a landing page, you can contact me.',
      form: {
        name: 'Name', namePlaceholder: 'Your name', email: 'Email', emailPlaceholder: 'Your email address', type: 'Project type',
        typePlaceholder: 'ERP, landing page, website...', message: 'Message', messagePlaceholder: 'Describe the kind of project you need.',
        sending: 'Sending...', submit: 'Send message', success: 'Thank you. Your message was sent and will arrive by email.',
        error: 'There was an error sending the message. Please try again.', unconfigured: 'The form endpoint is not connected yet. Add `VITE_FORMSPREE_ENDPOINT` to `.env`.',
      },
      quick: {
        eyebrow: 'Quick contact', title: 'Ready for a frontend project.', placeholder: 'Your email address', submit: 'Send',
        success: 'The contact UI is already prepared. An email service can be connected later.', idle: 'There is also a ready block for fast contact through GitHub and Telegram.',
      },
    },
    footer: { description: 'Portfolio page focused on building ERP system UI, landing pages, websites, and premium frontend experiences.', rights: 'All rights reserved.' },
  },
}
