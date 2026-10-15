import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'
import './particle-text.css'

const FONT_FAMILY = "'Space Grotesk', sans-serif"

export function ParticleText({ text, className = '', fontSize = 96, particleSize = 1.4, gap = 4, speed = 1.8 }) {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const mobile = useIsMobile(768)
  const enabled = !reduced && !mobile

  useEffect(() => {
    if (!enabled) return
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w, h
    let particles = []
    let targets = []
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const getTargets = () => {
      const off = document.createElement('canvas')
      const octx = off.getContext('2d')
      off.width = w
      off.height = h
      octx.font = `${fontSize}px ${FONT_FAMILY}`
      octx.textAlign = 'center'
      octx.textBaseline = 'middle'
      octx.fillStyle = '#fff'
      octx.fillText(text, w / 2, h / 2)
      const data = octx.getImageData(0, 0, w, h).data
      const pts = []
      for (let y = 0; y < h; y += gap) {
        for (let x = 0; x < w; x += gap) {
          if (data[(y * w + x) * 4 + 3] > 128) pts.push({ x, y })
        }
      }
      return pts
    }

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      w = canvas.width = Math.round(rect.width * dpr)
      h = canvas.height = Math.round(fontSize * dpr) + 16
      canvas.style.height = h / dpr + 'px'
      targets = getTargets()
      particles = targets.map((t) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        tx: t.x,
        ty: t.y,
        vx: 0,
        vy: 0,
      }))
    }

    const step = () => {
      let done = 0
      for (const p of particles) {
        p.vx += ((p.tx - p.x) / 100) * speed
        p.vy += ((p.ty - p.y) / 100) * speed
        p.vx *= 0.86
        p.vy *= 0.86
        p.x += p.vx
        p.y += p.vy
        if (Math.abs(p.tx - p.x) < speed && Math.abs(p.ty - p.y) < speed) done++
      }
      const settled = done === particles.length
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = '#5b8cff'
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2)
        ctx.fill()
      }
      if (!settled) {
        raf = requestAnimationFrame(step)
      } else {
        wrap.classList.add('settled')
        setTimeout(() => wrap.classList.add('done'), 700)
      }
    }
    void resize

    resize()
    step()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      wrap.classList.remove('settled', 'done')
      window.removeEventListener('resize', resize)
    }
  }, [text, fontSize, particleSize, gap, speed, enabled])

  return (
    <div ref={wrapRef} className={`particle-text${className ? ' ' + className : ''}`}>
      <span className="particle-text-label">{text}</span>
      {enabled && <canvas ref={canvasRef} aria-hidden="true" className="particle-text-canvas" />}
    </div>
  )
}