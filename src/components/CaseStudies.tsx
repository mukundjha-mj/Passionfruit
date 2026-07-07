import { motion } from 'framer-motion'
import result1 from '../assets/real result1.avif'
import result2 from '../assets/real result2.avif'
import result3 from '../assets/real result3.avif'
import result4 from '../assets/real result4.avif'
import SectionHeading from './ui/SectionHeading'

const CASE_STUDIES = [
  {
    image: result1,
    tag: 'E-Commerce',
    title:
      'How a Home & Kitchen Appliances Brand Increased Non-Branded Revenue by 20% Through SEO + GEO Optimization',
    stats: [{ value: '+20%', label: 'Non-branded Revenue (MoM)' }],
  },
  {
    image: result2,
    tag: 'D2C',
    title:
      'How an Organic Foods Brand Scaled US Organic Revenue 257% by Building a High-Intent Organic Conversion Engine',
    stats: [{ value: '+257%', label: 'US Organic Revenue (MoM)' }],
  },
  {
    image: result3,
    tag: 'Fashion',
    title:
      'How a Premium Footwear Brand Built a Content Engine That Grew AI Revenue by 23% in 30 Days',
    stats: [
      { value: '+23%', label: 'AI Revenue (30 Days)' },
      { value: '+1,263%', label: 'Non-Branded Revenue (MoM)' },
    ],
  },
  {
    image: result4,
    tag: 'Gifting',
    title:
      'How an Artisan Gifting Brand Grew Non-Branded Impressions 1,992% YoY and Turned Technical Fixes Into Tangible Revenue Gains',
    stats: [
      { value: '+1,992%', label: 'Non-Branded Impressions (YoY)' },
      { value: '+33%', label: 'Non-Branded Revenue (MoM)' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Real results from real brands"
        title="The results speak for themselves"
        subtitle="Don't just take our word for it — see how we've driven organic revenue and AI search dominance across industries and geographies."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {CASE_STUDIES.map((study, i) => (
          <motion.article
            key={study.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
          >
            <img src={study.image} alt={study.title} className="h-48 w-full object-cover" />
            <div className="flex flex-1 flex-col gap-4 p-6">
              <span className="w-fit rounded-full bg-ink-100 px-3 py-1 font-mono text-xs text-ink-600">
                {study.tag}
              </span>
              <h3 className="font-heading text-base font-medium leading-snug text-ink-950">
                {study.title}
              </h3>
              <div className="mt-auto flex gap-6 border-t border-border-soft pt-4">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-heading text-xl font-medium text-brand-purple">
                      {stat.value}
                    </span>
                    <span className="text-xs text-ink-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
