import { useCallback, useEffect, useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* "Testing Facility" page — a faithful rewrite of the standalone
   HTPL_Testing_Facility.html into the site's tech stack. The original
   editorial "test-log" content is preserved verbatim, but re-skinned to the
   site design language (bone canvas · ink · HTPL red · serif display + grotesk),
   the shared tokens, .ap-shell gutters (80/50/25) and 991/767 breakpoints. */

const IMG = '/images/testing/'

const HERO_STATS = [
  { n: '10', suf: '', l: 'Test protocols — every tender, before dispatch' },
  { n: 'IS + defence', suf: '', l: 'Specifications — all facilities in-house' },
  { n: 'ASNT II', suf: '', l: 'Certified NDT personnel' },
  { n: '10,000', suf: ' LPM', l: 'NABL-calibrated flow metering' },
]

/* The protocol as the customer reads it — 10 checks, deep-linking to their
   test section (flow + deep-lift share one section, as in the source). */
const PROTOCOL = [
  { n: '01', label: 'DP test & hydrotest of tanks', href: '#t1' },
  { n: '02', label: 'Endurance test', href: '#t2' },
  { n: '03', label: 'Stability test', href: '#t3' },
  { n: '04', label: 'Gradeability test', href: '#t4' },
  { n: '05', label: 'Shower test', href: '#t5' },
  { n: '06', label: 'Flow test', href: '#t6' },
  { n: '07', label: 'Monitor throw test', href: '#t7' },
  { n: '08', label: 'Deep lift test', href: '#t6' },
  { n: '09', label: 'Road test', href: '#t8' },
  { n: '10', label: 'Paint thickness test', href: '#t9' },
]

/* Small inline SVG diagrams that ride at the foot of a spec plate, echoing the
   source page. Colours use the site tokens (ink / accent). */
const TiltDiagram = () => (
  <svg width="196" height="66" viewBox="0 0 196 66" aria-hidden="true">
    <line x1="10" y1="52" x2="180" y2="52" stroke="var(--ink)" strokeWidth="1" />
    <line x1="10" y1="52" x2="152" y2="-23.5" stroke="var(--accent)" strokeWidth="2" />
    <line x1="10" y1="52" x2="10" y2="40" stroke="var(--ink)" strokeWidth="1" />
    <text x="150" y="18" fontFamily="var(--mono)" fontSize="11" fill="var(--accent)">28°</text>
  </svg>
)
const GradeDiagram = () => (
  <svg width="196" height="60" viewBox="0 0 196 60" aria-hidden="true">
    <line x1="14" y1="48" x2="176" y2="48" stroke="var(--ink)" strokeWidth="1" />
    <line x1="14" y1="48" x2="150" y2="14" stroke="var(--accent)" strokeWidth="2" />
    <line x1="150" y1="14" x2="150" y2="48" stroke="var(--ink)" strokeWidth="1" strokeDasharray="3 3" />
    <text x="70" y="30" fontFamily="var(--mono)" fontSize="11" fill="var(--accent)">1 : 4</text>
  </svg>
)
const FlowDiagram = () => (
  <svg width="196" height="44" viewBox="0 0 196 44" aria-hidden="true">
    <line x1="14" y1="34" x2="176" y2="34" stroke="var(--ink)" strokeWidth="1" />
    <line x1="14" y1="28" x2="14" y2="34" stroke="var(--ink)" strokeWidth="1" />
    <line x1="54.5" y1="28" x2="54.5" y2="34" stroke="var(--ink)" strokeWidth="1" />
    <line x1="95" y1="28" x2="95" y2="34" stroke="var(--ink)" strokeWidth="1" />
    <line x1="135.5" y1="28" x2="135.5" y2="34" stroke="var(--ink)" strokeWidth="1" />
    <line x1="176" y1="22" x2="176" y2="34" stroke="var(--accent)" strokeWidth="2" />
    <text x="120" y="18" fontFamily="var(--mono)" fontSize="11" fill="var(--accent)">10,000 LPM</text>
  </svg>
)

/* Each test: log header (index + descriptor), heading, body copy, a spec plate
   and a photo cluster. `flip` alternates the split direction down the page. */
const TESTS = [
  {
    id: 't1',
    log: 'Dye penetration + hydrostatic — in-process QC',
    title: 'Dye penetration & hydro test',
    body: (
      <>
        <p>
          Welds are proven twice. A <b>dye penetration test</b> is run on the weld surfaces of
          every tank and pipeline during fabrication — catching surface defects at the stage where
          they can still be corrected. It is carried out in-house by{' '}
          <b>ASNT Level II certified personnel</b> as part of in-process quality control.
        </p>
        <p>
          Once tank and pipeline manufacturing is complete, a <b>hydrostatic test</b> under our
          internal SOP confirms zero leakage or seepage, proving weld quality for the long service
          life of the tender.
        </p>
      </>
    ),
    specs: [
      ['Method', 'Dye penetrant + hydrostatic'],
      ['Personnel', 'ASNT Level II certified'],
      ['Stage', 'In-process + post-fabrication'],
      ['Accepts', 'Zero leakage / seepage'],
    ],
    images: [
      { src: 'fig-01-a.jpg', cap: 'FIG. 01-A — FABRICATION BAY, TANK LINE' },
      { src: 'fig-01-b.jpg', cap: 'FIG. 01-B — PENETRANT ON TANK SHELL' },
      { src: 'fig-01-c.jpg', cap: 'FIG. 01-C — PENETRANT CHECK, TANK INTERIOR' },
      { src: 'fig-01-d.jpg', cap: 'FIG. 01-D — PIPELINE TEST SETUP' },
    ],
  },
  {
    id: 't2',
    flip: true,
    log: 'Fire pump endurance — final inspection, IS standard',
    title: 'Endurance test',
    body: (
      <>
        <p>
          The fire pump endurance test is part of final inspection — run in the in-house test rig
          and yard to <b>IS standards</b> for every tender, with capacity for{' '}
          <b>ten tenders in a single test cycle</b>.
        </p>
        <p>
          Long-hour continuous running proves the quality and durability of the{' '}
          <b>pump, the PTO and the engine</b> together, not in isolation.
        </p>
      </>
    ),
    specs: [
      ['Rig capacity', '10 tenders / cycle'],
      ['Standard', 'Relevant IS'],
      ['Verifies', 'Pump · PTO · engine'],
      ['Duration', 'Long-hour continuous run'],
    ],
    images: [
      { src: 'fig-02-a.jpg', cap: 'FIG. 02-A — TEST YARD, ENDURANCE RUN' },
      { src: 'fig-02-b.jpg', cap: 'FIG. 02-B — ENDURANCE LINE AT THE SUMP' },
    ],
  },
  {
    id: 't3',
    log: 'Static stability — hydraulic ramp, clinometer read',
    title: 'Stability test',
    body: (
      <p>
        A <b>fully loaded</b> tender is placed on a hydraulic ramp and tilted to{' '}
        <b>28 degrees from the horizontal</b> — read off a clinometer mounted on the ramp — to
        confirm it will not overturn on uneven, sloped or inclined paths in real manoeuvres.
      </p>
    ),
    specs: [
      ['Tilt angle', '28° from horizontal'],
      ['Instrument', 'Clinometer on ramp'],
      ['Condition', 'Fully loaded'],
      ['Rig', 'Hydraulic tilt ramp'],
    ],
    diagram: <TiltDiagram />,
    images: [
      { src: 'fig-03-a.jpg', cap: 'FIG. 03-A — 28° ON THE HYDRAULIC RAMP' },
      { src: 'fig-03-b.jpg', cap: 'FIG. 03-B — REAR QUARTER AT FULL TILT' },
      { src: 'fig-03-c.jpg', cap: 'FIG. 03-C — INSPECTION AT THE PLATFORM' },
    ],
  },
  {
    id: 't4',
    flip: true,
    log: 'Parking brake hold — 25% gradient',
    title: 'Gradeability test',
    body: (
      <p>
        The parking brake must hold a <b>fully loaded</b> tender on a <b>25% gradient</b> — 1 in 4,
        roughly a <b>14.2° slope</b>. It is checked on every vehicle, on the ramp built for it.
      </p>
    ),
    specs: [
      ['Gradient', '25% (1 : 4)'],
      ['Slope angle', '≈ 14.2°'],
      ['Condition', 'Fully loaded'],
      ['Verifies', 'Parking brake'],
    ],
    diagram: <GradeDiagram />,
    images: [
      { src: 'fig-04-a.jpg', cap: 'FIG. 04-A — 1-IN-4 RAMP, FULLY LOADED' },
      { src: 'fig-04-b.jpg', cap: 'FIG. 04-B — HOLD TEST ON GRADE' },
      { src: 'fig-04-c.jpg', cap: 'FIG. 04-C — MINI WATER TENDER ON GRADE' },
    ],
  },
  {
    id: 't5',
    log: 'Shower / rain test — water ingress, IS code',
    title: 'Shower / rain test',
    body: (
      <p>
        Every cabin and locker is proven watertight. The tender stands under an{' '}
        <b>in-house shower array</b> built to the relevant IS code — <b>no ingress</b> into the
        driver cabin or equipment lockers is accepted.
      </p>
    ),
    specs: [
      ['Checks', 'Driver cabin + lockers'],
      ['Rig', 'In-house shower array'],
      ['Code', 'Relevant IS'],
      ['Accepts', 'Zero ingress'],
    ],
    images: [
      { src: 'fig-05-a.jpg', cap: 'FIG. 05-A — SHOWER ARRAY, NIGHT RUN' },
      { src: 'fig-05-b.jpg', cap: 'FIG. 05-B — UNDER THE ARRAY, OVERHEAD' },
      { src: 'fig-05-c.jpg', cap: 'FIG. 05-C — FULL-SOAK CYCLE' },
    ],
  },
  {
    id: 't6',
    flip: true,
    log: 'Flow + deep lift — NABL-calibrated metering',
    title: 'Flow & deep lift test',
    body: (
      <>
        <p>
          A dedicated <b>digital flow meter</b> — calibration-certified by an{' '}
          <b>NABL-accredited laboratory</b> — measures pump output up to{' '}
          <b>10,000 litres per minute</b>, verifying the actual flow capacity of every fire pump.
        </p>
        <p>
          A separate <b>deep-lift facility</b> measures pump performance from depth, to IS
          standards.
        </p>
      </>
    ),
    specs: [
      ['Meter', 'Digital, NABL-calibrated'],
      ['Range', 'Up to 10,000 LPM'],
      ['Plus', 'Deep-lift performance'],
      ['Standard', 'Relevant IS'],
    ],
    diagram: <FlowDiagram />,
    images: [
      { src: 'fig-06-a.jpg', cap: 'FIG. 06-A — DIGITAL FLOW METER LINE' },
      { src: 'fig-06-b.jpg', cap: 'FIG. 06-B — TRAILER PUMP ON DEEP LIFT' },
      { src: 'fig-06-c.jpg', cap: 'FIG. 06-C — DEEP-LIFT WELL' },
    ],
  },
  {
    id: 't7',
    monitor: true,
    log: 'Monitor throw — range, arc & coverage',
    title: 'Monitor throw test',
    lead: (
      <>
        Water and foam monitors are throw-tested in the yard — <b>range, arc and coverage</b>{' '}
        verified on every tender before it ships.
      </>
    ),
    images: [
      { src: 'fig-07-a.jpg', cap: 'FIG. 07-A — MONITOR LINE, FULL ARC' },
      { src: 'fig-07-b.jpg', cap: 'FIG. 07-B — THROW OVER THE YARD' },
      { src: 'fig-07-c.jpg', cap: 'FIG. 07-C — FOAM MONITOR RUN' },
      { src: 'fig-07-d.jpg', cap: 'FIG. 07-D — RANGE CHECK' },
    ],
  },
  {
    id: 't8',
    log: 'Road trial — highway + cross-country',
    title: 'Road test',
    body: (
      <p>
        With fabrication complete, every tender goes out on road trial —{' '}
        <b>highway and cross-country both</b> — to surface any abnormality before the customer ever
        sees it.
      </p>
    ),
    specs: [
      ['Terrain', 'Highway + cross-country'],
      ['Stage', 'Post-fabrication'],
      ['Checks', 'Any abnormality'],
      ['Applies to', 'Every vehicle'],
    ],
    images: [
      { src: 'fig-08-a.jpg', cap: 'FIG. 08-A — CRASH TENDER ON TRIAL' },
      { src: 'fig-08-b.jpg', cap: 'FIG. 08-B — MULTI-AXLE ON HIGHWAY' },
      { src: 'fig-08-c.jpg', cap: 'FIG. 08-C — WET-ROAD RUN' },
      { src: 'fig-08-d.jpg', cap: 'FIG. 08-D — CROSS-COUNTRY LEG' },
    ],
  },
  {
    id: 't9',
    flip: true,
    log: 'Paint thickness — calibrated gauge check',
    title: 'Paint thickness',
    body: (
      <p>
        Paint is protection. Superior <b>epoxy systems</b> are applied in a dedicated{' '}
        <b>in-house painting chamber</b> to customer requirement — and coating thickness is verified
        with a <b>calibrated gauge</b> after completion, panel by panel.
      </p>
    ),
    specs: [
      ['System', 'Superior epoxy'],
      ['Chamber', 'Dedicated, in-house'],
      ['Gauge', 'Calibrated thickness gauge'],
      ['Stage', 'Post-painting'],
    ],
    images: [
      { src: 'fig-09-a.jpg', cap: 'FIG. 09-A — GAUGE CHECK AT THE PANEL' },
      { src: 'fig-09-b.jpg', cap: 'FIG. 09-B — CALIBRATED THICKNESS GAUGE' },
      { src: 'fig-09-c.jpg', cap: 'FIG. 09-C — EPOXY FINISH, CLOSE READ' },
    ],
  },
]

const FACILITIES = [
  { fi: 'F-01', label: 'Gradeability ramp', src: 'fac-gradeability-ramp-1-in-4.jpg', cap: 'GRADEABILITY RAMP — 1 IN 4' },
  { fi: 'F-02', label: 'Inspection room', src: 'fac-inspection-room.jpg', cap: 'INSPECTION ROOM' },
  { fi: 'F-03', label: 'Deep-lift well', src: 'fac-deep-lift-well.jpg', cap: 'DEEP-LIFT WELL' },
  { fi: 'F-04', label: 'Rain / shower rig', src: 'fac-rain-shower-rig.jpg', cap: 'RAIN / SHOWER RIG' },
  { fi: 'F-05', label: 'Stability platform', src: 'fac-stability-platform-28-ti.jpg', cap: 'STABILITY PLATFORM — 28° TILT' },
  { fi: 'F-06', label: 'Endurance test sump', src: 'fac-endurance-test-sump.jpg', cap: 'ENDURANCE TEST SUMP' },
]

const INSTRUMENTS = [
  ['E-01', 'Pump & pipeline hydraulic testing machine', '02 Nos.'],
  ['E-02', 'Weighing machine — digital & manual', '02 Nos.'],
  ['E-03', 'Digital flow meter', '01 Set'],
  ['E-04', 'Digital tachometer', '02 Nos.'],
  ['E-05', 'Paint thickness gauge', '01 No.'],
  ['E-06', 'Impeller balancing machine', '01 No.'],
  ['E-07', 'Clinometer', '02 Nos.'],
  ['E-08', 'Digital vernier meter', '05 Nos.'],
  ['E-09', 'Ultrasonic distance meter', '01 No.'],
  ['E-10', 'Ultrasonic volume & area measuring meter', '01 No.'],
  ['E-11', 'Ultrasonic thickness gauge', '01 No.'],
]

export default function TestingFacility() {
  useScrollReveal()

  /* click-to-zoom lightbox — mirrors the source page's overlay */
  const [lightbox, setLightbox] = useState(null)
  const closeLb = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && closeLb()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
    }
  }, [lightbox, closeLb])

  const Fig = ({ img, className = '' }) => (
    <figure className={`tf-fig ${className}`}>
      <button
        type="button"
        className="tf-fig-btn"
        onClick={() => setLightbox(img)}
        aria-label={`Enlarge ${img.cap}`}
      >
        <img src={IMG + img.src} alt={img.cap} loading="lazy" decoding="async" />
      </button>
      <figcaption className="tf-fig-cap">
        <b>{img.cap.split('—')[0].trim()}</b>
        {img.cap.includes('—') ? img.cap.split('—').slice(1).join('—').trim() : ''}
      </figcaption>
    </figure>
  )

  return (
    <>
      <Nav />
      <main className="tf-page" id="top">
        {/* ---- Hero ---- */}
        <section className="tf-hero">
          <div className="ap-shell">
            <p className="eyebrow reveal"><span className="dot" />Testing Facility — Jagatpur, Cuttack</p>
            <h1 className="display tf-hero-title reveal">
              Ten checks before <span className="italic-accent">dispatch.</span>
            </h1>
            <p className="lead tf-hero-desc reveal">
              To hold our quality policy — and our customers' trust — every product built at our
              plant goes through a full programme of tests and calibrations before it leaves the
              site. Every facility required is in-house, to the relevant IS and defence
              specifications.
            </p>
            <div className="tf-hero-actions reveal">
              <a href="#protocol" className="btn btn-primary">
                View the protocol <span className="arrow">→</span>
              </a>
              <a href="/#contact" className="btn btn-ghost">
                Contact Us
              </a>
            </div>
            <figure className="tf-hero-media reveal">
              <img
                src={IMG + 'fig-00.jpg'}
                alt="Endurance line at the HTPL test yard"
                loading="eager"
                decoding="async"
              />
              <figcaption className="tf-hero-cap">
                <b>FIG. 00</b> — ENDURANCE LINE, TEST YARD · 10 TENDERS / CYCLE
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ---- Protocol strip ---- */}
        <section className="tf-protocol" id="protocol">
          <div className="ap-shell">
            <p className="eyebrow reveal"><span className="dot" />The protocol — every tender, every time</p>
            <div className="tf-protocol-grid reveal">
              {PROTOCOL.map((p) => (
                <a key={p.n} href={p.href} className="tf-chip">
                  <span className="tf-chip-box" aria-hidden="true" />
                  <span className="tf-chip-num">{p.n}</span>
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Stats band (primary red) ---- */}
        <section className="ap-stats-section">
          <div className="ap-shell">
            <div className="ap-statsband reveal">
              {HERO_STATS.map((s) => (
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

        {/* ---- Test sections ---- */}
        {TESTS.map((t, i) => (
          <section
            className={`tf-test${t.flip ? ' flip' : ''}${t.monitor ? ' tf-test-monitor' : ''}`}
            id={t.id}
            key={t.id}
          >
            <div className="ap-shell">
              <div className="tf-loghead reveal">
                <span className="tf-log-l">Test {String(i + 1).padStart(2, '0')} / 09</span>
                <span className="tf-log-rule" />
                <span className="tf-log-r">{t.log}</span>
              </div>

              {t.monitor ? (
                <>
                  <h2 className="display tf-h2 reveal">{t.title}</h2>
                  <p className="lead tf-monitor-lead reveal">{t.lead}</p>
                  <div className="tf-monitor-grid">
                    <Fig img={t.images[0]} className="tf-fig-wide reveal" />
                    <div className="tf-monitor-row">
                      {t.images.slice(1).map((img) => (
                        <Fig img={img} key={img.src} className="reveal" />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="tf-test-split">
                  <div className="tf-test-copy reveal">
                    <h2 className="display tf-h2">{t.title}</h2>
                    {t.body}
                    <div className="tf-plate">
                      <div className="tf-plate-hd">Specification</div>
                      {t.specs.map(([k, v]) => (
                        <div className="tf-prow" key={k}>
                          <span className="tf-prow-k">{k}</span>
                          <span className="tf-prow-v">{v}</span>
                        </div>
                      ))}
                      {t.diagram && <div className="tf-plate-diag">{t.diagram}</div>}
                    </div>
                  </div>
                  <div className="tf-test-media">
                    <Fig img={t.images[0]} className="tf-fig-big reveal" />
                    <div className={`tf-thumbs n${t.images.length - 1}`}>
                      {t.images.slice(1).map((img) => (
                        <Fig img={img} key={img.src} className="reveal" />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* ---- Facility ---- */}
        <section className="tf-facility" id="facility">
          <div className="ap-shell">
            <header className="tf-sechead reveal">
              <p className="eyebrow"><span className="dot" />In-house, end to end</p>
              <h2 className="display tf-h2">The yard itself, built for it.</h2>
              <p className="tf-sec-desc">
                Every rig the protocol calls for stands on our own site — from the gradeability ramp
                and stability platform to the deep-lift well and shower array.
              </p>
            </header>
            <div className="tf-facility-grid">
              {FACILITIES.map((f) => (
                <figure className="tf-ftile reveal" key={f.fi}>
                  <button
                    type="button"
                    className="tf-fig-btn"
                    onClick={() => setLightbox(f)}
                    aria-label={`Enlarge ${f.label}`}
                  >
                    <img src={IMG + f.src} alt={f.label} loading="lazy" decoding="async" />
                  </button>
                  <figcaption className="tf-fcap">
                    <span className="tf-fi">{f.fi}</span>
                    {f.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Instruments ---- */}
        <section className="tf-instruments" id="instruments">
          <div className="ap-shell">
            <header className="tf-sechead reveal">
              <p className="eyebrow"><span className="dot" />Major testing equipment on site</p>
              <h2 className="display tf-h2">Calibrated instruments, on hand.</h2>
            </header>
            <div className="tf-itable reveal">
              {INSTRUMENTS.map(([ix, nm, qt]) => (
                <div className="tf-irow" key={ix}>
                  <span className="tf-ix">{ix}</span>
                  <span className="tf-inm">{nm}</span>
                  <span className="tf-iqt">{qt}</span>
                </div>
              ))}
            </div>
            <p className="tf-inote reveal">
              <span className="tf-sq" aria-hidden="true" />
              Flow meter calibration certified by NABL-accredited laboratory.
            </p>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Every tender earns its dispatch.</h2>
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

      {/* ---- Lightbox ---- */}
      {lightbox && (
        <div className="tf-lb is-open" onClick={closeLb} role="dialog" aria-modal="true">
          <img src={IMG + lightbox.src} alt={lightbox.cap || lightbox.label} />
          <div className="tf-lb-cap">{lightbox.cap || lightbox.label}</div>
        </div>
      )}

      <Footer />
    </>
  )
}
