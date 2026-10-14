import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useTypewriter(words, startDelay = 1200) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduced) {
      el.textContent = words[0]
      return
    }

    let wordIdx = 0
    let charIdx = 0
    let deleting = false
    let timer = null

    const tick = () => {
      const word = words[wordIdx]
      charIdx = deleting ? charIdx - 1 : charIdx + 1
      el.textContent = word.substring(0, charIdx)
      let delay = deleting ? 55 : 85
      if (!deleting && charIdx === word.length) {
        delay = 1800
        deleting = true
      } else if (deleting && charIdx === 0) {
        deleting = false
        wordIdx = (wordIdx + 1) % words.length
        delay = 400
      }
      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, startDelay)
    return () => clearTimeout(timer)
  }, [words, startDelay, reduced])

  return ref
}