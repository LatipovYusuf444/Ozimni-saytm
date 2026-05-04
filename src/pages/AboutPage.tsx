import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, BookOpen, Code2, Download, Mail, Rocket, Trophy, UserRound, Users } from 'lucide-react'
import aboutPortrait from '../assets/images/ozmnirasmim.webp'
import AnimatedSection from '../components/AnimatedSection'
import TechGlyph from '../components/TechGlyph'
import { aboutPageContent, aboutTechItems } from '../content/siteContent'
import type { AppLanguage } from '../i18n'
import { smoothEase, staggerContainer } from '../lib/motion'

type AboutPageContent = (typeof aboutPageContent)[AppLanguage]

type AboutPageProps = {
  aboutPage: AboutPageContent
}

const EXPERIENCE_START = new Date(2025, 9, 1)

function getExperienceMonths() {
  const now = new Date()
  return Math.max(0, (now.getFullYear() - EXPERIENCE_START.getFullYear()) * 12 + now.getMonth() - EXPERIENCE_START.getMonth())
}

const aboutReveal: Record<'left' | 'right' | 'up' | 'down' | 'zoom', Variants> = {
  left: {
    hidden: { opacity: 0, x: -54, filter: 'blur(12px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.86, ease: smoothEase } },
  },
  right: {
    hidden: { opacity: 0, x: 54, filter: 'blur(12px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.86, ease: smoothEase } },
  },
  up: {
    hidden: { opacity: 0, y: 38, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.72, ease: smoothEase } },
  },
  down: {
    hidden: { opacity: 0, y: -30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.72, ease: smoothEase } },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.94, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: smoothEase } },
  },
}

function AboutPage({ aboutPage }: AboutPageProps) {
  const experienceMonths = getExperienceMonths()
  const reduceMotion = Boolean(useReducedMotion())
  const motionInitial = reduceMotion ? false : 'hidden'
  const viewport = { once: true, amount: 0.28 }

  return (
    <>
    <AnimatedSection id="about" className="about-page w-full max-w-none px-3 py-8 sm:px-4 lg:px-6 xl:px-8">
      <div className="about-page__glow" />
      <div className="about-hero">
        <motion.div className="about-hero__copy" initial={motionInitial} whileInView="visible" viewport={viewport} variants={staggerContainer}>
          <motion.span className="about-badge" variants={aboutReveal.down}><UserRound size={14} />{aboutPage.badge}</motion.span>
          <motion.h1 className="about-hero__title" variants={aboutReveal.left}>
            {aboutPage.titlePrefix} <br />
            <span>{aboutPage.highlightedName}</span> {aboutPage.titleSuffix}
          </motion.h1>
          <motion.p className="about-hero__text" variants={aboutReveal.up}>{aboutPage.description}</motion.p>
          <motion.div className="about-hero__actions" variants={aboutReveal.up}>
            <a className="about-button about-button--primary" href="#projects">{aboutPage.projectsButton}<ArrowRight size={17} /></a>
            <a className="about-button about-button--secondary" href="#contact">{aboutPage.cvButton}<Download size={15} /></a>
          </motion.div>
        </motion.div>
    
        <motion.div className="about-hero__portrait" initial={motionInitial} whileInView="visible" viewport={viewport} variants={aboutReveal.right}>
          <img src={aboutPortrait} alt={aboutPage.imageAlt} loading="eager" decoding="async" />
        </motion.div>
    
        <motion.div className="about-stats" initial={motionInitial} whileInView="visible" viewport={{ once: true, amount: 0.45 }} variants={staggerContainer}>
          {aboutPage.stats.map((stat, index) => {
            const icons = [Rocket, Code2, Users, Trophy]
            const Icon = icons[index] ?? Trophy
            const value = index === 0 ? `${experienceMonths}+` : stat.value
            const label = stat.label
            const statVariants = [aboutReveal.left, aboutReveal.up, aboutReveal.down, aboutReveal.right]
            return (
              <motion.div key={stat.label} className="about-stat" variants={statVariants[index] ?? aboutReveal.up}>
                <span className="about-stat__icon"><Icon size={19} /></span>
                <div>
                  <p className="about-stat__value">{value}</p>
                  <p className="about-stat__label">{label}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    
      <motion.div className="about-path-panel" initial={motionInitial} whileInView="visible" viewport={viewport} variants={aboutReveal.left}>
        <motion.div className="about-path-panel__intro" variants={aboutReveal.left}>
          <p className="about-section-label">{aboutPage.pathEyebrow}</p>
          <h2>{aboutPage.pathTitle}</h2>
        </motion.div>
        <motion.div className="about-path-cards" variants={staggerContainer}>
          {aboutPage.path.map((item, index) => {
            const icons = [BookOpen, Code2, Rocket]
            const Icon = icons[index] ?? Rocket
            const cardVariants = [aboutReveal.left, aboutReveal.up, aboutReveal.right]
            return (
              <motion.article key={item.step} className="about-path-card" variants={cardVariants[index] ?? aboutReveal.up}>
                <span className="about-path-card__step">{item.step}</span>
                <Icon className="about-path-card__icon" size={30} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </motion.div>
    
      <motion.div className="about-tech-panel" initial={motionInitial} whileInView="visible" viewport={viewport} variants={aboutReveal.right}>
        <motion.p className="about-section-label" variants={aboutReveal.down}>{aboutPage.techEyebrow}</motion.p>
        <motion.h2 variants={aboutReveal.right}>{aboutPage.techTitle}</motion.h2>
        <motion.div className="about-tech-grid" variants={staggerContainer}>
          {aboutTechItems.map((item, index) => {
            const techVariants = [aboutReveal.up, aboutReveal.left, aboutReveal.right, aboutReveal.zoom]
            return (
            <motion.div key={item} className="about-tech-item" variants={techVariants[index % techVariants.length]}>
              <span><TechGlyph label={item} /></span>
              <p>{item === 'Motion' ? 'Framer Motion' : item}</p>
            </motion.div>
          )})}
        </motion.div>
      </motion.div>
    
      <motion.div className="about-cta-panel" initial={motionInitial} whileInView="visible" viewport={viewport} variants={aboutReveal.zoom}>
        <motion.div className="about-cta-panel__icon" variants={aboutReveal.left}><Mail size={34} /></motion.div>
        <motion.div variants={aboutReveal.up}>
          <p className="about-section-label">{aboutPage.ctaEyebrow}</p>
          <h2>{aboutPage.ctaTitle}</h2>
          <p>{aboutPage.ctaText}</p>
        </motion.div>
        <motion.a className="about-button about-button--primary" href="#contact" variants={aboutReveal.right}>{aboutPage.ctaButton}<ArrowRight size={17} /></motion.a>
      </motion.div>
    </AnimatedSection>
    </>
  )
}

export default AboutPage
