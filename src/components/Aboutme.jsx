import React from 'react'
import { faArrowRight, faDownload, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Reveal } from './Reveal.jsx'

const stats = [
  { value: '3.94', label: 'GPA' },
  { value: '3', label: 'Featured projects' },
  { value: '6', label: 'Certificates' },
]

const Hero = () => {
  return (
    <section id="aboutme" className="relative overflow-hidden border-b border-(--border) scroll-mt-20">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ backgroundImage: 'var(--gradient)' }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[1.3fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
        <Reveal className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3.5 py-1.5 text-sm font-medium text-(--muted) shadow-sm">
            <span className="status-dot h-2 w-2 rounded-full bg-green-500" />
            Open to internships &amp; junior roles
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-(--text) sm:text-5xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient">Kyu Kyu Thin</span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-(--text) sm:text-xl">
            Software Engineering Student &amp; Junior Full-Stack Developer
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-(--muted) sm:text-lg sm:leading-8">
            I build responsive web and mobile apps with React, React Native and Spring Boot. Currently studying at Mae Fah Luang University, with a strong interest in backend development and system design.
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-(--muted)">
            <FontAwesomeIcon icon={faLocationDot} className="text-(--primary)" />
            Chiang Rai, Thailand
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kyukyuthin7403@gmail.com&su=Hire%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-(--surface) px-6 py-3.5 font-semibold text-(--text) shadow-sm transition hover:-translate-y-0.5 hover:border-(--primary)"
              href="/assets/KyuKyuThin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Resume
            </a>
            <a
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-(--border) bg-(--surface) text-(--text) shadow-sm transition hover:-translate-y-0.5 hover:border-(--primary) hover:text-(--primary)"
              href="https://github.com/kyuthin74"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-(--border) bg-(--surface) text-(--text) shadow-sm transition hover:-translate-y-0.5 hover:border-(--primary) hover:text-(--primary)"
              href="https://www.linkedin.com/in/kyu-kyu-thin-273208214"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-(--border) pt-6">
            {stats.map(s => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold tracking-tight text-(--text) sm:text-3xl">{s.value}</dd>
                <p className="text-xs text-(--muted) sm:text-sm">{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="animate-float relative">
            <div
              className="absolute -inset-3 rounded-full opacity-70 blur-xl"
              style={{ backgroundImage: 'var(--gradient)' }}
              aria-hidden
            />
            <div className="relative rounded-full p-1.5" style={{ backgroundImage: 'var(--gradient)' }}>
              <img
                src="/assets/profile.png"
                alt="Portrait of Kyu Kyu Thin"
                className="aspect-square w-[min(62vw,14rem)] rounded-full bg-(--surface) object-cover lg:w-[min(30vw,22rem)]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
