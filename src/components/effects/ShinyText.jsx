import { useEffect } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'
import './shiny-text.css'

export function ShinyText({ text, className = '', as = 'span' }) {
  const reduced = usePrefersReducedMotion()
  const mobile = useIsMobile()
  const Tag = as
  const enabled = !reduced && !mobile

  useEffect(() => {}, [enabled])

  return (
    <Tag className={`shiny-text${className ? ' ' + className : ''}${enabled ? ' animating' : ''}`}>
      {text}
    </Tag>
  )
}