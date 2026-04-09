'use client'

import { useEffect, useRef, useState } from 'react'

export default function Surveillance() {
  const [time, setTime] = useState('')
  const frameRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  // Frame counter — update DOM directly to avoid React re-renders
  useEffect(() => {
    let f = 0
    const id = setInterval(() => {
      f++
      if (frameRef.current) {
        frameRef.current.textContent = `F:${String(f).padStart(6, '0')}`
      }
    }, 33)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="surv" aria-hidden="true">
      <div className="surv-rec">
        <span className="surv-dot" />
        REC
      </div>
      <div className="surv-time">{time}</div>
      <div className="surv-cam">CAM-01 // SURVEILLANCE ACTIVE</div>
      <span className="surv-frame" ref={frameRef}>F:000000</span>
      <div className="surv-lines" />
    </div>
  )
}
