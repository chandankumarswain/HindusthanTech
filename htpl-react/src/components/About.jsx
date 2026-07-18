import { CREDENTIALS } from '../data/company'

/* Company story. "What we serve" used to live here too — it now stands as its
   own section (components/Serve.jsx) below Reach on the landing page. */
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
              Built for the moments
              <br />
              <span className="italic-accent">that leave no margin.</span>
            </h2>
            <p className="about2-lead">
              For nearly <strong>four decades</strong>, we have designed and manufactured
              firefighting and special-purpose vehicles at our Jagatpur works — every tank,
              pump and body fabricated <strong>in-house</strong> and proven against{' '}
              <strong>IS and DGQA standards</strong> before dispatch. From refineries and
              ports to airfields and the front line, our fleets are engineered to perform on
              the day everything depends on them.
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
      </div>
    </section>
  )
}
