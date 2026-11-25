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
        { name: "AI based vision solution", path: "/industry/color-detection" },
        { name: "BLE Tag (Bluetooth Low Energy)", path: "/industry/ble-tag" },
        { name: "RFID (Radio Frequency Identification)", path: "/industry/rfid" },
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
      category: "SPM Automation",
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
    { name: "Pitech Connect", path: "/products/pitech-connect" },
    { name: "Pitech EMS (Energy Monitoring System)", path: "/products/pitech-ems" },
    { name: "AI based vision solution", path: "/products/color-detection" },
    { name: "Sensors", path: "/products/sensor" },
    { name: "PLC", path: "/products/plc" },
    { name: "IoT Gateway", path: "/products/iot-gateway" },
    { name: "RFID (Radio Frequency Identification)", path: "/products/rfid" },
    { name: "HMI", path: "/products/hmi" },
    { name: "BLE Tag (Bluetooth Low Energy)", path: "/products/ble-tag" },
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
      {/* ── Main Navbar ── */}
      <nav className={`navbar-main${scrolled ? ' scrolled' : ''}`} onMouseLeave={closeMenu}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo-wrap">
            <img src="/images/pitech-logo.jpeg" alt="PiTech" className="navbar-logo"
              onError={e => { e.target.style.display = 'none'; }} />

          </Link>

          {/* Center Nav */}
          <div className="navbar-center">
            <NavLink to="/" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
              onMouseEnter={closeMenu}>
              Home
            </NavLink>
            {['about', 'solutions', 'products', 'industry'].map(key => {
              const label = key === 'about' ? 'About Us'
                : key === 'solutions' ? 'Solutions'
                  : key === 'products' ? 'Products'
                    : 'Industry 4.0';

              // We check if the current path starts with any of the sub-paths to keep the "active" highlight
              const isChildActive = NAV_DATA[key]?.some(item =>
                item.path === location.pathname ||
                (item.items && item.items.some(sub => sub.path === location.pathname))
              ) || (key === 'solutions' && NAV_DATA.solutions.some(group => group.items.some(sub => sub.path === location.pathname)));

              return (
                <div
                  key={key}
                  className={`navbar-link-container`}
                  onMouseEnter={() => openMenu(key)}
                >
                  <button
                    type="button"
                    className={`navbar-link ${activeMenu === key || isChildActive ? 'active' : ''}`}
                  >
                    {label}
                    <span className="navbar-chevron">▾</span>
                  </button>
                </div>
              );
            })}
            <NavLink to="/blogs" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
              onMouseEnter={closeMenu}>
              Blogs
            </NavLink>
            <NavLink to="/careers" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
              onMouseEnter={closeMenu}>
              Careers
            </NavLink>
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
                <img src="/images/pitech-logo.jpeg" alt="PiTech" className="navbar-logo"
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
                Industry 4.0
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

              <Link to="/blogs" className="drawer-link" onClick={() => setMobileOpen(false)}>Blogs</Link>
              <Link to="/careers" className="drawer-link" onClick={() => setMobileOpen(false)}>Careers</Link>
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
