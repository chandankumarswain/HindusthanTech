import { useEffect, useState } from 'react'
import Landing from './pages/Landing'
import AboutPage from './pages/AboutPage'
import VisionMission from './pages/VisionMission'
import Infrastructure from './pages/Infrastructure'
import DesignEngineering from './pages/DesignEngineering'
import Registration from './pages/Registration'
import ProductsServicesPage from './pages/ProductsServicesPage'

/* Lightweight pathname router — the Vercel/Vite SPA rewrite serves index.html
   for every path, so a direct hit or refresh on /about renders here too.
   In-page section links keep using native hash anchors (smooth scroll). */
function currentPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

export default function App() {
  const [path, setPath] = useState(currentPath())

  useEffect(() => {
    const onNav = () => setPath(currentPath())
    window.addEventListener('popstate', onNav)
    return () => window.removeEventListener('popstate', onNav)
  }, [])

  /* Cross-page section links (e.g. /about → "/#products", or "/about#company-overview")
     do a full page load, so the browser's native hash jump fires before React has
     painted the target section and it lands at the top. Re-run the scroll once the
     element exists. scroll-padding-top (var(--nav-h)) keeps it below the fixed nav. */
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ''))
    if (!id) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let timer
    let tries = 0
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      } else if (tries++ < 30) {
        timer = window.setTimeout(tryScroll, 80)
      }
    }
    timer = window.setTimeout(tryScroll, 60)
    return () => window.clearTimeout(timer)
  }, [path])

  if (path === '/about') return <AboutPage />
  if (path === '/vision-mission') return <VisionMission />
  if (path === '/infrastructure') return <Infrastructure />
  if (path === '/design-engineering') return <DesignEngineering />
  if (path === '/registration-approvals') return <Registration />
  if (path === '/products-services') return <ProductsServicesPage />
  return <Landing />
}
