import React, { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Aboutme.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Certificates from './components/Certificates.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Background from './components/Background.jsx'

const App = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'light' || stored === 'dark') return stored
    } catch { /* storage unavailable */ }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  const sections = useMemo(() => [
    { id: 'aboutme', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ], [])

  return (
    <div className="relative min-h-screen text-(--text)">
      <Background />
      <Navbar sections={sections} theme={theme} onToggleTheme={toggleTheme} />
      <main className="relative z-10 overflow-x-hidden">
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  )
}

export default App

