/* ------------------------------------------------------------------
   Products — "What we build"
   Editorial technical layout: a dark showcase fronted by an exploded
   centrifugal fire-pump diagram (the heart of every HTPL tender),
   annotated with callouts + a hero stat, over a compact product row.
   All six products carry their exact original copy.
------------------------------------------------------------------ */

const PRODUCTS = [
  {
    num: '01',
    title: 'Firefighting Trucks',
    img: '/images/fleet/tn-fire-rescue-tender.png',
    alt: 'HTPL heavy-duty firefighting truck',
    specs: [
      ['Use case', 'Industrial / Municipal'],
      ['Capacity', 'Up to 16,000 L'],
      ['Variants', 'Water · Foam · DCP'],
    ],
  },
  {
    num: '02',
    title: 'Trailer & Portable Pumps',
    img: '/images/fleet/trailer-portable-pump.png',
    alt: 'Trailer-mounted firefighting pump',
    specs: [
      ['Use case', 'Backup / Limited access'],
      ['Capacity', 'High-flow'],
      ['Variants', 'Trailer · Portable'],
    ],
  },
  {
    num: '03',
    title: 'Quick Response Vehicles',
    img: '/images/fleet/tata-yodha-qrv.png',
    alt: 'Quick response fire-rescue vehicle',
    specs: [
      ['Use case', 'Urban / Industrial rescue'],
      ['Capacity', 'Rapid deploy'],
      ['Variants', 'QRV · Mini tender'],
    ],
  },
  {
    num: '04',
    title: 'Diesel Bowser & Oil Tanker',
    img: '/images/fleet/nalco-oil-tanker.png',
    alt: 'Diesel bowser and oil tanker',
    specs: [
      ['Use case', 'Defence / Refinery'],
      ['Capacity', 'Precision metering'],
      ['Variants', 'Diesel · Oil'],
    ],
  },
  {
    num: '05',
    title: 'MOSRU / Gulley Sucker / Explosive Van',
    img: '/images/fleet/sail-explosive-van.png',
    alt: 'Mobile oil-spill recovery / explosive utility van',
    specs: [
      ['Use case', 'Hazmat / Spill recovery'],
      ['Capacity', 'Multi-utility'],
      ['Variants', 'MOSRU · Gulley · Explosive'],
    ],
  },
  {
    num: '06',
    title: 'Blood Donation Van (MBDV)',
    img: '/images/fleet/blood-donation-mbdv.png',
    alt: 'Mobile blood donation van',
    specs: [
      ['Use case', 'Healthcare outreach'],
      ['Capacity', 'Mobile clinic'],
      ['Variants', 'MBDV · AMC ready'],
    ],
  },
]

export default function Products() {
  return (
    <section className="products" id="products">
      {/* [1] full-bleed accent band */}
      <div className="products-band" aria-hidden="true"></div>

      <div className="wrap">
        {/* [2] header */}
        <header className="products-head sec-head center reveal">
          <p className="eyebrow on-dark">
            <span className="dot"></span>What we build · Product range
          </p>
          <h2 className="display h-sec">
            Engineered for the <span className="italic-accent">front line.</span>
          </h2>
          <p className="lead">
            From first-response fire tenders to specialised utility vehicles — every
            unit is precision-engineered to perform under the most demanding conditions.
          </p>
        </header>

        {/* [3][4][5] exploded diagram + hero stat + callouts */}
        <div className="products-hero reveal">
          <div className="pump-diagram">
            <img
              className="pump-engine"
              src="/images/cummins-x12-engine.png"
              alt="Cummins X12 engine with Eaton Endurant transmission — the powertrain behind HTPL fire tenders"
              width="1400"
              height="700"
              loading="lazy"
              decoding="async"
            />

            <div className="pump-stat">
              <div className="n">
                2000<span className="accent">+</span>
              </div>
              <div className="l">
                Fire vehicles delivered to India's most demanding industries —
                refineries, defence, ports, space.
              </div>
            </div>
          </div>
        </div>

        {/* [6] compact product card row */}
        <div className="products-row">
          {PRODUCTS.map((p) => (
            <article className="product-chip reveal" key={p.num}>
              <div className="product-chip-media">
                <span className="product-chip-num">{p.num}</span>
                <img src={p.img} alt={p.alt} loading="lazy" decoding="async" />
              </div>
              <h3>{p.title}</h3>
              <dl className="product-chip-specs">
                {p.specs.map(([k, v]) => (
                  <div className="spec-row" key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        {/* section footer */}
        <div className="products-footer reveal">
          <p className="products-footer-note">
            Explore our complete <em>product range</em> across industries.
          </p>
          <div className="products-footer-cta">
            <a href="#contact" className="btn btn-ghost on-dark">
              Download brochure <span className="arrow">↓</span>
            </a>
            <a href="#contact" className="btn btn-primary">
              View all products <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
