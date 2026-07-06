import { useCallback, useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------
   Editable fields — single source of truth for the navbar.
   Every value/link from the original component is preserved here.
------------------------------------------------------------------ */
const NAV = {
  brand_mark: 'H',
  brand_name: ['Hindusthan', 'Technologies'],
  home_link: '#hero',
  about_link: '#about',
  products_link: '#products',
  gallery_link: '#gallery',
  technology_link: '#technology',
  clients_link: '#clients',
  contact_link: '#contact',
  cta_text: 'Contact Us',
  cta_link: '#contact',
  aria_label: 'HTPL home',
}

/* About Us hover/accordion submenu — each item deep-links to its section on the
   dedicated /about page (anchors added in AboutPage.jsx). */
const ABOUT_DROPDOWN = [
  { label: 'Company Overview', href: '/about#company-overview' },
  { label: 'Vision, Mission and Core Values', href: '/vision-mission' },
  { label: 'Our Infrastructure', href: '/infrastructure' },
  { label: 'Our Plant and Machinery', href: '/infrastructure' },
  { label: 'Design and Engineering Prowess', href: '/design-engineering' },
  { label: 'Testing Facility', href: '/#testing' },
  { label: 'Registration and Approvals', href: '/registration-approvals' },
]

/* Manufacturing hover/accordion submenu — each item deep-links to the relevant
   section on the landing page. */
const MANUFACTURING_DROPDOWN = [
  { label: 'Technology & Innovation', href: '/#technology' },
  { label: 'Manufacturing Process', href: '/#process' },
  { label: 'Workflow', href: '/#workflow' },
  { label: 'Testing', href: '/#testing' },
  { label: 'Quality Assurance', href: '/#quality-framework' },
  { label: 'Compliance and Safety', href: '/#quality' },
  { label: 'Our Commitment', href: '/#commitment' },
]

const LINKS = [
  { label: 'Home', href: NAV.home_link },
  { label: 'About Us', href: '/about', children: ABOUT_DROPDOWN },
  { label: 'Manufacturing', href: 'manufacturing', children: MANUFACTURING_DROPDOWN },
  // Products -> "What we build" range section; Services -> dedicated page
  { label: 'Products', href: NAV.products_link },
  { label: 'Services', href: '/products-services' },
  { label: 'Gallery', href: NAV.gallery_link },
  { label: 'Clients', href: NAV.clients_link },
]

const Caret = () => (
  <svg
    className="nav-caret"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  // desktop hover/focus dropdown + mobile drawer accordion — keyed by item href
  const [openMenu, setOpenMenu] = useState(null)
  const [drawerMenu, setDrawerMenu] = useState(null)
  const drawerRef = useRef(null)
  const toggleRef = useRef(null)

  const close = useCallback(() => setOpen(false), [])

  /* Collapse any open drawer accordion whenever the drawer itself closes, so it
     never reopens in a stale state. */
  useEffect(() => {
    if (!open) setDrawerMenu(null)
  }, [open])

  /* On non-home pages (e.g. /about), section anchors must point back to the
     landing page: "#products" → "/#products". On home they stay native hashes. */
  const onHome = (window.location.pathname.replace(/\/+$/, '') || '/') === '/'
  const resolveHref = (href) => (href.startsWith('#') && !onHome ? `/${href}` : href)

  /* Active-route underline. Off-home (e.g. /about) the route link is active.
     On home, a scroll-spy highlights whichever section is crossing the upper
     third of the viewport — IntersectionObserver, so no scroll-handler churn. */
  const [activeHref, setActiveHref] = useState(onHome ? NAV.home_link : '/about')
  useEffect(() => {
    if (!onHome) return
    const ids = ['hero', 'products', 'gallery', 'technology', 'clients', 'contact']
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (top) setActiveHref(`#${top.target.id}`)
      },
      // thin band ~45–50% down the viewport = the "current" section line
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [onHome])

  /* Shadow + intelligent hide-on-scroll-down / show-on-scroll-up.
     rAF-throttled, transform-only — no re-render storms, no layout shift. */
  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      if (y <= 8) {
        setHidden(false) // always visible at the top
      } else if (y > 120 && y - lastY > 4) {
        setHidden(true) // scrolling down — slide away
      } else if (lastY - y > 4) {
        setHidden(false) // scrolling up — reappear quickly
      }
      lastY = y
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
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Never hide the bar while the drawer is open */
  useEffect(() => {
    if (open) setHidden(false)
  }, [open])

  /* Scroll lock + Escape to close + focus trap while the drawer is open */
  useEffect(() => {
    if (!open) return

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const drawer = drawerRef.current
    const focusables = () =>
      drawer
        ? Array.from(
            drawer.querySelectorAll(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          )
        : []

    focusables()[0]?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        close()
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close])

  /* Close the drawer when a route/anchor is chosen or viewport grows */
  useEffect(() => {
    if (!open) return
    const mq = window.matchMedia('(min-width: 992px)')
    const onChange = (e) => e.matches && close()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [open, close])

  return (
    <header
      className={`nav${scrolled ? ' is-scrolled' : ''}${hidden ? ' is-hidden' : ''}`}
    >
      <div className="nav-inner">
        {/* LEFT — brand / logo */}
        <a href={resolveHref(NAV.home_link)} className="brand" aria-label={NAV.aria_label}>
          <img
            className="brand-logo"
            src="/images/htpl-logo.png"
            alt="Hindusthan Technologies Pvt. Ltd."
            width="471"
            height="467"
          />
          <img
            className="brand-wordmark"
            src="/images/ss.png"
            alt=""
            width="1794"
            height="409"
          />
        </a>

        {/* CENTER — primary navigation */}
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) =>
            l.children ? (
              <div
                key={l.href}
                className={`nav-item${openMenu === l.href ? ' is-open' : ''}`}
                onMouseEnter={() => setOpenMenu(l.href)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(l.href)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) setOpenMenu(null)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setOpenMenu(null)
                    e.currentTarget.querySelector('.nav-item-trigger')?.focus()
                  }
                }}
              >
                <button
                  type="button"
                  className="nav-item-trigger"
                  aria-haspopup="true"
                  aria-expanded={openMenu === l.href}
                  onClick={() => setOpenMenu((v) => (v === l.href ? null : l.href))}
                >
                  {l.label}
                  <Caret />
                </button>
                <div className="nav-dropdown" role="menu" aria-label={l.label}>
                  <div className="nav-dropdown-panel">
                    {l.children.map((c) => (
                      <a
                        key={c.href}
                        href={resolveHref(c.href)}
                        className="nav-dropdown-link"
                        role="menuitem"
                        onClick={() => setOpenMenu(null)}
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={l.href}
                href={resolveHref(l.href)}
                aria-current={activeHref === l.href ? 'page' : undefined}
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        {/* RIGHT — CTA + phone */}
        <div className="nav-right">
          {NAV.phone_number && (
            <a
              className="nav-phone"
              href={`tel:${NAV.phone_number.replace(/\s+/g, '')}`}
            >
            </a>
          )}
          <a href={resolveHref(NAV.cta_link)} className="cta-split nav-cta" aria-label={NAV.cta_text}>
            {NAV.cta_text}
            <span className="cta-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            className={`nav-toggle${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET — slide-out drawer */}
      <div
        className={`nav-overlay${open ? ' is-open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        ref={drawerRef}
        className={`nav-drawer${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="nav-drawer-head">
          <a href={resolveHref(NAV.home_link)} className="brand" onClick={close}>
            <img
              className="brand-logo"
              src="/images/htpl-logo.png"
              alt="Hindusthan Technologies Pvt. Ltd."
              width="471"
              height="467"
            />
          </a>
          <button
            type="button"
            className="nav-drawer-close"
            aria-label="Close menu"
            onClick={() => {
              close()
              toggleRef.current?.focus()
            }}
          >
            ×
          </button>
        </div>

        <nav className="nav-drawer-links" aria-label="Mobile">
          {LINKS.map((l) =>
            l.children ? (
              <div key={l.href} className="nav-drawer-group">
                <button
                  type="button"
                  className={`nav-drawer-acc${drawerMenu === l.href ? ' is-open' : ''}`}
                  aria-expanded={drawerMenu === l.href}
                  onClick={() => setDrawerMenu((v) => (v === l.href ? null : l.href))}
                >
                  {l.label}
                  <Caret />
                </button>
                <div
                  className={`nav-drawer-sub${drawerMenu === l.href ? ' is-open' : ''}`}
                >
                  <div className="nav-drawer-sub-inner">
                    {l.children.map((c) => (
                      <a key={c.href} href={resolveHref(c.href)} onClick={close}>
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={l.href} href={resolveHref(l.href)} onClick={close}>
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="nav-drawer-foot">
          <a href={resolveHref(NAV.cta_link)} className="btn btn-primary" onClick={close}>
            {NAV.cta_text} <span className="arrow">→</span>
          </a>
          {NAV.phone_number && (
            <a
              className="nav-drawer-phone"
              href={`tel:${NAV.phone_number.replace(/\s+/g, '')}`}
            >
              {NAV.phone_number}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
