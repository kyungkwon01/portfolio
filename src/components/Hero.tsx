import { useEffect, useState } from 'react'

const NAME = 'Kyung Kwon'
const START_DELAY_MS = 400
const TYPE_SPEED_MS = 110

// Skip the typing effect for visitors who ask for less motion.
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Hero() {
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? NAME.length : 0))

  useEffect(() => {
    if (typed >= NAME.length) return
    const id = setTimeout(
      () => setTyped((n) => n + 1),
      typed === 0 ? START_DELAY_MS : TYPE_SPEED_MS,
    )
    return () => clearTimeout(id)
  }, [typed])

  return (
    <section id="hero" className="py-24 sm:py-32">
      <p className="mb-4 text-sm font-medium text-muted">Hi, I'm</p>
      <h1
        aria-label={NAME}
        className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl"
      >
        <span aria-hidden="true">
          {NAME.slice(0, typed)}
          <span className="ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.1em] animate-blink bg-accent" />
        </span>
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
        Front-end developer focused on React, TypeScript, and the details
        that make interfaces feel effortless.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition hover:bg-accent-hover"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero
