import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  Braces,
  Code2,
  Database,
  Github,
  Globe2,
  Instagram,
  Layers3,
  Menu,
  MessageCircle,
  ServerCog,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import portrait from './assets/portrait-hero.svg'
import logo from './assets/logo.yusuf.png'
import codeBg from './assets/images/it_background_hd.webp'
import autoImage from './assets/LandingPage.png'
import tripzyImage from './assets/Tripzyy.png'
import superTourImage from './assets/frontend.png'
import miranoImage from './assets/images/grid_background_hd.webp'
import erpImage from './assets/ERP.png'
import './App.css'

const telegram = 'https://t.me/YusufDev_Uz'
const github = 'https://github.com/LatipovYusuf444'
const instagram = 'https://instagram.com/ys444v'

const projects = [
  { name:'AutoTuning', type:'Automotive Platform', desc:'Avtomobil tuning xizmatlari uchun premium web-platforma: zamonaviy UI, xizmatlar, portfolio va backend integratsiyasi.', tech:['React','TypeScript','Node.js','API'], image:autoImage, url:'https://auto-tuning-y9nn.vercel.app' },
  { name:'Tripzy', type:'Travel Experience', desc:'Sayohatni rejalashtirish va turizm xizmatlarini topish uchun responsive travel platforma.', tech:['React','TypeScript','Tailwind','Vercel'], image:tripzyImage, url:'https://tripzy.uz' },
  { name:'SuperTour', type:'Travel & Aviation', desc:'Avia va turizm xizmatlari uchun ko‘p tilli premium sayt, backend va PostgreSQL integratsiyasi bilan.', tech:['React','TypeScript','Backend','PostgreSQL'], image:superTourImage, url:'https://super-tour-xi.vercel.app' },
  { name:'Mirano Textile', type:'Corporate Website', desc:'To‘qimachilik ishlab chiqarish kompaniyasi uchun korporativ, responsive va brendga mos web-sayt.', tech:['React','TypeScript','Vite','Responsive UI'], image:miranoImage, url:'https://mirano-text.vercel.app' },
  { name:'YePost ERP', type:'ERP / POS System', desc:'Savdo, ombor, mijozlar, mahsulotlar va hisobotlarni yagona tizimda boshqarishga mo‘ljallangan ERP/POS platforma.', tech:['React','TypeScript','REST API','Dashboard'], image:erpImage, url:'https://ye-post.vercel.app' },
]

const services = [
  { icon:Globe2, title:'Web & Landing', text:'Tez, premium va barcha ekranlarga mos web-saytlar.', tone:'emerald' },
  { icon:ServerCog, title:'Backend & API', text:'Node.js backend, REST API va real biznes logikasi.', tone:'blue' },
  { icon:Bot, title:'Telegram Bot', text:'Buyurtma, admin, AI va avtomatlashtirish uchun botlar.', tone:'violet' },
  { icon:Database, title:'Admin & Database', text:'Admin panellar, PostgreSQL va ma’lumotlar boshqaruvi.', tone:'gold' },
]

const tech = ['React','TypeScript','Node.js','PostgreSQL']

function Brand(){
  return <a href="#home" className="brand">
    <span className="brand-logo-shell"><img src={logo} alt="YL logo"/></span>
    <span><b>Yusuf Latipov</b><small>Full-Stack Developer</small></span>
  </a>
}

