import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

const FEATURES = [
  {
    title: 'Execution at Scale',
    body: "Dashboards don't move revenue. We combine proprietary technology with in-house experts to deliver end-to-end execution. No reports you have to act on yourself.",
  },
  {
    title: 'Data Backed Execution',
    body: 'No hourly billing traps. No low-quality AI content factory. AI handles large-scale data gathering and analysis, but every action is executed and reviewed by in-house experts.',
  },
]

const STATS = [
  { label: 'Revenue driven', value: '$1B+' },
  { label: 'AI Search Traffic', value: '10.5M' },
  { label: 'SEO Led Traffic', value: '300M+' },
  { label: 'Average ROI', value: '7x' },
]

export default function FeaturesGrid() {
  return (
    <section className="bg-ink-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why great brands choose us"
          title="Data backed execution, not just dashboards"
          subtitle="What sets us apart is simple: unified SEO and AEO execution, real-time intelligence, and expert-led delivery at scale."
          className="[&_h2]:text-white [&_p]:text-ink-400"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <h3 className="font-heading text-xl font-medium">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 sm:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-heading text-3xl font-medium text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-ink-400">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
