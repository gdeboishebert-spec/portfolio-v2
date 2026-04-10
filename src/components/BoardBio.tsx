type NodeType = 'center' | 'branch' | 'leaf'

interface BoardNode {
  label: string
  left: number
  top: number
  rot: number
  type?: NodeType
}

const nodes: BoardNode[] = [
  // ── CENTRE ──────────────────────────────────────────
  { label: 'GDB',              left: 47, top: 36, rot:  0, type: 'center' },

  // ── BRANCHES PRINCIPALES ─────────────────────────────
  { label: 'COMPÉTENCES',      left: 13, top:  9, rot: -1, type: 'branch' },
  { label: 'PROJETS',          left: 72, top:  7, rot:  2, type: 'branch' },
  { label: 'CONTACT',          left: 56, top: 70, rot: -1, type: 'branch' },

  // ── COMPÉTENCES ──────────────────────────────────────
  { label: 'IA GÉNÉRATIVE',    left:  2, top: 25, rot: -2 },
  { label: 'MAKE · GEMINI',    left:  1, top: 44, rot:  3 },
  { label: 'NEXT.JS',          left:  3, top: 62, rot: -1 },
  { label: 'DATA & ANALYTICS', left: 15, top: 77, rot:  4 },

  // ── PROJETS ──────────────────────────────────────────
  { label: 'EULEXIS',          left: 83, top: 16, rot: -3 },
  { label: 'DRONE EVENTS',     left: 82, top: 36, rot:  2 },
  { label: 'PLAYCONNECT',      left: 73, top: 56, rot: -2 },

  // ── CONTACT ──────────────────────────────────────────
  { label: 'LINKEDIN',         left: 41, top: 80, rot: -1 },
  { label: 'EMAIL',            left: 56, top: 87, rot:  2 },
  { label: 'GITHUB',           left: 70, top: 79, rot: -1 },
]

// [x1, y1, x2, y2] — centres approximatifs des nœuds (en %)
const strings: [number, number, number, number][] = [
  // GDB → branches
  [51, 39, 22, 12],   // → COMPÉTENCES
  [51, 39, 80, 10],   // → PROJETS
  [51, 39, 64, 73],   // → CONTACT
  // COMPÉTENCES → sub-nœuds
  [22, 12,  9, 28],   // → IA GÉNÉRATIVE
  [22, 12,  8, 47],   // → MAKE · GEMINI
  [22, 12,  8, 65],   // → NEXT.JS
  [22, 12, 24, 80],   // → DATA & ANALYTICS
  // PROJETS → sub-nœuds
  [80, 10, 88, 19],   // → EULEXIS
  [80, 10, 89, 39],   // → DRONE EVENTS
  [80, 10, 79, 59],   // → PLAYCONNECT
  // CONTACT → sub-nœuds
  [64, 73, 50, 83],   // → LINKEDIN
  [64, 73, 63, 90],   // → EMAIL
  [64, 73, 76, 82],   // → GITHUB
]

export default function BoardBio() {
  return (
    <div className="board-bio" aria-label="Tableau de connexions — profil GDB">

      {/* Fils rouges */}
      <svg className="board-strings" viewBox="0 0 100 100" preserveAspectRatio="none">
        {strings.map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#c0392b"
            strokeWidth="0.45"
            opacity="0.72"
          />
        ))}
      </svg>

      {/* Nœuds */}
      {nodes.map((n, i) => (
        <div
          key={i}
          className={[
            'board-note',
            n.type === 'center' ? 'board-note--center' : '',
            n.type === 'branch' ? 'board-note--branch' : '',
          ].filter(Boolean).join(' ')}
          style={{
            left: `${n.left}%`,
            top: `${n.top}%`,
            transform: `rotate(${n.rot}deg)`,
          }}
        >
          <div className={`board-pin${n.type === 'center' ? ' board-pin--gold' : ''}`} />
          {n.label}
        </div>
      ))}
    </div>
  )
}
