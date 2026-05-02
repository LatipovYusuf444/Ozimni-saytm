export const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
export type PageId = 'home' | 'about' | 'projects' | 'services' | 'contact'
export const pageIds: PageId[] = ['home', 'about', 'projects', 'services', 'contact']

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
  telegram: 'https://t.me/ysvfl444',
  instagram: 'https://www.instagram.com/ysvf.l444?igsh=MTRxb3VmZXQ5MzVzbA==',
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
    eyebrow: 'РњРѕР№ РїСѓС‚СЊ',
    title: 'Р“Р»Р°РІРЅС‹Рµ С‚РѕС‡РєРё СЂРѕСЃС‚Р° РїРѕСЃР»Рµ Р±Р»РѕРєР° РїСЂРѕРµРєС‚РѕРІ.',
    description: 'Р­С‚РѕС‚ Р±Р»РѕРє РїРѕРєР°Р·С‹РІР°РµС‚, РєР°Рє С„РѕСЂРјРёСЂРѕРІР°Р»СЃСЏ РјРѕР№ РїСѓС‚СЊ РІРѕ frontend. РћРЅ РІРґРѕС…РЅРѕРІР»РµРЅ РїСЂРёРјРµСЂРѕРј, РЅРѕ СЃРѕР±СЂР°РЅ РІ СЃС‚РёР»Рµ РјРѕРµРіРѕ РїРѕСЂС‚С„РѕР»РёРѕ Рё СЃ РґСЂСѓРіРѕР№ РєРѕРјРїРѕР·РёС†РёРµР№.',
    items: [
      {
        point: 'Р­С‚Р°Рї A',
        title: 'РћСЃРЅРѕРІР° frontend',
        text: 'Р­С‚Р°Рї, РіРґРµ СЃ РїРѕРјРѕС‰СЊСЋ HTML, CSS, SCSS Рё Git СЏ РЅР°СѓС‡РёР»СЃСЏ С‡РёСЃС‚Рѕ СЃРѕР±РёСЂР°С‚СЊ РІРёР·СѓР°Р»СЊРЅСѓСЋ С‡Р°СЃС‚СЊ СЃР°Р№С‚Р°, РґРµСЂР¶Р°С‚СЊ СЃС‚СЂСѓРєС‚СѓСЂСѓ Рё РїРѕР»СѓС‡Р°С‚СЊ РїРµСЂРІС‹Рµ СЂРµР°Р»СЊРЅС‹Рµ СЂРµР·СѓР»СЊС‚Р°С‚С‹.',
        result: 'Р РµР·СѓР»СЊС‚Р°С‚: РІС‹СЂРѕСЃР»Р° СЃРєРѕСЂРѕСЃС‚СЊ СЃР±РѕСЂРєРё СЃС‚СЂР°РЅРёС†, РїРѕСЏРІРёР»Р°СЃСЊ С‡РёСЃС‚Р°СЏ РІРµСЂСЃС‚РєР° Рё РЅР°РґРµР¶РЅР°СЏ Р±Р°Р·Р° frontend.',
        visuals: ['HTML', 'CSS', 'SCSS', 'Git', 'GitHub'],
      },
      {
        point: 'Р­С‚Р°Рї B',
        title: 'Р§РёСЃС‚С‹Р№ JavaScript',
        text: 'Р­С‚Р°Рї РїРµСЂРµС…РѕРґР° РѕС‚ СЃС‚Р°С‚РёС‡РЅС‹С… СЃС‚СЂР°РЅРёС† Рє РёРЅС‚РµСЂР°РєС‚РёРІРЅС‹Рј РёРЅС‚РµСЂС„РµР№СЃР°Рј С‡РµСЂРµР· DOM, СЃРѕР±С‹С‚РёСЏ, API Рё Р±РѕР»РµРµ СЃРёСЃС‚РµРјРЅРѕРµ РјС‹С€Р»РµРЅРёРµ.',
        result: 'Р РµР·СѓР»СЊС‚Р°С‚: СЏ РЅР°С‡Р°Р» РїРёСЃР°С‚СЊ РґРёРЅР°РјРёС‡РµСЃРєРёРµ Р±Р»РѕРєРё, form logic Рё СЂРµР°Р»СЊРЅСѓСЋ РёРЅС‚РµСЂР°РєС‚РёРІРЅРѕСЃС‚СЊ РґР»СЏ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ.',
        visuals: ['JavaScript', 'DOM', 'API', 'Logic'],
      },
      {
        point: 'Р­С‚Р°Рї C',
        title: 'Р­РєРѕСЃРёСЃС‚РµРјР° React',
        text: 'Р­С‚Р°Рї, РіРґРµ СЃ React, TypeScript, Tailwind Рё Framer Motion СЏ РІС‹С€РµР» РЅР° СЃРёСЃС‚РµРјРЅСѓСЋ СЃР±РѕСЂРєСѓ portfolio, landing page Рё ERP РёРЅС‚РµСЂС„РµР№СЃРѕРІ.',
        result: 'Р РµР·СѓР»СЊС‚Р°С‚: СЏ РІС‹С€РµР» РЅР° СѓСЂРѕРІРµРЅСЊ Р±РѕР»РµРµ СЃР»РѕР¶РЅС‹С… dashboard, component architecture Рё frontend-СЂРµС€РµРЅРёР№ РґР»СЏ СЂРµР°Р»СЊРЅРѕРіРѕ Р±РёР·РЅРµСЃР°.',
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
    title: 'РљР°Рє СЏ РїСЂРµРІСЂР°С‰Р°СЋ РїСЂРѕРµРєС‚ РЅРµ РїСЂРѕСЃС‚Рѕ РІ РєСЂР°СЃРёРІСѓСЋ СЃС‚СЂР°РЅРёС†Сѓ, Р° РІ СЂР°Р±РѕС‡РёР№ РїСЂРѕРґСѓРєС‚.',
    description: 'Р—РґРµСЃСЊ СЏ РїРѕРєР°Р·Р°Р» С‚РёРїРёС‡РЅС‹Р№ РґР»СЏ СЃРµР±СЏ РїРѕРґС…РѕРґ: СЃ С‡РµРіРѕ РЅР°С‡РёРЅР°РµС‚СЃСЏ Р·Р°РґР°С‡Р°, РЅР° С‡С‚Рѕ СЏ СЃРјРѕС‚СЂСЋ РІ РїРµСЂРІСѓСЋ РѕС‡РµСЂРµРґСЊ Рё РєР°РєРѕР№ СЂРµР·СѓР»СЊС‚Р°С‚ РґРѕР»Р¶РµРЅ РїРѕР»СѓС‡РёС‚СЊ Р±РёР·РЅРµСЃ Рё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ.',
    featured: {
      label: 'РћСЃРЅРѕРІРЅРѕР№ РїРѕРґС…РѕРґ',
      title: 'Р’ ERP Рё landing page РїСЂРѕРµРєС‚Р°С… СЏ СЃРЅР°С‡Р°Р»Р° СЃС‚СЂРѕСЋ СЃРёСЃС‚РµРјСѓ, Р° РїРѕС‚РѕРј СѓСЃРёР»РёРІР°СЋ РІРёР·СѓР°Р».',
      text: 'Р•СЃР»Рё РІРЅСѓС‚СЂРё РёРЅС‚РµСЂС„РµР№СЃР° РЅРµС‚ Р»РѕРіРёРєРё, РїРѕС‚РѕРєР° Рё РїРѕРЅСЏС‚РЅС‹С… РїСЂРёРѕСЂРёС‚РµС‚РѕРІ, РґР°Р¶Рµ РєСЂР°СЃРёРІС‹Р№ РґРёР·Р°Р№РЅ Р±С‹СЃС‚СЂРѕ С‚РµСЂСЏРµС‚ С†РµРЅРЅРѕСЃС‚СЊ. РџРѕСЌС‚РѕРјСѓ СЏ СЃРѕР±РёСЂР°СЋ Р±Р»РѕРєРё С‡РµСЂРµР· user flow, component structure Рё СЂРµР°Р»СЊРЅС‹Рµ СЃС†РµРЅР°СЂРёРё РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ.',
      imageAlt: 'РћР±Р»РѕР¶РєР° case study',
      tags: ['User Flow', 'Structure', 'Real Usage'],
    },
    cards: [
      {
        step: '01',
        title: 'РџСЂРѕР±Р»РµРјР°',
        text: 'Р’Рѕ РјРЅРѕРіРёС… РїСЂРѕРµРєС‚Р°С… СЃС‚СЂР°РЅРёС†Р° РІС‹РіР»СЏРґРёС‚ РєСЂР°СЃРёРІРѕ, РЅРѕ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ РЅРµ СЃСЂР°Р·Сѓ РїРѕРЅРёРјР°РµС‚, РєСѓРґР° РЅР°Р¶РёРјР°С‚СЊ, РєР°Рє СЂР°Р±РѕС‚Р°РµС‚ С„РѕСЂРјР° Рё РєСѓРґР° РІРµРґРµС‚ РЅСѓР¶РЅРѕРµ РґРµР№СЃС‚РІРёРµ.',
      },
      {
        step: '02',
        title: 'Р РµС€РµРЅРёРµ',
        text: 'РЇ СЃРѕР±РёСЂР°СЋ layout С‡РµСЂРµР· hierarchy, РІС‹РЅРѕС€Сѓ РІР°Р¶РЅС‹Рµ CTA РІРїРµСЂРµРґ, РґРµР»Р°СЋ component-СЃС‚СЂСѓРєС‚СѓСЂСѓ РїСЂРёРіРѕРґРЅРѕР№ РґР»СЏ РїРѕРІС‚РѕСЂРЅРѕРіРѕ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ Рё РѕСЃС‚Р°РІР»СЏСЋ Р°РЅРёРјР°С†РёСЋ С‚РѕР»СЊРєРѕ С‚Р°Рј, РіРґРµ РѕРЅР° СЂРµР°Р»СЊРЅРѕ СѓСЃРёР»РёРІР°РµС‚ РёРЅС‚РµСЂС„РµР№СЃ.',
      },
      {
        step: '03',
        title: 'Р РµР·СѓР»СЊС‚Р°С‚',
        text: 'Р’ РёС‚РѕРіРµ РёРЅС‚РµСЂС„РµР№СЃ РІС‹РіР»СЏРґРёС‚ premium, Р±С‹СЃС‚СЂРµРµ СЃС‡РёС‚С‹РІР°РµС‚СЃСЏ, Р»СѓС‡С€Рµ СЂР°Р±РѕС‚Р°РµС‚ РЅР° РјРѕР±РёР»СЊРЅС‹С… СѓСЃС‚СЂРѕР№СЃС‚РІР°С… Рё РѕСЃС‚Р°РµС‚СЃСЏ РіРѕС‚РѕРІС‹Рј Рє РґР°Р»СЊРЅРµР№С€РµРјСѓ СЂРѕСЃС‚Сѓ РїСЂРѕРґСѓРєС‚Р°.',
      },
    ],
    metrics: [
      { value: 'UI + Logic', label: 'РЎРѕР±РёСЂР°СЋС‚СЃСЏ РІРјРµСЃС‚Рµ' },
      { value: 'Responsive', label: 'Desktop Рё С‚РµР»РµС„РѕРЅ' },
      { value: 'Clean Delivery', label: 'РљР°С‡РµСЃС‚РІРѕ СЃРґР°С‡Рё' },
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
    resourcesList: ['Blog', 'Portfolio', 'Resume', 'Case Studies'],
    location: "Toshkent, O'zbekiston",
    questionTitle: 'Savollaringiz bormi?',
    questionText: 'Birgalikda ajoyib loyihalar yaratamiz.',
    privacy: 'Maxfiylik siyosati',
    terms: 'Foydalanish shartlari',
  },
  ru: {
    navigation: 'РќР°РІРёРіР°С†РёСЏ',
    resources: 'Р РµСЃСѓСЂСЃС‹',
    contacts: 'РљРѕРЅС‚Р°РєС‚С‹',
    subscribe: 'РџРѕРґРїРёСЃР°С‚СЊСЃСЏ',
    subscribeText: 'РџРѕР»СѓС‡Р°Р№С‚Рµ РЅРѕРІРѕСЃС‚Рё Рё РѕР±РЅРѕРІР»РµРЅРёСЏ Рѕ РЅРѕРІС‹С… РїСЂРѕРµРєС‚Р°С… РїРµСЂРІС‹РјРё.',
    emailPlaceholder: 'Р’Р°С€ email',
    resourcesList: ['Р‘Р»РѕРі', 'РџРѕСЂС‚С„РѕР»РёРѕ', 'Р РµР·СЋРјРµ', 'РљРµР№СЃС‹'],
    location: 'РўР°С€РєРµРЅС‚, РЈР·Р±РµРєРёСЃС‚Р°РЅ',
    questionTitle: 'Р•СЃС‚СЊ РІРѕРїСЂРѕСЃС‹?',
    questionText: 'РЎРѕР·РґР°РґРёРј СЃРёР»СЊРЅС‹Рµ РїСЂРѕРµРєС‚С‹ РІРјРµСЃС‚Рµ.',
    privacy: 'РџРѕР»РёС‚РёРєР° РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё',
    terms: 'РЈСЃР»РѕРІРёСЏ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ',
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
    questionText: 'LetвЂ™s build great projects together.',
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
    description: 'Frontend dasturchi va UI muhandis. Zamonaviy, tezkor va foydalanuvchi uchun qulay web yechimlar yarataman.',
    projectsButton: 'Mening loyihalarim',
    cvButton: 'Mening CV',
    stats: [
      { value: '2+', label: 'Yillik tajriba' },
      { value: '20+', label: 'Loyihalar' },
      { value: '10+', label: 'Mamnun mijozlar' },
      { value: '100%', label: 'Sifatga intilish' },
    ],
    pathEyebrow: "Mening yo'lim",
    pathTitle: "Doimiy o'sish\nva rivojlanish.",
    path: [
      { step: '01', title: 'Boshlanish', text: "Dasturlashga qiziqish bilan yo'lni boshladim va frontend asoslarini puxta o'rgandim." },
      { step: '02', title: 'Rivojlanish', text: "Real loyihalarda ishlash orqali ko'nikmalarimni rivojlantirdim va yangi texnologiyalarni o'rgandim." },
      { step: '03', title: 'Hozirgi vaqt', text: 'Zamonaviy yechimlar yaratib, foydalanuvchilar uchun qulay mahsulotlar ishlayman.' },
    ],
    techEyebrow: 'Texnologiyalar',
    techTitle: 'Asosiy texnologiyalarim.',
    ctaEyebrow: 'Hamkorlik qilaylik',
    ctaTitle: "Qiziqarli loyiha g'oyangiz bormi?",
    ctaText: 'Ushbu gвЂoyani birgalikda real natijaga aylantiraylik.',
    ctaButton: "Men bilan bog'laning",
    imageAlt: 'Latipov Yusuf portret rasmi',
  },
  ru: {
    badge: 'РћР±Рѕ РјРЅРµ',
    titlePrefix: 'РџСЂРёРІРµС‚! РЇ',
    highlightedName: 'Р›Р°С‚РёРїРѕРІ',
    titleSuffix: 'Р®СЃСѓС„.',
    description: 'Frontend-СЂР°Р·СЂР°Р±РѕС‚С‡РёРє Рё UI-РёРЅР¶РµРЅРµСЂ. РЎРѕР·РґР°СЋ СЃРѕРІСЂРµРјРµРЅРЅС‹Рµ, Р±С‹СЃС‚СЂС‹Рµ Рё СѓРґРѕР±РЅС‹Рµ web-СЂРµС€РµРЅРёСЏ РґР»СЏ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№.',
    projectsButton: 'РњРѕРё РїСЂРѕРµРєС‚С‹',
    cvButton: 'РњРѕС‘ CV',
    stats: [
      { value: '2+', label: 'Р“РѕРґР° РѕРїС‹С‚Р°' },
      { value: '20+', label: 'РџСЂРѕРµРєС‚РѕРІ' },
      { value: '10+', label: 'Р”РѕРІРѕР»СЊРЅС‹С… РєР»РёРµРЅС‚РѕРІ' },
      { value: '100%', label: 'Р¤РѕРєСѓСЃ РЅР° РєР°С‡РµСЃС‚РІРµ' },
    ],
    pathEyebrow: 'РњРѕР№ РїСѓС‚СЊ',
    pathTitle: 'РџРѕСЃС‚РѕСЏРЅРЅС‹Р№ СЂРѕСЃС‚\nРё СЂР°Р·РІРёС‚РёРµ.',
    path: [
      { step: '01', title: 'РќР°С‡Р°Р»Рѕ', text: 'РЇ РЅР°С‡Р°Р» РїСѓС‚СЊ СЃ РёРЅС‚РµСЂРµСЃР° Рє СЂР°Р·СЂР°Р±РѕС‚РєРµ Рё РєСЂРµРїРєРѕ РѕСЃРІРѕРёР» РѕСЃРЅРѕРІС‹ frontend.' },
      { step: '02', title: 'Р Р°Р·РІРёС‚РёРµ', text: 'Р§РµСЂРµР· СЂРµР°Р»СЊРЅС‹Рµ РїСЂРѕРµРєС‚С‹ СЂР°Р·РІРёРІР°Р» РЅР°РІС‹РєРё Рё РёР·СѓС‡Р°Р» РЅРѕРІС‹Рµ С‚РµС…РЅРѕР»РѕРіРёРё.' },
      { step: '03', title: 'РЎРµР№С‡Р°СЃ', text: 'РЎРѕР·РґР°СЋ СЃРѕРІСЂРµРјРµРЅРЅС‹Рµ СЂРµС€РµРЅРёСЏ Рё СѓРґРѕР±РЅС‹Рµ РїСЂРѕРґСѓРєС‚С‹ РґР»СЏ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№.' },
    ],
    techEyebrow: 'РўРµС…РЅРѕР»РѕРіРёРё',
    techTitle: 'РњРѕРё РѕСЃРЅРѕРІРЅС‹Рµ С‚РµС…РЅРѕР»РѕРіРёРё.',
    ctaEyebrow: 'Р”Р°РІР°Р№С‚Рµ СЃРѕС‚СЂСѓРґРЅРёС‡Р°С‚СЊ',
    ctaTitle: 'Р•СЃС‚СЊ РёРЅС‚РµСЂРµСЃРЅР°СЏ РёРґРµСЏ РїСЂРѕРµРєС‚Р°?',
    ctaText: 'Р”Р°РІР°Р№С‚Рµ РІРјРµСЃС‚Рµ РїСЂРµРІСЂР°С‚РёРј СЌС‚Сѓ РёРґРµСЋ РІ СЂРµР°Р»СЊРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚.',
    ctaButton: 'РЎРІСЏР·Р°С‚СЊСЃСЏ СЃРѕ РјРЅРѕР№',
    imageAlt: 'РџРѕСЂС‚СЂРµС‚ Р›Р°С‚РёРїРѕРІР° Р®СЃСѓС„Р°',
  },
  en: {
    badge: 'About me',
    titlePrefix: 'Hello! I am',
    highlightedName: 'Latipov',
    titleSuffix: 'Yusuf.',
    description: 'Frontend developer and UI engineer. I create modern, fast, and user-friendly web solutions.',
    projectsButton: 'My projects',
    cvButton: 'My CV',
    stats: [
      { value: '2+', label: 'Years experience' },
      { value: '20+', label: 'Projects' },
      { value: '10+', label: 'Happy clients' },
      { value: '100%', label: 'Quality focus' },
    ],
    pathEyebrow: 'My path',
    pathTitle: 'Constant growth\nand progress.',
    path: [
      { step: '01', title: 'Beginning', text: 'I started with curiosity for development and built a solid frontend foundation.' },
      { step: '02', title: 'Growth', text: 'Real projects helped me improve my skills and learn new technologies.' },
      { step: '03', title: 'Now', text: 'I create modern solutions and comfortable products for users.' },
    ],
    techEyebrow: 'Technologies',
    techTitle: 'My main technologies.',
    ctaEyebrow: 'LetвЂ™s collaborate',
    ctaTitle: 'Have an interesting project idea?',
    ctaText: 'LetвЂ™s turn that idea into a real result together.',
    ctaButton: 'Contact me',
    imageAlt: 'Portrait of Latipov Yusuf',
  },
} as const

export const aboutTechItems = ['React', 'TypeScript', 'Tailwind', 'JavaScript', 'HTML', 'CSS', 'Git', 'Figma', 'Motion']

