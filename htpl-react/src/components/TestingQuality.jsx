/* TESTING + QUALITY MANAGEMENT FRAMEWORK — manufacturing sub-sections under
   Workflow.
   - Testing: process-outline layout (left intro + image · right numbered list).
   - Quality Management Framework: header + CTA, then the five framework items as
     centred icon cards. Reference-inspired layout in the site's tokens (single
     red accent, serif/grotesk/mono); content verbatim. */

const TESTS = [
  { name: 'DP Test & Hydrotest of Tanks', desc: 'Dye-penetrant and hydrostatic pressure testing of tanks for leak-proof integrity.' },
  { name: 'Endurance Test', desc: 'Sustained-load running to validate long-term durability and reliability.' },
  { name: 'Stability Test', desc: 'Tilt and balance verification to ensure safe handling under load.' },
  { name: 'Gradeability Test', desc: 'Confirms climbing capability and performance on steep gradients.' },
  { name: 'Shower Test', desc: 'Water-spray sealing test verifying weather-tightness of the cab and body.' },
  { name: 'Flow Test', desc: 'Pump and pipework flow-rate verification against rated capacity.' },
  { name: 'Monitor Throw Test', desc: 'Measures water / foam monitor throw distance and discharge performance.' },
]

const ICON = {
  qms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  cycle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v5h-5" />
    </svg>
  ),
}

/* em = the keyword set in the serif/accent treatment; rest = the remainder */
const QMF = [
  { tag: 'ISO 9001:2015', em: 'QMS', rest: ' Alignment', icon: ICON.qms, desc: 'Complete implementation of Quality Management Systems (QMS) across design and production phases.' },
  { tag: 'Traceability', em: 'Accountability', rest: ' & QAP', icon: ICON.doc, desc: 'Project-specific Quality Assurance Plans (QAP) with stage-wise inspection and documentation.' },
  { tag: 'Defence', em: 'DGQA', rest: ' Verification', icon: ICON.shield, desc: 'Formally evaluated and approved by the DGQA for defence supplies, reinforced with Z Certification.' },
  { tag: 'Shopfloor', em: 'FIFO', rest: ' & 5S Efficiency', icon: ICON.grid, desc: 'Strict FIFO (First-In, First-Out) models and 5S methodologies to support structural manufacturing precision.' },
  { tag: 'Improvement', em: 'CAPA', rest: ' Tracking', icon: ICON.cycle, desc: 'Active operational tracking via Corrective and Preventive Actions (CAPA) tracking matrices.' },
]

export default function TestingQuality() {
  return (
    <>
      {/* ---- Testing (process-outline layout) ---- */}
      <section className="section-pad" id="testing">
        <div className="wrap">
          <div className="tst-layout">
            {/* left: heading + description + image */}
            <div className="tst-left reveal">
              <p className="eyebrow">
                <span className="dot"></span>Testing
              </p>
              <h2 className="display tst-title">
                Tested, calibrated, <span className="italic-accent">certified.</span>
              </h2>
              <p className="tst-desc">
                In order to maintain our quality policies and ensure customer satisfaction, all
                our products are subjected to rigorous testing and calibration prior to dispatch —
                verified at our in-house, state-of-the-art facility built to relevant IS and
                DGQA / defence specifications.
              </p>
              <figure className="tst-media">
                <img
                  src="/images/fleet/dcp-tender.jpg"
                  alt="HTPL fire tender undergoing pre-dispatch testing"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>

            {/* right: numbered test list */}
            <ol className="tst-list">
              {TESTS.map((t, i) => (
                <li className="tst-row reveal" key={t.name}>
                  <div className="tst-row-head">
                    <span className="tst-num">{i + 1}.</span>
                    <span className="tst-name">{t.name}</span>
                  </div>
                  <p className="tst-row-desc">{t.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---- Quality Management Framework (header + icon cards) ---- */}
      <section className="section-pad" id="quality-framework" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap">
          <div className="qmf-head reveal">
            <div className="qmf-head-l">
              <p className="eyebrow">
                <span className="dot"></span>Quality Management
              </p>
              <h2 className="display h-sec">
                A framework built <span className="italic-accent">on accountability.</span>
              </h2>
            </div>
            <a href="#contact" className="btn btn-ghost qmf-head-cta">
              Talk to our quality team <span className="arrow">→</span>
            </a>
          </div>
          <p className="qmf-lead reveal">
            Quality is engineered into every stage — from QMS-aligned design and stage-wise
            documentation to defence-grade verification and continuous improvement.
          </p>

          <div className="qmf-cards">
            {QMF.map((q) => (
              <article className="qmf-card reveal" key={q.em}>
                <span className="qmf-card-ic" aria-hidden="true">{q.icon}</span>
                <div className="qmf-card-body">
                  <span className="qmf-card-tag">{q.tag}</span>
                  <h3 className="qmf-card-title">
                    <em>{q.em}</em>
                    {q.rest}
                  </h3>
                  <p className="qmf-card-desc">{q.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
