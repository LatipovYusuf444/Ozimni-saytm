import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Atom, BadgeCheck, Boxes, CircuitBoard, Sparkles, Workflow } from 'lucide-react'
import mobileHeroImage from '../assets/images/mobile.webp'
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
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-black text-white">
      <video
        className="hero-video-bg pointer-events-none absolute inset-0 z-0 h-full min-h-screen w-full object-cover opacity-100"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero-code.mp4" type="video/mp4" />
      </video>
      <img className="hero-mobile-bg" src={mobileHeroImage} alt="" aria-hidden="true" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(3,7,18,0.82)_0%,rgba(3,7,18,0.52)_42%,rgba(3,7,18,0.12)_72%,rgba(3,7,18,0)_100%)] sm:bg-[linear-gradient(90deg,rgba(3,7,18,0.78)_0%,rgba(3,7,18,0.45)_38%,rgba(3,7,18,0.08)_68%,rgba(3,7,18,0)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(3,7,18,0.12)_0%,rgba(3,7,18,0)_36%,rgba(3,7,18,0.34)_100%)]" />
      <div className="absolute inset-0 z-[2] opacity-10 [background-image:linear-gradient(rgba(245,185,113,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(245,185,113,0.03)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute left-[5.2%] top-[9%] z-[2] h-1 w-1 rounded-full bg-[#F5B971] shadow-[70px_28px_0_#EAA14A,180px_-12px_0_#F5B971,395px_80px_0_#F5B971,560px_-6px_0_#EAA14A,820px_26px_0_#F5B971,690px_230px_0_#EAA14A,420px_330px_0_#F5B971]" />
      {heroParticles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="pointer-events-none absolute z-[2] h-1 w-1 rounded-full bg-[#F5B971] shadow-[0_0_18px_rgba(245,185,113,0.55)]"
          style={{ left: particle.left, top: particle.top }}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? undefined : { opacity: [0.25, 0.9, 0.25], y: [0, -12, 0] }}
          transition={reduceMotion ? undefined : { duration: 5.8, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 flex min-h-[calc(100vh-4.1rem)] w-full max-w-none flex-col justify-between px-4 pb-6 pt-7 sm:px-6 sm:pb-7 sm:pt-8 lg:px-16 xl:px-20">
        <motion.div className="grid flex-1 items-center gap-6 sm:gap-8 lg:grid-cols-[45%_55%]" initial={reduceMotion ? false : 'hidden'} animate="visible" variants={staggerContainer}>
          <div className="mx-auto w-full max-w-[24rem] pt-0 sm:mx-0 sm:max-w-[34.5rem]">
            <motion.div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#F5B971]/[0.35] bg-[#F5B971]/[0.055] px-2.5 py-1.5 text-[0.56rem] font-semibold text-white/90 shadow-[0_0_38px_rgba(245,185,113,0.12)] backdrop-blur-xl sm:px-4 sm:py-2 sm:text-[0.7rem]" variants={fadeUp}>
              <Sparkles size={13} className="text-[#F5B971]" />
              <span className="truncate">{pill}</span>
            </motion.div>

            <motion.div className="mt-4 text-[0.62rem] font-extrabold uppercase tracking-[0.26em] text-[#F5B971] sm:mt-5 sm:text-[0.72rem] sm:tracking-[0.55em]" variants={revealFromLeft}>
              {role}
            </motion.div>
            <motion.h1 className="mt-4 max-w-[43rem] whitespace-pre-line text-[1.86rem] font-bold leading-[1.1] text-white sm:mt-5 sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.25rem]" variants={fadeUp}>
              {renderGoldHeadline(title)}
            </motion.h1>
            <motion.div className="mt-4 max-w-[23rem] text-[0.92rem] leading-6 text-white/[0.78] sm:mt-5 sm:max-w-[26rem] sm:text-[1rem] sm:leading-7" variants={fadeUp}>
              {description}
            </motion.div>

            <motion.div className="mt-5 flex flex-col items-center gap-3 sm:mt-6 sm:flex-row sm:items-stretch sm:gap-4" variants={staggerContainer}>
              <motion.a
                className="group inline-flex min-h-[2.62rem] w-full max-w-[21rem] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#F5B971] to-[#EAA14A] px-5 text-[0.92rem] font-semibold text-[#120b05] shadow-[0_16px_50px_-22px_rgba(245,185,113,0.8)] transition duration-300 hover:shadow-[0_0_25px_rgba(245,185,113,0.5)] sm:min-h-[2.9rem] sm:w-auto sm:max-w-none sm:gap-3 sm:px-7 sm:text-base"
                href="#projects"
                variants={fadeUp}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.24, ease: smoothEase }}
              >
                {primaryAction}
                <ArrowRight size={17} className="transition group-hover:translate-x-[5px]" />
              </motion.a>
              <motion.a
                className="inline-flex min-h-[2.62rem] w-full max-w-[21rem] items-center justify-center rounded-full border border-[#F5B971]/[0.28] bg-white/[0.025] px-5 text-[0.92rem] font-semibold text-white shadow-[0_16px_44px_-28px_rgba(245,185,113,0.42)] backdrop-blur-xl transition duration-300 hover:border-[#F5B971]/70 hover:bg-[#F5B971]/10 sm:min-h-[2.9rem] sm:w-auto sm:max-w-none sm:px-7 sm:text-base"
                href="#contact"
                variants={fadeUp}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.24, ease: smoothEase }}
              >
                {secondaryAction}
              </motion.a>
            </motion.div>

          </div>

          <div className="hidden lg:block" />
        </motion.div>

        <motion.div className="mx-auto grid w-full max-w-[24rem] min-w-0 gap-3 pt-5 sm:max-w-none sm:gap-4 sm:pt-6 sm:grid-cols-2 lg:grid-cols-5" initial={reduceMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          {features.map((feature, index) => (
            <FeatureCard key={feature} icon={featureIcons[index] ?? BadgeCheck} title={feature} description={featureDescriptions[index] ?? featureDescriptions[0]} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
