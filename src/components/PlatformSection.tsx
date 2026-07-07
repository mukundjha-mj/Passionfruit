import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import marketingSystem from '../assets/marketing system.avif'
import Button from './ui/Button'

const TABS = [
  {
    key: 'insights',
    label: 'Insights',
    title: 'Know your next best move',
    body: 'Dive into prompts, topics, and competitor domains tracking visibility on AI answers and Google results. Page360 connects SEO, AI visibility, and analytics so every URL has a clear diagnosis and next step.',
  },
  {
    key: 'actions',
    label: 'Actions',
    title: 'Surface opportunities, execute the fix',
    body: 'Surface opportunities across your pages, third party sources, and Reddit threads on a steady cadence — then hand them to in-house experts who ship the fix instead of leaving it in a report.',
  },
] as const

export default function PlatformSection() {
  const [active, setActive] = useState<(typeof TABS)[number]['key']>('insights')
  const current = TABS.find((t) => t.key === active)!

  return (
    <section id="labs" className="bg-ink-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Introducing Algorithmic Marketing System
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'rgb(195, 195, 195)' }}>
            One platform for SEO insights, GEO tracking, and page-level analysis.
            Powered by AI, executed by experts.
          </p>
          <Button href="./contact-us" className="mt-2">
            Talk to an Expert
          </Button>
        </motion.div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <div className="flex w-fit gap-2 rounded-full border border-white/10 bg-white/5 p-1">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`rounded-full px-5 py-2 font-heading text-sm transition-colors ${
                    active === tab.key
                      ? 'bg-white text-ink-950'
                      : 'text-ink-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex flex-col gap-4"
              >
                <h3 className="font-heading text-2xl font-medium text-white">
                  {current.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-300">
                  {current.body}
                </p>
                <a
                  href="#"
                  className="w-fit rounded-full border border-white/20 px-5 py-2.5 font-heading text-sm text-white transition-colors hover:bg-white/10"
                >
                  Learn more
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="order-1 overflow-hidden rounded-2xl border border-white/10 bg-white lg:order-2"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              src={marketingSystem}
              alt="Passionfruit Labs dashboard"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
