import { BadgeCheck, Boxes, Code2, Globe, HeartHandshake, LayoutDashboard, MonitorSmartphone, Paintbrush, Palette, Plug, Send, Server, Star, Target, Wrench, Zap } from 'lucide-react'
import erpImage from './assets/ERP.png'
import landingPageImage from './assets/LandingPage.png'
import tripzyyImage from './assets/Tripzyy.png'

export type ProjectCategory = 'all' | 'landing' | 'erp' | 'website' | 'telegram' | 'admin'
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
  nav: { about: string; projects: string; services: string; technologies: string; contact: string; cta: string }
  mobileMenu: { title: string; open: string; close: string }
  hero: {
    pill: string; title: string; highlight: string; description: string; viewProjects: string; contact: string
    marquee: Array<{ title: string; description: string }>
    profileBadge: string; positioning: string; statusLabel: string; statusTitle: string; statusText: string
    companyLabel: string; companyText: string; companyAction: string
  }
  metrics: Array<{ value: string; label: string }>
  heroSignals: Array<{ label: string; value: string }>
  homeServices: { eyebrow: string; title: string; items: Array<{ title: string; description: string }> }
  whyChooseUs: { eyebrow: string; title: string; items: Array<{ title: string; description: string }> }
  about: {
    eyebrow: string; title: string; description: string; mediaBadge: string; processEyebrow: string
    processTitle: string; processText: string; chips: string[]; quote: string; imageAlt: string
    highlights: Array<{ title: string; text: string }>
  }
  projects: {
    eyebrow: string; title: string; titleHighlight: string; description: string
    label: string; github: string; live: string; viewProject: string; emptyState: string
    categories: Record<ProjectCategory, string>; items: ProjectItem[]
  }
  services: { eyebrow: string; title: string; description: string; items: Array<{ title: string; description: string }> }
  technologies: {
    eyebrow: string; title: string; description: string
    categories: { frontend: string; backend: string; database: string; tools: string; integration: string }
  }
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
  erp: 'http://77.83.206.97:8080/',
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

export const serviceIcons = [Globe, Send, Boxes, LayoutDashboard, Server, Plug]
export const homeServiceIcons = [Globe, Send, Code2, LayoutDashboard]
export const whyChooseIcons = [Target, Palette, Zap, Boxes, HeartHandshake]

export const technologyGroups = [
  {
    key: 'frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Next.js'],
  },
  {
    key: 'backend',
    items: ['Node.js', 'Express.js'],
  },
  {
    key: 'database',
    items: ['PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    key: 'tools',
    items: ['Git', 'GitHub', 'Docker', 'Prisma', 'Vercel'],
  },
  {
    key: 'integration',
    items: ['Telegram API', 'REST API'],
  },
] as const

