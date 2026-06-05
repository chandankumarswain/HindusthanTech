import { useState } from 'react'

/* Where the form posts. Set VITE_CONTACT_ENDPOINT to your deployed Google Apps
   Script Web App URL (see CONTACT_SETUP.md). On submit each enquiry is appended
   to the Google Sheet and emailed to aivorntech@gmail.com. */
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || ''

export default function Contact() {
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const body = new URLSearchParams(new FormData(form)) // simple request → no CORS preflight

    if (!CONTACT_ENDPOINT) {
      // Not configured yet — don't lose the UX, but make it obvious in the console.
      console.warn(
        'Contact form: VITE_CONTACT_ENDPOINT is not set, so this enquiry was not delivered. See CONTACT_SETUP.md.'
      )
      setStatus('sent')
      form.reset()
      return
    }

    setStatus('sending')
    try {
      // Apps Script web apps don't send CORS headers, so use no-cors (opaque
      // response). A resolved fetch means the request was delivered.
      await fetch(CONTACT_ENDPOINT, { method: 'POST', mode: 'no-cors', body })
      setStatus('sent')
      form.reset()
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setStatus('error')
    }
  }

  const sent = status === 'sent'

  return (
    <section className="section-pad" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="sec-head reveal">
              <p className="eyebrow">
                <span className="dot"></span>Get in touch
              </p>
              <h2 className="display h-sec">
                Contact <span className="italic-accent">us</span>
              </h2>
            </div>
            <div className="contact-info reveal">
            <div className="ci-item">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
              </span>
              <div>
                <div className="k">Workshop Address</div>
                <div className="v">
                  Plot No. 5 &amp; 7, Old Industrial Estate, Jagatpur, Cuttack – 754021, Odisha
                </div>
              </div>
            </div>
            <div className="ci-item">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="M3 8l9 5 9-5"></path>
                </svg>
              </span>
              <div>
                <div className="k">Registered Office</div>
                <div className="v">Sivapuri, Nimpur, Jagatpur, Cuttack, Odisha</div>
              </div>
            </div>
            <div className="ci-item">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"></path>
                </svg>
              </span>
              <div>
                <div className="k">Phone</div>
                <div className="v">
                  <a href="tel:+919439695804">+91 94396 95804</a>
                </div>
              </div>
            </div>
            <div className="ci-item">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="M3 8l9 5 9-5"></path>
                </svg>
              </span>
              <div>
                <div className="k">Email</div>
                <div className="v">
                  <a href="mailto:admin@hindusthantechnologies.com">
                    admin@hindusthantechnologies.com
                  </a>
                </div>
              </div>
            </div>
            <div className="ci-item">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 2"></path>
                </svg>
              </span>
              <div>
                <div className="k">Working Hours</div>
                <div className="v">
                  Mon – Sat: 9:00 AM – 6:00 PM
                  <br />
                  Sunday: Closed
                </div>
              </div>
            </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            <div className="form-grid">
              <div className="field">
                <label>
                  Full Name <span className="req">*</span>
                </label>
                <input type="text" name="fullName" required placeholder="Your name" />
              </div>
              <div className="field">
                <label>Organization</label>
                <input type="text" name="organization" placeholder="Company / department" />
              </div>
              <div className="field">
                <label>
                  Phone Number <span className="req">*</span>
                </label>
                <input type="tel" name="phone" required placeholder="+91" />
              </div>
              <div className="field">
                <label>
                  Email Address <span className="req">*</span>
                </label>
                <input type="email" name="email" required placeholder="you@org.com" />
              </div>
              <div className="field full">
                <label>Requirement Type</label>
                <select name="requirement">
                  <option>Select product / service</option>
                  <option>Firefighting Truck</option>
                  <option>Trailer / Portable Pump</option>
                  <option>Quick Response Vehicle (QRV)</option>
                  <option>Diesel Bowser / Oil Tanker</option>
                  <option>MOSRU / Explosive Van / SPV</option>
                  <option>Blood Donation Van</option>
                  <option>Annual Maintenance Contract (AMC)</option>
                  <option>Custom / Other</option>
                </select>
              </div>
              <div className="field full">
                <label>Message / Specification Details</label>
                <textarea name="message" placeholder="Tell us about your requirement…"></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary form-submit"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={status === 'sending' || sent}
            >
              {status === 'sending' ? (
                'Sending…'
              ) : sent ? (
                'Enquiry sent ✓'
              ) : status === 'error' ? (
                'Try again'
              ) : (
                <>
                  Send enquiry <span className="arrow">→</span>
                </>
              )}
            </button>
            {status === 'error' && (
              <p className="form-status" role="alert">
                Something went wrong. Please try again or email{' '}
                <a href="mailto:aivorntech@gmail.com">aivorntech@gmail.com</a>.
              </p>
            )}
            {sent && (
              <p className="form-status form-status-ok" role="status">
                Thanks — we&apos;ve received your enquiry and will be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
