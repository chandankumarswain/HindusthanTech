/* ============================================================================
   Hero — Hindusthan Technologies (firefighting / SPV manufacturer)

   Stack note: this project is Vite + React + Tailwind (NOT Next.js), so the
   brief's `next/image` is implemented with a native <img> carrying the same
   CLS-safe + priority hints (width/height, fetchpriority, decoding, sizes),
   and the requested Framer Motion choreography is done with CSS keyframes
   (zero added JS — better for the Lighthouse 90+ target, and it respects
   prefers-reduced-motion). Colours use the site's existing tokens
   (bone #efece5 / accent #d63924) to stay consistent with the rest of the page.

   Layout system (per the design spec):
   • Section = 90vh, full width, flex-centered.
   • Balanced 50/50 two-column grid at md+ (tablet AND desktop), left = content,
     right = visual. Mobile stacks single-column: CONTENT first, then IMAGE.
   • Padding: 25px mobile · 50px tablet · desktop (top 50 / bottom 80 / x 80).
   • Heading clamp(2.2rem,4vw,4rem); description clamp(0.9rem,1vw,1rem).
   Content, copy, CTAs, image and colours are unchanged — only structure, spacing
   and responsive sizing are refined.
   ========================================================================== */

const HERO = {
  // top eyebrow: the bulleted, bold ISO line only.
  eyebrow: 'AN ISO 9001:2015 CERTIFIED COMPANY',
  // est./location meta — now shown under the description, not in the eyebrow.
  meta: ['EST. 1987', 'JAGATPUR, CUTTACK', 'MAKE IN INDIA'],
  headline_top: 'Engineering of today,',
  headline_accent: 'saving lives of tomorrow.',
  lead:
    "India's trusted manufacturer of firefighting vehicles and special purpose " +
    'vehicles for over three decades — engineered for refineries, ports, defence ' +
    'establishments, and the front line.',
  primary_cta: { label: 'Explore products', href: '#products' },
  // No brochure asset ships with the repo yet — point at contact so the button
  // never 404s. Swap href for the real PDF (e.g. "/HTPL-brochure.pdf") when ready.
  secondary_cta: { label: 'Download brochure', href: '#contact' },
  image: {
    src: '/images/hero-water-tender.webp',
    alt: 'HTPL Ashok Leyland 1920 water tender fire truck',
    width: 1361, // intrinsic px — locks the aspect ratio for the browser
    height: 1015,
  },
  stats: [
    { n: '2000', plus: true, label: 'Vehicles delivered' },
    { n: '38', plus: true, label: 'Years of expertise' },
    { n: '50', plus: true, label: 'PSU clients' },
  ],
}

/* Bold just the certification token inside an eyebrow segment, e.g.
   "AN ISO 9001:2015 CERTIFIED COMPANY" → the "ISO 9001:2015" part renders
   in Source Serif 4 700 while the rest keeps the line's weight. */
