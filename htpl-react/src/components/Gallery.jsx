const IconProcess = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l8 4-8 4-8-4 8-4z" />
    <path d="M4 12l8 4 8-4" />
    <path d="M4 17l8 4 8-4" />
  </svg>
)

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export default function Gallery() {
  return (
    <section className="gallery" id="track-record">
      <div className="gallery-shell">
        <header className="sec-head reveal">
          <p className="eyebrow on-dark">
            <span className="dot"></span>Track record
          </p>
          <h2 className="display h-sec">
            The numbers behind every{' '}
            <span className="italic-accent">HTPL build</span>
          </h2>
          <p className="lead">
            Three decades of engineering, certification, and on-ground delivery —
            distilled into the proof that matters most.
          </p>
        </header>

        <div className="show-bento">
          {/* 01 — accent stat */}
          <article className="show-card is-accent reveal">
            <span className="show-k">Trusted nationwide</span>
            <span className="show-n">500+</span>
            <p className="show-desc">
              Special-purpose vehicles delivered across India's most critical
              sectors.
            </p>
          </article>

          {/* 02 — image */}
          <figure className="show-card is-img reveal">
            <img
              src="/images/hitech-fire-tender.png"
              alt="Ashok Leyland Hi-Tech fire tender"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="show-cap">
              <span className="k">On the line</span>
              <span className="t">Ashok Leyland Hi-Tech Fire Tender</span>
            </figcaption>
          </figure>

          {/* 03 — light feature */}
          <article className="show-card is-light reveal">
            <span className="show-ic"><IconProcess /></span>
            <span className="show-n">8</span>
            <span className="show-label">Stage QA process</span>
            <span className="show-rule" aria-hidden="true"></span>
            <p className="show-desc">
              Every vehicle passes an eight-stage quality and safety workflow
              before dispatch.
            </p>
          </article>

          {/* 04 — accent stat */}
          <article className="show-card is-accent reveal">
            <span className="show-k">Quality certified</span>
            <span className="show-n">ISO</span>
            <p className="show-desc">
              9001:2015 management systems — audited, maintained, and DGQA
              approved.
            </p>
          </article>

          {/* 05 — light stat */}
          <article className="show-card is-light reveal">
            <span className="show-n">38+</span>
            <span className="show-label">Years of experience</span>
            <span className="show-rule" aria-hidden="true"></span>
            <p className="show-desc">
              Building fire &amp; rescue vehicles at our Jagatpur facility since
              1987.
            </p>
          </article>

          {/* 06 — accent headline */}
          <article className="show-card is-accent reveal">
            <span className="show-ic"><IconShield /></span>
            <span className="show-head">Defence grade</span>
            <p className="show-desc">
              Trusted by the Indian Navy, ISRO, IOCL, NTPC and major port
              authorities.
            </p>
          </article>

          {/* 07 — light card with thumbnail */}
          <article className="show-card is-light reveal">
            <span className="show-k">Rapid response fleet</span>
            <span className="show-sub">
              Urban &amp; industrial quick-response vehicles.
            </span>
            <div className="show-thumb">
              <img
                src="/images/quick-response-vehicle.png"
                alt="Quick response fire-rescue vehicle"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          {/* 08 — accent stat */}
          <article className="show-card is-accent reveal">
            <span className="show-k">On-site AMC</span>
            <span className="show-n">2–5y</span>
            <p className="show-desc">
              Annual maintenance contracts and fleet support, delivered
              nationwide.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
