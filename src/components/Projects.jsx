import React from 'react'

const demoProjects = [
  {
    title: 'Sunset UI Kit',
    description: 'Reusable components themed with a sunset palette and accessible variants.',
    tags: ['React', 'CSS'],
    url: 'https://example.com',
  },
  {
    title: 'Smooth Scroll SPA',
    description: 'Single-page app with IntersectionObserver and native smooth scrolling.',
    tags: ['Vite', 'React'],
    url: 'https://example.com',
  },
  {
    title: 'Portfolio v2',
    description: 'Personal site with theming, projects showcase, and contact form.',
    tags: ['React', 'Netlify'],
    url: 'https://example.com',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          {demoProjects.map(p => (
            <article key={p.title} className="card">
              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-text">{p.description}</p>
                <div className="tag-row">
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="card-actions">
                <a className="btn small" href={p.url} target="_blank" rel="noreferrer">View</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

