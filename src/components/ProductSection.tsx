import { motion } from 'framer-motion'
import Button from './ui/Button'

const LOOP_STEPS = ['Measure', 'Prioritize', 'Ship', 'Repeat']

export default function ProductSection() {
  return (
    <section className="bg-ink-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]">
            How It Works
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'rgb(196, 196, 196)' }}>
            SEO, GEO, and AEO always on loop: measure, prioritize, ship, repeat.
          </p>
          <Button href="./contact-us" className="mt-2">
            Talk to an Expert
          </Button>
        </motion.div>

        <div className="relative mx-auto mt-16 flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          <motion.div
            className="absolute inset-0 rounded-full border border-dashed border-white/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          />
          <div className="flex h-40 w-40 flex-col items-center justify-center gap-1 rounded-full bg-white text-ink-950 sm:h-48 sm:w-48">
            <span className="font-heading text-lg font-medium">One System</span>
            <span className="text-xs text-ink-500">SEO · GEO · AEO</span>
          </div>

          {LOOP_STEPS.map((step, i) => {
            const angle = (i / LOOP_STEPS.length) * 2 * Math.PI - Math.PI / 2
            const radius = 145
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            return (
              <motion.div
                key={step}
                className="absolute flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <span className="font-mono text-xs text-brand-purple">
                  0{i + 1}
                </span>
                <span className="font-heading text-sm text-white">{step}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
