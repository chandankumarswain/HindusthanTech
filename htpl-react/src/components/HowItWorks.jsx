/* WORKFLOW — the structured, quality-driven manufacturing workflow.
   Redesigned into an editorial bento (reference-inspired): the 9 workflow
   stages render as text cards (kicker + title + sub-title + accent arrow)
   interspersed with image cells. Titles, order, and section copy are
   unchanged; only the sub-titles are generated to enrich each card. */

const STAGES = [
  { title: 'Design & Engineering', sub: 'CAD-led design and engineering before the first cut.' },
  { title: 'Material Selection & Verification', sub: 'Certified materials sourced and verified to specification.' },
  { title: 'Fabrication of Components', sub: 'Precision cutting, forming, and fabrication of components.' },
  { title: 'Installation & Assembly', sub: 'Sub-systems fitted and assembled on calibrated jigs.' },
  { title: 'Surface Preparation & Painting', sub: 'Surface prep, anti-corrosion treatment, and baked paint.' },
  { title: 'Electrical Installation', sub: 'Wiring, panels, and electrical systems fully integrated.' },
  { title: 'Testing & Quality Inspection', sub: 'Functional testing with stage-wise quality inspection.' },
  { title: 'Final Inspection', sub: 'Complete final inspection and documented sign-off.' },
  { title: 'Dispatch & Delivery', sub: 'Dispatch, delivery, and on-site handover.' },
]

const IMAGES = [
  { src: '/images/fleet/fabrication-workshop.jpg', alt: 'HTPL fabrication at the Jagatpur workshop' },
  { src: '/images/fleet/htpl-build-rear.jpg', alt: 'HTPL vehicle build nearing completion' },
  { src: '/images/fleet/dcp-tender.jpg', alt: 'Completed HTPL fire tender ready for dispatch' },
]

/* 12 cells = 9 stage cards + 3 image cells, interleaved for an editorial rhythm */
const CELLS = [
  { img: 0 },
  { stage: 0 },
  { stage: 1 },
  { stage: 2 },
  { stage: 3 },
  { img: 1 },
  { stage: 4 },
  { stage: 5 },
  { stage: 6 },
  { img: 2 },
  { stage: 7 },
  { stage: 8 },
]

export default function HowItWorks() {
  return (
    <section className="hiw" id="workflow" aria-labelledby="hiw-title">
      <div className="hiw-inner">
        {/* ---- Section header ---- */}
        <header className="hiw-head reveal">
          <div className="hiw-head-l">
            <p className="eyebrow">
              <span className="dot"></span>Workflow
            </p>
            <h2 id="hiw-title" className="display h-sec">
              A structured, <span className="italic-accent">quality-driven workflow</span>
            </h2>
          </div>
          <p className="hiw-head-desc">
            HTPL follows a structured and quality-driven manufacturing process to ensure
            reliable and high-performance products, with verification at each handover.
          </p>
        </header>

        {/* ---- Workflow bento: stage cards + image cells ---- */}
        <div className="hiw-bento">
          {CELLS.map((cell, i) =>
            cell.img !== undefined ? (
              <figure className="hiw-cell hiw-img reveal" key={`img-${i}`}>
                <img
                  src={IMAGES[cell.img].src}
                  alt={IMAGES[cell.img].alt}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ) : (
              <article className="hiw-cell hiw-card reveal" key={`stage-${cell.stage}`}>
                <span className="hiw-step-k">Stage {String(cell.stage + 1).padStart(2, '0')}</span>
                <h3>{STAGES[cell.stage].title}</h3>
                <p>{STAGES[cell.stage].sub}</p>
                <span className="hiw-card-arrow" aria-hidden="true">↗</span>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  )
}
