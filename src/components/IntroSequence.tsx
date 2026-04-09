'use client'

import { useEffect, useState } from 'react'

export default function IntroSequence() {
  const [phase, setPhase] = useState(0)
  // 0: black+crosshair, 1: title, 2: dossier, 3: classified+scan,
  // 4: authorized, 5: flash-out, 6: gone

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1100),
      setTimeout(() => setPhase(3), 1700),
      setTimeout(() => setPhase(4), 2500),
      setTimeout(() => setPhase(5), 3300),
      setTimeout(() => {
        setPhase(6)
        document.body.style.overflow = ''
      }, 4100),
    ]
    return () => {
      t.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase >= 6) return null

  return (
    <div className={`intro${phase >= 5 ? ' intro-exit' : ''}`} aria-hidden="true">
      <div className="intro-noise" />

      {/* Targeting crosshair — rotates slowly */}
      <svg className="intro-crosshair" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="45" />
        <circle cx="100" cy="100" r="20" />
        <line x1="100" y1="0" x2="100" y2="75" />
        <line x1="100" y1="125" x2="100" y2="200" />
        <line x1="0" y1="100" x2="75" y2="100" />
        <line x1="125" y1="100" x2="200" y2="100" />
        {/* Tick marks */}
        <line x1="100" y1="28" x2="100" y2="35" />
        <line x1="100" y1="165" x2="100" y2="172" />
        <line x1="28" y1="100" x2="35" y2="100" />
        <line x1="165" y1="100" x2="172" y2="100" />
      </svg>

      <div className="intro-center">
        {phase >= 1 && (
          <div className="intro-org">BRIGADE NUMÉRIQUE</div>
        )}
        {phase >= 2 && (
          <div className="intro-dossier">DOSSIER N° GDB-2025</div>
        )}
        {phase >= 3 && (
          <div className="intro-classified">CLASSIFICATION : CONFIDENTIEL</div>
        )}
        {phase === 3 && (
          <div className="intro-scanbar" />
        )}
        {phase >= 4 && (
          <div className="intro-auth">✓ ACCÈS AUTORISÉ</div>
        )}
      </div>

      {/* Corner brackets */}
      <span className="intro-corner intro-c-tl" />
      <span className="intro-corner intro-c-tr" />
      <span className="intro-corner intro-c-bl" />
      <span className="intro-corner intro-c-br" />
    </div>
  )
}
