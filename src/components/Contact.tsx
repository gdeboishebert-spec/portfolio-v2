'use client'

import { useEffect, useRef, useState } from 'react'

type Phase = 'idle' | 'init' | 'verify' | 'granted' | 'done'
type SendState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [sendState, setSendState] = useState<SendState>('idle')
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [errorMsg, setErrorMsg] = useState('')
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSendState('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSendState('success')
        setForm({ nom: '', email: '', sujet: '', message: '' })
      } else {
        const data = await res.json()
        setErrorMsg(data.error || 'Erreur lors de l\'envoi')
        setSendState('error')
      }
    } catch {
      setErrorMsg('Connexion impossible')
      setSendState('error')
    }
  }

  return (
    <div id="contact" className="contact-bg section-full" ref={ref}>
      <div className="section-full-inner">
        <div className="section-header">
          <span className="section-number">§ 05</span>
          <h2 className="section-title">Entrer en Contact</h2>
          <div className="section-line" />
        </div>

        {/* Terminal animation */}
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
                      <div className="terminal-progress"><div className="terminal-progress-fill" /></div>
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

        {/* Liens rapides */}
        <div className={`contact-grid${phase === 'done' ? ' contact-revealed' : ''}`}>
          <a className="contact-item" href="mailto:gasparddeboishebert@gmail.com">
            <div className="contact-label">Email Personnel</div>
            <div className="contact-value">gasparddeboishebert<br />@gmail.com</div>
          </a>
          <a
            className="contact-item"
            href="https://www.linkedin.com/in/gaspard-de-boishebert-1a4579283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-label">Réseau d&apos;Informateurs</div>
            <div className="contact-value">LinkedIn &rarr;</div>
          </a>
        </div>

        {/* Formulaire */}
        <div className={`contact-form-wrap${phase === 'done' ? ' contact-revealed' : ''}`}>
          <div className="contact-form-header">
            <span className="contact-form-label">▶ TRANSMISSION SÉCURISÉE</span>
          </div>

          {sendState === 'success' ? (
            <div className="contact-success">
              <span className="contact-success-icon">✓</span>
              <div className="contact-success-title">MESSAGE TRANSMIS</div>
              <div className="contact-success-sub">Dossier enregistré — réponse sous 48h.</div>
              <button className="contact-success-reset" onClick={() => setSendState('idle')}>
                Nouveau message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label className="contact-field-label" htmlFor="nom">NOM COMPLET</label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    className="contact-input"
                    placeholder="Votre nom"
                    value={form.nom}
                    onChange={handleChange}
                    required
                    disabled={sendState === 'sending'}
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-field-label" htmlFor="email">EMAIL</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact-input"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={sendState === 'sending'}
                  />
                </div>
              </div>

              <div className="contact-field">
                <label className="contact-field-label" htmlFor="sujet">OBJET DE LA TRANSMISSION</label>
                <select
                  id="sujet"
                  name="sujet"
                  className="contact-input contact-select"
                  value={form.sujet}
                  onChange={handleChange}
                  required
                  disabled={sendState === 'sending'}
                >
                  <option value="">Sélectionner...</option>
                  <option value="Opportunité professionnelle">Opportunité professionnelle</option>
                  <option value="Stage / Alternance">Stage / Alternance</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Projet drone">Projet drone</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="contact-field">
                <label className="contact-field-label" htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-input contact-textarea"
                  placeholder="Votre message..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={sendState === 'sending'}
                />
              </div>

              {sendState === 'error' && (
                <div className="contact-error">⚠ {errorMsg}</div>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={sendState === 'sending'}
              >
                {sendState === 'sending' ? 'TRANSMISSION EN COURS...' : 'ENVOYER LE MESSAGE →'}
              </button>
            </form>
          )}
        </div>

        <div className={`contact-note${phase === 'done' ? ' contact-revealed' : ''}`}>
          ⚠ AVERTISSEMENT : Toute tentative de contact doit être effectuée via les canaux officiels
          ci-dessus. Les transmissions non sollicitées seront traitées comme preuves potentielles.
        </div>
      </div>
    </div>
  )
}
