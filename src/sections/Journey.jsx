import { useEffect, useRef } from 'react'
import { education, milestones } from '../data/journey'
import './journey.css'

/* Thin band across the middle of the viewport. The column stays hidden and
   completely still until it crosses this line, then reveals once.
   Lower both percentages to trigger EARLIER (0 0 -70% 0px), raise them to
   trigger LATER (-30% 0px -70% 0px). */
const TRIGGER_BAND = '-45% 0px -45% 0px'

/* Journey is the last section, so the page may bottom out before the column ever
   reaches the band. Reveal once the user gets this close to the page bottom. */
const BOTTOM_FALLBACK_PX = 120

export function Journey() {
  const milestonesRef = useRef(null)

  useEffect(() => {
    const column = milestonesRef.current
    if (!column) return undefined

    // Nothing to animate: show the column outright and skip the observers.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      column.classList.add('is-revealed')
      return undefined
    }

    let observer
    let revealed = false

    function reveal() {
      if (revealed) return
      revealed = true
      column.classList.add('is-revealed')
      observer?.disconnect()
      window.removeEventListener('scroll', checkFallback)
      window.removeEventListener('resize', checkFallback)
    }

    function checkFallback() {
      const doc = document.documentElement
      const remaining = doc.scrollHeight - (window.scrollY + window.innerHeight)
      if (remaining <= BOTTOM_FALLBACK_PX) reveal()
    }

    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) reveal()
      },
      { rootMargin: TRIGGER_BAND, threshold: 0 }
    )
    observer.observe(column)

    window.addEventListener('scroll', checkFallback, { passive: true })
    window.addEventListener('resize', checkFallback, { passive: true })
    checkFallback()

    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', checkFallback)
      window.removeEventListener('resize', checkFallback)
    }
  }, [])

  return (
    <section id="journey">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">my path</p>
          <h2 className="section-title">Education &amp; Journey</h2>
          <p className="section-desc">Where I've been and what I've been working on.</p>
        </div>

        <div className="journey-grid">
          <div className="journey-column reveal">
            <div className="journey-column-title">
              <span className="col-dot" style={{ background: 'var(--blue)' }} aria-hidden="true"></span>
              Education
            </div>
            <div className="timeline">
              {education.map((item) => (
                <div className="tl-item" key={item.title}>
                  <div className="tl-dot"></div>
                  <div className="tl-date">{item.date}</div>
                  <div className="tl-title">{item.title}</div>
                  <div className="tl-org">{item.org}</div>
                  <div className="tl-body">{item.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* No .reveal here on purpose: useReveal would fade this column in at a
              12% threshold and fight the centre-band reveal below. */}
          <div ref={milestonesRef} className="journey-column journey-column--milestones">
            <div className="journey-column-title">
              <span className="col-dot" style={{ background: 'var(--copper)' }} aria-hidden="true"></span>
              Experience &amp; Milestones
            </div>
            <div className="timeline">
              {milestones.map((item, index) => (
                <div
                  className="tl-item coming-soon"
                  key={`${item.title}-${item.org}-${index}`}
                  style={{ '--tl-stagger': index }}
                >
                  <div className="tl-dot copper"></div>
                  <div className="tl-date">{item.date}</div>
                  <div className="tl-title">{item.title}</div>
                  <div className="tl-org">{item.org}</div>
                  <div className="tl-body">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
