import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { VALUES, CREDENTIALS, VISION_TEXT, MISSION_TEXT } from '../data/company'

/* Small reusable checkmark for the capability / testing lists (matches ap-checks) */
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

/* Content sourced from the HTPL profile — mapped to the About-page sub-sections
   that the navbar "About Us" dropdown links to. */
const INFRASTRUCTURE = [
  { name: 'Factory', desc: 'Primary fabrication and assembly floor for fire tenders and special-purpose vehicles.' },
  { name: 'Store', desc: 'Organised material and component storage governed by FIFO inventory control.' },
  { name: 'Testing Facility', desc: 'In-house testing bay built to IS and DGQA standards for full pre-dispatch validation.' },
]

const MACHINERY = [
  'CNC cutting & machining',
  'Hydraulic & pneumatic presses',
  'MIG & TIG welding stations',
  'Sheet-metal forming',
  'Temperature-controlled paint booth',
  'Material handling & lifting',
  'Inspection & metrology',
]

const ENGINEERING = [
  'Precision 2D & 3D design — AutoCAD & SolidWorks',
  'Vehicle dynamics & centre-of-gravity (CG) analysis',
  'CNC cutting, turning & machining for dimensional accuracy',
  'MIG & TIG welding for high-strength structural joining',
  'Modern paint booth with temperature-controlled baking',
  'ERP-based production monitoring with QC & inspection',
]

const TESTS = [
  'DP test & hydrotest of tanks',
  'Endurance test',
  'Stability test',
  'Gradeability test',
  'Shower test',
  'Flow test',
  'Monitor throw test',
  'Deep-lift, road & paint-thickness tests',
]

const APPROVALS = [
  'DGQA, Ministry of Defence',
  'CE Certified',
  'ISO 9001 Certified',
  'ARAI Accreditation',
  'Chief Controller of Explosives, Nagpur',
  'State Transport Authority, Cuttack',
  'Directorate of Industries, Odisha',
  'MSME',
  'NSIC, Cuttack',
  'Legal Metrology, Govt. of Odisha',
  'Factories & Boiler Act',
  'EPF & ESI',
  'State Sales Tax & Income Tax',
  'Export Promotion Marketing',
]

/* Dedicated About page — layout inspired by the reference (breadcrumb hero,
   statement, stats, alternating mission/vision, values). All copy and the
   colour/type system are reused verbatim from the rest of the site. */
