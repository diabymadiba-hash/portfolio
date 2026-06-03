# Portfolio — Diaby Madiba

Portfolio personnel de développeur web full-stack junior, conçu pour présenter mes projets, mes compétences et mon parcours.

## Demo

> [Lien à compléter](https://your-demo-url.com)

## Aperçu

- Navigation fluide avec défilement doux entre les sections
- Animations à l'entrée des sections (Intersection Observer)
- Design responsive mobile-first
- Sections : Accueil, À propos, Compétences, Projets, Contact

## Technologies

| Outil | Rôle |
|---|---|
| [React 18](https://react.dev/) | UI / composants |
| [Vite 6](https://vitejs.dev/) | Build & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Styles utilitaires |
| [react-scroll](https://github.com/fisshy/react-scroll) | Navigation par ancres |
| [react-icons](https://react-icons.github.io/react-icons/) | Icônes |

## Installation

**Prérequis :** Node.js 18+ et npm

```bash
# 1. Cloner le dépôt
git clone https://github.com/diaby-madiba/mon-portfolio.git
cd mon-portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application est accessible sur `http://localhost:5173`.

## Scripts

```bash
npm run dev      # Serveur de développement avec hot reload
npm run build    # Build de production dans /dist
npm run preview  # Prévisualiser le build de production
```

## Structure

```
mon-portfolio/
├── public/
│   └── avatar.jpg.jfif       # Photo de profil
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## Contact

**Diaby Madiba** — [diaby.madiba@hotmail.fr](mailto:diaby.madiba@hotmail.fr)
