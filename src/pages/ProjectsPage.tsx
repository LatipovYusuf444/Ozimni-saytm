import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Github, Globe } from 'lucide-react'
import projectsBg from '../assets/images/fonbg.webp'
import { translations, type AppLanguage, type ProjectCategory } from '../i18n'
import { smoothEase } from '../lib/motion'

type ProjectItem = (typeof translations)[AppLanguage]['projects']['items'][number]

type ProjectsPageProps = {
  projects: (typeof translations)[AppLanguage]['projects']
  categories: Array<{ key: ProjectCategory; label: string }>
  activeCategory: ProjectCategory
  visibleProjects: ProjectItem[]
  onCategoryChange: (category: ProjectCategory) => void
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

function ProjectsPage({ projects, categories, activeCategory, visibleProjects, onCategoryChange }: ProjectsPageProps) {
  const t = { projects }
  const setActiveCategory = onCategoryChange
  const reduceMotion = Boolean(useReducedMotion())
  const motionInitial = reduceMotion ? false : 'hidden'
  const viewport = { once: true, amount: 0.22 }

  return (
    <>
    <section id="projects" className="projects-page w-full max-w-none px-3 py-8 sm:px-4 lg:px-6 xl:px-8">
      <img className="projects-bg" src={projectsBg} alt="" aria-hidden="true" loading="eager" decoding="async" />
      <div className="projects-page__glow" />
      <motion.div className="projects-header" initial={motionInitial} whileInView="visible" viewport={viewport} variants={projectStagger}>
        <motion.div variants={projectReveal.left}>
          <p className="section-eyebrow projects-eyebrow">{t.projects.eyebrow}</p>
          <h2 className="section-title projects-title">{t.projects.title}</h2>
        </motion.div>
        <motion.div className="projects-filters" variants={projectReveal.right}>
          {categories.map((category) => (
            <button key={category.key} type="button" className={`filter-pill ${activeCategory === category.key ? 'filter-pill-active' : ''}`} onClick={() => setActiveCategory(category.key)}>
              {category.label}
            </button>
          ))}
        </motion.div>
      </motion.div>
      <motion.div className="projects-grid" initial={motionInitial} whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={projectStagger}>
        {visibleProjects.map((project, index) => {
          const cardVariants = [projectReveal.left, projectReveal.up, projectReveal.right, projectReveal.zoom]
          return (
          <motion.article key={`${project.category}-${project.title}`} variants={cardVariants[index % cardVariants.length] ?? projectReveal.up} className="project-card group">
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
        )})}
      </motion.div>
    </section>
    </>
  )
}

export default ProjectsPage
