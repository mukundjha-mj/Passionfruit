import facescanada from '../assets/facescanada.avif'
import hostfully from '../assets/hostfully.png'
import user1 from '../assets/Testimonial/user1.avif'
import user2 from '../assets/Testimonial/user2.avif'
import user3 from '../assets/Testimonial/user3.jpeg'
import user4 from '../assets/Testimonial/user4.avif'
import user5 from '../assets/Testimonial/user5.avif'
import user6 from '../assets/Testimonial/user6.avif'
import SectionHeading from './ui/SectionHeading'
import VerticalMarquee from './ui/VerticalMarquee'

type Testimonial =
  | { kind: 'person'; avatar: string; name: string; role: string; quote: string }
  | { kind: 'logo'; logo: string; logoAlt: string; quote: string }

// Reference splits the wall of testimonials into 3 independently scrolling
// vertical tickers of uneven length/speed so no two columns repeat in sync.
const COLUMN_1: Testimonial[] = [
  {
    kind: 'person',
    avatar: user4,
    name: 'Steve Dilk',
    role: 'Co-Founder & COO, Vitality',
    quote:
      'Passionfruit has been crushing it. 5 / 5 for Quality, Collaboration, Schedule, Budget, and Results. Love to see it.',
  },
  {
    kind: 'logo',
    logo: hostfully,
    logoAlt: 'Hostfully',
    quote: 'Really good work — clear effort and quality in everything the team delivers.',
  },
  {
    kind: 'person',
    avatar: user2,
    name: 'Riddhi Jain',
    role: 'Founder & CEO, Typsy Beauty',
    quote:
      'With Passionfruit our ROI on organic skyrocketed 14x. Their deep understanding of SEO and GEO has made them an invaluable partner in our growth journey!',
  },
]

const COLUMN_2: Testimonial[] = [
  {
    kind: 'person',
    avatar: user1,
    name: 'Nhu Do',
    role: 'Co-Founder & CTO, Camb AI',
    quote:
      'Great team. They bring an engineering mindset to build systematic, data backed marketing strategies that drive real results.',
  },
  {
    kind: 'person',
    avatar: user3,
    name: 'Akshat Prakash',
    role: 'Founder, @ Powersutra',
    quote:
      'Passionfruit is a talented and hardworking team. They know their work and drive results. Delighted to be their client :)',
  },
]

const COLUMN_3: Testimonial[] = [
  {
    kind: 'logo',
    logo: facescanada,
    logoAlt: 'Faces Canada',
    quote: 'Informative, easy-to-follow blogs that break down topics in a customer-friendly way.',
  },
  {
    kind: 'person',
    avatar: user5,
    name: 'Pranay Parekh',
    role: 'Founder & CEO, Necesera',
    quote:
      'Passionfruit doesn’t just deliver results. They deliver growth that directly impacts our top line.',
  },
  {
    kind: 'person',
    avatar: user6,
    name: 'Kairavi Bharat Ram',
    role: 'Growth Lead',
    quote:
      'Excellent SEO partner — responsive, detail-oriented, with steady progress in website performance and strategic guidance.',
  },
]

function QuoteIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9.5 8.5c-2.2 0-4 1.8-4 4v3.5h5V12h-2.5c0-1.1.9-2 2-2V8.5h-.5Z" />
      <path d="M18 8.5c-2.2 0-4 1.8-4 4v3.5h5V12h-2.5c0-1.1.9-2 2-2V8.5H18Z" />
    </svg>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure
      className="flex w-full shrink-0 flex-col gap-15.25 rounded-lg border p-8"
      style={{ borderColor: 'rgb(196, 196, 196)', backgroundColor: 'rgb(247, 247, 242)' }}
    >
      <div className="flex flex-col gap-3">
        <QuoteIcon />
        <blockquote className="font-sans text-[28px] leading-[1.4] tracking-tight text-ink-950">
          {testimonial.quote}
        </blockquote>
      </div>

      {testimonial.kind === 'person' ? (
        <figcaption className="mt-auto flex items-center gap-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-16 w-16 shrink-0 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-2xl leading-[1.4] tracking-tight text-ink-950">
              {testimonial.name}
            </span>
            <span className="text-base leading-[1.4] text-ink-500">{testimonial.role}</span>
          </div>
        </figcaption>
      ) : (
        <figcaption className="mt-auto flex h-10 items-center">
          <img
            src={testimonial.logo}
            alt={testimonial.logoAlt}
            className="h-full max-w-33 object-contain"
          />
        </figcaption>
      )}
    </figure>
  )
}

function TickerColumn({
  items,
  speedPxPerSecond,
  reverse,
  heightClassName,
  className = '',
}: {
  items: Testimonial[]
  speedPxPerSecond: number
  reverse?: boolean
  heightClassName: string
  className?: string
}) {
  return (
    <div className={`w-full min-w-0 flex-1 ${heightClassName} ${className}`}>
      <VerticalMarquee speedPxPerSecond={speedPxPerSecond} reverse={reverse} className="h-full">
        {items.map((item) => (
          <TestimonialCard key={item.quote} testimonial={item} />
        ))}
      </VerticalMarquee>
    </div>
  )
}

export default function TestimonialSection() {
  return (
    <section className="border-y border-border-soft bg-white py-24">
      <div className="px-6 tab:px-16">
        <SectionHeading
          title="Hear from our Customers"
          subtitle="Hear from the founders and growth leaders who've scaled with Passionfruit."
          titleClassName="font-heading text-[40px] font-medium leading-[1.1] tracking-tight text-ink-950 tab:text-[48px] desk:text-[64px]"
          subtitleClassName="text-base leading-[1.5] text-ink-500 tab:text-[20px]"
          maxWidthClassName="max-w-2xl desk:max-w-3xl"
        />

        <div className="mx-auto mt-14 flex w-full max-w-360 justify-center gap-5">
          <TickerColumn items={COLUMN_1} speedPxPerSecond={18} heightClassName="h-220 hidden desk:block" />
          <TickerColumn items={COLUMN_2} speedPxPerSecond={22} reverse heightClassName="h-220" />
          <TickerColumn items={COLUMN_3} speedPxPerSecond={16} heightClassName="h-220 hidden tab:block" />
        </div>
      </div>
    </section>
  )
}
