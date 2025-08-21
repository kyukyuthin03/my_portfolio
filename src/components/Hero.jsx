import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="gradient-text">Kyu Kyu Thin</span>
          </h1>
          <p className="subtitle">Software Engineering Student • Junior Front‑End Developer</p>
          <div className="cta-row">
            <a className="btn primary" href="/assets/CV.pdf" download>
              Download CV
            </a>
            <a
              className="btn ghost"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kyukyuthin7403@gmail.com&su=Hire%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden>
          <div
            className="sunset-circle photo"
            style={{
              backgroundImage: 'url(/assets/profile.png), var(--gradient)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '50%',
              border: '4px solid #fff',
              boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

