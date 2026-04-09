'use client'

import { useEffect, useRef, useState } from 'react'

export default function Flashlight() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(true)

  // Hide flashlight when hero scrolls out of view
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Track mouse position
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

  return (
    <div
      ref={ref}
      className="flashlight"
      aria-hidden="true"
      style={{ opacity: active ? 1 : 0, transition: 'opacity 0.6s ease' }}
    />
  )
}
