import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import './Navbar.css';

const NAV_DATA = {
  about: [
    { name: "Our Story", path: "/about" },
    { name: "Our Expertise", path: "/about/vision" },
    { name: "Success Stories", path: "/about/success" },
  ],
  solutions: [
    {
      category: "Industry 4.0",
      items: [
        { name: "Digitalization", path: "/industry/digitalization" },
        { name: "OEE Dashboard", path: "/industry/oee" },
        { name: "Digital Andon System", path: "/industry/digital-andon" },
        { name: "Digital Work Instructions", path: "/industry/dwi" },
        { name: "IIoT Platform", path: "/industry/iiot" },
        { name: "Energy Monitoring", path: "/industry/energy-monitoring" },
        { name: "Production Dashboard", path: "/industry/production-dashboard" },
        { name: "Predictive Maintenance", path: "/industry/predictive-maintenance" },
      ],
    },
    {
      category: "Automation",
      items: [
        { name: "Traceability & SCADA", path: "/solutions/automation/traceability-scada" },
        { name: "PLC / HMI Programming", path: "/solutions/automation/plc" },
        { name: "Machine Integration", path: "/solutions/automation/machine-integration" },
      ],
    },
    {
      category: "Special Purpose Machines",
      items: [
        { name: "Leak Testing", path: "/solutions/spm/leak-testing" },
        { name: "Assembly Line", path: "/solutions/spm/assembly-line" },
        { name: "Press Machine", path: "/solutions/spm/press-machine" },
      ],
    },
    {
      category: "Conveyor",
      items: [
        { name: "Pallet Conveyor", path: "/solutions/convergence/pallet-conveyor" },
        { name: "Assembly Conveyor", path: "/solutions/convergence/assembly-conveyor" },
        { name: "Belt Conveyors", path: "/solutions/convergence/belt-conveyors" },
        { name: "Chain Conveyors", path: "/solutions/convergence/chain-conveyors" },
      ],
    },
    {
      category: "Robotics",
      items: [
        { name: "Robotics Overview", path: "/solutions/robotics/overview" },
        { name: "Tool Integration", path: "/solutions/robotics/integration" },
        { name: "Robotic Inspection", path: "/solutions/robotics/inspection" },
        { name: "Pick & Place", path: "/solutions/robotics/pick-and-place" },
      ],
    },
    {
      category: "Automation Lines",
      items: [
        { name: "Complete Automation Lines", path: "/solutions/automation-lines" },
      ],
    },
  ],
  products: [
    { name: "Sensors", path: "/products/sensor" },
    { name: "PLC", path: "/products/plc" },
    { name: "IoT Gateway", path: "/products/iot-gateway" },
    { name: "RFID", path: "/products/rfid" },
    { name: "HMI", path: "/products/hmi" },
    { name: "BLE Tag", path: "/products/ble-tag" },
  ],
  industry: [
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

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close on route change
  useEffect(() => { setActiveMenu(null); setMobileOpen(false); }, [location]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Body scroll lock for mobile
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);


  const openMenu = (key) => {
    if (key !== activeMenu) {
      setActiveMenu(key);
      setActiveCategory(NAV_DATA[key]?.[0]?.category || "");
    }
  };
  const closeMenu = () => setActiveMenu(null);

  const toggleMobileSection = (key) => {
    setMobileExpanded(prev => prev === key ? null : key);
  };

  return (
    <>
      {/* ── Topbar ── */}
      <div className="navbar-topbar">
        <div className="navbar-topbar-inner">
          <div className="navbar-topbar-contact">
            <span>📍 Manesar, Haryana, India</span>
            <a href="tel:+919312774178">📞 +91 93127 74178 </a>
            <a href="tel:+917737374330">📞 +91 77373 74330</a>
            <a href="mailto:info@pitechautomation.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.">✉ info@pitechautomation.com</a>
          </div>
          <div className="navbar-topbar-social">
            <a href="https://www.linkedin.com/company/pitech-automation-and-software-solutions/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0a66c2" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://www.facebook.com/share/1aK9Bu2hdj/" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1877f2" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              Facebook
            </a>
            <a href="https://www.instagram.com/pitech_automation_software?igsh=MjI2M293YzBuYXJ1" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="nav-ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path fill="url(#nav-ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
            <a href="https://wa.me/917737374330" target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#25D366" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav className={`navbar-main${scrolled ? ' scrolled' : ''}`} onMouseLeave={closeMenu}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo-wrap">
            <img src="/images/pitech-logo.png" alt="PiTech" className="navbar-logo"
              onError={e => { e.target.style.display = 'none'; }} />

          </Link>

          {/* Center Nav */}
          <div className="navbar-center">
            <NavLink to="/" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
              onMouseEnter={closeMenu}>
              Home
            </NavLink>
            {['about', 'solutions', 'products', 'industry'].map(key => (
              <button key={key} className={`navbar-link${activeMenu === key ? ' active' : ''}`}
                onMouseEnter={() => openMenu(key)}>
                {key === 'about' ? 'About Us'
                  : key === 'solutions' ? 'Solutions'
                    : key === 'products' ? 'Products'
                      : 'Industries'}
                <span className="navbar-chevron">▾</span>
              </button>
            ))}
            <NavLink to="/contact" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
              onMouseEnter={closeMenu}>
              Contact Us
            </NavLink>
          </div>

          {/* Right Actions */}
          <div className="navbar-actions">

            <a 
              href="https://pitechiotdashboard.runasp.net/" 
              target="_blank" 
              rel="noreferrer"
              className="navbar-btn-live-iot"
            >
              Live IoT Platform
            </a>
            <Link to="/contact" className="navbar-btn-primary">Get a Quote</Link>

            {/* Hamburger */}
            <button className={`navbar-hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* ── Mega Menu ── */}
        {activeMenu && (
          <div className="navbar-mega-wrap" ref={menuRef}>
            <div className="navbar-mega-inner">
              {/* Solutions / About have sidebar + grid */}
              {(activeMenu === 'solutions' || activeMenu === 'about') && (
                <>
                  {activeMenu === 'solutions' && (
                    <>
                      <div className="navbar-mega-sidebar">
                        {NAV_DATA.solutions.map(group => (
                          <button key={group.category}
                            className={`navbar-mega-cat${activeCategory === group.category ? ' active' : ''}`}
                            onMouseEnter={() => setActiveCategory(group.category)}>
                            {group.category}
                            <span className="arrow">›</span>
                          </button>
                        ))}
                      </div>
                      <div className="navbar-mega-content">
                        {activeCategory && (() => {
                          const group = NAV_DATA.solutions.find(g => g.category === activeCategory);
                          return group ? (
                            <>
                              <div className="navbar-mega-content-title">{group.category}</div>
                              <div className="navbar-mega-grid">
                                {group.items.map(item => (
                                  <Link key={item.path} to={item.path} className="navbar-mega-item" onClick={closeMenu}>
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : null;
                        })()}
                      </div>
                    </>
                  )}
                  {activeMenu === 'about' && (
                    <div className="navbar-mega-flat">
                      {NAV_DATA.about.map(item => (
                        <Link key={item.path} to={item.path} className="navbar-mega-item" onClick={closeMenu}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
              {/* Products / Industry: flat grid */}
              {(activeMenu === 'products' || activeMenu === 'industry') && (
                <div className="navbar-mega-flat">
                  {NAV_DATA[activeMenu].map(item => (
                    <Link key={item.path} to={item.path} className="navbar-mega-item" onClick={closeMenu}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <>
          <div className="navbar-backdrop" onClick={() => setMobileOpen(false)} />
          <div className="navbar-drawer">
            <div className="drawer-header">
              <Link to="/" className="navbar-logo-wrap" onClick={() => setMobileOpen(false)}>
                <img src="/images/pitech-logo.png" alt="PiTech" className="navbar-logo"
                  onError={e => { e.target.style.display = 'none'; }} />
              </Link>
              <button className="drawer-close" onClick={() => setMobileOpen(false)}>✕</button>
            </div>

            <nav className="drawer-nav">
              <Link to="/" className="drawer-link active-route" onClick={() => setMobileOpen(false)}>Home</Link>

              {/* About */}
              <button className="drawer-link" onClick={() => toggleMobileSection('about')}>
                About Us
                <span className={`drawer-chevron${mobileExpanded === 'about' ? ' open' : ''}`}>▾</span>
              </button>
              {mobileExpanded === 'about' && (
                <div className="drawer-sub">
                  <div className="drawer-sub-group">
                    {NAV_DATA.about.map(item => (
                      <Link key={item.path} to={item.path} className="drawer-sub-link" onClick={() => setMobileOpen(false)}>{item.name}</Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Solutions */}
              <button className="drawer-link" onClick={() => toggleMobileSection('solutions')}>
                Solutions
                <span className={`drawer-chevron${mobileExpanded === 'solutions' ? ' open' : ''}`}>▾</span>
              </button>
              {mobileExpanded === 'solutions' && (
                <div className="drawer-sub">
                  {NAV_DATA.solutions.map(group => (
                    <div key={group.category} className="drawer-sub-group">
                      <div className="drawer-sub-label">{group.category}</div>
                      {group.items.map(item => (
                        <Link key={item.path} to={item.path} className="drawer-sub-link" onClick={() => setMobileOpen(false)}>{item.name}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Products */}
              <button className="drawer-link" onClick={() => toggleMobileSection('products')}>
                Products
                <span className={`drawer-chevron${mobileExpanded === 'products' ? ' open' : ''}`}>▾</span>
              </button>
              {mobileExpanded === 'products' && (
                <div className="drawer-sub">
                  <div className="drawer-sub-group">
                    {NAV_DATA.products.map(item => (
                      <Link key={item.path} to={item.path} className="drawer-sub-link" onClick={() => setMobileOpen(false)}>{item.name}</Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries */}
              <button className="drawer-link" onClick={() => toggleMobileSection('industry')}>
                Industries
                <span className={`drawer-chevron${mobileExpanded === 'industry' ? ' open' : ''}`}>▾</span>
              </button>
              {mobileExpanded === 'industry' && (
                <div className="drawer-sub">
                  <div className="drawer-sub-group">
                    {NAV_DATA.industry.map(item => (
                      <Link key={item.path} to={item.path} className="drawer-sub-link" onClick={() => setMobileOpen(false)}>{item.name}</Link>
                    ))}
                  </div>
                </div>
              )}

              <Link to="/contact" className="drawer-link" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            </nav>

            <div className="drawer-footer">

              <a href="https://pitechiotdashboard.runasp.net/" target="_blank" rel="noreferrer" className="drawer-btn drawer-btn-live-iot" onClick={() => setMobileOpen(false)}>Live IoT Platform</a>
              <Link to="/contact" className="drawer-btn drawer-btn-primary" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
              <Link to="/signup" className="drawer-btn drawer-btn-secondary" onClick={() => setMobileOpen(false)}>Register / Sign Up</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
