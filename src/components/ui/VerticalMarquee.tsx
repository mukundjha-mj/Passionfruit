import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type VerticalMarqueeProps = {
  children: ReactNode
  speedPxPerSecond?: number
  reverse?: boolean
  className?: string
  gapClassName?: string
}

export default function VerticalMarquee({
  children,
  speedPxPerSecond = 30,
  reverse = false,
  className = '',
  gapClassName = 'gap-5',
}: VerticalMarqueeProps) {
  const controls = useAnimationControls()
  const setRef = useRef<HTMLDivElement>(null)
  const [setHeight, setSetHeight] = useState(0)

  useEffect(() => {
    if (setRef.current) setSetHeight(setRef.current.getBoundingClientRect().height)
  }, [children])

  useEffect(() => {
    if (!setHeight) return
    const duration = setHeight / speedPxPerSecond
    controls.start({
      y: reverse ? [-setHeight, 0] : [0, -setHeight],
      transition: { duration, repeat: Infinity, ease: 'linear' },
    })
  }, [setHeight, speedPxPerSecond, reverse, controls])

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      <motion.div
        className={`flex w-full flex-col items-center ${gapClassName}`}
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => {
          if (!setHeight) return
          const duration = setHeight / speedPxPerSecond
          controls.start({
            y: reverse ? [-setHeight, 0] : [0, -setHeight],
            transition: { duration, repeat: Infinity, ease: 'linear' },
          })
        }}
      >
        <div ref={setRef} className={`flex w-full flex-col items-center ${gapClassName}`}>
          {children}
        </div>
        <div className={`flex w-full flex-col items-center ${gapClassName}`} aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
