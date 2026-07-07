import { motion } from 'framer-motion'
import step1 from '../assets/How It work/1.avif'
import step2 from '../assets/How It work/2.avif'
import step3 from '../assets/How It work/3.avif'
import step4 from '../assets/How It work/4.avif'
import SectionHeading from './ui/SectionHeading'

const STEPS = [
  {
    image: step1,
    title: 'Connect Knowledge Base',
    body: 'Connect Google Search Console, Google Analytics, your CMS, Passionfruit Labs, and marketing assets. The system ingests it all and builds a living understanding of your business.',
  },
  {
    image: step2,
    title: 'Tracks Signals in real time',
    body: 'Our analytics agents process 100+ signals per URL and surface insights as they happen. No delayed weekly reports — the right data at the right moment.',
  },
  {
    image: step3,
    title: 'Always on Intelligence',
    body: 'These are the most robust industry leading encoded modules that ingest data in real time and go through 70+ steps to understand what is driving the change.',
  },
  {
    image: step4,
    title: 'Human in the Loop Actions',
    body: 'Our organic growth experts review every recommendation, prioritize what moves the needle, and execute — turning machine intelligence into real, measurable action.',
  },
]

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="How it works" title="From raw signals to shipped fixes" />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          >
            <img src={step.image} alt={step.title} className="h-40 w-full object-cover" />
            <div className="flex flex-col gap-2 p-6">
              <span className="font-mono text-xs text-brand-purple">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-base font-medium text-ink-950">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-500">{step.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
