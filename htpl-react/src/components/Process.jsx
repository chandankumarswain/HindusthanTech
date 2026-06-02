const STEPS = [
  { num: '01', title: 'Design', sub: 'CAD / 3D' },
  { num: '02', title: 'Material Check', sub: 'QC Verify' },
  { num: '03', title: 'Fabrication', sub: 'CNC / Cutting' },
  { num: '04', title: 'Assembly', sub: 'Welding / Fit', noArrow: true },
  { num: '05', title: 'Painting', sub: 'Blast + Coat' },
  { num: '06', title: 'Electrical', sub: 'Wiring / Panel' },
  { num: '07', title: 'Testing', sub: 'QA / Trial' },
  { num: '08', title: 'Delivery', sub: 'Dispatch', noArrow: true },
]

export default function Process() {
  return (
    <section className="section-pad" id="process">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">
            <span className="dot"></span>How we work
          </p>
          <h2 className="display h-sec">
            Manufacturing <span className="italic-accent">process</span>
          </h2>
          <p className="lead">
            Every vehicle goes through a rigorous 8-stage production workflow ensuring quality,
            safety, and on-time delivery.
          </p>
        </div>
        <div className="process-steps">
          {STEPS.map((s) => (
            <div className={`step reveal${s.noArrow ? ' no-arrow' : ''}`} key={s.num}>
              <div className="num">{s.num}</div>
              <h4>{s.title}</h4>
              <div className="sub">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="process-quality reveal">
          <div>
            <h3>Uncompromising quality standards</h3>
            <p>
              Our quality management system ensures every vehicle that leaves our facility is
              built to the highest standards of safety, reliability and compliance.
            </p>
          </div>
          <div className="cert-row">
            <span className="cert-chip">
              <span className="tick">✓</span> ISO 9001:2015
            </span>
            <span className="cert-chip">
              <span className="tick">✓</span> DGQA Approved
            </span>
            <span className="cert-chip">
              <span className="tick">✓</span> Z Certified
            </span>
            <span className="cert-chip">
              <span className="tick">✓</span> CMVR Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
