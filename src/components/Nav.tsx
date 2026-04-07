'use client'

import { useState } from 'react'

const links = [
  { href: '#profil', label: 'Profil' },
  { href: '#preuves', label: 'Preuves' },
  { href: '#affaires', label: 'Affaires' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

const NAV_HEIGHT = 56

function scrollTo(id: string) {
  const target = document.querySelector(id)
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  const handleClick = (href: string) => {
    setOpen(false)
    scrollTo(href)
  }

  return (
    <>
      <nav className="nav">
        <span className="nav-badge">BRIGADE NUMÉRIQUE &mdash; DOSSIER GDB-2025</span>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => { e.preventDefault(); handleClick(l.href) }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-status">
          <div className="pulse-dot" />
          DOSSIER ACTIF
        </div>
        <button
          className={`nav-hamburger${open ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-mobile${open ? ' open' : ''}`} aria-hidden={!open}>
        <ul>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => { e.preventDefault(); handleClick(l.href) }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
