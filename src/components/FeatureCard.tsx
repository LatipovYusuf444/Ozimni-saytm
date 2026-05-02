import { motion, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { fadeUp, smoothEase } from '../lib/motion'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  const reduceMotion = Boolean(useReducedMotion())

  return (
    <motion.div
      className="group min-h-[6.35rem] rounded-[0.85rem] border border-white/[0.08] bg-[#080b12]/[0.62] px-3.5 py-3.5 shadow-[0_18px_54px_-38px_rgba(245,185,113,0.45)] backdrop-blur-2xl transition duration-300 hover:border-[#F5B971]/[0.38] hover:bg-[#F5B971]/[0.065] sm:min-h-[7.2rem] sm:rounded-[0.9rem] sm:px-4 sm:py-4"
      variants={fadeUp}
      whileHover={reduceMotion ? undefined : { y: -6, boxShadow: '0 22px 56px -34px rgba(245,185,113,0.9)' }}
      transition={{ duration: 0.28, ease: smoothEase }}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#F5B971]/[0.34] bg-[#F5B971]/10 text-[#F5B971] shadow-[0_0_30px_rgba(245,185,113,0.18)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_32px_rgba(245,185,113,0.36)] sm:h-10 sm:w-10">
          <Icon size={18} strokeWidth={1.8} className="sm:size-[19px]" />
        </span>
        <div className="min-w-0">
          <div className="max-w-none text-[0.78rem] font-extrabold leading-snug text-white sm:text-[0.84rem] lg:whitespace-nowrap">{title}</div>
          <div className="mt-1.5 max-w-[12rem] text-[0.62rem] leading-[1.5] text-white/[0.7] sm:mt-2 sm:text-[0.66rem]">{description}</div>
        </div>
      </div>
    </motion.div>
  )
}
