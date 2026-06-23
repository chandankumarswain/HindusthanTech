/* WORKFLOW — the structured, quality-driven manufacturing workflow.
   Reuses the section's existing card design (mono kicker + sans title, bordered
   bento grid, hover) so the style, fonts, and colours are unchanged — only the
   content and the section name are updated. */

const STAGES = [
  'Design & Engineering',
  'Material Selection & Verification',
  'Fabrication of Components',
  'Installation & Assembly',
  'Surface Preparation & Painting',
  'Electrical Installation',
  'Testing & Quality Inspection',
  'Final Inspection',
  'Dispatch & Delivery',
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

        {/* ---- Workflow stages ---- */}
        <div className="hiw-bento">
          {STAGES.map((stage, i) => (
            <article className="hiw-cell hiw-card reveal" key={stage}>
              <span className="hiw-step-k">Stage {String(i + 1).padStart(2, '0')}</span>
              <h3>{stage}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
