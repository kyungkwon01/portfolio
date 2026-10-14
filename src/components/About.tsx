const skills = ['Skill one', 'Skill two', 'Skill three']

function About() {
  return (
    <section id="about" className="border-t border-zinc-200 py-20 dark:border-zinc-800">
      <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-zinc-500">
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
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm dark:border-zinc-800"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
