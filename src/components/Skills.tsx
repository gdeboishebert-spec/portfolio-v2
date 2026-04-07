'use client'

import { useEffect, useRef } from 'react'

const skills = [
  { num: '001', icon: '🤖', name: 'Google Gemini', level: 90, label: 'MAÎTRISE CONFIRMÉE' },
  { num: '002', icon: '⚙️', name: 'Make (Integromat)', level: 85, label: 'MAÎTRISE CONFIRMÉE' },
  { num: '003', icon: '🧠', name: 'Mistral AI', level: 80, label: 'OPÉRATIONNEL' },
  { num: '004', icon: '🗄️', name: 'SQL / PostgreSQL', level: 75, label: 'OPÉRATIONNEL' },
  { num: '005', icon: '📊', name: 'Google Sheets', level: 88, label: 'MAÎTRISE CONFIRMÉE' },
  { num: '006', icon: '🚁', name: 'Pilotage Drone', level: 92, label: 'EXPERT — 3+ ANS' },
  { num: '007', icon: '💻', name: 'GitHub', level: 78, label: 'OPÉRATIONNEL' },
  { num: '008', icon: '📈', name: 'Looker Studio', level: 72, label: 'OPÉRATIONNEL' },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            const bar = entry.target.querySelector<HTMLElement>('.evidence-bar-fill')
            if (bar) bar.style.width = bar.dataset.w + '%'
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('.fade-in') ?? []
    cards.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="preuves" className="skills-bg section-full" ref={sectionRef}>
      <div className="section-full-inner">
        <div className="section-header">
          <span className="section-number">§ 02</span>
          <h2 className="section-title">Tableau des Preuves</h2>
          <div className="section-line" />
        </div>

        <div className="board">
          {skills.map(s => (
            <div key={s.num} className="evidence-card fade-in" data-num={s.num}>
              <span className="evidence-icon">{s.icon}</span>
              <div className="evidence-name">{s.name}</div>
              <div className="evidence-bar-track">
                <div className="evidence-bar-fill" data-w={s.level} />
              </div>
              <div className="evidence-level">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
