import { useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------
   Gallery — premium image masonry showcase.
   Storytelling arc: Innovation → Manufacturing → Delivery → Client Success.

   Built on the site's existing language (no new deps):
   • entry motion reuses the `.reveal` / `.reveal.in` system
   • opposing-column parallax is a transform-only, rAF-throttled scroll
     handler — the same pattern Nav.jsx already uses (GPU, 60fps)
   • responsive shell padding 80 / 50 / 25 + breakpoints 992 / 768 match
     the rest of the site
------------------------------------------------------------------ */

const CARDS = [
  {
    id: '01',
    title: 'Custom Fire Tender Deployment',
    desc: 'Successfully delivered advanced firefighting vehicles for industrial emergency response operations.',
    img: '/images/fleet/sail-rsp-night-ops.jpg',
    alt: 'Completed HTPL fire tender deployed at a client site',
    size: 'tall',
  },
  {
    id: '02',
    title: 'Engineering & Design',
    desc: 'From CAD planning to precision fabrication, every vehicle begins with detailed engineering.',
    img: '/images/fleet/dcp-tender.jpg',
    alt: 'Precision-engineered powertrain assembly',
    size: 'medium',
  },
  {
    id: '03',
    title: 'Manufacturing Excellence',
    desc: 'Built at our Jagatpur facility using industry-leading fabrication and assembly practices.',
    img: '/images/fleet/htpl-build-rear.jpg',
    alt: 'Multipurpose fire tender built at the HTPL Jagatpur facility',
    size: 'medium',
  },
  {
    id: '04',
    title: 'Quality & Testing',
    desc: 'Rigorous inspections and testing ensure every vehicle meets operational and safety standards.',
    img: '/images/fleet/bpcl-mosru-tanker.jpg',
    alt: 'Completed special-purpose vehicle undergoing final checks',
    size: 'large',
  },
  {
    id: '05',
    title: 'Client Success Stories',
    desc: 'Trusted by industries, municipalities, and emergency response organizations across India.',
    img: '/images/fleet/fact-handover.jpg',
    alt: 'Quick response vehicle handed over to a client',
    size: 'tall',
  },
  {
    id: '06',
    title: 'Innovation & Technology',
    desc: 'Continuous innovation drives smarter, safer, and more efficient firefighting solutions.',
    img: '/images/fleet/tn-fire-rescue-tender.jpg',
    alt: 'Advanced engine technology powering HTPL vehicles',
    size: 'medium',
  },
]

/* distribute the six cards into `n` columns, preserving the editorial order */
function columnsFor(n) {
  if (n <= 1) return [CARDS]
  if (n === 2) return [[CARDS[0], CARDS[2], CARDS[4]], [CARDS[1], CARDS[3], CARDS[5]]]
  return [[CARDS[0], CARDS[1]], [CARDS[2], CARDS[3]], [CARDS[4], CARDS[5]]]
}

export default function ProjectGallery() {
  const [cols, setCols] = useState(3)
  const sectionRef = useRef(null)

  /* responsive column count — site breakpoints (≤767 mobile · ≤991 tablet) */
  useEffect(() => {
    const mqTablet = window.matchMedia('(max-width: 991px)')
    const mqMobile = window.matchMedia('(max-width: 767px)')
    const update = () => setCols(mqMobile.matches ? 1 : mqTablet.matches ? 2 : 3)
    update()
    mqTablet.addEventListener('change', update)
    mqMobile.addEventListener('change', update)
    return () => {
      mqTablet.removeEventListener('change', update)
      mqMobile.removeEventListener('change', update)
    }
  }, [])

  /* scoped scroll-reveal — reuses the global `.reveal/.in` classes, but owns its
     own observer so cards still animate after a layout (column-count) change */
  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const els = root.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i, 6) * 120 + 'ms'
      io.observe(el)
    })
    return () => io.disconnect()
  }, [cols])

  /* opposing-column parallax — transform-only, rAF-throttled.
     left column drifts up, centre stays ~still, right column drifts down.
     Disabled on mobile (1 col) and for reduced-motion users. */
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const amplitude = cols === 3 ? 50 : cols === 2 ? 25 : 0 // tablet ≈ 50% of desktop
    const colEls = Array.from(section.querySelectorAll('.pgal-col'))

    if (reduce || amplitude === 0) {
      colEls.forEach((el) => (el.style.transform = ''))
      return
    }

    let ticking = false
    const update = () => {
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight || 1
      let p = (vh / 2 - (rect.top + rect.height / 2)) / vh // ~[-1,1] as it passes
      p = Math.max(-1, Math.min(1, p))
      const n = colEls.length
      colEls.forEach((el, i) => {
        const f = n > 1 ? (i / (n - 1)) * 2 - 1 : 0 // -1 (left) … 0 (centre) … +1 (right)
        el.style.transform = `translate3d(0, ${(f * amplitude * p).toFixed(2)}px, 0)`
      })
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      colEls.forEach((el) => (el.style.transform = ''))
    }
  }, [cols])

  const layout = columnsFor(cols)

  return (
    <section className="pgal" id="gallery" ref={sectionRef} aria-labelledby="gallery-title">
      <div className="pgal-shell">
        <header className="sec-head center pgal-head reveal">
          <p className="eyebrow">
            <span className="dot"></span>Gallery
          </p>
          <h2 className="display h-sec" id="gallery-title">
            A visual showcase of our{' '}
            <span className="italic-accent">work, innovation, and impact.</span>
          </h2>
          <p className="lead">
            Explore our projects, manufacturing excellence, client partnerships, and the
            people behind every HTPL solution.
          </p>
        </header>

        <div className="pgal-grid" data-cols={cols}>
          {layout.map((colCards, ci) => (
            <div className="pgal-col" key={ci}>
              {colCards.map((c) => (
                <div className="pgal-reveal reveal" key={c.id}>
                  <figure className={`pgal-card is-${c.size}`}>
                    <img
                      className="pgal-img"
                      src={c.img}
                      alt={c.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="pgal-cap">
                      <h3 className="pgal-title">{c.title}</h3>
                      <p className="pgal-desc">{c.desc}</p>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
