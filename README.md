# Portfolio — Gaspard de Boishebert

Portfolio personnel développé avec **Next.js 16** (App Router) et **TypeScript**.

Thème visuel "dossier d'enquête" : typographies machine à écrire, effet lampe torche, crime tape animée.

## Stack technique

- **Framework** : Next.js 16 (App Router, rendu statique)
- **Langage** : TypeScript
- **Style** : CSS global avec variables custom (pas de framework CSS)
- **Déploiement** : Vercel

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx        # Layout racine — métadonnées, fonts, lang
│   ├── globals.css       # Styles globaux et variables CSS
│   └── page.tsx          # Page principale
└── components/
    ├── Nav.tsx            # Navigation fixe + menu hamburger mobile
    ├── Hero.tsx           # Section profil / dossier
    ├── Typewriter.tsx     # Effet machine à écrire (client)
    ├── Skills.tsx         # Tableau des preuves — compétences (client)
    ├── Projects.tsx       # Affaires classées — projets
    ├── Timeline.tsx       # Historique opérationnel — parcours
    ├── Contact.tsx        # Canaux de contact
    ├── Footer.tsx         # Pied de page
    ├── Flashlight.tsx     # Effet lampe torche au curseur (client)
    └── FadeObserver.tsx   # Animations au scroll — IntersectionObserver (client)
```

## Lancer en local

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Fonctionnalités

- Effet lampe torche suivant le curseur
- Typewriter animé avec rotation de phrases
- Barres de compétences animées au scroll
- Menu hamburger responsive
- Animations fade-in à l'entrée dans le viewport
- Respect de `prefers-reduced-motion`
- Métadonnées Open Graph pour le partage
