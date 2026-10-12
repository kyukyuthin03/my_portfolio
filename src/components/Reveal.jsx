import React, { useEffect, useRef, useState } from 'react'

export const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} style={{ '--delay': `${delay}ms` }} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

export const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <Reveal className="mb-12 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--primary)">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-(--text) sm:text-4xl">{title}</h2>
    {subtitle && <p className="mx-auto mt-3 max-w-xl text-(--muted)">{subtitle}</p>}
  </Reveal>
)

export default Reveal
