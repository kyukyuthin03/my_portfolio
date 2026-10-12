import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Reveal, SectionHeading } from './Reveal.jsx'

const featuredProjects = [
  {
    title: 'Finance Tracker - Personal Finance Management',
    descriptionPoints: [
      'Built an application to manage income, expenses, budgets, and savings in one platform.',
      'Developed a full-stack application with dashboard, expense tracking, and saving goals features.',
      'Used React and Spring Boot with a RESTful architecture to create a scalable application.',
      'Resolved authentication, API integration, and cloud deployment challenges.',
      'Gained experience in full-stack development, secure system design, and cloud deployment.'
    ],
    image: '/assets/projects/budget-bee.png', 
    codeUrl: 'https://github.com/kyuthin74/finance_tracker',
    liveUrl: 'https://project-budget-bee.vercel.app/',
    tags: ['React.js', 'HTML', 'CSS', 'Bootstrap', 'Java (Spring Boot)', 'MySQL']
  },
  {
    title: 'EcoGo – Sustainable Living Mobile Application',
    descriptionPoints: [
      'Created a mobile app to encourage sustainable habits through gamification and community engagement.',
      'Implemented features such as habit tracking, leaderboard, campaign participation, and analytics',
      'Used React Native and Firebase for cross-platform development and real-time synchronization.',
      'Solved asynchronous data loading and real-time synchronization issues.',
      'Improved my skills in mobile development, state management, and Firebase integration.'
    ],
    video: 'https://www.youtube.com/embed/6z8-N721bgQ?t=3s&autoplay=1&mute=1&loop=1&playlist=6z8-N721bgQ&rel=0&modestbranding=1&controls=1&showinfo=0', 
    codeUrl: 'https://github.com/eaindraysupan1005/ecogo',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.ecogo.v2',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Redux']
  },
  {
    title: 'Lumora – Mental Health Tracking & Risk Assessment',
    descriptionPoints: [
      'Developed a mental health application to assess depression risk and support early intervention.',
      'Built frontend, backend APIs, authentication, and integrated an ML model for risk assessment.',
      'Used React Native, FastAPI, JWT, and a modular API architecture for scalability.',
      'Integrated machine learning predictions with the backend while ensuring reliable frontend communication.',
      'Strengthened my knowledge in backend architecture, API integration, and AI-powered application development.'
    ],
    image: '/assets/projects/Lumora.png', 
    codeUrl: 'https://github.com/kyuthin74/Lumora',
    liveUrl: null,
    tags: ['React Native', 'TypeScript', 'FastAPI', 'scikit-learn', 'SQLAlchemy', 'JWT']
  },
]

const splitTitle = title => {
  const [name, ...rest] = title.split(/\s[-–]\s/)
  return { name, subtitle: rest.join(' – ') }
}

const hostOf = url => {
  try { return new URL(url).host } catch { return '' }
}

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden border-b border-(--border) section-alt scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="Selected work" title="Projects" subtitle="Full-stack and mobile apps I designed, built and deployed." />

        <div className="space-y-24 lg:space-y-32">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1
            const { name, subtitle } = splitTitle(project.title)
            const url = project.liveUrl ? hostOf(project.liveUrl) : hostOf(project.codeUrl)
            return (
              <Reveal key={project.title}>
                <article className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* mockup */}
                  <div className={`group relative lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div
                      className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl transition duration-500 group-hover:opacity-50"
                      style={{ backgroundImage: 'var(--gradient)' }}
                      aria-hidden
                    />
                    <div className="relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface) shadow-(--shadow-lg) transition duration-500 group-hover:-translate-y-1.5">
                      <div className="flex items-center gap-2 border-b border-(--border) bg-(--bg-soft) px-4 py-3">
                        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                        <span className="ml-3 flex-1 truncate rounded-md bg-(--bg) px-3 py-1 text-xs text-(--muted)">{url}</span>
                      </div>
                      {project.image ? (
                        <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="block w-full object-cover" />
                      ) : (
                        <div className="aspect-video w-full">
                          <iframe
                            src={project.video}
                            title={`${project.title} demo video`}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="h-full w-full"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* details */}
                  <div className="relative lg:col-span-5">
                    <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--primary)">
                      <span className="text-gradient text-2xl font-black tracking-normal">0{index + 1}</span>
                      {subtitle && <><span className="h-px w-8 bg-(--border)" />{subtitle}</>}
                    </p>
                    <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-(--text) lg:text-4xl">{name}</h3>

                    <ul className="mt-5 space-y-3 text-(--muted)">
                      {project.descriptionPoints.slice(0, 3).map(point => (
                        <li key={point} className="flex gap-3 text-sm leading-6 sm:text-base">
                          <FontAwesomeIcon icon={faCircleCheck} className="mt-1.5 shrink-0 text-(--primary)" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {project.descriptionPoints.length > 3 && (
                      <details className="group/more mt-3">
                        <summary className="cursor-pointer text-sm font-semibold text-(--primary) marker:content-none hover:underline">
                          <span className="group-open/more:hidden">+ More details</span>
                          <span className="hidden group-open/more:inline">− Less</span>
                        </summary>
                        <ul className="mt-3 space-y-3 text-(--muted)">
                          {project.descriptionPoints.slice(3).map(point => (
                            <li key={point} className="flex gap-3 text-sm leading-6 sm:text-base">
                              <FontAwesomeIcon icon={faCircleCheck} className="mt-1.5 shrink-0 text-(--primary)" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-xs font-semibold text-(--text)">{tag}</span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110">
                          Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '14px' }} />
                        </a>
                      )}
                      <a href={project.codeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-(--border) bg-(--surface) px-5 py-3 font-semibold text-(--text) transition hover:-translate-y-0.5 hover:border-(--primary)">
                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: '18px' }} /> Code
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
