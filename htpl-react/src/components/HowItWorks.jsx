const Arrow = () => (
  <span className="arrow" aria-hidden="true">↗</span>
)

export default function HowItWorks() {
  return (
    <section className="hiw" id="how-it-works" aria-labelledby="hiw-title">
      <div className="hiw-inner">
        {/* ---- Section header ---- */}
        <header className="hiw-head reveal">
          <div className="hiw-head-l">
            <p className="eyebrow">
              <span className="dot"></span>How it works
            </p>
            <h2 id="hiw-title" className="display h-sec">
              From enquiry to delivery in{' '}
              <span className="italic-accent">four steps</span>
            </h2>
          </div>
          <p className="hiw-head-desc">
            A transparent, engineering-led workflow — from your first
            specification to a fully commissioned vehicle, deployed and
            supported at your site.
          </p>
        </header>

        {/* ---- Bento journey grid ---- */}
        <div className="hiw-bento">
          {/* R1C1 — image */}
          <figure className="hiw-cell hiw-img reveal">
            <img
              src="/images/hero-fire-tender.png"
              alt="HTPL fire tender at the start of the build journey"
              loading="lazy"
              decoding="async"
            />
          </figure>

          {/* R1C2-3 — feature mark */}
          <div className="hiw-cell hiw-feature reveal">
            <span className="hiw-mark">From spec to site.</span>
            <p>
              Every build follows one disciplined path — clear specifications,
              honest pricing, precision fabrication, and on-time deployment.
            </p>
          </div>

          {/* R1C4 — step 01 (highlighted) */}
          <article className="hiw-cell hiw-card is-lead reveal">
            <span className="hiw-step-k">Step 01</span>
            <h3>Share Specs</h3>
            <p>
              Tell us your requirement — vehicle type, tank capacity, chassis
              preference, and delivery timeline.
            </p>
            <a href="#contact" className="hiw-link">
              Start here <Arrow />
            </a>
          </article>

          {/* R2C1 — step 02 */}
          <article className="hiw-cell hiw-card reveal">
            <span className="hiw-step-k">Step 02</span>
            <h3>Get Quote</h3>
            <p>
              A detailed quote with BOQ, drawings, and timeline — engineered,
              itemised, and free of hidden charges.
            </p>
            <a href="#contact" className="hiw-link">
              View BOQ <Arrow />
            </a>
          </article>

          {/* R2C2 — image */}
          <figure className="hiw-cell hiw-img reveal">
            <img
              src="/images/hitech-fire-tender.png"
              alt="HTPL fire tender in production at the Jagatpur workshop"
              loading="lazy"
              decoding="async"
            />
          </figure>

          {/* R2C3 — step 03 */}
          <article className="hiw-cell hiw-card reveal">
            <span className="hiw-step-k">Step 03</span>
            <h3>We Manufacture</h3>
            <p>
              Production begins — CAD, fabrication, assembly, painting, and full
              QA testing at our Jagatpur facility.
            </p>
            <a href="#process" className="hiw-link">
              Our process <Arrow />
            </a>
          </article>

          {/* R2C4 — highlight stat */}
          <div className="hiw-cell hiw-stat reveal">
            <span className="n">
              90<span className="accent">d</span>
            </span>
            <span className="l">Stock-ready builds, delivered in as little as 90 days</span>
          </div>

          {/* R3C1 — image */}
          <figure className="hiw-cell hiw-img reveal">
            <img
              src="/images/quick-response-vehicle.png"
              alt="HTPL vehicle delivered and deployed at customer site"
              loading="lazy"
              decoding="async"
            />
          </figure>

          {/* R3C2-3 — CTA */}
          <div className="hiw-cell hiw-cta reveal">
            <span className="hiw-mark">Ready when you are.</span>
            <p>
              Transparent pricing and technical clarity — get a quote tailored
              to your operation.
            </p>
            <a href="#contact" className="btn btn-ink hiw-cta-btn">
              Request a Quote <Arrow />
            </a>
          </div>

          {/* R3C4 — step 04 */}
          <article className="hiw-cell hiw-card reveal">
            <span className="hiw-step-k">Step 04</span>
            <h3>You Deploy</h3>
            <p>
              Delivered to site, fully tested and CMVR-compliant — with operator
              training and AMC support.
            </p>
            <a href="#contact" className="hiw-link">
              AMC &amp; support <Arrow />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
