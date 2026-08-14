import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import laptopImage from '../assets/images/noutbuk-code.webp'
import projectsBg from '../assets/images/fonbg.webp'
import StatsBar from '../components/StatsBar'
import { translations, type AppLanguage, type ProjectCategory } from '../i18n'
import { smoothEase } from '../lib/motion'

type ProjectItem = (typeof translations)[AppLanguage]['projects']['items'][number]

type ProjectsPageProps = {
  projects: (typeof translations)[AppLanguage]['projects']
  categories: Array<{ key: ProjectCategory; label: string }>
  activeCategory: ProjectCategory
  visibleProjects: ProjectItem[]
  onCategoryChange: (category: ProjectCategory) => void
  stats: Array<{ value: string; label: string }>
}

const projectReveal: Record<'left' | 'right' | 'up' | 'down' | 'zoom', Variants> = {
  left: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.05, ease: smoothEase } },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.05, ease: smoothEase } },
  },
  up: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.96, ease: smoothEase } },
  },
  down: {
    hidden: { opacity: 0, y: -18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.92, ease: smoothEase } },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: smoothEase } },
  },
}

const projectStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.04,
    },
  },
}

function renderGoldTitle(title: string, highlight: string) {
  if (!highlight) return title
  const start = title.indexOf(highlight)
  if (start === -1) return title
  const end = start + highlight.length
  return (
    <>
      {title.slice(0, start)}
      <span className="projects-hero__title-gold">{title.slice(start, end)}</span>
      {title.slice(end)}
    </>
  )
}

function ProjectsPage({ projects, categories, activeCategory, visibleProjects, onCategoryChange, stats }: ProjectsPageProps) {
  const t = { projects }
  const setActiveCategory = onCategoryChange
  const reduceMotion = Boolean(useReducedMotion())
  const motionInitial = reduceMotion ? false : 'hidden'
  const viewport = { once: true, amount: 0.22 }

  return (
    <section id="projects" className="projects-page w-full max-w-none">
      <img className="projects-bg" src={projectsBg} alt="" aria-hidden="true" loading="eager" decoding="async" />
      <div className="projects-page__glow" />

      <div className="projects-hero">
        <img className="projects-hero__laptop" src={laptopImage} alt="" aria-hidden="true" loading="eager" decoding="async" />
        <div className="projects-hero__overlay" />
        <div className="projects-hero__streak" aria-hidden="true" />

        <motion.div className="projects-hero__content" initial={motionInitial} whileInView="visible" viewport={viewport} variants={projectStagger}>
          <motion.p className="section-eyebrow projects-eyebrow" variants={projectReveal.down}>{t.projects.eyebrow}</motion.p>
          <motion.h1 className="projects-hero__title" variants={projectReveal.left}>{renderGoldTitle(t.projects.title, t.projects.titleHighlight)}</motion.h1>
          <motion.p className="projects-hero__description" variants={projectReveal.up}>{t.projects.description}</motion.p>
        </motion.div>
      </div>

      <motion.div className="projects-filters-row" initial={motionInitial} whileInView="visible" viewport={viewport} variants={projectReveal.up}>
        {categories.map((category) => (
          <button key={category.key} type="button" className={`filter-pill ${activeCategory === category.key ? 'filter-pill-active' : ''}`} onClick={() => setActiveCategory(category.key)}>
            {category.label}
          </button>
        ))}
      </motion.div>

      {visibleProjects.length > 0 ? (
        <motion.div className="projects-grid" initial={motionInitial} whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={projectStagger}>
          {visibleProjects.map((project, index) => {
            const cardVariants = [projectReveal.left, projectReveal.up, projectReveal.right, projectReveal.zoom]
            return (
              <motion.article key={`${project.category}-${project.title}`} variants={cardVariants[index % cardVariants.length] ?? projectReveal.up} className="project-card group">
                <a className="project-visual" aria-label={project.image} href={project.live} target="_blank" rel="noreferrer">
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
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__text">{project.description}</p>
                  <a className="project-card__cta" href={project.live} target="_blank" rel="noreferrer">
                    {t.projects.viewProject}
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      ) : (
        <motion.div className="projects-empty" initial={motionInitial} whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={projectReveal.up}>
          <p>{t.projects.emptyState}</p>
        </motion.div>
      )}

      <motion.div className="projects-stats" initial={motionInitial} whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={projectReveal.up}>
        <StatsBar stats={stats} />
      </motion.div>
    </section>
  )
}

export default ProjectsPage
