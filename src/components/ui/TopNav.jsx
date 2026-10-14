import { navLinks, navCta, site } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'

const SECTIONS = navLinks.map((l) => l.href.slice(1))

export function TopNav() {
  const active = useActiveSection(SECTIONS)
  const { availability } = site

  return (
    <nav className="nav" aria-label="Main">
      <div className="nav-pill">
        {availability.available && (
          <span className="nav-status">
            <span className="nav-status-dot" aria-hidden="true"></span>
            {availability.label}
          </span>
        )}

        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`}
                aria-current={active === l.href.slice(1) ? 'true' : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={navCta.href} className="nav-cta">
          {navCta.label}
          <span className="nav-cta-arrow" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </a>
      </div>
    </nav>
  )
}
