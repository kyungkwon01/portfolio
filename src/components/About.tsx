const skills = ['Skill one', 'Skill two', 'Skill three']

function About() {
  return (
    <section id="about" className="border-t border-line py-20">
      <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-muted">
        About
      </h2>
      <p className="max-w-2xl text-lg leading-relaxed">
        A short paragraph about your background, what you're working on now,
        and what kind of work you're looking for.
      </p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-line px-3 py-1 text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
