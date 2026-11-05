import swatchproofImage from '../assets/projects/swatchproof.png'

export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  repo?: string
  // A 16:10 screenshot shown at the top of the card.
  image?: { src: string; alt: string }
}

// Add a project by adding an entry here.
export const projects: Project[] = [
  {
    title: 'Swatchproof',
    description:
      'Turns one brand color into an accessible palette, with WCAG contrast checks and color blindness simulation. Uses custom OKLCH color math and runs entirely in the browser.',
    tags: ['React', 'TypeScript', 'Accessibility'],
    link: 'https://kyungkwon01.github.io/swatchproof/',
    repo: 'https://github.com/kyungkwon01/swatchproof',
    image: {
      src: swatchproofImage,
      alt: 'Swatchproof showing a rose color palette and light and dark interface previews',
    },
  },
]
