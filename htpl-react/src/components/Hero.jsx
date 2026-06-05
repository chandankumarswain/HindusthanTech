/* ============================================================================
   Hero — Hindusthan Technologies (firefighting / SPV manufacturer)

   Stack note: this project is Vite + React + Tailwind (NOT Next.js), so the
   brief's `next/image` is implemented with a native <img> carrying the same
   CLS-safe + priority hints (width/height, fetchpriority, decoding, sizes),
   and the requested Framer Motion choreography is done with CSS keyframes
   (zero added JS — better for the Lighthouse 90+ target, and it respects
   prefers-reduced-motion). Colours use the site's existing tokens
   (bone #efece5 / accent #d63924) to stay consistent with the rest of the page.

   The whole file is self-contained: markup + a scoped <style> for the
   keyframes that Tailwind utilities can't express (ken-burns, dot pulse,
   staggered line rise).
   ========================================================================== */

const HERO = {
  eyebrow: ['EST. 1987', 'JAGATPUR, CUTTACK', 'MAKE IN INDIA'],
  headline_top: 'When seconds decide outcomes,',
  headline_accent: 'we build the truck.',
  lead:
    "India's trusted manufacturer of firefighting vehicles and special purpose " +
    'vehicles for over three decades — engineered for refineries, ports, defence ' +
    'establishments, and the front line.',
  trusted_by: ['ISRO', 'INDIAN NAVY', 'NTPC'],
  primary_cta: { label: 'Explore products', href: '#products' },
  // No brochure asset ships with the repo yet — point at contact so the button
  // never 404s. Swap href for the real PDF (e.g. "/HTPL-brochure.pdf") when ready.
  secondary_cta: { label: 'Download brochure', href: '#contact' },
  image: {
    src: '/images/hero-fire-tender.png',
    alt: 'HTPL Ashok Leyland multipurpose fire tender',
    width: 1536, // intrinsic px — locks the aspect ratio for the browser
    height: 1024,
  },
  stats: [
    { n: '38', plus: true, label: 'Years building' },
    { n: '500', plus: true, label: 'Vehicles delivered' },
    { n: 'ISO', plus: false, label: 'Certified · 9001:2015' },
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      /* Padding system (brief): 25px mobile → 50px tablet (md) → 80px desktop (lg).
         Min-height: none on phones (content dictates), ~viewport minus the nav
         on tablet/desktop. */
      className="relative w-full bg-bone overflow-hidden
                 px-[25px] py-[25px]
                 md:px-[50px] md:py-[50px]
                 lg:px-20 lg:py-20
                 min-h-0 md:min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-80px)]
                 flex items-center"
    >
      {/* Scoped keyframes (single-file requirement). Names are namespaced so they
          never collide with the legacy hero animations still in index.css. */}
      <style>{`
        @keyframes htplRise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
        @keyframes htplImgIn { from { opacity: 0; transform: scale(.98); } to { opacity: 1; transform: none; } }
        @keyframes htplKen  { from { transform: scale(1); } to { transform: scale(1.05); } }
        @keyframes htplDot  { 0%, 100% { opacity: 1; } 50% { opacity: .4; } }
        .htpl-rise   { animation: htplRise .7s cubic-bezier(.2,.8,.2,1) both; }
        .htpl-img-in { animation: htplImgIn .8s cubic-bezier(.2,.8,.2,1) both .4s; }
        .htpl-ken    { animation: htplKen 20s ease-in-out infinite alternate; }
        .htpl-dot    { animation: htplDot 2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .htpl-rise, .htpl-img-in, .htpl-ken, .htpl-dot { animation: none !important; }
        }
        /* hide scrollbar on the mobile stat rail without losing scroll */
        .htpl-noscroll { -ms-overflow-style: none; scrollbar-width: none; }
        .htpl-noscroll::-webkit-scrollbar { display: none; }
      `}</style>

      {/*
        12-column grid. The mobile reading order (HEADLINE → image → copy/CTA) is
        different from the desktop two-column split, so the hero is built as THREE
        grid blocks rather than two monolithic columns:
          A = eyebrow + headline   B = image   C = copy + CTAs
        • Mobile (grid-cols-1): blocks flow in DOM order A, B, C  → exactly the
          headline-first order the brief wants.
        • md/lg: A is row 1 / C is row 2 in the LEFT column, while B (image) is
          placed in the RIGHT column spanning BOTH rows and vertically centred.
        gap-x is the column gutter (brief: 16 / 10); gap-y is tightened so the
        headline and the copy below it keep a natural rhythm, not a 64px chasm.
      */}
      <div
        className="w-full grid grid-cols-1 gap-8
                   md:grid-cols-12 md:gap-x-10 md:gap-y-6 md:items-center
                   lg:gap-x-16 lg:gap-y-8"
      >
        {/* ---- BLOCK A : eyebrow + headline ---- */}
        <div className="md:col-span-7 md:col-start-1 md:row-start-1 lg:col-span-6">
          {/* Eyebrow — flex-wrap so the three segments never break mid-word on
              narrow phones; shrinks to text-xs on mobile. */}
          <p
            className="htpl-rise flex flex-wrap items-center gap-x-3 gap-y-1
                       font-mono uppercase text-accent-dk font-medium
                       text-xs tracking-[0.18em] sm:text-[13px]"
            style={{ animationDelay: '.05s' }}
          >
            <span
              className="htpl-dot inline-block h-[7px] w-[7px] rounded-full bg-accent
                         shadow-[0_0_0_4px_rgba(214,57,36,0.12)]"
              aria-hidden="true"
            />
            {HERO.eyebrow.map((seg, i) => (
              <span key={seg} className="whitespace-nowrap">
                {seg}
                {i < HERO.eyebrow.length - 1 && (
                  <span className="ml-3 text-accent/50" aria-hidden="true">
                    ·
                  </span>
                )}
              </span>
            ))}
          </p>

          {/* Headline — fluid clamp + 1.05 line-height. Two block spans give the
              manual line break (italic always on its own line) AND separate
              targets for the per-line stagger (0.1s apart). */}
          <h1 className="mt-5 font-serif font-normal tracking-[-0.03em] text-ink text-[clamp(2.25rem,6vw,5.5rem)] leading-[1.05]">
            <span className="htpl-rise block" style={{ animationDelay: '.15s' }}>
              {HERO.headline_top}
            </span>
            <span
              className="htpl-rise block italic text-accent"
              style={{ animationDelay: '.25s' }}
            >
              {HERO.headline_accent}
            </span>
          </h1>
        </div>

        {/* ---- BLOCK B : image on the cream page (no card) ---- */}
        <div
          className="htpl-img-in relative self-center w-full
                     aspect-[4/3] md:aspect-[5/4]
                     md:col-span-5 md:col-start-8 md:row-start-1 md:row-span-2
                     lg:col-span-6 lg:col-start-7"
        >
          {/* Depth layer: faint diagonal red gradient + dot-grid (~6% opacity max)
              so it adds texture without competing with the truck. */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #d63924 0%, transparent 55%), ' +
                'radial-gradient(rgba(24,24,26,0.9) 1px, transparent 1.4px)',
              backgroundSize: '100% 100%, 22px 22px',
            }}
          />
          {/* Soft radial "ground" shadow under the wheels — replaces the hard card
              edge so the truck reads as sitting on the cream. */}
          <div
            className="pointer-events-none absolute inset-x-[8%] bottom-[10%] h-[14%]
                       rounded-[50%] blur-xl"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(closest-side, rgba(20,20,20,0.28), transparent)',
            }}
          />

          {/* The truck. Transparent PNG → object-contain keeps the whole vehicle
              visible on the cream (object-cover would crop a product shot).
              width/height + fixed aspect container = reserved space → CLS 0.
              fetchpriority/eager/decoding mirror next/image `priority`. */}
          <img
            src={HERO.image.src}
            alt={HERO.image.alt}
            width={HERO.image.width}
            height={HERO.image.height}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="htpl-ken relative z-10 h-full w-full object-contain
                       drop-shadow-[0_24px_30px_rgba(20,20,20,0.18)]"
          />

          {/* Floating stats only at lg+. Below lg the image column is too narrow
              (col-span-5) for cards to sit without covering the truck/windshield,
              so tablet + mobile use the horizontal stat rail instead (Block C). */}
          {/* TOP-LEFT, kept high in the empty area above the cab → clear of the windshield. */}
          <StatCard
            className="hidden lg:flex absolute top-1 left-0 z-20"
            stat={HERO.stats[0]}
          />
          {/* BOTTOM-RIGHT, inset inside the box (never a negative offset) → never clipped. */}
          <StatCard
            className="hidden lg:flex absolute bottom-2 right-0 z-20"
            stat={HERO.stats[1]}
          />
        </div>

        {/* ---- BLOCK C : lead + credibility pill + CTAs + mobile stat rail ---- */}
        <div className="md:col-span-7 md:col-start-1 md:row-start-2 lg:col-span-6">
          <p
            className="htpl-rise max-w-[600px] text-ink-2 leading-[1.7]
                       text-[clamp(1rem,0.5rem+1vw,1.375rem)]"
            style={{ animationDelay: '.35s' }}
          >
            {HERO.lead}
          </p>

          {/* Credibility pill — thin red top border, small-caps, tracked. */}
          <div
            className="htpl-rise mt-7 inline-flex items-center gap-2 border-t-2 border-accent
                       pt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-2"
            style={{ animationDelay: '.42s' }}
          >
            <span className="text-muted">Trusted by</span>
            {HERO.trusted_by.map((c) => (
              <span key={c} className="flex items-center gap-2">
                <span className="text-accent/40" aria-hidden="true">
                  ·
                </span>
                {c}
              </span>
            ))}
          </div>

          {/* CTAs — desktop inline, mobile full-width stacked (gap-3). */}
          <div
            className="htpl-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: '.5s' }}
          >
            <a
              href={HERO.primary_cta.href}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full
                         bg-accent px-7 py-[15px] text-[15px] font-semibold text-white
                         shadow-[0_10px_24px_rgba(214,57,36,0.28)]
                         transition hover:-translate-y-0.5 hover:bg-accent-dk
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {HERO.primary_cta.label}
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
            <a
              href={HERO.secondary_cta.href}
              className="inline-flex items-center justify-center gap-2.5 rounded-full
                         border border-[rgba(24,24,26,0.18)] bg-transparent px-7 py-[15px]
                         text-[15px] font-semibold text-ink transition
                         hover:-translate-y-0.5 hover:border-ink
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {HERO.secondary_cta.label}
            </a>
          </div>

          {/* Stat rail (mobile + tablet): all three stats, horizontal snap-scroll.
              The floating cards only appear at lg+, so this keeps the proof points
              visible below lg without crowding the narrower truck. */}
          <div
            className="htpl-noscroll mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto
                       pb-1 lg:hidden"
            role="list"
            aria-label="Key facts"
          >
            {HERO.stats.map((s) => (
              <StatCard
                key={s.label}
                stat={s}
                role="listitem"
                className="flex shrink-0 snap-start"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* Reusable stat card — used both as the floating desktop badges and as the
   items in the mobile scroll rail, so the two stay visually identical. */
function StatCard({ stat, className = '', role }) {
  return (
    <div
      role={role}
      className={
        'flex-col rounded-[14px] border border-[rgba(24,24,26,0.06)] bg-paper ' +
        'px-[18px] py-[13px] shadow-[0_18px_40px_rgba(20,20,20,0.10)] ' +
        className
      }
    >
      <div className="font-serif text-[clamp(1.4rem,1rem+1.5vw,2.5rem)] leading-none tracking-[-0.02em] text-ink">
        {stat.n}
        {stat.plus && <span className="text-accent">+</span>}
      </div>
      <div className="mt-1.5 text-[10.5px] font-semibold uppercase tracking-[0.09em] text-muted">
        {stat.label}
      </div>
    </div>
  )
}
