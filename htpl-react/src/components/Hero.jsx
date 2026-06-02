export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-shell">
        <div className="hero-grid">
          {/* LEFT — content */}
          <div className="hero-left">
            <p className="eyebrow hero-eyebrow">
              <span className="dot"></span>Est. 1987 · Jagatpur, Cuttack · Make in India
            </p>
            <h1 className="display hero-headline">
              When seconds decide outcomes,{' '}
              <span className="italic-accent">we build the truck.</span>
            </h1>
            <p className="lead hero-lead">
              India's trusted manufacturer of firefighting vehicles and special purpose
              vehicles for over three decades — engineered for refineries, ports, defence
              establishments, and the front line.
            </p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">
                Explore products <span className="arrow">→</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact us
              </a>
            </div>
            <div className="hero-trust">
              <div className="avatars" aria-hidden="true">
                <span style={{ background: '#d63924' }}>IS</span>
                <span style={{ background: '#18181a' }}>IN</span>
                <span style={{ background: '#6b6b6e' }}>NT</span>
                <span style={{ background: '#a82c1c' }}>+47</span>
              </div>
              <div className="hero-trust-text">
                <strong>Trusted by 50+ PSU clients</strong>
                <div>ISRO · Indian Navy · NTPC · IOCL · BPCL</div>
              </div>
            </div>
          </div>

          {/* RIGHT — image card + decorative shapes */}
          <div className="hero-stage">
            <span className="hero-deco hero-deco-block" aria-hidden="true"></span>
            <span className="hero-deco hero-deco-square" aria-hidden="true"></span>

            <div className="hero-card">
              <div className="spec-tag">
                <span>Model · HT/FT-9000</span>
                <span>Multipurpose Fire Tender</span>
              </div>
              <img
                className="hero-photo"
                src="/images/hero-fire-tender.png"
                alt="HTPL Ashok Leyland multipurpose fire tender"
                width="1200"
                height="800"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="stat-card" style={{ top: '6%', left: '-3%' }}>
              <div className="n">
                38<span className="accent">+</span>
              </div>
              <div className="l">Years building</div>
            </div>
            <div className="stat-card" style={{ bottom: '20%', right: '-4%' }}>
              <div className="n">
                500<span className="accent">+</span>
              </div>
              <div className="l">Vehicles delivered</div>
            </div>
            <div className="stat-card dark" style={{ bottom: '-4%', left: '8%' }}>
              <div className="n">
                ISO
                <span style={{ fontSize: '17px' }} className="accent">
                  9001:2015
                </span>
              </div>
              <div className="l">Certified manufacturer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
