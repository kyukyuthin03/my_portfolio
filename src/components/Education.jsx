import React from 'react'

const educationItems = [
  {
    title: 'Bachelor of Engineering in Software Engineering',
    gpa: 'GPA: 3.94',
    subtitle: 'Expected May 2027',
    description: 'School of Applied Digital Technology, Mae Fah Luang University, Chiang Rai, Thailand',
  }
]

const Education = () => {
  return (
    <section id="education" className="border-b border-(--border) scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 lg:px-8">
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-(--text)">Education</h2>
          {educationItems.map(item => (
            <article key={item.title} className="rounded-[1.75rem] p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-(--text)">{item.title}</h3>
              <p className="sm:mt-2 text-lg sm:text-xl font-semibold tracking-tight text-(--text)">{item.gpa}</p>
            </div>
              <p className="mt-2 text-md font-medium text-(--primary)">{item.subtitle}</p>
              <p className="mt-4 leading-7 text-(--muted)">{item.description}</p>
            </article>
          ))}
        
      </div>
    </section>
  )
}

export default Education