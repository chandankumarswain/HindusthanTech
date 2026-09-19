import { useEffect, useRef, useState } from 'react'

/* ============================================================================
   TESTIMONIALS — "What our clients say"
   Centre-focus card carousel (centre card raised, neighbours receded), prev /
   next arrows, dots, ←/→ keys, swipe on touch, ~6s autoplay that pauses on
   hover/focus, wrap-around, reduced-motion fallback. Sits right after the
   client-logo section; each card carries the client's logo + company name in
   place of the usual avatar + person name.
   Rendered in the site's design system — bone canvas, paper cards, single red
   accent, serif display heading, grotesk body, mono micro-labels.
   ========================================================================== */

// client name -> /public/images/clients/<slug>.png (same rule as Clients.jsx)
const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// Placeholder reviews — swap for approved client quotes when available.
const REVIEWS = [
  {
    client: 'Odisha Fire Service',
    sector: 'State Fire Services',
    place: 'Bhubaneswar, Odisha',
    quote:
      'HTPL has delivered multiple batches of water and foam tenders to our stations. Every vehicle arrived on schedule, passed inspection first time and has been dependable in daily service.',
  },
  {
    client: 'Indian Navy',
    sector: 'Defence & Aerospace',
    place: 'Visakhapatnam, Andhra Pradesh',
    quote:
      'The crash fire tenders built for our air stations meet demanding specifications. Build quality, pump performance and after-sales support have all been consistently strong.',
  },
  {
    client: 'IOCL',
    sector: 'Oil & Gas',
    place: 'Paradip Refinery, Odisha',
    quote:
      'For a refinery, response time and foam capacity are non-negotiable. HTPL understood our operating environment and engineered the tenders around it rather than offering a standard unit.',
  },
  {
    client: 'NTPC',
    sector: 'Steel & Power',
    place: 'Talcher, Odisha',
    quote:
      'From the first site visit to final commissioning the team was thorough and transparent. The multipurpose tender has performed reliably through two monsoon seasons without downtime.',
  },
  {
    client: 'Tata Steel',
    sector: 'Industrial & Manufacturing',
    place: 'Jamshedpur, Jharkhand',
    quote:
      'Their engineering team worked closely with our safety department on the layout, locker configuration and pump ratings. The result is a vehicle our crews trust every single shift.',
  },
  {
    client: 'MCL',
    sector: 'Mines & Minerals',
    place: 'Sambalpur, Odisha',
    quote:
      'Mining sites are hard on equipment. The water bowsers supplied by HTPL have handled rough terrain, dust and long duty cycles far better than what we ran before.',
  },
  {
    client: 'Paradip Port Authority',
    sector: 'Ports & Maritime',
    place: 'Paradip, Odisha',
    quote:
      'Delivery, training and handover were handled professionally. The operators were comfortable with the new tender within days, and spares support has been prompt whenever we needed it.',
  },
  {
    client: 'HAL',
    sector: 'Defence & Aerospace',
    place: 'Bengaluru, Karnataka',
    quote:
      'We needed a rapid-intervention unit that fits tight hangar approaches without compromising output. HTPL delivered exactly that, on a realistic timeline and within budget.',
  },
]

const N = REVIEWS.length
const pad = (v) => String(v).padStart(2, '0')
const AUTOPLAY_MS = 6000
const SWIPE_PX = 40

function posFor(i, active) {
  let d = i - active
  if (d > N / 2) d -= N
  if (d < -N / 2) d += N
  if (d === 0) return 'center'
  if (d === -1) return 'left'
  if (d === 1) return 'right'
  return 'hidden'
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduce, setReduce] = useState(false)
  const touchX = useRef(null)

  const go = (i) => setActive(((i % N) + N) % N)
  const next = () => go(active + 1)
  const prev = () => go(active - 1)

  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  /* autoplay — restarts on slide change, held while hovered / focused */
  useEffect(() => {
    if (reduce || paused) return
    const t = setTimeout(() => setActive((a) => (a + 1) % N), AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [active, paused, reduce])

  const onKey = (e) => {
    if (e.key === 'ArrowRight') next()
    else if (e.key === 'ArrowLeft') prev()
  }

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) < SWIPE_PX) return
    if (dx < 0) next()
    else prev()
  }

  return (
    <section
      className="tst section-pad"
      id="testimonials"
      aria-roledescription="carousel"
      aria-label="What our clients say"
      onKeyDown={onKey}
    >
      <div className="wrap">
        <div className="sec-head center reveal">
          <p className="eyebrow">
            <span className="dot"></span>Testimonials
          </p>
          <h2 className="display h-sec">
            What our <span className="italic-accent">clients say</span>
          </h2>
          <p className="lead">
            Feedback from the fire services, defence establishments and industrial plants that
            run HTPL vehicles every day.
          </p>
        </div>

        <div
          className="tst-body reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <button type="button" className="tst-nav tst-prev" aria-label="Previous testimonial" onClick={prev}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="tst-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {REVIEWS.map((r, i) => {
              const cur = i === active
              const pos = posFor(i, active)
              return (
                <article
                  key={r.client}
                  className="tst-card"
                  data-pos={pos}
                  aria-hidden={!cur}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${N}: ${r.client}`}
                  onClick={() => !cur && pos !== 'hidden' && go(i)}
                >
                  <div className="tst-top">
                    <span className="tst-quote" aria-hidden="true">&ldquo;</span>
                    <span className="tst-count">
                      <b>{pad(i + 1)}</b> / {pad(N)}
                    </span>
                  </div>
                  <p className="tst-text">{r.quote}</p>
                  <footer className="tst-foot">
                    <span className="tst-logo-box">
                      <img
                        className="tst-logo"
                        src={`/images/clients/${slugify(r.client)}.png`}
                        alt={`${r.client} logo`}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className="tst-who">
                      <span className="tst-name">{r.client}</span>
                      <span className="tst-meta">
                        {r.sector} &middot; {r.place}
                      </span>
                    </span>
                  </footer>
                </article>
              )
            })}
          </div>

          <button type="button" className="tst-nav tst-next" aria-label="Next testimonial" onClick={next}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="tst-dots" role="tablist" aria-label="Select testimonial">
            {REVIEWS.map((r, i) => (
              <button
                key={r.client}
                type="button"
                className="tst-dot"
                role="tab"
                aria-label={`Go to testimonial ${i + 1}: ${r.client}`}
                aria-current={i === active}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
