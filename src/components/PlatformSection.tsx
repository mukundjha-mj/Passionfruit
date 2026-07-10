import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import marketingSystem from '../assets/marketing system.avif'
import marketingSystemActions from '../assets/marketing system 2.avif'
import Button from './ui/Button'
import GridBackground from './ui/GridBackground'

const TABS = [
  {
    key: 'insights',
    label: 'Insights',
    title: 'Know your next best move',
    body: 'Passionfruit brings AEO plus SEO signals into one view so you can see what is working, what is slipping, and what matters next. Track AI share of voice, citations, and keyword level performance, then drill into the prompts, topics, and competitor sources shaping buyer decisions. When the data changes, you see it fast, and the next best action is already clear.',
    image: marketingSystem,
    alt: 'Passionfruit Insights dashboard',
    cards: [
      'Dive into prompts, topics, and competitor domains tracking visibility on AI answers and Google results.',
      'Page360 connects SEO, AI visibility, and analytics so every URL has a clear diagnosis and next step.',
      'Surface opportunities across your pages, third party sources, and Reddit threads on a steady cadence.',
    ],
  },
  {
    key: 'actions',
    label: 'Actions',
    title: 'Turn insight into shipped growth',
    body: 'The Action Layer Turns Opportunities Into Work That Actually Ships. Automation Gathers Evidence And Drafts The Plan, Then In House Experts Execute And Validate Changes Across Content, Technical SEO, Authority, And Reddit. Every Task Stays Visible In One Backlog, So You Always Know What Shipped, Why It Mattered, And What Comes Next.',
    image: marketingSystemActions,
    alt: 'Passionfruit Actions dashboard',
    cards: [
      'Combine expert operators with AI support to ship page upgrades with accuracy, speed, and consistency.',
      'Built in QA, approvals, and governance keep every change on brand, safe, and ready to scale.',
      'Surface opportunities across your pages, third party sources, and Reddit threads on a steady cadence',
      'Run content, technical fixes, and authority tasks from one shared workflow with full transparency.',
    ],
  },
] as const

export default function PlatformSection() {
  const [active, setActive] = useState<(typeof TABS)[number]['key']>('insights')
  const current = TABS.find((t) => t.key === active)!
  const cardCols = current.cards.length === 4 ? 'desk:grid-cols-4' : 'desk:grid-cols-3'

  return (
    <section
      id="labs"
      className="relative overflow-hidden border-y border-[#c4c4c4] bg-ink-950 px-5 py-16 tab:px-12 tab:py-25 desk:px-16"
    >
      <div className="absolute inset-0 opacity-20">
        <GridBackground />
      </div>

      <div className="relative z-10 mx-auto flex max-w-300 flex-col items-center gap-10.25 tab:gap-9.5">
        <motion.div
          className="flex max-w-225 flex-col items-center gap-4 text-center tab:max-w-162.5 desk:max-w-225"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-switzer text-[40px] font-medium leading-[1.1em] tracking-[-0.03em] text-white tab:text-[48px] desk:text-[64px]">
            Introducing Algorithmic Marketing System
          </h2>
          <p className="font-switzer text-[18px] leading-[150%] text-[rgb(195,195,195)] desk:text-[20px]">
            Powered by AI, executed by experts.
          </p>
          <Button href="./contact-us" className="mt-2" >
            Talk to an Expert
          </Button>
        </motion.div>

        <div className="flex w-full flex-col gap-2 tab:max-w-200 desk:max-w-268">
          <div className="flex rounded-lg border border-[#c4c4c4] bg-white p-2">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`flex-1 rounded-lg py-3 text-center font-switzer text-[20px] capitalize transition-colors ${
                  active === tab.key ? 'bg-accent-yellow text-ink-950' : 'text-ink-950/80 hover:text-ink-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-[#c4c4c4] bg-white">
            <div className="flex flex-col divide-y divide-[#c4c4c4] desk:flex-row desk:divide-x desk:divide-y-0">
              <div className="flex flex-col items-start gap-4 p-5 tab:p-6 desk:flex-[0.67_0_0] desk:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex flex-col items-start gap-4"
                  >
                    <h4 className="font-switzer text-[20px] font-medium leading-[1.4em] tracking-[-0.02em] text-ink-950 tab:text-[24px] desk:text-[30px]">
                      {current.title}
                    </h4>
                    <p className="font-switzer text-[18px] leading-[1.4em] text-[rgb(99,99,99)] desk:text-[20px]">
                      {current.body}
                    </p>
                    <a
                      href="./contact-us"
                      className="rounded-lg border border-[rgb(99,99,99)] px-6 py-3.5 font-switzer text-[18px] text-ink-950 transition-colors hover:bg-ink-50"
                    >
                      Learn more
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="overflow-hidden desk:flex-[1.5_0_0] desk:aspect-[1.29]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.key}
                    src={current.image}
                    alt={current.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="h-auto w-full object-cover desk:h-full desk:object-contain"
                  />
                </AnimatePresence>
              </div>
            </div>

            <div className={`grid grid-cols-1 divide-y divide-[#c4c4c4] border-t border-[#c4c4c4] ${cardCols} desk:divide-x desk:divide-y-0`}>
              {current.cards.map((text) => (
                <div key={text} className="p-5 tab:p-6 desk:p-8">
                  <p className="font-switzer text-[18px] leading-[1.4em] text-[rgb(99,99,99)] desk:text-[20px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
