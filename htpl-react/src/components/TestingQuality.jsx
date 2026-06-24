import { useEffect, useRef } from 'react'

/* TESTING + QUALITY MANAGEMENT FRAMEWORK — manufacturing sub-sections under
   Workflow.
   - Testing: centred header + card grid.
   - Quality Management Framework: pinned-scroll band — the dark "Our framework"
     feature card stays pinned while the framework cards scroll through a fixed
     window (with fade edges + progress rail) until the last card. Ported from
     the reference into the site's tokens (red accent, serif/grotesk/mono);
     content verbatim. Falls back to a simple stacked list on ≤991px / reduced
     motion. */

const TESTS = [
  { name: 'DP Test & Hydrotest of Tanks', desc: 'Dye-penetrant and hydrostatic pressure testing of tanks for leak-proof integrity.' },
  { name: 'Endurance Test', desc: 'Sustained-load running to validate long-term durability and reliability.' },
  { name: 'Stability Test', desc: 'Tilt and balance verification to ensure safe handling under load.' },
  { name: 'Gradeability Test', desc: 'Confirms climbing capability and performance on steep gradients.' },
  { name: 'Shower Test', desc: 'Water-spray sealing test verifying weather-tightness of the cab and body.' },
  { name: 'Flow Test', desc: 'Pump and pipework flow-rate verification against rated capacity.' },
  { name: 'Monitor Throw Test', desc: 'Measures water / foam monitor throw distance and discharge performance.' },
]

/* em = the keyword set in the serif/accent treatment; rest = the remainder */
const QMF = [
  { tag: 'ISO 9001:2015', em: 'QMS', rest: ' Alignment', desc: 'Complete implementation of Quality Management Systems (QMS) across design and production phases.' },
  { tag: 'Traceability', em: 'Accountability', rest: ' & QAP', desc: 'Project-specific Quality Assurance Plans (QAP) with stage-wise inspection and documentation.' },
  { tag: 'Defence', em: 'DGQA', rest: ' Verification', desc: 'Formally evaluated and approved by the DGQA for defence supplies, reinforced with Z Certification.' },
  { tag: 'Shopfloor', em: 'FIFO', rest: ' & 5S Efficiency', desc: 'Strict FIFO (First-In, First-Out) models and 5S methodologies to support structural manufacturing precision.' },
  { tag: 'Improvement', em: 'CAPA', rest: ' Tracking', desc: 'Active operational tracking via Corrective and Preventive Actions (CAPA) tracking matrices.' },
]

/* Machined quality seal — metallic dial with an accent-red tick (site accent). */
const QualitySeal = () => (
  <svg className="qmf-seal" viewBox="0 0 260 260" role="img" aria-label="HTPL quality seal">
    <defs>
      <radialGradient id="qmfWell" cx="50%" cy="42%" r="62%">
        <stop offset="0%" stopColor="#0c0c0c" />
        <stop offset="70%" stopColor="#161618" />
        <stop offset="100%" stopColor="#000" />
      </radialGradient>
      <linearGradient id="qmfMetal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#5a5a5e" />
        <stop offset="32%" stopColor="#9a9aa0" />
        <stop offset="55%" stopColor="#39393c" />
        <stop offset="78%" stopColor="#7e7e84" />
        <stop offset="100%" stopColor="#2b2b2d" />
      </linearGradient>
      <linearGradient id="qmfRim" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#cfcfd4" />
        <stop offset="50%" stopColor="#48484c" />
        <stop offset="100%" stopColor="#a9a9af" />
      </linearGradient>
      <linearGradient id="qmfGlow" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(255,255,255,0)" />
        <stop offset="48%" stopColor="rgba(255,255,255,.55)" />
        <stop offset="60%" stopColor="rgba(214,57,36,.65)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>
    <circle cx="130" cy="130" r="120" fill="url(#qmfMetal)" />
    <circle cx="130" cy="130" r="120" fill="none" stroke="url(#qmfRim)" strokeWidth="2" />
    <circle cx="130" cy="130" r="108" fill="none" stroke="#2a2a2c" strokeWidth="10" strokeDasharray="1.6 9.2" />
    <circle cx="130" cy="130" r="100" fill="#1a1a1c" />
    <circle cx="130" cy="130" r="100" fill="none" stroke="#0a0a0a" strokeWidth="1.4" />
    <circle cx="130" cy="130" r="84" fill="url(#qmfWell)" />
    <circle cx="130" cy="130" r="84" fill="none" stroke="#3a3a3d" strokeWidth="1" />
    <g className="qmf-sheen">
      <path d="M130 18 A112 112 0 0 1 242 130" fill="none" stroke="url(#qmfGlow)" strokeWidth="6" strokeLinecap="round" opacity=".9" />
    </g>
    <path d="M104 132 l18 19 l36 -44" fill="none" stroke="#d63924" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="130" cy="130" r="62" fill="none" stroke="rgba(214,57,36,.28)" strokeWidth="1.5" />
  </svg>
)

