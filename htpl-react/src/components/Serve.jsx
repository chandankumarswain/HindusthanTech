import { useEffect } from 'react'

/* "What we serve" — sticky aside + scroll-driven industry cards.
   Extracted from About so it can stand on its own below the Reach
   ("Nationwide presence") section. Reuses the existing .about2-* / .serve-*
   styles verbatim; .serve-section only resets the divider/offset it needed
   back when it sat inside the About block. */

const INDUSTRIES = [
  {
    name: 'Oil, Gas & Refineries',
    desc: 'High-capacity fire tenders for IOCL, BPCL and petrochemical plants.',
    href: '#products',
  },
  {
    name: 'Ports & Maritime',
    desc: 'Rapid-response vehicles for coastal facilities and port authorities.',
    href: '#products',
  },
  {
    name: 'Defence & Aerospace',
    desc: 'DGQA-approved builds trusted by the Indian Navy and ISRO.',
    href: '#clients',
  },
  {
    name: 'Power & Energy',
    desc: 'Fire safety fleets for NTPC and thermal & power generation sites.',
    href: '#products',
  },
  {
    name: 'Airports & Aviation',
    desc: 'Crash fire tenders engineered for airside emergency response.',
    href: '#products',
  },
  {
    name: 'Industrial & Manufacturing',
    desc: 'Special purpose vehicles for plants, estates and refineries.',
    href: '#products',
  },
]

export default function Serve() {
  /* Highlight the industry card crossing the viewport centre — sequential,
     storytelling read on desktop; reuses the site's IntersectionObserver
     animation language (no new deps). Native position:sticky handles the
     sticky-left / release-at-end behaviour. */
  useEffect(() => {
    const cards = document.querySelectorAll('.serve-card')
    if (!cards.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle('is-active', e.isIntersecting))
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    cards.forEach((c) => io.observe(c))
    return () => io.disconnect()
  }, [])

  return (
    <section className="about2 serve-section" id="serve">
      <div className="about2-shell">
        <div className="about2-industries">
          <div className="serve-layout">
            <aside className="serve-aside reveal">
              <p className="eyebrow">
                <span className="dot"></span>What we serve
              </p>
              <h3 className="display about2-subhead">Built for critical industries</h3>
              <div className="serve-collage">
                <p className="serve-note">
                  Purpose-built fleets, trusted across India's most critical sectors.
                </p>
                <figure className="serve-pic serve-pic-1">
                  <img
                    src="/images/fleet/dcp-tender.jpg"
                    alt="HTPL DCP fire tender"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure className="serve-pic serve-pic-2">
                  <img
                    src="/images/fleet/ntpc-foam-fleet.jpg"
                    alt="HTPL foam tender fleet for power plants"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure className="serve-pic serve-pic-3">
                  <img
                    src="/images/fleet/bpcl-mosru-tanker.jpg"
                    alt="HTPL special-purpose vehicle serving India's critical industries"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure className="serve-pic serve-pic-4">
                  <img
                    src="/images/fleet/tn-ladder-tender.jpg"
                    alt="HTPL ladder fire tender for state fire services"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <figure className="serve-pic serve-pic-5">
                  <img
                    src="/images/fleet/chhattisgarh-tender.jpg"
                    alt="HTPL fire & emergency tender deployed with a state fire service"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
              <a href="#clients" className="about2-link">
                Know our clients <span className="arrow">→</span>
              </a>
            </aside>

            <ul className="industries serve-list">
              {INDUSTRIES.map((it, i) => (
                <li key={it.name}>
                  <a className="industry-row serve-card reveal" href={it.href}>
                    <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                    <span className="it-text">
                      <span className="it-name">{it.name}</span>
                      <span className="it-desc">{it.desc}</span>
                    </span>
                    <span className="it-arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h13M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
