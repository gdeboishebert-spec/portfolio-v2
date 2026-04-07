'use client'

import { useEffect, useRef } from 'react'

export default function Flashlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rafPending = false
    let mx = -999, my = -999

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (!rafPending) {
        rafPending = true
        requestAnimationFrame(() => {
          el.style.setProperty('--mx', mx + 'px')
          el.style.setProperty('--my', my + 'px')
          rafPending = false
        })
      }
    }

    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return <div ref={ref} className="flashlight" aria-hidden="true" />
}
