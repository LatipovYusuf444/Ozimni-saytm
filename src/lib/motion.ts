import type { Variants } from 'framer-motion'

export const viewportOnce = { once: true, amount: 0.22 }

export const smoothEase = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: smoothEase,
    },
  },
}

export const revealFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.68,
      ease: smoothEase,
    },
  },
}

export const softFade: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
}
