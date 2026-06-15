# Tasks: Cooltra Ride Academy

> Pla d'implementació derivat de `tasks/prd-cooltra-ride-academy.md`.
> Audiència: desenvolupador junior.

## Relevant Files

- `package.json` - Dependències i scripts (Next.js, next-intl, jest).
- `next.config.js` - Configuració de Next.js i i18n routing.
- `tsconfig.json` - Configuració de TypeScript i path aliases.
- `app/[locale]/layout.tsx` - Layout arrel amb provider d'i18n i estils globals.
- `app/[locale]/page.tsx` - Landing page (`/`).
- `app/[locale]/settings/page.tsx` - Pantalla de preferències (país + idioma).
- `app/[locale]/overview/page.tsx` - Dashboard del curs amb les targetes de mòdul.
- `app/[locale]/course/core/[module]/learn/[step]/page.tsx` - Portada i lliçons del mòdul.
- `app/[locale]/course/core/[module]/quiz/page.tsx` - Intro del quiz.
- `app/[locale]/course/core/[module]/quiz/[step]/page.tsx` - Preguntes del quiz.
- `app/[locale]/course/core/[module]/completed/page.tsx` - Pantalla de mòdul completat.
- `app/[locale]/error.tsx` - Pàgina d'error.
- `lib/content/index.ts` - Interfície d'accés a contingut (`getCourse`, `getModule`) — capa migrable.
- `lib/content/index.test.ts` - Tests de la capa de contingut.
- `lib/content/modules/*.ts` - Dades hardcodejades dels 4 mòduls (learn + quiz).
- `lib/content/countryRules.ts` - Variants de normes de trànsit per país.
- `lib/progress/useProgress.ts` - Hook de progrés sobre localStorage.
- `lib/progress/useProgress.test.ts` - Tests del hook de progrés.
- `lib/i18n/config.ts` - Configuració de locales (ES/IT/NL/EN/FR/CA/PT) i fallback.
- `messages/{es,it,nl,en,fr,ca,pt}.json` - Strings d'UI per idioma.
- `components/TopBar.tsx` - Barra superior amb back/progrés/close.
- `components/CTAButton.tsx` - Botó pill full-width.
- `components/ProgressBadge.tsx` - Comptador "N / Total".
- `components/ModuleCard.tsx` - Targeta de mòdul a l'overview.
- `components/LessonCard.tsx` - Targeta de micro-lliçó.
- `components/QuizQuestion.tsx` - Pregunta amb opcions, comprovació i feedback.
- `components/QuizQuestion.test.tsx` - Tests de la lògica de quiz.
- `components/RewardBadge.tsx` - Badge visual de recompensa.
- `styles/theme.ts` - Tokens de marca Cooltra (paleta, tipografia, mides).
- `public/icons/*`, `public/illustrations/*` - Actius SVG/imatges.

### Notes

- Unit tests al costat dels fitxers que proven (p. ex. `QuizQuestion.tsx` i `QuizQuestion.test.tsx`).
- Executar tests amb `npx jest [ruta/opcional]`.

## Instructions for Completing Tasks

**IMPORTANT:** En completar cada (sub)tasca, marca-la canviant `- [ ]` per `- [x]` en aquest fitxer. Actualitza el fitxer després de cada sub-tasca, no només en acabar la tasca pare.

## Tasks

- [ ] 0.0 Crear la branca de feature
  - [ ] 0.1 Crear i fer checkout d'una branca per a la feature (p. ex. `git checkout -b feature/cooltra-ride-academy`)
  - [ ] 0.2 Pujar la branca al remot amb `git push -u origin feature/cooltra-ride-academy`

- [ ] 1.0 Bastida del projecte i fonaments tècnics
  - [ ] 1.1 Inicialitzar projecte Next.js (App Router) amb TypeScript
  - [ ] 1.2 Configurar ESLint, Prettier i Jest amb React Testing Library
  - [ ] 1.3 Definir l'estructura de carpetes (`app/`, `lib/`, `components/`, `messages/`, `styles/`, `public/`)
  - [ ] 1.4 Crear `styles/theme.ts` amb els tokens de marca Cooltra (paleta, tipografia, mides de botó/contingut) segons PRD §7
  - [ ] 1.5 Establir el layout base mobile-first (ample màx ~800px, fons de ciutat, àrea de contingut crema)
  - [ ] 1.6 Configurar les rutes localitzades `app/[locale]/...` segons FR 1

