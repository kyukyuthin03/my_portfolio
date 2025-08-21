import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ sections, theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  const handleNavClick = id => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  return (
    <header className="navbar">
      <nav className="container">
        <div className="brand" onClick={() => handleNavClick('hero')} role="button" aria-label="Go to home">
          <span className="brand-accent">&lt;/&gt;</span> My Portfolio
        </div>
        <button className="hamburger" aria-label="Toggle menu" aria-expanded={isOpen} onClick={() => setIsOpen(o => !o)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {sections.map(s => (
            <li key={s.id}>
              <button className={`nav-link ${activeId === s.id ? 'active' : ''}`} onClick={() => handleNavClick(s.id)}>
                {s.label}
              </button>
            </li>
          ))}
          <li>
            <button className="mode-toggle" onClick={onToggleTheme} aria-label="Toggle dark mode">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

