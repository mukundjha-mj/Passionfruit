import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type MarqueeProps = {
  children: ReactNode
  speedPxPerSecond?: number
  reverse?: boolean
  className?: string
  gapClassName?: string
}

export default function Marquee({
  children,
  speedPxPerSecond = 50,
  reverse = false,
  className = '',
  gapClassName = 'gap-12',
}: MarqueeProps) {
  const controls = useAnimationControls()
  const setRef = useRef<HTMLDivElement>(null)
  const [setWidth, setSetWidth] = useState(0)

  useEffect(() => {
    if (setRef.current) setSetWidth(setRef.current.getBoundingClientRect().width)
  }, [children])

  useEffect(() => {
    if (!setWidth) return
    const duration = setWidth / speedPxPerSecond
    controls.start({
      x: reverse ? [-setWidth, 0] : [0, -setWidth],
      transition: { duration, repeat: Infinity, ease: 'linear' },
    })
  }, [setWidth, speedPxPerSecond, reverse, controls])

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
        onHoverEnd={() => {
          if (!setWidth) return
          const duration = setWidth / speedPxPerSecond
          controls.start({
            x: reverse ? [-setWidth, 0] : [0, -setWidth],
            transition: { duration, repeat: Infinity, ease: 'linear' },
          })
        }}
      >
        <div ref={setRef} className={`flex shrink-0 items-center ${gapClassName}`}>
          {children}
        </div>
        <div className={`flex shrink-0 items-center ${gapClassName}`} aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
