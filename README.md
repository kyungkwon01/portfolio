# Kyung Kwon's Portfolio

My personal site, featuring my projects, skills, and a way to get in touch. I'm a front-end developer focused on React, TypeScript, and accessible interfaces.

**Live site:** https://kyungkwon01.github.io/portfolio/

## Features

- **Light and dark themes:** follows the system setting until a visitor picks a theme, then remembers it. The theme is set before the first paint, so the page never flashes the wrong colors.
- **Draggable project carousel:** drag with a mouse or swipe on touch screens, with cards that glide into place.
- **Typing name animation:** skipped for visitors who prefer reduced motion.
- **Contact form:** sends messages through FormSubmit, so the site doesn't need its own backend.
- **Responsive layout:** includes mobile navigation.

## Built with

- React
- TypeScript
- Vite
- Tailwind CSS
- Simple Icons

## Add a project

Add an entry to [`src/data/projects.ts`](src/data/projects.ts). To include a thumbnail, put a 16:10 image in `src/assets/projects` and import it there.

## Run it locally

```bash
npm install
npm run dev
```

## Lint and build

```bash
npm run lint
npm run build
```

## Deploy

Every push to `main` runs the linter, builds the site, and deploys it to GitHub Pages through [GitHub Actions](.github/workflows/deploy.yml).
