# emmanueldoji.xyz

Personal portfolio of Emmanuel Doji — senior full-stack and Web3 engineer.

Live at https://emmanueldoji.xyz.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript 5
- Tailwind CSS v4 (CSS-based `@theme` config)
- Framer Motion (component animation)
- Lenis (smooth scroll)
- next-mdx-remote (MDX case studies, server-rendered)
- next/og (dynamic OG images on the edge)

Black/white only. Design language inspired by sondaven.com — serif display type, loading
counter, magnetic CTAs, line reveals, custom cursor.

## Quickstart

```bash
nvm use 20      # any Node ≥ 20.9
npm install
cp .env.example .env.local
npm run dev     # → http://localhost:3000
```

## Routes

| Path | What it is |
| --- | --- |
| `/` | Single-page portfolio (Hero, About, Projects, Skills, Experience, Open Source, Contact) |
| `/case-studies` | Index of MDX case studies |
| `/case-studies/[slug]` | Individual case study (statically generated from `content/case-studies/*.mdx`) |
| `/api/og` | Edge route that renders the OG image (`?title=`, `?subtitle=`) |
| `/sitemap.xml`, `/robots.txt` | Generated from `app/sitemap.ts` and `app/robots.ts` |

## Data is configuration

All content the portfolio renders is in plain TypeScript or MDX — no CMS dependency.

```
lib/data/projects.ts        Project cards on /
lib/data/skills.ts          Skill groups + items
lib/data/experience.ts      Timeline entries
lib/data/socials.ts         Email / phone / GitHub / LinkedIn / Twitter
content/case-studies/*.mdx  Each MDX file is one case study; frontmatter drives metadata
```

To add a case study, drop a new `.mdx` file in `content/case-studies/`. It appears on
`/case-studies` and at `/case-studies/<slug>` immediately. Frontmatter fields:

```yaml
title: string
project: string
year: string
role: string
stack: string[]
github?: string
demo?: string
problem: string
outcome: string
metrics?: { label: string; value: string }[]
```

## Scripts

```
npm run dev         next dev
npm run build       next build (run before deploying)
npm run start       next start (serve a built app)
npm run lint        next lint
npm run typecheck   tsc --noEmit
```

## Replace before deploy

1. `public/resume.pdf` — drop your real PDF here (the placeholder file is .pdf.placeholder)
2. `lib/data/socials.ts` — confirm GitHub / LinkedIn / Twitter URLs
3. `lib/data/projects.ts`, `lib/data/experience.ts` — sanity check copy
4. `content/case-studies/*.mdx` — verify metrics + repo URLs

## Deploy

See [DEPLOY.md](./DEPLOY.md) for the Vercel + emmanueldoji.xyz setup.
