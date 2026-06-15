# PRD: Cooltra Ride Academy

> Plataforma web d'educació en seguretat per a riders d'eBikes de Cooltra, inspirada en RideSafe Academy de Voi (anàlisi completa a `context/saferide.md`).

**Estat:** Draft v1 · **Data:** 2026-06-15 · **Autor:** oriol@cooltra.com (via dev-tech-lead)

---

## 1. Introduction / Overview

Cooltra vol una web educativa, mobile-first, que ensenyi als usuaris a fer servir i conduir les seves **eBikes** de manera segura, replicant l'experiència de [RideSafe Academy de Voi](https://ridesafe.voi.com) però amb marca, contingut i to de Cooltra.

La plataforma ofereix **micro-cursos** dividits en mòduls. Cada mòdul combina lliçons curtes paginades (*learn*) i un *quiz* de resposta múltiple amb feedback immediat. El contingut s'adapta per país/idioma. No requereix login: el progrés es guarda a la sessió del navegador.

**Problema que resol:** els riders sovint comencen a conduir sense conèixer ni el funcionament de l'eBike ni les normes de trànsit locals, cosa que augmenta accidents, mal aparcament i sancions. Una formació breu i atractiva redueix aquests riscos i millora l'experiència de marca.

**Objectiu d'aquest lliurament:** publicar la plataforma completa amb els **4 mòduls** de contingut, navegable en **7 idiomes**, amb recompenses mostrades **només visualment** (sense integració amb l'app de Cooltra en aquesta fase).

---

## 2. Goals

1. Entregar una web mobile-first amb els **4 mòduls complets** (learn + quiz) descrits a la secció 5.
2. Suportar **7 idiomes**: castellà (ES), italià (IT), neerlandès (NL), anglès (EN), francès (FR), català (CA) i portuguès (PT).
3. Permetre la **localització de normes de trànsit per país** mitjançant una pantalla de preferències (país + idioma).
4. Oferir una experiència de quiz amb **feedback immediat** (correcte/incorrecte + explicació).
5. Fer **seguiment del progrés sense login**, persistit a `sessionStorage`/`localStorage`.
6. Mostrar recompenses i progrés **de forma visual** (teaser "minuts gratis", "X de 4 mòduls"), sense atorgar res real.
7. Estructurar el contingut en una **capa de dades migrable** a un CMS headless en el futur, sense reescriure components.

---

## 3. User Stories

- **Com a** nou usuari de Cooltra, **vull** aprendre com funciona l'eBike abans del primer viatge, **per** sentir-me segur i evitar errors.
- **Com a** rider, **vull** conèixer les normes de trànsit del meu país, **per** no rebre sancions ni posar-me en perill.
- **Com a** usuari que parla la meva llengua, **vull** veure el contingut en el meu idioma, **per** entendre-ho tot bé.
- **Com a** usuari mòbil, **vull** navegar amb passos curts i botons grans, **per** completar-ho còmodament al telèfon.
- **Com a** usuari curiós, **vull** fer un quiz i veure si he encertat amb una explicació, **per** consolidar el que he après.
- **Com a** usuari motivat, **vull** veure el meu progrés i la recompensa que m'espera, **per** voler acabar tot el curs.

---

## 4. Functional Requirements

### 4.1 Estructura i navegació
1. El sistema ha d'oferir les rutes: `/`, `/settings`, `/overview`, `/course/core/:moduleSlug/learn/:step`, `/course/core/:moduleSlug/quiz`, `/course/core/:moduleSlug/quiz/:step`, `/course/core/:moduleSlug/completed`, i una pàgina d'error.
2. La navegació entre passos ha de ser **lineal**: cada pantalla té un CTA "Següent"/"Next" i una fletxa enrere.
3. Cada pantalla de pas ha de mostrar un **comptador de progrés** "N / Total" a la part superior.
4. El botó de tancar (X) ha de tornar sempre a `/overview`.
5. El sistema **no** ha de requerir cap login ni compte.

### 4.2 Landing (`/`)
6. Hero animat que rota entre 3 propostes ("Aprèn", "Posa't a prova", "Guanya recompenses") amb il·lustració.
7. Còpia de benvinguda adaptada a Cooltra eBikes.
8. CTA principal "Comença" → `/settings`.
9. Fons a pantalla completa amb foto de ciutat (configurable per mercat).

