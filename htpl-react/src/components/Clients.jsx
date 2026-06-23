// Every client logo, shown once, in a single unified grid (no category groups).
const CLIENTS = [
  'Indian Navy', 'Indian Air Force', 'DRDO', 'HAL', 'ISRO', 'Ordnance Factories',
  'IOCL', 'BPCL', 'HPCL', 'ONGC', 'GAIL', 'MRPL', 'NRL',
  'NTPC', 'BHEL', 'SAIL', 'NSPCL', 'NPCIL', 'RINL', 'Tata Steel', 'NHPC',
  'IFFCO', 'Paradeep Phosphates', 'FACT', 'NFL Bathinda', 'Odisha Fire Service', 'WB Fire Service',
]

// client name -> processed transparent logo (in /public/images/clients/<slug>.png).
// The supplied "NRL" file was the wrong entity (Australian rugby league, not
// Numaligarh Refinery Ltd), so NRL falls back to a clean text wordmark until a
// correct logo is provided. Every other client maps to its official logo.
const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-')
const NO_LOGO = new Set(['NRL'])

export default function Clients() {
  return (
    <section className="clients section-pad" id="clients">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">
            <span className="dot"></span>Trusted partners
          </p>
          <h2 className="display h-sec">
            Trusted across <span className="italic-accent">strategic sectors</span>
          </h2>
          <p className="lead">
            HTPL serves State Fire Services, Steel &amp; Power, Defence, Oil &amp; Gas, Space, and
            Fertilizer sectors. Twelve state fire services have placed repeat orders — a testament
            to our quality of manufacturing and the trust of our customers.
          </p>
        </div>
        <div className="clients-all reveal">
          <div className="client-list">
            {CLIENTS.map((c) => (
              <span key={c} className="client-logo-box" title={c}>
                {NO_LOGO.has(c) ? (
                  <span className="client-wordmark">{c}</span>
                ) : (
                  <img
                    className="client-logo"
                    src={`/images/clients/${slugify(c)}.png`}
                    alt={c}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
