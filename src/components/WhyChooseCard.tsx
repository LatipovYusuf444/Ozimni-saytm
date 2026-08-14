import { motion, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { fadeUp, smoothEase } from '../lib/motion'

type WhyChooseCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export default function WhyChooseCard({ icon: Icon, title, description }: WhyChooseCardProps) {
  const reduceMotion = Boolean(useReducedMotion())

  return (
    <motion.div
      className="luxury-card luxury-card--compact group"
      variants={fadeUp}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.26, ease: smoothEase }}
    >
      <span className="luxury-card__icon luxury-card__icon--sm">
        <Icon size={20} strokeWidth={1.8} />
      </span>
      <h3 className="luxury-card__title luxury-card__title--sm">{title}</h3>
      <p className="luxury-card__text luxury-card__text--sm">{description}</p>
    </motion.div>
  )
}
