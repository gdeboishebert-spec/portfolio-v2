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
              {/* Polaroid developing overlay */}
              <div className="photo-develop" aria-hidden="true" />
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

            <div className="op-file">
              <div className="op-file-header">
                <span className="op-file-tag">▶ DONNÉES OPÉRATEUR</span>
                <span className="op-file-id">GDB-2025-A</span>
              </div>

              <div className="op-row" style={{ animationDelay: '0.05s' }}>
                <span className="op-code">F-01</span>
                <span className="op-label">ÂGE</span>
                <span className="op-sep" />
                <span className="op-value">18 ANS</span>
              </div>

              <div className="op-row" style={{ animationDelay: '0.1s' }}>
                <span className="op-code">F-02</span>
                <span className="op-label">STATUT</span>
                <span className="op-sep" />
                <Typewriter />
              </div>

              <div className="op-row" style={{ animationDelay: '0.15s' }}>
                <span className="op-code">F-03</span>
                <span className="op-label">BASE OPS.</span>
                <span className="op-sep" />
                <span className="op-value">Eugenia School &mdash; Paris</span>
              </div>

              <div className="op-row" style={{ animationDelay: '0.2s' }}>
                <span className="op-code">F-04</span>
                <span className="op-label">SPÉCIALITÉ</span>
                <span className="op-sep" />
                <span className="op-value">IA Appliquée aux Affaires</span>
              </div>

              <div className="op-row" style={{ animationDelay: '0.25s' }}>
                <span className="op-code">F-05</span>
                <span className="op-label">ACTIVITÉS</span>
                <span className="op-sep" />
                <span className="op-value">
                  LVMH &mdash; Loon Agency &mdash; <span className="redacted" title="révéler">Drone Freelance</span>
                </span>
              </div>

              <div className="op-row op-row-threat" style={{ animationDelay: '0.3s' }}>
                <span className="op-code">F-06</span>
                <span className="op-label">MENACE</span>
                <span className="op-sep" />
                <div className="op-threat">
                  <div className="op-stars">
                    {[1,2,3,4,5].map(i => (
                      <svg
                        key={i}
                        className={`sheriff-star${i <= 3 ? ' star-on' : ''}`}
                        viewBox="0 0 100 100"
                        style={{ animationDelay: `${0.4 + i * 0.18}s` }}
                        aria-hidden="true"
                      >
                        {/* Outer 6-pointed sheriff badge star */}
                        <polygon className="star-bg" points="50,2 61,35 95,35 67,57 79,93 50,72 21,93 33,57 5,35 39,35" />
                        <polygon className="star-fill" points="50,2 61,35 95,35 67,57 79,93 50,72 21,93 33,57 5,35 39,35" />
                        {/* Center badge circle */}
                        <circle className="star-badge-circle" cx="50" cy="52" r="12" />
                      </svg>
                    ))}
                  </div>
                  <span className="op-threat-label">ÉLEVÉ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BoardBio />
      </div>
    </section>
  )
}
