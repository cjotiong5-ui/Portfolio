import { IconGithub, IconLinkedin, IconMail } from '../components/ui/Icons'
import { site, heroCta, socials } from '../data/site'
import { stats } from '../data/stats'
import './hero.css'

const ASSET = (p) => import.meta.env.BASE_URL + p

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

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-stage">
          <h1 className="hero-name">
            <span className="hero-name-first">{firstName}</span>
            <span className="hero-name-last">{lastName}</span>
          </h1>

          <figure className="hero-photo">
            <img
              className="hero-photo-img"
              src={ASSET(photo.src)}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              fetchpriority="high"
              decoding="async"
            />
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
