import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ sections, theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('aboutme')
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
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

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 8)
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = id => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors ${
        scrolled ? 'border-(--border) bg-[color-mix(in_oklab,var(--bg)_80%,transparent)]' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <button
          type="button"
          className="inline-flex items-center gap-2.5 text-base font-bold tracking-tight text-(--text) transition hover:opacity-80"
          onClick={() => handleNavClick('aboutme')}
          aria-label="Go to top"
        >
          <span className="btn-primary grid h-8 w-8 place-items-center rounded-lg text-sm font-extrabold text-white shadow-none">KT</span>
          <span className="hidden sm:inline">Kyu Kyu Thin</span>
        </button>

        <div className="flex items-center gap-2">
          <ul
            className={`${isOpen ? 'max-h-120 py-3 opacity-100' : 'max-h-0 opacity-0'} absolute left-0 top-full w-full overflow-hidden border-b border-(--border) bg-(--bg) px-5 transition-all duration-200 md:static md:flex md:max-h-none md:w-auto md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:py-0 md:opacity-100`}
          >
            {sections.map(s => (
              <li key={s.id}>
                <button
                  type="button"
                  className={`w-full rounded-lg px-3.5 py-2.5 text-left text-sm font-medium transition md:w-auto md:py-2 ${
                    activeId === s.id ? 'bg-(--primary-soft) text-(--primary)' : 'text-(--muted) hover:text-(--text)'
                  }`}
                  onClick={() => handleNavClick(s.id)}
                  aria-current={activeId === s.id ? 'true' : undefined}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--text) transition hover:border-(--primary)"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FontAwesomeIcon icon={faSun} style={{ color: '#fbbf24' }} /> : <FontAwesomeIcon icon={faMoon} />}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--text) md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(o => !o)}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>
      <div className="absolute bottom-0 left-0 h-0.5 origin-left" style={{ width: `${progress}%`, backgroundImage: 'var(--gradient)' }} aria-hidden />
    </header>
  )
}

export default Navbar
