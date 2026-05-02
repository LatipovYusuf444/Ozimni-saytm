import { Code2, Star, UserRound } from 'lucide-react'

type StatItem = {
  value: string
  label: string
}

type StatsBarProps = {
  stats: StatItem[]
}

export default function StatsBar({ stats }: StatsBarProps) {
  const icons = [UserRound, Star, Code2]

  return (
    <div className="grid min-h-[7.4rem] overflow-hidden rounded-[1.2rem] border border-[#f5c27a]/[0.22] bg-[#080b12]/[0.68] shadow-[0_24px_90px_-50px_rgba(245,194,122,0.5)] backdrop-blur-2xl sm:grid-cols-3">
      {stats.map((stat, index) => (
        <div key={stat.label} className="relative flex items-center gap-5 px-6 py-5 sm:px-8">
          {index > 0 ? <span className="absolute left-0 top-6 hidden h-[calc(100%-3rem)] w-px bg-white/[0.16] sm:block" /> : null}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f5c27a]/[0.22] bg-[#f5c27a]/[0.055] text-[#f5c27a] shadow-[0_0_34px_rgba(245,194,122,0.18)]">
            {(() => {
              const Icon = icons[index] ?? Star
              return <Icon size={24} strokeWidth={1.8} />
            })()}
          </div>
          <div>
            <div className="bg-gradient-to-r from-[#f5c27a] via-[#ffdca0] to-[#b87333] bg-clip-text text-[2.1rem] font-extrabold leading-none text-transparent">
              {stat.value}
            </div>
            <div className="mt-2 text-base text-white/[0.86]">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
