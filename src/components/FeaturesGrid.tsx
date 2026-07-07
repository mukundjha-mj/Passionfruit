import { motion } from 'framer-motion'
import nykaa from '../assets/nykaa.avif'
import Button from './ui/Button'

const FEATURES = [
  {
    title: 'SEO. GEO. AEO. One Partner.',
    body: 'One unified strategy covering both Google and AI chatbots. A single implementation plan, one accountable owner, full transparency, and managed execution.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M17.5 14v7M14 17.5h7" />
      </svg>
    ),
  },
  {
    title: 'Data Backed Execution',
    body: "Dashboards don't move revenue. We combine our proprietary technology with in-house experts to deliver end-to-end execution. No reports you have to act on yourself.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <ellipse cx="12" cy="5.5" rx="8" ry="3" />
        <path d="M4 5.5V12c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" />
        <path d="M4 12v6.5c0 1.66 3.58 3 8 3s8-1.34 8-3V12" />
      </svg>
    ),
  },
  {
    title: 'Power AI Agents & Real-Time Insights',
    body: 'Our analytics agents process 100+ signals per URL and deliver insights in real time. Our experts always have the right data at the right moment to make the right decision.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 17l6-6 4 4 6-8" />
        <path d="M14 6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Execution at Scale',
    body: 'No hourly billing traps. No low-quality AI content factory. AI handles large-scale data gathering and analysis, but every action is executed and reviewed by in-house experts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" />
        <path d="M4 12l8 4.5 8-4.5" />
        <path d="M4 16.5L12 21l8-4.5" />
      </svg>
    ),
  },
]

function StarRow() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21.9647 10.7671L17.7459 14.4074L19.0313 19.8515C19.1022 20.147 19.0839 20.4569 18.9788 20.7421C18.8736 21.0272 18.6864 21.2748 18.4406 21.4536C18.1948 21.6324 17.9015 21.7343 17.5979 21.7465C17.2942 21.7587 16.9937 21.6806 16.7344 21.5221L12 18.6083L7.26282 21.5221C7.00353 21.6797 6.70341 21.757 6.40026 21.7444C6.0971 21.7318 5.80446 21.6297 5.55919 21.4511C5.31392 21.2725 5.12698 21.0253 5.02191 20.7406C4.91685 20.456 4.89835 20.1466 4.96875 19.8515L6.25875 14.4074L2.04 10.7671C1.81059 10.5688 1.64468 10.3074 1.56299 10.0154C1.48129 9.72336 1.48743 9.41376 1.58064 9.12522C1.67385 8.83669 1.85 8.58201 2.08709 8.39299C2.32418 8.20397 2.6117 8.08899 2.91375 8.06241L8.445 7.61616L10.5788 2.45241C10.6942 2.17099 10.8908 1.93027 11.1435 1.76085C11.3961 1.59143 11.6935 1.50098 11.9977 1.50098C12.3019 1.50098 12.5992 1.59143 12.8518 1.76085C13.1045 1.93027 13.3011 2.17099 13.4166 2.45241L15.5494 7.61616L21.0806 8.06241C21.3833 8.088 21.6716 8.20234 21.9096 8.3911C22.1475 8.57986 22.3245 8.83464 22.4183 9.12352C22.5121 9.41241 22.5185 9.72254 22.4368 10.0151C22.3552 10.3076 22.189 10.5695 21.9591 10.768L21.9647 10.7671Z"
            fill="#FFC746"
          />
        </svg>
      ))}
    </div>
  )
}

export default function FeaturesGrid() {
  return (
    <section className="bg-white px-5 py-16 tab:px-16 tab:py-20 desk:py-28">
      <div className="mx-auto flex max-w-360 flex-col gap-5 desk:flex-row desk:items-start desk:gap-16">
        <motion.div
          className="flex flex-col items-start gap-5 desk:sticky desk:top-30 desk:shrink-0 desk:grow-[0.9] desk:basis-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-4xl font-medium tracking-tight text-ink-950 tab:text-5xl">
            Why Great Brands Choose Us
          </h2>
          <p className="text-base text-ink-500 tab:text-lg">
            What sets us apart is simple: unified SEO and AEO execution, real-time
            intelligence, and expert-led delivery at scale.
          </p>
          <Button href="./contact-us">Talk to an Expert</Button>

          <div className="flex w-full flex-col items-center gap-8 rounded-2xl border border-border-soft bg-[#f7f7f2] p-10 text-center">
            <StarRow />
            <p className="font-heading text-2xl leading-relaxed text-ink-900">
              &ldquo;Passionfruit feels like an extension of our team! They are
              proactive, sharp, and deeply invested in outcomes. We look forward to
              each meeting with them!&rdquo;
            </p>
            <img src={nykaa} alt="Nykaa" className="h-11 w-auto object-contain" />
          </div>
        </motion.div>

        <div className="flex flex-col gap-5 desk:grow desk:shrink-0 desk:basis-0">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="flex flex-col gap-6 rounded-xl border border-border-soft bg-white p-6 tab:p-10"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <div className="flex items-start gap-6">
                <div className="flex shrink-0 items-center justify-center rounded-[7px] bg-accent-yellow p-1.5">
                  <div className="h-7.5 w-7.5">{feature.icon}</div>
                </div>
                <h3 className="font-heading text-xl font-medium text-ink-950 tab:text-2xl">
                  {feature.title}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-ink-500 tab:text-lg">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
