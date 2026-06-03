import { useEffect, useRef, useState } from 'react'
import { FiLayers, FiServer, FiTool } from 'react-icons/fi'

const categories = [
  {
    icon: FiLayers,
    title: 'Front-End',
    skills: [
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 82 },
      { name: 'React', level: 78 },
      { name: 'Tailwind CSS / Sass', level: 75 },
      { name: 'Accessibilité & SEO', level: 70 },
    ],
  },
  {
    icon: FiServer,
    title: 'Back-End',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB / Mongoose', level: 68 },
      { name: 'API RESTful & JWT', level: 72 },
      { name: 'Multer (upload fichiers)', level: 60 },
    ],
  },
  {
    icon: FiTool,
    title: 'Outils & Méthodes',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Vite / Webpack', level: 72 },
      { name: 'Méthode Agile / Scrum', level: 68 },
      { name: 'Débogage & DevTools', level: 78 },
      { name: 'Figma (bases)', level: 50 },
    ],
  },
]

function SkillBar({ name, level, visible }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-700 text-sm font-medium">{name}</span>
        <span className="text-accent text-xs font-mono font-semibold">{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
        <div
          className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28 px-6 bg-gray-50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Ce que je sais faire</p>
          <h2 className="section-title">Compétences</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glass-card p-7 hover:border-accent/30 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <cat.icon className="text-accent" size={18} />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} visible={visible} />
              ))}
            </div>
          ))}
        </div>

        <div
          className={`mt-8 glass-card p-6 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-center text-gray-400 text-xs mb-5 font-semibold uppercase tracking-widest">
            Stack & technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React', 'React Router',
              'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Multer',
              'Tailwind CSS', 'Sass', 'Vite', 'Git', 'GitHub', 'Agile / Scrum',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-indigo-50 border border-indigo-100 text-accent text-sm rounded-lg font-mono hover:bg-indigo-100 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
