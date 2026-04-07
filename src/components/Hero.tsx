import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <section id="profil" className="hero">
      <div className="crime-tape" aria-hidden="true">
        <div className="crime-tape-text">
          NE PAS FRANCHIR &nbsp;&bull;&nbsp; ZONE CLASSIFIÉE &nbsp;&bull;&nbsp; NE PAS FRANCHIR &nbsp;&bull;&nbsp; ZONE CLASSIFIÉE &nbsp;&bull;&nbsp;
          NE PAS FRANCHIR &nbsp;&bull;&nbsp; ZONE CLASSIFIÉE &nbsp;&bull;&nbsp; NE PAS FRANCHIR &nbsp;&bull;&nbsp; ZONE CLASSIFIÉE &nbsp;&bull;&nbsp;
        </div>
      </div>

      <div className="hero-content">
        <div className="dossier-header">

          <div className="dossier-photo-wrap">
            <div className="pin" />
            <div className="dossier-photo">
              <span className="photo-initials">GDB</span>
              <div className="photo-label">SUJET IDENTIFIÉ</div>
            </div>
          </div>

          <div className="dossier-info" style={{ position: 'relative' }}>
            <div className="stamp-container">
              <div className="stamp">ACTIF</div>
            </div>

            <div className="case-number">DOSSIER N° GDB-2025 &nbsp;//&nbsp; CONFIDENTIEL</div>
            <h1 className="suspect-name">
              Gaspard<br />de Boishebert
            </h1>
            <p className="suspect-alias">ALIAS : &ldquo;L&apos;ARCHITECTE DE L&apos;IA&rdquo;</p>

            <div className="info-grid">
              <span className="info-label">Âge</span>
              <span className="info-value">18 ans</span>

              <span className="info-label">Statut</span>
              <Typewriter />

              <span className="info-label">Base opérationnelle</span>
              <span className="info-value">Eugenia School &mdash; Paris</span>

              <span className="info-label">Spécialité</span>
              <span className="info-value">IA Appliquée aux Affaires</span>

              <span className="info-label">Activités déclarées</span>
              <span className="info-value">
                Pilote de drone &mdash;{' '}
                <span className="redacted" title="révéler">Entrepreneuriat</span>
              </span>

              <span className="info-label">Niveau de menace</span>
              <span className="info-value" style={{ color: 'var(--amber)' }}>
                ⬛⬛⬛⬜⬜ ÉLEVÉ
              </span>
            </div>
          </div>
        </div>

        <div className="hero-bio fade-in">
          <p>
            Le sujet est un individu de 18 ans, dont les activités gravitent autour de l&apos;intelligence
            artificielle et de l&apos;entrepreneuriat numérique. Ses investigations personnelles l&apos;ont
            conduit à maîtriser des outils d&apos;automatisation avancés et à développer plusieurs opérations
            à fort impact commercial. Sa capacité à combiner technologie de pointe et vision stratégique
            le classe parmi les profils les plus intéressants de sa génération. Par ailleurs, une passion
            déclarée pour les drones — exercée depuis plus de 3 ans — laisse supposer un intérêt prononcé
            pour la surveillance et l&apos;exploration de terrain.
          </p>
        </div>
      </div>
    </section>
  )
}
