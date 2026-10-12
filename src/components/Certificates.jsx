import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Reveal, SectionHeading } from './Reveal.jsx'

const certificatesAll = [
  {
    title: 'Web Development Fundamentals',
    issuer: 'Youth Career Institute (YCI)',
    image: '/assets/certificates/WebDevelopment.png',
    link: '/assets/certificates/WebDevelopment.pdf',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    image: '/assets/certificates/Responsive Web Design.png',
    link: '/assets/certificates/Responsive Web Design.png',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta (Coursera)',
    image: '/assets/certificates/CertificateOfFrontEndDevelopment.png',
    link: '/assets/certificates/CertificateOfFrontEndDevelopment.pdf',
  },
  {
    title: 'Programming Foundations with JavaScript, HTML & CSS',
    issuer: 'Duke University',
    image: '/assets/certificates/CertificateOfProgramming.png',
    link: '/assets/certificates/CertificateOfProgramming.pdf',
  },
  {
    title: 'Advanced Styling with Responsive Design',
    issuer: 'University of Michigan',
    image: '/assets/certificates/CertificateOfAdvancedStyling.png',
    link: '/assets/certificates/CertificateOfAdvancedStyling.pdf',
  },
  {
    title: 'Version Control',
    issuer: 'Meta (Coursera)',
    image: '/assets/certificates/Version Control.png',
    link: '/assets/certificates/Version Control.pdf',
  },
]

const Certificates = () => {
  const [active, setActive] = useState(0)
  const current = certificatesAll[active]

  return (
    <section id="certificates" className="border-b border-(--border) scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="Credentials" title="Certificates" subtitle="Courses and certifications that shaped my foundations." />

        <Reveal>
          <div className="grid items-stretch gap-6 lg:grid-cols-12">
            {/* preview */}
            <div className="group relative lg:col-span-7">
              <div className="absolute -inset-4 rounded-[2rem] opacity-25 blur-2xl" style={{ backgroundImage: 'var(--gradient)' }} aria-hidden />
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-full overflow-hidden rounded-3xl border border-(--border) bg-(--surface) p-3 shadow-(--shadow-lg)"
                aria-label={`Open ${current.title} certificate`}
              >
                <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl bg-(--bg-soft)">
                  <img
                    key={current.image}
                    src={current.image}
                    alt={`${current.title} certificate`}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                    onError={e => { e.currentTarget.src = '/assets/profile.png' }}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-4">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold text-(--text)">{current.title}</h3>
                    <p className="text-sm text-(--muted)">{current.issuer}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-(--primary-soft) px-3 py-2 text-sm font-semibold text-(--primary)">
                    View <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '12px' }} />
                  </span>
                </div>
              </a>
            </div>

            {/* list */}
            <ul className="flex flex-col gap-3 lg:col-span-5" aria-label="Select certificate">
              {certificatesAll.map((cert, i) => (
                <li key={cert.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={i === active ? 'true' : undefined}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition ${
                      i === active
                        ? 'border-(--primary) bg-(--surface) shadow-(--shadow)'
                        : 'border-(--border) bg-transparent hover:border-(--primary) hover:bg-(--surface)'
                    }`}
                  >
                    <img
                      src={cert.image}
                      alt=""
                      loading="lazy"
                      className="h-14 w-20 shrink-0 rounded-lg border border-(--border) bg-(--bg-soft) object-cover"
                      onError={e => { e.currentTarget.src = '/assets/profile.png' }}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-snug text-(--text)">{cert.title}</span>
                      <span className="mt-0.5 block text-xs text-(--muted)">{cert.issuer}</span>
                    </span>
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full transition ${i === active ? 'bg-(--primary)' : 'bg-(--border)'}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Certificates
