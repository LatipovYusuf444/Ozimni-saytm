import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Atom, BadgeCheck, Boxes, CircuitBoard, Sparkles, Star, Workflow } from 'lucide-react'
import avatarOne from '../assets/avatars/avatar-1.svg'
import avatarTwo from '../assets/avatars/avatar-2.svg'
import avatarThree from '../assets/avatars/avatar-3.svg'
import heroWorkspaceImage from '../assets/images/bgimg.webp'
import { fadeUp, revealFromLeft, smoothEase, staggerContainer } from '../lib/motion'
import FeatureCard from './FeatureCard'

type HeroProps = {
  pill: string
  role: string
  title: string
  description: string
  primaryAction: string
  secondaryAction: string
  features: string[]
  stats: Array<{ value: string; label: string }>
}

const featureIcons = [CircuitBoard, Workflow, Atom, Boxes, BadgeCheck]
const avatars = [avatarOne, avatarTwo, avatarThree]
const featureDescriptions = [
  'Zamonaviy va modullar asosida tuzilgan arxitektura.',
  'Biznes jarayonlarini chuqur tushunib, frontendda aks ettiramiz.',
  'Interaktiv va jonli UI tajribasi yaratamiz.',
  "Har qanday qurilmada mukammal ko'rinish va ishlash.",
  'Sifatli kod, tezlik va barqarorlik kafolati.',
]

const heroParticles = [
  { left: '5%', top: '13%', delay: 0 },
  { left: '31%', top: '18%', delay: 0.7 },
  { left: '50%', top: '28%', delay: 1.2 },
  { left: '63%', top: '15%', delay: 0.35 },
  { left: '78%', top: '36%', delay: 1.6 },
  { left: '34%', top: '68%', delay: 0.95 },
]

