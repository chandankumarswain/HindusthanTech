import { useCallback, useEffect, useMemo, useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { CATEGORIES, GROUPS, PRODUCTS } from '../data/portfolio'

/* "Core Product Portfolio" (/products) — the Section 8 portfolio document
   rebuilt as a filterable product index: category tabs + search, one-open-at-a-time
   accordion rows, each revealing an identity panel, a build sheet and its
   photographs (click to enlarge in a lightbox).

   Content is verbatim from the source document (src/data/portfolio.js). The
   reference's own palette/type (Saira Condensed · IBM Plex · lime) is dropped in
   favour of this project's system — bone/paper canvas, HTPL red accent, Source
   Serif display + Space Grotesk body + JetBrains Mono labels, the .ap-shell
   80/50/25 gutters and the 991/767 breakpoints. */

const IMG = '/images/portfolio/'

const STATS = [
  { n: '23', l: 'Variants' },
  { n: '77', l: 'Photographs' },
  { n: '35', l: 'Max tonnage · GVW' },
  { n: '18000', l: 'Max water · Liters' },
  { n: '6000', l: 'Max pump · LPM' },
]

const countOf = (id) =>
  id === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === id).length

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
)

export default function ProductsPage() {
  useScrollReveal()

  const [cat, setCat] = useState('all')
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(null)      // product name, one at a time
  const [lb, setLb] = useState(null)          // { photos, i, name }

  useEffect(() => {
    const prev = document.title
    document.title = 'Core Product Portfolio — Hindusthan Technologies'
    return () => { document.title = prev }
  }, [])

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase()
    return PRODUCTS.filter(
      (p) => (cat === 'all' || p.cat === cat) && (!term || p.find.includes(term))
    )
  }, [cat, q])

  /* ---- lightbox: arrows + escape, scroll lock ---- */
  const closeLb = useCallback(() => setLb(null), [])
  const step = useCallback((d) => {
    setLb((v) => (v ? { ...v, i: (v.i + d + v.photos.length) % v.photos.length } : v))
  }, [])

  useEffect(() => {
    if (!lb) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeLb()
      if (e.key === 'ArrowLeft') step(-1)
      if (e.key === 'ArrowRight') step(1)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
    }
  }, [lb, closeLb, step])

  return (
    <>
      <Nav />
      <main className="pp-page">
        {/* ---- Hero ---- */}
        <section className="pp-hero">
          <div className="ap-shell">
            <p className="ap-crumb reveal">
              <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
              <span className="ap-crumb-current">Products</span>
            </p>
            <p className="eyebrow reveal">
              <span className="dot" />Section 8 — Core Products &amp; Services
            </p>
            <h1 className="display pp-hero-title reveal">
              Core Product <span className="italic-accent">Portfolio</span>
            </h1>
            <p className="pp-tagline reveal">Engineering of today, saving lives of tomorrow</p>
            <p className="lead pp-hero-desc reveal">
              HTPL specializes in the design, engineering, and manufacturing of a wide range of
              firefighting and special-purpose vehicles (SPVs) tailored for industrial and tactical
              environments.
            </p>
            <div className="pp-hero-actions reveal">
              <a href="#index" className="btn btn-primary">
                Browse the portfolio <span className="arrow">→</span>
              </a>
              <a href="/#contact" className="btn btn-ghost">Request a quote</a>
            </div>
          </div>
        </section>

        {/* ---- Stats band (primary red) ---- */}
        <section className="ap-stats-section">
          <div className="ap-shell">
            <div className="ap-statsband pp-statsband reveal">
              {STATS.map((s) => (
                <div className="ap-sb" key={s.l}>
                  <span className="ap-sb-n">{s.n}</span>
                  <span className="ap-sb-l">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- The two capability groupings ---- */}
        <section className="pp-groups">
          <div className="ap-shell">
            <div className="pp-groups-grid">
              {GROUPS.map((g) => (
                <article className="pp-group reveal" key={g.title}>
                  <h2 className="pp-group-title">{g.title}</h2>
                  <ul className="pp-group-list">
                    {g.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Product index ---- */}
        <section className="pp-index" id="index">
          {/* sticky control bar — tabs + search */}
          <div className="pp-controls">
            <div className="ap-shell pp-controls-inner">
              <div className="pp-tabs" role="tablist" aria-label="Product categories">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    className="pp-tab"
                    aria-selected={cat === c.id}
                    onClick={() => { setCat(c.id); setOpen(null) }}
                  >
                    {c.label}<span className="pp-tab-n">{countOf(c.id)}</span>
                  </button>
                ))}
              </div>
              <div className="pp-search">
                <SearchIcon />
                <input
                  type="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search specifications…"
                  aria-label="Search the portfolio"
                />
              </div>
            </div>
          </div>

          <div className="ap-shell">
            {/* re-keyed per category so the stagger replays on tab change */}
            <div className="pp-list" key={cat}>
              {shown.map((p, i) => {
                const isOpen = open === p.name
                const photos = p.photos.slice(0, 3) // cap at 3, min 1
                return (
                  <article
                    className={`pp-row${isOpen ? ' is-open' : ''}`}
                    key={p.name}
                    style={{ animationDelay: `${Math.min(i * 35, 420)}ms` }}
                  >
                    <button
                      type="button"
                      className="pp-row-head"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : p.name)}
                    >
                      <span className="pp-mark" aria-hidden="true" />
                      <span className="pp-row-name">
                        {p.name}
                        {p.sub && <em>{p.sub}</em>}
                      </span>
                      <span className="pp-thumbs" aria-hidden="true">
                        {photos.map((f) => (
                          <img key={f} src={IMG + f} alt="" loading="lazy" decoding="async" />
                        ))}
                      </span>
                    </button>

                    <div className="pp-row-body">
                      <div className="pp-clip">
                        <div className={`pp-panels ${photos.length === 1 ? 'is-single' : 'is-multi'}`}>
                          {/* identity */}
                          <div className="pp-panel pp-ident">
                            <p className="pp-ident-eyebrow">{p.eyebrow}</p>
                            <div className="pp-disc">
                              <b>{p.discN}</b>
                              <span>{p.discL}</span>
                            </div>
                            <div>
                              <h3 className="pp-ident-title">{p.name}</h3>
                              <p className="pp-ident-desc">
                                {p.sub && <>{p.sub} · </>}
                                <b>{photos.length} photograph{photos.length === 1 ? '' : 's'}</b> on record.
                              </p>
                            </div>
                          </div>

                          {/* build sheet */}
                          <div className="pp-panel pp-spec">
                            <h4 className="pp-spec-h">Specification</h4>
                            <p className="pp-spec-intro">{p.specIntro}</p>
                            {p.sheet.length > 0 && (
                              <div className="pp-sheet">
                                <h5 className="pp-sheet-h">Build sheet</h5>
                                <ul>
                                  {p.sheet.map(([k, v]) => (
                                    <li key={k}>
                                      <i>{k}</i>
                                      <b>{v}</b>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* photographs — max 3, laid out per count (see .pp-panels modes) */}
                          <div className="pp-photos">
                            {photos.map((f, k) => (
                              <figure className="pp-panel pp-photo" key={f}>
                                <button
                                  type="button"
                                  className="pp-photo-btn"
                                  aria-label={`Enlarge photograph ${k + 1} of ${photos.length}, ${p.name}`}
                                  onClick={() => setLb({ photos, i: k, name: p.name })}
                                >
                                  <img
                                    src={IMG + f}
                                    alt={`${p.name} — photograph ${k + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <figcaption>
                                    <span>{p.name}</span>
                                    <b>{String(k + 1).padStart(2, '0')}/{String(photos.length).padStart(2, '0')}</b>
                                  </figcaption>
                                </button>
                              </figure>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}

              {shown.length === 0 && (
                <p className="pp-empty">No products match that search.</p>
              )}
            </div>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Need a vehicle built to your specification?</h2>
            <div className="ap-cta-actions">
              <a href="/#contact" className="btn btn-primary">
                Request a quote <span className="arrow">→</span>
              </a>
              <a href="/products-services" className="btn btn-ghost">Explore our services</a>
            </div>
          </div>
        </section>
      </main>

      {/* ---- Lightbox ---- */}
      {lb && (
        <div className="pp-lb is-open" role="dialog" aria-modal="true" aria-label={lb.name}>
          <button type="button" className="pp-lb-x" onClick={closeLb} aria-label="Close">×</button>
          <button type="button" className="pp-lb-nav is-prev" onClick={() => step(-1)} aria-label="Previous">‹</button>
          <img src={IMG + lb.photos[lb.i]} alt={`${lb.name} — photograph ${lb.i + 1}`} />
          <button type="button" className="pp-lb-nav is-next" onClick={() => step(1)} aria-label="Next">›</button>
          <div className="pp-lb-cap">
            <span>{lb.name}</span>
            <b>{lb.i + 1} / {lb.photos.length}</b>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
