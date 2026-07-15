import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* "Our Infrastructure" page — presents HTPL's real facility & infrastructure
   details: the built-up footprint (per-area metrics), the core engineering
   pillars, power & energy, on-site amenities / safety / IT, and CSR work.
   Reuses site tokens, .ap-shell gutters (80/50/25) and the 991/767 breakpoints
   for full design parity with the rest of the site. */

const STATS = [
  { n: '38', suf: '+', l: 'Years of excellence' },
  { n: '2000', suf: '+', l: 'Vehicles delivered' },
  { n: '50', suf: '+', l: 'PSU clients' },
  { n: '15', suf: '+', l: 'States served' },
]

/* Built-up footprint — every dedicated area on site, with its size and use. */
const FOOTPRINT = [
  { n: '4,500', u: 'sqft', name: 'Corporate office', detail: 'Including meeting rooms & conference halls.' },
  { n: '5,500', u: 'sqft', name: 'Factory-site office', detail: 'Including meeting rooms & conference halls.' },
  { n: '2,500', u: 'sqft', name: 'Tool room / machine shop', detail: 'CNC turning, CNC plasma, manual lathe, drilling & milling, with dedicated calibrated instruments.' },
  { n: '70,000', u: 'sqft', name: 'Production facility', detail: 'Fabrication, welding and fire-tender assembly.' },
  { n: '10,000', u: 'sqft', name: 'Inspection & testing', detail: 'All testing facilities to IS / DGQA standard, with an integrated testing witness box.' },
  { n: '17,000', u: 'sqft', name: 'Centralized store', detail: 'Ample spares & inventory under a proper inventory-management system.' },
  { n: '2,500', u: 'sqft', name: 'Training facility', detail: 'Dedicated worker training — technical, fire & safety, electrical.' },
  { n: '5,000', u: 'sqft', name: 'Air-conditioned cafeteria', detail: 'With subsidized food for staff and workers.' },
  { n: '2,000', u: 'sqft', name: 'Workers’ resting area', detail: 'Air-conditioned rest space for the shop-floor team.' },
]

/* Core engineering pillars — the three production-critical capabilities. */
const CARDS = [
  {
    cat: 'Design & Engineering',
    title: 'Computer-Based Design Centre',
    desc: 'A dedicated design & engineering centre runs fully computer-based design on SolidWorks and AutoCAD, turning every requirement into precise, manufacturable drawings before a single cut is made.',
    img: '/images/fleet/htpl-build-rear.jpg',
    alt: 'HTPL design and engineering — computer-based design',
  },
  {
    cat: 'Production',
    title: 'Fabrication & Assembly Floor',
    desc: 'Nearly 70,000 sqft of production space houses fabrication, welding and complete fire-tender assembly — backed by a 2,500 sqft tool room with CNC turning, CNC plasma, lathe, drilling and milling on calibrated instruments.',
    img: '/images/fleet/fabrication-workshop.jpg',
    alt: 'HTPL fabrication and assembly floor',
  },
  {
    cat: 'Inspection & Testing',
    title: 'In-House Testing to IS / DGQA',
    desc: 'Around 10,000 sqft of inspection & testing carries every facility required by IS and DGQA standards, with an integrated testing witness box so each vehicle is validated and documented before dispatch.',
    img: '/images/fleet/dcp-tender.jpg',
    alt: 'HTPL vehicle undergoing in-house quality testing',
  },
]

/* Power & energy — grid supply, backup and on-site generation. */
const POWER = [
  {
    k: 'Grid + transformer',
    v: 'Three-phase industrial power supply with an in-house 70 KVA transformer.',
  },
  {
    k: 'DG backup',
    v: 'Diesel-generator backup of 125 KVA and 82 KVA at the factory, and 20 KVA at the corporate office.',
  },
  {
    k: 'Solar power',
    v: '70 kW rooftop solar power plant — 60 kW at the factory and 10 kW at the office.',
  },
]

/* On-site amenities, safety & IT — the everyday infrastructure across the site. */
const AMENITIES = [
  'Two board rooms and three conference halls with VC facilities and projectors for presentations.',
  'Fire extinguishers across all yard and office buildings, under a proper inspection & maintenance procedure.',
  'RO normal and cold drinking water on the shop floor, in the canteen and across office buildings.',
  'Adequate washrooms and toilets in the factory, corporate offices and all other areas.',
  'First-aid facilities on the shop floor and in office buildings.',
  'High-resolution CCTV cameras for electronic surveillance across the factory and corporate office.',
  'Furnished, subsidized AC and non-AC guest houses for company guests, employees and workers.',
  'Laptops, desktops and IT infrastructure with dedicated servers and 24×7 high-speed internet.',
]

