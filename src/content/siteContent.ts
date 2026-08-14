export const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
export type PageId = 'home' | 'about' | 'projects' | 'services' | 'technologies' | 'contact'
export const pageIds: PageId[] = ['home', 'about', 'projects', 'services', 'technologies', 'contact']

export function getPageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '')
  return pageIds.includes(hash as PageId) ? (hash as PageId) : 'home'
}

export const profile = {
  name: 'Latipov Yusuf',
  email: 'Ylatipov007@gmail.com',
  phone: '+998955595445',
  analyticsId: import.meta.env.VITE_GA_ID,
  github: 'https://github.com/LatipovYusuf444',
  telegram: 'https://t.me/YusufDev_Uz',
  instagram: 'https://www.instagram.com/ys444v?igsh=MTRxb3VmZXQ5MzVzbA==',
  facebook: 'https://www.facebook.com/share/18yxLpzS9V/',
  linkedin: 'https://linkedin.com',
  currentCompany: 'Height Company',
  currentCompanyUrl: 'https://height-company.uz/',
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const journeyContent = {
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

void journeyContent

export const caseStudyContent = {
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

export const footerContent = {
  uz: {
    navigation: 'Navigatsiya',
    resources: 'Resurslar',
    contacts: 'Kontaktlar',
    subscribe: "Obuna bo'ling",
    subscribeText: "Yangiliklar va yangi loyihalar haqida birinchilardan bo'lib xabar oling.",
    emailPlaceholder: 'Email manzilingiz',
    resourcesList: ['Blog', 'Portfolio', 'CV', 'Keyslar'],
    location: "Toshkent, O'zbekiston",
    questionTitle: 'Savollaringiz bormi?',
    questionText: 'Birgalikda ajoyib loyihalar yaratamiz.',
    privacy: 'Maxfiylik siyosati',
    terms: 'Foydalanish shartlari',
  },
  ru: {
    navigation: 'Навигация',
    resources: 'Ресурсы',
    contacts: 'Контакты',
    subscribe: 'Подписаться',
    subscribeText: 'Получайте новости и обновления о новых проектах первыми.',
    emailPlaceholder: 'Ваш email',
    resourcesList: ['Блог', 'Портфолио', 'Резюме', 'Кейсы'],
    location: 'Ташкент, Узбекистан',
    questionTitle: 'Есть вопросы?',
    questionText: 'Создадим сильные проекты вместе.',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
  },
  en: {
    navigation: 'Navigation',
    resources: 'Resources',
    contacts: 'Contacts',
    subscribe: 'Subscribe',
    subscribeText: 'Get updates about new projects and news first.',
    emailPlaceholder: 'Your email address',
    resourcesList: ['Blog', 'Portfolio', 'Resume', 'Case Studies'],
    location: 'Tashkent, Uzbekistan',
    questionTitle: 'Have questions?',
    questionText: 'Let’s build great projects together.',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
  },
} as const

export const aboutPageContent = {
  uz: {
    badge: 'Men haqimda',
    titlePrefix: 'Salom! Men',
    highlightedName: 'Latipov',
    titleSuffix: 'Yusuf.',
    description: "Full Stack Developer. Zamonaviy, tezkor va foydalanuvchi uchun qulay veb yechimlar yarataman — frontenddan backendgacha.",
    projectsButton: 'Mening loyihalarim',
    cvButton: 'Mening CV',
    stats: [
      { value: '10+', label: 'Loyihalar' },
      { value: '10+', label: 'Mamnun mijozlar' },
      { value: '1+', label: 'Yillik tajriba' },
      { value: '100%', label: 'Sifatga intilish' },
    ],
    pathEyebrow: 'Jarayonim',
    pathTitle: "Loyihani boshidan oxirigacha\ntartibli bosqichlarda olib boraman.",
    path: [
      { step: '01', title: 'Talablarni tahlil qilish', text: "Loyiha maqsadi va biznes talablarini o'rganib, texnik topshiriq tuzamiz." },
      { step: '02', title: 'Dizayn va prototip', text: "UI/UX struktura ishlab chiqilib, loyiha interfeysi kelishiladi." },
      { step: '03', title: 'Ishlab chiqish', text: "Frontend va backend toza va samarali kod asosida ishlab chiqiladi." },
      { step: '04', title: 'Test va sifat nazorati', text: "Funksiyalar, responsive holat va xatoliklar tekshiriladi." },
      { step: '05', title: 'Deploy', text: 'Loyiha production serverga joylashtiriladi.' },
      { step: '06', title: "Qo'llab-quvvatlash", text: 'Ishga tushgandan keyin ham kerakli texnik yordam ko\'rsatiladi.' },
    ],
    ctaEyebrow: 'Hamkorlik qilaylik',
    ctaTitle: "Qiziqarli loyiha g'oyangiz bormi?",
    ctaText: 'Ushbu g‘oyani birgalikda real natijaga aylantiraylik.',
    ctaButton: "Men bilan bog'laning",
    imageAlt: 'Latipov Yusuf portret rasmi',
  },
  ru: {
    badge: 'Обо мне',
    titlePrefix: 'Привет! Я',
    highlightedName: 'Латипов',
    titleSuffix: 'Юсуф.',
    description: 'Full Stack Developer. Создаю современные, быстрые и удобные web-решения для пользователей — от frontend до backend.',
    projectsButton: 'Мои проекты',
    cvButton: 'Моё CV',
    stats: [
      { value: '10+', label: 'Проектов' },
      { value: '10+', label: 'Довольных клиентов' },
      { value: '1+', label: 'Год опыта' },
      { value: '100%', label: 'Фокус на качестве' },
    ],
    pathEyebrow: 'Мой процесс',
    pathTitle: 'Веду проект от старта до сдачи\nчерез понятные этапы.',
    path: [
      { step: '01', title: 'Анализ требований', text: 'Изучаем цель проекта и бизнес-требования, составляем техническое задание.' },
      { step: '02', title: 'Дизайн и прототип', text: 'Разрабатывается UI/UX структура, согласовывается интерфейс проекта.' },
      { step: '03', title: 'Разработка', text: 'Frontend и backend разрабатываются на чистом и эффективном коде.' },
      { step: '04', title: 'Тестирование', text: 'Проверяются функции, адаптивность и возможные ошибки.' },
      { step: '05', title: 'Деплой', text: 'Проект разворачивается на production-сервере.' },
      { step: '06', title: 'Поддержка', text: 'После запуска оказывается необходимая техническая поддержка.' },
    ],
    ctaEyebrow: 'Давайте сотрудничать',
    ctaTitle: 'Есть интересная идея проекта?',
    ctaText: 'Давайте вместе превратим эту идею в реальный результат.',
    ctaButton: 'Связаться со мной',
    imageAlt: 'Портрет Латипова Юсуфа',
  },
  en: {
    badge: 'About me',
    titlePrefix: 'Hello! I am',
    highlightedName: 'Latipov',
    titleSuffix: 'Yusuf.',
    description: 'Full Stack Developer. I create modern, fast, and user-friendly web solutions — from frontend to backend.',
    projectsButton: 'My projects',
    cvButton: 'My CV',
    stats: [
      { value: '10+', label: 'Projects' },
      { value: '10+', label: 'Happy clients' },
      { value: '1+', label: 'Year of experience' },
      { value: '100%', label: 'Quality focus' },
    ],
    pathEyebrow: 'My process',
    pathTitle: 'I take a project from start to delivery\nthrough clear, orderly stages.',
    path: [
      { step: '01', title: 'Requirements analysis', text: 'We study the project goal and business requirements and prepare a technical brief.' },
      { step: '02', title: 'Design and prototype', text: 'The UI/UX structure is built and the project interface is agreed on.' },
      { step: '03', title: 'Development', text: 'Frontend and backend are built with clean, efficient code.' },
      { step: '04', title: 'Testing and QA', text: 'Features, responsiveness, and possible errors are checked.' },
      { step: '05', title: 'Deploy', text: 'The project is deployed to a production server.' },
      { step: '06', title: 'Support', text: 'Ongoing technical support is provided after launch.' },
    ],
    ctaEyebrow: 'Let’s collaborate',
    ctaTitle: 'Have an interesting project idea?',
    ctaText: 'Let’s turn that idea into a real result together.',
    ctaButton: 'Contact me',
    imageAlt: 'Portrait of Latipov Yusuf',
  },
} as const

