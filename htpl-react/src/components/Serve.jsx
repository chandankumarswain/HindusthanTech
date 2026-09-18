/* "What we serve" — 2 rows × 1 column: a single full-width fleet image on top,
   the sector cards underneath. Cards reuse the Quality Management Framework
   icon-card design (.qmf-card: red circular icon, mono tag, serif-italic +
   grotesk title, centred copy) so the two sections read as one system. */

const ICON = {
  drop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.7s-6 6.3-6 10.8a6 6 0 0 0 12 0C18 9 12 2.7 12 2.7z" />
    </svg>
  ),
  anchor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  plane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-6 4V8l-6 4V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
      <path d="M17 18h1M12 18h1M7 18h1" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v7.5L4.6 19a2 2 0 0 0 1.7 3h11.4a2 2 0 0 0 1.7-3L14 9.5V2" />
      <path d="M8.5 2h7M7 16h10" />
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  ),
  hardhat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" />
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.5-1.4 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .9-4.5 3-1.5-2.1-2.7-3-4.5-3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.1 3 5.5l7 7z" />
      <path d="M3.2 12H9l1.5-3 3 6 1.5-3h5.8" />
    </svg>
  ),
  train: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
      <path d="m9 15-1-1M15 15l1-1" />
      <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
      <path d="m8 19-2 3M16 19l2 3" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  ),
}

/* em = the keyword set in the serif/accent treatment; rest = the remainder.
   href targets the matching sector card in the Clients section (id="client-<slug>",
   see Clients.jsx). Airports & Aviation has no card of its own — Airports Authority
   of India sits under Defence & Aerospace, so it links there. */
const SECTORS = [
  { tag: 'Petrochemical', em: 'Oil, Gas', rest: ' & Refineries', icon: ICON.drop, href: '#client-oil-gas', desc: 'High-capacity fire tenders for IOCL, BPCL and petrochemical plants.' },
  { tag: 'Coastal', em: 'Ports', rest: ' & Maritime', icon: ICON.anchor, href: '#client-ports-maritime', desc: 'Rapid-response vehicles for coastal facilities and port authorities.' },
  { tag: 'DGQA approved', em: 'Defence', rest: ' & Aerospace', icon: ICON.shield, href: '#client-defence-aerospace', desc: 'DGQA-approved builds trusted by the Indian Navy and ISRO.' },
  { tag: 'Heavy industry', em: 'Steel', rest: ' & Power', icon: ICON.bolt, href: '#client-steel-power', desc: 'Fire safety fleets for SAIL, NTPC and thermal & steel plant sites.' },
  { tag: 'Airside', em: 'Airports', rest: ' & Aviation', icon: ICON.plane, href: '#client-defence-aerospace', desc: 'Crash fire tenders engineered for airside emergency response.' },
  { tag: 'Plants & estates', em: 'Industrial', rest: ' & Manufacturing', icon: ICON.factory, href: '#client-industrial-manufacturing', desc: 'Special purpose vehicles for plants, estates and refineries.' },
  { tag: 'Process plants', em: 'Fertilizers', rest: ' & Chemicals', icon: ICON.flask, href: '#client-fertilizer-chemicals', desc: 'Foam and DCP tenders for IFFCO, FACT and chemical process plants.' },
  { tag: 'Mining', em: 'Mines', rest: ' & Minerals', icon: ICON.mountain, href: '#client-mines-minerals', desc: 'Rugged tenders and water bowsers for NALCO and open-cast mining sites.' },
  { tag: 'Infrastructure', em: 'Construction', rest: '', icon: ICON.hardhat, href: '#client-construction', desc: 'Fire and rescue vehicles for large infrastructure and project sites.' },
  { tag: 'Institutions', em: 'Education', rest: ' & Healthcare', icon: ICON.pulse, href: '#client-education-healthcare', desc: 'Compact, quick-response tenders for campuses and hospital complexes.' },
  { tag: 'Rail', em: 'Indian', rest: ' Railways', icon: ICON.train, href: '#client-indian-railways', desc: 'Rescue and fire-fighting vehicles for railway yards and workshops.' },
  { tag: 'Repeat orders', em: 'State', rest: ' Fire Services', icon: ICON.flame, href: '#client-state-fire-services', desc: 'Repeat-order fleets for twelve state fire services across India.' },
]

export default function Serve() {
  return (
    <section className="about2 serve-section" id="serve">
      <div className="about2-shell">
        <div className="about2-industries">
          <div className="serve-stack">
            {/* heading */}
            <div className="sec-head center serve-head reveal">
              <p className="eyebrow">
                <span className="dot"></span>What we serve
              </p>
              <h3 className="display about2-subhead">Built for critical industries</h3>
              <p className="serve-note">
                Purpose-built fleets, trusted across India&rsquo;s most critical sectors.
              </p>
            </div>

            {/* row 1 — single full-width image */}
            <figure className="serve-hero reveal">
              <img
                src="/images/fleet/dcp-tender.jpg"
                alt="HTPL DCP fire tender built for a thermal power station fire wing"
                loading="lazy"
                decoding="async"
              />
            </figure>

            {/* row 2 — sector cards */}
            <ul className="serve-grid">
              {SECTORS.map((s) => (
                <li key={s.em + s.rest}>
                  <a className="qmf-card serve-sector reveal" href={s.href}>
                    <span className="qmf-card-ic" aria-hidden="true">{s.icon}</span>
                    <span className="qmf-card-body">
                      <span className="qmf-card-tag">{s.tag}</span>
                      <span className="qmf-card-title">
                        <em>{s.em}</em>
                        {s.rest}
                      </span>
                      <span className="qmf-card-desc">{s.desc}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="serve-link-row reveal">
              <a href="#clients" className="about2-link">
                Know our clients <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