export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main className="about-page">
        {/* ---- Hero: header row (heading + intro) above a 3-image collage ---- */}
        <section className="ap-hero" id="company-overview">
          <div className="ap-shell">
            <div className="ap-hero-head">
              <div className="ap-hero-head-l reveal">
                <p className="ap-crumb">
                  <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
                  <span className="ap-crumb-current">About</span>
                </p>
                <h1 className="display ap-title">
                  Engineered for the{' '}
                  <span className="italic-accent">industries that matter.</span>
                </h1>
              </div>
              <p className="lead ap-intro reveal">
                Founded in <strong>1987</strong> as Hindustan Enterprises by{' '}
                <strong>Shri Mohan Ranjan Panda</strong> at Jagatpur, Cuttack, Odisha, and
                incorporated as Hindusthan Technologies Pvt. Ltd. in <strong>2010</strong>.
                An <strong>MSME-recognised</strong> manufacturer (Govt. of Odisha) with over
                <strong> three decades</strong> of expertise in sophisticated, safety-critical
                engineering — known for rugged performance, on-time delivery, and transparency.
              </p>
            </div>

            <div className="ap-hero-collage reveal">
              <figure className="ap-col ap-col-sm">
                <img
                  src="/images/about/truck-1.jpeg"
                  alt="HTPL Tata-based fire & rescue vehicle"
                  loading="eager"
                  decoding="async"
                />
              </figure>
              <figure className="ap-col ap-col-lg">
                <img
                  src="/images/about/truck-2.jpeg"
                  alt="HTPL fire tender in the HTPL studio"
                  loading="eager"
                  decoding="async"
                />
              </figure>
              <figure className="ap-col ap-col-md">
                <img
                  src="/images/about/truck-3.jpeg"
                  alt="HTPL FACT fire tender built at the Jagatpur facility"
                  loading="eager"
                  decoding="async"
                />
              </figure>
            </div>

          </div>
        </section>

        {/* ---- Stats band (primary red, centered) ---- */}
        <section className="ap-stats-section">
          <div className="ap-shell">
            <div className="ap-statsband reveal">
              <div className="ap-sb">
                <span className="ap-sb-n">38<span className="ap-sb-suf">+</span></span>
                <span className="ap-sb-l">Years of excellence</span>
              </div>
              <div className="ap-sb">
                <span className="ap-sb-n">2000<span className="ap-sb-suf">+</span></span>
                <span className="ap-sb-l">Vehicles delivered</span>
              </div>
              <div className="ap-sb">
                <span className="ap-sb-n">50<span className="ap-sb-suf">+</span></span>
                <span className="ap-sb-l">PSU clients</span>
              </div>
              <div className="ap-sb">
                <span className="ap-sb-n">15<span className="ap-sb-suf">+</span></span>
                <span className="ap-sb-l">States served</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Our Mission: image left · text + checklist right ---- */}
        <section className="ap-block" id="vision-mission">
          <div className="ap-shell ap-split">
            <figure className="ap-media reveal">
              <img
                src="/images/fleet/htpl-build-rear.jpg"
                alt="HTPL multipurpose fire tender built at the Jagatpur facility"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="ap-copy reveal">
              <p className="eyebrow"><span className="dot"></span>Our purpose</p>
              <h2 className="display ap-h2">Our mission</h2>
              <p className="ap-text">{MISSION_TEXT}</p>
              <ul className="ap-checks">
                {CREDENTIALS.map((c) => (
                  <li key={c}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---- Our Vision: text left · image right ---- */}
        <section className="ap-block">
          <div className="ap-shell ap-split is-reverse">
            <div className="ap-copy reveal">
              <p className="eyebrow"><span className="dot"></span>Our purpose</p>
              <h2 className="display ap-h2">Our vision</h2>
              <p className="ap-text">{VISION_TEXT}</p>
            </div>
            <figure className="ap-media reveal">
              <img
                src="/images/fleet/sail-rsp-night-ops.jpg"
                alt="HTPL fire tender in active emergency response"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        {/* ---- Core values ---- */}
        <section className="ap-block ap-values-block">
          <div className="ap-shell">
            <div className="ap-values-head reveal">
              <p className="eyebrow"><span className="dot"></span>What we stand for</p>
              <h2 className="display ap-h2">Our core values</h2>
            </div>
            <div className="ap-values-grid">
              {VALUES.map((v, i) => (
                <article className="ap-vcard reveal" key={v.name}>
                  <span className="ap-vcard-bracket" aria-hidden="true">
                    <svg width="24" height="11" viewBox="0 0 24 11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 10V1h7" />
                      <path d="M23 10V1h-7" />
                    </svg>
                  </span>
                  <span className="ap-vcard-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="ap-vcard-title">{v.name}</h4>
                  <p className="ap-vcard-desc">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Our Infrastructure ---- */}
        <section className="ap-block ap-sec-auto" id="our-infrastructure">
          <div className="ap-shell">
            <div className="ap-cap-head reveal">
              <p className="eyebrow"><span className="dot"></span>Where we build</p>
              <h2 className="display ap-h2">Our infrastructure</h2>
              <p className="ap-text">
                An integrated manufacturing facility at Jagatpur, Cuttack, with dedicated
                fabrication, storage, and testing zones engineered for precision, throughput,
                and safety.
              </p>
            </div>
            <div className="ap-cap-grid reveal">
              {INFRASTRUCTURE.map((f) => (
                <article className="ap-cap-card" key={f.name}>
                  <h4>{f.name}</h4>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Our Plant & Machinery ---- */}
        <section className="ap-block ap-sec-auto" id="plant-machinery">
          <div className="ap-shell">
            <div className="ap-cap-head reveal">
              <p className="eyebrow"><span className="dot"></span>Capabilities</p>
              <h2 className="display ap-h2">Our plant &amp; machinery</h2>
              <p className="ap-text">
                Our shopfloor is equipped with modern fabrication, machining, and finishing
                systems that enable consistent, high-tolerance builds. A detailed plant &amp;
                machinery schedule is available on request.
              </p>
            </div>
            <ul className="ap-tags reveal" aria-label="Plant &amp; machinery">
              {MACHINERY.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- Design & Engineering Prowess ---- */}
        <section className="ap-block ap-sec-auto" id="design-engineering">
          <div className="ap-shell ap-split">
            <figure className="ap-media reveal">
              <img
                src="/images/fleet/fabrication-workshop.jpg"
                alt="HTPL design and fabrication at the Jagatpur workshop"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="ap-copy reveal">
              <p className="eyebrow"><span className="dot"></span>Engineering</p>
              <h2 className="display ap-h2">Design &amp; engineering prowess</h2>
              <p className="ap-text">
                Every vehicle is engineered digitally before fabrication, then built on
                calibrated systems that hold tolerances from the first cut to final paint.
              </p>
              <ul className="ap-checks">
                {ENGINEERING.map((e) => (
                  <li key={e}>
                    <CheckIcon />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---- Testing Facility ---- */}
        <section className="ap-block ap-sec-auto" id="testing-facility">
          <div className="ap-shell ap-split is-reverse">
            <div className="ap-copy reveal">
              <p className="eyebrow"><span className="dot"></span>Validated before dispatch</p>
              <h2 className="display ap-h2">Testing facility</h2>
              <p className="ap-text">
                A dedicated in-house testing facility built to IS and DGQA standards. Every
                vehicle is subjected to a full battery of tests and calibrations prior to
                dispatch.
              </p>
              <ul className="ap-checks ap-checks-2col">
                {TESTS.map((t) => (
                  <li key={t}>
                    <CheckIcon />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="ap-media reveal">
              <img
                src="/images/fleet/dcp-tender.jpg"
                alt="HTPL fire tender undergoing pre-dispatch testing"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        {/* ---- Registration & Approvals ---- */}
        <section className="ap-block ap-sec-auto" id="registration-approvals">
          <div className="ap-shell">
            <div className="ap-cap-head reveal">
              <p className="eyebrow"><span className="dot"></span>Recognised &amp; certified</p>
              <h2 className="display ap-h2">Registration &amp; approvals</h2>
              <p className="ap-text">
                HTPL is registered with and certified by leading national authorities across
                defence, industry, and statutory bodies.
              </p>
            </div>
            <ul className="ap-tags ap-tags-approvals reveal" aria-label="Registrations and approvals">
              {APPROVALS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Need custom fire safety solutions?</h2>
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
