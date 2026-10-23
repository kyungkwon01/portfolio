import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const sections = ['projects', 'about', 'skills', 'contact']

function Header() {
  const [open, setOpen] = useState(false)

  // Close the menu on Escape, and if the window grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const desktop = window.matchMedia('(min-width: 40rem)')
    const onResize = () => desktop.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
    }
  }, [open])

  const barClass =
    'absolute left-0 h-0.5 w-5 rounded-full bg-current transition duration-200'

  return (
    <header className="sticky top-0 z-10 border-b border-line/70 bg-canvas/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="font-semibold text-ink"
        >
          Kyung Kwon
        </a>
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden gap-6 text-sm sm:flex">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="capitalize transition-colors hover:text-ink"
              >
                {id}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className="-mr-2 grid size-10 place-items-center text-ink sm:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`${barClass} top-0 ${open ? 'translate-y-1.5 rotate-45' : ''}`}
              />
              <span
                className={`${barClass} top-1.5 ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`${barClass} top-3 ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-200 sm:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className="min-h-0">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 capitalize transition-colors hover:text-ink"
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
