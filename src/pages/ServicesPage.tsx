import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { serviceIcons, techStack, translations, type AppLanguage } from '../i18n'

type ServicesPageProps = {
  services: (typeof translations)[AppLanguage]['services']
}

function ServicesPage({ services }: ServicesPageProps) {
  const t = { services }

  return (
    <AnimatedSection id="services" className="w-full max-w-none px-6 py-14 lg:px-16 xl:px-20">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="section-eyebrow">{t.services.eyebrow}</p>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="mt-5 max-w-xl leading-7 text-slate-300">{t.services.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((item) => {
              const Icon = item.icon
              return <div key={item.label} className="stack-pill"><Icon size={16} />{item.label}</div>
            })}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <motion.div key={service.title} className="service-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55 }}>
                <div className="service-icon"><Icon size={22} /></div>
                <h3 className="mt-6 text-xl font-semibold text-slate-50">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ServicesPage
