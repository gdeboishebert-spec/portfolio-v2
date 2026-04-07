'use client'

import { useEffect } from 'react'

export default function FadeObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all fade-in elements except those inside Skills (handled by Skills itself)
    document.querySelectorAll('#affaires .fade-in, #parcours .fade-in, #contact .fade-in, .hero .fade-in').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
