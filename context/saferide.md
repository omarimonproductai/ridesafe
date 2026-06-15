# RideSafe Academy – Website Analysis & Cooltra eBike Academy Blueprint

> **Purpose:** Full analysis of [ridesafe.voi.com](https://ridesafe.voi.com) to serve as a reference for building an equivalent online safety education platform for **Cooltra eBikes**.

---

## 1. Overview & Concept

**RideSafe Academy** (by Voi Technology) is a lightweight, mobile-first web application that teaches e-scooter and e-bike safety through:
- Short, paginated **learn** modules (micro-lessons)
- Multiple-choice **quizzes** with immediate feedback
- Country/language-specific **traffic rule localization**
- **Gamified rewards** (free ride minutes) upon course completion

The platform is designed to be embedded in a rider's onboarding journey and accessed via browser on mobile devices.

---

## 2. Technology & Stack

| Aspect | Details |
|---|---|
| Framework | React (SPA, client-side routing) |
| Styling | Emotion CSS-in-JS (hashed class names e.g. `css-1murev`) |
| Fonts | **Sora** (body/UI), **alkaline** (H1 display) |
| Asset hosting | Google Cloud Storage (illustrations, icons) |
| Content/Media | GraphCMS / Hygraph (images via `graphassets.com`) |
| Routing | `/settings`, `/overview`, `/course/:courseId/:moduleId/learn/:step`, `/course/:courseId/:moduleId/quiz/:step`, `/course/:courseId/:moduleId/completed` |

---

## 3. Visual Design System

### Colour Palette
| Role | Value |
|---|---|
| Background (outer wrap) | City photo (e.g. `barcelona.jpg`) – fills viewport |
| Main content area bg | `rgb(250, 244, 236)` – warm off-white / cream |
| Card/panel bg | `rgb(255, 255, 255)` – pure white |
| Progress badge bg | `rgb(232, 228, 229)` – light grey |
| CTA Button (primary) bg | `rgb(0, 0, 0)` – black |
| CTA Button text | `rgb(255, 255, 255)` – white |
| Body text | `rgb(0, 0, 0)` – black |

### Typography
| Element | Font | Size | Weight |
|---|---|---|---|
| H1 (landing hero) | Sora | 32px | 600 |
| H1 (overview page) | alkaline | 62px | normal |
| H2 (module titles) | Sora | 18px | 600 |
| H3 (card headings) | Sora | 16px | 600 |
| Body paragraph | Sora | 15px | 400 |
| Button label | Sora | 18px | 400 |
| Progress counter | Sora | 15px | 400 |

### Layout
- **Max content width:** 800px (centered)
- **Content padding:** 16px 80px
- **CTA Button:** Full-width (640px), height 64px, border-radius 100px (pill shape), padding 16px 24px
- **Layout pattern:** flex-column, space-between (content area vs. button zone)

### Iconography
Flat SVG icons stored in `/icons/`:
- `completed.svg` – green checkmark for completed modules
- `in-progress.svg` – indicator for modules in progress
- `chevron.svg` – right arrow for list items
- `close-black.svg` – X to go back to overview
- `arrow-black.svg` – back arrow navigation
- `check-black.svg` – checkmark for selections

### Illustrations
Flat SVG illustrations for landing page cards:
- `learn.svg` – represents the learn step
- `quiz.svg` – represents the quiz step
- `rewards.svg` – represents earning rewards

---

## 4. URL Structure & Routing

```
/                                                   → Landing / Hero page
/settings                                           → Preferences (country + language selection)
/overview                                           → Course dashboard
/course/core/:moduleSlug/learn/0                    → Module intro slide
/course/core/:moduleSlug/learn/:n                   → Lesson slide N
/course/core/:moduleSlug/quiz                       → Quiz intro screen
/course/core/:moduleSlug/quiz/:n                    → Quiz question N
/course/core/:moduleSlug/completed                  → Module completion screen
```

Module slugs in "Core course":
- `the-basics`
- `safety-tips`
- `traffic-rules`
- `real-life-riding-scenarios`

---

## 5. Page-by-Page Breakdown

### 5.1 Landing Page (`/`)

**Concept:** Animated hero that cycles through 3 propositions with an illustration each.

**Content (rotating H1s):**
1. "Learn about road safety." + `learn.svg` illustration
2. "Test your knowledge" + `quiz.svg` illustration
3. "Earn rewards as you learn" + `rewards.svg` illustration

**Body copy:**
> "Welcome to RideSafe Academy! This is an online learning platform, providing micro courses that teach you essential knowledge and helpful tips on local e-scooter and e-bike traffic rules and rider safety – all in a fun and engaging way. Let's get it right!"

**CTA:** Black pill button → "Get started" → links to `/settings`

**Footer:** "Created by [Voi logo]"

**Background:** Full-bleed city photo behind the content card.

---

### 5.2 Preferences / Settings (`/settings`)

**Concept:** Localisation screen before the course begins.

**Headline:** "Before we get started…"

**Sub-headline:** "Traffic rules and regulations differ between countries. Enter your location, so that we present the ones relevant for you."

**Form:**
- Country dropdown (Austria, Belgium, Denmark, Finland, France, Germany, Italy, Norway, Spain, Sweden, Switzerland, UK)
- Language dropdown (Spanish, English)

**CTA:** "Continue" → navigates to `/overview`

**Illustration:** `preferences.svg`

---

### 5.3 Course Overview / Dashboard (`/overview`)

**Concept:** Shows all modules as cards under the "Core course" group.

**Welcome copy:**
- H1: "Welcome!"
- P: "Select a module to start your journey."

**Course group card** ("Core course"):
- Progress indicator: "2 out of 4"
- Description: "The core course is divided into four modules. Finish them all to get a free ride at the end!"
- Reward badge: "Reward: 30 free minutes"

**Module list (4 cards):**
| Module | Subtitle | Status | URL |
|---|---|---|---|
| The basics | (none) | Completed | `/course/core/the-basics/learn/0` |
| Safety tips | "Our best tips on how to ride and park safely." | In progress | `/course/core/safety-tips/quiz` |
| Traffic rules | "Learn the law and what applies to e-scooter or e-bike riders." | In progress | `/course/core/traffic-rules/quiz/1` |
| Real-life riding scenarios | (none) | Completed | `/course/core/real-life-riding-scenarios/learn/0` |

**Status icons:** `completed.svg` / `in-progress.svg` + `chevron.svg`

---

### 5.4 Module Intro Slide (`/course/core/:module/learn/0`)

**Concept:** Cover/intro card for each module before content begins.

**Structure:**
- Progress indicator (e.g. "1 / 15")
- Hero image (full-width from GraphCMS)
- H2: Module title
- P: Module description
- CTA: "Let's start" pill button

**Example (The Basics):**
- Title: "The basics"
- Description: "Never ridden an e-scooter or e-bike? Do you know how to accelerate and brake? Want to know which micromobility option is for you? The course teaches you the basics about different micromobility vehicles."

---

### 5.5 Lesson Slides (`/course/core/:module/learn/:n`)

**Concept:** Single-topic micro-lesson card with text and optional image.

**Structure:**
- Top bar: Back arrow (to overview) + progress counter "N / Total" + close (X)
- Hero image (responsive, from GraphCMS)
- H2: Lesson title
- Content: paragraphs, bullet lists (rendered as `<p>` or `<b>` inline items)
- Bottom: "Next" pill CTA button + optional back arrow

**Navigation:** Linear, previous/next links with explicit step numbers in URL.

---

### 5.6 Quiz Intro (`/course/core/:module/quiz`)

**Concept:** Transition screen announcing the quiz.

**Content:**
- Progress indicator
- Lottie animation (animated quiz illustration)
- H2: "Quiz time!"
- CTA: "Let's start" → goes to `/quiz/0`

---

### 5.7 Quiz Questions (`/course/core/:module/quiz/:n`)

**Concept:** Multiple-choice question with image context, answer buttons, and a "Check" submit button.

**Structure:**
- Top bar: progress counter + close
- Hero image (often a contextual diagram or scene)
- H2: Question text
- 2–3 answer buttons (large, full-width button style)
- Bottom: Back arrow + "Check" CTA button

**Post-answer state (after "Check" is clicked):**
- Selected button highlighted (correct = green / incorrect = red)
- Result label: "Correct" or "Incorrect"
- Explanation paragraph appears below
- "Check" button changes to "Next" link

---

### 5.8 Module Completion (`/course/core/:module/completed`)

**Concept:** Congratulations screen after finishing a module.

**Content:**
- H2: "Well done!"
- Copy: "You've now completed this module. Hopefully, you'll benefit greatly from your acquired knowledge. Remember that you need to finish all modules of the course to complete the course."
- CTA: "Back to courses" → links to `/overview`

---

### 5.9 Error Page

**Content:**
- H2: "Oops!"
- P: "Hm, something went wrong. Try again in a moment!"
- Illustration: `error.svg`
- CTA: "Back to start" → links to `/`

---

## 6. Module Content Summary

### Module 1: The Basics (15 slides: 8 learn + quiz intro + quiz Qs)

| Slide | Title | Key Content |
|---|---|---|
| 1 | Intro | Module overview |
| 2 | E-scooters | How they work, app-based rental |
| 3 | Meet the Voi e-scooter | Throttle, brakes (levers front+back), indicators, kickstand |
| 4 | Bikes and e-bikes | Pedal power vs. electric assist, up to 25km/h |
| 5 | Meet the Voi e-bike | Safety check, pedal to activate, brakes, dashboard |
| 6 | How to start | Know rules, do safety check, push off, begin with caution |
| 7 | Tip for first-timers | Activate Reduced-speed Mode (15 km/h cap) in app |
| 8 | How to stop | Squeeze both levers, reaction distance (0.5–1s), braking distance |

**Quiz questions include:**
- Q: Where are the brakes located on a Voi scooter? → A: Both front and back wheels
- Q: What does [throttle button] control? → A: Acceleration

---

### Module 2: Safety Tips (15 slides: 9 learn + quiz intro + quiz Qs)

| Slide | Title | Key Content |
|---|---|---|
| 1 | Intro | Safety starts with you |
| 2 | Best tips | Steer with both hands, no phone, no headphones, wear helmet, follow rules |
| 3 | Be mindful of others | Impaired vision users, deafblind cane, considerate parking |
| 4 | Parking (intro) | Photo required at end of ride |
| 5 | Parking tips | Kickstand upright, don't block access, designated zones, local rules |
| 6 | Zones (intro) | Virtual zones shown in app |
| 7 | Voi Zones | No-Riding, Slow, No-Parking, Parking Zone, Parking Zone+ |
| 8 | Terrain and conditions | Gravel, cobbles, potholes, kerbs – keep both hands on handlebars |
| 9 | Riding in winter | Slow down, mind icy/wet surfaces, wear reflective gear |

**Quiz questions include:**
- Q: Why is it important to wear a helmet? → A: For all the reasons mentioned

---

### Module 3: Traffic Rules (16 slides: 8 learn + quiz intro + quiz Qs)

| Slide | Title | Key Content |
|---|---|---|
| 1 | Intro | Laws keep all road users safe |
| 2 | Who can ride? (Spain) | Min. 16 years old, no driving licence needed |
| 3 | Where to ride? (Spain) | Right side, bike lanes, no roads >50km/h, no pavement/pedestrian areas |
| 4 | How many riders? | 1 person only — tandem is dangerous and illegal |
| 5 | Riding under influence | Illegal, same limit as driving, risk of fines/licence loss |
| 6 | Traffic signs (intro) | Shapes/colours encode meaning |
| 7 | Traffic signs set 1 | Stop sign, no-entry, no bikes/e-scooters, bikes allowed |
| 8 | Traffic signs set 2 | Give way, priority over oncoming, school area warning |

**Quiz questions include:**
- Q: What does [red traffic light] mean? → A: Stop until green
- Q: If you see a stop sign and the street is empty, should you stop? → A: Yes, complete stop required

---

### Module 4: Real-Life Riding Scenarios (14 slides: 8 learn + quiz intro + quiz Qs)

| Slide | Title | Key Content |
|---|---|---|
| 1 | Intro | Awareness of surroundings |
| 2 | Lanes and placement | Marked/unmarked lanes, safe distance from parked cars |
| 3 | When to signal | Before turns, lane changes, overtaking, pulling over, roundabout exit |
| 4 | Overtaking | Pass on the left, signal, check opposite lane |
| 5 | Priority rules | Right-of-way explained |
| 6 | Right of way at intersections | Priority-to-the-right rule + exceptions |
| 7 | Pedestrian crossings | Pedestrians have priority; dismount and walk |
| 8 | Buses | Give way to buses pulling out from stops |

**Quiz questions include:**
- Q: How should you cross the road [car approaching]? → A: Slow down and make sure the car stops
- Q: Opposing rider in lane when overtaking? → A: Slow down and let them pass first

---

## 7. UX Patterns & Interaction Design

### Navigation Model
- **Linear progression:** Each screen has a single "Next" CTA and a back arrow
- **Global exit:** X button always links back to `/overview`
- **Progress indicator:** "N / Total" counter in top-left of every step screen
- **No account required:** Progress tracked via local state/session (no login wall)

### Quiz Interaction Flow
1. User selects one answer button → button gets selected visual state
2. "Check" button becomes active → user clicks
3. Immediate feedback: correct/incorrect state applied to button
4. Explanation text appears below the choices
5. "Next" link appears to proceed

### Gamification
- Progress visible on overview ("2 out of 4 modules")
- Reward teaser shown on overview card ("Reward: 30 free minutes")
- Module completion screen reinforces achievement
- Full course completion unlocks discount/free ride in the app

### Mobile-First Design
- Max width 800px, typically viewed at 375–768px viewport
- Responsive images via `<picture>` with multiple `srcset` breakpoints (375, 640, 768px)
- Pill buttons span full content width
- Large touch targets (64px height buttons)

---

## 8. Content Localisation Strategy

The platform supports **country-specific traffic rules** through:
- A settings screen at onboarding (country + language selection)
- Lesson content dynamically adjusting based on selected country
- The CMS (GraphCMS/Hygraph) likely stores content per country as variants

**Supported countries:** Austria, Belgium, Denmark, Finland, France, Germany, Italy, Norway, Spain, Sweden, Switzerland, UK

**Supported languages:** Spanish, English (others likely available per country)

---

## 9. Key Assets Reference

### Illustrations (SVG, hosted on GCS)
```
/illustrations/learn.svg
/illustrations/quiz.svg
/illustrations/rewards.svg
/illustrations/preferences.svg
/illustrations/barcelona.jpg   (hero background city photo)
/illustrations/error.svg
```

### Icons (SVG, hosted on GCS)
```
/icons/completed.svg
/icons/in-progress.svg
/icons/chevron.svg
/icons/close-black.svg
/icons/arrow-black.svg
/icons/check-black.svg
```

### Course Images
- Hosted on GraphCMS (graphassets.com)
- Responsive variants for 375px, 640px, 768px
- Used on: module intros, lesson slides, quiz questions

---

## 10. Cooltra eBike Academy – Adaptation Blueprint

### Brand Substitutions

| RideSafe (Voi) | Cooltra eBike Academy |
|---|---|
| "RideSafe Academy" | "Cooltra Ride Academy" (suggested) |
| Voi logo | Cooltra logo |
| "e-scooter or e-bike" | "eBike" (eBike-only focus) |
| Voi app features | Cooltra app features |
| Reduced-speed Mode | Cooltra equivalent setting |
| Voi Zones | Cooltra Zones |
| Barcelona city photo | Cooltra city photos (Madrid, Barcelona, Lisbon, Rome, Milan, etc.) |
| Black CTA button | Cooltra brand colour CTA |

### Suggested Course Modules (Cooltra eBike Focus)

#### Module 1: eBike Basics
- What is a Cooltra eBike?
- How pedal assist works (levels, max 25 km/h)
- Parts of the eBike (handlebars, brakes, gears, kickstand, battery, display)
- How to start a rental (app flow)
- Pre-ride safety check
- How to stop safely

#### Module 2: Riding Safely
- Helmet and protective gear
- Both hands on handlebars
- No phone, no earphones
- Speed adaptation
- Parking correctly (kickstand, photo, designated spots)
- Cooltra zone types (no-ride, slow, no-parking, parking+)
- Riding in rain/winter conditions

#### Module 3: Traffic Rules (Localised)
- Who can ride? (age, licence requirements per country)
- Where to ride (bike lanes, road, no pavements)
- One rider only
- Riding under the influence
- Key traffic signs
- Speed limits and road types

#### Module 4: Real-World Scenarios
- Lane positioning
- When and how to signal
- Overtaking safely
- Right of way at junctions
- Pedestrian crossings (dismount to cross)
- Roundabouts
- Bus stops and large vehicles

### Reward Mechanics

| Feature | Description |
|---|---|
| Course completion reward | Free minutes or discount on next rental |
| Module completion | Visual milestone + "Well done!" screen |
| Progress badge | "X out of 4 modules" on dashboard |
| Incentive display | Reward shown upfront on course card |

### Technical Recommendations

| Item | Recommendation |
|---|---|
| Framework | React or Next.js (SSG for performance) |
| CMS | Contentful / Hygraph / Sanity for localised content |
| Routing | `/overview`, `/course/:id/learn/:step`, `/course/:id/quiz/:step` |
| Analytics | Track module starts, quiz answers, completion rates |
| Auth | No login required; use session storage for progress |
| Embedding | Standalone subdomain e.g. `academy.cooltra.com` |
| Languages | Spanish, English, Italian, Portuguese (Cooltra markets) |
| Countries | Spain, Italy, Portugal, France, Germany (Cooltra markets) |

---

## 11. Sample Content – Module 1 Slide Deck (Cooltra eBike)

### Slide 0 – Module Intro
**Title:** eBike Basics  
**Body:** New to electric bikes? This module walks you through how a Cooltra eBike works, how to get started, and how to ride and stop safely.  
**CTA:** Let's start

### Slide 1 – What is an eBike?
**Title:** Your Cooltra eBike  
**Body:** An electric bike is a regular bicycle with an integrated electric motor that gives you a boost when you pedal. The motor assists your pedalling up to 25 km/h – perfect for getting around the city without breaking a sweat.

### Slide 2 – Pedal Assist
**Title:** How pedal assist works  
**Body:** Start pedalling and the motor activates automatically. The motor cuts out at 25 km/h so you are always in control. Use the handlebar display to switch between assist levels.

### Slide 3 – Brakes
**Title:** Stopping safely  
**Body:** Your Cooltra eBike has brake levers on both handlebars. Always squeeze both at the same time, gently and progressively. Allow extra stopping distance at higher speeds.

### Slide 4 – Pre-Ride Check
**Title:** Before every ride  
**Body:**
- Check that the brakes feel firm
- Confirm the battery has enough charge
- Adjust the saddle height to your comfort
- Look for any visible damage and report it in the app

### Slide 5 – Ending Your Ride
**Title:** Parking your eBike  
**Body:** Always end your ride in an authorised parking area. Use the kickstand to park upright. Take a photo in the app to confirm the bike is parked correctly. Never block ramps, doorways, or pedestrian paths.

---

## 12. Quiz Question Bank (Cooltra eBike)

| # | Question | Options | Correct Answer |
|---|---|---|---|
| 1 | At what speed does the electric motor stop assisting? | 15 km/h / 25 km/h / 35 km/h | 25 km/h |
| 2 | Where are the brake levers on a Cooltra eBike? | Front wheel only / Both handlebars / Rear wheel only | Both handlebars |
| 3 | What should you do before every ride? | Just start riding / Do a basic safety check / Check the weather app | Do a basic safety check |
| 4 | Can you ride two people on a Cooltra eBike? | Yes, if both hold on / No, one person only / Yes, if riding slowly | No, one person only |
| 5 | What does a red traffic light mean? | Stop until green / Slow down / Stop only if there is traffic | Stop until green |
| 6 | Where should you ride your eBike? | Pavement / Bike lane or road / Pedestrian zones | Bike lane or road |
| 7 | What is the minimum age to rent in Spain? | 14 / 16 / 18 | 16 |
| 8 | When overtaking, which side do you pass on (right-hand traffic)? | Right / Left / Either side | Left |
| 9 | You approach a pedestrian crossing with people waiting. What do you do? | Ride through quickly / Stop and give way | Stop and give way |
| 10 | Why is wearing a helmet recommended? | It's legally required everywhere / It reduces risk of head injury in accidents | It reduces risk of head injury |

---

## 13. Sitemap Summary

```
cooltra-ride-academy.com/
├── /                            (Landing page)
├── /settings                    (Country + language selection)
├── /overview                    (Course dashboard)
└── /course/
    └── core/
        ├── ebike-basics/
        │   ├── learn/0–N
        │   ├── quiz
        │   ├── quiz/0–N
        │   └── completed
        ├── riding-safely/
        │   ├── learn/0–N
        │   ├── quiz
        │   ├── quiz/0–N
        │   └── completed
        ├── traffic-rules/
        │   ├── learn/0–N
        │   ├── quiz
        │   ├── quiz/0–N
        │   └── completed
        └── real-world-scenarios/
            ├── learn/0–N
            ├── quiz
            ├── quiz/0–N
            └── completed
```

---

*Generated by analysis of ridesafe.voi.com on 2026-06-15 for Cooltra eBike Academy project.*