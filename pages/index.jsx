import Head from 'next/head'
import { Mail, Github, Linkedin, Instagram, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { NAME, EMAIL, GITHUB, LINKEDIN, INSTAGRAM } from '../data/portfolioData'

export default function Home() {
  return (
    <>
      <Head>
        <title>{NAME} - Portfolio</title>
        <meta name="description" content="Computer Science & Engineering student, developer who enjoys building web and systems tools, automation, and learning new tech." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="min-h-[calc(100vh-140px)] flex items-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left: Hero Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src="/avatar.jpg" 
                    alt={`${NAME} avatar`}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white/30 shadow-2xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 border-2 border-white/30"></div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-sm">
                  ✨ Open to opportunities
                </div>
              </div>
              
              <div>
                <h1 className="text-white mb-4">
                  <span className="block text-lg sm:text-xl mb-2 text-white/70 font-light">Hi, I'm</span>
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-bold bg-gradient-to-r from-white via-white to-orange-200 bg-clip-text text-transparent">
                    {NAME}
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed font-light">
                  Computer Science & Engineering student and developer who enjoys building web and systems tools, automation, and learning new tech. Passionate about creating accessible, impactful solutions that solve real-world problems.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a 
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <Mail className="h-5 w-5" />
                  Get in Touch
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-xl font-medium hover:bg-white/20 hover:-translate-y-0.5 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a 
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A66C2]/80 backdrop-blur-sm text-white border border-[#0A66C2]/40 px-6 py-3 rounded-xl font-medium hover:bg-[#0A66C2] hover:-translate-y-0.5 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a 
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </div>
            </div>

            {/* Right: Quick Stats Card */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="h-5 w-5 text-yellow-300" />
                  <h3 className="text-white font-semibold">Quick Stats</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <span className="text-white/60 text-sm">Projects Built</span>
                    <span className="text-white font-bold text-2xl">9+</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <span className="text-white/60 text-sm">Tech Skills</span>
                    <span className="text-white font-bold text-2xl">50+</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <span className="text-white/60 text-sm">Certifications</span>
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                </div>
              </div>

              {/* Quick navigation */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl">
                <h3 className="text-white/60 text-xs uppercase tracking-wider mb-3">Explore</h3>
                <div className="space-y-2">
                  {[
                    { href: '/projects', label: 'View Projects', emoji: '🚀' },
                    { href: '/tech-stack', label: 'Tech Stack', emoji: '⚡' },
                    { href: '/certificates', label: 'Certificates', emoji: '🏆' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/15 hover:border-white/25 transition-all duration-300"
                    >
                      <span className="text-white/80 text-sm flex items-center gap-2">
                        <span>{item.emoji}</span>
                        {item.label}
                      </span>
                      <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
