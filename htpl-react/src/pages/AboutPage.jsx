import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { VALUES, CREDENTIALS, VISION_TEXT, MISSION_TEXT } from '../data/company'

/* Dedicated About page — layout inspired by the reference (breadcrumb hero,
   statement, stats, alternating mission/vision, values). All copy and the
   colour/type system are reused verbatim from the rest of the site. */
export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main className="about-page">
        {/* ---- Hero: breadcrumb + heading + intro + image with rotating badge ---- */}
        <section className="ap-hero">
          <div className="ap-shell ap-hero-grid">
            <div className="ap-hero-text reveal">
              <p className="ap-crumb">
                <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
                <span className="ap-crumb-current">About</span>
              </p>
              <h1 className="display ap-title">
                Engineered for the{' '}
                <span className="italic-accent">industries that matter.</span>
              </h1>
              <p className="lead ap-intro">
                Founded in <strong>1987</strong> at Jagatpur, Cuttack by{' '}
                <strong>Shri Mohan Ranjan Panda</strong>, Hindusthan Technologies Pvt. Ltd.
                has spent over <strong>three decades</strong> building world-class firefighting
                and special purpose vehicles — trusted across India's most critical sectors.
              </p>
            </div>

            <figure className="ap-hero-media reveal">
              <img
                src="/images/fleet/htpl-build-rear.jpg"
                alt="HTPL fire tender built at the Jagatpur facility"
                loading="eager"
                decoding="async"
              />
              <span className="ap-badge" aria-hidden="true">
                <img className="ap-badge-logo" src="/images/htpl-logo.png" alt="" />
              </span>
            </figure>
          </div>
        </section>

        {/* ---- Our Mission: image left · text + checklist right ---- */}
        <section className="ap-block">
          <div className="ap-shell ap-split">
            <figure className="ap-media reveal">
              <img
                src="/images/fleet/fabrication-workshop.jpg"
                alt="Fire vehicles in production at the HTPL Jagatpur facility"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="ap-copy reveal">
              <p className="eyebrow"><span className="dot"></span>Our purpose</p>
              <h2 className="display ap-h2">Our mission</h2>
              <p className="ap-text">{MISSION_TEXT}</p>
              <ul className="ap-checks">
                {CREDENTIALS.map((c) => (
                  <li key={c}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---- Our Vision: text left · image right ---- */}
        <section className="ap-block">
          <div className="ap-shell ap-split is-reverse">
            <div className="ap-copy reveal">
              <p className="eyebrow"><span className="dot"></span>Our purpose</p>
              <h2 className="display ap-h2">Our vision</h2>
              <p className="ap-text">{VISION_TEXT}</p>
            </div>
            <figure className="ap-media reveal">
              <img
                src="/images/fleet/sail-rsp-night-ops.jpg"
                alt="HTPL fire tender in active emergency response"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        {/* ---- Core values ---- */}
        <section className="ap-block ap-values-block">
          <div className="ap-shell">
            <div className="ap-values-head reveal">
              <p className="eyebrow"><span className="dot"></span>What we stand for</p>
              <h2 className="display ap-h2">Our core values</h2>
            </div>
            <div className="ap-values-grid">
              {VALUES.map((v, i) => (
                <article className="ap-vcard reveal" key={v.name}>
                  <span className="ap-vcard-bracket" aria-hidden="true">
                    <svg width="24" height="11" viewBox="0 0 24 11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 10V1h7" />
                      <path d="M23 10V1h-7" />
                    </svg>
                  </span>
                  <span className="ap-vcard-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="ap-vcard-title">{v.name}</h4>
                  <p className="ap-vcard-desc">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Need custom fire safety solutions?</h2>
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
