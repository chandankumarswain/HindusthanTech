import { useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* "Our Milestones" page — a scroll-driven timeline: a sticky "odometer" rail
   (the year currently being read) + category filter chips on the left, and a
   vertical, node-linked timeline of every milestone on the right.

   The layout concept is borrowed from the supplied reference, but re-skinned
   entirely to this project's design system — bone/paper canvas, HTPL red accent,
   Source Serif display + Space Grotesk body + JetBrains mono labels, the .ap-shell
   80/50/25 gutters and the 991/767 breakpoints. The top hero mirrors the About
   page (breadcrumb + display title + intro, then the red stats band). */

/* Each milestone: year, category (drives the filter), a short tag, the odometer
   caption, and the card body. Categories: origin · fire · psu · defence ·
   special · growth (export & rental). */
const MILE = [
  { y: 1987, cat: 'origin', tag: 'Origin', cap: 'Founded.',
    body: <><b>Founded.</b> Hindusthan Technologies begins operations.</> },
  { y: 1995, cat: 'fire', tag: 'Fire & rescue', cap: 'First fire fighting vehicle.',
    body: <>Entered manufacturing of <b>fire fighting vehicles</b> and supplied to Odisha Fire Service.</> },
  { y: 1996, cat: 'fire', tag: 'Fire & rescue', cap: 'Troop carriers for Odisha Police.',
    body: <>Entered manufacturing of <b>troop carriers and court vans</b> for Odisha Police.</> },
  { y: 1999, cat: 'psu', tag: 'PSU', cap: 'First PSU order — NALCO.',
    body: <>Entered the <b>PSU sector</b> and executed a Trailer Fire Pump order for NALCO.</> },
  { y: 2001, cat: 'fire', tag: 'Fire & rescue', cap: 'Bulk order, Odisha Fire Services.',
    body: <>Executed a <b>bulk order</b> for Odisha Fire Services.</> },
  { y: 2001, cat: 'psu', tag: 'PSU', cap: 'First DCP tender for NALCO.',
    body: <>Executed the <b>first DCP tender order</b> for NALCO.</> },
  { y: 2002, cat: 'psu', tag: 'PSU', cap: 'Beyond Odisha.',
    body: <>Expanded business <b>beyond Odisha</b> and executed an order for Eastern Coal Fields Limited.</> },
  { y: 2004, cat: 'fire', tag: 'Fire & rescue', cap: 'Jharkhand and Madhya Pradesh.',
    body: <>Executed major orders for <b>Jharkhand State Fire Services</b> and Madhya Pradesh Laghu Udyog Nigam.</> },
  { y: 2005, cat: 'growth', tag: 'First export', tagClass: 'exp', cap: 'First export order — Bhutan.',
    body: <>Executed an order for portable fire pumps to <b>Bhutan</b> — the first export order.</> },
  { y: 2006, cat: 'defence', tag: 'Defence', tagClass: 'def', cap: 'DGQA registration applied.',
    body: <>Applied for <b>DGQA (Defence) registration</b>. Factory shifted to the Industrial Estate. Supplied the first diesel bowser to NCL.</> },
  { y: 2007, cat: 'defence', tag: 'Defence', tagClass: 'def', cap: 'First defence order cleared.',
    body: <>Executed the <b>first defence order</b> with pilot sample cleared by DGQA. Supplied the first explosive van, MS van and water sprinkler.</> },
  { y: 2009, cat: 'fire', tag: 'Fire & rescue', cap: 'Into the North East.',
    body: <>Expanded to the <b>North East region</b>, supplying Manipur and Mizoram Fire Services.</> },
  { y: 2011, cat: 'psu', tag: 'PSU', cap: 'Major order for ONGC.',
    body: <>Executed a major order for <b>ONGC</b>.</> },
  { y: 2012, cat: 'fire', tag: 'Fire & rescue', cap: 'Light mast water tenders.',
    body: <>Executed an order for the <b>Andaman &amp; Nicobar Islands</b>. Advance water tenders with light mast and quick response units supplied across sectors.</> },
  { y: 2013, cat: 'growth', tag: 'Rental', cap: 'Rental business begins.',
    body: <>Supplied proprietary portable and trailer fire pumps. Entered the <b>rental of fire tenders</b> with DCPOs.</> },
  { y: 2014, cat: 'fire', tag: 'Fire & rescue', cap: '98 units, Odisha Fire Services.',
    body: <>Supplied a bulk order of <b>98 units</b> to Odisha Fire Services.</> },
  { y: 2015, cat: 'defence', tag: 'Defence', tagClass: 'def', cap: 'Indian Navy, with Ashok Leyland.',
    body: <>Executed a major order for the <b>Indian Navy</b> in collaboration with Ashok Leyland — pilot and bulk supply cleared under DGQA inspection.</> },
  { y: 2016, cat: 'psu', tag: 'PSU', cap: 'Kashmir, Ladakh, the borders.',
    body: <>Executed an order for <b>NHPC</b>, supplying strategic locations including Kashmir, Ladakh, Uttarakhand and the North East border region.</> },
  { y: 2017, cat: 'growth', tag: 'Rental', cap: 'Rental with IOCL.',
    body: <>Started major <b>rental business with IOCL</b> and healthcare industries.</> },
  { y: 2018, cat: 'special', tag: 'Special vehicle', cap: '4000 kg DCP tenders.',
    body: <>Executed orders for <b>foam nursers</b> and high capacity DCP tenders (4000 kg).</> },
  { y: 2019, cat: 'psu', tag: 'PSU', cap: '250 foam trolleys for IOCL.',
    body: <>Executed a bulk order of <b>250 foam trolleys</b> (3 KL and 5 KL) for IOCL plants and terminals across eastern and southern India.</> },
  { y: 2021, cat: 'special', tag: 'Special vehicle', cap: 'First MOSRU for IOCL.',
    body: <>Executed the first order of a <b>Mobile Oil Spillage Recovery Unit</b> (MOSRU) for IOCL.</> },
  { y: 2022, cat: 'special', tag: 'Special vehicle', cap: 'First blood donation van.',
    body: <>Executed the first order for a <b>Mobile Blood Donation Van</b> (MBDV) for OSMCL.</> },
  { y: 2023, cat: 'special', tag: 'Special vehicle', cap: 'Cesspool vehicles, Odisha.',
    body: <>Executed an order for <b>cesspool application vehicles</b>, supplied to municipalities and NACs across Odisha.</> },
  { y: 2024, cat: 'fire', tag: 'Fire & rescue', cap: '150 fire tenders, Tamil Nadu.',
    body: <>Executed a bulk order of <b>150 fire tenders</b> for Tamil Nadu Fire &amp; Emergency Services.</> },
  { y: 2025, cat: 'special', tag: 'Special vehicle', cap: 'Boom tower bowser for SAIL.',
    body: <>Executed the first <b>Water Bowser with boom tower</b> for Steel Authority of India Limited (SAIL).</> },
]

const FILTERS = [
  { f: 'all', label: 'All milestones' },
  { f: 'fire', label: 'Fire & rescue' },
  { f: 'defence', label: 'Defence' },
  { f: 'psu', label: 'PSU & industry' },
  { f: 'special', label: 'Special vehicles' },
  { f: 'growth', label: 'Export & rental' },
]

const countOf = (f) => (f === 'all' ? MILE.length : MILE.filter((m) => m.cat === f).length)

const SPECS = [
  { n: '1987', l: 'First year' },
  { n: String(MILE.length), l: 'Milestones logged' },
  { n: '2005', l: 'First export — Bhutan' },
  { n: '2007', l: 'First defence order' },
]

export default function OurMilestone() {
  useScrollReveal()
  const rootRef = useRef(null)

  /* All timeline behaviour (scroll odometer, meter/fill, reveal, filters) is kept
     imperative and scoped to rootRef — the component renders once and never
     re-renders, so React never fights the classes we toggle by hand. */
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const allItems = [...root.querySelectorAll('.mile-item')]
    const line = root.querySelector('.mile-line')
    const yearEl = root.querySelector('.mile-odo-year')
    const capEl = root.querySelector('.mile-odo-cap')
    const meter = root.querySelector('.mile-meter i')
    const empty = root.querySelector('.mile-empty')
    if (!line || !yearEl || !capEl) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ACT = 0.42 // activation line — fraction of viewport height

    /* card reveal — fires once, then unobserve so scroll-up never replays it */
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    )
    allItems.forEach((i) => io.observe(i))
    if (reduce) allItems.forEach((i) => i.classList.add('in'))

    /* accent → warmer-secondary fill over the spine. The gradient is sized to the
       FULL track height (via background-size, set in measure()), so it never
       stretches as the fill's own height grows frame to frame. */
    const fillEl = document.createElement('span')
    fillEl.className = 'mile-fill'
    line.appendChild(fillEl)

    /* Cached geometry (document-absolute offsets). Recomputed only on resize and
       after a filter change — never per scroll frame. */
    let geo = { trackTop: 0, trackH: 1, tops: [], els: [] }
    const measure = () => {
      const sy = window.scrollY || window.pageYOffset
      const trackTop = line.getBoundingClientRect().top + sy
      const trackH = line.offsetHeight || 1
      const els = allItems.filter((i) => !i.classList.contains('hide'))
      const tops = els.map((el) => el.getBoundingClientRect().top + sy)
      geo = { trackTop, trackH, tops, els }
      fillEl.style.backgroundSize = `100% ${trackH}px`
    }

    /* year odometer roll — latest target wins; any in-flight roll is cancelled */
    let rollRAF = 0
    const rollTo = (target) => {
      if (reduce) { yearEl.textContent = String(target); return }
      const start = parseInt(yearEl.textContent, 10) || target
      if (start === target) { yearEl.textContent = String(target); return } // e.g. the 2001 pair
      if (rollRAF) cancelAnimationFrame(rollRAF)
      const t0 = performance.now(), dur = 320
      const step = (t) => {
        const k = Math.min(1, (t - t0) / dur)
        yearEl.textContent = String(Math.round(start + (target - start) * (1 - Math.pow(1 - k, 3))))
        rollRAF = k < 1 ? requestAnimationFrame(step) : 0
      }
      rollRAF = requestAnimationFrame(step)
    }

    /* one paint = the four things moving together, off cached geometry */
    let currentEl = null
    const paint = () => {
      const sy = window.scrollY || window.pageYOffset
      const midAbs = sy + window.innerHeight * ACT
      const { trackTop, trackH, tops, els } = geo
      if (!els.length) return

      let idx = -1
      for (let k = 0; k < tops.length; k++) {
        if (tops[k] <= midAbs) idx = k
        else break
      }
      const active = els[idx === -1 ? 0 : idx]
      if (active && active !== currentEl) {
        currentEl = active
        allItems.forEach((i) => i.classList.remove('on'))
        active.classList.add('on')
        rollTo(+active.dataset.year)
        capEl.textContent = active.dataset.cap
      }

      const p = Math.min(1, Math.max(0, (midAbs - trackTop) / trackH))
      fillEl.style.height = `${p * trackH}px`
      if (meter) meter.style.width = `${p * 100}%`
    }

    /* single passive, rAF-throttled scroll listener */
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => { paint(); ticking = false })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    const onResize = () => { measure(); paint() }
    window.addEventListener('resize', onResize)

    /* category filters — hide via display:none, then recompute + repaint in the
       SAME frame so year/fill are correct instantly. New cards appear already
       revealed (no entrance replay). */
    const chips = [...root.querySelectorAll('.mile-chip')]
    const onChip = (c) => () => {
      chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)))
      const f = c.dataset.f
      let shown = 0
      allItems.forEach((i) => {
        const ok = f === 'all' || i.dataset.cat === f
        i.classList.toggle('hide', !ok)
        if (ok) { shown++; i.classList.add('in') }
      })
      if (empty) empty.hidden = shown > 0
      currentEl = null
      measure()
      paint()
    }
    const bound = chips.map((c) => { const h = onChip(c); c.addEventListener('click', h); return [c, h] })

    /* init — measure now, then once more after layout/fonts settle */
    measure(); paint()
    const settle = requestAnimationFrame(() => { measure(); paint() })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      bound.forEach(([c, h]) => c.removeEventListener('click', h))
      if (rollRAF) cancelAnimationFrame(rollRAF)
      cancelAnimationFrame(settle)
      fillEl.remove()
    }
  }, [])

  return (
    <>
      <Nav />
      <main className="mile-page" ref={rootRef}>
        {/* ---- Hero (About-page style) ---- */}
        <section className="ap-hero" id="milestones">
          <div className="ap-shell">
            <div className="ap-hero-head">
              <div className="ap-hero-head-l reveal">
                <p className="ap-crumb">
                  <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
                  <a href="/about">About</a> <span aria-hidden="true">/</span>{' '}
                  <span className="ap-crumb-current">Our Milestones</span>
                </p>
                <h1 className="display ap-title">
                  Thirty-eight years
                  <br />
                  <span className="italic-accent">on the line.</span>
                </h1>
              </div>
              <p className="lead ap-intro reveal">
                From a single fire tender for Odisha Fire Service to DGQA-cleared supply for the
                Indian Navy — every order that moved us forward, in the order it happened.
              </p>
            </div>
          </div>
        </section>

        {/* ---- Stats band (primary red) ---- */}
        <section className="ap-stats-section">
          <div className="ap-shell">
            <div className="ap-statsband reveal">
              {SPECS.map((s) => (
                <div className="ap-sb" key={s.l}>
                  <span className="ap-sb-n">{s.n}</span>
                  <span className="ap-sb-l">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Timeline (odometer rail + record) ---- */}
        <section className="mile-main">
          <div className="ap-shell">
            <div className="mile-grid">
              {/* left — sticky odometer + filters */}
              <aside className="mile-rail">
                <div className="mile-odo">
                  <p className="mile-odo-label">Now reading</p>
                  <div className="mile-odo-year">1987</div>
                  <p className="mile-odo-cap">Founded.</p>
                  <div className="mile-meter"><i /></div>
                </div>
                <div className="mile-filters">
                  <p>Filter the record</p>
                  {FILTERS.map((fl) => (
                    <button
                      type="button"
                      className="mile-chip"
                      data-f={fl.f}
                      aria-pressed={fl.f === 'all'}
                      key={fl.f}
                    >
                      {fl.label} <span>{countOf(fl.f)}</span>
                    </button>
                  ))}
                </div>
              </aside>

              {/* right — the timeline */}
              <div className="mile-line">
                {MILE.map((m, idx) => (
                  <article
                    className="mile-item"
                    data-cat={m.cat}
                    data-year={m.y}
                    data-cap={m.cap}
                    key={idx}
                  >
                    <div className="mile-card">
                      <span className="mile-yr">{m.y}</span>
                      <span className={`mile-tag${m.tagClass ? ' ' + m.tagClass : ''}`}>{m.tag}</span>
                      <p>{m.body}</p>
                    </div>
                  </article>
                ))}
                <p className="mile-empty" hidden>No milestones in this category.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">The next milestone starts with your project.</h2>
            <div className="ap-cta-actions">
              <a href="/#contact" className="btn btn-primary">
                Request a quote <span className="arrow">→</span>
              </a>
              <a href="/#products" className="btn btn-ghost">
                Explore products
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
