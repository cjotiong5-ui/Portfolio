import { useState, useEffect } from 'react'
import { BorderGlow } from '../components/effects/BorderGlow'
import { IconGithub, IconExternal } from '../components/ui/Icons'
import { projects } from '../data/projects'
import { refreshReveals } from '../hooks/useReveal'
import './projects.css'

const ASSET = (p) => import.meta.env.BASE_URL + p

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'iot', label: 'IoT / Hardware' },
]

const ICONS = {
  github: <IconGithub />,
  launch: <IconExternal />,
}

export function Projects() {
  const [filter, setFilter] = useState('all')

  const visible = projects.filter((p) => filter === 'all' || p.category === filter)

  useEffect(() => {
    refreshReveals()
  }, [filter])

  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="reveal">
            <p className="section-eyebrow">what i built</p>
            <h2 className="section-title">Projects</h2>
            <p className="section-desc">Things I've actually built — school projects, personal experiments, and things I made because I was curious.</p>
          </div>
          <div className="project-filters reveal">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`project-filter${filter === f.key ? ' active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {visible.map((project, i) => (
            <BorderGlow
              key={project.id}
              className="project-glow reveal"
              style={{ '--reveal-i': i % 4 }}
            >
              <article className="project-card" data-category={project.category}>
                {project.thumb ? (
                  <div className="project-thumb">
                    <img src={ASSET(project.thumb)} alt={project.thumbAlt ?? `${project.title} screenshot`} loading="lazy" />
                  </div>
                ) : (
                  <div className="project-thumb">
                    <div className="project-thumb-placeholder" aria-hidden="true">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                    </div>
                  </div>
                )}
                <div className="project-body">
                  <div className={`project-type ${project.type}`}>{project.type === 'coming-soon' ? 'coming soon' : project.type}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`${project.title} — ${link.label}`}
                      >
                        {ICONS[link.icon]}
                        {link.label}
                      </a>
                    ))}
                    {project.type === 'coming-soon' && (
                      <span className="project-soon-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        more details coming soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  )
}