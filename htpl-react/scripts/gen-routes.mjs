// Post-build: give every client-side route a real folder on disk.
//
// The site uses a pathname router (src/App.jsx reads window.location.pathname).
// On a static host with no SPA rewrite, a direct hit / refresh on /about would
// 404 because no file exists there. So for each route we create dist/<route>/
// index.html as a copy of the app shell — Apache then serves a real file at
// every path and React renders the right page.
//
// Routes are parsed from App.jsx (the `path === '/xxx'` checks), so adding a
// page there is all that's needed — this stays in sync automatically.

import { readFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const shell = join(dist, 'index.html')

if (!existsSync(shell)) {
  console.error('[gen-routes] dist/index.html not found — run the build first.')
  process.exit(1)
}

const app = readFileSync(join(root, 'src', 'App.jsx'), 'utf8')
const routes = [...app.matchAll(/path\s*===\s*['"]\/([^'"]+)['"]/g)].map((m) => m[1])

if (routes.length === 0) {
  console.warn('[gen-routes] no routes found in App.jsx — nothing to do.')
  process.exit(0)
}

for (const route of routes) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(shell, join(dir, 'index.html'))
}

console.log(`[gen-routes] created ${routes.length} route folder(s): ${routes.join(', ')}`)
