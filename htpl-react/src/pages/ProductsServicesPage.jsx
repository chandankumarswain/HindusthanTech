import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* Products & Services page (/products-services).
   Layout inspired by the supplied reference (editorial hero → "What we build"
   card overview → detailed product/service sections). Built from the landing
   design system — section-pad / wrap gutters, eyebrow / h-sec, site tokens,
   80/50/25 padding and 991/767 breakpoints. All content points are covered. */

const OVERVIEW = [
  {
    cat: 'Foundation',
    title: 'Core product portfolio',
    desc: 'A complete range of custom-built vehicles and equipment.',
    href: '#fire-fighting',
    img: '/images/fleet/water-tender-1920.png',
    alt: 'HTPL custom-built water tender',
  },
  {
    cat: 'Response',
    title: 'Fire-fighting equipment & vehicles',
    desc: 'Trucks, QRVs, and pumps built for extreme conditions.',
    href: '#fire-fighting',
    img: '/images/fleet/tn-fire-rescue-tender.png',
    alt: 'HTPL fire & rescue tender',
  },
  {
    cat: 'Specialized',
    title: 'Special purpose vehicles for industrial needs',
    desc: 'Explosive vans, bowsers, and mobile recovery units.',
    href: '#spv',
    img: '/images/fleet/sail-explosive-van.png',
    alt: 'HTPL special-purpose explosive van',
  },
  {
    cat: 'Support',
    title: 'Services that keep operations running',
    desc: 'Spare parts, maintenance contracts, and fleet rentals.',
    href: '#services',
    img: '/images/fleet/fabrication-workshop.jpg',
    alt: 'HTPL service and maintenance workshop',
  },
]

const FIRE = [
  ['Firefighting Trucks / Vehicles', 'Custom-built multi-capacity water, foam, and dry chemical powder tenders for extreme municipal and industrial hazards.'],
  ['Quick Response Vehicles (QRVs)', 'Compact, fast-response units fitted with advanced first-aid firefighting and rescue setups.'],
  ['Trailer & Portable Fire Pumps', 'High-efficiency decentralised field-pumping units engineered for dependable suction operations.'],
]

const SPV = [
  ['Explosive Vans', 'Insulated, completely spark-proof cargo bodies built to various capacities matching strict safety mandates.'],
  ['Diesel Bowsers & Oil Tankers', 'Fuel logistics and distribution units with calibrated metering, flow monitoring, and grounding mechanics.'],
  ['Mobile Oil Spillage Recovery Units (MOSRU) / Gulley Suckers', 'Industrial heavy-suction rigs for specialised oil cleanup and recovery.'],
  ['Mobile Blood Donation Vans (MBDV)', 'Ergonomically specialised, clinically sterile testing and blood-collection mobile clinics.'],
  ['Mobile Service Vans', 'Fully outfitted mobile workshops and customised industrial application vehicles.'],
]

const SERVICES = [
  ['Spare Parts & Assistance', 'Continuous availability of genuine replacement components and responsive technical support for on-call maintenance.'],
  ['Extended Service Lifecycles', 'Comprehensive Annual Maintenance Contracts (AMC) ranging from 2 to 5 years, on an onsite basis, after the standard warranty period.'],
  ['Specialised Fleet Rentals', 'Fire-tender rental services based on customer site requirements.'],
]

function SpecGrid({ items }) {
  return (
    <div className="psp-specs">
      {items.map(([name, desc]) => (
        <div className="psp-spec reveal" key={name}>
          <h3 className="psp-spec-name">{name}</h3>
          <p className="psp-spec-desc">{desc}</p>
        </div>
      ))}
    </div>
  )
}

export default function ProductsServicesPage() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main className="psp-page">
        {/* ---- Hero (centred: breadcrumb · headline · sub-headline) ---- */}
        <section className="section-pad psp-hero">
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
          </div>
        </section>

        {/* ---- What we build (4-card overview) ---- */}
        <section className="section-pad psp-build">
          <div className="wrap">
            <div className="sec-head center reveal">
              <p className="eyebrow"><span className="dot"></span>Capability</p>
              <h2 className="display h-sec">What we build</h2>
              <p className="lead">Four distinct product lines engineered for specialized demands.</p>
            </div>
            <div className="psp-cards">
              {OVERVIEW.map((c) => (
                <a className="psp-card reveal" href={c.href} key={c.title}>
                  <div className="psp-card-body">
                    <span className="psp-card-cat">{c.cat}</span>
                    <h3 className="psp-card-title">{c.title}</h3>
                    <p className="psp-card-desc">{c.desc}</p>
                    <span className="psp-card-link">
                      Learn <span aria-hidden="true">→</span>
                    </span>
                  </div>
                  <figure className="psp-card-media">
                    <img src={c.img} alt={c.alt} loading="lazy" decoding="async" />
                  </figure>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Fire-fighting Equipment & Vehicles ---- */}
        <section className="section-pad" id="fire-fighting">
          <div className="wrap">
            <div className="sec-head reveal">
              <p className="eyebrow"><span className="dot"></span>Fire-fighting Equipment &amp; Vehicles</p>
              <h2 className="display h-sec">
                Engineered for the <span className="italic-accent">front line.</span>
              </h2>
            </div>
            <SpecGrid items={FIRE} />
          </div>
        </section>

        {/* ---- Special Purpose Vehicles ---- */}
        <section className="section-pad" id="spv" style={{ background: 'var(--bone-2)' }}>
          <div className="wrap">
            <div className="sec-head reveal">
              <p className="eyebrow"><span className="dot"></span>Special Purpose Vehicles (SPVs)</p>
              <h2 className="display h-sec">
                Purpose-built for <span className="italic-accent">specialised duty.</span>
              </h2>
            </div>
            <SpecGrid items={SPV} />
          </div>
        </section>

        {/* ---- Services ---- */}
        <section className="section-pad" id="services">
          <div className="wrap">
            <div className="sec-head reveal">
              <p className="eyebrow"><span className="dot"></span>Services</p>
              <h2 className="display h-sec">
                Supported across the <span className="italic-accent">vehicle's life.</span>
              </h2>
              <p className="lead">
                HTPL provides customer-focused solutions through custom-built fire trucks as per
                client requirements, engineering support, and design flexibility — reinforcing
                long-term operational capabilities.
              </p>
            </div>
            <SpecGrid items={SERVICES} />
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
