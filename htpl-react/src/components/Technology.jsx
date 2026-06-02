const CELLS = [
  {
    title: 'CAD / 3D Design',
    desc: 'SolidWorks & AutoCAD for precision 2D/3D engineering design.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <path d="M3 9h18M9 21V9"></path>
      </svg>
    ),
  },
  {
    title: 'CNC Machining',
    desc: 'CNC cutting, turning & machining for superior dimensional accuracy.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"></path>
      </svg>
    ),
  },
  {
    title: 'MIG & TIG Welding',
    desc: 'Advanced certified welding practices for structural integrity.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 21l9-9M14 10l7-7M11 7l3 3M8 13l-3 3v3h3l3-3"></path>
      </svg>
    ),
  },
  {
    title: 'Hydraulic & Pneumatic',
    desc: 'Precision hydraulic & pneumatic systems for heavy-duty fabrication.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 3v6a4 4 0 0 0 8 0V3M9 13v8M5 21h8"></path>
        <circle cx="18" cy="7" r="3"></circle>
      </svg>
    ),
  },
  {
    title: 'ERP Monitoring',
    desc: 'ERP-based digital production tracking & quality assurance systems.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="12" rx="1.5"></rect>
        <path d="M8 20h8M12 16v4M7 9l2.5 2.5L15 7"></path>
      </svg>
    ),
  },
  {
    title: 'Paint Booth + Baking',
    desc: 'Advanced paint booth with baking facility for a durable finish.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 20v-7l8-9 8 9v7M9 20v-5h6v5"></path>
      </svg>
    ),
  },
  {
    title: 'Fire Systems Integration',
    desc: 'Fire pump, monitor & foam system integration with CG analysis.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3c-1 4-4 5-4 9a4 4 0 0 0 8 0c0-2-1-3-2-4 0 1.5-1 2-2 2 .5-3 0-5 0-7z"></path>
      </svg>
    ),
  },
  {
    title: 'Quality Inspection',
    desc: 'Stage-wise QC inspection with full traceability and documentation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="11" r="7"></circle>
        <path d="M21 21l-4.3-4.3M8 11l2 2 3.5-3.5"></path>
      </svg>
    ),
  },
  {
    title: 'Pressure Vessel Design',
    desc: 'Fabrication of DCP systems, tanks & pressure vessels to spec.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="6" y="3" width="12" height="18" rx="3"></rect>
        <path d="M6 8h12M6 16h12"></path>
      </svg>
    ),
  },
]

export default function Technology() {
  return (
    <section className="tech section-pad" id="technology">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow on-dark">
            <span className="dot"></span>Our capabilities
          </p>
          <h2 className="display h-sec">
            Technology &amp; <span className="italic-accent">innovation</span>
          </h2>
          <p className="lead">
            State-of-the-art manufacturing infrastructure combining precision engineering with
            modern digital systems.
          </p>
        </div>
        <div className="tech-grid">
          {CELLS.map((c) => (
            <div className="tech-cell reveal" key={c.title}>
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
