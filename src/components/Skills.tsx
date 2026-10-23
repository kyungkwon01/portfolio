import { skills } from '../data/skills'
import type { SkillIcon } from '../data/skills'

function Icon({ icon }: { icon: SkillIcon }) {
  return icon.kind === 'brand' ? (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  )
}

function Skills() {
  return (
    <section id="skills" className="border-t border-line py-20">
      <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-muted">
        Skills
      </h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm"
          >
            <span className="text-ink">
              <Icon icon={skill.icon} />
            </span>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
