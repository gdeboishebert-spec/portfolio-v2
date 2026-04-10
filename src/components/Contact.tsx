'use client'

import { useEffect, useRef, useState } from 'react'

type Phase = 'idle' | 'init' | 'verify' | 'granted' | 'done'

export default function Contact() {
  const [phase, setPhase] = useState<Phase>('idle')
  const ref = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !triggered.current) {
          triggered.current = true
          setPhase('init')
          setTimeout(() => setPhase('verify'), 900)
          setTimeout(() => setPhase('granted'), 2000)
          setTimeout(() => setPhase('done'), 2800)
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div id="contact" className="contact-bg section-full" ref={ref}>
      <div className="section-full-inner">
        <div className="section-header">
          <span className="section-number">§ 05</span>
          <h2 className="section-title">Entrer en Contact</h2>
          <div className="section-line" />
        </div>

        {/* Terminal access animation */}
        {phase !== 'idle' && phase !== 'done' && (
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-r" />
              <span className="terminal-dot terminal-dot-y" />
              <span className="terminal-dot terminal-dot-g" />
              <span className="terminal-title">SECURE_CHANNEL.exe</span>
            </div>
            <div className="terminal-body">
              {phase === 'init' && (
                <div className="terminal-line">
                  <span className="terminal-prompt">&gt;_</span>
                  <span className="terminal-typing">INITIALISATION CANAL SÉCURISÉ...</span>
                </div>
              )}
              {(phase === 'verify' || phase === 'granted') && (
                <>
                  <div className="terminal-line terminal-ok">
                    &gt; INITIALISATION CANAL SÉCURISÉ... <span className="t-green">OK</span>
                  </div>
                  {phase === 'verify' && (
                    <div className="terminal-line">
                      <span className="terminal-prompt">&gt;_</span>
                      <span className="terminal-typing">VÉRIFICATION IDENTITÉ...</span>
                      <div className="terminal-progress">
                        <div className="terminal-progress-fill" />
                      </div>
                    </div>
                  )}
                  {phase === 'granted' && (
                    <>
                      <div className="terminal-line terminal-ok">
                        &gt; VÉRIFICATION IDENTITÉ... <span className="t-green">OK</span>
                      </div>
                      <div className="terminal-line terminal-auth">
                        ✓ ACCÈS RÉSEAU AUTORISÉ — CANAUX OUVERTS
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        <div className={`contact-grid${phase === 'done' ? ' contact-revealed' : ''}`}>
          <a className="contact-item" href="mailto:gasparddeboishebert@gmail.com">
            <div className="contact-label">Email Personnel</div>
            <div className="contact-value">
              gasparddeboishebert<br />@gmail.com
            </div>
          </a>
          <
            className="contact-item"
            href="https://www.linkedin.com/in/gaspard-de-boishebert-1a4579283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-label">Réseau d&apos;Informateurs</div>
            <div className="contact-value">LinkedIn &rarr;</div>
          </a>
        </div>

        <div className={`contact-note${phase === 'done' ? ' contact-revealed' : ''}`}>
          ⚠ AVERTISSEMENT : Toute tentative de contact doit être effectuée via les canaux officiels
          ci-dessus. Les transmissions non sollicitées seront traitées comme preuves potentielles.
        </div>
      </div>
    </div>
  )
}
