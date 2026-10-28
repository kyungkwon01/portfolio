import { useState, type SubmitEvent } from 'react'

const EMAIL = 'kyungkwon01@gmail.com'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`

const links = [
  { label: 'GitHub', href: 'https://github.com/kyungkwon01' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kyungkwon/' },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClass =
  'w-full rounded-lg border border-line-strong bg-surface px-4 py-2.5 text-ink placeholder:text-muted transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30'

function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `Portfolio message from ${data.name}`,
          _template: 'table',
        }),
      })
      const json = await res.json()
      // FormSubmit reports success as the string "true".
      if (!res.ok || String(json.success) !== 'true') throw new Error(json.message)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

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

      {status === 'sent' ? (
        <div className="mt-8 max-w-xl rounded-lg border border-line bg-surface p-6" role="status">
          <p className="font-medium text-ink">Thanks, your message is on its way.</p>
          <p className="mt-1 text-sm text-muted">I'll get back to you soon.</p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid max-w-xl gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-medium text-ink">
              Name
              <input name="name" required autoComplete="name" className={fieldClass} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-ink">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
              />
            </label>
          </div>
          <label className="grid gap-1.5 text-sm font-medium text-ink">
            Message
            <textarea name="message" required rows={5} className={`${fieldClass} resize-y`} />
          </label>
          {/* Honeypot: hidden from people, filled in by bots, rejected by FormSubmit. */}
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          {status === 'error' && (
            <p className="text-sm text-body" role="alert">
              Something went wrong sending your message. Please try again, or email me at{' '}
              <a href={`mailto:${EMAIL}`} className="font-medium text-accent hover:text-accent-hover">
                {EMAIL}
              </a>
              .
            </p>
          )}
          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </div>
        </form>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-6">
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
