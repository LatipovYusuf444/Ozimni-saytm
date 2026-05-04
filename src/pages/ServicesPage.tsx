import { motion, useReducedMotion, type Variants } from 'framer-motion'
import servicesBg from '../assets/images/it_background_hd.webp'
import { serviceIcons, techStack, translations, type AppLanguage } from '../i18n'
import { smoothEase } from '../lib/motion'

type ServicesPageProps = {
  services: (typeof translations)[AppLanguage]['services']
}

const serviceReveal: Record<'left' | 'right' | 'up' | 'zoom', Variants> = {
  left: {
    hidden: { opacity: 0, x: -34 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.95, ease: smoothEase } },
  },
  right: {
    hidden: { opacity: 0, x: 34 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.95, ease: smoothEase } },
  },
  up: {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.82, ease: smoothEase } },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.86, ease: smoothEase } },
  },
}

const servicesStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
}

function ServicesPage({ services }: ServicesPageProps) {
  const t = { services }
  const reduceMotion = Boolean(useReducedMotion())
  const motionInitial = reduceMotion ? false : 'hidden'
  const viewport = { once: true, amount: 0.24 }

  return (
    <section id="services" className="services-page w-full max-w-none px-3 py-8 sm:px-4 lg:px-6 xl:px-8">
      <img className="services-bg" src={servicesBg} alt="" aria-hidden="true" loading="eager" decoding="async" />
      <div className="services-page__glow" />
      <motion.div className="services-shell" initial={motionInitial} whileInView="visible" viewport={viewport} variants={servicesStagger}>
        <motion.div className="services-copy" variants={serviceReveal.left}>
          <p className="section-eyebrow services-eyebrow">{t.services.eyebrow}</p>
          <h2 className="section-title services-title">{t.services.title}</h2>
          <p className="services-description">{t.services.description}</p>
          <motion.div className="services-stack" variants={servicesStagger}>
            {techStack.map((item) => {
              const Icon = item.icon
              return <motion.div key={item.label} className="stack-pill" variants={serviceReveal.up}><Icon size={16} />{item.label}</motion.div>
            })}
          </motion.div>
        </motion.div>
        <motion.div className="services-grid" variants={servicesStagger}>
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            const cardVariants = [serviceReveal.up, serviceReveal.right, serviceReveal.left, serviceReveal.zoom]
            return (
              <motion.div key={service.title} className="service-card" variants={cardVariants[index % cardVariants.length]}>
                <div className="service-icon"><Icon size={22} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesPage
