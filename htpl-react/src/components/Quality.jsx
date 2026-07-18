const CARDS = [
  {
    title: 'ISO 9001:2015 Aligned',
    desc: 'Quality Management System aligned with international ISO standards for consistent, repeatable manufacturing excellence.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
  },
  {
    title: 'DGQA Approved Manufacturer',
    desc: "Approved by India's Directorate General of Quality Assurance, authorizing supply to defence establishments nationwide.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l2.4 5 5.6.6-4 4 1.2 5.4L12 19l-5.2 3 1.2-5.4-4-4 5.6-.6z"></path>
      </svg>
    ),
  },
  {
    title: 'Z Certification',
    desc: 'Z-certified manufacturer, meeting stringent quality benchmarks for defence and critical infrastructure supply.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9h6l-6 6h6"></path>
      </svg>
    ),
  },
  {
    title: 'CMVR Alignment',
    desc: 'Comprehensive legal engineering alignment with the Central Motor Vehicles Rules (CMVR) standards.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 17l4-3 1.5-7L12 4l3.5 3L17 14l4 3M3 21h18"></path>
      </svg>
    ),
  },
  {
    title: 'Industrial Security',
    desc: 'Mandatory use of safety equipment (PPE) — helmets, safety shoes, gloves, and goggles — across all manufacturing lines.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18h20"></path>
        <path d="M4 18a8 8 0 0 1 16 0"></path>
        <path d="M9 10V7a3 3 0 0 1 6 0v3"></path>
      </svg>
    ),
  },
  {
    title: 'SOP Frameworks',
    desc: 'Standard Operating Procedures for every critical activity, including welding, painting, sheet-metal work, testing, and inspection.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 2v6h6"></path>
        <path d="M9 13h6M9 17h6"></path>
      </svg>
    ),
  },
]

export default function Quality() {
  return (
    <section className="section-pad" id="quality" style={{ background: 'var(--bone-2)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">
            <span className="dot"></span>Quality &amp; safety
          </p>
          <h2 className="display h-sec">
            Our compliance <span className="italic-accent">commitments</span>
          </h2>
        </div>
        <div className="quality-grid">
          {CARDS.map((c) => (
            <div className="q-card reveal" key={c.title}>
              <span className="ic">{c.icon}</span>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
