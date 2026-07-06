import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* Products & Services page (/products-services).
   Layout: compact centred hero → Services (three cards) → closing CTA.
   Built from the landing design system (section-pad / wrap, site tokens,
   991/767 breakpoints). The product range lives on its own /products page. */

const ICON = {
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

const SERVICES = [
  { icon: ICON.wrench, title: 'Spare Parts & Assistance', desc: 'Continuous availability of genuine replacement components and responsive technical support for on-call maintenance.' },
  { icon: ICON.amc, title: 'Extended Service Lifecycles', desc: 'Comprehensive Annual Maintenance Contracts (AMC) ranging from 2 to 5 years, on an onsite basis, after the standard warranty period.' },
  { icon: ICON.key, title: 'Specialised Fleet Rentals', desc: 'Fire-tender rental services based on customer site requirements.' },
]

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
            <a href="#services" className="psp-explore reveal">
              Explore <span aria-hidden="true">→</span>
            </a>
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
              <a href="/products" className="btn btn-ghost">
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
