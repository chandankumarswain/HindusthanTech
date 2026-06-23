import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* "Design & Engineering Prowess" page.
   Layout rhythm follows the supplied template (hero + visual · capability
   cards · dark spec band · validation gates · CTA); content is from the
   engineering reference. Colours, fonts, gutters (80/50/25) and the 991/767
   breakpoints follow the landing page for full design parity. */

const STAGES = [
  { num: '01', label: 'Design' },
  { num: '02', label: 'Analysis' },
  { num: '03', label: 'Machining' },
  { num: '04', label: 'Welding' },
  { num: '05', label: 'Finishing' },
  { num: '06', label: 'Integration' },
]

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
              <ol className="de-flow-stages">
                {STAGES.map((s) => (
                  <li className="de-stage" key={s.num}>
                    <span className="de-stage-num">{s.num}</span>
                    <span className="de-stage-label">{s.label}</span>
                  </li>
                ))}
              </ol>
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