### 4.3 Preferències (`/settings`)
10. Selector de **país** i selector d'**idioma** (els 7 idiomes del Goal 2).
11. La selecció ha de persistir i condicionar el contingut localitzat.
12. CTA "Continua" → `/overview`.

### 4.4 Overview / Dashboard (`/overview`)
13. Mostrar el grup "Core course" amb indicador de progrés ("X de 4"), descripció i **badge de recompensa visual** (p. ex. "Recompensa: 30 minuts gratis").
14. Llistar els **4 mòduls** com a targetes amb títol, subtítol opcional, estat (Completat / En progrés / No començat) i chevron.
15. L'estat de cada mòdul s'ha de derivar del progrés guardat a la sessió.

### 4.5 Mòduls — learn (`/course/core/:module/learn/:step`)
16. Pas 0 = portada del mòdul: imatge hero, títol, descripció i CTA "Comencem".
17. Passos següents = targetes de micro-lliçó: imatge opcional, títol, paràgrafs i llistes.
18. Navegació anterior/següent amb número de pas explícit a la URL.

### 4.6 Quiz (`/course/core/:module/quiz` i `/quiz/:step`)
19. Pantalla intro del quiz amb animació/il·lustració i CTA "Comencem" → primera pregunta.
20. Cada pregunta mostra: comptador, imatge de context opcional, enunciat i 2–3 opcions de resposta (botons grans).
21. Botó "Comprova": en clicar, marca la resposta seleccionada com a **correcta (verd)** o **incorrecta (vermell)**, mostra etiqueta de resultat i un **paràgraf d'explicació**.
22. Després de comprovar, el botó passa a "Següent" per continuar.
23. En acabar les preguntes, navegar a `/completed`.

### 4.7 Completion (`/course/core/:module/completed`)
24. Pantalla "Ben fet!" amb còpia de felicitació i CTA "Torna als cursos" → `/overview`.
25. En completar un mòdul, marcar-lo com a **completat** al progrés de sessió.

### 4.8 Localització i contingut
26. Tots els textos d'UI han d'estar en un sistema d'**i18n** amb els 7 idiomes.
27. El **contingut dels mòduls** (lliçons, preguntes, respostes, explicacions, imatges) s'ha de definir en una **capa de dades** estructurada (p. ex. fitxers JSON/TS o MDX al repo).
28. La capa de dades s'ha de consumir mitjançant una **interfície d'accés a contingut** (p. ex. `getCourse()`, `getModule(slug)`) perquè la font es pugui canviar a un CMS sense tocar els components.
29. Les normes de trànsit dependents de país s'han de poder definir com a **variants per país** dins de la capa de contingut.

### 4.9 Progrés i recompenses
30. El progrés (mòduls completats, últim pas visitat) s'ha de guardar a `localStorage`/`sessionStorage` i restaurar en recarregar.
31. Les recompenses són **només visuals**: no hi ha cap crida a APIs externes ni atorgament real de minuts/descomptes.

### 4.10 Estats i errors
32. La pàgina d'error mostra "Vaja!", missatge i CTA "Torna a l'inici" → `/`.
33. Les imatges han de ser responsives (mobile-first) amb estats de càrrega adequats.

---

## 5. Contingut dels mòduls (Core course)

Basat en l'adaptació Cooltra de `context/saferide.md` (seccions 10–12). Slugs i contingut de referència:

1. **eBike Basics** (`ebike-basics`) — què és una eBike Cooltra, pedaleig assistit (màx 25 km/h), parts, com iniciar el lloguer, check pre-viatge, com frenar.
2. **Riding Safely** (`riding-safely`) — casc i protecció, dues mans al manillar, sense mòbil/auriculars, adaptació de velocitat, aparcament correcte, zones Cooltra, conducció amb pluja/hivern.
3. **Traffic Rules** (`traffic-rules`, localitzat) — qui pot conduir (edat/llicència per país), on conduir, un sol rider, conducció sota efectes, senyals de trànsit, límits de velocitat.
4. **Real-World Scenarios** (`real-world-scenarios`) — posicionament al carril, quan senyalitzar, avançaments, prioritat a interseccions, passos de vianants (baixar i caminar), rotondes, parades de bus.

