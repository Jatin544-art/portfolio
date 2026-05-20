import Head from 'next/head'
import { Award, ExternalLink, ArrowLeft, Calendar, Building2 } from 'lucide-react'
import Link from 'next/link'
import { NAME, certificates } from '../data/portfolioData'

const badgeColors = [
  'from-blue-400 to-cyan-500',
  'from-purple-400 to-pink-500',
  'from-orange-400 to-yellow-500',
]

export default function Certificates() {
  return (
    <>
      <Head>
        <title>{NAME} - Certificates</title>
        <meta name="description" content={`Certificates and achievements earned by ${NAME}.`} />
      </Head>
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Certificates & <span className="bg-gradient-to-r from-orange-300 to-yellow-200 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Recognized certifications and publications from prestigious institutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <div 
                key={idx}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                {/* Badge Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${badgeColors[idx % badgeColors.length]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <Award className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-white text-lg font-semibold mb-4 leading-tight group-hover:text-orange-200 transition-colors">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-6 mt-auto">
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Building2 className="h-4 w-4 flex-shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {cert.link && cert.link !== "#" && (
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all text-sm self-start focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    View Credential <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
