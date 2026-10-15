import { CircularCarousel } from '../components/ui/CircularCarousel'
import { TerminalCard } from '../components/ui/TerminalCard'
import { gallery } from '../data/gallery'
import './about.css'

const ASSET = (p) => import.meta.env.BASE_URL + p

// Built once so the carousel never sees a new items array and re-swaps cards.
const GALLERY = gallery.map((item) => ({ ...item, src: ASSET(item.src) }))

export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal">
            <p className="section-eyebrow">who i am</p>
            <h2 className="section-title">About Me</h2>
            <p>
              I'm a <strong>Computer Engineering student</strong> at the Philippine College of Science and Technology. I'm into both hardware and software — I like the idea that I can work on a website in the morning and wire up an Arduino circuit in the afternoon.
            </p>
            <p>
              Most of what I've learned so far comes from building actual projects for school and on my own. I'm not going to pretend I know everything — I'm still figuring things out, and honestly, that's the part I enjoy the most.
            </p>
            <p>
              Outside of coding, I play volleyball, dance, and spend way too much time on games like Valorant and CODM.
            </p>

            <div className="about-meta">
              <div className="about-meta-item">
                <div className="meta-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>Aguilar, Pangasinan, Philippines</span>
              </div>
              <div className="about-meta-item">
                <div className="meta-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <span>Philippine College of Science and Technology</span>
              </div>
              <div className="about-meta-item">
                <div className="meta-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
                </div>
                <span>Graduating 2029</span>
              </div>
            </div>
          </div>

          <div className="about-terminal reveal" style={{ '--reveal-i': 1 }}>
            <TerminalCard />
          </div>
        </div>

        <div className="about-gallery reveal">
          <div className="about-gallery-head">
            <p className="section-eyebrow">gallery</p>
            <p className="about-gallery-hint">drag, scroll, or click a card</p>
          </div>
          <div className="about-gallery-stage">
            <CircularCarousel
              items={GALLERY}
              preset="panorama"
              intro="rise"
              cardWidth={220}
              aspectRatio={1.333}
              speed={14}
              gap={10}
              tilt={0}
              curve={0.7}
              perspective={1800}
              momentum={0.98}
              parallax={0.36}
              stretch={0.81}
              depthFade={0.38}
              innerShade={0.69}
              cornerRadius={14}
              pauseOnHover
              captions
              captionText={false}
            />
          </div>
        </div>

        <div className="about-traits">
          <div className="trait-card reveal" style={{ '--reveal-i': 1 }}>
            <div className="trait-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <div>
              <div className="trait-title">Problem Solver</div>
              <div className="trait-body">I enjoy breaking things down and figuring out how they work. Half my projects started because I wanted to solve a specific problem.</div>
            </div>
          </div>
          <div className="trait-card reveal" style={{ '--reveal-i': 2 }}>
            <div className="trait-icon copper" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <div>
              <div className="trait-title">Hardware + Software</div>
              <div className="trait-body">Being in CPE means I work with circuits and code. I like that I can switch between designing a PCB and writing a script.</div>
            </div>
          </div>
          <div className="trait-card reveal" style={{ '--reveal-i': 3 }}>
            <div className="trait-icon green" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <div>
              <div className="trait-title">Fast Learner</div>
              <div className="trait-body">I pick up new tools and languages as I go. Most of my skills come from just diving in and figuring things out along the way.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}