import Image from 'next/image'
import Typewriter from './Typewriter'
import BoardBio from './BoardBio'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="scan-line" aria-hidden="true" />
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
              <Image
                src="/photo.jpg"
                alt="Gaspard de Boishebert"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(20%) contrast(1.05)' }}
                priority
              />
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

        <BoardBio />
      </div>
    </section>
  )
}
