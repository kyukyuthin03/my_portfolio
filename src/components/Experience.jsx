import React from 'react'

const experiences = [
  {
    role: 'Front‑End Developer',
    company: 'Sa Map Organization',
    period: 'August 2024 — May 2025',
    bullets: [
      'Developed and maintained responsive web interfaces using React.js and modern CSS frameworks',
      'Collaborated with backend developers to integrate RESTful APIs',
      'Improved user experience by optimizing UI performance and responsiveness',
      'Implemented reusable components to enhance development efficiency',
      'Participated in team discussions and followed Agile development practices'

    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="border-b border-(--border) scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-(--text)">Experience</h2>
        <div className="space-y-6">
          {experiences.map((e) => (
            <article key={e.role + e.company} className="relative rounded-[1.75rem] border border-(--border) bg-(--surface) p-6 pl-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:pl-10">
              <span className="absolute left-3 top-8 h-4 w-4 rounded-full border-4 border-(--bg) bg-(--primary) sm:left-4" />
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-bold tracking-tight text-(--text) ms-3">{e.role}</h3>
                  <h3 className="text-md font-semibold text-(--text)">{e.period}</h3>
                </div>
                <span className="text-md font-bold text-(--text)">
                  {e.company}
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-(--muted)">
                  {e.bullets.map(b => 
                    <li key={b} className="flex gap-3 leading-5 lg:leading-7">
                      <span>-</span>
                          <span>{b}</span>
                        </li>
                  )}
                </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

