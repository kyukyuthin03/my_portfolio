import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const featuredProjects = [
  {
    title: 'Spotify Data Visualizer',
    description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image: '/assets/profile.png', // Placeholder - replace with actual project image
    codeUrl: 'https://github.com/yourusername/spotify-visualizer',
    liveUrl: 'https://spotify-visualizer-demo.netlify.app',
    tags: ['React', 'Node.js', 'Spotify API', 'Chart.js']
  },
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with user authentication, product management, shopping cart functionality, and secure payment processing. Features responsive design, admin dashboard, and real-time inventory updates.',
    image: '/assets/profile.png', // Placeholder - replace with actual project image
    codeUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.netlify.app',
    tags: ['React', 'Firebase', 'Stripe', 'Tailwind CSS']
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        {featuredProjects.map((project, index) => (
          <div key={project.title} className={`featured-project ${index % 2 === 0 ? 'project-left' : 'project-right'}`}>
            <div className="project-content">
              <div className="project-text">
                <span className="project-label">Featured Project</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.codeUrl} target="_blank" rel="noreferrer" className="btn project-btn code-btn">
                    Code
                    <FontAwesomeIcon icon={faGithub} style={{fontSize:'18px'}}/>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn project-btn live-btn">
                    Live Demo
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{fontSize:'16px'}} />
                  </a>
                </div>
              </div>
              
              <div className="project-image">
                <div className="project-image-bg">
                  <img 
                    src={project.image} 
                    alt={`${project.title} project preview`}
                    className="project-preview"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

