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
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"></path>
                </svg>
              </span>
              <div>
                <div className="k">Phone</div>
                <div className="v">
                  <a href="tel:+919437055701">+91 9437055701</a> (M)
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
                  <path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M13 9h.01M9 13h.01M13 13h.01M9 17h.01M13 17h.01"></path>
                </svg>
              </span>
              <div>
                <div className="k">Registered Corporate Office</div>
                <div className="v">
                  Sivapuri, Nimpur, Jagatpur, Cuttack – 754021, Odisha
                  <br />
                  <a href="tel:+916712491348">0671-2491348</a> (L),{' '}
                  <a href="tel:+919437026348">9437026348</a> (M)
                </div>
              </div>
            </div>
            <div className="ci-item">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
              </span>
              <div>
                <div className="k">Factory</div>
                <div className="v">
                  Plot No. 5 &amp; 7, Old Industrial Estate, Jagatpur, Cuttack – 754021, Odisha
                  <br />
                  Ph: <a href="tel:+919437579348">9437579348</a>
                </div>
              </div>
            </div>
            <div className="ci-item">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <circle cx="9" cy="8" r="3"></circle>
                  <circle cx="17" cy="9" r="2.5"></circle>
                  <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M15.5 14c2.5 0 4.5 1.8 4.5 4.5"></path>
                </svg>
              </span>
              <div>
                <div className="k">Departments</div>
                <div className="ci-depts">
                  <div className="ci-dept">
                    <span className="ci-dept-ic">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 10v4M4 12l11-5v10L4 12z"></path>
                        <path d="M15 9a3.5 3.5 0 0 1 0 6"></path>
                      </svg>
                    </span>
                    <div>
                      <div className="ci-dept-name">Sales &amp; Marketing</div>
                      <div className="ci-dept-sub">
                        <a href="mailto:marketing@hindusthantechnologies.com">marketing@hindusthantechnologies.com</a>
                        <br />
                        <a href="tel:+919439695800">9439695800</a>
                      </div>
                    </div>
                  </div>
                  <div className="ci-dept">
                    <span className="ci-dept-ic">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 13v-1a8 8 0 0 1 16 0v1"></path>
                        <path d="M4 13a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2v-1zM20 13a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2v-1z"></path>
                        <path d="M18 16v1a3 3 0 0 1-3 3h-3"></path>
                      </svg>
                    </span>
                    <div>
                      <div className="ci-dept-name">After-Sales Support</div>
                      <div className="ci-dept-sub">
                        <a href="mailto:supervisor@hindusthantechnologies.com">supervisor@hindusthantechnologies.com</a>
                        <br />
                        <a href="tel:+919439695814">9439695814</a>
                      </div>
                    </div>
                  </div>
                  <div className="ci-dept">
                    <span className="ci-dept-ic">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 7a3.5 3.5 0 0 0-4.6 4.2L3 17.6 6.4 21l6.4-6.4A3.5 3.5 0 0 0 17 10l-2.3 2.3L12 9.6 14.3 7z"></path>
                      </svg>
                    </span>
                    <div>
                      <div className="ci-dept-name">Technical &amp; QA</div>
                      <div className="ci-dept-sub">
                        <a href="mailto:tech.qa@hindusthantechnologies.com">tech.qa@hindusthantechnologies.com</a>
                        <br />
                        <a href="tel:+919439695817">9439695817</a>
                      </div>
                    </div>
                  </div>
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
