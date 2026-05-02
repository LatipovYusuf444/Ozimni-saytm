import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Code2, Download, Mail, Rocket, Trophy, UserRound, Users } from 'lucide-react'
import aboutPortrait from '../assets/images/ozmnirasmim.webp'
import AnimatedSection from '../components/AnimatedSection'
import TechGlyph from '../components/TechGlyph'
import { aboutPageContent, aboutTechItems } from '../content/siteContent'
import type { AppLanguage } from '../i18n'

type AboutPageContent = (typeof aboutPageContent)[AppLanguage]

type AboutPageProps = {
  aboutPage: AboutPageContent
}

function AboutPage({ aboutPage }: AboutPageProps) {
  return (
    <>
    <AnimatedSection id="about" className="about-page w-full max-w-none px-3 py-8 sm:px-4 lg:px-6 xl:px-8">
      <div className="about-page__glow" />
      <div className="about-hero">
        <div className="about-hero__copy">
          <span className="about-badge"><UserRound size={14} />{aboutPage.badge}</span>
          <h1 className="about-hero__title">
            {aboutPage.titlePrefix} <br />
            <span>{aboutPage.highlightedName}</span> {aboutPage.titleSuffix}
          </h1>
          <p className="about-hero__text">{aboutPage.description}</p>
          <div className="about-hero__actions">
            <a className="about-button about-button--primary" href="#projects">{aboutPage.projectsButton}<ArrowRight size={17} /></a>
            <a className="about-button about-button--secondary" href="#contact">{aboutPage.cvButton}<Download size={15} /></a>
          </div>
        </div>
    
        <div className="about-hero__portrait">
          <img src={aboutPortrait} alt={aboutPage.imageAlt} loading="eager" decoding="async" />
        </div>
    
        <div className="about-stats">
          {aboutPage.stats.map((stat, index) => {
            const icons = [Rocket, Code2, Users, Trophy]
            const Icon = icons[index] ?? Trophy
            return (
              <motion.div key={stat.label} className="about-stat" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.08, duration: 0.5 }}>
                <span className="about-stat__icon"><Icon size={19} /></span>
                <div>
                  <p className="about-stat__value">{stat.value}</p>
                  <p className="about-stat__label">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    
      <div className="about-path-panel">
        <div className="about-path-panel__intro">
          <p className="about-section-label">{aboutPage.pathEyebrow}</p>
          <h2>{aboutPage.pathTitle}</h2>
        </div>
        <div className="about-path-cards">
          {aboutPage.path.map((item, index) => {
            const icons = [BookOpen, Code2, Rocket]
            const Icon = icons[index] ?? Rocket
            return (
              <motion.article key={item.step} className="about-path-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.1, duration: 0.52 }}>
                <span className="about-path-card__step">{item.step}</span>
                <Icon className="about-path-card__icon" size={30} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    
      <div className="about-tech-panel">
        <p className="about-section-label">{aboutPage.techEyebrow}</p>
        <h2>{aboutPage.techTitle}</h2>
        <div className="about-tech-grid">
          {aboutTechItems.map((item) => (
            <div key={item} className="about-tech-item">
              <span><TechGlyph label={item} /></span>
              <p>{item === 'Motion' ? 'Framer Motion' : item}</p>
            </div>
          ))}
        </div>
      </div>
    
      <div className="about-cta-panel">
        <div className="about-cta-panel__icon"><Mail size={34} /></div>
        <div>
          <p className="about-section-label">{aboutPage.ctaEyebrow}</p>
          <h2>{aboutPage.ctaTitle}</h2>
          <p>{aboutPage.ctaText}</p>
        </div>
        <a className="about-button about-button--primary" href="#contact">{aboutPage.ctaButton}<ArrowRight size={17} /></a>
      </div>
    </AnimatedSection>
    </>
  )
}

export default AboutPage
