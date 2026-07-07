import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  className?: string
}

export default function Button({
  children,
  href = '#',
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const sizes = size === 'lg' ? 'px-8 py-3.5 text-base' : 'px-[30px] py-3 text-base'

  if (variant === 'secondary') {
    return (
      <motion.a
        href={href}
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-border-soft bg-white font-heading font-medium text-ink-950 transition-colors hover:bg-ink-50 ${sizes} ${className}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl font-sans ${sizes} ${className}`}
      style={{ backgroundColor: 'rgb(255, 203, 85)' }}
      initial="rest"
      whileHover="hover"
    >
      <motion.span
        aria-hidden
        className="absolute left-1/2 -bottom-2 h-2 w-2 -translate-x-1/2 rounded-full bg-black"
        variants={{
          rest: { scale: 1, opacity: 1 },
          hover: { scale: 26, opacity: 1 },
        }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      />
      <motion.span
        className="relative z-10"
        variants={{
          rest: { color: 'rgb(0,0,0)' },
          hover: { color: 'rgb(255,255,255)' },
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.a>
  )
}
