import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo.png'
import Button from './ui/Button'

const NAV_LINKS = [
  { label: 'Intelligence', href: '#' },
  { label: 'Case Studies', href: './case-studies' },
  { label: 'Services', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Pricing', href: './pricing#pricing' },
]

const INTEL_COLUMNS = [
  [
    { label: 'AI Visibility', href: './intelligence/ai-visibility-tracking#hero-ai', highlight: true },
    { label: 'Revenue Drop', href: './intelligence/revenue-drop-analytics#hero-ai' },
    { label: 'Revenue by Keyword', href: './intelligence/revenue-by-keyword-attribution#hero-ai' },
  ],
  [
    { label: 'Traffic Drop', href: './intelligence/traffic-drop-analytics#hero-ai' },
    { label: 'Content Refresh', href: './intelligence/content-refresh-analytics#hero-ai' },
    { label: 'Page Level', href: './intelligence/page-level-analytics#hero-ai' },
  ],
]

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  const bar = 'absolute left-0 h-[1.5px] w-6 rounded-full bg-black'
  return (
    <span className="relative block h-6 w-6">
      <motion.span
        className={bar}
        animate={open ? { top: '11px', rotate: 45 } : { top: '6px', rotate: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
      <motion.span
        className={bar}
        style={{ top: '11px' }}
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className={bar}
        animate={open ? { top: '11px', rotate: -45 } : { top: '16px', rotate: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </span>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [intelOpen, setIntelOpen] = useState(false)
  const [mobileIntelOpen, setMobileIntelOpen] = useState(false)

  return (
    <>
      <div
        className="sticky top-0 z-30 flex items-center justify-center gap-3 px-2 py-2 text-center font-display text-sm text-white tab:px-4"
        style={{ backgroundColor: 'rgb(20, 17, 17)' }}
      >
        <p className="min-w-0 flex-1 tab:flex-none">
          Want a self serve tool to track AI Visibility? Checkout Passionfruit Labs
        </p>
        <a
          href="https://labs.getpassionfruit.com"
          target="_blank"
          rel="noopener"
          className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-4 py-[7px] text-[10px] text-black tab:text-xs"
        >
          Learn More
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(45deg)' }} aria-hidden>
            <path d="M12 4v16M12 4l-6 6M12 4l6 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <motion.header
        className="fixed inset-x-0 top-14 z-20 border-b bg-white tab:top-11.5"
        style={{ borderColor: 'rgb(196, 196, 196)' }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex w-full items-center justify-center px-5 py-3 min-[1200px]:px-16">
        <div className="flex w-full max-w-360 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="./" className="shrink-0">
              <img src={logo} alt="Passionfruit" className="h-9.75 w-47 object-contain" />
            </a>

            <nav className="hidden items-center gap-5 min-[1200px]:flex">
              {NAV_LINKS.map((link) =>
                link.label === 'Intelligence' ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIntelOpen(true)}
                    onMouseLeave={() => setIntelOpen(false)}
                  >
                    <a
                      href={link.href}
                      className="font-sans text-base font-medium transition-colors hover:text-ink-950"
                      style={{ color: 'rgb(99, 99, 99)' }}
                    >
                      {link.label}
                    </a>
                    <AnimatePresence>
                      {intelOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="absolute top-full left-0 z-40 mt-4 rounded-[10px] border bg-white p-2 shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
                          style={{ borderColor: 'rgb(196, 196, 196)' }}
                        >
                          <div className="flex gap-2">
                            {INTEL_COLUMNS.map((column, i) => (
                              <div key={i} className="flex w-48 flex-col gap-1">
                                {column.map((item) => (
                                  <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 font-sans text-sm text-ink-950 transition-colors hover:bg-ink-50"
                                    style={item.highlight ? { backgroundColor: 'rgb(247, 247, 242)' } : undefined}
                                  >
                                    {item.label}
                                    {item.highlight && <ArrowRightIcon />}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-sans text-base font-medium transition-colors hover:text-ink-950"
                    style={{ color: 'rgb(99, 99, 99)' }}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>
          </div>

          <div className="hidden min-[1200px]:block">
            <Button href="./contact-us" size="md" className="w-[193px]">
              Book a call
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center justify-center text-black min-[1200px]:hidden"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden border-t min-[1200px]:hidden"
              style={{ borderColor: 'rgb(196, 196, 196)' }}
            >
              <nav className="flex flex-col gap-6 px-5 py-6">
                {NAV_LINKS.map((link) =>
                  link.label === 'Intelligence' ? (
                    <div key={link.label}>
                      <button
                        type="button"
                        onClick={() => setMobileIntelOpen((v) => !v)}
                        aria-expanded={mobileIntelOpen}
                        className="flex w-full items-center justify-between font-sans text-base font-medium transition-colors hover:text-ink-950"
                        style={{ color: 'rgb(99, 99, 99)' }}
                      >
                        {link.label}
                        <motion.span
                          animate={{ rotate: mobileIntelOpen ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRightIcon />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileIntelOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 pt-4 pl-4">
                              {INTEL_COLUMNS.flat().map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="font-sans text-sm font-medium text-ink-950 transition-colors hover:text-ink-950"
                                >
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-sans text-base font-medium transition-colors hover:text-ink-950"
                      style={{ color: 'rgb(99, 99, 99)' }}
                    >
                      {link.label}
                    </a>
                  ),
                )}
                <Button href="./contact-us" size="md" className="w-fit">
                  Book a call
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
