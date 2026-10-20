function Hero() {
  return (
    <section id="hero" className="py-24 sm:py-32">
      <p className="mb-4 text-sm font-medium text-muted">Hi, I'm</p>
      <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
        Kyung Kwon
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
       Front-End Developer
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
