import { useEffect, useRef, useState } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const socials = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'diaby.madiba@hotmail.fr',
    href: 'mailto:diaby.madiba@hotmail.fr',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'diabymadiba-hash',
    href: 'https://github.com/diabymadiba-hash',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'Diaby Madiba',
    href: 'https://www.linkedin.com/in/diaby-madiba-248b62387',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    const mailtoLink = `mailto:diaby.madiba@hotmail.fr?subject=Contact depuis le portfolio — ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.location.href = mailtoLink
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <section id="contact" className="py-28 px-6 bg-gray-50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Travaillons ensemble</p>
          <h2 className="section-title">Contact</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-6 max-w-lg mx-auto">
            Vous avez un projet, une opportunité ou simplement envie d'échanger ?
            Je lis tous mes messages et réponds rapidement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Prenons contact</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Que ce soit pour un stage, une alternance, un poste junior ou juste un
              café virtuel autour du code — n'hésitez pas à m'écrire.
            </p>

            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-4 hover:border-accent/40 hover:shadow-md group transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                    <Icon className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{label}</p>
                    <p className="text-gray-900 text-sm font-semibold group-hover:text-accent transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <form onSubmit={handleSubmit} className="glass-card p-7 space-y-5">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                  Votre nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Votre email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean@exemple.fr"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Bonjour Diaby, j'aimerais discuter d'un projet..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all resize-none"
                  required
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-700 text-sm bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  <FiCheckCircle size={16} />
                  Votre client mail s'est ouvert. Merci pour votre message !
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <FiAlertCircle size={16} />
                  Veuillez remplir tous les champs.
                </div>
              )}

              <button type="submit" className="btn-primary w-full justify-center">
                <FiSend size={16} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
