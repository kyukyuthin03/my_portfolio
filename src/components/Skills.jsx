import React from 'react'

const technicalSkillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript (ES6+)', 'TypeScript']
  },
  {
    title: 'Frontend',
    items: ['HTML5', 'Tailwind CSS', 'Bootstrap', 'React.js', 'React Native'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'RESTful APIs'],
  },
  {
    title: 'Database',
    items: ['MySQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    title: 'Concepts',
    items: ['OOP', 'Agile/Scrum'],
  },
]


const Skills = () => {
  return (
    <section id="skills" className="border-b border-(--border) py-10 scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-0 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-(--text)">Technical Skills</h2>
        <div className="grid gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {technicalSkillGroups.map(group => (
            <article key={group.title} className="rounded-[1.75rem] border border-(--border) bg-(--surface) p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.1)]">
              <h3 className="text-lg font-bold text-(--text)">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-3" aria-label={`${group.title} skills`}>
                {group.items.map(item => (
                  <li key={item} className="rounded-full border border-(--border) bg-[rgba(255,142,83,0.08)] px-4 py-2 text-sm font-medium text-(--text)">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* <div className="additional-skills">
          <h3 className="additional-skills-title">Soft Skills</h3>
          <div className="additional-skills-grid">
            <div className="soft-skills-card">
              <h4>Soft Skills</h4>
              <ul className="soft-skills-list">
                {softSkills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Skills
