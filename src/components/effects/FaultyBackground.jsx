import { useEffect, useState } from 'react'
import { FaultyTerminal } from './FaultyTerminal'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import './FaultyBackground.css'

// Preset values, kept together so the look can be retuned in one place.
// SCALE is the zoom of the cell grid: higher means more, smaller cells. The
// vendor default of 1 is the practical ceiling here. At 2.7 each dot lands
// under one pixel at dpr 1 and the shader's fwidth() antialiasing smears the
// whole layer into an invisible haze.
const GLYPHS = 'dots'
const SCALE = 1
const DIGIT_SIZE = 1.35
const TIME_SCALE = 0.3
const BRIGHTNESS = 0.65
const GLOW = 1.05
const PERSISTENCE = 0.32
const MOUSE_STRENGTH = 0.65
const MOUSE_GLOW = 0.6
const CURVATURE = 0.1
const VIGNETTE = 0.45
const SCANLINE_INTENSITY = 0.9
const FLICKER_AMOUNT = 0

// Used only if --fx-tint is missing or empty.
const TINT_FALLBACK = '#565c99'
const DESKTOP_DPR_CAP = 1.5
const TOUCH_DPR = 1

export function FaultyBackground() {
  const reducedMotion = usePrefersReducedMotion()
  const [isTouch, setIsTouch] = useState(false)
  const [tint, setTint] = useState(TINT_FALLBACK)

  useEffect(() => {
    const token = getComputedStyle(document.documentElement)
      .getPropertyValue('--fx-tint')
      .trim()
    setTint(token || TINT_FALLBACK)
  }, [])

  // Pointer capability rather than width: a narrow desktop window still has a
  // mouse, so useIsMobile would wrongly kill the glow there.
  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (pointer: coarse)')
    const onChange = () => setIsTouch(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const dpr = isTouch
    ? TOUCH_DPR
    : Math.min(window.devicePixelRatio || 1, DESKTOP_DPR_CAP)

  return (
    <div className="faulty-bg" aria-hidden="true">
      <FaultyTerminal
        glyphs={GLYPHS}
        scale={SCALE}
        digitSize={DIGIT_SIZE}
        timeScale={TIME_SCALE}
        brightness={BRIGHTNESS}
        glow={GLOW}
        persistence={PERSISTENCE}
        mouseStrength={MOUSE_STRENGTH}
        mouseGlow={MOUSE_GLOW}
        curvature={CURVATURE}
        vignette={VIGNETTE}
        scanlineIntensity={SCANLINE_INTENSITY}
        flickerAmount={FLICKER_AMOUNT}
        tint={tint}
        dpr={dpr}
        mouseReact={!isTouch && !reducedMotion}
        clickEffect={isTouch || reducedMotion ? 'none' : 'glitch'}
        pause={reducedMotion}
        pageLoadAnimation={!reducedMotion}
      />
      <div className="faulty-bg__scrim" />
    </div>
  )
}
