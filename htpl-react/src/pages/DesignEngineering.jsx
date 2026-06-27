import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* "Design & Engineering Prowess" page.
   Layout rhythm follows the supplied template (hero + visual · capability
   cards · dark spec band · validation gates · CTA); content is from the
   engineering reference. Colours, fonts, gutters (80/50/25) and the 991/767
   breakpoints follow the landing page for full design parity. */

/* process icons (stroke = currentColor) */
const SICON = {
  design: <><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></>,
  analysis: <><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></>,
  machining: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="M8.12 8.12 12 12" /></>,
  welding: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  finishing: <><rect x="3" y="3" width="11" height="6" rx="1" /><path d="M14 6h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-7a2 2 0 0 0-2 2v1" /><rect x="9" y="16" width="4" height="5" rx="1" /></>,
  integration: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></>,
}

const STAGES = [
  { num: '01', label: 'Design', icon: SICON.design },
  { num: '02', label: 'Analysis', icon: SICON.analysis },
  { num: '03', label: 'Machining', icon: SICON.machining },
  { num: '04', label: 'Welding', icon: SICON.welding },
  { num: '05', label: 'Finishing', icon: SICON.finishing },
  { num: '06', label: 'Integration', icon: SICON.integration },
]

/* dotted S-curve through alternating up/down node centres (viewBox 0 0 100 100) */
function wavePath(n) {
  const span = 100 / n
  const x = (i) => (i + 0.5) * span
  const y = (i) => (i % 2 === 0 ? 35 : 65)
  let d = `M ${x(0)} ${y(0)}`
  for (let i = 0; i < n - 1; i++) {
    d += ` C ${x(i) + span / 2} ${y(i)} ${x(i + 1) - span / 2} ${y(i + 1)} ${x(i + 1)} ${y(i + 1)}`
  }
  return d
}

const CAPABILITIES = [
  {
    num: '01',
    cat: 'Design',
    title: 'Precision 2D & 3D Engineering Design',
    desc: 'Software-driven chassis layout optimisation and fluid-dynamics integration, modelled for precision and visualisation before a single part is cut.',
    tags: ['AutoCAD', 'SolidWorks', 'Chassis layout', 'Fluid dynamics'],
  },
  {
    num: '02',
    cat: 'Analysis',
    title: 'Vehicle Dynamics Analysis',
    desc: 'Stability proven through Center of Gravity modelling and load-distribution analysis, so safety and performance hold up on rough terrain.',
    tags: ['CG modelling', 'Load distribution', 'Stability'],
  },
  {
    num: '03',
    cat: 'Machining',
    title: 'Modern Manufacturing Systems',
    desc: 'Precision metal fabrication on hydraulic and pneumatic systems, with CNC cutting, turning, and machining for tight dimensional accuracy.',
    tags: ['CNC', 'Hydraulic', 'Pneumatic'],
  },
  {
    num: '04',
    cat: 'Welding',
    title: 'Advanced Fabrication & Welding',
    desc: 'High-strength structural joining using high-precision MIG and TIG welding setups built for load-bearing assemblies.',
    tags: ['MIG welding', 'TIG welding', 'Structural joints'],
  },
  {
    num: '05',
    cat: 'Finishing',
    title: 'Durability Finishing',
    desc: 'Temperature-controlled baking in a modern paint booth delivers long-term weather-proofing, chemical resistance, and corrosion protection.',
    tags: ['Baked finish', 'Anti-corrosion', 'Weather-proof'],
  },
  {
    num: '06',
    cat: 'Integration',
    title: 'Process Innovation',
    desc: 'Fire-fighting system integration monitored dynamically through an ERP-based production system, backed by robust quality control and inspection.',
    tags: ['ERP monitoring', 'Quality control', 'Inspection'],
  },
]

const SPECS = [
  { k: 'Engineering platforms', v: '2D · 3D' },
  { k: 'Joining methods', v: 'MIG · TIG' },
  { k: 'Production control', v: 'ERP' },
]

const GATES = [
  {
    g: 'Gate / 01',
    title: 'Deep Lift Test',
    desc: 'Structural integrity verified under full lift load, confirming the chassis and frame carry rated stress without deflection.',
    tag: 'Load · pass/fail',
  },
  {
    g: 'Gate / 02',
    title: 'Road Test',
    desc: 'On-road dynamic run validating stability, handling, and system response against the vehicle dynamics model.',
    tag: 'Dynamic · field',
  },
  {
    g: 'Gate / 03',
    title: 'Paint Thickness Test',
    desc: 'Coating depth measured across panels to confirm a uniform, corrosion-grade finish before the vehicle leaves the booth.',
    tag: 'μm gauge',
  },
]

