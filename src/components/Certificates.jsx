import React, { useEffect, useMemo, useState } from 'react'

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
  const [activeIndex, setActiveIndex] = useState(0)
  const total = certificatesAll.length

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % total)
  //   }, 4500)

  //   return () => clearInterval(interval)
  // }, [total])

  const goTo = (index) => {
    const next = (index + total) % total
    setActiveIndex(next)
  }

  const getRelativePosition = (index) => {
    const diff = (index - activeIndex + total) % total
    if (diff === 0) return 0
    if (diff === 1) return 1
    if (diff === total - 1) return -1
    if (diff === 2) return 2
    if (diff === total - 2) return -2
    return 99
  }

  const activeCertificate = useMemo(() => certificatesAll[activeIndex], [activeIndex])

  return (
    <section id="certificates" className="border-b border-(--border) scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 lg:px-8">
        <h2 className="-mb-6 text-center text-3xl font-extrabold tracking-tight text-(--text)">Certificates</h2>

        <div className="mx-auto w-full max-w-5xl space-y-6" role="region" aria-label="Certificates carousel">
          <div className="relative h-96 overflow-hidden rounded-4xl p-4 sm:h-112">
            {certificatesAll.map((certificate, index) => {
              const position = getRelativePosition(index)
const positionClass =
  position === 0
    ? 'translate-x-[calc(-50%+0%)] scale-100 opacity-100 z-30'
    : position === -1
      ? 'translate-x-[calc(-50%-35%)] scale-90 opacity-70 z-20'
      : position === 1
        ? 'translate-x-[calc(-50%+35%)] scale-90 opacity-70 z-20'
        : position === -2
          ? 'translate-x-[calc(-50%-58%)] scale-75 opacity-25 z-10'
          : position === 2
            ? 'translate-x-[calc(-50%+58%)] scale-75 opacity-25 z-10'
            : 'translate-x-[calc(-50%+0%)] scale-75 opacity-0 pointer-events-none'

              return (
                <article
                  key={certificate.title + certificate.issuer}
                  className={`absolute left-1/2 top-1/2 w-[min(22rem,82vw)] -translate-y-1/2 transition-all duration-500 ease-out ${positionClass}`}
                  aria-hidden={position !== 0}
                  onClick={() => goTo(index)}
                >
                  <div className="overflow-hidden rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                    <img
                      className="h-full w-full object-cover"
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      onError={(event) => {
                        event.currentTarget.src = '/assets/profile.png'
                      }}
                    />
                  </div>
                </article>
              )
            })}
          </div>

          <div className="rounded-3xl -mt-20 px-6 text-center">
            <h3 className="text-xl font-bold tracking-tight text-(--text)">{activeCertificate.title}</h3>
            <p className="mt-2 text-(--muted)">{activeCertificate.issuer}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              className="rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 text-sm font-semibold text-(--text) transition hover:-translate-y-0.5"
              type="button"
              aria-label="Previous certificate"
              onClick={() => goTo(activeIndex - 1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-4 w-4 fill-current">
    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
  </svg>
            </button>

            <div className="flex items-center gap-2" aria-label="Select certificate slide">
              {certificatesAll.map((certificate, index) => (
                <button
                  key={certificate.title}
                  type="button"
                  className={`h-3 w-3 rounded-full transition ${index === activeIndex ? 'scale-110 bg-(--primary)' : 'bg-(--border) hover:bg-(--muted)'}`}
                  onClick={() => goTo(index)}
                  aria-label={`Go to ${certificate.title}`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            <button
              className="rounded-2xl border border-(--border) bg-(--surface) px-4 py-3 text-sm font-semibold text-(--text) transition hover:-translate-y-0.5"
              type="button"
              aria-label="Next certificate"
              onClick={() => goTo(activeIndex + 1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-4 w-4 fill-current">
    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
  </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates