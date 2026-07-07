import { motion } from 'framer-motion'
import resource1 from '../assets/Explore resources/1.avif'
import resource2 from '../assets/Explore resources/2.avif'
import resource3 from '../assets/Explore resources/3.avif'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'

const IMAGES = [resource1, resource2, resource3]

const POSTS = [
  'How Much Does GEO Cost for Ecommerce Brands in 2026?',
  'Best GEO Agencies for Shopify Brands in 2026',
  'Best AEO Agencies for B2B SaaS Companies in 2026',
  'Best GEO Agencies for DTC Beauty Brands in 2026',
]

export default function BlogsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        title="Explore our Resources"
        subtitle="Deep dives into SEO, GEO, and AI search strategy from the engineers and marketers building the future of organic growth."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {POSTS.map((title, i) => (
          <motion.a
            href="#"
            key={title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
          >
            <div className="overflow-hidden">
              <img
                src={IMAGES[i % IMAGES.length]}
                alt={title}
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-heading text-sm font-medium leading-snug text-ink-950">
                {title}
              </h3>
              <span className="mt-auto text-xs font-medium text-brand-purple">
                Read more →
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button variant="secondary">Explore Our blogs</Button>
      </div>
    </section>
  )
}
