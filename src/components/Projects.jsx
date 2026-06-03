import { useEffect, useRef, useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    number: '01',
    title: 'Page d\'accueil — Agence de voyage',
    description:
      'Intégration complète d\'une page d\'accueil pour une agence de voyage en HTML et CSS purs. Mise en page responsive, utilisation de Flexbox et Grid, respect des maquettes Figma fournies.',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive'],
    github: 'https://github.com/diabymadiba-hash/Projet-1-page-d-accueil-agences-de-voyage-avec-html-et-css',
    demo: null,
    featured: false,
  },
  {
    number: '02',
    title: 'Portfolio architecte — Sophie Bluel',
    description:
      'Développement de la partie dynamique d\'un site portfolio d\'architecte. Manipulation du DOM en JavaScript vanilla, appels Fetch API, modal de connexion et gestion des œuvres via une API REST.',
    tags: ['JavaScript', 'DOM', 'Fetch API', 'HTML/CSS', 'API REST'],
    github: 'https://github.com/diabymadiba-hash/Portfolio-architecte-sophie-bluel-master',
    demo: null,
    featured: true,
  },
  {
    number: '03',
    title: 'Nina Carducci — Débogage & SEO',
    description:
      'Débogage et optimisation d\'un site de photographe : correction d\'erreurs JavaScript, amélioration des performances Lighthouse, référencement SEO et accessibilité. Ajout de métadonnées Schema.org.',
    tags: ['JavaScript', 'SEO', 'Lighthouse', 'Accessibilité', 'Schema.org', 'Debugging'],
    github: 'https://github.com/diabymadiba-hash/Nina-Carducci-Dev-master',
    demo: null,
    featured: false,
  },
  {
    number: '04',
    title: 'Kasa — Application React',
    description:
      'Développement d\'une application web de location immobilière. Routing avec React Router, composants réutilisables (carrousel, collapse), données JSON et design fidèle aux maquettes Figma.',
    tags: ['React', 'React Router', 'Sass', 'JavaScript', 'Vite'],
    github: 'https://github.com/diabymadiba-hash/Kasa',
    demo: null,
    featured: true,
  },
  {
    number: '05',
    title: 'Back-end — Site de notation de livres',
    description:
      'Développement du back-end complet d\'un site de notation de livres : API RESTful avec Express, authentification sécurisée JWT, base de données MongoDB/Mongoose et upload d\'images avec Multer.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Multer', 'API REST'],
    github: 'https://github.com/diabymadiba-hash/Back-end-d-un-site-de-notation-de-livres',
    demo: null,
    featured: true,
  },
  {
    number: '06',
    title: 'Planification développement client',
    description:
      'Planification du développement d\'un site client selon la méthode Agile : rédaction de user stories, découpage en sprints, tableau Kanban et présentation de la roadmap au client.',
    tags: ['Agile', 'Scrum', 'Kanban', 'User Stories', 'Gestion de projet'],
    github: 'https://github.com/diabymadiba-hash/Planifiez-le-developpement-du-site-de-votre-client',
    demo: null,
    featured: false,
  },
]

function ProjectCard({ project, index, visible }) {
  return (
    <div
      className={`glass-card p-6 flex flex-col group hover:border-accent/40 hover:shadow-md transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${project.featured ? 'border-accent/20' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="font-mono text-3xl font-bold text-gray-100 select-none leading-none">
          {project.number}
        </span>
        {project.featured && (
          <span className="px-2.5 py-1 bg-indigo-50 text-accent text-xs font-semibold rounded-md border border-indigo-100">
            Projet clé
          </span>
        )}
      </div>

      <h3 className="text-gray-900 font-bold text-base mb-3 group-hover:text-accent transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-md font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm font-medium transition-colors"
        >
          <FiGithub size={15} />
          Voir le code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm font-medium transition-colors"
          >
            <FiExternalLink size={15} />
            Démo live
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-28 px-6 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Parcours OpenClassrooms</p>
          <h2 className="section-title">Projets réalisés</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-6 max-w-lg mx-auto">
            Six projets concrets réalisés durant ma formation Développeur Web — de
            l'intégration HTML/CSS jusqu'au développement full-stack React + Node.js.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} visible={visible} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/diabymadiba-hash"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiGithub size={17} />
            Voir tous mes dépôts sur GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
