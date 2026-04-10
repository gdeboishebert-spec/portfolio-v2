'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 4,  suffix: '',  label: 'EXPÉRIENCES',  sub: 'PROFESSIONNELLES DÉCLARÉES' },
  { value: 3,  suffix: '+', label: 'ANS',           sub: 'FREELANCE EN ACTIVITÉ'      },
  { value: 5,  suffix: '',  label: 'PROJETS',       sub: 'LIVRÉS & DOCUMENTÉS'        },
  { value: 2,  suffix: '',  label: 'LANGUES',       sub: 'ANGLAIS B1/B2 · ESPAGNOL B1' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps = 50
          const duration = 1400
          let current = 0
          const inc = target / steps
          const timer = setInterval(() => {
            current += inc
            if (current >= target) { setVal(target); clearInterval(timer) }
            else setVal(Math.floor(current))
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <div ref={ref} className="stat-number">
      {val}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <div className="stats-section">
      <div className="stats-inner">
        <div className="section-header">
          <span className="section-number">§ 01.5</span>
          <span className="stats-headline">RAPPORT D&apos;ACTIVITÉ — DONNÉES CHIFFRÉES</span>
          <div className="section-line" />
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item stat-reveal" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="stat-top-bar" />
              <Counter target={s.value} suffix={s.suffix} />
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
