const links = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-200 py-20 dark:border-zinc-800"
    >
      <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Contact
      </h2>
      <p className="max-w-2xl text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
        Have a project in mind or just want to say hi? My inbox is open.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <a
          href="mailto:you@example.com"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Email me
        </a>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
