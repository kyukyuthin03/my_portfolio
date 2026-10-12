import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faDatabase, faPlug, faRotate } from '@fortawesome/free-solid-svg-icons'
import { Reveal, SectionHeading } from './Reveal.jsx'

// dev: Devicon class, fa: FontAwesome fallback for items without a logo
const technicalSkillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', dev: 'devicon-java-plain colored' },
      { name: 'JavaScript', dev: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', dev: 'devicon-typescript-plain colored' },
      { name: 'Python', dev: 'devicon-python-plain colored' },
      { name: 'SQL', fa: faDatabase },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', dev: 'devicon-html5-plain colored' },
      { name: 'Tailwind CSS', dev: 'devicon-tailwindcss-original colored' },
      { name: 'Bootstrap', dev: 'devicon-bootstrap-plain colored' },
      { name: 'React', dev: 'devicon-react-original colored' },
      { name: 'React Native', dev: 'devicon-react-original colored' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Spring Boot', dev: 'devicon-spring-plain colored' },
      { name: 'FastAPI', dev: 'devicon-fastapi-plain colored' },
      { name: 'RESTful APIs', fa: faPlug },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', dev: 'devicon-mysql-plain colored' },
      { name: 'PostgreSQL', dev: 'devicon-postgresql-plain colored' },
      { name: 'Firebase', dev: 'devicon-firebase-plain colored' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', dev: 'devicon-git-plain colored' },
      { name: 'GitHub', dev: 'devicon-github-original' },
      { name: 'Postman', dev: 'devicon-postman-plain colored' },
      { name: 'VS Code', dev: 'devicon-vscode-plain colored' },
      { name: 'Android Studio', dev: 'devicon-androidstudio-plain colored' },
      { name: 'Figma', dev: 'devicon-figma-plain colored' },
    ],
  },
  {
    title: 'Concepts',
    items: [
      { name: 'OOP', fa: faCube },
      { name: 'Agile / Scrum', fa: faRotate },
    ],
  },
]

const core = ['Java', 'React', 'Spring Boot', 'React Native', 'TypeScript', 'MySQL']
const byName = Object.fromEntries(technicalSkillGroups.flatMap(g => g.items.map(i => [i.name, i])))

const Icon = ({ skill, size = '1.6rem' }) =>
  skill.dev ? (
    <i className={skill.dev} style={{ fontSize: size, lineHeight: 1 }} aria-hidden />
  ) : (
    <FontAwesomeIcon icon={skill.fa} className="text-(--primary)" style={{ fontSize: size }} />
  )

const Skills = () => {
  return (
    <section id="skills" className="border-b border-(--border) section-alt scroll-mt-20">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="Toolbox" title="Technical Skills" subtitle="Technologies I use to design, build and ship." />

        {/* core stack */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-(--border) bg-(--surface) p-6 shadow-(--shadow-lg) sm:p-8">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl" style={{ backgroundImage: 'var(--gradient)' }} aria-hidden />
            <p className="relative text-center text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">Core stack</p>
            <ul className="relative mt-6 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {core.map(name => (
                <li key={name} className="group flex flex-col items-center gap-3 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl border border-(--border) bg-(--bg) transition duration-300 group-hover:-translate-y-1.5 group-hover:border-(--primary) group-hover:shadow-(--shadow-lg) sm:h-20 sm:w-20">
                    <Icon skill={byName[name]} size="2.4rem" />
                  </span>
                  <span className="text-xs font-semibold text-(--text) sm:text-sm">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* category rows */}
        <div className="mt-8 divide-y divide-(--border) overflow-hidden rounded-[2rem] border border-(--border) bg-(--surface) shadow-(--shadow)">
          {technicalSkillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 50}>
              <div className="grid gap-4 p-5 transition hover:bg-(--primary-soft) sm:grid-cols-[11rem_1fr] sm:items-center sm:p-6">
                <div className="flex items-baseline gap-3 sm:block">
                  <h3 className="text-base font-bold tracking-tight text-(--text)">{group.title}</h3>
                  <p className="text-xs font-semibold text-(--muted) sm:mt-1">{String(group.items.length).padStart(2, '0')} skills</p>
                </div>
                <ul className="flex flex-wrap gap-2.5" aria-label={`${group.title} skills`}>
                  {group.items.map(skill => (
                    <li key={skill.name} className="inline-flex items-center gap-2.5 rounded-full border border-(--border) bg-(--bg) py-1.5 pl-2.5 pr-4 text-sm font-medium text-(--text) transition hover:-translate-y-0.5 hover:border-(--primary)">
                      <Icon skill={skill} size="1.25rem" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
