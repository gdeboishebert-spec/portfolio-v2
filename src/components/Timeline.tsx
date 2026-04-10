'use client'

import { useEffect, useRef, useState } from 'react'

const entries = [
  {
    date: 'JANVIER 2026 — EN COURS',
    role: 'Projet IA Vocale & CRM',
    org: 'LVMH',
    desc: "Conception et déploiement d'un outil IA transformant les mémos vocaux des vendeurs en fiches clients structurées. Résultat : classement automatique avec 92 % de précision en moins de 2 secondes. Stack : Python, NLP, traitement de la parole, conformité RGPD.",
  },
  {
    date: 'SEPTEMBRE 2025 — EN COURS',
    role: 'Création de Sites Web',
    org: 'Loon Agency',
    desc: "Développement de sites web performants (HTML, CSS, JavaScript). Orchestration du lancement complet de marques : identité visuelle et positionnement. Conception de supports physiques : roll-ups, adhésifs, catalogues produits.",
  },
  {
    date: '2025 — 2028',
    role: 'Bachelor IA Appliquée aux Affaires',
    org: 'Eugenia School — Paris',
    desc: "Formation intensive combinant intelligence artificielle, data, no-code et stratégie business. Spécialisation : Data Business IA & No Code. Développement d'une expertise opérationnelle sur les outils d'automatisation, l'IA générative et la gestion de projet.",
  },
  {
    date: 'JUILLET — AOÛT 2025',
    role: 'Travail dans le Bâtiment',
    org: 'Beowatt',
    desc: "Rénovation globale de maisons et maçonnerie. En parallèle : création de l'identité visuelle de la structure et gestion de son site web.",
  },
  {
    date: '2021 — EN COURS',
    role: 'Pilote de Drone Professionnel',
    org: 'Drone Events — Indépendant',
    desc: "Plus de 3 ans d'activité freelance en prises de vues aériennes événementielles. Site professionnel développé en Next.js, déployé sur Vercel. Brevet d'initiation aéronautique obtenu.",
  },
  {
    date: 'JUIN — JUILLET 2024',
    role: 'Stage Marketing',
    org: 'Groupe Studiosport',
    desc: "Immersion en service après-vente : maintenance, conseil client direct. Suivi de dossiers et résolution de litiges clients.",
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
