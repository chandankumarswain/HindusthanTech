import { useEffect, useRef, useState } from 'react'

/* ============================================================================
   PRODUCTS & SERVICES — hover-activated tabbed "datasheet console".
   Styling inherits the site's design system (bone/ink/accent, serif display +
   Space Grotesk UI + JetBrains mono, hairline borders, --radius, --shadow).
   Reuses the landing header classes (section-pad · wrap · sec-head · eyebrow ·
   h-sec · lead). Vanilla useState — no external deps.
   ========================================================================== */

const TABS = [
  { idx: '00', name: 'Core Product Portfolio', sub: 'OVERVIEW' },
  { idx: '01', name: 'Fire-fighting Equipment & Vehicles', sub: '3 PRODUCT LINES' },
  { idx: '02', name: 'Special Purpose Vehicles (SPVs)', sub: '5 PRODUCT LINES' },
  { idx: '03', name: 'Services', sub: 'SPARES · AMC · RENTAL' },
]

const OVERVIEW_CARDS = [
  {
    ci: '01 — FIRE',
    h: 'Fire-fighting Equipment & Vehicles',
    p: 'Frontline tenders and rapid-response units for municipal and industrial hazards.',
    li: ['Firefighting trucks', 'Quick response vehicles', 'Trailer & portable pumps'],
  },
  {
    ci: '02 — SPV',
    h: 'Special Purpose Vehicles',
    p: 'Purpose-engineered bodies for hazardous cargo, fuel logistics, and field clinics.',
    li: ['Explosive vans', 'Bowsers & tankers', 'MOSRU · blood vans · workshops'],
  },
  {
    ci: '03 — CARE',
    h: 'Services',
    p: 'Lifecycle support that keeps every vehicle operational long after delivery.',
    li: ['Genuine spares', '2–5 year AMC', 'Fleet rentals'],
  },
]

const PANES = [
  {
    tag: '38+ Years',
    head: 'Core Product Portfolio',
    intro:
      'Three engineering disciplines under one roof — from frontline fire response to specialised cargo and logistics builds.',
    overview: true,
  },
  {
    tag: 'FF Series',
    head: 'Fire-fighting Equipment & Vehicles',
    intro:
      'Custom multi-capacity fire vehicles and pumping units engineered for extreme municipal and industrial conditions.',
    specs: [
      ['FF-01', 'Firefighting Trucks / Vehicles', 'Custom-built multi-capacity water, foam, and dry chemical powder tenders for extreme municipal and industrial hazards.'],
      ['FF-02', 'Quick Response Vehicles (QRVs)', 'Compact, fast-response units fitted with advanced first-aid firefighting and rescue setups.'],
      ['FF-03', 'Trailer & Portable Fire Pumps', 'High-efficiency decentralised field-pumping units engineered for dependable suction operations.'],
    ],
  },
  {
    tag: 'SP Series',
    head: 'Special Purpose Vehicles (SPVs)',
    intro:
      'Purpose-engineered vehicle bodies for hazardous cargo, fuel logistics, oil recovery, and mobile clinical use.',
    specs: [
      ['SP-01', 'Explosive Vans', 'Insulated, completely spark-proof cargo bodies built to various capacities matching strict safety mandates.'],
      ['SP-02', 'Diesel Bowsers & Oil Tankers', 'Fuel logistics and distribution units with calibrated metering, flow monitoring, and grounding mechanics.'],
      ['SP-03', 'Mobile Oil Spillage Recovery Units (MOSRU) / Gulley Suckers', 'Industrial heavy-suction rigs for specialised oil cleanup and recovery.'],
      ['SP-04', 'Mobile Blood Donation Vans (MBDV)', 'Ergonomically specialised, clinically sterile testing and blood-collection mobile clinics.'],
      ['SP-05', 'Mobile Service Vans', 'Fully outfitted mobile workshops and customised industrial application vehicles.'],
    ],
  },
  {
    tag: 'Lifecycle',
    head: 'Services',
    intro:
      'Customer-focused solutions through custom-built vehicles, engineering support, and design flexibility — reinforcing long-term operational capability.',
    specs: [
      ['SV-01', 'Spare Parts & Assistance', 'Continuous availability of genuine replacement components and responsive technical support for on-call maintenance.'],
      ['SV-02', 'Extended Service Lifecycles', 'Comprehensive Annual Maintenance Contracts (AMC) ranging from 2 to 5 years, on an onsite basis, after the standard warranty period.'],
      ['SV-03', 'Specialised Fleet Rentals', 'Fire-tender rental services configured to customer site requirements.'],
    ],
  },
]

