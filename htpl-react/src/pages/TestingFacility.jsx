import { useCallback, useEffect, useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* "Testing Facility" page — the editorial "test-log" content re-skinned to the
   site design language (bone canvas · ink · HTPL red · serif display + grotesk),
   the shared tokens, .ap-shell gutters (80/50/25) and 991/767 breakpoints.
   Each test section is a full-screen split: copy (45%) + a staggered 3-image
   collage (55%) that fills the height. The collage mirrors right↔left as the
   sections alternate down the page. */

const IMG = '/images/testing/'

const HERO_STATS = [
  { n: '10', suf: '', l: 'Test protocols — every tender, before dispatch' },
  { n: 'IS + defence', suf: '', l: 'Specifications — all facilities in-house' },
  { n: 'ASNT II', suf: '', l: 'Certified NDT personnel' },
  { n: '10,000', suf: ' LPM', l: 'NABL-calibrated flow metering' },
]

/* Each test: log header (index + descriptor), heading, body copy, a spec plate
   and a 3-image collage. `flip` alternates the split direction down the page.
   Images are ordered [left · centre (big) · right] to feed the staggered grid. */
const TESTS = [
  {
    id: 't1',
    compact: true,
    log: 'Dye penetration + hydrostatic — in-process QC',
    title: 'Dye penetration & hydro test',
    body: (
      <>
        <p>
          Welds are proven twice. A <b>dye penetration test</b> is run on the weld surfaces of
          every tank and pipeline during fabrication, by <b>ASNT Level II certified personnel</b>.
        </p>
        <p>
          On completion, a <b>hydrostatic test</b> under our internal SOP confirms zero leakage or
          seepage — proving weld quality for the service life of the tender.
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
      { src: 'tf-t1-a.jpg', cap: 'FIG. 01-A — TANK INTERIOR, HYDRO TEST' },
      { src: 'tf-t1-b.jpg', cap: 'FIG. 01-B — DYE PENETRANT ON TANK SHELL' },
      { src: 'tf-t1-c.jpg', cap: 'FIG. 01-C — PIPELINE FABRICATION' },
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
      { src: 'tf-t2-a.jpg', cap: 'FIG. 02-A — TENDERS AT THE YARD' },
      { src: 'tf-t2-b.jpg', cap: 'FIG. 02-B — ENDURANCE LINE AT THE SUMP' },
      { src: 'tf-t2-c.jpg', cap: 'FIG. 02-C — TEST YARD, ENDURANCE RUN' },
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
    images: [
      { src: 'tf-t3-a.jpg', cap: 'FIG. 03-A — ON THE HYDRAULIC RAMP' },
      { src: 'tf-t3-b.jpg', cap: 'FIG. 03-B — REAR QUARTER AT FULL TILT' },
      { src: 'tf-t3-c.jpg', cap: 'FIG. 03-C — INSPECTION AT THE PLATFORM' },
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
    images: [
      { src: 'tf-t4-a.jpg', cap: 'FIG. 04-A — GRADEABILITY RAMP, 1 IN 4' },
      { src: 'tf-t4-b.jpg', cap: 'FIG. 04-B — FULLY LOADED ON THE GRADE' },
      { src: 'tf-t4-c.jpg', cap: 'FIG. 04-C — THE 1-IN-4 RAMP' },
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
      { src: 'tf-t5-a.jpg', cap: 'FIG. 05-A — SHOWER ARRAY, NIGHT RUN' },
      { src: 'tf-t5-b.jpg', cap: 'FIG. 05-B — UNDER THE SHOWER ARRAY' },
      { src: 'tf-t5-c.jpg', cap: 'FIG. 05-C — FULL-SOAK CYCLE' },
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
    images: [
      { src: 'tf-t6-a.jpg', cap: 'FIG. 06-A — PUMP LINE SETUP' },
      { src: 'tf-t6-b.jpg', cap: 'FIG. 06-B — DIGITAL FLOW METER LINE' },
      { src: 'tf-t6-c.jpg', cap: 'FIG. 06-C — DEEP-LIFT WELL' },
    ],
  },
  {
    id: 't7',
    log: 'Monitor throw — range, arc & coverage',
    title: 'Monitor throw test',
    body: (
      <p>
        Water and foam monitors are throw-tested in the yard — <b>range, arc and coverage</b>{' '}
        verified on every tender before it ships, as part of the standard test protocol.
      </p>
    ),
    specs: [
      ['Checks', 'Range · arc · coverage'],
      ['Monitors', 'Water + foam'],
      ['Stage', 'Yard trial'],
      ['Applies to', 'Every tender'],
    ],
    images: [
      { src: 'tf-t7-a.jpg', cap: 'FIG. 07-A — MONITOR LINE, FULL ARC' },
      { src: 'tf-t7-b.jpg', cap: 'FIG. 07-B — THROW OVER THE YARD' },
      { src: 'tf-t7-c.jpg', cap: 'FIG. 07-C — FOAM MONITOR RUN' },
    ],
  },
  {
    id: 't8',
    flip: true,
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
      { src: 'tf-t8-a.jpg', cap: 'FIG. 08-A — ON TRIAL IN THE FIELD' },
      { src: 'tf-t8-b.jpg', cap: 'FIG. 08-B — CRASH TENDER, CROSS-COUNTRY' },
      { src: 'tf-t8-c.jpg', cap: 'FIG. 08-C — MULTI-AXLE ON HIGHWAY' },
    ],
  },
  {
    id: 't9',
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
      { src: 'tf-t9-a.jpg', cap: 'FIG. 09-A — INSPECTION AT THE PANEL' },
      { src: 'tf-t9-b.jpg', cap: 'FIG. 09-B — GAUGE CHECK ON THE TANKER' },
      { src: 'tf-t9-c.jpg', cap: 'FIG. 09-C — CALIBRATED THICKNESS GAUGE' },
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
            <p className="ap-crumb reveal">
              <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
              <a href="/about">About</a> <span aria-hidden="true">/</span>{' '}
              <span className="ap-crumb-current">Testing Facility</span>
            </p>
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
              <a href="#t1" className="btn btn-primary">
                View the tests <span className="arrow">→</span>
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
          <section className={`tf-test${t.flip ? ' flip' : ''}`} id={t.id} key={t.id}>
            <div className="ap-shell">
              <div className="tf-loghead reveal">
                <span className="tf-log-l">Test {String(i + 1).padStart(2, '0')} / 09</span>
                <span className="tf-log-rule" />
                <span className="tf-log-r">{t.log}</span>
              </div>

              <div className="tf-test-split">
                <div className={`tf-test-copy reveal${t.compact ? ' is-compact' : ''}`}>
                  <h2 className="display tf-h2">{t.title}</h2>
                  {t.body}
                  {t.specs && (
                    <div className="tf-plate">
                      <div className="tf-plate-hd">Specification</div>
                      {t.specs.map(([k, v]) => (
                        <div className="tf-prow" key={k}>
                          <span className="tf-prow-k">{k}</span>
                          <span className="tf-prow-v">{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="tf-test-media">
                  {/* staggered 3-image collage — mirrors right↔left by section side */}
                  <div className={`tf-collage ${t.flip ? 'tf-collage-left' : 'tf-collage-right'}`}>
                    {t.images.slice(0, 3).map((img, k) => (
                      <Fig img={img} key={img.src} className={`tf-col-${'abc'[k]} reveal`} />
                    ))}
                  </div>
                </div>
              </div>
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
