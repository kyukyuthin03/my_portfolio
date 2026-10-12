import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Reveal } from './Reveal.jsx'

const socials = [
  { label: 'GitHub', icon: faGithub, href: 'https://github.com/kyuthin74' },
  { label: 'LinkedIn', icon: faLinkedin, href: 'https://www.linkedin.com/in/kyu-kyu-thin-273208214' },
  { label: 'Facebook', icon: faFacebook, href: 'https://www.facebook.com/kyu.kyu.thin.70448' },
]

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-(--border) bg-(--surface) px-6 py-14 text-center shadow-(--shadow) sm:px-12">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[28rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
              style={{ backgroundImage: 'var(--gradient)' }}
              aria-hidden
            />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--primary)">Contact</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-(--text) sm:text-5xl">
                Let&apos;s <span className="text-gradient">work together</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-(--muted)">
                I&apos;m looking for an internship or junior developer role. If you think I&apos;d be a good fit, I&apos;d love to hear from you.
              </p>

              <a
                href="mailto:kyukyuthin7403@gmail.com"
                className="btn-primary mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <FontAwesomeIcon icon={faEnvelope} /> kyukyuthin7403@gmail.com
              </a>

              <p className="mt-6 inline-flex items-center gap-2 text-sm text-(--muted)">
                <FontAwesomeIcon icon={faLocationDot} className="text-(--primary)" />
                Mae Fah Luang University, Chiang Rai, Thailand
              </p>

              <div className="mt-6 flex items-center justify-center gap-3" aria-label="social links">
                {socials.map(s => (
                  <a
                    key={s.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-(--border) bg-(--bg) text-(--text) transition hover:-translate-y-0.5 hover:border-(--primary) hover:text-(--primary)"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <FontAwesomeIcon icon={s.icon} size="lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-10 text-center text-sm text-(--muted)">© {new Date().getFullYear()} Kyu Kyu Thin. Built with React &amp; Tailwind CSS.</p>
      </div>
    </section>
  )
}

export default Contact
