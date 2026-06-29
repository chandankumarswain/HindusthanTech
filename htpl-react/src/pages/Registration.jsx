import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* "Registration / Approvals" page — layout follows the supplied template
   (centred hero + main image · labelled card grid). Colours, fonts, gutters
   (80/50/25) and the 991/767 breakpoints follow the landing page. */

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const APPROVALS = [
  { name: 'DGQA', sub: 'Ministry of Defence' },
  { name: 'CE Certified', sub: 'European conformity' },
  { name: 'Directorate of Industries', sub: 'Odisha' },
  { name: 'Factories & Boiler Act', sub: 'Statutory compliance' },
  { name: 'MSME', sub: 'Micro, Small & Medium Enterprise' },
  { name: 'ARAI Accreditation', sub: 'Bus body' },
  { name: 'NSIC', sub: 'National Small Scale Industries Corporation, Cuttack' },
  { name: 'ISO Certified', sub: 'International Organization for Standardization' },
  { name: 'Legal Metrology', sub: 'Department of Legal Metrology, Govt. of Odisha' },
  { name: 'Chief Controller of Explosives', sub: 'Nagpur' },
  { name: 'State Transport Authority', sub: 'Cuttack' },
  { name: 'EPFO', sub: "Employees' Provident Fund Organization" },
  { name: 'State Sales Tax Department', sub: 'Cuttack' },
  { name: 'Income Tax Department', sub: 'Cuttack' },
  { name: 'ESIC', sub: 'Employee State Insurance Corporation, Bhubaneswar' },
  { name: 'Export Promotion Marketing', sub: 'Bhubaneswar' },
]

export default function Registration() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main className="reg-page">
        {/* ---- Hero (centred) + main image ---- */}
        <section className="reg-hero">
          <div className="ap-shell">
            <p className="eyebrow reg-hero-kicker reveal">
              <span className="dot"></span>Registration / Approvals
            </p>
            <h1 className="display reg-hero-title reveal">
              Registered, certified,
              <br />
              <span className="italic-accent">and built on trust.</span>
            </h1>
            <p className="lead reg-hero-desc reveal">
              We are proud to be registered with and certified by India's leading defence,
              industrial, and statutory authorities — a mark of the quality, compliance, and
              accountability behind every vehicle we build.
            </p>
            <div className="reg-hero-actions reveal">
              <a href="#approvals" className="btn btn-primary">
                View certifications <span className="arrow">→</span>
              </a>
              <a href="/#contact" className="btn btn-ghost">
                Contact Us
              </a>
            </div>
            <figure className="reg-hero-media reveal">
              <img
                src="/images/fleet/foam-nurser-heavy.jpg"
                alt="HTPL-built heavy-duty foam nurser"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        {/* ---- Approvals grid ---- */}
        <section className="reg-list" id="approvals">
          <div className="ap-shell">
            <header className="reg-head reveal">
              <p className="eyebrow"><span className="dot"></span>Recognised &amp; Certified</p>
              <h2 className="display reg-h2">Our registrations &amp; approvals</h2>
              <p className="reg-text">
                Accreditations and registrations spanning defence quality assurance, industrial
                regulation, and statutory compliance.
              </p>
            </header>
            <ul className="reg-grid">
              {APPROVALS.map((a) => (
                <li className="reg-card reveal" key={a.name}>
                  <span className="reg-card-ic" aria-hidden="true"><CheckIcon /></span>
                  <span className="reg-card-text">
                    <span className="reg-card-name">{a.name}</span>
                    <span className="reg-card-sub">{a.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Built to standard. Certified to deliver.</h2>
            <div className="ap-cta-actions">
              <a href="/#contact" className="btn btn-primary">
                Request a quote <span className="arrow">→</span>
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
