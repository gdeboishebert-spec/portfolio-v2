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
    linkLabel: 'Voir la présentation',
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
              <div className="case-footer">
                <div className="case-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-link"
                >
                  {p.linkLabel} &rarr;
                </a>
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
