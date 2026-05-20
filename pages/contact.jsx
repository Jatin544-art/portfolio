import Head from 'next/head'
import { Mail, Phone, FileText, Github, Linkedin, Instagram, ArrowLeft, Send, MapPin } from 'lucide-react'
import Link from 'next/link'
import { NAME, EMAIL, GITHUB, LINKEDIN, INSTAGRAM, RESUME_PATH } from '../data/portfolioData'

export default function Contact() {
  return (
    <>
      <Head>
        <title>{NAME} - Contact</title>
        <meta name="description" content={`Get in touch with ${NAME}.`} />
      </Head>
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Let's <span className="bg-gradient-to-r from-orange-300 to-yellow-200 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {/* Email */}
            <a 
              href={`mailto:${EMAIL}`}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider">Email</p>
                <p className="text-white font-medium text-sm">{EMAIL}</p>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+917019141264"
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider">Phone</p>
                <p className="text-white font-medium text-sm">+91 7019141264</p>
              </div>
            </a>

            {/* Location */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider">Location</p>
                <p className="text-white font-medium text-sm">Bangalore, India</p>
              </div>
            </div>

            {/* Resume */}
            <a 
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider">Resume</p>
                <p className="text-white font-medium text-sm">Download PDF</p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-white font-semibold mb-6">Find me on</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white/10 border border-white/15 text-white px-6 py-3 rounded-xl hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">GitHub</span>
              </a>
              <a 
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-white px-6 py-3 rounded-xl hover:bg-[#0A66C2]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a 
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 border border-pink-500/30 text-white px-6 py-3 rounded-xl hover:from-purple-500/30 hover:via-pink-500/30 hover:to-orange-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Instagram className="h-5 w-5 text-pink-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/90 hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl hover:shadow-white/20"
            >
              <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Send me an Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
