import { useEffect, useRef } from 'react'

/* ------------------------------------------------------------------
   Gallery — editorial image mosaic.
   Storytelling arc: Innovation → Manufacturing → Delivery → Client Success.

   Layout: a fixed CSS grid-template-areas mosaic (no parallax) — asymmetric
   card sizes create the premium, magazine-style composition. Entry motion
   reuses the site's `.reveal` / `.reveal.in` system. Responsive: a 4-column
   mosaic (desktop) → 2-column (tablet) → single column (mobile), using the
   same 80 / 50 / 25 shell padding as the rest of the site.
------------------------------------------------------------------ */

const CARDS = [
  {
    id: '01',
    area: 'a',
    title: 'Custom Fire Tender Deployment',
    desc: 'Successfully delivered advanced firefighting vehicles for industrial emergency response operations.',
    img: '/images/fleet/sail-rsp-night-ops.jpg',
    alt: 'Completed HTPL fire tender deployed at a client site',
  },
  {
    id: '02',
    area: 'b',
    title: 'Engineering & Design',
    desc: 'From CAD planning to precision fabrication, every vehicle begins with detailed engineering.',
    img: '/images/fleet/dcp-tender.jpg',
    alt: 'Precision-engineered powertrain assembly',
  },
  {
    id: '03',
    area: 'c',
    title: 'Manufacturing Excellence',
    desc: 'Built at our Jagatpur facility using industry-leading fabrication and assembly practices.',
    img: '/images/fleet/htpl-build-rear.jpg',
    alt: 'Multipurpose fire tender built at the HTPL Jagatpur facility',
  },
  {
    id: '04',
    area: 'd',
    title: 'Quality & Testing',
    desc: 'Rigorous inspections and testing ensure every vehicle meets operational and safety standards.',
    img: '/images/fleet/bpcl-mosru-tanker.jpg',
    alt: 'Completed special-purpose vehicle undergoing final checks',
  },
  {
    id: '05',
    area: 'e',
    title: 'Client Success Stories',
    desc: 'Trusted by industries, municipalities, and emergency response organizations across India.',
    img: '/images/fleet/fact-handover.jpg',
    alt: 'Quick response vehicle handed over to a client',
  },
  {
    id: '06',
    area: 'f',
    title: 'Innovation & Technology',
    desc: 'Continuous innovation drives smarter, safer, and more efficient firefighting solutions.',
    img: '/images/fleet/tn-fire-rescue-tender.jpg',
    alt: 'Advanced engine technology powering HTPL vehicles',
  },
]

export default function ProjectGallery() {
  const sectionRef = useRef(null)

  /* scoped scroll-reveal — reuses the global `.reveal/.in` classes */
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
      el.style.transitionDelay = Math.min(i, 6) * 90 + 'ms'
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])

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

        <div className="pgal-mosaic">
          {CARDS.map((c) => (
            <figure className={`pgal-card pgal-${c.area} reveal`} key={c.id}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
