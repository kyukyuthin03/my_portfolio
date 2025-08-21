import React, { useEffect } from 'react'

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

const certificates = [
  {
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google',
    image: '/assets/certificates/CertificateOfUXDesign.png',
    link: '/assets/certificates/CertificateOfUXDesign.pdf',
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
]

const Experience = () => {
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
          <h3 style={{ marginTop: 28, marginBottom: 12 }}>Certificates</h3>
          <div className="grid cert-grid">
            {certificates.map((c) => (
              <article className="card cert-card" key={c.title + c.issuer}>
                <a className="card-link" href={c.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="cert-image"
                    src={c.image}
                    alt={`${c.title} certificate`}
                    onError={(e) => { e.currentTarget.src = '/assets/profile.png' }}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{c.title}</h4>
                    <p className="muted" style={{ margin: 0 }}>{c.issuer}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

