import React from 'react'

const skills = [
  { name: 'JavaScript (ES202x)', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 88 },
  { name: 'Vite', level: 85 },
  { name: 'Redux / Zustand', level: 75 },
  { name: 'CSS3 / SASS', level: 86 },
  { name: 'Tailwind / CSS Modules', level: 78 },
  { name: 'Responsive & Accessibility', level: 84 },
  { name: 'Node.js', level: 70 },
  { name: 'Git & CI/CD', level: 76 },
]

const Skills = () => {
  const midpoint = Math.ceil(skills.length / 2)
  const left = skills.slice(0, midpoint)
  const right = skills.slice(midpoint)
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <ul className="skill-list">
            {left.map(s => (
              <li key={s.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-val muted">{s.level}%</span>
                </div>
                <div className="progress" aria-label={`${s.name} proficiency`}>
                  <span
                    className="progress-bar"
                    style={{ width: `${s.level}%` }}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={s.level}
                  ></span>
                </div>
              </li>
            ))}
          </ul>
          <ul className="skill-list">
            {right.map(s => (
              <li key={s.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-val muted">{s.level}%</span>
                </div>
                <div className="progress" aria-label={`${s.name} proficiency`}>
                  <span
                    className="progress-bar"
                    style={{ width: `${s.level}%` }}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={s.level}
                  ></span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="additional-skills">
          <h3 className="additional-skills-title">Languages & Soft Skills</h3>
          <div className="additional-skills-grid">
            <div className="languages-card">
              <h4>Languages</h4>
              <ul className="language-list">
                <li><strong>English:</strong> Intermediate</li>
                <li><strong>Burmese:</strong> Native</li>
                <li><strong>Japanese:</strong> N3</li>
              </ul>
            </div>
            <div className="soft-skills-card">
              <h4>Soft Skills</h4>
              <ul className="soft-skills-list">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Communication</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
