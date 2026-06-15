# Cooltra Ride Academy

Mobile-first web app that teaches riders how to use a Cooltra eBike safely, with
short learn modules and quizzes localised per country/language. Inspired by Voi's
RideSafe Academy (full analysis in `context/saferide.md`).

## Stack

- **Next.js 14** (App Router) + **TypeScript**, static export friendly
- **Custom lightweight i18n** (`[locale]` segment + JSON dictionaries, fallback to EN)
- **Hardcoded content layer** behind a swappable interface (`lib/content`) — ready to migrate to a CMS
- **Jest** + React Testing Library

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /es)
npm run build    # production build (static/SSG)
npm test         # unit tests
```

## Routes

```
/                                                  → redirect to default locale
/[locale]                                          → landing
/[locale]/settings                                 → country + language
/[locale]/overview                                 → course dashboard
/[locale]/course/core/[module]/learn/[step]        → intro (0) + lessons
/[locale]/course/core/[module]/quiz                → quiz intro
/[locale]/course/core/[module]/quiz/[step]         → quiz questions
/[locale]/course/core/[module]/completed           → module completion
```

Locales: `es` (default), `en`, `it`, `nl`, `fr`, `ca`, `pt`.
Modules: `ebike-basics`, `riding-safely`, `traffic-rules` (localised by country), `real-world-scenarios`.

## Key directories

- `app/` — pages and layouts
- `components/` — reusable UI (CTAButton, TopBar, ModuleCard, QuizQuestion, …)
- `lib/content/` — content model + access layer (`getCourse`, `getModule`)
- `lib/i18n/` — locale config, dictionary loader, client provider
- `lib/progress/` — `localStorage` progress (pure logic in `storage.ts`)
- `messages/` — UI strings per locale
- `styles/` — theme tokens and global CSS

## Notes

- **Brand colours** live as CSS variables in `styles/globals.css` / `styles/theme.ts`.
  cooltra.com blocks scraping, so the exact hex values are best-guess Cooltra green —
  update them once the brand guidelines are available.
- **Rewards are visual only** in this release; no Cooltra app integration.
- Lesson/quiz content is complete in **EN + ES**; other locales fall back to EN
  pending translation and legal validation of country rules.
