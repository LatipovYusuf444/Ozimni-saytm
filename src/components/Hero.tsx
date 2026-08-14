import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import mobileHeroImage from '../assets/images/mobile.webp'
import { fadeUp, smoothEase, staggerContainer } from '../lib/motion'

type HeroProps = {
  pill: string
  title: string
  highlight: string
  description: string
  primaryAction: string
  secondaryAction: string
}

function renderGoldHeadline(title: string, highlight: string) {
  if (!highlight) return title
  const lowerTitle = title.toLowerCase()
  const start = lowerTitle.indexOf(highlight.toLowerCase())

  if (start === -1) return title

  const end = start + highlight.length
  return (
    <>
      {title.slice(0, start)}
      <span className="hero-gradient-text bg-gradient-to-r from-[#E7AD43] to-[#FFD06A] bg-clip-text text-transparent">{title.slice(start, end)}</span>
      {title.slice(end)}
    </>
  )
}

export default function Hero({ pill, title, highlight, description, primaryAction, secondaryAction }: HeroProps) {
  const reduceMotion = Boolean(useReducedMotion())

  return (
    <section className="relative isolate flex items-center overflow-hidden bg-black text-white lg:min-h-screen">
      <video
        className="hero-video-bg pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full object-cover opacity-100"
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
      <div className="absolute inset-0 z-[2] opacity-10 [background-image:linear-gradient(rgba(231,173,67,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(231,173,67,0.03)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative z-10 w-full max-w-none px-4 py-8 sm:px-6 sm:py-10 lg:px-16 lg:py-0 xl:px-20">
        <motion.div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[45%_55%]" initial={reduceMotion ? false : 'hidden'} animate="visible" variants={staggerContainer}>
          <div className="mx-auto w-full max-w-[24rem] pt-0 sm:mx-0 sm:max-w-[34.5rem]">
            <motion.div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#E7AD43]/[0.35] bg-[#E7AD43]/[0.055] px-2.5 py-1.5 text-[0.56rem] font-semibold text-white/90 shadow-[0_0_38px_rgba(231,173,67,0.12)] backdrop-blur-xl sm:px-4 sm:py-2 sm:text-[0.7rem]" variants={fadeUp}>
              <Sparkles size={13} className="text-[#E7AD43]" />
              <span className="truncate">{pill}</span>
            </motion.div>

            <motion.h1 className="mt-4 max-w-[43rem] whitespace-pre-line text-[1.86rem] font-bold leading-[1.1] text-white sm:mt-4 sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.25rem]" variants={fadeUp}>
              {renderGoldHeadline(title, highlight)}
            </motion.h1>
            <motion.div className="mt-4 max-w-[23rem] text-[0.92rem] leading-6 text-white/[0.78] sm:mt-4 sm:max-w-[26rem] sm:text-[1rem] sm:leading-7" variants={fadeUp}>
              {description}
            </motion.div>

            <motion.div className="mt-5 flex flex-col items-center gap-2 sm:mt-6 sm:flex-row sm:items-stretch sm:gap-4" variants={staggerContainer}>
              <motion.a
                className="group inline-flex min-h-[2.9rem] w-full max-w-[21rem] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#E7AD43] to-[#FFD06A] px-5 text-[0.92rem] font-semibold text-[#120b05] shadow-[0_16px_50px_-22px_rgba(231,173,67,0.8)] transition duration-300 hover:shadow-[0_0_25px_rgba(231,173,67,0.5)] active:scale-[0.98] sm:min-h-[2.9rem] sm:w-auto sm:max-w-none sm:gap-3 sm:px-7 sm:text-base"
                href="#projects"
                variants={fadeUp}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.24, ease: smoothEase }}
              >
                {primaryAction}
                <ArrowRight size={17} className="transition group-hover:translate-x-[5px]" />
              </motion.a>
              <motion.a
                className="inline-flex min-h-[2.9rem] w-full max-w-[21rem] items-center justify-center rounded-full border border-[#E7AD43]/55 bg-white/[0.06] px-5 text-[0.92rem] font-semibold text-white shadow-[0_16px_44px_-28px_rgba(231,173,67,0.42)] backdrop-blur-xl transition duration-300 hover:border-[#E7AD43] hover:bg-[#E7AD43]/10 active:scale-[0.98] sm:min-h-[2.9rem] sm:w-auto sm:max-w-none sm:px-7 sm:text-base"
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
      </div>
    </section>
  )
}