export default function ProductsServices() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])

  /* Deep-link from the nav mega-menu (#ps-0 … #ps-3): select the tab + scroll. */
  useEffect(() => {
    const apply = () => {
      const m = /^#ps-([0-3])$/.exec(window.location.hash)
      if (!m) return
      setActive(Number(m[1]))
      const el = document.getElementById('products-services')
      if (el) {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      }
    }
    apply()
    window.addEventListener('hashchange', apply)
    return () => window.removeEventListener('hashchange', apply)
  }, [])

  const onKey = (e) => {
    let n = active
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (active + 1) % TABS.length
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (active - 1 + TABS.length) % TABS.length
    else if (e.key === 'Home') n = 0
    else if (e.key === 'End') n = TABS.length - 1
    else return
    e.preventDefault()
    setActive(n)
    tabRefs.current[n]?.focus()
  }

  return (
    <section className="section-pad" id="products-services">
      <div className="wrap">
        <div className="sec-head reveal ps-head">
          <p className="eyebrow">
            <span className="dot"></span>Capabilities · Built to order
          </p>
          <h2 className="display h-sec">
            Products &amp; <span className="italic-accent">Services</span>
          </h2>
          <p className="lead">
            Custom-built firefighting and special-purpose vehicles, engineered for municipal,
            industrial, and defence-grade hazards — backed by spares, maintenance, and fleet
            support across the vehicle's working life.
          </p>
        </div>

        <div className="ps-console reveal">
          {/* LEFT RAIL */}
          <div className="ps-rail" role="tablist" aria-label="Product and service categories" aria-orientation="vertical">
            <div className="ps-rail-head">Categories</div>
            {TABS.map((t, i) => (
              <button
                key={t.idx}
                ref={(el) => (tabRefs.current[i] = el)}
                className="ps-tab"
                role="tab"
                id={`ps-tab-${i}`}
                aria-controls={`ps-pane-${i}`}
                aria-selected={active === i}
                tabIndex={active === i ? 0 : -1}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                onKeyDown={onKey}
              >
                <span className="ps-tab-num">{t.idx}</span>
                <span className="ps-tab-tx">
                  <span className="ps-tab-nm">{t.name}</span>
                  <span className="ps-tab-ct">{t.sub}</span>
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="ps-panel">
            {PANES.map((pane, i) => (
              <div
                key={i}
                className={`ps-pane${active === i ? ' on' : ''}`}
                id={`ps-pane-${i}`}
                role="tabpanel"
                aria-labelledby={`ps-tab-${i}`}
                hidden={active !== i}
              >
                <div className="ps-panel-head">
                  <div>
                    <h3>{pane.head}</h3>
                    <p>{pane.intro}</p>
                  </div>
                  <span className="ps-tag">{pane.tag}</span>
                </div>

                {pane.overview ? (
                  <>
                    <div className="ps-cards">
                      {OVERVIEW_CARDS.map((c) => (
                        <div className="ps-card" key={c.ci}>
                          <span className="ps-card-ci">{c.ci}</span>
                          <h4>{c.h}</h4>
                          <p>{c.p}</p>
                          <ul>
                            {c.li.map((l) => (
                              <li key={l}>{l}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <p className="ps-note">
                      <strong>Built to order.</strong> Every vehicle is configured to client
                      specification — capacity, pump rating, body material, and onboard systems —
                      then supported through warranty and beyond.
                    </p>
                  </>
                ) : (
                  pane.specs.map(([code, name, desc]) => (
                    <div className="ps-spec" key={code}>
                      <span className="ps-code">{code}</span>
                      <div className="ps-spec-body">
                        <h4>{name}</h4>
                        <p>{desc}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
