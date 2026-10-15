import { useState } from 'react'
import { IconMail, IconGithub, IconExternal } from '../components/ui/Icons'
import { contactItems, formEmail } from '../data/contact'
import './contact.css'

const ICONS = {
  email: <IconMail />,
  github: <IconGithub />,
  launch: <IconExternal />,
}

export function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    if (!name || !email || !message) return
    const subject = encodeURIComponent('Portfolio Contact from ' + name)
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)
    setStatus('Opening your email app…')
    window.location.href = `mailto:${formEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">let's connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">Whether you have a project idea, an internship offer, or just want to connect — feel free to reach out.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            {contactItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-item reveal"
                style={{ '--reveal-i': i }}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                target={item.href.startsWith('http') ? '_blank' : undefined}
              >
                <div className="contact-icon" aria-hidden="true">{ICONS[item.icon] || ICONS.launch}</div>
                <div>
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-value">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form id="contact-form" className="contact-form reveal" onSubmit={onSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">Name</label>
              <input className="form-input" type="text" id="contact-name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">Email</label>
              <input className="form-input" type="email" id="contact-email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea className="form-textarea" id="contact-message" name="message" placeholder="What's on your mind?" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
              <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
            <p className="form-note" role="status">{status}</p>
            <p className="form-note">Or email me directly at <a href={`mailto:${formEmail}`} style={{ color: 'var(--blue)' }}>{formEmail}</a></p>
          </form>
        </div>
      </div>
    </section>
  )
}