'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

type Phase = 'idle' | 'opening' | 'revealed'

const projects = [
  {
    id: '001',
    status: 'open',
    title: 'OPÉRATION EULEXIS',
    description:
      "Conception d'une application fitness propulsée par IA générative. Le système analyse le profil biométrique de l'utilisateur — âge, morphologie, objectifs — et génère des programmes d'entraînement entièrement personnalisés. Intégration de modèles de langage pour des recommandations en temps réel.",
    tags: ['IA Générative', 'Fitness', 'Personnalisation', 'LLM'],
    stamp: 'ACTIF',
    link: 'https://www.canva.com/design/DAG55Sv4CNw/view',
    embedUrl: 'https://www.canva.com/design/DAG55Sv4CNw/view?embed',
    linkLabel: 'Voir la présentation',
  },
  {
    id: '002',
    status: 'open',
    title: 'OPÉRATION DRONE EVENTS',
    description:
      "Développement et déploiement d'un site professionnel pour une activité de prises de vues aériennes événementielles. Architecture Next.js, galerie de missions, formulaire de contact. Site en production — activité freelance déclarée depuis 3 ans.",
    tags: ['Next.js', 'TypeScript', 'Vercel', 'Freelance'],
    stamp: 'ACTIF',
    link: 'https://drone-events.vercel.app',
    embedUrl: null,
    linkLabel: 'Voir le site',
  },
  {
    id: '003',
    status: 'open',
    title: 'OPÉRATION PLAYCONNECT',
    description:
      "Conception d'une application mobile de mise en réseau sportif. PlayConnect permet aux sportifs amateurs de trouver des partenaires géolocalisés, d'organiser des matchs improvisés et de rejoindre des équipes locales. Étude de marché, maquettes UX et pitch investisseurs réalisés.",
    tags: ['App Mobile', 'UX/UI', 'Social', 'Sport'],
    stamp: 'ACTIF',
    link: 'https://www.canva.com/design/DAG57Bufm6k/view',
    embedUrl: 'https://www.canva.com/design/DAG57Bufm6k/view?embed',
    linkLabel: 'Voir la présentation',
  },
  {
    id: '004',
    status: 'closed',
    title: 'OPÉRATION DATA ANALYSE',
    description:
      "Analyse complète d'une base de données d'accidents routiers français : nettoyage, croisements statistiques et visualisation via Google Sheets et Looker Studio. Production de dashboards interactifs permettant d'identifier les zones à risque et les facteurs de dangerosité.",
    tags: ['Google Sheets', 'Looker Studio', 'Data Viz', 'SQL'],
    stamp: 'CLASSÉE',
    link: 'https://lookerstudio.google.com/u/0/reporting/51f5757a-9b66-47e2-8c7d-3a5bb7afa0d4',
    embedUrl: null,
    linkLabel: 'Voir le dashboard',
  },
  {
    id: '005',
    status: 'closed',
    title: 'OPÉRATION BEÏTEA',
    description:
      "Mission de growth hacking pour Beïtea, marque parisienne de bubble tea. Audit des canaux d'acquisition, analyse comportementale des clients et déploiement d'une stratégie digitale ciblée. Résultats mesurés sur 30 jours, rapport de performance remis à la direction.",
    tags: ['Growth Hacking', 'Marketing Digital', 'Analytics', 'Paris'],
    stamp: 'CLASSÉE',
    link: 'https://www.canva.com/design/DAG5tvEoqWE/view',
    embedUrl: 'https://www.canva.com/design/DAG5tvEoqWE/view?embed',
    linkLabel: 'Voir la présentation',
  },
]

// ─── MODAL CANVA ──────────────────────────────────────────────────────────────

