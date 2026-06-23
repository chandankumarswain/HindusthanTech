import { useEffect, useState } from 'react'
import Landing from './pages/Landing'
import AboutPage from './pages/AboutPage'
import VisionMission from './pages/VisionMission'
import Infrastructure from './pages/Infrastructure'

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

  if (path === '/about') return <AboutPage />
  if (path === '/vision-mission') return <VisionMission />
  if (path === '/infrastructure') return <Infrastructure />
  return <Landing />
}
