export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  repo?: string
}

// Add a project by adding an entry here. Replace these placeholders with your own work.
export const projects: Project[] = [
  {
    title: 'Project one',
    description: 'One or two sentences on what it does and what you built.',
    tags: ['React', 'TypeScript'],
    link: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Project two',
    description: 'What problem it solves and the interesting part of how.',
    tags: ['Node.js'],
  },
  {
    title: 'Project three',
    description: 'A short, specific summary beats a long, vague one.',
    tags: ['Python'],
  },
]
