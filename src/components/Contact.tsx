const links = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line py-20"
    >
      <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-muted">
        Contact
      </h2>
      <p className="max-w-2xl text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        Have a project in mind or just want to say hi? My inbox is open.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <a
          href="mailto:you@example.com"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition hover:bg-accent-hover"
        >
          Email me
        </a>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium transition-colors hover:text-ink"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
