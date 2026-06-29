import { useEffect, useRef, useState } from 'react'

/* ============================================================================
   FLEET CAROUSEL — "Explore Our Fleet"
   Behaviour & layout ported from the supplied index.html reference (3D coverflow
   stage, side-peeks, dots, arrows, ←/→ keys, ~5.2s autoplay with a hazard-stripe
   progress bar that pauses on hover/focus, wrap-around, reduced-motion fallback).
   Rendered in the site's own design system — bone canvas, single red accent,
   serif display heading, grotesk/mono UI (no second accent colour).
   ========================================================================== */

const slug = (f) =>
  f.replace(/^\d+_/, '').replace(/\.jpg$/, '').replace(/_/g, ' ')

const SLIDES = [
  { file: '01_Water_Bowser_with_Boom_Tower.jpg', sub: 'Elevated water delivery with extendable boom reach' },
  { file: '02_Water_Bowser_Boom_Tower_in_Action.jpg', sub: 'Boom tower deployed on a live site' },
  { file: '03_Foam_Nurser.jpg', sub: 'Foam concentrate resupply and transfer unit' },
  { file: '04_Quick_Response_Unit.jpg', sub: 'Compact rapid first-response vehicle' },
  { file: '05_MOSRU.jpg', sub: 'Multi-operational support and rescue unit' },
  { file: '06_Foam_Tender.jpg', sub: 'Foam-based fire suppression tender' },
  { file: '07_Multi_Purpose_Fire_Tender.jpg', sub: 'Versatile multi-role firefighting tender' },
  { file: '08_Water_Tender.jpg', sub: 'High-capacity water suppression vehicle' },
  { file: '09_Water_Tender_Front.jpg', sub: 'Water tender, front three-quarter profile' },
  { file: '10_Combat_Fire_Tender.jpg', sub: 'Frontline fire combat vehicle' },
  { file: '11_Multi_Purpose_Rescue_Tender.jpg', sub: 'Combined rescue and firefighting platform' },
  { file: '12_Foam_Nurser_Heavy.jpg', sub: 'Heavy-duty foam resupply carrier' },
  { file: '13_Compact_Fire_Tender.jpg', sub: 'Compact-footprint urban fire tender' },
  { file: '14_Recovery_Vehicle.jpg', sub: 'Fleet recovery and towing unit' },
].map((s) => ({ ...s, title: slug(s.file) }))

const N = SLIDES.length
const pad = (v) => String(v).padStart(2, '0')

function posFor(i, active) {
  let d = i - active
  if (d > N / 2) d -= N
  if (d < -N / 2) d += N
  if (d === 0) return 'center'
  if (d === -1) return 'left'
  if (d === 1) return 'right'
  if (d === -2) return 'far-left'
  if (d === 2) return 'far-right'
  return 'hidden'
}

export default function FleetCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [pct, setPct] = useState(0)
  const [reduce, setReduce] = useState(false)

  const go = (i) => setActive(((i % N) + N) % N)
  const next = () => go(active + 1)
  const prev = () => go(active - 1)

  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  /* autoplay + progress; restarts on slide change, frozen+reset while paused */
  useEffect(() => {
    if (reduce || paused) return
    const DURATION = 5200
    let raf
    let start
    const tick = (t) => {
      if (!start) start = t
      const p = Math.min((t - start) / DURATION, 1)
      setPct(p * 100)
      if (p >= 1) {
        setActive((a) => (a + 1) % N)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    setPct(0)
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, paused, reduce])

  const onKey = (e) => {
    if (e.key === 'ArrowRight') next()
    else if (e.key === 'ArrowLeft') prev()
  }

  return (
    <section
      className="flt section-pad"
      id="gallery"
      aria-roledescription="carousel"
      aria-label="HTPL fire and rescue fleet gallery"
      onKeyDown={onKey}
    >
      <header className="flt-head reveal">
        <p className="eyebrow flt-eyebrow">
          <span className="dot"></span>Gallery
        </p>
        <h2 className="display h-sec">Explore Our Fleet</h2>
        <p className="lead">
          Purpose-built firefighting and rescue vehicles, engineered and bodied for the field.
        </p>
      </header>

      <div
        className="flt-stage-wrap reveal"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="flt-stage">
          {SLIDES.map((s, i) => {
            const cur = i === active
            return (
              <button
                key={s.file}
                type="button"
                className="flt-card"
                data-pos={posFor(i, active)}
                aria-label={s.title}
                tabIndex={cur ? 0 : -1}
                onClick={() => i !== active && go(i)}
              >
                <img
                  src={`/images/gallery/${s.file}`}
                  alt={s.title}
                  loading={i < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <span className="flt-scrim" aria-hidden="true"></span>
                <span className="flt-cap">
                  <span className="flt-cap-text">
                    <span className="flt-tag">Fleet · HT</span>
                    <span className="flt-title">{s.title}</span>
                    <span className="flt-sub">{s.sub}</span>
                  </span>
                  <span className="flt-count">
                    <b>{pad(i + 1)}</b> <span>/ {pad(N)}</span>
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* prev / dots / next — shown only on tablet & mobile (CSS), where the
          side-peek cards are hidden and there's otherwise no way to navigate */}
      <div className="flt-controls">
        <button type="button" className="flt-nav" aria-label="Previous slide" onClick={prev}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="flt-dots" role="tablist" aria-label="Select slide">
          {SLIDES.map((s, i) => (
            <button
              key={s.file}
              type="button"
              className="flt-dot"
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              aria-current={i === active}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="flt-nav" aria-label="Next slide" onClick={next}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
