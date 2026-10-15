import { useState } from 'react'
import { IconGithub, IconLinkedin, IconMail } from '../components/ui/Icons'
import { DitherVeil } from '../components/effects/DitherVeil'
import { site, heroCta, socials } from '../data/site'
import { stats } from '../data/stats'
import { useIsMobile } from '../hooks/useIsMobile'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './hero.css'

const ASSET = (p) => import.meta.env.BASE_URL + p

// The screen blend on .hero-photo makes the ink colour the transparency key:
// only what survives lightening shows, so pure black drops out entirely. Any
// tint here would tint the backdrop rectangle as well.
const INK_COLOR = '#000000'

// gradpic.JPG has a dark blue studio backdrop, not a black one. At the vendor
// contrast that backdrop lands ~3% above the first dither step, which shows up
// as a rectangle of stray dots over the fixed background layer. 1.45 pushes the
// backdrop below the first step while leaving the subject's tones alone, so the
// portrait reads as light dots floating on the page.
const DITHER_CONTRAST = 1.45

// DitherVeil parses hex strings, so design tokens are read once at mount and
// normalised. Fallbacks mirror the :root values in index.css.
const tokenHex = (token, fallback) => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(token).trim()
  if (raw.startsWith('#')) return raw
  const parts = raw.match(/[\d.]+/g)
  if (!parts || parts.length < 3) return fallback
  return `#${parts.slice(0, 3).map((v) => Number(v).toString(16).padStart(2, '0')).join('')}`
}

// Both shaders are GLSL ES 3.00, so a WebGL2 context is mandatory — ogl would
// otherwise fall back to WebGL1 and the programs would fail to compile. The
// probe context is released immediately so it never counts against the
// browser's live-context limit.
const supportsWebGL2 = () => {
  try {
    const gl = document.createElement('canvas').getContext('webgl2')
    if (!gl) return false
    gl.getExtension('WEBGL_lose_context')?.loseContext()
    return true
  } catch {
    return false
  }
}

const SOCIAL_ICONS = {
  github: <IconGithub />,
  linkedin: <IconLinkedin />,
  email: <IconMail />,
}

function isExternal(href) {
  return href.startsWith('http')
}

export function Hero() {
  const { firstName, lastName, role, tagline, photo } = site
  const reduced = usePrefersReducedMotion()
  // Floyd-Steinberg diffusion runs on the CPU at cell resolution, and WebGL on
  // a phone is the scarce resource. 768px also covers tablets in portrait,
  // where there is no hover to reveal the portrait with.
  const mobile = useIsMobile(768)
  const [veil] = useState(() => ({
    webgl: supportsWebGL2(),
    accent: tokenHex('--accent', '#5b8cff'),
    paper: tokenHex('--text', '#e7e9ee'),
  }))

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-stage">
          <h1 className="hero-name">
            <span className="hero-name-first">{firstName}</span>
            <span className="hero-name-last">{lastName}</span>
          </h1>

          <figure className="hero-photo" role="img" aria-label={photo.alt}>
            {veil.webgl ? (
              <DitherVeil
                src={ASSET(photo.src)}
                fit="contain"
                pattern="floyd"
                palette="duotone"
                pixelSize={mobile ? 2 : 1}
                levels={2}
                inkColor={INK_COLOR}
                paperColor={veil.paper}
                contrast={DITHER_CONTRAST}
                revealRadius={70}
                softness={0.6}
                linger={reduced ? 0 : 1}
                rimColor={veil.accent}
                rim={0.28}
                wander={mobile && !reduced}
                clickBurst={!reduced}
              />
            ) : (
              <img
                className="hero-photo-fallback"
                src={ASSET(photo.src)}
                alt=""
                width={photo.width}
                height={photo.height}
                fetchPriority="high"
                decoding="async"
              />
            )}
          </figure>
        </div>

        <div className="hero-meta">
          <div className="hero-intro">
            <p className="hero-role">{role}</p>
            <p className="hero-tagline">{tagline}</p>
            <a href={heroCta.href} className="btn btn-outline hero-cta">
              {heroCta.label}
              <span className="arrow" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </a>
          </div>

          <ul className="hero-socials" aria-label="Social links">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  className="hero-social"
                  href={s.href}
                  rel={isExternal(s.href) ? 'noopener noreferrer' : undefined}
                  target={isExternal(s.href) ? '_blank' : undefined}
                  aria-label={isExternal(s.href) ? `${s.label} (opens in a new tab)` : s.label}
                >
                  <span className="hero-social-icon" aria-hidden="true">
                    {SOCIAL_ICONS[s.icon] || SOCIAL_ICONS.email}
                  </span>
                  <span className="hero-social-label">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <dl className="hero-stats">
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <dt className="hero-stat-label">{s.label}</dt>
              <dd className="hero-stat-number">{s.number}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}