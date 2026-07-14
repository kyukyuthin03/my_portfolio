import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 lg:px-8">
        <h2 className="mb-2 text-center text-3xl font-extrabold tracking-tight text-(--text)">Contact</h2>
        <h3 className="text-xl text-center font-semibold text-(--text)">Let's work together!</h3>
        <div className="rounded-4xl p-6 text-center sm:p-8">
          <div className="space-y-6">
            <div className="space-y-2 text-(--muted)">
              <p><a className="font-semibold text-(--text) transition hover:text-(--primary)" href="mailto:kyukyuthin7403@gmail.com">kyukyuthin7403@gmail.com</a></p>
              <p>Mae Fah Luang University, Thasud, Mueang Chiang Rai, Chiang Rai, Thailand</p>
            </div>
            <div className="flex items-center justify-center gap-3" aria-label="social links">
              <a className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border) bg-(--bg) text-(--text) transition hover:-translate-y-0.5 hover:border-(--primary) hover:text-(--primary)" href="https://www.facebook.com/kyu.kyu.thin.70448" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border) bg-(--bg) text-(--text) transition hover:-translate-y-0.5 hover:border-(--primary) hover:text-(--primary)" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border) bg-(--bg) text-(--text) transition hover:-translate-y-0.5 hover:border-(--primary) hover:text-(--primary)" href="www.linkedin.com/in/kyu-kyu-thin-273208214" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