/* CSR — community initiatives the company supports. */
const CSR = [
  'Old-age home',
  'Orphanage',
  'Cremation-ground aid',
  'Psychiatric rehabilitation centre',
  'Cattle-shelter aid',
  'Local temple development',
]

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export default function Infrastructure() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main className="infra-page">
        {/* ---- Hero (centred) + main image ---- */}
        <section className="infra-hero">
          <div className="ap-shell">
            <p className="ap-crumb reveal">
              <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
              <a href="/about">About</a> <span aria-hidden="true">/</span>{' '}
              <span className="ap-crumb-current">Our Infrastructure</span>
            </p>
            <h1 className="display infra-hero-title reveal">
              Built to Deliver.
              <br />
              <span className="italic-accent">Engineered for Excellence.</span>
            </h1>
            <p className="lead infra-hero-desc reveal">
              From design and fabrication to inspection, storage and training, HTPL runs a fully
              integrated facility at Jagatpur, Cuttack — over a lakh square feet of purpose-built
              space, backed by its own power, IT, safety and welfare infrastructure.
            </p>
            <div className="infra-hero-actions reveal">
              <a href="#footprint" className="btn btn-primary">
                Explore Facilities <span className="arrow">→</span>
              </a>
              <a href="/#contact" className="btn btn-ghost">
                Contact Us
              </a>
            </div>
            <figure className="infra-hero-media reveal">
              <img
                src="/images/infrastructure.jpg"
                alt="HTPL manufacturing infrastructure and facilities"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        {/* ---- Infrastructure overview ---- */}
        <section className="infra-overview" id="overview">
          <div className="ap-shell">
            <p className="eyebrow reveal"><span className="dot"></span>Our Infrastructure &amp; Facility</p>
            <h2 className="display infra-h2 reveal">
              World-Class Facilities Supporting Every Stage of Production
            </h2>
            <p className="infra-text reveal">
              Every function a fire-tender build demands stands under one roof — engineering,
              tool room, production, testing and stores — supported by dedicated worker training,
              on-site power and solar generation, full IT and surveillance infrastructure, and
              comprehensive welfare facilities for our people.
            </p>
          </div>
        </section>

        {/* ---- Stats band (primary red, centered) ---- */}
        <section className="ap-stats-section">
          <div className="ap-shell">
            <div className="ap-statsband reveal">
              {STATS.map((s) => (
                <div className="ap-sb" key={s.l}>
                  <span className="ap-sb-n">
                    {s.n}
                    <span className="ap-sb-suf">{s.suf}</span>
                  </span>
                  <span className="ap-sb-l">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Facility footprint (per-area metric tiles) ---- */}
        <section className="infra-footprint" id="footprint">
          <div className="ap-shell">
            <header className="infra-sec-head reveal">
              <p className="eyebrow"><span className="dot"></span>Facility Footprint</p>
              <h2 className="display infra-h2">Purpose-built space for every stage</h2>
              <p className="infra-text">
                A dedicated area for each function on site — sized for capacity, laid out for a
                clean, one-directional workflow from raw material to finished, tested vehicle.
              </p>
            </header>
            <div className="infra-fp-grid">
              {FOOTPRINT.map((f) => (
                <article className="infra-fp-tile reveal" key={f.name}>
                  <span className="infra-fp-n">
                    {f.n}
                    <span className="infra-fp-u">{f.u}</span>
                  </span>
                  <h3 className="infra-fp-name">{f.name}</h3>
                  <p className="infra-fp-detail">{f.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Core capability cards ---- */}
        <section className="infra-build">
          <div className="ap-shell">
            <header className="infra-build-head reveal">
              <p className="eyebrow"><span className="dot"></span>Capabilities</p>
              <h2 className="display infra-h2">Infrastructure Designed for Performance</h2>
              <p className="infra-text">
                Design, production and testing form the backbone of the plant — each equipped and
                staffed to carry a build from drawing board to dispatch without leaving the site.
              </p>
            </header>
            <div className="infra-cards">
              {CARDS.map((c) => (
                <article className="infra-card reveal" key={c.cat}>
                  <div className="infra-card-body">
                    <span className="infra-card-cat">{c.cat}</span>
                    <h3 className="infra-card-title">{c.title}</h3>
                    <p className="infra-card-desc">{c.desc}</p>
                    <a href="/#contact" className="infra-card-link">
                      Learn More <span aria-hidden="true">→</span>
                    </a>
                  </div>
                  <figure className="infra-card-media">
                    <img src={c.img} alt={c.alt} loading="lazy" decoding="async" />
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Power & energy ---- */}
        <section className="infra-power">
          <div className="ap-shell">
            <header className="infra-sec-head reveal">
              <p className="eyebrow"><span className="dot"></span>Power &amp; Energy</p>
              <h2 className="display infra-h2">Uninterrupted, and increasingly clean</h2>
              <p className="infra-text">
                Grid supply, in-house transformation and diesel backup keep the line running around
                the clock — while a 70 kW solar plant cuts the site&rsquo;s footprint year on year.
              </p>
            </header>
            <div className="infra-power-grid">
              {POWER.map((p) => (
                <article className="infra-power-card reveal" key={p.k}>
                  <span className="infra-power-k">{p.k}</span>
                  <p className="infra-power-v">{p.v}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Amenities, safety & IT (checklist) ---- */}
        <section className="infra-amenities">
          <div className="ap-shell">
            <header className="infra-sec-head reveal">
              <p className="eyebrow"><span className="dot"></span>Amenities, Safety &amp; IT</p>
              <h2 className="display infra-h2">Built around the people on site</h2>
              <p className="infra-text">
                Meeting spaces, safety systems, drinking water, welfare and full IT — the everyday
                infrastructure that keeps the plant safe, connected and comfortable.
              </p>
            </header>
            <ul className="infra-checklist reveal">
              {AMENITIES.map((a) => (
                <li className="infra-check" key={a}>
                  <span className="infra-check-ic"><Check /></span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- CSR ---- */}
        <section className="infra-csr">
          <div className="ap-shell">
            <div className="infra-csr-inner reveal">
              <div className="infra-csr-head">
                <p className="eyebrow"><span className="dot"></span>Beyond the Factory Gate</p>
                <h2 className="display infra-h2">Corporate social responsibility</h2>
                <p className="infra-text">
                  Our responsibility extends into the community around us — a set of ongoing CSR
                  initiatives we&rsquo;re proud to support.
                </p>
              </div>
              <ul className="infra-csr-list">
                {CSR.map((c) => (
                  <li className="infra-csr-chip" key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Want to see our facilities in action?</h2>
            <div className="ap-cta-actions">
              <a href="/#contact" className="btn btn-primary">
                Get in touch <span className="arrow">→</span>
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
