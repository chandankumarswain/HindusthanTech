export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="brand">
              <span className="brand-mark">H</span>
              <span className="brand-text" style={{ color: 'var(--bone)' }}>
                Hindusthan<span style={{ color: 'rgba(239,236,229,0.55)' }}>Technologies</span>
              </span>
            </a>
            <p className="footer-about">
              Manufacturers of firefighting vehicles and special purpose vehicles since 1987.
              Trusted by India's leading PSUs, defence establishments, and industrial giants.
            </p>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#about">About HTPL</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#process">Manufacturing</a></li>
              <li><a href="#quality">Quality</a></li>
              <li><a href="#clients">Clientele</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              <li><a href="#products">Firefighting Trucks</a></li>
              <li><a href="#products">Trailer &amp; Portable Pumps</a></li>
              <li><a href="#products">Quick Response Vehicles</a></li>
              <li><a href="#products">Diesel Bowser &amp; Oil Tanker</a></li>
              <li><a href="#products">MOSRU / Explosive Van</a></li>
              <li><a href="#products">Blood Donation Van</a></li>
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h5>Contact Info</h5>
            <div>Plot No. 5 &amp; 7, Old Industrial Estate, Jagatpur, Cuttack – 754021, Odisha</div>
            <div>+91 94396 95804</div>
            <div>admin@hindusthantechnologies.com</div>
            <div>www.htpl.co.in</div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Hindusthan Technologies Pvt. Ltd. All rights reserved.</span>
          <div className="footer-certs">
            <span>MSME</span>
            <span>DGQA</span>
            <span>Z CERT</span>
            <span>ISO 9001</span>
            <span>CMVR</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
