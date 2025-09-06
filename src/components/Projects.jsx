import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const featuredProjects = [
  {
    title: 'Omnifood Restaurant',
    description: 'A web app for personalized healthy eating. Users choose their diet, favorite foods, and restrictions to generate a weekly meal plan tailored to their lifestyle. Partner restaurants prepare and deliver the meals daily in select cities. The service is offered as a monthly subscription, with options to receive one or two meals per day for maximum convenience and long-term health benefits.',
    image: '/assets/projects/omnifood.png', 
    codeUrl: 'https://github.com/kyukyuthin03/Omnifood-',
    liveUrl: 'https://omnifood-kappa-brown.vercel.app/',
    tags: ['JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Coffee Bean E-commerce',
    description: 'Coffee Bean is a modern, visually appealing coffee shop website designed to showcase the shop’s menu, highlight customer experiences, and create an inviting online presence. With a focus on clean design and responsiveness, this project brings together beautiful imagery, engaging testimonials, and smooth navigation to deliver a delightful digital café experience. This project demonstrates how thoughtful design and user-friendly layouts can help small businesses, like coffee shops, establish a strong and welcoming online presence.',
    image: '/assets/projects/coffee-bean.png', 
    codeUrl: 'https://github.com/kyukyuthin03/Coffee-bean',
    liveUrl: 'https://coffee-bean-two.vercel.app/',
    tags: ['JavaScript', 'HTML', 'CSS', 'SASS']
  },
  {
    title: 'Budget Bee - Personal Finance Tracker',
    description: 'This project was developed as part of a group effort, where I contributed as a Fullstack Developer. Together, we built a comprehensive Personal Finance Tracker that enables users to track expenses, manage budgets, set savings goals, and visualize their financial activities through an intuitive, user-friendly dashboard.',
    image: '/assets/projects/budget-bee.png', 
    codeUrl: 'https://github.com/kyukyuthin03/budget-bee',
    liveUrl: 'https://coffee-bean-two.vercel.app/',
    tags: ['React.js', 'javaScript', 'HTML', 'CSS', 'Java', 'Spring Boot', 'MySQL']
  },
  {
    title: 'EcoGo - Sustainable Living Tracker',
    description: 'EcoGo is a group project where I contributed as a Fullstack Developer. The mobile application is designed to help users track eco-friendly habits and participate in environmental campaigns through a point-based reward system that motivates sustainable actions. Users can join campaigns, monitor their progress, and engage with their community, making it easier to adopt a greener lifestyle while collectively contributing to a positive environmental impact.',
    image: '/assets/projects/budget-bee.png', 
    codeUrl: 'https://github.com/kyukyuthin03/ecogo',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.ecogo.v2&hl=en',
    tags: ["React Native","JavaScript","TypeScript", "Firebase (Authentication, Firestore)", "React Context API or Redux",]
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

