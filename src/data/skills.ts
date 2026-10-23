import {
  siBootstrap,
  siCss,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siGraphql,
  siHtml5,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siReact,
  siRedux,
  siTailwindcss,
  siTypescript,
  siVite,
  siWebpack,
} from 'simple-icons'

// An icon is either a filled brand logo from simple-icons, or a stroked
// generic icon for skills that have no logo (REST, SQL, WCAG).
export type SkillIcon = { kind: 'brand'; path: string } | { kind: 'generic'; path: string }

export type Skill = { name: string; icon: SkillIcon }

const brand = (icon: { path: string }): SkillIcon => ({ kind: 'brand', path: icon.path })

const generic = {
  // Two opposing arrows: request and response.
  api: { kind: 'generic', path: 'M4 8h13l-3-3M20 16H7l3 3' },
  // Database cylinder.
  database: {
    kind: 'generic',
    path: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  },
  // Accessibility figure.
  accessibility: {
    kind: 'generic',
    path: 'M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 8l7 1.5L19 8M12 9.5V14m0 0-3 7m3-7 3 7',
  },
} satisfies Record<string, SkillIcon>

export const skills: Skill[] = [
  { name: 'React', icon: brand(siReact) },
  { name: 'Next.js', icon: brand(siNextdotjs) },
  { name: 'Redux', icon: brand(siRedux) },
  { name: 'Tailwind CSS', icon: brand(siTailwindcss) },
  { name: 'Bootstrap', icon: brand(siBootstrap) },
  { name: 'TypeScript', icon: brand(siTypescript) },
  { name: 'JavaScript', icon: brand(siJavascript) },
  { name: 'HTML', icon: brand(siHtml5) },
  { name: 'CSS', icon: brand(siCss) },
  { name: 'Node.js', icon: brand(siNodedotjs) },
  { name: 'Express', icon: brand(siExpress) },
  { name: 'REST APIs', icon: generic.api },
  { name: 'GraphQL', icon: brand(siGraphql) },
  { name: 'MongoDB', icon: brand(siMongodb) },
  { name: 'SQL', icon: generic.database },
  { name: 'Git', icon: brand(siGit) },
  { name: 'GitHub', icon: brand(siGithub) },
  { name: 'Vite', icon: brand(siVite) },
  { name: 'Webpack', icon: brand(siWebpack) },
  { name: 'npm', icon: brand(siNpm) },
  { name: 'Figma', icon: brand(siFigma) },
  { name: 'WCAG', icon: generic.accessibility },
]
