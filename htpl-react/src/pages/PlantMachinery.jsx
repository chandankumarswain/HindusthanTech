import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* "Plant Machineries & Testing Equipment" page (/plant-machinery).
   A faithful rewrite of the standalone
   htpl-plant-machinery-testing-equipment.html into the site's stack, re-skinned
   to the shared design language (bone canvas · ink · HTPL red · serif display +
   grotesk UI), reusing the site tokens, .ap-shell gutters (80/50/25) and the
   991/767 breakpoints. Content — the works register — is preserved verbatim. */

/* [name, qty, unitOverride?] — quantities as per the works register */
const PLANT = [
  ['Lathe Machine', 4],
  ['Milling Machine', 1],
  ['Grinder Machine', 15],
  ['Buffing Machine', 3],
  ['Powder Coating Assembly', 1],
  ['Hose Binding Machine', 1],
  ['Nitrogen Refilling Machine', 1],
  ['Compressor', 2],
  ['Sand Blasting Machine', 1],
  ['Hydraulic Bending Machine', 2],
  ['Hyd. Pipe Bending Machine', 1],
  ['MIG Welding Machine', 10],
  ['TIG Welding Machine', 20],
  ['ARC Welding Machine', 20],
  ['Gas Cutter', 8],
  ['Plasma Cutting Machine', 5],
  ['Shearing Machine', 2],
  ['Vehicle Servicing Machine', 1],
  ['Vacuum Cleaner', 2],
  ['Power Press Machine', 1],
  ['Electric Crane, 3 Ton Capacity', 2],
  ['CO₂ Refilling Machine', 1],
  ['Battery Charger – IE', 3],
  ['Hose Binding Machine', 2],
  ['Inverter', 2],
  ['200 KW Electric Transfer', 1],
  ['125 kVA DG Set', 1],
  ['CNC Plasma Cutting Machine', 1],
  ['CNC Turning Machine', 1],
]

const TESTING = [
  ['Pump & Pipe Line Hydraulic Testing Machine', 2],
  ['Weighing Machine (Digital & Manual)', 2],
  ['Digital Flow Meter', 1, 'Set'],
  ['Digital Tachometer', 2],
  ['Paint Thickness Gauge', 1],
  ['Impeller Balancing Machine', 1],
  ['Clinometer', 2],
  ['Digital Vernier Meter', 5],
  ['Ultrasonic Distance Meter', 1],
  ['Ultrasonic Volume & Area Measuring Meter', 1],
  ['Ultrasonic Thickness Gauge', 1],
]

const pad = (n) => (n < 10 ? '0' : '') + n
const unitsOf = (data) => data.reduce((s, d) => s + d[1], 0)
const qtyLabel = (q, unit) =>
  unit ? `${pad(q)} ${unit}` : `${pad(q)} ${q > 1 ? 'Nos.' : 'No.'}`

/* one list block — SECTION header, rows (num · name · leader · tick meter · qty) */
function ListBlock({ idx, title, data }) {
  const shown = data.length
  return (
    <section className="pm-block reveal">
      <header className="pm-list-head">
        <span className="pm-list-idx">Section {idx}</span>
        <h2 className="pm-list-title">{title}</h2>
        <span className="pm-list-sub">
          {shown} LINE ITEMS &middot; {unitsOf(data)} UNITS
        </span>
      </header>
      {shown === 0 ? (
        <p className="pm-empty">NO MATCHES IN THIS SECTION.</p>
      ) : (
        <ol className="pm-rows">
          {data.map(([name, q, unit], i) => (
            <li className="pm-row" key={`${name}-${i}`}>
              <span className="pm-row-n">{pad(i + 1)}</span>
              <span className="pm-row-name">{name}</span>
              <span className="pm-leader" aria-hidden="true" />
              <span
                className="pm-ticks"
                aria-hidden="true"
                title={`${q} ${unit || (q > 1 ? 'Nos.' : 'No.')}`}
              >
                {Array.from({ length: q }, (_, t) => (
                  <i className="pm-tick" key={t} />
                ))}
              </span>
              <span className="pm-row-q">{qtyLabel(q, unit)}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

export default function PlantMachinery() {
  useScrollReveal()

  const plant = PLANT
  const testing = TESTING
  const total = PLANT.length + TESTING.length

  /* hero stats — derived from the register itself */
  const all = PLANT.concat(TESTING)
  const totalUnits = unitsOf(all)
  const welding = PLANT.filter((d) => d[0].includes('Welding')).reduce((s, d) => s + d[1], 0)
  const cnc = PLANT.filter((d) => d[0].startsWith('CNC')).reduce((s, d) => s + d[1], 0)

  const STATS = [
    { n: total, suf: '', l: 'Line items' },
    { n: totalUnits, suf: '', l: 'Total units' },
    { n: welding, suf: '', l: 'Welding machines' },
    { n: pad(cnc), suf: '', l: 'CNC machines' },
  ]

  return (
    <>
      <Nav />
      <main className="pm-page">
        {/* ---- Hero ---- */}
        <section className="pm-hero">
          <div className="ap-shell">
            <p className="ap-crumb reveal">
              <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
              <a href="/about">About</a> <span aria-hidden="true">/</span>{' '}
              <span className="ap-crumb-current">Plant &amp; Machinery</span>
            </p>
            <p className="eyebrow reveal"><span className="dot" />Manufacturing capability</p>
            <h1 className="display pm-hero-title reveal">
              Plant Machineries &amp;<br />
              Testing Equipment<span className="italic-accent">.</span>
            </h1>
            <p className="lead pm-hero-desc reveal">
              Every fire tender we deliver is fabricated, finished and proven on our own floor —
              on the machines and calibrated instruments listed below, maintained at our works at
              Jagatpur, Cuttack to the relevant IS and defence specifications.
            </p>
          </div>
        </section>

        {/* ---- Stats band (primary red) ---- */}
        <section className="ap-stats-section">
          <div className="ap-shell">
            <div className="ap-statsband reveal">
              {STATS.map((s) => (
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

        {/* ---- Ledger ---- */}
        <section className="pm-ledger">
          <div className="ap-shell">
            <ListBlock idx="01" title="Major List of Plant & Machinery" data={plant} />
            <ListBlock idx="02" title="Major List of Testing Equipment" data={testing} />

            <p className="pm-note">
              <span className="pm-note-mark" aria-hidden="true">*</span>
              Our digital flow meter carries a valid calibration certificate from an
              NABL-accredited laboratory and measures pump flow rates up to 10,000 litres per minute.
            </p>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Manufacturing capacity you can build on.</h2>
            <div className="ap-cta-actions">
              <a href="/#contact" className="btn btn-primary">
                Get in touch <span className="arrow">→</span>
              </a>
              <a href="/testing-facility" className="btn btn-ghost">
                Our testing facility
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
