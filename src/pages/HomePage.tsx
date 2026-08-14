import { motion, useReducedMotion } from 'framer-motion'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import StatsBar from '../components/StatsBar'
import WhyChooseCard from '../components/WhyChooseCard'
import { homeServiceIcons, whyChooseIcons } from '../i18n'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

type HomePageProps = {
  pill: string
  title: string
  highlight: string
  description: string
  primaryAction: string
  secondaryAction: string
  stats: Array<{ value: string; label: string }>
  homeServices: { eyebrow: string; title: string; items: Array<{ title: string; description: string }> }
  whyChooseUs: { eyebrow: string; title: string; items: Array<{ title: string; description: string }> }
}

function HomePage({ pill, title, highlight, description, primaryAction, secondaryAction, stats, homeServices, whyChooseUs }: HomePageProps) {
  const reduceMotion = Boolean(useReducedMotion())
  const motionInitial = reduceMotion ? false : 'hidden'

  return (
    <>
      <Hero
        pill={pill}
        title={title}
        highlight={highlight}
        description={description}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      />

      <section id="home-services" className="home-services home-services--compact w-full max-w-none px-3 pb-8 pt-5 sm:px-4 sm:pt-8 lg:px-6 xl:px-8">
        <motion.div className="home-section-header" initial={motionInitial} whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <p className="section-eyebrow">{homeServices.eyebrow}</p>
          <h2 className="section-title">{homeServices.title}</h2>
        </motion.div>

        <motion.div className="home-services__grid" initial={motionInitial} whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
          {homeServices.items.map((item, index) => (
            <ServiceCard key={item.title} icon={homeServiceIcons[index] ?? homeServiceIcons[0]} title={item.title} description={item.description} />
          ))}
        </motion.div>

        <motion.div className="home-stats" initial={motionInitial} whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <StatsBar stats={stats} />
        </motion.div>
      </section>

      <section id="why-choose-us" className="why-choose w-full max-w-none px-3 py-8 sm:px-4 lg:px-6 xl:px-8">
        <motion.div className="home-section-header" initial={motionInitial} whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <p className="section-eyebrow">{whyChooseUs.eyebrow}</p>
          <h2 className="section-title">{whyChooseUs.title}</h2>
        </motion.div>

        <motion.div className="why-choose__grid" initial={motionInitial} whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
          {whyChooseUs.items.map((item, index) => (
            <WhyChooseCard key={item.title} icon={whyChooseIcons[index] ?? whyChooseIcons[0]} title={item.title} description={item.description} />
          ))}
        </motion.div>
      </section>
    </>
  )
}

export default HomePage