export default function DesignEngineering() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main className="de-page">
        {/* ---- Hero ---- */}
        <section className="de-hero">
          <div className="ap-shell">
            <p className="eyebrow de-hero-kicker reveal">
              <span className="dot"></span>Design &amp; Engineering Prowess
              <span className="de-tol">Tolerance ±0.02 mm</span>
            </p>
            <h1 className="display de-hero-title reveal">
              Engineered digitally,
              <br />
              <span className="italic-accent">built to exact tolerance.</span>
            </h1>
            <p className="lead de-hero-desc reveal">
              Every vehicle is engineered digitally before fabrication, then built on calibrated
              systems that hold tolerances from the first cut to final paint.
            </p>
            <div className="de-hero-actions reveal">
              <a href="#capabilities" className="btn btn-primary">
                Explore capabilities <span className="arrow">→</span>
              </a>
              <a href="/#contact" className="btn btn-ghost">
                Contact Us
              </a>
            </div>

            {/* digital → physical stage flow (First cut → Final paint) */}
            <div className="de-flow reveal">
              <div className="de-flow-head">
                <span className="de-flow-end">▸ First cut</span>
                <span className="de-flow-end">Final paint ◂</span>
              </div>
              <div className="de-wave" role="list" aria-label="Six-stage process: design to integration">
                <svg className="de-wave-path" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d={wavePath(STAGES.length)} />
                </svg>
                {STAGES.map((s, i) => (
                  <div className={`de-wnode ${i % 2 === 0 ? 'is-up' : 'is-down'}`} role="listitem" key={s.num}>
                    <span className="de-wcircle">
                      <svg className="de-wico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {s.icon}
                      </svg>
                    </span>
                    <span className="de-wmeta">
                      <span className="de-wnum">{s.num}</span>
                      <span className="de-wlabel">{s.label}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- Capabilities (6 cards) ---- */}
        <section className="de-caps" id="capabilities">
          <div className="ap-shell">
            <header className="de-sec-head reveal">
              <p className="eyebrow"><span className="dot"></span>Capabilities</p>
              <h2 className="display de-h2">Six stages, digital to physical</h2>
              <p className="de-text">
                A continuous engineering chain — from software-modelled design to calibrated
                fabrication, finishing, and system integration.
              </p>
            </header>
            <div className="de-cap-grid">
              {CAPABILITIES.map((c) => (
                <article className="de-card reveal" key={c.num}>
                  <div className="de-card-top">
                    <span className="de-card-num">{c.num}</span>
                    <span className="de-card-cat">{c.cat}</span>
                  </div>
                  <h3 className="de-card-title">{c.title}</h3>
                  <p className="de-card-desc">{c.desc}</p>
                  <div className="de-card-tags">
                    {c.tags.map((t) => (
                      <span className="de-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Dark spec band ---- */}
        <section className="de-band">
          <div className="ap-shell de-band-grid">
            <p className="display de-band-quote reveal">
              Engineered digitally before fabrication — then built on{' '}
              <span className="de-band-accent">calibrated systems</span> that hold tolerances
              from the first cut to final paint.
            </p>
            <dl className="de-band-specs reveal">
              {SPECS.map((s) => (
                <div className="de-spec" key={s.k}>
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---- Validation gates ---- */}
        <section className="de-gates">
          <div className="ap-shell">
            <header className="de-sec-head de-sec-head-row reveal">
              <div>
                <p className="eyebrow"><span className="dot"></span>Validation Gates</p>
                <h2 className="display de-h2">Every build, before dispatch</h2>
              </div>
              <p className="de-text">
                No vehicle leaves the facility until it clears every required gate — verified,
                documented, and signed off.
              </p>
            </header>
            <div className="de-gate-grid">
              {GATES.map((g) => (
                <article className="de-gate reveal" key={g.g}>
                  <div className="de-gate-top">
                    <span className="de-gate-id">{g.g}</span>
                    <span className="de-gate-req">● Required</span>
                  </div>
                  <h3 className="de-gate-title">{g.title}</h3>
                  <p className="de-gate-desc">{g.desc}</p>
                  <span className="de-gate-tag">{g.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Engineered to spec. Built to last.</h2>
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
