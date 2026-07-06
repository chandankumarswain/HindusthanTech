import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* Products page (/products).
   Layout: compact centred hero → "What we build" (two product categories
   flanking a central image) → closing CTA. Built from the landing design
   system (section-pad / wrap, site tokens, psp-* classes, 991/767
   breakpoints) — shares styling with the Products & Services page. */

const ICON = {
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1" />
      <path d="M14 9h4l3 3v5a1 1 0 0 1-1 1h-1" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="17.5" cy="18.5" r="1.5" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  ),
}

const FIRE = [
  ['Firefighting Trucks / Vehicles', 'Custom-built multi-capacity water, foam, and dry chemical powder tenders for extreme municipal and industrial hazards.'],
  ['Quick Response Vehicles (QRVs)', 'Compact, fast-response units fitted with advanced first-aid firefighting and rescue setups.'],
  ['Trailer & Portable Fire Pumps', 'High-efficiency decentralised field-pumping units engineered for dependable suction operations.'],
]

const SPV = [
  ['Explosive Vans', 'Insulated, completely spark-proof cargo bodies built to various capacities matching strict safety mandates.'],
  ['Diesel Bowsers & Oil Tankers', 'Fuel logistics and distribution units with calibrated metering, flow monitoring, and grounding mechanics.'],
  ['MOSRU / Gulley Suckers', 'Industrial heavy-suction rigs for specialised oil cleanup and recovery.'],
  ['Mobile Blood Donation Vans (MBDV)', 'Ergonomically specialised, clinically sterile testing and blood-collection mobile clinics.'],
  ['Mobile Service Vans', 'Fully outfitted mobile workshops and customised industrial application vehicles.'],
]

function CategoryCol({ icon, title, items }) {
  return (
    <div className="psp-cat reveal">
      <span className="psp-cat-ic" aria-hidden="true">{icon}</span>
      <h3 className="psp-cat-title">{title}</h3>
      <ul className="psp-cat-list">
        {items.map(([name, desc]) => (
          <li key={name}>
            <span className="psp-li-name">{name}</span>
            <span className="psp-li-desc">{desc}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ProductsPage() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main className="psp-page">
        {/* ---- Hero (centred, content-height) ---- */}
        <section className="psp-hero">
          <div className="wrap">
            <p className="ap-crumb reveal">
              <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
              <span className="ap-crumb-current">Products</span>
            </p>
            <h1 className="display psp-title reveal">
              Built for the front line.
              <br />
              <span className="italic-accent">Engineered to order.</span>
            </h1>
            <p className="lead psp-hero-desc reveal">
              Custom-built firefighting and special-purpose vehicles, engineered for municipal,
              industrial, and defence-grade hazards — every unit precision-built to perform under
              the most demanding conditions.
            </p>
            <a href="#build" className="psp-explore reveal">
              Explore <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* ---- What we build (two categories flanking a central image) ---- */}
        <section className="section-pad" id="build">
          <div className="wrap">
            <div className="sec-head center reveal">
              <p className="eyebrow"><span className="dot"></span>Capability</p>
              <h2 className="display h-sec">What we build</h2>
              <p className="lead">Four distinct product lines engineered for specialized demands.</p>
            </div>
            <div className="psp-build">
              <CategoryCol icon={ICON.truck} title="Fire-fighting equipment & vehicles" items={FIRE} />
              <figure className="psp-build-media reveal">
                <img
                  src="/images/products-build.jpg"
                  alt="HTPL fire tender built at the Jagatpur facility"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <CategoryCol icon={ICON.cube} title="Special purpose vehicles (SPVs)" items={SPV} />
            </div>
            <div className="psp-build-foot reveal">
              <a href="/products-services" className="psp-explore">
                Explore our services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Need a vehicle built to your specification?</h2>
            <div className="ap-cta-actions">
              <a href="/#contact" className="btn btn-primary">
                Request a quote <span className="arrow">→</span>
              </a>
              <a href="/products-services" className="btn btn-ghost">
                View our services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
