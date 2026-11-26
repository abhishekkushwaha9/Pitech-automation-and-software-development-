import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Footer.css';

const FOOTER_LINKS = {
  solutions: [
    { name: "Digitalization", path: "/industry/digitalization" },
    { name: "OEE Dashboard", path: "/industry/oee" },
    { name: "Digital Andon", path: "/industry/digital-andon" },
    { name: "IIoT Platform", path: "/industry/iiot" },
    { name: "Energy Monitoring", path: "/industry/energy-monitoring" },
    { name: "Production Dashboard", path: "/industry/production-dashboard" },
    { name: "Predictive Maintenance", path: "/industry/predictive-maintenance" },
    { name: "AI based vision solution", path: "/industry/color-detection" },
    { name: "RFID", path: "/industry/rfid" },
    { name: "BLE Tag", path: "/industry/ble-tag" },
  ],
  products: [
    { name: "Pitech Connect", path: "/products/pitech-connect" },
    { name: "Pitech View", path: "/products/pitech-view" },
    { name: "Pitech Web SCADA", path: "/products/web-scada" },
    { name: "intelli AI", path: "/products/intelli-ai" },
    { name: "Pitech EMS", path: "/products/pitech-ems" },
    { name: "AI based vision solution", path: "/products/color-detection" },
    { name: "Sensors", path: "/products/sensor" },
    { name: "PLC", path: "/products/plc" },
    { name: "IoT Gateway", path: "/products/iot-gateway" },
    { name: "RFID", path: "/products/rfid" },
    { name: "HMI", path: "/products/hmi" },
    { name: "BLE Tag", path: "/products/ble-tag" },
  ],

  industries: [
    { name: "Food & Beverages", path: "/industries/food-beverages" },
    { name: "Pharma Industry", path: "/industries/pharma" },
    { name: "Home Appliances", path: "/industries/home-appliances" },
    { name: "EV Manufacturing", path: "/industries/ev-manufacturing" },
    { name: "E-Commerce", path: "/industries/ecommerce" },
    { name: "Metal Industry", path: "/industry-4/metal-industry" },
    { name: "Glass Industry", path: "/industry-4/glass-industry" },
    { name: "Automotive Industry", path: "/industry-4/automotive-industry" },
    { name: "Material Handling", path: "/industry-4/material-handling" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();

  const handleExpertClick = (e) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-wrap">
      {/* ── CTA Banner ── */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <h2>Ready to Transform Your Manufacturing?</h2>
          <p>Let Pi Tech Automation bring Industry 4.0 and SPM Automation solutions to your factory floor.</p>
          <div className="footer-cta-btns">
            <Link 
              to="/contact" 
              className="footer-cta-btn-primary"
              onClick={handleExpertClick}
            >
              Talk to Our Experts
            </Link>
            <Link to="/about/success" className="footer-cta-btn-secondary">See Success Stories</Link>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="footer-body">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <img src="/images/pitech-logo-footer.png" alt="PiTech"
              onError={e => e.target.style.display = 'none'} />
          </div>

          {/* Address & Direct Contact right by Logo */}
          <div className="footer-brand-contact-info">
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <p>628, 6th Floor, Eros Corporate Park, Sector 2, IMT Manesar, Gurugram, Haryana 122052, India</p>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <div className="footer-contact-phones">
                <a href="tel:+917737374330">+91 77373 74330</a>
                <span className="footer-contact-sep">|</span>
                <a href="tel:+919312774178">+91 93127 74178</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <a href="mailto:career@pitechiot.dpdns.org">career@pitechiot.dpdns.org</a>
            </div>
          </div>

          <p className="footer-brand-desc" style={{ color: '#ffffff' }}>
            A complete Industrial Solution provider delivering custom automation,
            machine manufacturing, and premium IIoT technologies to Indian MSMEs
            and large manufacturers.
          </p>

          {/* Social Links Row */}
          <div className="footer-brand-social-row">
            <div className="footer-social-chips">
              <a href="https://www.linkedin.com/company/pitech-automation-and-software-solutions/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-chip in">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                  <rect width="22" height="22" x="1" y="1" rx="4" fill="#0077b5" stroke="#ffffff" strokeWidth="1.2" />
                  <path fill="#ffffff" d="M19 19h-3v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8V19H9.5s.04-10 0-11H12v1.6c.3-.5 1-1.3 2.5-1.3 1.8 0 3.5 1.2 3.5 3.7V19zM6.5 6.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM8 19H5V8h3v11z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/share/1aK9Bu2hdj/" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-chip fb">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10.5" fill="#1877f2" stroke="#ffffff" strokeWidth="1.2" />
                  <path fill="#ffffff" d="M14 13.5h2.3l.4-3H14V8.7c0-.8.2-1.4 1.4-1.4h1.3V4.7c-.5-.1-1.3-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4v2H8v3h2.5V23h3.5v-9.5z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/pitech_automation_software?igsh=MjI2M293YzBuYXJ1" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-social-chip ig">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="footer-ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#footer-ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://wa.me/917737374330" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="footer-social-chip wa">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="footer-subscribe-label" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ color: '#ffffff' }}>Live Platform</span>
            <a 
              href="https://pitechiotdashboard.runasp.net/" 
              target="_blank" 
              rel="noreferrer"
              className="live-iot-badge"
            >
              Live IoT Platform
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div className="footer-col">
          <div className="footer-col-title">Solutions</div>
          <ul>
            {FOOTER_LINKS.solutions.map(item => (
              <li key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="footer-col">
          <div className="footer-col-title">Products</div>
          <ul>
            {FOOTER_LINKS.products.map(item => (
              <li key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div className="footer-col">
          <div className="footer-col-title">Industries</div>
          <ul>
            {FOOTER_LINKS.industries.map(item => (
              <li key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>


      </div>

      {/* ── Divider ── */}
      <div className="footer-divider" />

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {year} Pi-Tech Automation & Software Solutions. All Rights Reserved.
        </p>
        <div className="footer-social">
          {[
            { label: 'fb', title: 'Facebook', href: 'https://www.facebook.com/share/1aK9Bu2hdj/' },
            { label: 'in', title: 'LinkedIn', href: 'https://www.linkedin.com/company/pitech-automation-and-software-solutions/posts/?feedView=all' },
            { label: 'ig', title: 'Instagram', href: 'https://www.instagram.com/pitech_automation_software?igsh=MjI2M293YzBuYXJ1' },
            { label: 'wa', title: 'WhatsApp', href: 'https://wa.me/917737374330' },
          ].map(s => (
            <a key={s.label} href={s.href} className={`footer-social-link social-${s.label}`}
              target="_blank" rel="noreferrer" aria-label={s.title}>
              {s.label === 'fb' && <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>}
              {s.label === 'in' && <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}
              {s.label === 'ig' && <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>}
              {s.label === 'wa' && <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>}
            </a>
          ))}
        </div>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
