import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* Products & Services page (/products-services).
   Layout: compact centred hero → "What we build" (two product categories
   flanking a central image) → Services (three cards). Built from the landing
   design system (section-pad / wrap, site tokens, 991/767 breakpoints). All
   content covered; one red accent. */

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
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  amc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
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

const SERVICES = [
  { icon: ICON.wrench, title: 'Spare Parts & Assistance', desc: 'Continuous availability of genuine replacement components and responsive technical support for on-call maintenance.' },
  { icon: ICON.amc, title: 'Extended Service Lifecycles', desc: 'Comprehensive Annual Maintenance Contracts (AMC) ranging from 2 to 5 years, on an onsite basis, after the standard warranty period.' },
  { icon: ICON.key, title: 'Specialised Fleet Rentals', desc: 'Fire-tender rental services based on customer site requirements.' },
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

export default function ProductsServicesPage() {
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
              <span className="ap-crumb-current">Products &amp; Services</span>
            </p>
            <h1 className="display psp-title reveal">
              Built to order.
              <br />
              <span className="italic-accent">Supported for life.</span>
            </h1>
            <p className="lead psp-hero-desc reveal">
              Custom-built firefighting and special-purpose vehicles, engineered for municipal,
              industrial, and defence-grade hazards — backed by spares, maintenance, and fleet
              support across the vehicle's working life.
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
              <a href="#services" className="psp-explore">
                Explore <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---- Services ---- */}
        <section className="section-pad" id="services" style={{ background: 'var(--bone-2)' }}>
          <div className="wrap">
            <div className="sec-head center reveal">
              <p className="eyebrow"><span className="dot"></span>Capability</p>
              <h2 className="display h-sec">Services</h2>
              <p className="lead">
                HTPL provides customer-focused solutions through custom-built fire trucks as per
                client requirements, engineering support, and design flexibility — reinforcing
                long-term operational capabilities.
              </p>
            </div>
            <div className="psp-services">
              {SERVICES.map((s) => (
                <article className="psp-svc reveal" key={s.title}>
                  <span className="psp-svc-ic" aria-hidden="true">{s.icon}</span>
                  <h3 className="psp-svc-title">{s.title}</h3>
                  <p className="psp-svc-desc">{s.desc}</p>
                </article>
              ))}
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
              <a href="/#products" className="btn btn-ghost">
                View the range
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
