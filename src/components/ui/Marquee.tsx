import { motion, useAnimationControls } from 'framer-motion'
import type { ReactNode } from 'react'

type MarqueeProps = {
  children: ReactNode
  durationSeconds?: number
  reverse?: boolean
  className?: string
  gapClassName?: string
}

export default function Marquee({
  children,
  durationSeconds = 30,
  reverse = false,
  className = '',
  gapClassName = 'gap-12',
}: MarqueeProps) {
  const controls = useAnimationControls()

  const play = () =>
    controls.start({
      x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
      transition: { duration: durationSeconds, repeat: Infinity, ease: 'linear' },
    })

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
      }}
    >
      <motion.div
        className={`flex w-max shrink-0 items-center ${gapClassName}`}
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={play}
        onViewportEnter={play}
      >
        <div className={`flex shrink-0 items-center ${gapClassName}`}>{children}</div>
        <div className={`flex shrink-0 items-center ${gapClassName}`} aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