export default function TestingQuality() {
  const pinRef = useRef(null)
  const winRef = useRef(null)
  const trackRef = useRef(null)
  const railRef = useRef(null)
  const thumbRef = useRef(null)

  /* Pinned-scroll driver: pin the band, translate the card track on scroll. */
  useEffect(() => {
    const pin = pinRef.current
    const win = winRef.current
    const track = trackRef.current
    const rail = railRef.current
    const thumb = thumbRef.current
    if (!pin || !win || !track) return
    const cards = Array.from(track.children)
    const mqMobile = window.matchMedia('(max-width: 991px)')
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    let maxT = 0

    const pinMode = () => !(mqMobile.matches || mqReduce.matches)

    const update = () => {
      if (!pinMode()) return
      const dur = pin.offsetHeight - window.innerHeight
      let p = dur > 0 ? (window.scrollY - pin.offsetTop) / dur : 0
      p = Math.min(1, Math.max(0, p))
      track.style.transform = `translateY(${-maxT * p}px)`
      if (thumb && rail) {
        const tH = thumb.offsetHeight
        thumb.style.transform = `translateY(${(rail.clientHeight - tH) * p}px)`
      }
      const winRect = win.getBoundingClientRect()
      const center = winRect.top + winRect.height / 2
      let best = 0
      let bestD = Infinity
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect()
        const d = Math.abs(r.top + r.height / 2 - center)
        if (d < bestD) {
          bestD = d
          best = i
        }
      })
      cards.forEach((c, j) => c.classList.toggle('qmf-active', j === best))
    }

    const layout = () => {
      if (!pinMode()) {
        pin.style.height = ''
        track.style.transform = ''
        if (thumb) thumb.style.height = ''
        cards.forEach((c) => c.classList.remove('qmf-active'))
        return
      }
      const winH = win.clientHeight
      const trackH = track.scrollHeight
      maxT = Math.max(0, trackH - winH)
      pin.style.height = window.innerHeight + maxT * 1.7 + 'px'
      if (thumb && rail) {
        thumb.style.height = Math.max(30, rail.clientHeight * (winH / trackH)) + 'px'
      }
      update()
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', layout)
    const onMq = () => layout()
    mqMobile.addEventListener?.('change', onMq)
    mqReduce.addEventListener?.('change', onMq)
    // settle after fonts/layout
    layout()
    const t = window.setTimeout(layout, 300)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', layout)
      mqMobile.removeEventListener?.('change', onMq)
      mqReduce.removeEventListener?.('change', onMq)
      window.clearTimeout(t)
    }
  }, [])

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

      {/* ---- Quality Management Framework (pinned-scroll band) ---- */}
      <section className="qmf-pin" id="quality-framework" ref={pinRef}>
        <div className="qmf-stage">
          <div className="wrap">
            <div className="sec-head center reveal">
              <p className="eyebrow">
                <span className="dot"></span>Quality Management
              </p>
              <h2 className="display h-sec">
                A framework built <span className="italic-accent">on accountability.</span>
              </h2>
            </div>

            <div className="qmf-band">
              {/* dark feature card (pinned with the stage) */}
              <aside className="qmf-feature reveal">
                <div className="qmf-flabel">Our framework</div>
                <div className="qmf-seal-wrap">
                  <QualitySeal />
                </div>
                <p className="qmf-lead">
                  Quality is engineered into every stage — from QMS-aligned design and stage-wise
                  documentation to defence-grade verification and continuous improvement.
                </p>
                <a href="#contact" className="btn btn-primary qmf-cta">
                  Talk to our quality team <span className="arrow">→</span>
                </a>
              </aside>

              {/* windowed, scroll-driven card track */}
              <div className="qmf-viewport reveal">
                <div className="qmf-window" ref={winRef}>
                  <span className="qmf-fade top" aria-hidden="true"></span>
                  <div className="qmf-track" ref={trackRef}>
                    {QMF.map((q) => (
                      <article className="qmf-card" key={q.em}>
                        <span className="qmf-clabel">{q.tag}</span>
                        <h3 className="qmf-ctitle">
                          <em>{q.em}</em>
                          {q.rest}
                        </h3>
                        <p className="qmf-cdesc">{q.desc}</p>
                      </article>
                    ))}
                  </div>
                  <span className="qmf-fade bot" aria-hidden="true"></span>
                </div>
                <div className="qmf-rail" ref={railRef} aria-hidden="true">
                  <span className="qmf-thumb" ref={thumbRef}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
