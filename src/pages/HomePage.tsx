import Hero from '../components/Hero'

type HomePageProps = {
  pill: string
  role: string
  title: string
  description: string
  primaryAction: string
  secondaryAction: string
  features: string[]
  stats: Array<{ value: string; label: string }>
}

function HomePage({ pill, role, title, description, primaryAction, secondaryAction, features, stats }: HomePageProps) {
  return (
    <Hero
      pill={pill}
      role={role}
      title={title}
      description={description}
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      features={features}
      stats={stats}
    />
  )
}

export default HomePage
