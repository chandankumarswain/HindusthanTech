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

const CREDENTIALS = ['MSME Recognized', 'DGQA Approved', 'ISO 9001:2015']

export default function About() {
  return (
    <section className="about2" id="about">
      <div className="about2-shell">
        <div className="about2-split">
          {/* LEFT — story + CTA */}
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
              Founded in <strong>1987</strong> at Jagatpur, Cuttack by{' '}
              <strong>Shri Mohan Ranjan Panda</strong>, Hindusthan Technologies Pvt. Ltd.
              has spent over <strong>three decades</strong> building world-class firefighting and
              special purpose vehicles — trusted across India's most critical sectors.
            </p>

            <div className="about2-stat">
              <span className="n">
                38<span className="accent">+</span>
              </span>
              <span className="l">Years of excellence · 500+ vehicles delivered</span>
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
              Workshop: Plot No. 5 &amp; 7, Old Industrial Estate, Jagatpur · Regd. Office:
              Sivapuri, Nimpur, Jagatpur, Cuttack, Odisha.
            </p>
          </div>

          {/* RIGHT — industries served */}
          <div className="about2-right reveal">
            <p className="eyebrow">
              <span className="dot"></span>What we serve
            </p>
            <h3 className="display about2-subhead">Built for critical industries</h3>

            <ul className="industries">
              {INDUSTRIES.map((it, i) => (
                <li key={it.name}>
                  <a className="industry-row" href={it.href}>
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

            <a href="#clients" className="about2-link">
              Know our clients <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
