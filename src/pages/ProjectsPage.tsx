import { motion } from 'framer-motion'
import { Github, Globe } from 'lucide-react'
import erpImage from '../assets/ERP.png'
import AnimatedSection from '../components/AnimatedSection'
import { caseStudyContent, containerVariants, itemVariants } from '../content/siteContent'
import { translations, type AppLanguage, type ProjectCategory } from '../i18n'

type ProjectItem = (typeof translations)[AppLanguage]['projects']['items'][number]
type CaseStudyContent = (typeof caseStudyContent)[AppLanguage]

type ProjectsPageProps = {
  projects: (typeof translations)[AppLanguage]['projects']
  categories: Array<{ key: ProjectCategory; label: string }>
  activeCategory: ProjectCategory
  visibleProjects: ProjectItem[]
  caseStudy: CaseStudyContent
  onCategoryChange: (category: ProjectCategory) => void
}

function ProjectsPage({ projects, categories, activeCategory, visibleProjects, caseStudy, onCategoryChange }: ProjectsPageProps) {
  const t = { projects }
  const setActiveCategory = onCategoryChange

  return (
    <>
    <AnimatedSection id="projects" className="w-full max-w-none px-6 py-14 lg:px-16 xl:px-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-eyebrow">{t.projects.eyebrow}</p>
          <h2 className="section-title">{t.projects.title}</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button key={category.key} type="button" className={`filter-pill ${activeCategory === category.key ? 'filter-pill-active' : ''}`} onClick={() => setActiveCategory(category.key)}>
              {category.label}
            </button>
          ))}
        </div>
      </div>
      <motion.div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
        {visibleProjects.map((project) => (
          <motion.article key={`${project.category}-${project.title}`} variants={itemVariants} className="project-card group">
            <a className="project-visual" aria-label={project.image} href={project.live} role="img" target="_blank" rel="noreferrer">
              <span className="project-badge">{t.projects.categories[project.category]}</span>
              {project.imageSrc ? (
                <>
                  <img className="project-image" src={project.imageSrc} alt={project.title} loading="lazy" decoding="async" />
                  <div className="project-image-overlay" />
                </>
              ) : (
                <>
                  <div className="project-lines" />
                  <div className="project-glow" />
                </>
              )}
            </a>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-slate-50">{project.title}</h3>
                <span className="text-xs uppercase tracking-[0.24em] text-stone-400">{t.projects.label}</span>
              </div>
              <p className="leading-7 text-slate-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="tag-chip">{item}</span>)}</div>
              <div className="flex gap-4 pt-2">
                <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100" href={project.github}><Github size={16} />{t.projects.github}</a>
                <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100" href={project.live}><Globe size={16} />{t.projects.live}</a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </AnimatedSection>
    
    <AnimatedSection className="w-full max-w-none px-6 py-6 lg:px-16 xl:px-20">
      <div className="case-study-shell">
        <div className="case-study-header">
          <div>
            <p className="section-eyebrow">{caseStudy.eyebrow}</p>
            <h2 className="section-title">{caseStudy.title}</h2>
          </div>
          <p className="case-study-header__text">{caseStudy.description}</p>
        </div>
    
        <div className="case-study-grid">
          <article className="case-study-feature">
            <div className="case-study-feature__visual">
              <img src={erpImage} alt={caseStudy.featured.imageAlt} loading="lazy" decoding="async" />
              <div className="case-study-feature__overlay" />
              <div className="case-study-feature__tags">
                {caseStudy.featured.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="case-study-feature__content">
              <p className="case-study-feature__label">{caseStudy.featured.label}</p>
              <h3 className="case-study-feature__title">{caseStudy.featured.title}</h3>
              <p className="case-study-feature__text">{caseStudy.featured.text}</p>
            </div>
          </article>
    
          <div className="case-study-side">
            <div className="case-study-metrics">
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label} className="case-study-metric">
                  <p className="case-study-metric__value">{metric.value}</p>
                  <p className="case-study-metric__label">{metric.label}</p>
                </div>
              ))}
            </div>
    
            <div className="case-study-cards">
              {caseStudy.cards.map((card) => (
                <article key={card.step} className="case-study-card">
                  <span className="case-study-card__step">{card.step}</span>
                  <h3 className="case-study-card__title">{card.title}</h3>
                  <p className="case-study-card__text">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
    </>
  )
}

export default ProjectsPage
