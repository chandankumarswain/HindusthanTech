/* ------------------------------------------------------------------
   Footer — premium industrial close.
   Layout inspired by the reference (company overview · link columns ·
   contact · bottom bar · oversized wordmark), rebuilt in the HTPL
   design system. Every fact is sourced from the existing site
   content (Nav / About / Products / Contact / StatsBar) — nothing
   here is invented.
------------------------------------------------------------------ */

import { useState } from 'react'

/* Newsletter signups post to a PHP handler at the site root
   (public/newsletter.php), which emails admin@hindusthantechnologies.com
   through the same Google Workspace SMTP config as the contact form. */
const NEWSLETTER_ENDPOINT = '/newsletter.php'

// real primary navigation (mirrors Nav.jsx)
const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Technology', href: '#technology' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact Us', href: '#contact' },
]

// real product range (mirrors Products.jsx)
const PRODUCTS = [
  'Firefighting Trucks',
  'Trailer & Portable Pumps',
  'Quick Response Vehicles',
  'Diesel Bowser & Oil Tanker',
  'MOSRU / Explosive Van',
  'Blood Donation Van (MBDV)',
]

// real industries served (mirrors About.jsx)
const INDUSTRIES = [
  'Oil, Gas & Refineries',
  'Ports & Maritime',
  'Defence & Aerospace',
  'Power & Energy',
  'Airports & Aviation',
  'Industrial & Manufacturing',
]

// real recognitions (preserved from the existing footer)
const CERTS = ['MSME', 'DGQA', 'Z CERT', 'ISO 9001', 'CMVR']

export default function Footer() {
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle')

  const handleSubscribe = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const body = new URLSearchParams(new FormData(form)) // urlencoded → no CORS preflight

    setStatus('sending')
    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, { method: 'POST', body })
      const data = await res.json().catch(() => ({ success: res.ok }))
      if (data.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Newsletter subscription failed:', err)
      setStatus('error')
    }
  }

  return (
    <footer className="footer">
      {/* warm corner glow — brand red only (decorative) */}
      <span className="footer-glow" aria-hidden="true" />

      <div className="wrap">
        <div className="footer-top">
          {/* COLUMN 01 — company overview + newsletter */}
          <div className="footer-brand reveal">
            <p className="footer-about">
              Manufacturers of firefighting vehicles and special purpose vehicles since 1987.
              Trusted by India's leading PSUs, defence establishments, and industrial giants.
            </p>
            <p className="footer-meta">
              <span><strong>Est. 1987</strong> · Jagatpur, Cuttack</span>
              <span><strong>38+</strong> years · <strong>2000+</strong> vehicles · <strong>50+</strong> PSU clients</span>
            </p>

            {/* newsletter — posts to newsletter.php, delivered to admin@ */}
            <div className="footer-news">
              <h3 className="footer-news-title">Stay connected</h3>
              <p className="footer-news-sub">
                Get product updates, project highlights, and manufacturing news from HTPL.
              </p>
              <form className="footer-news-form" onSubmit={handleSubscribe} noValidate>
                <label className="sr-only" htmlFor="footer-news-email">Email address</label>
                <input
                  id="footer-news-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  disabled={status === 'sending'}
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  aria-label="Subscribe to the HTPL newsletter"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
              {status !== 'idle' && status !== 'sending' && (
                <p className={`footer-news-msg is-${status}`} role="status">
                  {status === 'sent'
                    ? 'Thank you — you are on the list.'
                    : 'Sorry, that did not go through. Please try again.'}
                </p>
              )}
            </div>
          </div>

          {/* COLUMN 02 — quick links */}
          <nav className="footer-col reveal" aria-label="Quick links">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul>
              {QUICK_LINKS.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          {/* COLUMN 03 — products */}
          <nav className="footer-col reveal" aria-label="Products">
            <h3 className="footer-col-title">Products</h3>
            <ul>
              {PRODUCTS.map((p) => (
                <li key={p}><a href="#products">{p}</a></li>
              ))}
            </ul>
          </nav>

          {/* COLUMN 04 — industries served */}
          <nav className="footer-col reveal" aria-label="Industries served">
            <h3 className="footer-col-title">Industries Served</h3>
            <ul>
              {INDUSTRIES.map((it) => (
                <li key={it}><a href="#about">{it}</a></li>
              ))}
            </ul>
          </nav>

          {/* COLUMN 05 — contact information */}
          <div className="footer-col footer-contact reveal">
            <h3 className="footer-col-title">Contact Info</h3>
            <div className="ci">
              <div className="k">Workshop Facility</div>
              <div className="v">Plot No. 5 &amp; 7, Old Industrial Estate, Jagatpur, Cuttack – 754021, Odisha</div>
            </div>
            <div className="ci">
              <div className="k">Registered Corporate Office</div>
              <div className="v">Sivapuri, Nimpur, Jagatpur, Cuttack – 754021, Odisha</div>
            </div>
            <div className="ci">
              <div className="k">Phone</div>
              <div className="v"><a href="tel:+919437026348">9437026348</a> / <a href="tel:+919437055701">9437055701</a></div>
            </div>
            <div className="ci">
              <div className="k">Email</div>
              <div className="v"><a href="mailto:admin@hindusthantechnologies.com">admin@hindusthantechnologies.com</a></div>
            </div>
            <div className="ci">
              <div className="k">Working Hours</div>
              <div className="v">Mon – Sat: 9:00 AM – 6:00 PM<br />Sunday: Closed</div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2026 Hindusthan Technologies Pvt. Ltd. All rights reserved.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <div className="footer-certs" aria-label="Certifications & recognitions">
            {CERTS.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* oversized brand wordmark image (decorative), filling the footer width */}
      <img className="footer-watermark" src="/images/footer-logo.png" alt="" aria-hidden="true" />
    </footer>
  )
}