const ISO_TOKEN = 'ISO 9001:2015'
function emphasizeIso(seg) {
  if (!seg.includes(ISO_TOKEN)) return seg
  const [before, after] = seg.split(ISO_TOKEN)
  return (
    <>
      {before}
      <strong className="font-bold">{ISO_TOKEN}</strong>
      {after}
    </>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      /* 90vh, full width, centred. min-height (not a hard height) so phones can
         grow past 90vh if stacked content needs it — guarantees no clipping.
         Padding: 25 mobile · 50 tablet · desktop top 50 / bottom 80 / x 80. */
      className="relative w-full bg-bone overflow-hidden
                 flex items-center justify-center
                 min-h-[90vh]
                 px-[25px] py-[25px]
                 md:px-[50px] md:py-[50px]
                 min-[1025px]:px-20 min-[1025px]:pt-[50px] min-[1025px]:pb-20"
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
        Balanced 50/50 grid. Two cells only → clean composition:
          • Mobile (grid-cols-1): DOM order is CONTENT then IMAGE (spec order).
          • md + lg (grid-cols-2): equal halves, vertically centred against
            each other via items-center. Tablet and desktop share the 50/50 split.
      */}
      <div className="w-full grid grid-cols-1 gap-10 min-[1025px]:grid-cols-2 min-[1025px]:items-center min-[1025px]:gap-16">
        {/* ============ LEFT — content (vertically centred; centre-aligned on mobile) ============ */}
        <div className="flex flex-col text-center min-[1025px]:text-left">
          {/* Eyebrow — the bold, bulleted ISO line only. The est./location meta
              now sits under the description below. */}
          <div
            className="htpl-rise flex flex-col gap-y-1.5 items-center min-[1025px]:items-start"
            style={{ animationDelay: '.05s' }}
          >
            <p
              className="flex flex-wrap items-center gap-x-3 gap-y-1
                         justify-center min-[1025px]:justify-start
                         eyebrow-script uppercase text-accent-dk
                         text-xs tracking-[0.18em] sm:text-[13px] font-semibold"
            >
              <span
                className="htpl-dot inline-block h-[7px] w-[7px] rounded-full bg-accent
                           shadow-[0_0_0_4px_rgba(214,57,36,0.12)]"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap">{emphasizeIso(HERO.eyebrow)}</span>
            </p>
          </div>

          {/* Headline — fluid clamp(2.2rem,4vw,4rem), line-height ~1.08. Two block
              spans give the manual line break (italic always on its own line) AND
              separate targets for the per-line stagger (0.1s apart). max-width
              keeps an optimal measure so lines don't break awkwardly. */}
          {/* Mobile: wider measure + smaller fluid size so each phrase stays on a
              single line → the title reads as exactly 2 lines. From sm+ the original
              16ch measure and clamp(2.2rem,4vw,4rem) take over (the designed look). */}
          <h1 className="mt-5 max-w-none sm:max-w-[16ch] mx-auto min-[1025px]:mx-0 font-serif font-normal tracking-[-0.03em] text-ink text-[clamp(1.35rem,6.2vw,2.2rem)] sm:text-[clamp(2.2rem,4vw,4rem)] leading-[1.08]">
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

          {/* Est./location meta — sits directly under the main title. Flex-wrap
              so segments never break mid-word on phones. */}
          <p
            className="htpl-rise mt-4 flex flex-wrap items-center gap-x-3 gap-y-1
                       justify-center min-[1025px]:justify-start
                       eyebrow-script uppercase text-accent-dk
                       text-xs tracking-[0.18em] sm:text-[13px] font-medium"
            style={{ animationDelay: '.3s' }}
          >
            {HERO.meta.map((seg, i) => (
              <span key={seg} className="whitespace-nowrap">
                {seg}
                {i < HERO.meta.length - 1 && (
                  <span className="ml-3 text-accent/50" aria-hidden="true">
                    ·
                  </span>
                )}
              </span>
            ))}
          </p>

          {/* Description — fluid clamp(0.9rem,1vw,1rem). */}
          <p
            className="htpl-rise mt-6 max-w-[54ch] mx-auto min-[1025px]:mx-0 text-ink-2 leading-[1.7]
                       text-[clamp(0.9rem,1vw,1rem)]"
            style={{ animationDelay: '.35s' }}
          >
            {HERO.lead}
          </p>

          {/* CTAs — desktop inline, mobile full-width stacked (gap-3). */}
          <div
            className="htpl-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 min-[1025px]:justify-start"
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

          {/* Statistics (mobile + tablet): all three stats, horizontal snap-scroll.
              The same figures float as cards on the image at lg+, so this keeps the
              proof points in the content area below lg without crowding the truck. */}
          {/* 3 stats fit the width in an equal 3-column grid (no scroll) below lg */}
          <div
            className="mt-7 grid grid-cols-3 gap-2.5 min-[1025px]:hidden"
            role="list"
            aria-label="Key facts"
          >
            {HERO.stats.map((s) => (
              <StatCard key={s.label} stat={s} role="listitem" className="flex" />
            ))}
          </div>
        </div>

        {/* ============ RIGHT — visual (vertically centred) ============ */}
        <div
          className="htpl-img-in relative w-full self-center
                     aspect-[4/3] min-[1025px]:aspect-[5/4]"
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

          {/* Floating stat cards only at lg+. Below lg the half-width image column
              is too narrow for cards to sit without covering the truck/windshield,
              so tablet + mobile use the in-content stat rail instead. */}
          {/* TOP-LEFT, kept high in the empty area above the cab → clear of the windshield. */}
          <StatCard
            className="hidden min-[1025px]:flex absolute top-1 left-0 z-20"
            stat={HERO.stats[0]}
          />
          {/* BOTTOM-RIGHT, inset inside the box (never a negative offset) → never clipped. */}
          <StatCard
            className="hidden min-[1025px]:flex absolute bottom-2 right-0 z-20"
            stat={HERO.stats[1]}
          />
        </div>
      </div>
    </section>
  )
}

/* Reusable stat card — used both as the floating desktop badges and as the
   items in the mobile/tablet scroll rail, so the two stay visually identical. */
function StatCard({ stat, className = '', role }) {
  return (
    <div
      role={role}
      className={
        'flex-col rounded-[14px] border border-[rgba(24,24,26,0.06)] bg-paper ' +
        'px-3 py-2.5 sm:px-[18px] sm:py-[13px] shadow-[0_18px_40px_rgba(20,20,20,0.10)] ' +
        className
      }
    >
      <div className="font-serif text-[clamp(1.5rem,5vw,2.5rem)] leading-none tracking-[-0.02em] text-ink">
        {stat.n}
        {stat.plus && <span className="text-accent">+</span>}
      </div>
      <div className="mt-1.5 text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.08em] text-muted">
        {stat.label}
      </div>
    </div>
  )
}
