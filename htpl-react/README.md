# HTPL — Landing Page (React + Tailwind)

The Hindusthan Technologies Pvt. Ltd. landing page, converted from a single
standalone HTML file into a Vite + React + Tailwind CSS project. The layout and
visual design are **identical** to the original — the original bespoke
stylesheet is preserved verbatim in [`src/index.css`](src/index.css) as the
design source of truth, and its tokens (colors, fonts) are mirrored into the
Tailwind theme in [`tailwind.config.js`](tailwind.config.js).

## Getting started

```bash
npm install
npm run dev      # starts Vite dev server on http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
htpl-react/
├─ index.html               # HTML shell + Google Fonts links + #root mount
├─ vite.config.js           # Vite + React plugin config (port 5173)
├─ tailwind.config.js       # Tailwind theme mapped to HTPL design tokens
├─ postcss.config.js        # Tailwind + autoprefixer
├─ public/
│  └─ images/               # 4 extracted product/vehicle photos (PNG)
└─ src/
   ├─ main.jsx              # React entry point
   ├─ App.jsx               # composes all page sections
   ├─ index.css             # Tailwind directives + original design stylesheet
   ├─ hooks/
   │  └─ useScrollReveal.js # IntersectionObserver scroll-reveal (from source)
   └─ components/           # one component per page section
      ├─ Nav.jsx
      ├─ Hero.jsx
      ├─ StatsBar.jsx
      ├─ About.jsx
      ├─ Products.jsx
      ├─ Gallery.jsx
      ├─ Technology.jsx
      ├─ Process.jsx
      ├─ Quality.jsx
      ├─ Clients.jsx
      ├─ Commitment.jsx
      ├─ CtaBand.jsx
      ├─ Contact.jsx
      └─ Footer.jsx
```

## Notes

- **Fonts:** the original embedded the woff2 files inline; here the same three
  Google Fonts families (Source Serif 4, Space Grotesk, JetBrains Mono) are
  loaded from the Google Fonts CDN — visually identical.
- **Images:** the 4 PNGs that were base64-embedded in the source bundle were
  extracted to `public/images/`.
