function Hero() {
  return (
    <section id="hero" className="py-24 sm:py-32">
      <p className="mb-4 text-sm font-medium text-zinc-500">Hi, I'm</p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100">
        Kyung Kwon
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
       Front-End Developer
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-100"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero
