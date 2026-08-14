import { motion, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { fadeUp, smoothEase } from '../lib/motion'

type ServiceCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const reduceMotion = Boolean(useReducedMotion())

  return (
    <motion.div
      className="luxury-card group"
      variants={fadeUp}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.28, ease: smoothEase }}
    >
      <span className="luxury-card__icon">
        <Icon size={24} strokeWidth={1.8} />
      </span>
      <h3 className="luxury-card__title">{title}</h3>
      <p className="luxury-card__text">{description}</p>
    </motion.div>
  )
}
