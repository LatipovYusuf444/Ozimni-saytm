import { motion, useReducedMotion } from 'framer-motion'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { fadeUp, viewportOnce } from '../lib/motion'

type AnimatedSectionProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>

export default function AnimatedSection<T extends ElementType = 'section'>({
  as,
  children,
  ...props
}: AnimatedSectionProps<T>) {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion.create(as ?? 'section')

  return (
    <Component
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      {...props}
    >
      {children}
    </Component>
  )
}
