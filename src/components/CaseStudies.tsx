import { motion } from 'framer-motion'
import result1 from '../assets/real result1.avif'
import result2 from '../assets/real result2.avif'
import result3 from '../assets/real result3.avif'
import result4 from '../assets/real result4.avif'
import Button from './ui/Button'
import GridBackground from './ui/GridBackground'
import ReadMoreArrowIcon from './ui/ReadMoreArrowIcon'

const CASE_STUDIES = [
  {
    image: result1,
    href: './case-studies/kitchen-appliances-brand',
    tag: 'E-Commerce',
    title:
      'How a Home & Kitchen Appliances Brand Increased Non-Branded Revenue by 20% Through SEO + GEO Optimization',
    stats: [
      { value: '+20%', label: 'Non-branded Revenue (MoM)' },
      { value: '+50.7K', label: 'Keywords Optimized' },
    ],
  },
  {
    image: result2,
    href: './case-studies/organic-foods-brand',
    tag: 'E-Commerce',
    title:
      'How an Organic Foods Brand Scaled US Organic Revenue 257% by Building a High-Intent Organic Conversion Engine',
    stats: [
      { value: '+257%', label: 'US Organic Revenue (MoM)' },
      { value: '7x', label: 'Organic Clicks' },
    ],
  },
  {
    image: result3,
    href: './case-studies/footwear-brand',
    tag: 'E-Commerce',
    title:
      'How a Premium Footwear Brand Built a Content Engine That Grew AI Revenue by 23% in 30 Days',
    stats: [
      { value: '+23%', label: 'AI Revenue (MoM)' },
      { value: '+1,263%', label: 'Blog Clicks' },
    ],
  },
  {
    image: result4,
    href: './case-studies/gifting-brand',
    tag: 'E-Commerce',
    title:
      'How an Artisan Gifting Brand Grew Non-Branded Impressions 1,992% YoY and Turned Technical Fixes Into Tangible Revenue Gains',
    stats: [
      { value: '+33%', label: 'Non-Branded Revenue (MoM)' },
      { value: '+1,992%', label: 'Non-Branded Impressions (YoY)' },
    ],
  },
]

function CaseStudyCard({
  study,
  delay,
}: {
  study: (typeof CASE_STUDIES)[number]
  delay: number
}) {
  return (
    <motion.a
      href={study.href}
      className="group relative flex flex-col gap-5.5 overflow-hidden rounded-xl border shadow-[0_1px_2px_rgba(0,0,0,0.1),0_3px_3px_rgba(0,0,0,0.09),0_6px_4px_rgba(0,0,0,0.05),0_11px_5px_rgba(0,0,0,0.01),0_18px_5px_rgba(0,0,0,0)]"
      style={{ borderColor: 'rgb(99, 99, 99)', backgroundColor: 'rgb(20, 20, 20)' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <div
        className="pointer-events-none absolute left-[48%] top-[72%] z-10 flex -translate-x-1/2 -translate-y-1/2 scale-90 items-center gap-2.5 rounded-xl bg-white px-5 py-2 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
      >
        <span className="font-switzer text-base text-[rgb(9,9,11)]">Read more</span>
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg border"
          style={{ backgroundColor: 'rgb(13, 11, 11)', borderColor: 'rgb(196, 196, 196)' }}
        >
          <ReadMoreArrowIcon />
        </span>
      </div>

      <div className="flex flex-col gap-10 p-5">
        <div className="flex flex-col gap-14.5">
          <span className="font-switzer text-base capitalize leading-[124%] text-[rgb(196,196,196)]">
            {study.tag}
          </span>
          <h3 className="font-switzer text-[22px] font-medium capitalize leading-[1.4] tracking-[-0.02em] text-white tab:text-[26px] desk:text-[28px] desk:line-clamp-2">
            {study.title}
          </h3>
        </div>

        <div
          className="flex gap-5 border-t border-dashed pt-2.75"
          style={{ borderColor: 'rgb(196, 196, 196)' }}
        >
          {study.stats.map((stat) => (
            <div key={stat.label} className="flex flex-1 flex-col gap-0.75">
              <span
                className="font-switzer text-[40px] font-medium leading-[124%] tracking-[-0.02em]"
                style={{ color: 'rgb(255, 199, 70)' }}
              >
                {stat.value}
              </span>
              <span className="font-switzer text-[20px] capitalize leading-[1.2] text-[rgb(196,196,196)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative aspect-[1.559] w-full">
        <img
          src={study.image}
          alt={study.title}
          className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-300 ease-out group-hover:blur-[5px]"
        />
      </div>
    </motion.a>
  )
}

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden border-y border-[#c4c4c4] bg-ink-950 px-5 py-16 tab:px-12 tab:py-25 desk:px-16">
      <div className="absolute inset-0 opacity-30">
        <GridBackground />
      </div>

      <div className="relative z-10 mx-auto flex max-w-360 flex-col gap-16">
        <div className="flex flex-col items-start gap-4 desk:flex-row desk:items-end desk:justify-between">
          <div className="flex flex-col gap-4">
            <motion.h2
              className="font-switzer text-[40px] font-medium leading-[1.1] tracking-[-0.03em] text-white tab:text-[48px] desk:text-[64px]"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Real results from real brands
            </motion.h2>
            <motion.p
              className="max-w-175 font-switzer text-lg leading-[122%] text-[rgb(196,196,196)] tab:text-xl"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            >
              See how we've driven organic revenue and AI search dominance across Industries and
              geographies.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
          >
            <Button href="./contact-us" variant="hero">
              Talk to an Expert
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 desk:grid-cols-2 desk:gap-6">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
