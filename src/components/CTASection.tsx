import { motion } from 'framer-motion'
import user1 from '../assets/Testimonial/user1.avif'
import user2 from '../assets/Testimonial/user2.avif'
import user3 from '../assets/Testimonial/user3.jpeg'
import user4 from '../assets/Testimonial/user4.avif'
import Button from './ui/Button'
import GridBackground from './ui/GridBackground'

const CIRCLES = [user1, user2, user3, user4]

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div
        className="relative overflow-hidden rounded-xl border py-20"
        style={{ backgroundColor: 'rgb(246, 247, 249)', borderColor: 'rgb(196, 196, 196)' }}
      >
        <GridBackground />

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center">
          <motion.div
            className="flex -space-x-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {CIRCLES.map((avatar, i) => (
              <motion.img
                key={i}
                src={avatar}
                alt=""
                className="h-10 w-10 rounded-full border-2 object-cover"
                style={{ borderColor: 'rgb(246, 247, 249)' }}
                initial={{ opacity: 0, scale: 0.6, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              />
            ))}
          </motion.div>

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            Trusted by teams at high growth companies
          </span>

          <motion.h2
            className="font-heading text-3xl font-medium tracking-tight text-ink-950 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to win search?
          </motion.h2>

          <p className="max-w-md text-base text-ink-500">
            End to End, managed experience to drive growth from Google and AI search.
          </p>

          <Button href="./contact-us" size="lg">
            Talk to an Expert
          </Button>
        </div>
      </div>
    </section>
  )
}
