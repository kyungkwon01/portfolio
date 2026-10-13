function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>The best way to reach me is by email.</p>
      <div className="actions">
        <a className="button" href="mailto:you@example.com">
          Email me
        </a>
        <a
          className="button secondary"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="button secondary"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
