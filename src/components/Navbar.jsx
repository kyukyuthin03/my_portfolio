import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({ sections, theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('aboutme')

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
    <header className="sticky top-0 z-50 border-b border-(--border) bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-md">
      <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-lg font-extrabold tracking-tight text-(--text) transition hover:opacity-80"
          onClick={() => handleNavClick('aboutme')}
          aria-label="Go to about me"
        >
          <span className="text-(--primary)">&lt;/&gt;</span>
          <span>Portfolio</span>
        </button>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-(--border) bg-(--surface) text-(--text) shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-lg md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(o => !o)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        <ul className={`${isOpen ? 'max-h-128' : 'max-h-0'} absolute right-0 top-full z-40 w-full overflow-hidden border-b border-(--border) bg-[color-mix(in_oklab,var(--bg)_90%,transparent)] px-5 transition-[max-height] duration-200 md:static md:flex md:max-h-none md:w-auto md:items-center md:gap-2 md:border-0 md:bg-transparent md:px-0`}>
          {sections.map(s => (
            <li key={s.id} className="py-2 md:py-0 flex justify-end">
              <button
                type="button"
                className={`w-auto rounded-2xl border px-4 py-3 text-end text-sm font-medium transition md:w-auto md:px-4 md:py-2 ${activeId === s.id ? 'border-(--border) bg-(--surface) text-(--text)' : 'border-transparent text-(--muted) hover:border-(--border) hover:text-(--text)'}`}
                onClick={() => handleNavClick(s.id)}
              >
                {s.label}
              </button>
            </li>
          ))}
          <li className="py-2 md:py-0 flex justify-end">
            <button
              type="button"
              className="w-auto rounded-2xl border border-(--border) bg-white px-4 py-3 text-right text-sm font-medium text-(--text) transition md:w-auto md:px-4 md:py-2"
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <FontAwesomeIcon icon={faSun} style={{color: "#ef8e38",}} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