function CanvaModal({
  embedUrl,
  title,
  onClose,
}: {
  embedUrl: string
  title: string
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="canva-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="canva-modal" onClick={(e) => e.stopPropagation()}>
        <div className="canva-modal-header">
          <span className="canva-modal-label">DOSSIER DÉCLASSIFIÉ</span>
          <span className="canva-modal-title">{title}</span>
          <button className="canva-modal-close" onClick={onClose} aria-label="Fermer">
            ✕ FERMER LE DOSSIER
          </button>
        </div>
        <div className="canva-modal-body">
          <iframe
            src={embedUrl}
            className="canva-iframe"
            allowFullScreen
            title={title}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

// ─── CASE CARD ────────────────────────────────────────────────────────────────

function CaseCard({
  id, status, title, description, tags, stamp, link, embedUrl, linkLabel, delay,
  onOpenEmbed,
}: typeof projects[0] & { delay: number; onOpenEmbed: (url: string, title: string) => void }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const ref = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          setTimeout(() => {
            setPhase('opening')
            setTimeout(() => setPhase('revealed'), 900)
          }, delay)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (phase !== 'revealed') return
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - y) * 10
    const ry = (x - 0.5) * 10
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`
    el.style.setProperty('--gx', `${x * 100}%`)
    el.style.setProperty('--gy', `${y * 100}%`)
  }, [phase])

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = ''
  }, [])

  const handleLinkClick = (e: React.MouseEvent) => {
    if (embedUrl) {
      e.preventDefault()
      onOpenEmbed(embedUrl, title)
    }
  }

  return (
    <div
      ref={ref}
      className={`case-file${phase !== 'idle' ? ' case-file-active' : ''}${phase === 'revealed' ? ' case-file-revealed' : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {phase !== 'idle' && !embedUrl && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="case-overlay" aria-label={title} />
      )}

      <div className="case-glare" />
      <div className={`case-bar${phase === 'revealed' ? ' case-bar-lit' : ''}`} />

      <div className="case-content">
        {phase === 'opening' && (
          <div className="case-opening-overlay" aria-hidden="true">
            <span className="case-opening-text">DÉCLASSIFICATION EN COURS...</span>
            <div className="case-opening-scan" />
          </div>
        )}

        <div className={`case-inner${phase === 'revealed' ? ' case-inner-visible' : ''}`}>
          <div className="case-meta">
            <span className="case-id">AFFAIRE N° {id}</span>
            <span className={`case-status ${status === 'open' ? 'status-open' : 'status-closed'}`}>
              {status === 'open' ? 'EN COURS' : 'CLASSÉE'}
            </span>
          </div>
          <div className="case-title">{title}</div>
          <div className="case-description">{description}</div>
          <div className="case-footer">
            <div className="case-tags">
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <a
              href={link}
              target={embedUrl ? undefined : '_blank'}
              rel={embedUrl ? undefined : 'noopener noreferrer'}
              className="case-link"
              onClick={handleLinkClick}
            >
              {linkLabel} &rarr;
            </a>
          </div>
        </div>

        {phase === 'revealed' && (
          <div className={`case-stamp case-stamp-drop ${status === 'open' ? 'stamp-open' : 'stamp-closed'}`}>
            {stamp}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export default function Projects() {
  const [modal, setModal] = useState<{ url: string; title: string } | null>(null)

  const openEmbed = useCallback((url: string, title: string) => {
    setModal({ url, title })
  }, [])

  const closeEmbed = useCallback(() => {
    setModal(null)
  }, [])

  return (
    <>
      <section id="affaires" className="section">
        <div className="section-header">
          <span className="section-number">§ 03</span>
          <h2 className="section-title">Affaires Classées &amp; En Cours</h2>
          <div className="section-line" />
        </div>

        <div className="cases-grid">
          {projects.map((p, i) => (
            <CaseCard key={p.id} {...p} delay={i * 150} onOpenEmbed={openEmbed} />
          ))}
        </div>
      </section>

      {modal && (
        <CanvaModal
          embedUrl={modal.url}
          title={modal.title}
          onClose={closeEmbed}
        />
      )}
    </>
  )
}
