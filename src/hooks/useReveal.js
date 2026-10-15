import { useEffect } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

const REVEAL_THRESHOLD = 0.12

let observer = null
let reducedMotion = false

function ensureObserver() {
  if (observer || reducedMotion) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      })
    },
    { threshold: REVEAL_THRESHOLD }
  )
  return observer
}

export function refreshReveals(scope = document) {
  const obs = ensureObserver()
  if (!obs) return
  scope.querySelectorAll('.reveal:not(.visible)').forEach((el) => obs.observe(el))
}

export function useReveal() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    reducedMotion = reduced

    if (reduced) {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => el.classList.add('visible'))
      return
    }

    refreshReveals()
    return () => {
      observer?.disconnect()
      observer = null
    }
  }, [reduced])
}

export function useBackgrounds() {
  useEffect(() => {
    const grid = document.createElement('div')
    grid.className = 'bg-grid'
    grid.setAttribute('aria-hidden', 'true')
    const blue = document.createElement('div')
    blue.className = 'bg-gradient-orb bg-gradient-orb--blue'
    blue.setAttribute('aria-hidden', 'true')
    const copper = document.createElement('div')
    copper.className = 'bg-gradient-orb bg-gradient-orb--copper'
    copper.setAttribute('aria-hidden', 'true')
    document.body.prepend(grid, blue, copper)
    return () => {
      grid.remove()
      blue.remove()
      copper.remove()
    }
  }, [])
}