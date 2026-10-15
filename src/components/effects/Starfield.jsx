import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'
import './starfield.css'

export function Starfield() {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()
  const mobile = useIsMobile()

  useEffect(() => {
    if (reduced || mobile) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    let stars = []
    let w, h

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      const count = Math.min(140, Math.floor((w * h) / 14000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.7 + 0.2,
        tw: Math.random() * 2 + 1,
        ph: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.a = 0.2 + 0.5 * (0.5 + 0.5 * Math.sin((t * s.tw) / 1000 + s.ph))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(231,233,238,${s.a * 0.8})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [reduced, mobile])

  return <canvas ref={ref} className="starfield" aria-hidden="true" />
}