function HeroImage({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="pointer-events-none absolute right-0 top-0 -z-20 hidden h-full w-[78%] overflow-hidden lg:block">
      <motion.img
        className="h-full w-full object-cover object-center opacity-95 saturate-[0.98]"
        src={heroWorkspaceImage}
        alt=""
        loading="eager"
        decoding="async"
        initial={reduceMotion ? false : { scale: 1.04, x: 18 }}
        animate={reduceMotion ? undefined : { scale: 1.08, x: 0 }}
        transition={reduceMotion ? undefined : { duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#05070d_0%,rgba(5,7,13,0.82)_14%,rgba(5,7,13,0.36)_34%,rgba(5,7,13,0.02)_68%,rgba(5,7,13,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.08)_0%,rgba(5,7,13,0)_48%,rgba(5,7,13,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_42%,rgba(245,185,113,0.18),transparent_34%)] mix-blend-screen" />
    </div>
  )
}

function renderGoldHeadline(title: string) {
  const target = 'frontend'
  const lowerTitle = title.toLowerCase()
  const start = lowerTitle.indexOf(target)

  if (start === -1) return title

  const end = start + target.length
  return (
    <>
      {title.slice(0, start)}
      <span className="hero-gradient-text bg-gradient-to-r from-[#F5B971] to-[#EAA14A] bg-clip-text text-transparent">{title.slice(start, end)}</span>
      {title.slice(end)}
    </>
  )
}

export default function Hero({ pill, role, title, description, primaryAction, secondaryAction, features }: HeroProps) {
  const reduceMotion = Boolean(useReducedMotion())

  return (
    <section className="relative isolate min-h-[calc(100vh-4.1rem)] overflow-hidden bg-[#05070d] text-white">
      <HeroImage reduceMotion={reduceMotion} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#05070d_0%,rgba(5,7,13,0.88)_32%,rgba(5,7,13,0.36)_58%,transparent_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(245,185,113,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(245,185,113,0.03)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute left-[5.2%] top-[9%] z-0 h-1 w-1 rounded-full bg-[#F5B971] shadow-[70px_28px_0_#EAA14A,180px_-12px_0_#F5B971,395px_80px_0_#F5B971,560px_-6px_0_#EAA14A,820px_26px_0_#F5B971,690px_230px_0_#EAA14A,420px_330px_0_#F5B971]" />
      {heroParticles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="pointer-events-none absolute z-0 h-1 w-1 rounded-full bg-[#F5B971] shadow-[0_0_18px_rgba(245,185,113,0.55)]"
          style={{ left: particle.left, top: particle.top }}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? undefined : { opacity: [0.25, 0.9, 0.25], y: [0, -12, 0] }}
          transition={reduceMotion ? undefined : { duration: 5.8, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 flex min-h-[calc(100vh-4.1rem)] w-full max-w-none flex-col justify-between px-5 pb-7 pt-8 sm:px-6 lg:px-16 xl:px-20">
        <motion.div className="grid flex-1 items-center gap-8 lg:grid-cols-[45%_55%]" initial={reduceMotion ? false : 'hidden'} animate="visible" variants={staggerContainer}>
          <div className="w-full max-w-[34.5rem] pt-0">
            <motion.div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#F5B971]/[0.35] bg-[#F5B971]/[0.055] px-3 py-2 text-[0.62rem] font-semibold text-white/90 shadow-[0_0_38px_rgba(245,185,113,0.12)] backdrop-blur-xl sm:px-4 sm:text-[0.7rem]" variants={fadeUp}>
              <Sparkles size={13} className="text-[#F5B971]" />
              <span className="truncate">{pill}</span>
            </motion.div>

            <motion.div className="mt-5 text-[0.66rem] font-extrabold uppercase tracking-[0.34em] text-[#F5B971] sm:text-[0.72rem] sm:tracking-[0.55em]" variants={revealFromLeft}>
              {role}
            </motion.div>
            <motion.h1 className="mt-5 max-w-[43rem] whitespace-pre-line text-[2.05rem] font-bold leading-[1.08] text-white sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.25rem]" variants={fadeUp}>
              {renderGoldHeadline(title)}
            </motion.h1>
            <motion.div className="mt-5 max-w-[26rem] text-[1rem] leading-7 text-white/[0.78]" variants={fadeUp}>
              {description}
            </motion.div>

            <motion.div className="mt-6 flex flex-col gap-4 sm:flex-row" variants={staggerContainer}>
              <motion.a
                className="group inline-flex min-h-[2.9rem] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F5B971] to-[#EAA14A] px-7 font-semibold text-[#120b05] shadow-[0_16px_50px_-22px_rgba(245,185,113,0.8)] transition duration-300 hover:shadow-[0_0_25px_rgba(245,185,113,0.5)]"
                href="#projects"
                variants={fadeUp}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.24, ease: smoothEase }}
              >
                {primaryAction}
                <ArrowRight size={17} className="transition group-hover:translate-x-[5px]" />
              </motion.a>
              <motion.a
                className="inline-flex min-h-[2.9rem] items-center justify-center rounded-full border border-[#F5B971]/[0.28] bg-white/[0.025] px-7 font-semibold text-white shadow-[0_16px_44px_-28px_rgba(245,185,113,0.42)] backdrop-blur-xl transition duration-300 hover:border-[#F5B971]/70 hover:bg-[#F5B971]/10"
                href="#contact"
                variants={fadeUp}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.24, ease: smoothEase }}
              >
                {secondaryAction}
              </motion.a>
            </motion.div>

            <motion.div className="mt-6 flex items-center gap-5" variants={fadeUp}>
              <div className="avatar-stack flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <img
                    key={avatar}
                    className="avatar-stack__item h-10 w-10 rounded-full border-2 border-[#05070d] object-cover shadow-[0_10px_28px_-12px_rgba(245,185,113,0.65)]"
                    src={avatar}
                    alt=""
                    loading="eager"
                    style={{ animationDelay: `${index * 140}ms` }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-[#F5B971]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" strokeWidth={1.6} className="drop-shadow-[0_0_8px_rgba(245,185,113,0.35)]" />
                  ))}
                </div>
                <div className="mt-1 text-[0.78rem] text-white/[0.72]">50+ loyiha muvaffaqiyatli bajarilgan</div>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </motion.div>

        <motion.div className="grid min-w-0 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-5" initial={reduceMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          {features.map((feature, index) => (
            <FeatureCard key={feature} icon={featureIcons[index] ?? BadgeCheck} title={feature} description={featureDescriptions[index] ?? featureDescriptions[0]} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
