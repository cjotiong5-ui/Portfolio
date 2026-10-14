import { IconGithub, IconLinkedin, IconMail, IconExternal } from './Icons'
import './planet-icons.css'

const ICONS = {
  github: <IconGithub />,
  linkedin: <IconLinkedin />,
  email: <IconMail />,
  launch: <IconExternal />,
}

export function PlanetIcons({ items, className = '', link = false }) {
  return (
    <ul className={`planet-row${className ? ' ' + className : ''}`}>
      {items.map((item) => {
        const inner = (
          <span className="planet" aria-hidden="true">
            {typeof item.icon === 'string' ? ICONS[item.icon] || null : item.icon || <span className="planet-glyph">{item.label}</span>}
          </span>
        )
        return (
          <li key={item.name} className="planet-item">
            {link && item.href ? (
              <a href={item.href} className="planet-link" aria-label={item.name} rel="noopener noreferrer" target={item.href.startsWith('http') ? '_blank' : undefined}>
                {inner}
                <span className="planet-label">{item.name}</span>
              </a>
            ) : (
              <span className="planet-item-static">{inner}<span className="sr-only">{item.name}</span></span>
            )}
          </li>
        )
      })}
    </ul>
  )
}