import { motion } from 'framer-motion'
import chatgpt from '../assets/chatgpt.avif'
import claude from '../assets/claude.avif'
import gemini from '../assets/gemini.avif'
import perplexity from '../assets/perplexity.webp'
import Button from './ui/Button'
import GridBackground from './ui/GridBackground'

// Positioned relative to the heading+paragraph wrapper
const HEADER_CHIPS = [
  {
    src: chatgpt,
    alt: 'ChatGPT',
    box: 'p-1.5 bottom-[-73px] right-[-10px] tab:bottom-[55px] tab:right-[-48px] desk:bottom-[37px] desk:right-[-28px]',
    icon: 'w-[41px] h-[41px] tab:w-[42px] tab:h-[42px]',
  },
  {
    src: claude,
    alt: 'Claude',
    box: 'p-1 bottom-[-156px] left-[26px] tab:bottom-[-85px] tab:left-[9px] desk:bottom-[-131px] desk:left-[90px]',
    icon: 'w-[41px] h-[41px] tab:w-[46px] tab:h-[46px]',
  },
]

// Positioned relative to the full content block (heading + paragraph + button)
const CONTENT_CHIPS = [
  {
    src: gemini,
    alt: 'Gemini',
    box: '-translate-x-1/2 -translate-y-1/2 p-1 top-[90%] left-[86%] tab:top-[68%] tab:left-[95%] desk:top-[75%] desk:left-[92%]',
    icon: 'w-[41px] h-[41px] tab:w-[45px] tab:h-[46px]',
  },
  {
    src: perplexity,
    alt: 'Perplexity',
    box: 'p-1.5 bottom-[103px] left-[-9px] tab:bottom-auto tab:-translate-y-1/2 tab:top-[45%] tab:left-[-44px] desk:top-[49%] desk:left-[-23px]',
    icon: 'w-[37px] h-[37px] tab:w-[42px] tab:h-[42px]',
  },
]

function Chip({
  chip,
  delay,
}: {
  chip: { src: string; alt: string; box: string; icon: string }
  delay: number
}) {
  return (
    <motion.div
      className={`absolute rounded-lg border bg-white ${chip.box}`}
      style={{ borderColor: 'rgb(224, 224, 224)' }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.8 },
      }}
    >
      <img src={chip.src} alt={chip.alt} className={`block max-w-none object-cover ${chip.icon}`} />
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pt-25 tab:px-16">
      <GridBackground />

      <div className="relative z-10 mx-auto flex max-w-300 flex-col items-center gap-7 pt-17.5 pb-25 tab:gap-9.5 tab:pt-37.5 tab:pb-45 desk:pt-33">
        <div className="relative flex w-full max-w-360 flex-col items-center gap-4 tab:gap-4.5">
          {HEADER_CHIPS.map((chip, i) => (
            <Chip key={chip.alt} chip={chip} delay={0.3 + i * 0.1} />
          ))}

          <motion.h1
            className="max-w-250 text-center font-switzer text-[48px] font-medium leading-[1.1] text-black tab:max-w-300 tab:text-[64px] tab:leading-[1em] tab:tracking-normal desk:text-[84px] desk:leading-[1.1] desk:tracking-[-0.03em]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Win Search Everywhere:
            <br />
            SEO + AEO
          </motion.h1>

          <motion.p
            className="max-w-150 text-center font-display text-base text-[rgb(63,63,70)] tab:max-w-205 tab:font-switzer tab:text-lg tab:text-[rgb(99,99,99)] desk:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
          >
            Beyond data. We own the full stack - tracking, strategy, analysis, and
            execution across AEO and SEO to grow your visibility and revenue.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
        >
          <Button href="./contact-us" variant="primary" size="lg">
            Talk to an Expert
          </Button>
        </motion.div>

        {CONTENT_CHIPS.map((chip, i) => (
          <Chip key={chip.alt} chip={chip} delay={0.5 + i * 0.1} />
        ))}
      </div>
    </section>
  )
}
