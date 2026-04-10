'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

type Phase = 'idle' | 'opening' | 'revealed'

interface ProcessStep {
  num: string
  title: string
  desc: string
}

interface Project {
  id: string
  status: string
  title: string
  description: string
  tags: string[]
  stamp: string
  link: string
  embedUrl: string | null
  linkLabel: string
  process: ProcessStep[]
  result: string
}

const projects: Project[] = [
  {
    id: '001',
    status: 'open',
    title: 'OPÉRATION EULEXIS',
    description: "App fitness propulsée par IA générative — programmes d'entraînement entièrement personnalisés selon le profil biométrique.",
    tags: ['IA Générative', 'LLM', 'Prompt Engineering', 'UX'],
    stamp: 'ACTIF',
    link: 'https://www.canva.com/design/DAG55Sv4CNw/view',
    embedUrl: 'https://www.canva.com/design/DAG55Sv4CNw/view?embed',
    linkLabel: 'Voir la présentation',
    result: "Concept validé et pitché — application en cours de développement.",
    process: [
      {
        num: '01',
        title: 'IDENTIFICATION DU PROBLÈME',
        desc: "Les <strong>programmes fitness génériques</strong> ignorent les profils individuels. Constat : la majorité des utilisateurs abandonnent faute de <strong>personnalisation</strong>. Définition précise du besoin cible.",
      },
      {
        num: '02',
        title: 'ARCHITECTURE DU SYSTÈME IA',
        desc: "Conception d'un <strong>pipeline LLM</strong> : collecte du <strong>profil biométrique</strong> (âge, morphologie, objectifs) → traitement → génération de programmes structurés et progressifs.",
      },
      {
        num: '03',
        title: 'PROMPT ENGINEERING',
        desc: "Itération intensive sur les prompts pour contraindre le modèle à produire des réponses <strong>exploitables et formatées</strong>, adaptées à chaque profil utilisateur.",
      },
      {
        num: '04',
        title: 'PITCH & PRÉSENTATION',
        desc: "Formalisation en <strong>deck investisseurs</strong> : maquettes UX, business model, projections. Présenté devant jury à <strong>Eugenia School</strong>.",
      },
    ],
  },
  {
    id: '002',
    status: 'open',
    title: 'OPÉRATION DRONE EVENTS',
    description: "Site professionnel pour activité de prises de vues aériennes événementielles — en production depuis 3 ans.",
    tags: ['Next.js', 'TypeScript', 'Vercel', 'Freelance'],
    stamp: 'ACTIF',
    link: 'https://drone-events.vercel.app',
    embedUrl: null,
    linkLabel: 'Voir le site en ligne',
    result: "Site en production — missions réalisées en Île-de-France et Normandie.",
    process: [
      {
        num: '01',
        title: 'CHOIX DE LA STACK',
        desc: "<strong>Next.js</strong> pour les performances SEO et le rendu serveur. <strong>TypeScript</strong> pour la fiabilité du code. <strong>Vercel</strong> pour le déploiement continu automatisé.",
      },
      {
        num: '02',
        title: 'DÉVELOPPEMENT',
        desc: "<strong>Galerie de missions</strong> photographiques, <strong>formulaire de contact</strong>, pages de services détaillées. Design sobre et professionnel orienté acquisition client.",
      },
      {
        num: '03',
        title: 'MISE EN PRODUCTION',
        desc: "Déploiement sur Vercel, configuration du domaine. Optimisation des <strong>Core Web Vitals</strong> et du <strong>référencement naturel</strong>.",
      },
      {
        num: '04',
        title: 'ACTIVITÉ COMMERCIALE',
        desc: "Site utilisé activement pour acquérir des missions. <strong>Activité freelance déclarée</strong>, plusieurs événements couverts chaque année <strong>depuis 2021</strong>.",
      },
    ],
  },
  {
    id: '003',
    status: 'open',
    title: 'OPÉRATION PLAYCONNECT',
    description: "App mobile de mise en réseau sportif — géolocalisation, matching et organisation de matchs improvisés entre amateurs.",
    tags: ['App Mobile', 'UX/UI', 'Business Model', 'Sport'],
    stamp: 'ACTIF',
    link: 'https://www.canva.com/design/DAG57Bufm6k/view',
    embedUrl: 'https://www.canva.com/design/DAG57Bufm6k/view?embed',
    linkLabel: 'Voir la présentation',
    result: "Pitch réalisé devant jury — concept validé avec retours positifs.",
    process: [
      {
        num: '01',
        title: 'ÉTUDE DE MARCHÉ',
        desc: "Analyse du secteur du <strong>sport amateur</strong>. Identification du problème central : trouver des <strong>partenaires disponibles et géolocalisés</strong> est trop complexe.",
      },
      {
        num: '02',
        title: 'CONCEPTION UX',
        desc: "Parcours utilisateur complet : inscription → profil sportif → <strong>géolocalisation</strong> → <strong>matching</strong> → organisation de match. Maquettes fil de fer et prototypes interactifs.",
      },
      {
        num: '03',
        title: 'MODÈLE ÉCONOMIQUE',
        desc: "Stratégie <strong>freemium</strong> définie. Analyse compétitive, <strong>projections de revenus sur 3 ans</strong>, identification des partenaires stratégiques (clubs, équipementiers).",
      },
      {
        num: '04',
        title: 'PITCH INVESTISSEURS',
        desc: "Deck complet présenté devant jury simulé : différenciation, <strong>go-to-market</strong>, <strong>KPIs cibles</strong>, démonstration des maquettes interactives.",
      },
    ],
  },
  {
    id: '004',
    status: 'closed',
    title: 'OPÉRATION DATA ANALYSE',
    description: "Analyse d'une base de données d'accidents routiers français — dashboards interactifs et identification des zones à risque.",
    tags: ['SQL', 'Google Sheets', 'Looker Studio', 'Data Viz'],
    stamp: 'CLASSÉE',
    link: 'https://lookerstudio.google.com/u/0/reporting/51f5757a-9b66-47e2-8c7d-3a5bb7afa0d4',
    embedUrl: null,
    linkLabel: 'Voir le dashboard',
    result: "Dashboard livré — 5 zones à risque prioritaires identifiées et documentées.",
    process: [
      {
        num: '01',
        title: 'NETTOYAGE DES DONNÉES',
        desc: "Traitement d'une base de <strong>milliers d'accidents routiers français</strong>. Identification et correction des <strong>valeurs aberrantes</strong>, doublons et champs manquants via SQL.",
      },
      {
        num: '02',
        title: 'ANALYSE STATISTIQUE',
        desc: "Requêtes <strong>SQL avancées</strong> : croisements par heure, météo, type de route, département. Extraction des <strong>patterns de dangerosité</strong> et corrélations.",
      },
      {
        num: '03',
        title: 'VISUALISATION',
        desc: "Construction de <strong>dashboards Looker Studio</strong> : filtres interactifs, <strong>cartes de chaleur géographiques</strong>, graphiques de tendance temporelle.",
      },
      {
        num: '04',
        title: 'RESTITUTION',
        desc: "Rapport final présentant les <strong>5 zones à risque prioritaires</strong>, les facteurs aggravants identifiés et les <strong>recommandations de prévention</strong>.",
      },
    ],
  },
  {
    id: '005',
    status: 'closed',
    title: 'OPÉRATION BEÏTEA',
    description: "Mission de growth hacking pour une marque parisienne de bubble tea — stratégie digitale ciblée, mesurée sur 30 jours.",
    tags: ['Growth Hacking', 'Marketing Digital', 'Analytics', 'Paris'],
    stamp: 'CLASSÉE',
    link: 'https://www.canva.com/design/DAG5tvEoqWE/view',
    embedUrl: 'https://www.canva.com/design/DAG5tvEoqWE/view?embed',
    linkLabel: 'Voir la présentation',
    result: "Rapport de performance livré à la direction — stratégie sur 30 jours documentée.",
    process: [
      {
        num: '01',
        title: 'AUDIT DIGITAL',
        desc: "Analyse complète des canaux d'acquisition : <strong>réseaux sociaux, SEO local</strong>, avis clients, <strong>tunnel de conversion</strong>. Benchmark concurrentiel.",
      },
      {
        num: '02',
        title: 'ANALYSE COMPORTEMENTALE',
        desc: "Étude des comportements clients : <strong>fréquence d'achat</strong>, <strong>profils d'acheteurs types</strong>, pics d'activité. Identification des <strong>leviers sous-exploités</strong>.",
      },
      {
        num: '03',
        title: 'STRATÉGIE & DÉPLOIEMENT',
        desc: "Mise en place de <strong>campagnes d'acquisition digitales</strong> ciblées. Actions concrètes sur les <strong>3 leviers prioritaires</strong> identifiés lors de l'audit.",
      },
      {
        num: '04',
        title: 'MESURE DES RÉSULTATS',
        desc: "Suivi rigoureux sur <strong>30 jours</strong> : <strong>KPIs définis en amont</strong>, mesure des écarts, analyse des actions. Rapport complet remis à la direction.",
      },
    ],
  },
]

