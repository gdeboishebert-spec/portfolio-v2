'use client'

import { useEffect, useRef, useState } from 'react'
import type { IconType } from 'react-icons'
import {
  SiGooglegemini,
  SiMake,
  SiMistralai,
  SiPostgresql,
  SiGooglesheets,
  SiGithub,
  SiLooker,
  SiDrone,
} from 'react-icons/si'

type Phase = 'idle' | 'scanning' | 'done'

const skills: { num: string; Icon: IconType; name: string; level: number; label: string }[] = [
  { num: '001', Icon: SiGooglegemini,  name: 'Google Gemini',    level: 90, label: 'MAÎTRISE CONFIRMÉE' },
  { num: '002', Icon: SiMake,          name: 'Make (Integromat)', level: 85, label: 'MAÎTRISE CONFIRMÉE' },
  { num: '003', Icon: SiMistralai,     name: 'Mistral AI',        level: 80, label: 'OPÉRATIONNEL' },
  { num: '004', Icon: SiPostgresql,    name: 'SQL / PostgreSQL',  level: 75, label: 'OPÉRATIONNEL' },
  { num: '005', Icon: SiGooglesheets,  name: 'Google Sheets',     level: 88, label: 'MAÎTRISE CONFIRMÉE' },
  { num: '006', Icon: SiDrone,         name: 'Pilotage Drone',    level: 92, label: 'EXPERT — 3+ ANS' },
  { num: '007', Icon: SiGithub,        name: 'GitHub',            level: 78, label: 'OPÉRATIONNEL' },
  { num: '008', Icon: SiLooker,        name: 'Looker Studio',     level: 72, label: 'OPÉRATIONNEL' },
]

function SkillCard({
  num, Icon, name, level, label, delay,
}: {
  num: string; Icon: IconType; name: string
  level: number; label: string; delay: number
}) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [barWidth, setBarWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          setTimeout(() => {
            setPhase('scanning')
            setTimeout(() => {
              setBarWidth(level)
              setTimeout(() => setPhase('done'), 1100)
            }, 650)
          }, delay)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay, level])

  return (
    <div
      ref={ref}
      className={`evidence-card${phase !== 'idle' ? ' card-active' : ''}`}
      data-num={num}
    >
      {phase === 'scanning' && <div className="card-scan-line" aria-hidden="true" />}
      <span className="evidence-icon"><Icon /></span>
      <div className="evidence-name">{name}</div>
      <div className="evidence-bar-track">
        <div className="evidence-bar-fill" style={{ width: `${barWidth}%` }} />
      </div>
      <div className={`evidence-level${phase === 'scanning' ? ' level-blink' : ''}`}>
        {phase === 'idle'     ? '\u00a0'             : null}
        {phase === 'scanning' ? 'ANALYSE EN COURS...' : null}
        {phase === 'done'     ? label                : null}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div id="preuves" className="skills-bg section-full">
      <div className="section-full-inner">
        <div className="section-header">
          <span className="section-number">§ 02</span>
          <h2 className="section-title">Tableau des Preuves</h2>
          <div className="section-line" />
        </div>

        <div className="board">
          {skills.map((s, i) => (
            <SkillCard key={s.num} {...s} delay={i * 120} />
          ))}
        </div>
      </div>
    </div>
  )
}
