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
                Hindusthan Technologies Pvt. Ltd. (HTPL) traces its roots back to{' '}
                <strong>1987</strong>, when it was established as a proprietorship firm under the
                name <strong>Hindustan Enterprises</strong> by{' '}
                <strong>Mr. Mohan Ranjan Panda</strong> at Jagatpur, Cuttack, Odisha. Driven by
                engineering precision and expanding industrial requirements, the organization
                underwent a strategic transformation in <strong>2010</strong> and was formally
                incorporated as a Private Limited Company under its current identity.
              </p>
            </div>

            <div className="ap-hero-collage reveal">
              <figure className="ap-col ap-col-lg">
                <img
                  src="/images/about/office-building.webp"
                  alt="Hindusthan Technologies corporate office, Jagatpur, Cuttack"
                  width="1195"
                  height="896"
                  loading="eager"
                  decoding="async"
                />
                <figcaption className="ap-col-cap">Hindusthan Technologies Pvt. Ltd.</figcaption>
              </figure>
              <figure className="ap-col ap-col-md">
                <img
                  src="/images/about/factory-gate.webp"
                  alt="Main gate of the Hindusthan Technologies factory, Jagatpur"
                  width="1400"
                  height="716"
                  loading="eager"
                  decoding="async"
                />
                <figcaption className="ap-col-cap">Hindusthan Technologies Pvt. Ltd.</figcaption>
              </figure>
            </div>

            <div className="ap-overview-foot reveal">
              <p className="lead">
                Today, <strong>HTPL</strong> is officially recognized under the{' '}
                <strong>MSME</strong> category as per the Industrial Policy of the Government of
                Odisha. With over <strong>30 years</strong> of deep manufacturing experience, we
                possess comprehensive expertise in handling sophisticated engineering challenges,
                extreme safety requirements, and stringent regulatory metrics. We have established
                an unshakeable reputation for rugged product performance, on-time project
                completion, and absolute transparency.
              </p>
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
