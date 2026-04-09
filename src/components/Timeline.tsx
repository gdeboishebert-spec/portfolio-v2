'use client'

import { useEffect, useRef, useState } from 'react'

const entries = [
  {
    date: '2024 — EN COURS',
    role: 'Bachelor IA Appliquée aux Affaires — Année 1',
    org: 'Eugenia School — Paris, France',
    desc: "Formation intensive combinant intelligence artificielle, entrepreneuriat et stratégie business. Le sujet développe une expertise sur les outils d'automatisation, la data et l'IA générative dans un contexte professionnel.",
  },
  {
    date: '2021 — EN COURS',
    role: 'Pilote de Drone Professionnel',
    org: 'Drone Events — Indépendant',
    desc: "Plus de 3 ans d'expérience en pilotage de drone. Développement d'une activité freelance de prises de vues aériennes pour événements. Site professionnel développé en Next.js.",
  },
  {
    date: '2024',
    role: 'Growth Hacker',
    org: 'Beïtea — Paris',
    desc: "Mission d'optimisation de croissance pour une marque de bubble tea parisienne. Mise en place de stratégies d'acquisition digitale et d'analyse comportementale.",
  },
  {
    date: '2024',
    role: 'Développeur — Analyste Data',
    org: 'Projets Académiques — Eugenia School',
    desc: "Réalisation de multiples projets data : bases de données SQL pour concession automobile, analyses via Google Sheets & Looker Studio, extension de marque Sézane.",
  },
]

function TimelineEntry({ entry, delay }: { entry: typeof entries[0]; delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !triggered.current) {
          triggered.current = true
          setTimeout(() => setVisible(true), delay)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`timeline-item${visible ? ' tl-visible' : ''}`}>
      <div className="timeline-date">{entry.date}</div>
      <div className="timeline-role">{entry.role}</div>
      <div className="timeline-org">{entry.org}</div>
      <div className="timeline-desc">{entry.desc}</div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="parcours" className="section">
      <div className="section-header">
        <span className="section-number">§ 04</span>
        <h2 className="section-title">Historique Opérationnel</h2>
        <div className="section-line" />
      </div>

      <div className="timeline">
        {entries.map((e, i) => (
          <TimelineEntry key={i} entry={e} delay={i * 200} />
        ))}
      </div>
    </section>
  )
}
