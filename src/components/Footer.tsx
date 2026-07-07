import logo from '../assets/logo.png'

const RESOURCES = ['Blogs', 'Case Studies', 'Research', 'Comparison']
const COMPANY = ['Brands', 'About Us']
const LEGALS = ['Terms of Service', 'Privacy & Policy']

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 rounded-2xl border border-border-soft bg-cream p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-heading text-lg font-medium text-ink-950">
              Stay ahead of the search shift
            </h3>
            <p className="mt-1 text-sm text-ink-500">
              SEO, GEO, and AEO insights — straight to your inbox.
            </p>
          </div>
          <form className="flex w-full max-w-sm gap-2 sm:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full border border-border-soft bg-white px-4 py-2.5 text-sm text-ink-950 outline-none focus:border-brand-purple"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-ink-950 px-5 py-2.5 font-heading text-sm text-white transition-colors hover:bg-ink-800"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Passionfruit" className="h-7 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-ink-500">
              Passionfruit - SEO, GEO, Reddit Engagement. Started by Stanford &amp;
              CMU alumni, backed by top investors.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-ink-600 transition-colors hover:bg-ink-100"
              >
                in
              </a>
              <a
                href="https://x.com"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-ink-600 transition-colors hover:bg-ink-100"
              >
                X
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-medium text-ink-950">Resources</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {RESOURCES.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-ink-500 hover:text-ink-950">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-medium text-ink-950">Company</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {COMPANY.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-ink-500 hover:text-ink-950">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-medium text-ink-950">Legals</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {LEGALS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-ink-500 hover:text-ink-950">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 text-center text-xs text-ink-400">
          © {new Date().getFullYear()} Passionfruit. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
