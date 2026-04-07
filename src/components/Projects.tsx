const projects = [
  {
    id: '001',
    status: 'open',
    title: 'OPÉRATION PLAYCONNECT',
    description:
      "Développement d'une application de mise en réseau social sportif. L'objectif : connecter les sportifs amateurs entre eux et faciliter l'organisation de matchs improvisés. Une infrastructure sociale à fort potentiel de croissance, sous surveillance active.",
    tags: ['Social', 'Sport', 'App Mobile', 'Networking'],
    stamp: 'ACTIF',
  },
  {
    id: '002',
    status: 'closed',
    title: 'OPÉRATION BEÏTEA',
    description:
      "Mission de growth hacking conduite pour une marque parisienne de bubble tea. Infiltration des canaux digitaux, analyse des comportements d'achat, déploiement de stratégies d'acquisition ciblées. Résultats obtenus, dossier archivé.",
    tags: ['Growth Hacking', 'Marketing Digital', 'Paris'],
    stamp: 'CLASSÉE',
  },
  {
    id: '003',
    status: 'open',
    title: 'OPÉRATION EULEXIS',
    description:
      "Développement d'une application fitness alimentée par l'intelligence artificielle, capable de générer des programmes personnalisés selon le profil biométrique de l'utilisateur. Technologie de pointe, données sensibles, accès restreint.",
    tags: ['IA', 'Fitness', 'Personnalisation', 'App'],
    stamp: 'ACTIF',
  },
  {
    id: '004',
    status: 'closed',
    title: 'OPÉRATION CONCESSION',
    description:
      "Conception et déploiement d'un système de gestion de base de données pour un réseau de concessions automobiles. Architecture SQL, structuration des flux de données, interface de consultation. Système opérationnel, mission accomplie.",
    tags: ['SQL', 'PostgreSQL', 'Base de données', 'Automobile'],
    stamp: 'CLASSÉE',
  },
  {
    id: '005',
    status: 'closed',
    title: 'OPÉRATION SÉZANE SECONDE MAIN',
    description:
      "Extension de marque stratégique pour Sézane, orientée vers le marché de la mode de seconde main. Analyse de positionnement, étude de faisabilité et élaboration d'un plan de lancement. Rapport confidentiel remis aux commanditaires.",
    tags: ['Mode', 'Stratégie', 'Durabilité', 'Brand'],
    stamp: 'CLASSÉE',
  },
  {
    id: '006',
    status: 'open',
    title: 'OPÉRATION DRONE EVENTS',
    description:
      "Création d'un site professionnel sous Next.js pour une activité de services drone événementiels. Vitrine commerciale, galerie de missions, formulaire de contact sécurisé. Activité déclarée — surveillance en cours par la brigade.",
    tags: ['Next.js', 'Drone', 'Événementiel', 'Freelance'],
    stamp: 'ACTIF',
  },
]

export default function Projects() {
  return (
    <section id="affaires" className="section">
      <div className="section-header">
        <span className="section-number">§ 03</span>
        <h2 className="section-title">Affaires Classées &amp; En Cours</h2>
        <div className="section-line" />
      </div>

      <div className="cases-grid">
        {projects.map(p => (
          <div key={p.id} className="case-file fade-in">
            <div className="case-bar" />
            <div className="case-content">
              <div className="case-meta">
                <span className="case-id">AFFAIRE N° {p.id}</span>
                <span className={`case-status ${p.status === 'open' ? 'status-open' : 'status-closed'}`}>
                  {p.status === 'open' ? 'EN COURS' : 'CLASSÉE'}
                </span>
              </div>
              <div className="case-title">{p.title}</div>
              <div className="case-description">{p.description}</div>
              <div className="case-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className={`case-stamp ${p.status === 'open' ? 'stamp-open' : 'stamp-closed'}`}>
                {p.stamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
