import { IconHome, IconFolder, IconUser, IconMail } from './Icons'
import { useActiveSection } from '../../hooks/useActiveSection'

const TABS = [
  { href: '#home', label: 'home', icon: <IconHome /> },
  { href: '#projects', label: 'projects', icon: <IconFolder /> },
  { href: '#about', label: 'about', icon: <IconUser /> },
  { href: '#contact', label: 'contact', icon: <IconMail /> },
]

const TABS_IDS = TABS.map((t) => t.href.slice(1))

export function BottomNav() {
  const active = useActiveSection(TABS_IDS)

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      <ul className="bottom-nav-list">
        {TABS.map((t) => (
          <li key={t.href}>
            <a href={t.href} className={`bottom-nav-link${active === t.href.slice(1) ? ' active' : ''}`} aria-current={active === t.href.slice(1) ? 'page' : undefined}>
              <span className="bottom-nav-icon" aria-hidden="true">{t.icon}</span>
              <span className="bottom-nav-label">{t.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}