export default function Contact() {
  return (
    <div id="contact" className="contact-bg section-full">
      <div className="section-full-inner">
        <div className="section-header">
          <span className="section-number">§ 05</span>
          <h2 className="section-title">Entrer en Contact</h2>
          <div className="section-line" />
        </div>

        <div className="contact-grid">
          <a className="contact-item fade-in" href="mailto:gdeboishebert@eugeniaschool.com">
            <div className="contact-label">Canal Sécurisé</div>
            <div className="contact-value">
              gdeboishebert@<br />eugeniaschool.com
            </div>
          </a>
          <a
            className="contact-item fade-in"
            href="https://www.linkedin.com/in/gaspard-de-boishebert-1a4579283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-label">Réseau d&apos;Informateurs</div>
            <div className="contact-value">LinkedIn &rarr;</div>
          </a>
        </div>

        <div className="contact-note fade-in">
          ⚠ AVERTISSEMENT : Toute tentative de contact doit être effectuée via les canaux officiels
          ci-dessus. Les transmissions non sollicitées seront traitées comme preuves potentielles.
        </div>
      </div>
    </div>
  )
}
