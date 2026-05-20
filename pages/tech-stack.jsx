import Head from 'next/head'
import { Code2, Database, Wrench, Server, Cpu, Monitor, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { NAME, techStack } from '../data/portfolioData'

const categories = [
  { key: 'languages', label: 'Languages', icon: Code2, color: 'from-yellow-400 to-orange-500', glow: 'rgba(250,204,21,0.3)' },
  { key: 'frontend', label: 'Frontend', icon: Monitor, color: 'from-pink-400 to-rose-500', glow: 'rgba(244,114,182,0.3)' },
  { key: 'backend', label: 'Backend', icon: Server, color: 'from-green-400 to-emerald-500', glow: 'rgba(74,222,128,0.3)' },
  { key: 'databases', label: 'Databases', icon: Database, color: 'from-blue-400 to-cyan-500', glow: 'rgba(96,165,250,0.3)' },
  { key: 'ai', label: 'AI / IoT', icon: Cpu, color: 'from-purple-400 to-violet-500', glow: 'rgba(192,132,252,0.3)' },
  { key: 'tools', label: 'Tools & Platforms', icon: Wrench, color: 'from-orange-400 to-red-500', glow: 'rgba(251,146,60,0.3)' },
]

export default function TechStack() {
  return (
    <>
      <Head>
        <title>{NAME} - Tech Stack</title>
        <meta name="description" content={`Technologies and tools used by ${NAME}.`} />
      </Head>
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Tech <span className="bg-gradient-to-r from-orange-300 to-yellow-200 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The technologies, frameworks, and tools I work with every day.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon
              const items = techStack[cat.key]
              return (
                <div 
                  key={cat.key}
                  className="group bg-black/25 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:-translate-y-1 transition-all duration-500"
                  style={{ boxShadow: `0 0 20px ${cat.glow}` }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{cat.label}</h3>
                      <p className="text-white/40 text-xs">{items.length} skills</p>
                    </div>
                  </div>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-white/8 border border-white/10 text-white/80 text-sm px-3 py-1.5 rounded-lg hover:bg-white/15 hover:text-white transition-all cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
