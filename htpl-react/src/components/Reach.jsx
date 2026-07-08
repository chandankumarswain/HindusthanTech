/* ------------------------------------------------------------------
   Reach — nationwide delivery footprint.
   Two-column split (content left · India map right) in the HTPL
   design system, mirroring the commit-grid layout language.
   The map gently zooms in / out (breathing loop) for a subtle life.
------------------------------------------------------------------ */

const STATS = [
  { n: '20+', l: 'States & UTs served' },
  { n: '2000+', l: 'Vehicles delivered' },
  { n: 'Pan-India', l: 'Service & support' },
]

export default function Reach() {
  return (
    <section className="section-pad" id="reach">
      <div className="wrap">
        <div className="reach-grid">
          {/* content — left */}
          <div className="reach-body reveal">
            <p className="eyebrow">
              <span className="dot"></span>Nationwide presence
            </p>
            <h2 className="display h-sec">
              Delivered across
              <br />
              <span className="italic-accent">every corner of India.</span>
            </h2>
            <p className="reach-lead">
              From coastal refineries to Himalayan power projects, our firefighting and
              special-purpose vehicles are trusted in every region of the country. Wherever
              safety is critical, HTPL builds, delivers, and stands behind every unit.
            </p>

            <div className="reach-stats">
              {STATS.map((s) => (
                <div className="reach-stat" key={s.l}>
                  <span className="n">{s.n}</span>
                  <span className="l">{s.l}</span>
                </div>
              ))}
            </div>

            <div className="reach-actions">
              <a href="#clients" className="btn btn-primary">
                See our clients <span className="arrow">→</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Talk to our team
              </a>
            </div>
          </div>

          {/* map — right */}
          <div className="reach-media reveal">
            <img
              src="/images/india-delivery-map.png"
              alt="Map of India showing HTPL's nationwide delivery footprint"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
