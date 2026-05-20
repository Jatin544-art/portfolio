import Head from 'next/head'
import { Github, ExternalLink, ArrowLeft, Folder } from 'lucide-react'
import Link from 'next/link'
import { NAME, projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <>
      <Head>
        <title>{NAME} - Projects</title>
        <meta name="description" content={`Featured projects by ${NAME} - AI, IoT, Web Applications and more.`} />
      </Head>
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-orange-300 to-yellow-200 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A collection of projects I've built — from AI-powered platforms to IoT systems and full-stack applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Project number badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <Folder className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/20 text-4xl font-bold leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 group-hover:text-orange-200 transition-colors">
                  {project.title.replace(/^\d+\.\s*/, '')}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed text-sm line-clamp-4">
                  {project.description.split('\n')[0]}
                </p>
                <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 text-white/80 hover:text-white border border-white/15 px-4 py-2 rounded-lg hover:bg-white/20 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all text-sm shadow-lg shadow-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
