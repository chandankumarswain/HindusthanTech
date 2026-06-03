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

/* Core values — text verbatim from the HTPL company profile (PDF) */
const VALUES = [
  {
    name: 'Safety',
    desc: 'We prioritize safety in every aspect of our design, manufacturing, testing, and service processes to support reliable emergency response operations.',
    icon: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />,
  },
  {
    name: 'Quality',
    desc: 'We are committed to delivering high-quality fire fighting vehicles and equipment that meet stringent performance and durability standards.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12l2.5 2.5 5-5" />
      </>
    ),
  },
  {
    name: 'Integrity',
    desc: 'We conduct our business with honesty, transparency, accountability, and ethical practices in all dealings with customers, employees, suppliers, and government organizations.',
    icon: (
      <>
        <path d="M12 3v18M7 21h10M5 7h14" />
        <path d="M8 7l-3 5.5h6zM16 7l-3 5.5h6z" />
      </>
    ),
  },
  {
    name: 'Innovation',
    desc: 'We continuously improve our technology, engineering, and manufacturing capabilities to provide advanced and efficient fire fighting solutions.',
    icon: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 0 0-3.8 10.6c.5.4.8 1 .8 1.6v.8h6v-.8c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z" />
      </>
    ),
  },
  {
    name: 'Customer Commitment',
    desc: 'We strive to understand and fulfill customer requirements through dependable products, timely delivery, and responsive after-sales support.',
    icon: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3L3 21l1.2-3.6A8.4 8.4 0 1 1 21 11.5z" />,
  },
  {
    name: 'Reliability',
    desc: 'We build products that emergency services can depend upon during critical operations where performance and durability are essential.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    name: 'Teamwork',
    desc: 'We value collaboration, mutual respect, and shared responsibility among employees, partners, and stakeholders.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M15.5 14c2.5 0 4.5 1.8 4.5 4.5" />
      </>
    ),
  },
  {
    name: 'Excellence',
    desc: 'We pursue operational excellence through continuous improvement, skilled workmanship, and adherence to industry standards.',
    icon: <path d="M12 3l2.6 5.6 6 .8-4.4 4.1 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.8z" />,
  },
  {
    name: 'Responsibility',
    desc: 'We are committed to contributing to public safety, environmental responsibility, and sustainable business practices.',
    icon: (
      <>
        <path d="M5 20c0-8 6-15 15-15 0 8-6 15-15 15z" />
        <path d="M5 20c3.5-1 7-4 9-8" />
      </>
    ),
  },
]

export default function About() {
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

        {/* industries served — preserved, now a full-width band */}
        <div className="about2-industries reveal">
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

        {/* 3 — vision & mission */}
        <div className="about-block">
          <div className="about-block-head reveal">
            <p className="eyebrow">
              <span className="dot"></span>Our purpose
            </p>
            <h3 className="display about-subhead">Vision &amp; mission</h3>
          </div>
          <div className="about-vm-grid">
            <article className="vm-card reveal">
              <span className="ic" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <h3>Vision</h3>
              <p>
                To become a nationally trusted leader in fire tender and emergency vehicle
                manufacturing by delivering innovative, reliable, and high-quality solutions
                that enhance fire safety and emergency response capabilities.
              </p>
            </article>
            <article className="vm-card reveal">
              <span className="ic" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1.5" />
                </svg>
              </span>
              <h3>Mission</h3>
              <p>
                To manufacture reliable and high-performance fire-fighting and rescue vehicles
                through innovative engineering, quality manufacturing, timely delivery, and
                dedicated customer support, while contributing to public safety and emergency
                preparedness.
              </p>
            </article>
          </div>
        </div>

        {/* 4 — core values */}
        <div className="about-block">
          <div className="about-block-head reveal">
            <p className="eyebrow">
              <span className="dot"></span>What we stand for
            </p>
            <h3 className="display about-subhead">Our core values</h3>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <article className="value-card reveal" key={v.name}>
                <span className="ic" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {v.icon}
                  </svg>
                </span>
                <h4>{v.name}</h4>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
