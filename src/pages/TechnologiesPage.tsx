import { motion, useReducedMotion, type Variants } from 'framer-motion'
import technologiesBg from '../assets/images/bgimg.webp'
import TechGlyph from '../components/TechGlyph'
import { technologyGroups, translations, type AppLanguage } from '../i18n'
import { smoothEase } from '../lib/motion'

type TechnologiesPageProps = {
  technologies: (typeof translations)[AppLanguage]['technologies']
}

const techReveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: smoothEase } },
}

const techStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

function TechnologiesPage({ technologies }: TechnologiesPageProps) {
  const reduceMotion = Boolean(useReducedMotion())
  const motionInitial = reduceMotion ? false : 'hidden'
  const viewport = { once: true, amount: 0.2 }

  return (
    <section id="technologies" className="technologies-page w-full max-w-none px-3 py-8 sm:px-4 lg:px-6 xl:px-8">
      <img className="technologies-bg" src={technologiesBg} alt="" aria-hidden="true" loading="eager" decoding="async" />
      <div className="technologies-page__glow" />
      <motion.div className="technologies-header" initial={motionInitial} whileInView="visible" viewport={viewport} variants={techReveal}>
        <p className="section-eyebrow technologies-eyebrow">{technologies.eyebrow}</p>
        <h2 className="section-title technologies-title">{technologies.title}</h2>
        <p className="technologies-description">{technologies.description}</p>
      </motion.div>

      <div className="technologies-groups">
        {technologyGroups.map((group) => (
          <motion.div key={group.key} className="tech-group" initial={motionInitial} whileInView="visible" viewport={viewport} variants={techStagger}>
            <motion.p className="tech-group__label" variants={techReveal}>
              {technologies.categories[group.key]}
            </motion.p>
            <div className="tech-group__grid">
              {group.items.map((item) => (
                <motion.div key={item} className="tech-item" variants={techReveal}>
                  <span className="tech-item__icon"><TechGlyph label={item} /></span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesPage
