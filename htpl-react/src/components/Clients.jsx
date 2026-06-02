const GROUPS = [
  {
    heading: 'Defence & Space',
    clients: ['Indian Navy', 'Air Force', 'DRDO', 'HAL', 'ISRO'],
  },
  {
    heading: 'Oil & Gas',
    clients: ['IOCL', 'BPCL', 'HPCL', 'ONGC', 'GAIL', 'MRPL'],
  },
  {
    heading: 'Steel & Power',
    clients: ['NTPC', 'BHEL', 'SAIL', 'NSPCL', 'NPCIL', 'RINL'],
  },
  {
    heading: 'Fertilizer & State Fire Service',
    clients: [
      'IFFCO',
      'Paradeep Phosphate',
      'FACT',
      'NFL Bhatinda',
      'Odisha Fire Service',
      'WB Fire Service',
    ],
  },
]

export default function Clients() {
  return (
    <section className="clients section-pad" id="clients">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">
            <span className="dot"></span>Trusted partners
          </p>
          <h2 className="display h-sec">
            Our esteemed <span className="italic-accent">clientele</span>
          </h2>
          <p className="lead">
            Serving India's most critical industries — from petroleum giants to space research
            and national defence.
          </p>
        </div>
        <div className="clients-groups">
          {GROUPS.map((g) => (
            <div className="client-group reveal" key={g.heading}>
              <div className="gh">
                <span className="bar"></span>
                {g.heading}
              </div>
              <div className="client-list">
                {g.clients.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
