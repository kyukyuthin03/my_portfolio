import React from 'react'
import { Reveal, SectionHeading } from './Reveal.jsx'

const experiences = [
  {
    role: 'Front‑End Developer',
    company: 'Sa Map Organization',
    period: 'Aug 2024 — May 2025',
    bullets: [
      'Developed and maintained responsive web interfaces using React.js and modern CSS frameworks',
      'Collaborated with backend developers to integrate RESTful APIs',
      'Improved user experience by optimizing UI performance and responsiveness',
      'Implemented reusable components to enhance development efficiency',
      'Participated in team discussions and followed Agile development practices',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="border-b border-(--border) scroll-mt-20">
      <div className="mx-auto w-full max-w-4xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="Career" title="Experience" />
        <div className="relative space-y-8 border-l-2 border-(--border) pl-8 sm:pl-10">
          {experiences.map(e => (
            <Reveal key={e.role + e.company}>
              <article className="relative rounded-3xl border border-(--border) bg-(--surface) p-6 shadow-(--shadow) sm:p-8">
                <span className="absolute -left-[2.6rem] top-8 h-4 w-4 rounded-full border-4 border-(--bg) bg-(--primary) ring-2 ring-(--primary) sm:-left-[3.1rem]" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-bold tracking-tight text-(--text)">{e.role}</h3>
                  <span className="w-fit rounded-full bg-(--primary-soft) px-3 py-1 text-sm font-semibold text-(--primary)">{e.period}</span>
                </div>
                <p className="mt-1 font-semibold text-(--muted)">{e.company}</p>
                <ul className="mt-5 space-y-3 text-(--muted)">
                  {e.bullets.map(b => (
                    <li key={b} className="flex gap-3 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary)" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
