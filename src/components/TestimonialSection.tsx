import user1 from '../assets/Testimonial/user1.avif'
import user2 from '../assets/Testimonial/user2.avif'
import user3 from '../assets/Testimonial/user3.jpeg'
import user4 from '../assets/Testimonial/user4.avif'
import user5 from '../assets/Testimonial/user5.avif'
import user6 from '../assets/Testimonial/user6.avif'
import Marquee from './ui/Marquee'
import SectionHeading from './ui/SectionHeading'

const TESTIMONIALS = [
  {
    avatar: user4,
    name: 'Steve Dilk',
    role: 'Co-Founder & COO, Vitality',
    quote:
      'Passionfruit has been crushing it. 5 / 5 for Quality, Collaboration, Schedule, Budget, and Results. Love to see it.',
  },
  {
    avatar: user1,
    name: 'Nhu Do',
    role: 'Co-Founder & CTO, Camb AI',
    quote:
      'Great team. They bring an engineering mindset to build systematic, data backed marketing strategies that drive real results.',
  },
  {
    avatar: user2,
    name: 'Riddhi Jain',
    role: 'Founder & CEO, Typsy Beauty',
    quote:
      'With Passionfruit our ROI on organic skyrocketed 14x. Their deep understanding of SEO and GEO has made them an invaluable partner in our growth journey!',
  },
  {
    avatar: user3,
    name: 'Akshat Prakash',
    role: 'Founder, @ Powersutra',
    quote:
      'Passionfruit is a talented and hardworking team. They know their work and drive results. Delighted to be their client :)',
  },
  {
    avatar: user5,
    name: 'Pranay Parekh',
    role: 'Founder & CEO, Necesera',
    quote: 'Really good work — clear effort and quality in everything the team delivers.',
  },
  {
    avatar: user6,
    name: 'Kairavi Bharat Ram',
    role: 'Growth Lead',
    quote:
      'Excellent SEO partner — responsive, detail-oriented, with steady progress in website performance and strategic guidance.',
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Hear from our Customers"
          subtitle="Hear from the founders and growth leaders who've scaled with Passionfruit."
        />
      </div>

      <Marquee durationSeconds={45} className="mt-14" gapClassName="gap-6">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex w-80 shrink-0 flex-col gap-4 rounded-2xl border border-border-soft bg-cream p-6"
          >
            <blockquote className="text-sm leading-relaxed text-ink-700">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-heading text-sm font-medium text-ink-950">
                  {t.name}
                </span>
                <span className="text-xs text-ink-500">{t.role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  )
}
