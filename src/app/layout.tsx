import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DOSSIER #GDB-2025 — Gaspard de Boishebert',
  description: 'Portfolio de Gaspard de Boishebert — Étudiant Bachelor IA, entrepreneur numérique et pilote de drone.',
  openGraph: {
    title: 'DOSSIER #GDB-2025 — Gaspard de Boishebert',
    description: 'IA appliquée aux affaires, automatisation, drone événementiel.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Cutive+Mono&family=Oswald:wght@400;700&family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