- [ ] 2.0 Capa de contingut i internacionalització
  - [ ] 2.1 Configurar `next-intl` amb els 7 locales (ES/IT/NL/EN/FR/CA/PT) i fallback a EN (`lib/i18n/config.ts`)
  - [ ] 2.2 Crear els fitxers `messages/{locale}.json` amb els strings d'UI (navegació, botons, estats)
  - [ ] 2.3 Definir el model de dades del curs/mòdul (tipus TS: mòdul, lliçó, pregunta, opció, explicació)
  - [ ] 2.4 Implementar la interfície d'accés `lib/content/index.ts` (`getCourse`, `getModule(slug)`) — font intercanviable (FR 27–29)
  - [ ] 2.5 Hardcodejar el contingut del mòdul 1 `ebike-basics` (learn + quiz) a `lib/content/modules/`
  - [ ] 2.6 Hardcodejar el contingut del mòdul 2 `riding-safely`
  - [ ] 2.7 Hardcodejar el contingut del mòdul 3 `traffic-rules` amb variants de normes per país (`lib/content/countryRules.ts`)
  - [ ] 2.8 Hardcodejar el contingut del mòdul 4 `real-world-scenarios`
  - [ ] 2.9 Escriure tests de la capa de contingut (`lib/content/index.test.ts`)

- [ ] 3.0 Biblioteca de components d'UI reutilitzables
  - [ ] 3.1 `CTAButton` — botó pill full-width amb variants (primari/disabled)
  - [ ] 3.2 `ProgressBadge` — comptador "N / Total"
  - [ ] 3.3 `TopBar` — fletxa enrere + progrés + close (X) que torna a `/overview`
  - [ ] 3.4 `ModuleCard` — títol, subtítol, estat (completat/en progrés/no començat) i chevron
  - [ ] 3.5 `LessonCard` — imatge hero responsiva, títol, paràgrafs i llistes
  - [ ] 3.6 `QuizQuestion` — opcions, botó "Comprova", feedback correcte/incorrecte i explicació (FR 20–22)
  - [ ] 3.7 `RewardBadge` — badge visual de recompensa
  - [ ] 3.8 Afegir icones i il·lustracions SVG a `public/` (completed, in-progress, chevron, learn, quiz, rewards…)
  - [ ] 3.9 Escriure tests de la lògica de `QuizQuestion` (`QuizQuestion.test.tsx`)

- [ ] 4.0 Fluxos de pàgina i navegació
  - [ ] 4.1 Landing `/` — hero rotatori (3 propostes), còpia Cooltra, CTA "Comença" → `/settings` (FR 6–9)
  - [ ] 4.2 Settings `/settings` — selectors de país i idioma, persistència, CTA → `/overview` (FR 10–12)
  - [ ] 4.3 Overview `/overview` — grup "Core course", progrés "X de 4", recompensa visual i 4 `ModuleCard` (FR 13–15)
  - [ ] 4.4 Learn pas 0 — portada de mòdul (imatge, títol, descripció, CTA "Comencem") (FR 16)
  - [ ] 4.5 Learn passos N — render de lliçons amb navegació anterior/següent i pas a la URL (FR 17–18)
  - [ ] 4.6 Quiz intro `/quiz` — il·lustració/animació + CTA → primera pregunta (FR 19)
  - [ ] 4.7 Quiz preguntes `/quiz/:step` — render de `QuizQuestion`, avanç i salt a `/completed` en acabar (FR 23)
  - [ ] 4.8 Completion `/completed` — "Ben fet!" + CTA "Torna als cursos" → `/overview` (FR 24)
  - [ ] 4.9 Pàgina d'error — "Vaja!" + CTA "Torna a l'inici" → `/` (FR 32)

- [ ] 5.0 Progrés de sessió i recompenses visuals
  - [ ] 5.1 Implementar `useProgress` sobre localStorage (mòduls completats, últim pas) (FR 30)
  - [ ] 5.2 Derivar l'estat de cada `ModuleCard` a l'overview a partir del progrés (FR 15)
  - [ ] 5.3 Marcar mòdul com a completat en arribar a `/completed` (FR 25)
  - [ ] 5.4 Mostrar progrés global "X de 4" i `RewardBadge` només visual, sense cap crida externa (FR 13, 31)
  - [ ] 5.5 Escriure tests de `useProgress` (`useProgress.test.ts`)

- [ ] 6.0 Polit, accessibilitat, responsivitat i QA
  - [ ] 6.1 Verificar el fallback d'idioma i el canvi de locale a totes les pantalles
  - [ ] 6.2 Imatges responsives i estats de càrrega (FR 33)
  - [ ] 6.3 Revisió d'accessibilitat (targets tàctils, contrast, focus, etiquetes ARIA)
  - [ ] 6.4 Comprovar Lighthouse mobile (Performance ≥ 90, Accessibility ≥ 90) (Success Metric 4)
  - [ ] 6.5 Recórrer els 4 mòduls de principi a fi en cada idioma i corregir errors de navegació
  - [ ] 6.6 Executar tota la suite de tests (`npx jest`) i deixar-la verda
