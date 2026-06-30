import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { VALUES, VISION_TEXT, MISSION_TEXT } from '../data/company'

/* Dedicated "Vision, Mission & Core Values" page.
   Layout inspired by an editorial collage (eyebrow + large serif heading +
   image collage + paragraph), then the site's staggered numbered value cards.
   Reuses the global design tokens, .ap-* helpers, gutters (80/50/25) and the
   991/767 breakpoints so it stays pixel-consistent with the rest of the site. */
export default function VisionMission() {
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
              <span className="ap-crumb-current">Vision, Mission &amp; Core Values</span>
            </p>
            <h1 className="display vm-page-title reveal">
              The Vision That Inspires,
              <br />
              <span className="italic-accent">The Mission That Drives</span>
            </h1>
            <p className="lead vm-page-intro reveal">
              The purpose, promise, and principles that drive every fire tender and
              special-purpose vehicle we engineer at Hindusthan Technologies.
            </p>
          </div>
        </section>

        {/* ---- Vision (collage left · text right) ---- */}
        <section className="vm-block">
          <div className="ap-shell">
            <header className="vm-head reveal">
              <p className="eyebrow"><span className="dot"></span>Our vision</p>
              <h2 className="display vm-title">
                Where engineering meets <span className="italic-accent">absolute trust.</span>
              </h2>
            </header>
            <div className="vm-collage">
              <figure className="vm-pic vm-pic-1 reveal">
                <img
                  src="/images/vm/vm-1.jpg"
                  alt="HTPL fire & rescue vehicle"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="vm-pic vm-pic-2 reveal">
                <img
                  src="/images/vm/vm-2.jpg"
                  alt="HTPL fire & rescue vehicle"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <p className="vm-text reveal">{VISION_TEXT}</p>
            </div>
          </div>
        </section>

        {/* ---- Mission (text left · collage right) ---- */}
        <section className="vm-block is-reverse">
          <div className="ap-shell">
            <header className="vm-head reveal">
              <p className="eyebrow"><span className="dot"></span>Our mission</p>
              <h2 className="display vm-title">
                Built to perform when <span className="italic-accent">seconds matter.</span>
              </h2>
            </header>
            <div className="vm-collage">
              <p className="vm-text reveal">{MISSION_TEXT}</p>
              <figure className="vm-pic vm-pic-2 reveal">
                <img
                  src="/images/vm/vm-3.jpg"
                  alt="HTPL fire & rescue vehicle"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="vm-pic vm-pic-1 reveal">
                <img
                  src="/images/vm/vm-4.jpg"
                  alt="HTPL fire & rescue vehicle"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
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

        {/* ---- Core values (staggered numbered cards) ---- */}
        <section className="vm-block vm-values-block">
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
            <h2 className="display ap-h2">Partner with a manufacturer you can rely on.</h2>
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
