import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import './terminal-card.css'

const DEFAULT_LINES = [
  { prompt: '➜ ~', text: 'who am i' },
  { prompt: '>', text: 'Computer Engineering student, builder of', cls: 'dim' },
  { prompt: '>', text: 'websites + embedded systems. From', cls: 'dim' },
  { prompt: '>', text: 'Aguilar, Pangasinan, Philippines.', cls: 'dim' },
  { prompt: '➜ ~', text: 'cat stack.txt' },
  { prompt: '>', text: 'C/C++ · Python · JS · Arduino', cls: 'term-g' },
  { prompt: '➜ ~', text: 'echo goal' },
  { prompt: '>', text: 'internship in 2026 — software or firmware', cls: 'term-g2' },
]

export function TerminalCard({ lines = DEFAULT_LINES }) {
  const ref = useRef(null)
  const copyTimer = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [revealed, setRevealed] = useState(reduced)
  const [idx, setIdx] = useState(-1)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (reduced) {
      setRevealed(true)
      return
    }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduced])

  useEffect(() => {
    if (!revealed) return
    if (reduced) {
      setIdx(lines.length)
      return
    }
    let i = 0
    setIdx(0)
    const timer = setInterval(() => {
      i++
      setIdx(i)
      if (i >= lines.length) clearInterval(timer)
    }, 220)
    return () => clearInterval(timer)
  }, [revealed, reduced, lines.length])

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  const transcript = lines.map((l) => l.text).join('\n')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transcript)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = transcript
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div ref={ref} className="terminal-card" aria-label="Terminal showcasing my stack">
      <div className="terminal-header">
        <span className="terminal-icon" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m7 15 3-3-3-3" /><path d="M13 15h4" /></svg>
        </span>
        <span className="terminal-title">Terminal</span>
        <button
          type="button"
          className={`copy_toggle${copied ? ' copied' : ''}`}
          onClick={handleCopy}
          aria-label={copied ? 'Command copied' : 'Copy command'}
          title="Copy command"
        >
          <span className="copy_toggle__copy" aria-hidden="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>
            copy
          </span>
          <span className="copy_toggle__check" aria-hidden="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            copied
          </span>
        </button>
      </div>
      <div className="terminal-body">
        {lines.slice(0, idx + 1).map((line, i) => (
          <div key={i} className="terminal-line">
            {line.prompt && <span className="terminal-prompt" aria-hidden="true">{line.prompt}</span>}
            <span className={line.cls || ''}>{line.text}</span>
          </div>
        ))}
        <span className="terminal-cursor" aria-hidden="true">
          <span className="terminal-prompt" aria-hidden="true">{lines[idx]?.prompt || '➜ ~'}</span>
        </span>
      </div>
    </div>
  )
}