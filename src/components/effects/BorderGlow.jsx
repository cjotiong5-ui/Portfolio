import { useCallback, useRef } from 'react'
import './border-glow.css'

export function BorderGlow({ children, className = '', as: Tag = 'div', accent = 'var(--accent)', style, ...rest }) {
  const ref = useRef(null)

  const onMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }, [])

  return (
    <Tag
      ref={ref}
      className={`border-glow${className ? ' ' + className : ''}`}
      style={{ '--glow-accent': accent, ...style }}
      onPointerMove={onMove}
      {...rest}
    >
      {children}
    </Tag>
  )
}