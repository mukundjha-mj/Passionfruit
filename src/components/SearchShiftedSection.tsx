import { motion } from 'framer-motion'
import Button from './ui/Button'
import GridBackground from './ui/GridBackground'

const PARAGRAPHS = [
  'AI answers are reshaping how people discover, compare, and choose brands.',
  'Less scrolling through links. More decisions made inside answers, shortlists, and citations before anyone visits your site.',
  'Winning now takes more than rankings. AEO plus SEO need to run together, with one system that tracks what changed, explains why it changed, and ships the fix.',
  'Passionfruit combines tracking, strategy, analysis, and execution across Google and AI Search. Real-time signals become tasks. Tasks trigger workflows. Work gets shipped by in-house experts.',
]

export default function SearchShiftedSection() {
  return (
    <section className="relative bg-ink-950 px-5 py-16 tab:px-16 tab:py-20 desk:py-28">
      <div className="absolute inset-0 opacity-30 ">
        <GridBackground />
      </div>
      <div className="relative z-10 mx-auto flex max-w-360 flex-col gap-5 desk:flex-row desk:items-start desk:gap-17.5">
        <motion.div
          className="flex flex-col gap-5 desk:sticky desk:top-30 desk:shrink-0 desk:grow-[0.9] desk:basis-0"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-switzer text-sm text-[rgb(195,195,195)]">
            DISCOVERY HAS CHANGED
          </p>
          <h2 className="max-w-[900px] font-switzer text-[40px] font-medium leading-[1.1] tracking-[-0.03em] text-white tab:text-[64px]">
            Search is not clicking like it used to.
          </h2>
          <Button href="./contact-us" variant="hero" className="self-start">
            Talk to an Expert
          </Button>
        </motion.div>

        <div className="flex flex-col gap-3 desk:grow desk:shrink-0 desk:basis-0">
          {PARAGRAPHS.map((text, i) => (
            <motion.p
              key={text}
              className="font-switzer text-[20px] leading-[150%] tracking-[-0.02em] text-[rgb(196,196,196)] desk:text-[32px]"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            className="font-switzer text-[26px] leading-[1.3em] tracking-[-0.02em] font-bold text-white desk:text-[32px] desk:leading-[1.5em]"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: PARAGRAPHS.length * 0.08, ease: 'easeOut' }}
          >
            The shift is here.
            <br />
            Make your brand part of the answer.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
