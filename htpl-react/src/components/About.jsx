import { useEffect } from 'react'
import { CREDENTIALS } from '../data/company'

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

export default function About() {
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
    <section className="about2" id="about">
      <div className="about2-shell">
        {/* 1 + 2 — company story (left) + image composition (right) */}
        <div className="about2-split">
          <div className="about2-left reveal">
            <p className="eyebrow">
              <span className="dot"></span>Our story
            </p>
            <h2 className="display about2-head">
              Engineered for the
              <br />
              <span className="italic-accent">industries that matter.</span>
            </h2>
            <p className="about2-lead">
              Founded in <strong>1987</strong> as Hindustan Enterprises by{' '}
              <strong>Shri Mohan Ranjan Panda</strong> at Jagatpur, Cuttack, and incorporated
              as Hindusthan Technologies Pvt. Ltd. in <strong>2010</strong>. An MSME-recognised
              manufacturer with over <strong>three decades</strong> of expertise in
              safety-critical engineering — trusted across India's most critical sectors.
            </p>

            <div className="about2-stat">
              <span className="n">
                38<span className="accent">+</span>
              </span>
              <span className="l">Years of expertise · 2000+ vehicles delivered</span>
            </div>

            <div className="about2-actions">
              <a href="#products" className="btn btn-primary">
                Explore products <span className="arrow">→</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Talk to our team
              </a>
            </div>

            <ul className="about2-chips" aria-label="Certifications and recognitions">
              {CREDENTIALS.map((c) => (
                <li key={c} className="about2-chip">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>

            <p className="about2-addr">
              Workshop Facility: Plot No. 5 &amp; 7, Old Industrial Estate, Jagatpur ·
              Registered Corporate Office: Sivapuri, Nimpur, Jagatpur, Cuttack – 754021, Odisha.
            </p>
          </div>

          {/* image composition — real HTPL product visuals */}
          <div className="about2-media reveal">
            <figure className="about2-fig is-lg">
              <img
                src="/images/fleet/delhi-foam-tender.png"
                alt="HTPL heavy-duty firefighting truck built in-house"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Jagatpur, Cuttack · Make in India</figcaption>
            </figure>
            <figure className="about2-fig is-sm">
              <img
                src="/images/fleet/water-tender-1920.png"
                alt="Engine integration and precision engineering"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Precision engineering</figcaption>
            </figure>
            <figure className="about2-fig is-sm">
              <img
                src="/images/fleet/hyundai-water-tender.png"
                alt="HTPL quick response vehicle ready for delivery"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Quick response vehicle</figcaption>
            </figure>
          </div>
        </div>

        {/* What we serve — sticky aside + scroll-driven industry cards (reference-inspired) */}
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
