import Link from 'next/link'
import { useRouter } from 'next/router'
import { Github, Mail, Linkedin, Instagram, Home } from 'lucide-react'
import { NAME, EMAIL, GITHUB, LINKEDIN, INSTAGRAM } from '../data/portfolioData'

export default function Layout({ children }) {
  const router = useRouter()

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/projects', label: 'Projects' },
    { href: '/tech-stack', label: 'Tech Stack' },
    { href: '/certificates', label: 'Certificates' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] bg-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] bg-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/"
              className="text-white font-bold text-lg tracking-wide hover:text-white/80 transition-colors focus:outline-none rounded px-2 py-1"
            >
              JRC<span className="text-orange-300">.</span>
            </Link>
            <div className="flex gap-1 sm:gap-2">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                      isActive 
                        ? 'text-white bg-white/15 shadow-lg shadow-white/5' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-orange-300 rounded-full"></span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-16 pb-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/30 backdrop-blur-xl border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {NAME}. Built with 💜
          </p>
          <div className="flex gap-4">
            {[
              { href: GITHUB, icon: Github, label: 'GitHub' },
              { href: LINKEDIN, icon: Linkedin, label: 'LinkedIn' },
              { href: INSTAGRAM, icon: Instagram, label: 'Instagram' },
              { href: `mailto:${EMAIL}`, icon: Mail, label: 'Email' },
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-white/40 hover:text-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2 hover:bg-white/10"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
