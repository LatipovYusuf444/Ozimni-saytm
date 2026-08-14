import { Code2, ShieldCheck, Star, UserRound } from 'lucide-react'

type StatItem = {
  value: string
  label: string
}

type StatsBarProps = {
  stats: StatItem[]
}

export default function StatsBar({ stats }: StatsBarProps) {
  const icons = [UserRound, Star, Code2, ShieldCheck]
  const cols = stats.length >= 4 ? 'grid-cols-4' : stats.length === 3 ? 'grid-cols-3' : 'grid-cols-2'

  return (
    <div className={`grid min-h-[4.6rem] ${cols} overflow-hidden rounded-[0.9rem] border border-[#E7AD43]/[0.22] bg-[#090C10]/[0.68] shadow-[0_24px_90px_-50px_rgba(231,173,67,0.5)] backdrop-blur-2xl sm:min-h-[7.4rem] sm:rounded-[1.2rem]`}>
      {stats.map((stat, index) => (
        <div key={stat.label} className="relative flex items-center gap-1 px-1 py-2.5 sm:gap-4 sm:px-6 sm:py-5">
          {index > 0 ? <span className="absolute left-0 top-3 h-[calc(100%-1.5rem)] w-px bg-white/[0.16] sm:top-6 sm:h-[calc(100%-3rem)]" /> : null}
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E7AD43]/[0.22] bg-[#E7AD43]/[0.055] text-[#E7AD43] shadow-[0_0_34px_rgba(231,173,67,0.18)] sm:h-11 sm:w-11">
            {(() => {
              const Icon = icons[index] ?? Star
              return <Icon size={12} strokeWidth={1.8} className="sm:size-[22px]" />
            })()}
          </div>
          <div className="min-w-0">
            <div className="bg-gradient-to-r from-[#E7AD43] via-[#FFD06A] to-[#E7AD43] bg-clip-text text-[0.86rem] font-extrabold leading-none text-transparent sm:text-[1.85rem]">
              {stat.value}
            </div>
            <div className="mt-1 text-[0.52rem] leading-tight text-white/[0.86] sm:mt-2 sm:text-[0.92rem] sm:leading-normal">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
