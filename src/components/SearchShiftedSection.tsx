import { motion } from 'framer-motion'
import Button from './ui/Button'

const CARDS = [
  {
    title: 'AI summaries reduce clicks',
    body: 'As LLMs become the primary interface for information retrieval, the traditional SEO model is breaking. AI summaries reduce organic clicks by satisfying user intent directly within the platform interface.',
    accent: 'var(--color-accent-red)',
  },
  {
    title: 'Citations are the new rankings',
    body: 'Inline citations shift trust from the search results page to the summary source. Rankings alone are no longer enough. You need to own the context.',
    accent: 'var(--color-accent-blue)',
  },
  {
    title: 'One unified strategy',
    body: 'Not SEO alone. Not AEO alone. One unified strategy covering both Google results and AI answers. A single implementation plan, one accountable owner, and tracking plus execution.',
    accent: 'var(--color-accent-lime)',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function SearchShiftedSection() {
  return (
    <section className="bg-ink-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span
            className="font-sans text-sm uppercase tracking-wide"
            style={{ color: 'rgb(195, 195, 195)' }}
          >
            Discovery has changed
          </span>
          <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Search is not clicking like it used to.
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'rgb(196, 196, 196)' }}>
            AI answers are reshaping how people discover, compare, and choose
            brands. Less scrolling through links. More decisions made inside
            answers, shortlists, and citations before anyone visits your site.
          </p>
          <Button href="./contact-us" className="mt-2">
            Talk to an Expert
          </Button>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              variants={cardVariants}
            >
              <span
                className="h-2 w-10 rounded-full"
                style={{ background: card.accent }}
                aria-hidden
              />
              <h3 className="font-heading text-lg font-medium text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-400">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-14 max-w-3xl text-center font-heading text-xl text-ink-300 sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Winning now takes more than rankings. AEO plus SEO need to run together,
          with one system that tracks what changed, explains why it changed, and
          ships the fix.
        </motion.p>
      </div>
    </section>
  )
}
