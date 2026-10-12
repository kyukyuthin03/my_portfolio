import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Reveal, SectionHeading } from './Reveal.jsx'

const educationItems = [
  {
    title: 'Bachelor of Engineering in Software Engineering',
    gpa: 'GPA 3.94',
    subtitle: 'Expected May 2027',
    description: 'School of Applied Digital Technology, Mae Fah Luang University, Chiang Rai, Thailand',
  },
]

const Education = () => {
  return (
    <section id="education" className="border-b border-(--border) scroll-mt-20">
      <div className="mx-auto w-full max-w-4xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="Background" title="Education" />
        {educationItems.map(item => (
          <Reveal key={item.title}>
            <article className="flex gap-5 rounded-3xl border border-(--border) bg-(--surface) p-6 shadow-(--shadow) sm:p-8">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--primary-soft) text-xl text-(--primary)">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-lg font-bold tracking-tight text-(--text) sm:text-xl">{item.title}</h3>
                  <span className="w-fit shrink-0 rounded-full bg-(--primary-soft) px-3 py-1 text-sm font-semibold text-(--primary)">{item.gpa}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-(--primary)">{item.subtitle}</p>
                <p className="mt-3 leading-7 text-(--muted)">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Education
