import Head from 'next/head'
import { Mail, Github, FileText, ExternalLink, Code2, Database, Wrench, Sparkles } from 'lucide-react'

export default function Home() {
  // REPLACE THESE WITH YOUR ACTUAL VALUES
  const NAME = "A JATIN RAM CHOWDARY"
  const EMAIL = "jatinramchowdary1980@gmail.com"
  const GITHUB = "https://github.com/Jatin544-art"
  const RESUME_PATH = "/resume.pdf"

  const projects = [
    {
      title: "TriSense",
      description: "AI-powered accessibility app that transforms complex digital information into accessible formats (text-to-speech, hearing assistance, simplified content, task reminders, real-time transcription and contextual explanation) to improve inclusion and independence for users with visual, hearing, and cognitive disabilities.",
      github: "https://github.com/Jatin544-art/trisense", // REPLACE with actual link
      demo: null
    },
    {
      title: "Alert Sphere",
      description: "Web-based disaster awareness and emergency coordination platform that ingests meteorological, satellite, IoT, and social data to issue verified, localized alerts. Includes real-time alert engine, data aggregation/verification, geolocation-based mapping, and an authority dashboard for public safety responders.",
      github: "https://github.com/Jatin544-art/alert-sphere", // REPLACE with actual link
      demo: null
    },
    {
      title: "Sustainable IoT-Based Water Purity Monitoring System",
      description: "IoT water quality monitoring using ESP32 with sensors for dissolved oxygen (DO), pH, and temperature and a Telegram interface for alerts. Low-power sensors, cloud reporting via Wi-Fi, and a Telegram notification module for threshold-based alerts.",
      github: "https://github.com/Jatin544-art/water-purity", // REPLACE with actual link
      demo: null
    },
    {
      title: "C++ To-Do List Application",
      description: "Lightweight console-based productivity tool built in C++; persistent storage via file I/O, task add/mark/delete features, fast retrieval, and modular code for extensions.",
      github: "https://github.com/Jatin544-art/cpp-todo", // REPLACE with actual link
      demo: null
    }
  ]

  const techStack = {
    languages: ["C++", "Python", "JavaScript", "TypeScript", "Java"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    tools: ["Git", "Docker", "VS Code", "Postman", "Figma"]
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>{NAME} - Portfolio</title>
        <meta name="description" content="Computer Science & Engineering student, developer who enjoys building web and systems tools, automation, and learning new tech." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1"
              >
                <span className="sr-only">Home</span>
                <Code2 className="h-6 w-6" />
              </button>
              <div className="flex gap-4 sm:gap-6">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-white hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-3 py-1"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('tech-stack')}
                  className="text-white hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-3 py-1"
                >
                  Tech Stack
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-3 py-1"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Left: Hero Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src="/avatar.png" 
                      alt={`${NAME} avatar`}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white/30 shadow-2xl object-cover"
                    />
                    <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  </div>
                  
                  <div>
                    <h1 className="text-white mb-4">
                      <span className="block text-lg sm:text-xl mb-2 text-white/90">Hi, I'm</span>
                      <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
                        {NAME}
                      </span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
                      Computer Science & Engineering student and developer who enjoys building web and systems tools, automation, and learning new tech. Passionate about creating accessible, impactful solutions that solve real-world problems.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a 
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-500"
                    >
                      <Mail className="h-5 w-5" />
                      Get in Touch
                    </a>
                    <a 
                      href={GITHUB}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-lg hover:bg-white/20 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Right: Live Activity Card */}
                <div className="lg:col-span-1">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-yellow-300" />
                      <h3 className="text-white">Live Activity</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <p className="text-white/70 text-sm">
                          No current activity — link Discord/Spotify/Dev status here.
                        </p>
                      </div>
                      <div className="text-xs text-white/50 text-center pt-2">
                        Connect your accounts to see real-time activity
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-12 text-center">
                Tech Stack & Tools
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Languages */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="h-6 w-6 text-yellow-300" />
                    <h3 className="text-white">Languages</h3>
                  </div>
                  <ul className="space-y-2">
                    {techStack.languages.map((lang, idx) => (
                      <li key={idx} className="text-white/80 text-sm">{lang}</li>
                    ))}
                  </ul>
                </div>

                {/* Frameworks */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="h-6 w-6 text-pink-300" />
                    <h3 className="text-white">Frameworks</h3>
                  </div>
                  <ul className="space-y-2">
                    {techStack.frameworks.map((framework, idx) => (
                      <li key={idx} className="text-white/80 text-sm">{framework}</li>
                    ))}
                  </ul>
                </div>

                {/* Databases */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-6 w-6 text-blue-300" />
                    <h3 className="text-white">Databases</h3>
                  </div>
                  <ul className="space-y-2">
                    {techStack.databases.map((db, idx) => (
                      <li key={idx} className="text-white/80 text-sm">{db}</li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="h-6 w-6 text-orange-300" />
                    <h3 className="text-white">Tools</h3>
                  </div>
                  <ul className="space-y-2">
                    {techStack.tools.map((tool, idx) => (
                      <li key={idx} className="text-white/80 text-sm">{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-12 text-center">
                Featured Projects
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl hover:bg-white/15 transition-all group"
                  >
                    <h3 className="text-white text-xl sm:text-2xl mb-4">
                      {project.title}
                    </h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded-lg hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-white/90 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
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

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-8">
                Let's Connect
              </h2>
              <p className="text-lg text-white/90 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-500"
                >
                  <Mail className="h-5 w-5" />
                  {EMAIL}
                </a>
                <a 
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-lg hover:bg-white/20 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <FileText className="h-5 w-5" />
                  View Resume
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} {NAME}. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a 
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href={`mailto:${EMAIL}`}
                  className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
                  aria-label="Email Contact"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}
