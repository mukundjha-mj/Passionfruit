import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={fadeUp}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-purple">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-medium tracking-tight text-ink-950 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && <p className="text-base text-ink-500 sm:text-lg">{subtitle}</p>}
    </motion.div>
  )
}
