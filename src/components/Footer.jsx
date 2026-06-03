import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <span className="font-mono text-accent font-semibold">{'<DM />'}</span>
          <p className="text-gray-400 text-xs mt-1">
            © {year} Diaby Madiba · Tourcoing, France
          </p>
        </div>

        <p className="text-gray-400 text-xs flex items-center gap-1.5">
          Fait avec <FiHeart className="text-accent" size={12} /> React & Tailwind CSS
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/diabymadiba-hash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/diaby-madiba-248b62387"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="mailto:diaby.madiba@hotmail.fr"
            className="text-gray-400 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
