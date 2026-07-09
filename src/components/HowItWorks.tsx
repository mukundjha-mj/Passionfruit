import { motion } from 'framer-motion'
import step1 from '../assets/How It work/1.avif'
import step2 from '../assets/How It work/2.avif'
import step3 from '../assets/How It work/3.avif'
import step4 from '../assets/How It work/4.avif'
import Button from './ui/Button'
import GridBackground from './ui/GridBackground'

const ROWS = [
  {
    image: step1,
    imageFirst: false,
    objectFit: 'object-cover',
    title: 'Connect Knowledge Base',
    body: 'Connect Google Search Console, GA4, and your CMS, then add key pages, competitors, and prompt themes so our system understands what matters to your brand and pipeline',
  },
  {
    image: step4,
    imageFirst: true,
    objectFit: 'object-fill',
    title: 'Tracks Signals In real time',
    body: 'Track performance shifts across rankings, traffic, citations, and share of voice, then catch changes early so your team responds before small drops become bigger losses',
  },
  {
    image: step3,
    imageFirst: false,
    objectFit: 'object-cover',
    title: 'Always on Intelligence',
    body: 'Our agents process hundreds of signals per URL, tie them to intent and cluster context, then surface clear explanations for what changed and where the next lift sits',
  },
  {
    image: step2,
    imageFirst: true,
    objectFit: 'object-cover',
    title: 'Human in the Loop Actions',
    body: 'Every insight becomes a ranked action, writers and SEO experts ship the work, QA stays built in, and your backlog stays transparent so you always know what moved and why',
  },
]

function Card({
  title,
  body,
  delay,
  position,
}: {
  title: string
  body: string
  delay: number
  position: 'left' | 'right'
}) {
  const reveal = {
    initial: { opacity: 0, x: 150 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
  } as const
  const order = position === 'left' ? 'tab:order-1' : 'tab:order-2'
  const border = position === 'left' ? 'tab:border-r' : 'tab:border-l'

  return (
    <div className={`min-w-0 flex-1 overflow-hidden border-[#c4c4c4] bg-[#141414] ${order} ${border}`}>
      <div className="flex h-full w-full flex-col items-start justify-center gap-5.75 p-6 tab:p-10">
        <motion.h3
          className="font-switzer text-[24px] font-medium leading-[1.4em] tracking-[-0.02em] text-white desk:text-[30px]"
          {...reveal}
          transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="font-switzer text-[18px] leading-[150%] text-[rgb(196,196,196)] desk:text-[20px]"
          {...reveal}
          transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
          {body}
        </motion.p>
      </div>
    </div>
  )
}

function ImageCell({
  src,
  alt,
  objectFit,
  position,
}: {
  src: string
  alt: string
  objectFit: string
  position: 'left' | 'right'
}) {
  const order = position === 'left' ? 'tab:order-1' : 'tab:order-2'
  const border = position === 'left' ? 'tab:border-r' : 'tab:border-l'

  return (
    <div
      className={`aspect-[1.42933] w-full min-w-0 flex-1 overflow-hidden border-[#c4c4c4] tab:aspect-auto tab:h-full ${order} ${border}`}
    >
      <img src={src} alt={alt} className={`h-full w-full ${objectFit}`} />
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden border-y border-[#c4c4c4] bg-ink-950 px-5 py-16 tab:px-12 tab:pt-30 tab:pb-27.5 desk:px-16">
      <div className="absolute inset-0 opacity-30">
        <GridBackground />
      </div>

      <div className="relative z-10 mx-auto flex max-w-300 flex-col items-center gap-10">
        <motion.div
          className="flex w-full flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-switzer text-[40px] font-medium leading-[1.1em] tracking-[-0.03em] text-white tab:text-[48px] desk:text-[64px]">
            How It Works
          </h2>
          <p className="max-w-125 font-switzer text-[18px] leading-[150%] text-[rgb(196,196,196)] desk:text-[20px]">
            SEO, GEO, and AEO always on loop: measure, prioritize, ship, repeat.
          </p>
          <Button href="./contact-us" variant="hero" className="mt-2">
            Talk to an Expert
          </Button>
        </motion.div>

        <div className="w-full divide-y divide-[#c4c4c4] border border-[#c4c4c4]">
          {ROWS.map((row, i) => (
            <div
              key={row.title}
              className="flex flex-col divide-y divide-[#c4c4c4] tab:aspect-[2.85866] tab:flex-row tab:divide-y-0"
            >
              <Card
                title={row.title}
                body={row.body}
                delay={i * 0.1}
                position={row.imageFirst ? 'right' : 'left'}
              />
              <ImageCell
                src={row.image}
                alt={row.title}
                objectFit={row.objectFit}
                position={row.imageFirst ? 'left' : 'right'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
