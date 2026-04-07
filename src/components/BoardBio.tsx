const notes = [
  { label: 'IA GÉNÉRATIVE',    left: 38, top: 28, rot: -2 },
  { label: 'AUTOMATISATION',   left:  3, top: 50, rot:  3 },
  { label: 'DRONE · 3 ANS',    left: 71, top:  6, rot: -4 },
  { label: 'ENTREPRENEUR',     left: 20, top:  4, rot:  2 },
  { label: 'NEXT.JS',          left: 67, top: 56, rot: -3 },
  { label: 'DATA & ANALYTICS', left:  5, top: 68, rot:  4 },
  { label: 'MAKE · GEMINI',    left: 51, top:  4, rot: -1 },
  { label: 'PARIS · 18 ANS',   left: 80, top: 68, rot:  2 },
]

// [x1, y1, x2, y2] — centres approximatifs des notes en %
const strings = [
  [46, 36, 11, 57],   // IA → AUTOMATISATION
  [46, 36, 28, 11],   // IA → ENTREPRENEUR
  [46, 36, 59, 11],   // IA → MAKE·GEMINI
  [79, 13, 75, 63],   // DRONE → NEXT.JS
  [13, 75, 11, 57],   // DATA → AUTOMATISATION
  [28, 11, 59, 11],   // ENTREPRENEUR → MAKE·GEMINI
  [79, 13, 88, 75],   // DRONE → PARIS
  [75, 63, 88, 75],   // NEXT.JS → PARIS
]

export default function BoardBio() {
  return (
    <div className="board-bio" aria-label="Tableau de preuves — compétences clés">

      {/* Fils rouges */}
      <svg className="board-strings" viewBox="0 0 100 100" preserveAspectRatio="none">
        {strings.map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#c0392b"
            strokeWidth="0.5"
            opacity="0.75"
          />
        ))}
      </svg>

      {/* Notes */}
      {notes.map((n, i) => (
        <div
          key={i}
          className="board-note"
          style={{ left: `${n.left}%`, top: `${n.top}%`, transform: `rotate(${n.rot}deg)` }}
        >
          <div className="board-pin" />
          {n.label}
        </div>
      ))}
    </div>
  )
}
