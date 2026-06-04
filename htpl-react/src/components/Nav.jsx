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
  cta_text: 'Get a Quote',
  cta_link: '#contact',
  aria_label: 'HTPL home',
}

const LINKS = [
  { label: 'Home', href: NAV.home_link },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: NAV.products_link },
  { label: 'Gallery', href: NAV.gallery_link },
  { label: 'Technology', href: NAV.technology_link },
  { label: 'Clients', href: NAV.clients_link },
  { label: 'Contact Us', href: NAV.contact_link },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const drawerRef = useRef(null)
  const toggleRef = useRef(null)

  const close = useCallback(() => setOpen(false), [])

  /* On non-home pages (e.g. /about), section anchors must point back to the
     landing page: "#products" → "/#products". On home they stay native hashes. */
  const onHome = (window.location.pathname.replace(/\/+$/, '') || '/') === '/'
  const resolveHref = (href) => (href.startsWith('#') && !onHome ? `/${href}` : href)

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
            alt=""
            aria-hidden="true"
            width="46"
            height="46"
          />
          <span className="brand-text">
            {NAV.brand_name[0]}
            <span>{NAV.brand_name[1]}</span>
          </span>
        </a>

        {/* CENTER — primary navigation */}
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={resolveHref(l.href)}>
              {l.label}
            </a>
          ))}
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
              alt=""
              aria-hidden="true"
              width="46"
              height="46"
            />
            <span className="brand-text">
              {NAV.brand_name[0]}
              <span>{NAV.brand_name[1]}</span>
            </span>
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
          {LINKS.map((l) => (
            <a key={l.href} href={resolveHref(l.href)} onClick={close}>
              {l.label}
            </a>
          ))}
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
