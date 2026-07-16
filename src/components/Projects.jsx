import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const featuredProjects = [
  {
    title: 'Finance Tracker - Personal Finance Management',
    descriptionPoints: [
      'Developed a full-stack application to track income, expenses, budgets, and savings goals',
      'Built RESTful APIs with Spring Boot and integrated with React frontend using Axios',
      'Implemented secure authentication using Spring Security and BCrypt',
      'Deployed frontend and backend on Google Cloud with Docker and CI/CD pipelines'
    ],
    image: '/assets/projects/budget-bee.png', 
    codeUrl: 'https://github.com/eaindraysupan1005/project-budget-bee',
    liveUrl: 'https://project-budget-bee.vercel.app/',
    tags: ['React.js', 'HTML', 'CSS', 'Bootstrap', 'Java (Spring Boot)', 'MySQL']
  },
  {
    title: 'EcoGo – Sustainable Living Mobile Application',
    descriptionPoints: [
      'Designed a mobile app to encourage eco-friendly habits using a gamified points and level system',
      'Implemented features such as habit tracking, leaderboard, campaign participation, and analytics',
      'Integrated Firebase for real-time database, authentication, and backend services',
      'Enhanced user engagement through notifications, reminders, and community campaigns'
    ],
    video: 'https://www.youtube.com/embed/6z8-N721bgQ?t=3s&autoplay=1&mute=1&loop=1&playlist=6z8-N721bgQ&rel=0&modestbranding=1&controls=1&showinfo=0', 
    codeUrl: 'https://github.com/kyukyuthin03/EcoGo',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.ecogo.v2',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Redux']
  },
  {
    title: 'Lumora – Mental Health Tracking & Risk Assessment',
    descriptionPoints: [
      'Developed a backend system for mental health monitoring with mood tracking and risk prediction',
      'Integrated machine learning models to assess depression risk based on user data',
      'Implemented JWT-based authentication and automated alert system for high-risk users',
      'Built APIs for data visualization, chatbot integration, and email notifications'
    ],
    image: '/assets/projects/Lumora.png', 
    codeUrl: 'https://github.com/kyuthin74/Lumora',
    liveUrl: null,
    tags: ['React Native', 'TypeScript', 'FastAPI', 'scikit-learn', 'SQLAlchemy', 'JWT']
  },
]

const Projects = () => {
  return (
    <section id="projects" className="border-b border-(--border) scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-(--text)">Projects</h2>
        
        {featuredProjects.map((project, index) => {
          const isReversed = index % 2 === 1

          return (
          <div key={project.title} className="mb-6 overflow-hidden rounded-4xl border border-(--border) bg-(--surface) shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 order-2 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-(--text)">{project.title}</h3>
                <div className="mt-4">
                  {project.descriptionPoints ? (
                    <ul className="space-y-3 text-(--muted)">
                      {project.descriptionPoints.map(point => (
                        <li key={point} className="flex gap-3 leading-5 lg:leading-7">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-(--primary)" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-7 text-(--muted)">{project.description}</p>
                  )}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="rounded-full border border-(--border) bg-[rgba(255,142,83,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-(--text)">{tag}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.codeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-(--border) bg-(--surface) px-3 lg:px-5 py-3 font-semibold text-(--text) transition hover:-translate-y-0.5 hover:border-(--primary)">
                    Code
                    <FontAwesomeIcon icon={faGithub} style={{fontSize:'18px'}}/>
                  </a>
                  {project.liveUrl ?(
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-(--primary) px-3 lg:px-5 py-3 font-semibold text-white shadow-[0_15px_35px_rgba(255,107,107,0.28)] transition hover:-translate-y-0.5 hover:opacity-95">
                    Live Demo
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{fontSize:'16px'}} />
                  </a> 
                  ) : ''}
                
                  
                </div>
              </div>

                  {project.image ? (
                                  <div className={`flex items-center justify-center bg-[linear-gradient(135deg,rgba(255,107,107,0.18),rgba(255,142,83,0.12))] p-4 sm:p-6 lg:p-8 order-1 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="overflow-hidden rounded-3xl border border-(--border) bg-(--bg)">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                  ) : ''}
                  {project.video ? (
                                  <div className={`bg-[linear-gradient(135deg,rgba(255,107,107,0.18),rgba(255,142,83,0.12))] p-4 sm:p-6 lg:p-8 order-1 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="overflow-hidden rounded-3xl py-2 lg:py-20">
                    <iframe
  src={project.video}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
    width="720"
  height="300"
  className="w-full max-w-4xl rounded-2xl"
/>

                  </div></div>) : ''}
                </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects

