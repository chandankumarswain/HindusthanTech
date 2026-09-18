// Client logos grouped into sector cards (no duplicates across groups).
// Each card gets id="client-<slug of heading>" so the "Built for critical industries"
// sector cards (Serve.jsx) can deep-link straight to it.
// Groups with `wide: true` span the full grid width so large logo sets stay compact.
const GROUPS = [
  {
    heading: 'State Fire Services',
    wide: true,
    clients: [
      'Odisha Fire Service', 'WB Fire Service', 'Tamil Nadu Fire Service', 'UP Fire Service',
      'Chhattisgarh Fire Service', 'Delhi Fire Service', 'Jharkhand Fire Service', 'Assam Fire Service',
      'Mizoram Fire Service', 'Tripura Fire Service', 'Manipur Fire Service', 'Arunachal Pradesh Fire Service',
    ],
  },
  {
    heading: 'Defence & Aerospace',
    clients: ['Indian Navy', 'Indian Air Force', 'DRDO', 'HAL', 'ISRO', 'Ordnance Factories', 'DRDL', 'RAW', 'Airports Authority of India'],
  },
  {
    heading: 'Oil & Gas',
    clients: ['IOCL', 'BPCL', 'HPCL', 'ONGC', 'GAIL', 'MRPL', 'NRL', 'Oil India', 'GeoEnpro'],
  },
  {
    heading: 'Steel & Power',
    wide: true,
    clients: [
      'NTPC', 'BHEL', 'SAIL', 'NSPCL', 'NPCIL', 'RINL', 'Tata Steel', 'NHPC',
      'BRBCL', 'OPGC', 'DVC', 'THDC', 'DAE', 'Aarti', 'JSPL', 'Jindal Stainless', 'NINL',
    ],
  },
  {
    heading: 'Mines & Minerals',
    wide: true,
    clients: [
      'Coal India', 'MCL', 'SECL', 'NCL', 'ECL', 'BCCL', 'WCL', 'IMFA', 'NALCO', 'Aditya Birla EMIL',
      'Bhubaneswari Coal Mining', 'KIOCL', 'MOIL', 'OMC', 'MGM Minerals', 'NMDC',
    ],
  },
  {
    heading: 'Ports & Maritime',
    clients: ['Paradip Port Authority', 'SMP Kolkata', 'Goa Shipyard', 'Cochin Shipyard'],
  },
  {
    heading: 'Industrial & Manufacturing',
    clients: ['ACC', 'Dalmia Bharat Cement', 'Rashmi Group', 'Hyundai', 'TRL Krosaki', 'JK Paper'],
  },
  {
    heading: 'Fertilizer & Chemicals',
    clients: ['IFFCO', 'Paradeep Phosphates', 'FACT', 'NFL Bathinda'],
  },
  {
    heading: 'Construction',
    clients: ['L&T Construction', 'NCC'],
  },
  {
    heading: 'Indian Railways',
    clients: ['Southern Railway', 'East Coast Railway'],
  },
  {
    heading: 'Education & Healthcare',
    clients: ['National Fire Service College', 'KIMS Bhubaneswar'],
  },
]

// client name -> processed transparent logo (in /public/images/clients/<slug>.png).
// Every client maps to its official logo. Non-alphanumerics (spaces, "&") become "-".
const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const NO_LOGO = new Set()

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
            HTPL serves Steel &amp; Power, Defence &amp; Aerospace, Oil &amp; Gas, Mines &amp; Minerals,
            Fertilizer &amp; Chemicals, Industry &amp; Manufacturing, Education, Indian Railways,
            Infrastructure &amp; Construction, Ports &amp; Maritime and Twelve State Fire Services
            sectors. Twelve state fire services have placed repeat orders — a testament to our quality
            of manufacturing and the trust of our customers.
          </p>
        </div>
        <div className="clients-groups">
          {GROUPS.map((g) => (
            <div
              className={`client-group reveal${g.wide ? ' wide' : ''}`}
              id={`client-${slugify(g.heading)}`}
              key={g.heading}
            >
              <div className="gh">
                <span className="bar"></span>
                {g.heading}
              </div>
              <div className="client-list">
                {g.clients.map((c) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
