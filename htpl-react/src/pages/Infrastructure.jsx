import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* "Our Infrastructure" page — layout inspired by the supplied reference
   (centred hero + main image · overview with metrics · capability cards).
   Content is demo copy for now. Fonts, colours, gutters (80/50/25) and the
   991/767 breakpoints follow the rest of the site for full design parity. */

const STATS = [
  { n: '38', suf: '+', l: 'Years of excellence' },
  { n: '2000', suf: '+', l: 'Vehicles delivered' },
  { n: '50', suf: '+', l: 'PSU clients' },
  { n: '15', suf: '+', l: 'States served' },
]

const CARDS = [
  {
    cat: 'Factory',
    title: 'Precision Manufacturing Facility',
    desc: 'Our modern production facility is equipped with advanced fabrication equipment and engineering tools that support high-quality manufacturing operations. Designed for efficiency and precision, the facility enables smooth workflow management while maintaining strict quality standards throughout the production process.',
    img: '/images/fleet/fabrication-workshop.jpg',
    alt: 'HTPL precision manufacturing and fabrication floor',
  },
  {
    cat: 'Storage',
    title: 'Organized Inventory Management',
    desc: 'Our dedicated storage facility ensures systematic material handling and efficient inventory control. With structured storage systems and optimized logistics processes, we maintain seamless coordination between procurement, production, and project execution.',
    img: '/images/fleet/htpl-build-rear.jpg',
    alt: 'Organized material storage and inventory area',
  },
  {
    cat: 'Testing',
    title: 'Rigorous Quality Verification',
    desc: 'Every vehicle is validated through a dedicated, in-house testing facility built to IS and DGQA standards. Stage-wise inspection and full documentation ensure each product passes a complete battery of checks before it leaves our facility.',
    img: '/images/fleet/dcp-tender.jpg',
    alt: 'HTPL vehicle undergoing quality testing',
  },
]

export default function Infrastructure() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main className="infra-page">
        {/* ---- Hero (centred) + main image ---- */}
        <section className="infra-hero">
          <div className="ap-shell">
            <p className="ap-crumb reveal">
              <a href="/">Home</a> <span aria-hidden="true">/</span>{' '}
              <a href="/about">About</a> <span aria-hidden="true">/</span>{' '}
              <span className="ap-crumb-current">Our Infrastructure</span>
            </p>
            <h1 className="display infra-hero-title reveal">
              Built to Deliver.
              <br />
              <span className="italic-accent">Engineered for Excellence.</span>
            </h1>
            <p className="lead infra-hero-desc reveal">
              Our infrastructure forms the backbone of our operations, combining advanced
              manufacturing capabilities, organized storage systems, and rigorous quality
              testing facilities. Every aspect of our facility is designed to ensure precision,
              efficiency, and reliability in every project we undertake.
            </p>
            <div className="infra-hero-actions reveal">
              <a href="#overview" className="btn btn-primary">
                Explore Facilities <span className="arrow">→</span>
              </a>
              <a href="/#contact" className="btn btn-ghost">
                Contact Us
              </a>
            </div>
            <figure className="infra-hero-media reveal">
              <img
                src="/images/infrastructure.jpg"
                alt="HTPL manufacturing infrastructure and facilities"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        {/* ---- Infrastructure overview + metrics ---- */}
        <section className="infra-overview" id="overview">
          <div className="ap-shell">
            <p className="eyebrow reveal"><span className="dot"></span>Infrastructure Overview</p>
            <h2 className="display infra-h2 reveal">
              World-Class Facilities Supporting Every Stage of Production
            </h2>
            <p className="infra-text reveal">
              From engineering and fabrication to storage and quality assurance, our integrated
              infrastructure enables seamless project execution. Equipped with modern machinery,
              efficient material handling systems, and comprehensive testing capabilities, our
              facilities are built to meet the highest industry standards while ensuring
              operational excellence.
            </p>
          </div>
        </section>

        {/* ---- Stats band (primary red, centered) ---- */}
        <section className="ap-stats-section">
          <div className="ap-shell">
            <div className="ap-statsband reveal">
              {STATS.map((s) => (
                <div className="ap-sb" key={s.l}>
                  <span className="ap-sb-n">
                    {s.n}
                    <span className="ap-sb-suf">{s.suf}</span>
                  </span>
                  <span className="ap-sb-l">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- What we build ---- */}
        <section className="infra-build">
          <div className="ap-shell">
            <header className="infra-build-head reveal">
              <p className="eyebrow"><span className="dot"></span>Capabilities</p>
              <h2 className="display infra-h2">Infrastructure Designed for Performance</h2>
              <p className="infra-text">
                Our facilities are strategically developed to support efficient manufacturing,
                streamlined inventory management, and stringent quality verification processes,
                ensuring consistent delivery of reliable engineering solutions.
              </p>
            </header>
            <div className="infra-cards">
              {CARDS.map((c) => (
                <article className="infra-card reveal" key={c.cat}>
                  <div className="infra-card-body">
                    <span className="infra-card-cat">{c.cat}</span>
                    <h3 className="infra-card-title">{c.title}</h3>
                    <p className="infra-card-desc">{c.desc}</p>
                    <a href="/#contact" className="infra-card-link">
                      Learn More <span aria-hidden="true">→</span>
                    </a>
                  </div>
                  <figure className="infra-card-media">
                    <img src={c.img} alt={c.alt} loading="lazy" decoding="async" />
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Closing CTA ---- */}
        <section className="ap-cta-wrap">
          <div className="ap-shell ap-cta reveal">
            <h2 className="display ap-h2">Want to see our facilities in action?</h2>
            <div className="ap-cta-actions">
              <a href="/#contact" className="btn btn-primary">
                Get in touch <span className="arrow">→</span>
              </a>
              <a href="/#products" className="btn btn-ghost">
                Explore products
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
