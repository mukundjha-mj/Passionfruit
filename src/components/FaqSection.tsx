import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeading from './ui/SectionHeading'

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
    <section className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Your questions on SEO, GEO, and AI search answered by the team that's helped clients achieve 750% AI visibility growth."
      />

      <div className="mt-12 flex flex-col divide-y divide-border-soft border-y border-border-soft">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div key={faq.q}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-heading text-base font-medium text-ink-950">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-xl text-brand-purple"
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
                    <p className="pb-5 text-sm leading-relaxed text-ink-500">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
