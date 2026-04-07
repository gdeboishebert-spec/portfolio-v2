'use client'

import { useEffect, useRef } from 'react'

const phrases = [
  'Étudiant en Bachelor IA',
  "Architecte de l'automatisation",
  'Pilote de drone',
  'Entrepreneur numérique',
  "Chasseur d'opportunités",
]

export default function Typewriter() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let pi = 0, ci = 0, del = false
    let timer: ReturnType<typeof setTimeout>

    function type() {
      const phrase = phrases[pi]
      if (!del) {
        el!.textContent = phrase.substring(0, ci + 1)
        ci++
        if (ci === phrase.length) {
          del = true
          timer = setTimeout(type, 2000)
          return
        }
      } else {
        el!.textContent = phrase.substring(0, ci - 1)
        ci--
        if (ci === 0) {
          del = false
          pi = (pi + 1) % phrases.length
        }
      }
      timer = setTimeout(type, del ? 40 : 80)
    }

    type()
    return () => clearTimeout(timer)
  }, [])

  return (
    <span ref={ref} className="info-value typewriter">
      Étudiant en Bachelor IA
    </span>
  )
}
