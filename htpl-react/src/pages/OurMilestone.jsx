import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* Dedicated "Our Milestone" page — a chronological journey of the company's
   key achievements. Reuses the global design tokens and the shared .ap-*
   helpers (shell, statsband, value cards, CTA) so it stays pixel-consistent
   with the rest of the site. Content below is placeholder copy — swap the
   years / descriptions for the real milestones when available. */

const MILESTONES = [
  {
    year: '1987',
    title: 'The foundation',
    desc: 'Hindusthan Technologies was established in Jagatpur, Cuttack, with a vision to build dependable firefighting and special-purpose vehicles in India.',
  },
  {
    year: '1995',
    title: 'First fleet expansion',
    desc: 'Scaled our in-house fabrication capacity and delivered the first batch of water tenders to state fire services across eastern India.',
  },
  {
    year: '2004',
    title: 'PSU partnerships',
    desc: 'Became an approved supplier to leading public-sector refineries and ports, engineering foam tenders and rescue vehicles to demanding specifications.',
  },
  {
    year: '2012',
    title: 'ISO 9001 certification',
    desc: 'Achieved ISO 9001 certification, formalising a stage-wise quality management system across design, fabrication, and testing.',
  },
  {
    year: '2018',
    title: 'Defence establishments',
    desc: 'Expanded into defence and DGQA-standard supply, delivering specialised airfield crash tenders and mobile support vehicles.',
  },
  {
    year: '2025',
    title: '2000+ vehicles delivered',
    desc: 'Crossed the milestone of 2000 vehicles delivered nationwide, backed by a modern plant, a dedicated testing facility, and 50+ PSU clients.',
  },
]

export default function OurMilestone() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main className="vm-page">
        {/* ---- Page header ---- */}
        <section className="vm-hero">
          <div className="ap-shell">
            <p className="ap-crumb reveal">
              <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
              <a href="/about">About</a> <span aria-hidden="true">/</span>{' '}
              <span className="ap-crumb-current">Our Milestone</span>
            </p>
            <h1 className="display vm-page-title reveal">
              Nearly four decades of
              <br />
              <span className="italic-accent">engineering that saves lives</span>
            </h1>
            <p className="lead vm-page-intro reveal">
              From a single workshop in Jagatpur to one of India&rsquo;s trusted
              manufacturers of firefighting and special-purpose vehicles — here are
              the moments that defined the journey of Hindusthan Technologies.
            </p>
          </div>
        </section>

        {/* ---- Stats band (primary red, centered) ---- */}
        <section className="ap-stats-section">
          <div className="ap-shell">
            <div className="ap-statsband reveal">
              <div className="ap-sb">
                <span className="ap-sb-n">38<span className="ap-sb-suf">+</span></span>
                <span className="ap-sb-l">Years of excellence</span>
              </div>
              <div className="ap-sb">
                <span className="ap-sb-n">2000<span className="ap-sb-suf">+</span></span>
                <span className="ap-sb-l">Vehicles delivered</span>
              </div>
              <div className="ap-sb">
                <span className="ap-sb-n">50<span className="ap-sb-suf">+</span></span>
                <span className="ap-sb-l">PSU clients</span>
              </div>
              <div className="ap-sb">
                <span className="ap-sb-n">15<span className="ap-sb-suf">+</span></span>
                <span className="ap-sb-l">States served</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Milestone journey (numbered cards, year-led) ---- */}
        <section className="vm-block vm-values-block">
          <div className="ap-shell">
            <div className="ap-values-head reveal">
              <p className="eyebrow"><span className="dot"></span>Our journey</p>
              <h2 className="display ap-h2">Milestones over the years</h2>
            </div>
            <div className="ap-values-grid">
              {MILESTONES.map((m) => (
                <article className="ap-vcard reveal" key={m.year}>
                  <span className="ap-vcard-bracket" aria-hidden="true">
                    <svg width="24" height="11" viewBox="0 0 24 11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 10V1h7" />
                      <path d="M23 10V1h-7" />
                    </svg>
                  </span>
                  <span className="ap-vcard-num" aria-hidden="true">{m.year}</span>
                  <h4 className="ap-vcard-title">{m.title}</h4>
                  <p className="ap-vcard-desc">{m.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">The next milestone starts with your project.</h2>
            <div className="ap-cta-actions">
              <a href="/#contact" className="btn btn-primary">
                Request a quote <span className="arrow">→</span>
              </a>
              <a href="/#products" className="btn btn-ghost">
                Explore products
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
