/* TESTING + QUALITY MANAGEMENT FRAMEWORK — two manufacturing sub-sections that
   sit under the Workflow section. Layout inspired by the supplied reference
   (centred header + clean card grid). Built entirely from the landing page's
   own classes (section-pad · wrap · sec-head center · eyebrow · h-sec · lead)
   so the fonts, colours, spacing, and breakpoints match the rest of the site.
   Test card sub-titles are generated; the QMF copy is verbatim. */

const TESTS = [
  { name: 'DP Test & Hydrotest of Tanks', desc: 'Dye-penetrant and hydrostatic pressure testing of tanks for leak-proof integrity.' },
  { name: 'Endurance Test', desc: 'Sustained-load running to validate long-term durability and reliability.' },
  { name: 'Stability Test', desc: 'Tilt and balance verification to ensure safe handling under load.' },
  { name: 'Gradeability Test', desc: 'Confirms climbing capability and performance on steep gradients.' },
  { name: 'Shower Test', desc: 'Water-spray sealing test verifying weather-tightness of the cab and body.' },
  { name: 'Flow Test', desc: 'Pump and pipework flow-rate verification against rated capacity.' },
  { name: 'Monitor Throw Test', desc: 'Measures water / foam monitor throw distance and discharge performance.' },
]

const QMF = [
  { tag: 'ISO 9001:2015', title: 'QMS Alignment', desc: 'Complete implementation of Quality Management Systems (QMS) across design and production phases.' },
  { tag: 'Traceability', title: 'Accountability & QAP', desc: 'Project-specific Quality Assurance Plans (QAP) with stage-wise inspection and documentation.' },
  { tag: 'Defence', title: 'DGQA Verification', desc: 'Formally evaluated and approved by the DGQA for defence supplies, reinforced with Z Certification.' },
  { tag: 'Shopfloor', title: 'FIFO & 5S Efficiency', desc: 'Strict FIFO (First-In, First-Out) models and 5S methodologies to support structural manufacturing precision.' },
  { tag: 'Improvement', title: 'CAPA Tracking', desc: 'Active operational tracking via Corrective and Preventive Actions (CAPA) tracking matrices.' },
]

export default function TestingQuality() {
  return (
    <>
      {/* ---- Testing ---- */}
      <section className="section-pad" id="testing">
        <div className="wrap">
          <div className="sec-head center reveal">
            <p className="eyebrow">
              <span className="dot"></span>Testing
            </p>
            <h2 className="display h-sec">
              Tested, calibrated, <span className="italic-accent">certified.</span>
            </h2>
            <p className="lead">
              In order to maintain our quality policies and ensure customer satisfaction, all our
              products are subjected to rigorous testing and calibration prior to dispatch —
              verified at our in-house, state-of-the-art facility built to relevant IS and
              DGQA / defence specifications.
            </p>
          </div>
          <div className="tq-grid">
            {TESTS.map((t, i) => (
              <article className="tq-card reveal" key={t.name}>
                <span className="tq-card-tag">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="tq-card-title">{t.name}</h3>
                <p className="tq-card-desc">{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Quality Management Framework ---- */}
      <section className="section-pad" id="quality-framework" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <p className="eyebrow">
              <span className="dot"></span>Quality Management
            </p>
            <h2 className="display h-sec">
              A framework built on <span className="italic-accent">accountability.</span>
            </h2>
            <p className="lead">
              Quality is engineered into every stage — from QMS-aligned design and stage-wise
              documentation to defence-grade verification and continuous improvement.
            </p>
          </div>
          <div className="tq-grid">
            {QMF.map((q) => (
              <article className="tq-card reveal" key={q.title}>
                <span className="tq-card-tag">{q.tag}</span>
                <h3 className="tq-card-title">{q.title}</h3>
                <p className="tq-card-desc">{q.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
