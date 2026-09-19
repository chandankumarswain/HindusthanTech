/* "What we serve" — two rows. Row 1 is the centred section heading (eyebrow +
   display title + lead, identical to "Manufacturing process"). Row 2 is the
   compact sector-card grid. Cards reuse the Quality Management Framework
   card shell (.qmf-card) minus the icon, so the two sections still read as
   one system while staying short. */

/* em = the keyword set in the serif/accent treatment; rest = the remainder.
   href targets the matching sector card in the Clients section (id="client-<slug>",
   see Clients.jsx). Airports & Aviation has no card of its own — Airports Authority
   of India sits under Defence & Aerospace, so it links there. */
const SECTORS = [
  { tag: 'Petrochemical', em: 'Oil, Gas', rest: ' & Refineries', href: '#client-oil-gas', desc: 'High-capacity fire tenders for IOCL, BPCL and petrochemical plants.' },
  { tag: 'Coastal', em: 'Ports', rest: ' & Maritime', href: '#client-ports-maritime', desc: 'Rapid-response vehicles for coastal facilities and port authorities.' },
  { tag: 'DGQA approved', em: 'Defence', rest: ' & Aerospace', href: '#client-defence-aerospace', desc: 'DGQA-approved builds trusted by the Indian Navy and ISRO.' },
  { tag: 'Heavy industry', em: 'Steel', rest: ' & Power', href: '#client-steel-power', desc: 'Fire safety fleets for SAIL, NTPC and thermal & steel plant sites.' },
  { tag: 'Airside', em: 'Airports', rest: ' & Aviation', href: '#client-defence-aerospace', desc: 'Crash fire tenders engineered for airside emergency response.' },
  { tag: 'Plants & estates', em: 'Industrial', rest: ' & Manufacturing', href: '#client-industrial-manufacturing', desc: 'Special purpose vehicles for plants, estates and refineries.' },
  { tag: 'Process plants', em: 'Fertilizers', rest: ' & Chemicals', href: '#client-fertilizer-chemicals', desc: 'Foam and DCP tenders for IFFCO, FACT and chemical process plants.' },
  { tag: 'Mining', em: 'Mines', rest: ' & Minerals', href: '#client-mines-minerals', desc: 'Rugged tenders and water bowsers for NALCO and open-cast mining sites.' },
  { tag: 'Infrastructure', em: 'Construction', rest: '', href: '#client-construction', desc: 'Fire and rescue vehicles for large infrastructure and project sites.' },
  { tag: 'Institutions', em: 'Education', rest: ' & Healthcare', href: '#client-education-healthcare', desc: 'Compact, quick-response tenders for campuses and hospital complexes.' },
  { tag: 'Rail', em: 'Indian', rest: ' Railways', href: '#client-indian-railways', desc: 'Rescue and fire-fighting vehicles for railway yards and workshops.' },
  { tag: 'Repeat orders', em: 'State', rest: ' Fire Services', href: '#client-state-fire-services', desc: 'Repeat-order fleets for twelve state fire services across India.' },
]

export default function Serve() {
  return (
    <section className="about2 serve-section" id="serve">
      <div className="about2-shell">
        <div className="about2-industries">
          <div className="serve-stack">
            {/* row 1 — centred heading, same treatment as "Manufacturing process" */}
            <div className="sec-head center reveal">
              <p className="eyebrow">
                <span className="dot"></span>What we serve
              </p>
              <h2 className="display h-sec">
                Built for critical <span className="italic-accent">industries</span>
              </h2>
              <p className="lead">
                Purpose-built fleets, trusted across India&rsquo;s most critical sectors.
              </p>
            </div>

            {/* row 2 — compact sector cards (no icons) */}
            <ul className="serve-grid">
              {SECTORS.map((s) => (
                <li key={s.em + s.rest}>
                  <a className="qmf-card serve-sector reveal" href={s.href}>
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
