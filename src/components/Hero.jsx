import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const roles = [
  'Développeur Full-Stack Junior',
  'Développeur React',
  'Développeur Node.js',
  'Intégrateur Web',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2400)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative">
        <div className="max-w-3xl">
          <p
            className="font-mono text-accent text-sm tracking-widest uppercase mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
          >
            Bonjour, je suis
          </p>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
          >
            Diaby{' '}
            <span className="text-gradient">Madiba</span>
          </h1>

          <div
            className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl text-gray-500 font-medium mb-8 h-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            <span>{displayed}</span>
            <span className="w-0.5 h-7 bg-accent animate-blink inline-block" />
          </div>

          <p
            className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}
          >
            Développeur web junior basé à{' '}
            <span className="text-gray-900 font-semibold">Tourcoing</span>, formé via
            OpenClassrooms. Je construis des interfaces modernes et des APIs robustes
            avec JavaScript, React et Node.js.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-14 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            <button onClick={() => scrollTo('#projects')} className="btn-primary">
              Voir mes projets
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-outline">
              Me contacter
            </button>
          </div>

          <div
            className="flex items-center gap-5 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '750ms', animationFillMode: 'forwards' }}
          >
            <a
              href="https://github.com/diabymadiba-hash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/diaby-madiba-248b62387"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="mailto:diaby.madiba@hotmail.fr"
              className="text-gray-400 hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={22} />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollTo('#about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-accent transition-colors animate-bounce"
          aria-label="Défiler vers le bas"
        >
          <FiArrowDown size={24} />
        </button>
      </div>
    </section>
  )
}
