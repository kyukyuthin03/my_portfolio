import React, { useEffect, useMemo, useState } from 'react'

const experiences = [
  {
    role: 'Front‑End Developer',
    company: 'Sa Map Organization',
    period: 'August 2024 — May 2025',
    bullets: [
      'Built responsive, accessible UI with React, modern CSS and Tailwind CSS.',
      'Collaborated with design to deliver pixel‑perfect features.',
      'Improved performance and Lighthouse scores across pages.',
    ],
  },
]

const certificatesAll = [
  {
    title: 'Web Development Fundamentals',
    issuer: 'Youth Career Institute(YCI)',
    image: '/assets/certificates/WebDevelopment.png',
    link: '/assets/certificates/WebDevelopment.pdf',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    image: '/assets/certificates/Responsive Web Design.png',
    link: '/assets/certificates/Responsive Web Design.png',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta (Coursera)',
    image: '/assets/certificates/CertificateOfFrontEndDevelopment.png',
    link: '/assets/certificates/CertificateOfFrontEndDevelopment.pdf',
  },
  {
    title: 'Programming Foundations with JavaScript, HTML & CSS',
    issuer: 'Duke University',
    image: '/assets/certificates/CertificateOfProgramming.png',
    link: '/assets/certificates/CertificateOfProgramming.pdf',
  },
  {
    title: 'Advanced Styling with Responsive Design',
    issuer: 'University of Michigan',
    image: '/assets/certificates/CertificateOfAdvancedStyling.png',
    link: '/assets/certificates/CertificateOfAdvancedStyling.pdf',
  },
  {
    title: 'Version Control',
    issuer: 'Meta (Coursera)',
    image: '/assets/certificates/Version Control.png',
    link: '/assets/certificates/Version Control.pdf',
  },
]

const Experience = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleCertificates = useMemo(() => (showAll ? certificatesAll : certificatesAll.slice(0, 3)), [showAll])

  useEffect(() => {
    const cards = document.querySelectorAll('.cert-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((e) => (
            <div key={e.role + e.company} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{e.role}</h3>
                  <span className="muted">{e.company} • {e.period}</span>
                </div>
                <ul>
                  {e.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="certificates-block">
          <h2 style={{ marginTop: 32, marginBottom: 6, textAlign: 'center'}}>My Certificates</h2>
          <p className="body-text" style={{ marginTop: 0, marginBottom: 16 }}>
            I have done various programming courses to increase my programming skills and I'm sharing a few of them.
          </p>
          <div className="grid cert-grid">
            {visibleCertificates.map((c) => (
              <article key={c.title + c.issuer}>
                <img
                  className="cert-image"
                  src={c.image}
                  alt={`${c.title} certificate`}
                  onError={(e) => { e.currentTarget.src = '/assets/profile.png' }}
                />
                <div className="card-body">
                  <h4 className="card-title" style={{fontSize: 18}}>{c.title}</h4>
                  <p className="muted" style={{ margin: 0 }}>{c.issuer}</p>
                </div>
                <div className="card-actions">
                  <a className="btn small" href={c.link} target="_blank" rel="noreferrer">
                    View Certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
          {certificatesAll.length > 3 && (
            <div style={{ display: 'grid', placeItems: 'center', marginTop: 24 }}>
              <button className="btn sunset-btn" onClick={() => setShowAll(s => !s)}>
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience

