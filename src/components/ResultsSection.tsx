import { motion } from 'framer-motion'
import Button from './ui/Button'
import GridBackground from './ui/GridBackground'

const STATS = [
  { value: '$1B+', label: 'Revenue driven' },
  { value: '10.5M', label: 'AI Search Traffic' },
  { value: '300M+', label: 'SEO Led Traffic' },
]

function ArrowUpRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

export default function ResultsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 tab:px-16 tab:py-20 desk:py-27.5">
      <GridBackground className="opacity-20" />

      <div className="relative z-10 mx-auto flex max-w-360 flex-col items-center gap-10">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="max-w-5xl text-center font-switzer text-[40px] font-medium leading-[1.1] tracking-[-0.03em] text-ink-950 tab:text-[64px]">
            The results speak for themselves
          </h2>
          <p className="max-w-75 text-center font-switzer text-lg text-ink-500">
            Don&apos;t just take our word for it.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Button href="./contact-us">Talk to an Expert</Button>
            <motion.a
              href="./case-studies"
              className="inline-flex items-center gap-2 rounded-xl border border-ink-300 bg-white px-6 py-3.5 font-switzer text-base text-ink-950"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              case studies
              <ArrowUpRightIcon />
            </motion.a>
          </div>
        </motion.div>

        <div className="flex w-full flex-col gap-5 desk:flex-row">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-1 flex-col items-center gap-5 rounded-xl border border-ink-300 bg-white p-6 shadow-[0_0.6px_0.6px_-1.25px_rgba(0,0,0,0.18),0_2.3px_2.3px_-2.5px_rgba(0,0,0,0.16),0_10px_10px_-3.75px_rgba(0,0,0,0.06)] tab:p-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <span className="bg-[linear-gradient(0deg,#000_24%,#636363_38%)] bg-clip-text font-switzer text-6xl font-medium tracking-[-0.04em] text-transparent tab:text-8xl">
                {stat.value}
              </span>
              <span className="text-center font-switzer text-lg tracking-[-0.03em] text-ink-500 tab:text-[28px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
