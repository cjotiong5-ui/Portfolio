import { MagicBento } from '../components/effects/MagicBento'
import { ShinyText } from '../components/effects/ShinyText'
import { skills } from '../data/skills'
import './skills.css'

function SkillCell({ item, index }) {
  const color = item.id === 'hardware' ? 'copper' : item.id === 'web' ? 'green' : ''

  return (
    <div
      className={`skill-bento bento-cell reveal${item.span ? ' span-' + item.span : ''}`}
      style={{ '--reveal-i': index }}
    >
      {item.quote ? (
        <p className="skill-quote">{item.quote}</p>
      ) : (
        <>
          <div className="skill-card-header">
            <div className={`skill-card-icon${color ? ' ' + color : ''}`} aria-hidden="true">
              <SkillIcon name={item.icon} />
            </div>
            <div className="skill-card-inner">
              <div className="skill-card-title">{item.title}</div>
            </div>
          </div>
          {item.items.length > 0 && (
            <div className="skill-bars">
              {item.items.map((s) => (
                <div className="skill-bar-wrap" key={s.name}>
                  <div className="skill-bar-label"><span>{s.name}</span><span>{s.pct}%</span></div>
                  <div className="skill-bar-bg"><div className={`skill-bar-fill${color ? ' ' + color : ''}`} style={{ '--fill': `${s.pct}%` }}></div></div>
                </div>
              ))}
            </div>
          )}
          <div className="skill-tags">
            {item.level && <span className="tag">{item.level}</span>}
            {item.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function SkillIcon({ name }) {
  switch (name) {
    case 'chip':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
    case 'globe':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    case 'tools':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    case 'people':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    case 'quote':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 17c0 1.1-.9 2-2 2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h1a3 3 0 0 0-3-3V4a5 5 0 0 1 5 5v8z"/><path d="M9 17c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h1a3 3 0 0 0-3-3V4a5 5 0 0 1 5 5v8z"/></svg>
    case 'video':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>
    case 'palette':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
    default:
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  }
}

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">what i know</p>
          <h2 className="section-title"><ShinyText text="Skills &amp; Tools" /></h2>
          <p className="section-desc">Technologies and tools I've picked up through school projects and personal experiments.</p>
        </div>
        <MagicBento items={skills} renderCell={(item, i) => <SkillCell key={item.id} item={item} index={i} />} />
      </div>
    </section>
  )
}