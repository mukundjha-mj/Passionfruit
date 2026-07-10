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
    <section className="relative overflow-hidden bg-white px-5 py-16 tab:px-16 tab:py-20 desk:py-27.5">
      <div className="relative z-10 mx-auto max-w-360">
        <div
          className="relative overflow-hidden rounded-xl border px-6 py-16 tab:px-12 tab:py-24 desk:px-16 desk:py-32.5"
          style={{ backgroundColor: 'rgb(246, 247, 249)', borderColor: 'rgb(196, 196, 196)' }}
        >
          <GridBackground />

          <div className="relative z-10 mx-auto flex max-w-175 flex-col items-center gap-4 text-center">
            <motion.div
              className="flex -space-x-5"
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
                  className="h-15 w-15 rounded-full border-2 border-white object-cover shadow-[0_1px_5px_rgba(0,0,0,0.15)]"
                  initial={{ opacity: 0, scale: 0.6, x: -15 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                />
              ))}
            </motion.div>

            <span className="font-heading text-xs font-medium tracking-[0.04em] text-[rgb(113,113,122)]">
              Trusted by teams at high growth companies
            </span>

            <motion.h2
              className="mt-2 font-switzer text-[40px] font-medium leading-[1.1em] tracking-[-0.03em] text-ink-950 tab:text-[48px] desk:text-[64px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to win search?
            </motion.h2>

            <p className="max-w-125 font-switzer text-[18px] leading-[124%] text-[rgb(99,99,99)] desk:text-[20px]">
              End to End, managed experience to drive growth from Google and AI search
            </p>

            <Button href="./contact-us" className="mt-2">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
