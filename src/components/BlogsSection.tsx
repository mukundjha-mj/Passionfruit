import { motion } from 'framer-motion'
import ReadMoreArrowIcon from './ui/ReadMoreArrowIcon'
import resource1 from '../assets/Explore resources/1.avif'
import resource2 from '../assets/Explore resources/2.avif'
import resource3 from '../assets/Explore resources/3.avif'
import resource4 from '../assets/Explore resources/4.avif'

const POSTS = [
  {
    image: resource1,
    title: 'How Much Does GEO Cost for Ecommerce Brands in 2026?',
    href: './blog/geo-cost-for-ecommerce-brands',
  },
  {
    image: resource3,
    title: 'Best GEO Agencies for Shopify Brands in 2026',
    href: './blog/best-geo-agencies-for-shopify-brands',
  },
  {
    image: resource2,
    title: 'Best AEO Agencies for B2B SaaS Companies in 2026',
    href: './blog/best-aeo-agencies-for-b2b-saas-companies',
  },
  {
    image: resource4,
    title: 'Best GEO Agencies for DTC Beauty Brands in 2026',
    href: './blog/best-geo-agencies-for-dtc-beauty-brands',
  },
]

// Reference lays the 4 posts out as 2 columns of 2 stacked cards (column-major),
// not a row-major 2x2 grid -- split accordingly so column 1 gets posts 1-2 and
// column 2 gets posts 3-4.
const COLUMNS = [POSTS.slice(0, 2), POSTS.slice(2, 4)]

function BlogCard({ post, delay }: { post: (typeof POSTS)[number]; delay: number }) {
  return (
    <motion.a
      href={post.href}
      className="group flex w-full flex-col gap-9 rounded-xl border border-[rgb(196,196,196)] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_3px_3px_rgba(0,0,0,0.09),0_6px_4px_rgba(0,0,0,0.05),0_11px_5px_rgba(0,0,0,0.01),0_18px_5px_rgba(0,0,0,0)] tab:gap-13.25"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <div className="relative aspect-[1.886] w-full overflow-hidden rounded-lg">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-300 ease-out group-hover:blur-[5px]"
        />
        <div className="pointer-events-none absolute inset-0 z-10 flex scale-90 items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
          <div className="flex items-center gap-2.5 rounded-xl bg-white px-5 py-2">
            <span className="font-switzer text-base text-[rgb(9,9,11)]">Read blog</span>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg border"
              style={{ backgroundColor: 'rgb(13, 11, 11)', borderColor: 'rgb(196, 196, 196)' }}
            >
              <ReadMoreArrowIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-switzer text-2xl font-normal capitalize leading-[1.4] text-[rgb(10,10,10)]">
          {post.title}
        </h3>
      </div>
    </motion.a>
  )
}

export default function BlogsSection() {
  return (
    <section className="bg-white px-5 py-16 tab:px-12 tab:py-25 desk:px-16">
      <div className="mx-auto flex max-w-360 flex-col items-center gap-18 tab:gap-24.75">
        <div className="flex w-full flex-col items-center gap-4">
          <motion.h2
            className="font-switzer text-[40px] font-medium leading-[1.1] tracking-[-0.03em] text-ink-950 text-center tab:text-[48px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Explore our Resources
          </motion.h2>
          <motion.p
            className="w-full text-center font-switzer text-xl capitalize leading-[1.4] text-[rgb(99,99,99)] desk:w-[61%] desk:max-w-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
          >
            Deep dives into SEO, GEO, and AI search strategy from the engineers and marketers
            building the future of organic growth.
          </motion.p>
        </div>

        <div className="flex w-full flex-col gap-5 tab:gap-6 desk:flex-row">
          {COLUMNS.map((column, ci) => (
            <div key={ci} className="flex w-full flex-1 flex-col gap-5 tab:gap-6">
              {column.map((post, pi) => (
                <BlogCard key={post.title} post={post} delay={(ci * 2 + pi) * 0.08} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
