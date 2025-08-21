import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-title">Get in Touch</h3>
            <div className="contact-details">
              <p>123 Fifth Avenue, New York,<br/>NY 10160, USA</p>
              <p><a className="contact-email" href="mailto:kyukyuthin7403@gmail.com">kyukyuthin7403@gmail.com</a></p>
            </div>
            <div className="social-row" aria-label="social links">
              <a className="social-link" href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a className="social-link" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a className="social-link" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
            </label>
            <div className="form-actions">
              <button className="btn primary" type="submit">Send Message</button>
              {status && <span className="status">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

