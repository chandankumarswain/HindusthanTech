import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* Company Overview page (/about) — breadcrumb hero, company statement, and the
   stats band. The mission/vision/values and the capability sub-sections now live
   on their own dedicated pages, linked from the About Us dropdown. */
export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main className="about-page">
        {/* ---- Hero: header row (heading + intro) above a 3-image collage ---- */}
        <section className="ap-hero" id="company-overview">
          <div className="ap-shell">
            <div className="ap-hero-head">
              <div className="ap-hero-head-l reveal">
                <p className="ap-crumb">
                  <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
                  <span className="ap-crumb-current">Company Overview</span>
                </p>
                <h1 className="display ap-title">
                  Engineered for the{' '}
                  <span className="italic-accent">industries that matter.</span>
                </h1>
              </div>
              <p className="lead ap-intro reveal">
                Founded in <strong>1987</strong> as Hindustan Enterprises by{' '}
                <strong>Shri Mohan Ranjan Panda</strong> at Jagatpur, Cuttack, Odisha, and
                incorporated as Hindusthan Technologies Pvt. Ltd. in <strong>2010</strong>.
                An <strong>MSME-recognised</strong> manufacturer (Govt. of Odisha) with over
                <strong> three decades</strong> of expertise in sophisticated, safety-critical
                engineering — known for rugged performance, on-time delivery, and transparency.
              </p>
            </div>

            <div className="ap-hero-collage reveal">
              <figure className="ap-col ap-col-sm">
                <img
                  src="/images/about/truck-1.jpeg"
                  alt="HTPL Tata-based fire & rescue vehicle"
                  loading="eager"
                  decoding="async"
                />
              </figure>
              <figure className="ap-col ap-col-lg">
                <img
                  src="/images/about/truck-2.jpeg"
                  alt="HTPL fire tender in the HTPL studio"
                  loading="eager"
                  decoding="async"
                />
              </figure>
              <figure className="ap-col ap-col-md">
                <img
                  src="/images/about/truck-3.jpeg"
                  alt="HTPL FACT fire tender built at the Jagatpur facility"
                  loading="eager"
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

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Need custom fire safety solutions?</h2>
            <div className="ap-cta-actions">
              <a href="/#contact" className="btn btn-primary">
                Request a quote <span className="arrow">→</span>
              </a>
              <a href="/#products-services" className="btn btn-ghost">
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