// ─── CANVA MODAL ──────────────────────────────────────────────────────────────

function CanvaModal({ embedUrl, title, onClose, directLink }: {
  embedUrl: string; title: string; onClose: () => void; directLink: string
}) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // Fallback si l'iframe ne charge pas en 6s
    const timeout = setTimeout(() => setFailed(true), 6000)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      clearTimeout(timeout)
    }
  }, [onClose])

  return (
    <div className="canva-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="canva-modal" onClick={e => e.stopPropagation()}>
        <div className="canva-modal-header">
          <span className="canva-modal-label">DOSSIER DÉCLASSIFIÉ</span>
          <span className="canva-modal-title">{title}</span>
          <button className="canva-modal-close" onClick={onClose} aria-label="Fermer">✕ FERMER</button>
        </div>
        <div className="canva-modal-body">
          {failed ? (
            <div className="canva-fallback">
              <span className="canva-fallback-text">
                La présentation ne peut pas s&apos;afficher ici.<br />
                Active le partage public sur Canva ou consulte-la directement.
              </span>
              <a href={directLink} target="_blank" rel="noopener noreferrer" className="canva-fallback-btn">
                OUVRIR SUR CANVA →
              </a>
            </div>
          ) : (
            <iframe
              src={embedUrl}
              className="canva-iframe"
              allowFullScreen
              title={title}
              loading="lazy"
              onLoad={() => setFailed(false)}
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

// ─── PROCESS MODAL ────────────────────────────────────────────────────────────

function ProcessModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [showEmbed, setShowEmbed] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  if (showEmbed && project.embedUrl) {
    return <CanvaModal embedUrl={project.embedUrl} title={project.title} directLink={project.link} onClose={() => setShowEmbed(false)} />
  }

  return (
    <div className="process-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="process-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="process-modal-header">
          <div className="process-modal-meta">
            <span className="process-modal-id">AFFAIRE N° {project.id}</span>
            <span className={`process-modal-status ${project.status === 'open' ? 'status-open' : 'status-closed'}`}>
              {project.status === 'open' ? 'EN COURS' : 'CLASSÉE'}
            </span>
          </div>
          <button className="canva-modal-close" onClick={onClose} aria-label="Fermer">✕</button>
        </div>

        <div className="process-modal-title">{project.title}</div>
        <div className="process-modal-tags">
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        {/* Steps */}
        <div className="process-section-label">▶ COMMENT J&apos;AI CONSTRUIT CE PROJET</div>
        <div className="process-steps">
          {project.process.map(step => (
            <div key={step.num} className="process-step">
              <div className="process-step-num">ÉTAPE {step.num}</div>
              <div className="process-step-title">{step.title}</div>
              {/* eslint-disable-next-line react/no-danger */}
              <div className="process-step-desc" dangerouslySetInnerHTML={{ __html: step.desc }} />
            </div>
          ))}
        </div>

        {/* Result */}
        <div className="process-result">
          <span className="process-result-label">RÉSULTAT</span>
          <span className="process-result-text">{project.result}</span>
        </div>

        {/* CTA */}
        {project.embedUrl ? (
          <button className="process-cta" onClick={() => setShowEmbed(true)}>
            {project.linkLabel} &rarr;
          </button>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="process-cta"
          >
            {project.linkLabel} &rarr;
          </a>
        )}

      </div>
    </div>
  )
}

// ─── CASE CARD ────────────────────────────────────────────────────────────────

function CaseCard({
  project, delay, onOpen,
}: { project: Project; delay: number; onOpen: (p: Project) => void }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const ref = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          setTimeout(() => { setPhase('opening'); setTimeout(() => setPhase('revealed'), 900) }, delay)
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
    el.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-2px)`
    el.style.setProperty('--gx', `${x * 100}%`)
    el.style.setProperty('--gy', `${y * 100}%`)
  }, [phase])

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = ''
  }, [])

  return (
    <div
      ref={ref}
      className={`case-file${phase !== 'idle' ? ' case-file-active' : ''}${phase === 'revealed' ? ' case-file-revealed' : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => phase === 'revealed' && onOpen(project)}
      style={{ cursor: phase === 'revealed' ? 'pointer' : 'default' }}
    >
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
            <span className="case-id">AFFAIRE N° {project.id}</span>
            <span className={`case-status ${project.status === 'open' ? 'status-open' : 'status-closed'}`}>
              {project.status === 'open' ? 'EN COURS' : 'CLASSÉE'}
            </span>
          </div>
          <div className="case-title">{project.title}</div>
          <div className="case-description">{project.description}</div>
          <div className="case-footer">
            <div className="case-tags">
              {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <span className="case-link">Ouvrir le dossier &rarr;</span>
          </div>
        </div>

        {phase === 'revealed' && (
          <div className={`case-stamp case-stamp-drop ${project.status === 'open' ? 'stamp-open' : 'stamp-closed'}`}>
            {project.stamp}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const openProject = useCallback((p: Project) => setActiveProject(p), [])
  const closeProject = useCallback(() => setActiveProject(null), [])

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
            <CaseCard key={p.id} project={p} delay={i * 150} onOpen={openProject} />
          ))}
        </div>
      </section>

      {activeProject && (
        <ProcessModal project={activeProject} onClose={closeProject} />
      )}
    </>
  )
}
