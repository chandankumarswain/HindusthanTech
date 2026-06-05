/* ============================================================================
   Manufacturing process — "wave timeline" (reference-inspired layout)

   Same content & flow as before: the 8 production stages + the quality block.
   Only the stepper is redesigned into a zig-zag wave of circular icon nodes
   joined by a dotted S-curve, with labels alternating above / below.
   Brand identity is preserved (red accent on cream — not the reference's blue).
   Desktop draws the wave; below the site's mobile breakpoint it collapses to a
   vertical dotted timeline (handled in index.css), matching every other section.
   ========================================================================== */

/* Compact line icons (stroke = currentColor) — one per stage. Decorative only. */
const I = {
  design: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </>
  ),
  check: (
    <>
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  cut: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88" />
      <path d="M14.47 14.48 20 20" />
      <path d="M8.12 8.12 12 12" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  paint: (
    <>
      <rect x="3" y="3" width="11" height="6" rx="1" />
      <path d="M14 6h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-7a2 2 0 0 0-2 2v1" />
      <rect x="9" y="16" width="4" height="5" rx="1" />
    </>
  ),
  bolt: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  gauge: (
    <>
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </>
  ),
  truck: (
    <>
      <path d="M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1" />
      <path d="M14 9h4l3 3v5a1 1 0 0 1-1 1h-1" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="17.5" cy="18.5" r="1.5" />
    </>
  ),
}

const STEPS = [
  { num: '01', title: 'Design', sub: 'CAD / 3D', icon: I.design },
  { num: '02', title: 'Material Check', sub: 'QC Verify', icon: I.check },
  { num: '03', title: 'Fabrication', sub: 'CNC / Cutting', icon: I.cut },
  { num: '04', title: 'Assembly', sub: 'Welding / Fit', icon: I.wrench },
  { num: '05', title: 'Painting', sub: 'Blast + Coat', icon: I.paint },
  { num: '06', title: 'Electrical', sub: 'Wiring / Panel', icon: I.bolt },
  { num: '07', title: 'Testing', sub: 'QA / Trial', icon: I.gauge },
  { num: '08', title: 'Delivery', sub: 'Dispatch', icon: I.truck },
]

/* Build the dotted S-curve through every node centre (viewBox 0 0 100 100).
   Nodes alternate up (y=35) / down (y=65); control points sit at the segment
   mid-x with horizontal tangents → a smooth, symmetric weave. */
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

export default function Process() {
  return (
    <section className="section-pad" id="process">
      <div className="wrap">
        <div className="sec-head center reveal">
          <p className="eyebrow">
            <span className="dot"></span>How we work
          </p>
          <h2 className="display h-sec">
            Manufacturing <span className="italic-accent">process</span>
          </h2>
          <p className="lead">
            Every vehicle goes through a rigorous 8-stage production workflow ensuring quality,
            safety, and on-time delivery.
          </p>
        </div>

        {/* ---- Wave timeline ---- */}
        <div className="proc-flow reveal" role="list" aria-label="8-stage manufacturing process">
          {/* Dotted connector — decorative; non-scaling stroke keeps the dots
              perfectly round at any width. Hidden on the mobile vertical layout. */}
          <svg
            className="proc-wave"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={wavePath(STEPS.length)} />
          </svg>

          {STEPS.map((s, i) => (
            <div
              className={`proc-node ${i % 2 === 0 ? 'is-up' : 'is-down'}`}
              role="listitem"
              key={s.num}
            >
              <div className="proc-label">
                <span className="proc-num">{s.num}</span>
                <h4>{s.title}</h4>
                <span className="proc-sub">{s.sub}</span>
              </div>

              <div className="proc-circle">
                <span className="proc-ring" aria-hidden="true" />
                <span className="proc-dot" aria-hidden="true" />
                <svg
                  className="proc-ico"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="process-quality reveal">
          <div>
            <h3>Uncompromising quality standards</h3>
            <p>
              Our quality management system ensures every vehicle that leaves our facility is
              built to the highest standards of safety, reliability and compliance.
            </p>
          </div>
          <div className="cert-row">
            <span className="cert-chip">
              <span className="tick">✓</span> ISO 9001:2015
            </span>
            <span className="cert-chip">
              <span className="tick">✓</span> DGQA Approved
            </span>
            <span className="cert-chip">
              <span className="tick">✓</span> Z Certified
            </span>
            <span className="cert-chip">
              <span className="tick">✓</span> CMVR Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