function App(){
  const [menuOpen,setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(()=>{ const close=()=>setMenuOpen(false); window.addEventListener('resize',close); return()=>window.removeEventListener('resize',close) },[])

  const fade = reduceMotion ? {} : { initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:.16}, transition:{duration:.5} }

  return <div className="lux-site" style={{'--code-bg':`url(${codeBg})`} as React.CSSProperties}>
    <header className="lux-nav"><div className="container nav-inner">
      <Brand/>
      <nav className="desktop-nav"><a href="#home">Bosh sahifa</a><a href="#services">Xizmatlar</a><a href="#projects">Loyihalar</a><a href="#contact">Murojaat</a></nav>
      <a className="nav-telegram" href={telegram} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Telegram orqali yozish</a>
      <button className="menu-button" onClick={()=>setMenuOpen(v=>!v)} aria-label="Menu">{menuOpen?<X/>:<Menu/>}</button>
    </div>
    {menuOpen&&<div className="mobile-nav container"><a href="#home" onClick={()=>setMenuOpen(false)}>Bosh sahifa</a><a href="#services" onClick={()=>setMenuOpen(false)}>Xizmatlar</a><a href="#projects" onClick={()=>setMenuOpen(false)}>Loyihalar</a><a href="#contact" onClick={()=>setMenuOpen(false)}>Murojaat</a><a href={telegram} target="_blank" rel="noreferrer">Telegram orqali yozish <ArrowUpRight size={17}/></a></div>}
    </header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-code-scene" aria-hidden="true"/>
        <motion.div className="hero-copy" {...fade}>
          <div className="eyebrow"><Sparkles size={16}/> Premium digital solutions</div>
          <h1>Yusuf <span>Latipov</span></h1>
          <h2>Full-Stack Developer</h2>
          <p>G‘oyalarni zamonaviy, tez va real ishlaydigan digital mahsulotlarga aylantiraman — frontend, backend, API va avtomatlashtirish bir joyda.</p>
          <div className="tech-row">{tech.map((item,i)=><span key={item}>{i===3?<Database size={14}/>:<Code2 size={14}/>} {item}</span>)}</div>
          <div className="hero-actions"><a href={telegram} target="_blank" rel="noreferrer" className="btn primary"><MessageCircle size={18}/> Loyihani muhokama qilish</a><a href="#projects" className="btn secondary">Loyihalarni ko‘rish <ArrowUpRight size={18}/></a></div>
          <div className="availability"><i/> Buyurtmalar uchun ochiq <span>•</span> Toshkent / Remote</div>
        </motion.div>

        <motion.div className="hero-visual" {...fade} transition={{duration:.6,delay:.08}}>
          <div className="orb orb-a"><Braces size={22}/></div><div className="orb orb-b"><Database size={21}/></div><div className="orb orb-c"><Zap size={21}/></div>
          <div className="portrait-card"><div className="portrait-bar"><span className="dots"><i/><i/><i/></span><small>yusuf.dev</small><em>LIVE</em></div><div className="portrait-wrap"><img src={portrait} alt="Yusuf Latipov" width="720" height="975" fetchPriority="high"/><div className="portrait-overlay"/></div></div>
        </motion.div>
      </section>

      <motion.section className="stats container" {...fade}><div><Layers3/><span><b>5</b><small>Featured loyiha</small></span></div><div><Braces/><span><b>Full-Stack</b><small>Frontend + Backend</small></span></div><div><Globe2/><span><b>100%</b><small>Responsive UI</small></span></div><div><Zap/><span><b>Fast</b><small>Optimized delivery</small></span></div></motion.section>

      <section className="section container" id="services"><motion.div className="section-head" {...fade}><div><span>XIZMATLAR</span><h3>G‘oyadan tayyor mahsulotgacha.</h3></div><p>Dizayn, frontend, backend va integratsiyalarni bir-biriga mos, toza va kengaytirish mumkin bo‘lgan arxitekturada quraman.</p></motion.div>
        <div className="service-grid">{services.map((s,i)=>{const Icon=s.icon; return <motion.article className={`service-card ${s.tone}`} key={s.title} {...fade} transition={{duration:.45,delay:i*.05}}><div className="service-icon"><Icon/></div><h4>{s.title}</h4><p>{s.text}</p><span className="accent-line"/></motion.article>})}</div>
      </section>

      <section className="section projects-section" id="projects"><div className="container"><motion.div className="section-head" {...fade}><div><span>PORTFOLIO</span><h3>Tanlangan loyihalarim.</h3></div><p>Faqat asosiy real loyihalar. Har bir kartadan live saytga o‘tishingiz mumkin.</p></motion.div>
        <div className="project-grid">{projects.map((p,i)=><motion.article className={`project-card project-${i+1}`} key={p.name} {...fade} transition={{duration:.5,delay:(i%3)*.05}}><div className="project-image"><img src={p.image} alt={p.name} loading="lazy" decoding="async"/><div className="project-image-overlay"/><span className="project-index">0{i+1}</span></div><div className="project-content"><span className="project-type">{p.type}</span><h4>{p.name}</h4><p>{p.desc}</p><div className="stack">{p.tech.map(t=><span key={t}>{t}</span>)}</div><a href={p.url} target="_blank" rel="noreferrer">Loyihani ko‘rish <ArrowUpRight size={17}/></a></div></motion.article>)}</div>
      </div></section>

      <section className="section container" id="contact"><motion.div className="contact-card" {...fade}><div className="code-widget"><div><i/><i/><i/></div><code><b>const</b> nextProject = <span>"your idea"</span>;<br/><b>return</b> build(nextProject);</code></div><div><span className="contact-kicker">HAMKORLIK</span><h3>Loyihangizni boshlashga tayyormisiz?</h3><p>G‘oyangizni yozib yuboring. Vazifa, muddat va texnik yechimni muhokama qilib, sizga mos yo‘lni taklif qilaman.</p></div><a href={telegram} target="_blank" rel="noreferrer" className="btn primary"><MessageCircle size={18}/> Telegram orqali yozish</a></motion.div></section>
    </main>

    <footer><div className="container footer-inner"><Brand/><div className="socials"><a href={telegram} target="_blank" rel="noreferrer" aria-label="Telegram"><MessageCircle/></a><a href={github} target="_blank" rel="noreferrer" aria-label="Github"><Github/></a><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a></div><small>© 2026 Yusuf Latipov. Barcha huquqlar himoyalangan.</small></div></footer>
  </div>
}

export default App
