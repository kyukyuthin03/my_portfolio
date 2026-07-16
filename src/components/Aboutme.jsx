import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (
    <section id="aboutme" className="border-b border-(--border) scroll-mt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-10 lg:grid-cols-[1.25fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
        <div className="order-2 space-y-6 lg:order-0">
        <div className="space-y-6">
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-(--text) sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span style={{ backgroundImage: 'var(--gradient)' }} className="bg-clip-text text-transparent">Kyu Kyu Thin</span>
          </h1>
          <div className="inline-flex rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium text-(--muted) shadow-sm">
            Software Engineering Student • Junior Software Developer
          </div>
          <p className="max-w-2xl text-base leading-8 text-(--muted) sm:text-lg">
            A Software Engineering student at Mae Fah Luang University with experience in frontend, backend, and mobile development.
          </p>
          <p className="max-w-2xl text-base leading-8 text-(--muted) sm:text-lg">
            Proficient in JavaScript, React, React Native, and Java (Spring Boot), with a focus on building responsive and user-friendly applications. Strong interest in backend development and system design, with a commitment to continuous learning and improvement.
          </p>

          <div className="flex flex-wrap gap-3">
            <a className="inline-flex items-center justify-center rounded-2xl bg-(--primary) px-5 py-3 font-semibold text-white shadow-[0_15px_35px_rgba(255,107,107,0.28)] transition hover:-translate-y-0.5 hover:opacity-95" href="/assets/KyuKyuThin_Resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-(--border) bg-(--surface) px-5 py-3 font-semibold text-(--text) shadow-sm transition hover:-translate-y-0.5 hover:border-(--primary)"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kyukyuthin7403@gmail.com&su=Hire%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        </div>
        <div className="order-1 flex justify-center lg:order-0 lg:justify-end" aria-hidden>
  <div className="rounded-full border border-(--border) bg-(--surface) p-4 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
    <div style={{ backgroundImage: 'var(--gradient)' }} className="rounded-full p-1">
      <img
        src="/assets/profile.png"
        alt="Portrait of Kyu Kyu Thin"
        className="aspect-square w-[min(50vw,12rem)] rounded-full object-cover sm:w-[min(60vw,16rem)] lg:w-[min(82vw,24rem)]"
      />
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default Hero

