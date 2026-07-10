const RESOURCES = [
  { label: 'Blogs', href: './blog' },
  { label: 'Case Studies', href: './case-studies' },
  { label: 'Research', href: './research' },
  { label: 'Comparison', href: './comparison' },
  { label: 'Company', href: './company' },
  { label: 'Brands', href: './brand-page' },
  { label: 'About Us', href: './about-us' },
]

const LEGALS = [
  { label: 'Privacy & Policy', href: './privacy-policy' },
  { label: 'Terms of Service', href: './terms-of-service' },
]

function LinkedinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 8.5h3.2v10.8H6.5V8.5Zm1.6-5.1a1.86 1.86 0 1 1 0 3.72 1.86 1.86 0 0 1 0-3.72ZM12.2 8.5h3.06v1.48h.04c.43-.8 1.47-1.65 3.03-1.65 3.24 0 3.84 2.05 3.84 4.72v6.25h-3.2v-5.54c0-1.32-.02-3.02-1.86-3.02-1.87 0-2.15 1.43-2.15 2.92v5.64h-3.2V8.5Z"
        fill="black"
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13.9 10.4 21 3h-2l-6.2 6.4L7.9 3H2.7l7.4 10.4L2.7 21h2l6.6-6.8L16.1 21h5.2l-7.4-10.6ZM11.6 13l-.8-1.1L5 4.7h2.4l4.9 6.9.8 1.1 6.4 8.9h-2.4L11.6 13Z"
        fill="black"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink-950 px-5 py-16 tab:px-16 tab:py-20">
      <div className="mx-auto flex max-w-360 flex-col gap-12.5 tab:gap-25.75">
        <div className="flex flex-col gap-[70px] tab:flex-row tab:gap-[103px]">
          <div className="flex flex-1 flex-col gap-6">
            <div className="w-full max-w-[300.5px]">
              <iframe
                title="Subscribe to Passionfruit Pulse"
                src="https://subscribe-forms.beehiiv.com/f942553d-6fec-433b-82cf-f7338b586987"
                data-test-id="beehiiv-embed"
                frameBorder="0"
                scrolling="no"
                style={{
                  width: '100%',
                  height: '296px',
                  margin: 0,
                  borderRadius: 0,
                  backgroundColor: 'transparent',
                  boxShadow: '0 0 #0000',
                  maxWidth: '100%',
                }}
              />
            </div>

            <div className="flex items-center gap-3.5">
              <a
                href="https://www.linkedin.com/company/getpassionfruit/posts/?feedView=all"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded bg-white"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://x.com/hq_passionfruit"
                target="_blank"
                rel="noopener"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded bg-white"
              >
                <XIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-8 tab:flex-row">
            <div className="flex-1">
              <h4 className="px-0 py-2.5 font-switzer text-[20px] font-medium capitalize text-[rgb(196,196,196)]">
                Resources
              </h4>
              <ul className="flex flex-col">
                {RESOURCES.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block py-2.5 font-switzer capitalize leading-[124%] text-white transition-colors hover:text-[rgb(196,196,196)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="px-0 py-2.5 font-switzer text-[20px] font-medium capitalize text-[rgb(196,196,196)]">
                Legals
              </h4>
              <ul className="flex flex-col">
                {LEGALS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block py-2.5 font-switzer capitalize leading-[124%] text-white transition-colors hover:text-[rgb(196,196,196)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <svg viewBox="0 0 97.8 24" className="h-auto w-full" aria-hidden>
          <foreignObject width="100%" height="100%" style={{ overflow: 'visible' }}>
            <p
              className="m-0 whitespace-nowrap font-switzer"
              style={{ fontSize: '20px', letterSpacing: '-0.04em' }}
            >
              <span
                style={{
                  backgroundImage: 'linear-gradient(181deg, rgb(99, 99, 99) 44%, rgba(99, 99, 99, 0) 88%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Passionfruit
              </span>
            </p>
          </foreignObject>
        </svg>
      </div>
    </footer>
  )
}