export const translations: Record<AppLanguage, TranslationSet> = {
  uz: {
    profile: {
      role: 'Full Stack Developer',
      shortBio: "Full Stack yo'nalishida websaytlar, Telegram botlar, ERP tizimi, landing page va turli biznes loyihalar ustida ishlaganman. Asosiy maqsadim frontend va backendni bitta kuchli, ishonchli mahsulotga birlashtirish.",
      location: "O'zbekiston",
    },
    nav: { about: 'Men haqimda', projects: 'Loyihalar', services: 'Xizmatlar', technologies: 'Texnologiyalar', contact: 'Aloqa', cta: 'Menga yozish' },
    mobileMenu: { title: 'Navigatsiya', open: 'Menyuni ochish', close: 'Menyuni yopish' },
    hero: {
      pill: 'Full Stack Developer',
      title: 'Men zamonaviy raqamli yechimlar yarataman.',
      highlight: 'raqamli yechimlar',
      description: "Websaytlar, Telegram botlar va to'liq stackli ilovalar ishlab chiqaman. Sifatli kod, zamonaviy dizayn va biznes natijasiga yo'naltirilgan yechimlar.",
      viewProjects: "Loyihalarni ko'rish",
      contact: 'Menga yozish',
      marquee: [
        { title: "To'liq Stack", description: 'Frontend va backendni bitta tizim sifatida birga quraman.' },
        { title: 'Backend API', description: "Node.js va Express asosida ishonchli API va servislar yozaman." },
        { title: 'Telegram Botlar', description: "Buyurtma, to'lov va admin panelli avtomatik botlar yarataman." },
        { title: 'ERP / CRM', description: "Boshqaruv, hisobot va biznes jarayonlari uchun panellar quraman." },
        { title: 'Tez yetkazish', description: "Sifatli kod va aniq muddatlarda loyihani ishga tushiraman." },
      ],
      profileBadge: 'Shaxsiy profil',
      positioning: "Yo'nalishim",
      statusLabel: 'Holat',
      statusTitle: 'Yangi loyiha uchun ochiq',
      statusText: 'Full Stack ishlab chiqish, backend API va premium interfeys ishlari.',
      companyLabel: 'Hozirgi kompaniyam',
      companyText: "Hozir shu kompaniya loyihalari ustida ishlayapman. Ularning saytini ko'rish uchun quyidagi tugma ishlaydi.",
      companyAction: "Ko'rish",
    },
    metrics: [
      { value: '10+', label: 'Loyihalar' },
      { value: '10+', label: 'Mamnun mijozlar' },
      { value: '1+ yil', label: 'Tajriba' },
      { value: '100%', label: 'Sifat kafolati' },
    ],
    heroSignals: [
      { label: 'Interfeys tizimlari', value: 'ERP dashboard, table, filter va form oqimlari' },
      { label: 'Interaktivlik', value: 'Hover, reveal, transition va foydalanuvchi harakatiga mos animatsiyalar' },
      { label: 'Asosiy fokus', value: 'Tez ishlaydigan, real biznesga mos Full Stack yechim' },
    ],
    homeServices: {
      eyebrow: 'Xizmatlar',
      title: 'Nima bilan shug\'ullanaman.',
      items: [
        { title: 'Websaytlar', description: "Landing page, korporativ sayt, online do'kon va biznes platformalar." },
        { title: 'Telegram Bot', description: "Avtomatlashtirilgan botlar, buyurtma, to'lov va admin panel integratsiyasi." },
        { title: 'Full Stack', description: "Frontend + Backend asosida to'liq ishlaydigan web ilovalar." },
        { title: 'Dashboard & CRM', description: "Admin panel, CRM, ERP, POS va biznes boshqaruv tizimlari." },
      ],
    },
    whyChooseUs: {
      eyebrow: 'Nega meni tanlashadi',
      title: 'Sizga natija va sifat kafolatlanadi.',
      items: [
        { title: 'Individual yondashuv', description: 'Har bir loyiha uchun biznes talabiga mos yechim.' },
        { title: 'Zamonaviy dizayn', description: "Chiroyli, professional va responsive UI/UX." },
        { title: 'Tez va ishonchli', description: 'Performance va toza kodga e\'tibor.' },
        { title: 'Full Stack yechim', description: "Frontend va backendni bir tizim sifatida ishlab chiqish." },
        { title: "Qo'llab-quvvatlash", description: 'Loyiha topshirilgandan keyin ham texnik yordam.' },
      ],
    },
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
      titleHighlight: "yo'nalishlarim.",
      description: "Biznesingizni keyingi bosqichga olib chiqadigan sifatli va zamonaviy raqamli yechimlar.",
      label: 'Loyiha',
      github: 'GitHub',
      live: "Jonli ko'rish",
      viewProject: "Loyihani ko'rish",
      emptyState: "Bu turkumda hozircha loyihalar yo'q.",
      categories: { all: 'Barchasi', landing: 'Landing sahifa', erp: 'ERP interfeys', website: 'Web-sayt', telegram: 'Telegram Bot', admin: 'Admin Panel' },
      items: [
        { category: 'erp', title: 'ERP System UI', description: "Ichki tizim uchun dashboard, jadval, form va boshqaruv modullaridan iborat frontend interfeyslar.", tech: ['React', 'TypeScript', 'Dashboard UI'], image: 'ERP interfeys, analitika bloklari va boshqaruv paneli', imageSrc: erpImage, github: projectLinks.github, live: projectLinks.erp },
        { category: 'landing', title: 'Mirano Landing Page', description: "Brend, xizmat va portfolio ni premium ko'rinishda taqdim etuvchi zamonaviy marketing sahifasi.", tech: ['React', 'Tailwind', 'Framer Motion'], image: 'Hashamatli landing sahifa, tipografiya va yorqin CTA bloklari', imageSrc: landingPageImage, github: projectLinks.github, live: projectLinks.mirano },
        { category: 'website', title: 'Tripzyy Web Sayt', description: "Kompaniya haqida, xizmatlar, portfolio va aloqa bo'limlariga ega professional korporativ sayt.", tech: ['Frontend', 'Responsive', 'SEO'], image: 'Korporativ sahifa, kontent bloklari va premium fon', imageSrc: tripzyyImage, github: projectLinks.github, live: projectLinks.tripzyy },
      ],
    },
    services: {
      eyebrow: 'Xizmatlar',
      title: 'Qisqa va aniq xizmatlar.',
      description: "Websayt, Telegram bot, Full Stack ilova va biznes tizimlari uchun boshidan oxirigacha yechim.",
      items: [
        { title: 'Websayt ishlab chiqish', description: "Landing page, korporativ sayt, online do'kon va boshqa turdagi zamonaviy web saytlar." },
        { title: 'Telegram botlar', description: "Avtobotlar, buyurtma qabul qilish, to'lov tizimi, notification va admin panel." },
        { title: 'Full Stack ilovalar', description: "Frontend va backend qismlari bilan to'liq ishlaydigan web platformalar." },
        { title: 'Admin Panel & CRM', description: 'Admin panel, CRM, ERP, POS va biznes boshqaruv tizimlari.' },
        { title: 'Backend API', description: 'Node.js / Express asosida REST API va backend tizimlari.' },
        { title: 'API integratsiya', description: "Payment, Telegram va boshqa tashqi servislarni integratsiya qilish." },
      ],
    },
    technologies: {
      eyebrow: 'Texnologiyalar',
      title: 'Ishda foydalanadigan texnologiyalarim.',
      description: "Frontend, backend, ma'lumotlar bazasi va integratsiyalar uchun ishonchli va zamonaviy stack.",
      categories: { frontend: 'Frontend', backend: 'Backend', database: "Ma'lumotlar bazasi", tools: 'Vositalar', integration: 'Integratsiya' },
    },
    contact: {
      eyebrow: 'Aloqa',
      title: "Loyiha bo'lsa, yozing.",
      description: "Websayt, Telegram bot, Full Stack ilova yoki ERP/CRM kerak bo'lsa, men bilan bog'lanishingiz mumkin.",
      form: {
        name: 'Ism', namePlaceholder: 'Ismingiz', email: 'Email', emailPlaceholder: 'Email manzilingiz', type: 'Loyiha turi',
        typePlaceholder: "ERP, landing page, web-sayt...", message: 'Xabar', messagePlaceholder: 'Qanday loyiha kerakligini yozing.',
        sending: 'Yuborilmoqda...', submit: 'Xabar yuborish', success: 'Rahmat. Xabar yuborildi va emailga tushadi.',
        error: "Xabar yuborishda xatolik bo'ldi. Qayta urinib ko'ring.", unconfigured: "Form endpoint hali ulanmagan. `.env` ichiga `VITE_FORMSPREE_ENDPOINT` qo'shish kerak.",
      },
      quick: {
        eyebrow: 'Tez aloqa', title: 'Full Stack loyiha uchun tayyorman.', placeholder: 'Email manzilingiz', submit: 'Yuborish',
        success: "Aloqa interfeysi tayyor. Keyin email xizmati bilan ulash mumkin.", idle: "GitHub va Telegram orqali ham tez bog'lanish uchun tayyor blok.",
      },
    },
    footer: { description: "Websaytlar, Telegram botlar, Full Stack ilovalar va ERP/CRM tizimlari yaratishga ixtisoslashgan Full Stack Developer portfolio sahifasi.", rights: 'Barcha huquqlar himoyalangan.' },
  },
  ru: {
    profile: {
      role: 'Full Stack Developer',
      shortBio: 'Я работал над сайтами, Telegram-ботами, ERP-системами, landing page и разными бизнес-проектами. Моя главная цель - объединять frontend и backend в одном надежном продукте.',
      location: 'Узбекистан',
    },
    nav: { about: 'Обо мне', projects: 'Проекты', services: 'Услуги', technologies: 'Технологии', contact: 'Контакты', cta: 'Написать мне' },
    mobileMenu: { title: 'Навигация', open: 'Открыть меню', close: 'Закрыть меню' },
    hero: {
      pill: 'Full Stack Developer',
      title: 'Я создаю современные цифровые решения.',
      highlight: 'цифровые решения',
      description: 'Разрабатываю сайты, Telegram-ботов и full stack приложения. Чистый код, современный дизайн и решения, ориентированные на результат бизнеса.',
      viewProjects: 'Смотреть проекты',
      contact: 'Написать мне',
      marquee: [
        { title: 'Full Stack', description: 'Собираю frontend и backend как единую систему.' },
        { title: 'Backend API', description: 'Пишу надежные API и сервисы на Node.js и Express.' },
        { title: 'Telegram-боты', description: 'Создаю автоматических ботов с оплатой и админ-панелью.' },
        { title: 'ERP / CRM', description: 'Строю панели для управления и бизнес-процессов.' },
        { title: 'Быстрая сдача', description: 'Качественный код и соблюдение сроков проекта.' },
      ],
      profileBadge: 'Личный профиль',
      positioning: 'Позиционирование',
      statusLabel: 'Статус',
      statusTitle: 'Открыт к новым проектам',
      statusText: 'Full Stack разработка, backend API и premium интерфейсы.',
      companyLabel: 'Моя текущая компания',
      companyText: 'Сейчас я работаю над проектами этой компании. Сайт можно открыть по кнопке ниже.',
      companyAction: 'Открыть',
    },
    metrics: [
      { value: '10+', label: 'Проектов' },
      { value: '10+', label: 'Довольных клиентов' },
      { value: '1+ год', label: 'Опыта' },
      { value: '100%', label: 'Гарантия качества' },
    ],
    heroSignals: [
      { label: 'Системы интерфейсов', value: 'ERP dashboard, table, filter и form сценарии' },
      { label: 'Интерактивность', value: 'Hover, reveal, transition и анимации под действия пользователя' },
      { label: 'Главный фокус', value: 'Быстрое Full Stack решение под реальные бизнес-задачи' },
    ],
    homeServices: {
      eyebrow: 'Услуги',
      title: 'Чем я занимаюсь.',
      items: [
        { title: 'Веб-сайты', description: 'Landing page, корпоративный сайт, интернет-магазин и бизнес-платформы.' },
        { title: 'Telegram-боты', description: 'Автоматизированные боты, заказы, оплата и интеграция с админ-панелью.' },
        { title: 'Full Stack', description: 'Веб-приложения, работающие на связке Frontend + Backend.' },
        { title: 'Dashboard & CRM', description: 'Админ-панели, CRM, ERP, POS и системы управления бизнесом.' },
      ],
    },
    whyChooseUs: {
      eyebrow: 'Почему выбирают меня',
      title: 'Гарантирую результат и качество.',
      items: [
        { title: 'Индивидуальный подход', description: 'Решение под бизнес-задачи каждого проекта.' },
        { title: 'Современный дизайн', description: 'Красивый, профессиональный и адаптивный UI/UX.' },
        { title: 'Быстро и надежно', description: 'Внимание к производительности и чистоте кода.' },
        { title: 'Full Stack решение', description: 'Frontend и backend разрабатываются как единая система.' },
        { title: 'Поддержка', description: 'Техническая поддержка и после сдачи проекта.' },
      ],
    },
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
      titleHighlight: 'направления,',
      description: 'Качественные и современные цифровые решения, которые выводят ваш бизнес на новый уровень.',
      label: 'Проект',
      github: 'GitHub',
      live: 'Live Demo',
      viewProject: 'Смотреть проект',
      emptyState: 'В этой категории пока нет проектов.',
      categories: { all: 'Все', landing: 'Landing Page', erp: 'ERP UI', website: 'Веб-сайт', telegram: 'Telegram Bot', admin: 'Admin Panel' },
      items: [
        { category: 'erp', title: 'ERP System UI', description: 'Frontend интерфейсы для внутренней системы: dashboard, таблицы, формы и управленческие модули.', tech: ['React', 'TypeScript', 'Dashboard UI'], image: 'ERP интерфейс, блоки аналитики и панель управления', imageSrc: erpImage, github: projectLinks.github, live: projectLinks.erp },
        { category: 'landing', title: 'Mirano Landing Page', description: 'Современная маркетинговая страница, которая премиально презентует бренд, услуги и портфолио.', tech: ['React', 'Tailwind', 'Framer Motion'], image: 'Luxury landing page, типографика и яркие CTA блоки', imageSrc: landingPageImage, github: projectLinks.github, live: projectLinks.mirano },
        { category: 'website', title: 'Tripzyy Web Sayt', description: 'Профессиональный корпоративный сайт с разделами о компании, услугах, портфолио и контактах.', tech: ['Frontend', 'Responsive', 'SEO'], image: 'Корпоративная страница, контентные блоки и премиальный фон', imageSrc: tripzyyImage, github: projectLinks.github, live: projectLinks.tripzyy },
      ],
    },
    services: {
      eyebrow: 'Услуги',
      title: 'Коротко и по делу об услугах.',
      description: 'Полное решение для сайтов, Telegram-ботов, Full Stack приложений и бизнес-систем.',
      items: [
        { title: 'Разработка сайтов', description: 'Landing page, корпоративный сайт, интернет-магазин и другие современные веб-сайты.' },
        { title: 'Telegram-боты', description: 'Автоботы, прием заказов, платежная система, notification и админ-панель.' },
        { title: 'Full Stack приложения', description: 'Веб-платформы, полноценно работающие на frontend и backend частях.' },
        { title: 'Admin Panel & CRM', description: 'Админ-панель, CRM, ERP, POS и системы управления бизнесом.' },
        { title: 'Backend API', description: 'REST API и backend системы на основе Node.js / Express.' },
        { title: 'API интеграция', description: 'Интеграция платежных, Telegram и других внешних сервисов.' },
      ],
    },
    technologies: {
      eyebrow: 'Технологии',
      title: 'Технологии, которые я использую в работе.',
      description: 'Надежный и современный стек для frontend, backend, баз данных и интеграций.',
      categories: { frontend: 'Frontend', backend: 'Backend', database: 'База данных', tools: 'Инструменты', integration: 'Интеграция' },
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Если есть проект, напишите.',
      description: 'Если вам нужен сайт, Telegram-бот, Full Stack приложение или ERP/CRM, со мной можно связаться.',
      form: {
        name: 'Имя', namePlaceholder: 'Ваше имя', email: 'Email', emailPlaceholder: 'Ваш email', type: 'Тип проекта',
        typePlaceholder: 'ERP, landing page, веб-сайт...', message: 'Сообщение', messagePlaceholder: 'Опишите, какой проект вам нужен.',
        sending: 'Отправляется...', submit: 'Отправить сообщение', success: 'Спасибо. Сообщение отправлено и придет на email.',
        error: 'Не удалось отправить сообщение. Попробуйте еще раз.', unconfigured: 'Form endpoint пока не подключен. Нужно добавить `VITE_FORMSPREE_ENDPOINT` в `.env`.',
      },
      quick: {
        eyebrow: 'Быстрая связь', title: 'Готов к Full Stack проекту.', placeholder: 'Ваш email', submit: 'Отправить',
        success: 'Блок связи уже готов в UI. Позже можно подключить email service.', idle: 'Также есть готовый блок для быстрой связи через GitHub и Telegram.',
      },
    },
    footer: { description: 'Портфолио Full Stack Developer, специализирующегося на сайтах, Telegram-ботах, Full Stack приложениях и системах ERP/CRM.', rights: 'Все права защищены.' },
  },
  en: {
    profile: {
      role: 'Full Stack Developer',
      shortBio: 'I have worked on websites, Telegram bots, ERP systems, landing pages, and different business projects. My main goal is to combine frontend and backend into one strong, reliable product.',
      location: 'Uzbekistan',
    },
    nav: { about: 'About', projects: 'Projects', services: 'Services', technologies: 'Technologies', contact: 'Contact', cta: 'Message me' },
    mobileMenu: { title: 'Navigation', open: 'Open menu', close: 'Close menu' },
    hero: {
      pill: 'Full Stack Developer',
      title: 'I build modern digital solutions.',
      highlight: 'digital solutions',
      description: 'I build websites, Telegram bots, and full stack applications. Clean code, modern design, and solutions focused on business results.',
      viewProjects: 'View projects',
      contact: 'Message me',
      marquee: [
        { title: 'Full Stack', description: 'I build frontend and backend together as one system.' },
        { title: 'Backend API', description: 'I write reliable APIs and services with Node.js and Express.' },
        { title: 'Telegram Bots', description: 'I build automated bots with payments and an admin panel.' },
        { title: 'ERP / CRM', description: 'I build panels for management and business processes.' },
        { title: 'Fast delivery', description: 'Quality code delivered on a clear timeline.' },
      ],
      profileBadge: 'Personal profile',
      positioning: 'Positioning',
      statusLabel: 'Status',
      statusTitle: 'Open for new projects',
      statusText: 'Full Stack development, backend API, and premium interface work.',
      companyLabel: 'Current company',
      companyText: 'I am currently working on this company’s projects. You can open their website with the button below.',
      companyAction: 'View',
    },
    metrics: [
      { value: '10+', label: 'Projects' },
      { value: '10+', label: 'Happy clients' },
      { value: '1+ year', label: 'Experience' },
      { value: '100%', label: 'Quality guarantee' },
    ],
    heroSignals: [
      { label: 'Interface systems', value: 'ERP dashboard, table, filter, and form flows' },
      { label: 'Interactivity', value: 'Hover, reveal, transition, and animations matched to user actions' },
      { label: 'Main focus', value: 'Fast Full Stack solutions built for real business needs' },
    ],
    homeServices: {
      eyebrow: 'Services',
      title: 'What I work on.',
      items: [
        { title: 'Websites', description: 'Landing pages, corporate sites, online stores, and business platforms.' },
        { title: 'Telegram Bot', description: 'Automated bots, orders, payments, and admin panel integration.' },
        { title: 'Full Stack', description: 'Web applications running on Frontend + Backend together.' },
        { title: 'Dashboard & CRM', description: 'Admin panels, CRM, ERP, POS, and business management systems.' },
      ],
    },
    whyChooseUs: {
      eyebrow: 'Why choose me',
      title: 'Result and quality are guaranteed.',
      items: [
        { title: 'Individual approach', description: 'A solution matched to each project’s business needs.' },
        { title: 'Modern design', description: 'Beautiful, professional, and responsive UI/UX.' },
        { title: 'Fast and reliable', description: 'Focus on performance and clean code.' },
        { title: 'Full Stack solution', description: 'Frontend and backend built as one system.' },
        { title: 'Ongoing support', description: 'Technical support after the project is delivered.' },
      ],
    },
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
      titleHighlight: 'directions',
      description: 'Quality, modern digital solutions that take your business to the next stage.',
      label: 'Project',
      github: 'GitHub',
      live: 'Live Demo',
      viewProject: 'View project',
      emptyState: 'There are no projects in this category yet.',
      categories: { all: 'All', landing: 'Landing Page', erp: 'ERP UI', website: 'Website', telegram: 'Telegram Bot', admin: 'Admin Panel' },
      items: [
        { category: 'erp', title: 'ERP System UI', description: 'Frontend interfaces for an internal system with dashboards, tables, forms, and management modules.', tech: ['React', 'TypeScript', 'Dashboard UI'], image: 'ERP interface, analytics blocks, and control panel', imageSrc: erpImage, github: projectLinks.github, live: projectLinks.erp },
        { category: 'landing', title: 'Mirano Landing Page', description: 'A modern marketing page that presents brand, services, and portfolio in a premium style.', tech: ['React', 'Tailwind', 'Framer Motion'], image: 'Luxury landing page with typography and bright CTA blocks', imageSrc: landingPageImage, github: projectLinks.github, live: projectLinks.mirano },
        { category: 'website', title: 'Tripzyy Website', description: 'A professional corporate website with company, services, portfolio, and contact sections.', tech: ['Frontend', 'Responsive', 'SEO'], image: 'Corporate page with content blocks and premium background', imageSrc: tripzyyImage, github: projectLinks.github, live: projectLinks.tripzyy },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Short and clear service offering.',
      description: 'End-to-end solutions for websites, Telegram bots, Full Stack apps, and business systems.',
      items: [
        { title: 'Website development', description: 'Landing pages, corporate sites, online stores, and other modern websites.' },
        { title: 'Telegram bots', description: 'Auto bots, order handling, payment systems, notifications, and admin panel.' },
        { title: 'Full Stack applications', description: 'Web platforms that work fully across the frontend and backend.' },
        { title: 'Admin Panel & CRM', description: 'Admin panel, CRM, ERP, POS, and business management systems.' },
        { title: 'Backend API', description: 'REST API and backend systems built with Node.js / Express.' },
        { title: 'API integration', description: 'Integrating payment, Telegram, and other external services.' },
      ],
    },
    technologies: {
      eyebrow: 'Technologies',
      title: 'Technologies I use in my work.',
      description: 'A reliable, modern stack for frontend, backend, databases, and integrations.',
      categories: { frontend: 'Frontend', backend: 'Backend', database: 'Database', tools: 'Tools', integration: 'Integration' },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'If you have a project, write to me.',
      description: 'If you need a website, Telegram bot, Full Stack app, or ERP/CRM, you can contact me.',
      form: {
        name: 'Name', namePlaceholder: 'Your name', email: 'Email', emailPlaceholder: 'Your email address', type: 'Project type',
        typePlaceholder: 'ERP, landing page, website...', message: 'Message', messagePlaceholder: 'Describe the kind of project you need.',
        sending: 'Sending...', submit: 'Send message', success: 'Thank you. Your message was sent and will arrive by email.',
        error: 'There was an error sending the message. Please try again.', unconfigured: 'The form endpoint is not connected yet. Add `VITE_FORMSPREE_ENDPOINT` to `.env`.',
      },
      quick: {
        eyebrow: 'Quick contact', title: 'Ready for a Full Stack project.', placeholder: 'Your email address', submit: 'Send',
        success: 'The contact UI is already prepared. An email service can be connected later.', idle: 'There is also a ready block for fast contact through GitHub and Telegram.',
      },
    },
    footer: { description: 'Full Stack Developer portfolio focused on building websites, Telegram bots, Full Stack apps, and ERP/CRM systems.', rights: 'All rights reserved.' },
  },
}
