# AGENTS.md

Personal portfolio site. React 19 + Vite, plain CSS (no Tailwind, no CSS-in-JS), no TypeScript.

## Commands

```bash
npm run dev      # vite dev server
npm run build    # vite build -> dist/
npm run preview  # serve the production build
```

There is no test suite, linter, or formatter configured. `npm run build` is the
only automated check — treat a clean build as the definition of done.

## Layout

```
index.html            # single entry, fonts loaded here
src/
  main.jsx            # createRoot + StrictMode
  App.jsx             # section order; wires useReveal/useBackgrounds/AOS
  index.css           # design tokens (:root), reset, shared layout primitives
  data/               # all content as plain JS exports — site, skills, projects, journey, contact, stats
  hooks/              # useReveal, useTypewriter, useIsMobile, usePrefersReducedMotion
  lib/                # aos-setup.js, gsap-setup.js — third-party init/refresh helpers
  sections/           # <Name>.jsx + <name>.css per section
  components/
    ui/               # TopNav, BottomNav, Footer, Icons, TerminalCard, ChromeButton, PlanetIcons
    effects/          # Aurora, Starfield, MagicBento, BorderGlow, ShinyText, ParticleText
public/img/           # static assets
legacy/               # old non-Vite version, kept for reference — do not edit
```

## Conventions

- **Named exports only.** No default exports except `App` and the Vite entry.
- **One CSS file per component**, imported from the component (`import './projects.css'`).
  Class names are kebab-case, unprefixed, and BEM-ish where nesting matters
  (`project-card`, `project-card__title`); BEM `__` is used sparingly.
- **No hardcoded colors, radii, or fonts in new rules** — extend the tokens in
  `src/index.css` (`:root`) or use the existing `--accent` / `--accent-2` vars so
  the accent stays switchable in one place.
- **Assets** resolve through `import.meta.env.BASE_URL` (see `ASSET` in
  `Projects.jsx`); `vite.config.js` sets `base: './'` for portable builds.
- **Animation**: AOS for scroll reveals (`data-aos` + `refreshAos()` after any
  list re-render), GSAP for orchestrated sequences, `useReveal` for the
  `.reveal` → `.visible` IntersectionObserver pattern.
- **Reduced motion is mandatory.** Gate any new animation behind
  `usePrefersReducedMotion()`; `initAos(reduced)` already does this globally.
- **Accessibility**: `aria-label` on icon-only controls, `aria-hidden` on
  decorative nodes, `rel="noopener noreferrer"` on `target="_blank"` links,
  `loading="lazy"` on below-the-fold images.

## Content edits

Never hardcode copy into a section component. Add or edit entries in
`src/data/*.js` instead.

## opencode

Project config lives in `.opencode/opencode.json`; skills in
`.opencode/skills/`. Model/provider credentials come from the global config at
`~/.config/opencode/opencode.jsonc` and must never be copied into this repo.