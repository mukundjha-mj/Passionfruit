import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Button from './ui/Button'
import GridBackground from './ui/GridBackground'

const FAQS = [
  {
    q: 'What is Generative Engine Optimization (GEO)?',
    a: "GEO optimizes content to earn citations in AI search engines like ChatGPT, Perplexity, and Google AI Overviews. Passionfruit's GEO strategies have delivered up to 750% visibility lifts.",
  },
  {
    q: 'How is AI changing the SEO industry?',
    a: 'AI answer engines now resolve many queries directly inside the chat interface, so winning requires earning citations and structured, source-worthy content — not just ranking links.',
  },
  {
    q: 'Can SEO and GEO work together, or do they require separate strategies?',
    a: 'They compound each other. The technical and content foundations that earn Google rankings are the same signals AI engines use to decide what to cite — we run both under one plan.',
  },
  {
    q: 'What is programmatic SEO, and how does it scale organic traffic?',
    a: 'Programmatic SEO uses templated, data-driven pages to target thousands of long-tail queries at once, letting a single system scale organic coverage far beyond manual content production.',
  },
  {
    q: 'How long does it take to see results from an SEO campaign?',
    a: 'Early technical wins can show within weeks; compounding organic and AI-visibility growth typically builds over 3-6 months depending on domain authority and competition.',
  },
  {
    q: 'What should I look for when hiring an SEO agency?',
    a: 'Look for in-house execution (not just reporting), transparent measurement tied to revenue, and a team that already tracks both Google rankings and AI answer visibility.',
  },
  {
    q: 'How do AI search engines decide which brands to recommend?',
    a: 'They weigh structured data, third-party mentions, review sentiment, and content that directly answers user intent — trust signals earned across the web, not just on-site copy.',
  },
  {
    q: 'Is SEO still worth the investment with AI Overviews taking over Google?',
    a: 'Yes — AI Overviews still cite sources, and non-branded search remains a major discovery channel. The investment shifts toward earning citations alongside classic rankings.',
  },
  {
    q: 'What role does Reddit play in modern SEO and GEO strategy?',
    a: 'AI engines heavily cite Reddit threads as a trusted, unfiltered source. Structured engagement on relevant threads is now a core part of GEO strategy.',
  },
  {
    q: "What's the difference between an AI-native SEO agency and a traditional one?",
    a: 'An AI-native agency tracks and optimizes for AI answer engines from day one, using automated signal-processing at scale, while still routing every action through human experts.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-ink-950 px-5 py-16 tab:px-16 tab:py-20 desk:py-28">
      <div className="absolute inset-0 opacity-30">
        <GridBackground />
      </div>

      <div className="relative z-10 mx-auto flex max-w-360 flex-col gap-8 desk:flex-row desk:items-start desk:gap-13">
        <motion.div
          className="flex flex-col items-start gap-4 desk:sticky desk:top-30 desk:shrink-0 desk:grow-[0.8] desk:basis-0"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-switzer text-[40px] font-medium leading-[1.1em] tracking-[-0.03em] text-white tab:text-[64px]">
            Frequently Asked Questions
          </h2>
          <p className="font-switzer text-[18px] leading-[1.6em] text-[rgb(196,196,196)] desk:text-[20px]">
            Your questions on SEO, GEO, and AI search answered by the team that's helped clients
            achieve 750% AI visibility growth
          </p>
          <Button href="./contact-us" variant="hero" className="mt-2">
            Talk to an Expert
          </Button>
        </motion.div>

        <div className="flex flex-col gap-3.5 desk:grow desk:shrink-0 desk:basis-0">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.q}
                className="rounded-lg border border-[rgb(64,64,64)] bg-[#141414] p-4"
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.05, ease: 'easeOut' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-2.5 text-left"
                >
                  <span className="font-switzer text-[20px] font-medium leading-[1.4em] tracking-[-0.03em] text-white">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-0.5 shrink-0 text-2xl leading-none text-[rgb(196,196,196)]"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2.5 font-switzer text-[18px] leading-[1.5em] tracking-[-0.03em] text-[rgb(196,196,196)] desk:text-[20px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
