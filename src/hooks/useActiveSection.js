import { useEffect, useState } from 'react'

const TRIGGER_OFFSET = 160

export function useActiveSection(ids, initial = 'home') {
  const [active, setActive] = useState(initial)

  useEffect(() => {
    const onScroll = () => {
      let current = initial
      let nearest = -Infinity
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop
        if (window.scrollY >= top - TRIGGER_OFFSET && top > nearest) {
          nearest = top
          current = id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, initial])

  return active
}