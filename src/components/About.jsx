import { useEffect, useRef, useState } from 'react'
import { FiMapPin, FiCode, FiBook, FiCoffee } from 'react-icons/fi'

const facts = [
  { icon: FiMapPin, label: 'Localisation', value: 'Tourcoing, Nord (59)' },
  { icon: FiCode, label: 'Spécialité', value: 'Full-Stack JavaScript' },
  { icon: FiBook, label: 'Formation', value: 'OpenClassrooms — Dev Web' },
  { icon: FiCoffee, label: 'Intérêts', value: 'Code, Design, Tech' },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Qui suis-je ?</p>
          <h2 className="section-title">À propos de moi</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="relative inline-block mx-auto lg:mx-0">
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-indigo-100 shadow-sm bg-white">
                <img
                  src="/avatar.jpg.jfif"
                  alt="Diaby Madiba"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/20 rounded-2xl z-0" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-purple-200 rounded-xl z-0" />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-5">
              Développeur passionné, toujours en apprentissage
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Je m'appelle <span className="text-gray-900 font-semibold">Diaby Madiba</span>,
                développeur web full-stack junior basé à Tourcoing. Formé via{' '}
                <span className="text-accent font-medium">OpenClassrooms</span>, j'ai acquis
                des compétences solides en intégration web, JavaScript et développement React.
              </p>
              <p>
                Je maîtrise l'écosystème <span className="text-accent font-medium">JavaScript</span> —
                côté front-end avec React, et côté back-end avec Node.js et Express. J'ai
                également travaillé sur l'optimisation SEO, le débogage et la gestion de
                projet Agile.
              </p>
              <p>
                Curieux, rigoureux et motivé, je cherche à rejoindre une équipe où je pourrai
                continuer à progresser tout en apportant de la valeur dès le premier jour.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass-card p-4 flex items-start gap-3 hover:border-accent/30 transition-colors">
                  <Icon className="text-accent mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">{label}</p>
                    <p className="text-gray-900 text-sm font-semibold mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