El banc de preguntes de referència és el de `context/saferide.md` §12 (10 preguntes), a ampliar per mòdul.

---

## 6. Non-Goals (Out of Scope)

1. **Cap integració real** amb l'app de Cooltra ni atorgament de minuts/descomptes (només visual).
2. **Cap CMS headless** en aquesta fase (contingut hardcodejat, però amb capa migrable).
3. **Cap autenticació**, comptes d'usuari ni backend de persistència (només sessió de navegador).
4. **Cap analítica avançada** ni dashboards d'admin (es pot afegir tracking bàsic més endavant).
5. **No** s'inclou e-scooter: focus exclusiu en eBike.
6. **No** s'inclou panell d'edició de contingut per a no-tècnics.

---

## 7. Design Considerations

- **Mobile-first**, ample màxim de contingut ~800px, viewport objectiu 375–768px.
- Reaprofitar el **sistema visual** descrit a `context/saferide.md` §3, adaptat a marca Cooltra: paleta, tipografia, botons pill full-width (alçada ~64px), targetes blanques sobre fons crema.
- **Substitucions de marca** segons §10 de `context/saferide.md` (logo Cooltra, color CTA de marca, fotos de ciutats Cooltra).
- Icones i il·lustracions flat SVG (completed, in-progress, chevron, learn, quiz, rewards, etc.).
- Components reutilitzables: `ProgressBar`, `LessonCard`, `QuizQuestion`, `CTAButton`, `ModuleCard`, `TopBar`.
- Cal definir els **actius de marca finals** (logo, paleta hex, fonts amb llicència, fotos de ciutats) — vegeu Open Questions.

---

## 8. Technical Considerations

- **Framework recomanat:** Next.js (App Router) amb SSG per rendiment i SEO; React SPA com a alternativa.
- **i18n:** solució de routing/locale (p. ex. `next-intl` o `next-i18next`) amb els 7 idiomes; idioma per defecte i fallback a EN.
- **Capa de contingut:** mòdul d'accés (`/lib/content`) que avui llegeix JSON/TS local i exposa una API estable; demà es pot connectar a Hygraph/Contentful/Sanity sense canviar components (FR 27–29).
- **Estat/progrés:** hook de client (p. ex. `useProgress`) sobre `localStorage`.
- **Estructura de rutes:** segons FR 1.
- **Sense backend** en aquesta fase; desplegament estàtic (p. ex. Vercel) a un subdomini tipus `academy.cooltra.com`.
- Mapatge país↔idioma configurable (els idiomes no impliquen 1:1 un país; CA i EN poden ser transversals).

---

## 9. Success Metrics

1. Els 4 mòduls són completables de principi a fi en els 7 idiomes sense errors de navegació.
2. ≥ 80% dels usuaris que inicien el mòdul 1 arriben a la pantalla de quiz (mesurable amb tracking bàsic posterior).
3. Taxa de finalització del curs complet mesurable a l'overview.
4. Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 90.
5. Canviar la font de contingut a un CMS no requereix modificar components d'UI (validació de la capa migrable).

---

## 10. Open Questions

1. **Mapatge país ↔ idioma:** quins països concrets s'ofereixen al selector i quin idioma per defecte té cadascun? (NL i CA suggereixen Països Baixos i mercats catalanoparlants — confirmar la llista de mercats Cooltra.)
2. **Actius de marca:** disposem de logo, paleta hex oficial, fonts amb llicència i fotos de ciutats de Cooltra, o cal crear/adquirir-los?
3. **Contingut localitzat de normes:** qui valida les normes de trànsit per país i en cada idioma (legal/compliance)?
4. **Imatges de lliçons i quizzes:** s'usen les de referència de Voi (no reutilitzables per drets) o cal produir-ne de pròpies?
5. **Recompensa mostrada:** quin valor visual mostrem ("30 minuts gratis"?) tot i no ser funcional encara?
6. **Tracking:** s'inclou analítica bàsica (events de start/complete) en aquest lliurament o queda per a la següent fase?
