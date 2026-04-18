import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThreeFloatingShapes from "../components/ThreeFloatingShapes";
import "./Services.css";

/* ── SVG Icon Components ── */
const Icons = {
  Factory: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M2 20V8l6 4V8l6 4V4h6v16H2z" />
      <path d="M18 10h2v4h-2" />
      <path d="M18 16h2v4h-2" />
    </svg>
  ),
  Cog: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  Microscope: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 100-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 01-2-2V6a1 1 0 011-1h4a1 1 0 011 1v4a2 2 0 01-2 2" />
      <path d="M9 10h6" />
    </svg>
  ),
  Package: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M16.5 9.4l-9-5.19" />
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  ),
  Bot: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M9 22V18h6v4" />
      <circle cx="9" cy="13" r="1.5" fill="currentColor" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" />
      <path d="M12 2v4" />
      <path d="M8 2h8" />
    </svg>
  ),
  Layers: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-sm">
      <path d="M9 18l6-6-6-6" />
    </svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-sm">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  Chart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  ),
  Wrench: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  Plug: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M12 22v-5" />
      <path d="M9 7V2" />
      <path d="M6 22V7a4 4 0 014-4h4a4 4 0 014 4v15" />
      <path d="M15 22V7" />
    </svg>
  ),
  BarChart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <rect x="3" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="8" width="4" height="12" rx="1" />
      <rect x="17" y="4" width="4" height="16" rx="1" />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  GraduationCap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M22 10l-10-5L2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  ),
  Wifi: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      <path d="M5 12.55a11 11 0 0114.08 0" />
      <path d="M1.42 9a16 16 0 0121.16 0" />
      <path d="M8.53 16.11a6 6 0 016.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  ),
};

/* ── Solution Categories Data ── */
const CATEGORIES = [
  {
    title: "Industry 4.0",
    icon: <Icons.Factory />,
    color: "#0d9488",
    accent: "#14b8a6",
    bg: "linear-gradient(135deg, rgba(13,148,136,0.06), rgba(20,184,166,0.02))",
    desc: "Digitalize your factory floor with smart monitoring, analytics, and connected machines.",
    solutions: [
      { name: "Digitalization", path: "/industry/digitalization", desc: "End-to-end factory digitalization platform", icon: <Icons.Layers /> },
      { name: "OEE Dashboard", path: "/industry/oee", desc: "Overall Equipment Effectiveness dashboard", icon: <Icons.BarChart /> },
      { name: "Digital Andon", path: "/industry/digital-andon", desc: "Real-time production status alerts", icon: <Icons.Shield /> },
      { name: "Digital Work Instructions", path: "/industry/dwi", desc: "Paperless work instruction management", icon: <Icons.Chart /> },
      { name: "IIoT Platform", path: "/industry/iiot", desc: "Industrial Internet of Things connectivity", icon: <Icons.Wifi /> },
      { name: "Energy Monitoring", path: "/industry/energy-monitoring", desc: "Real-time energy consumption analytics", icon: <Icons.BarChart /> },
      { name: "Production Dashboard", path: "/industry/production-dashboard", desc: "Customizable KPI visualization boards", icon: <Icons.Chart /> },
      { name: "Predictive Maintenance", path: "/industry/predictive-maintenance", desc: "AI-driven maintenance scheduling", icon: <Icons.Cog /> },
    ],
  },
  {
    title: "Automation Solutions",
    icon: <Icons.Cog />,
    color: "#7c3aed",
    accent: "#8b5cf6",
    bg: "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(139,92,246,0.02))",
    desc: "Complete automation systems from PLC programming to full SCADA integration.",
    solutions: [
      { name: "Traceability & SCADA", path: "/solutions/automation/traceability-scada", desc: "End-to-end product traceability", icon: <Icons.Shield /> },
      { name: "PLC / HMI Programming", path: "/solutions/automation/plc", desc: "Siemens, Mitsubishi, AB platforms", icon: <Icons.Layers /> },
      { name: "Machine Integration", path: "/solutions/automation/machine-integration", desc: "Multi-protocol machine connectivity", icon: <Icons.Plug /> },
    ],
  },
  {
    title: "Special Purpose Machines",
    icon: <Icons.Microscope />,
    color: "#059669",
    accent: "#10b981",
    bg: "linear-gradient(135deg, rgba(5,150,105,0.06), rgba(16,185,129,0.02))",
    desc: "Custom-engineered machines designed for your unique manufacturing requirements.",
    solutions: [
      { name: "Leak Testing Systems", path: "/solutions/spm/leak-testing", desc: "Precision pneumatic leak detection", icon: <Icons.Wrench /> },
      { name: "Assembly Line Machines", path: "/solutions/spm/assembly-line", desc: "Ergonomic assembly stations & lines", icon: <Icons.Factory /> },
      { name: "Press Machines", path: "/solutions/spm/press-machine", desc: "Hydraulic & pneumatic press systems", icon: <Icons.Cog /> },
    ],
  },
  {
    title: "Conveyors & Material Handling",
    icon: <Icons.Package />,
    color: "#d97706",
    accent: "#f59e0b",
    bg: "linear-gradient(135deg, rgba(217,119,6,0.06), rgba(245,158,11,0.02))",
    desc: "Intelligent conveyor systems for optimized material flow and logistics.",
    solutions: [
      { name: "Pallet Conveyor", path: "/solutions/convergence/pallet-conveyor", desc: "Heavy-duty pallet transfer systems", icon: <Icons.Package /> },
      { name: "Assembly Conveyor", path: "/solutions/convergence/assembly-conveyor", desc: "Variable speed assembly lines", icon: <Icons.Layers /> },
      { name: "Belt Conveyors", path: "/solutions/convergence/belt-conveyors", desc: "Flat & inclined belt transport", icon: <Icons.Layers /> },
      { name: "Chain Conveyors", path: "/solutions/convergence/chain-conveyors", desc: "Heavy load chain drive systems", icon: <Icons.Plug /> },
    ],
  },
  {
    title: "Robotics Integration",
    icon: <Icons.Bot />,
    color: "#dc2626",
    accent: "#ef4444",
    bg: "linear-gradient(135deg, rgba(220,38,38,0.06), rgba(239,68,68,0.02))",
    desc: "End-to-end robotic solutions from integration to inspection and automation.",
    solutions: [
      { name: "Robotics Overview", path: "/solutions/robotics/overview", desc: "Full robotics capability overview", icon: <Icons.Bot /> },
      { name: "Tool Integration", path: "/solutions/robotics/integration", desc: "Multi-brand robot integration", icon: <Icons.Wrench /> },
      { name: "Robotic Inspection", path: "/solutions/robotics/inspection", desc: "Vision-based quality control", icon: <Icons.Shield /> },
      { name: "Pick & Place", path: "/solutions/robotics/pick-and-place", desc: "High-speed pick and place cells", icon: <Icons.Cog /> },
    ],
  },
  {
    title: "Complete Automation Lines",
    icon: <Icons.Layers />,
    color: "#4f46e5",
    accent: "#6366f1",
    bg: "linear-gradient(135deg, rgba(79,70,229,0.06), rgba(99,102,241,0.02))",
    desc: "Fully integrated end-to-end automation lines designed and built from scratch.",
    solutions: [
      { name: "Automation Lines", path: "/solutions/automation-lines", desc: "Turnkey complete automation systems", icon: <Icons.Factory /> },
    ],
  },
];

const BENEFITS = [
  { icon: <Icons.Chart />, title: "Proven ROI", desc: "Average 35–60% efficiency improvement within 6 months of deployment." },
  { icon: <Icons.Wrench />, title: "End-to-End Delivery", desc: "From design to commissioning — we handle everything in-house." },
  { icon: <Icons.Shield />, title: "24/7 Support", desc: "Round-the-clock remote and on-site support with guaranteed SLAs." },
  { icon: <Icons.GraduationCap />, title: "Operator Training", desc: "Comprehensive training programs ensuring smooth technology adoption." },
  { icon: <Icons.Plug />, title: "Legacy Integration", desc: "Seamlessly connect new solutions with existing machines and systems." },
  { icon: <Icons.BarChart />, title: "Data Analytics", desc: "Real-time dashboards and reports that drive better decisions." },
];

/* ── Category Card ── */
function CategoryCard({ cat, index }) {
  const [expanded, setExpanded] = useState(false);
  const limit = 4;
  const hasMore = cat.solutions.length > limit;
  const visibleSolutions = expanded ? cat.solutions : cat.solutions.slice(0, limit);

  return (
    <div className="cat-card" style={{ animationDelay: `${index * 0.08}s` }}>
      {/* Corner accents */}
      <div className="corner-tl" style={{ background: cat.color }} />
      <div className="corner-br" style={{ background: cat.accent }} />

      {/* Header */}
      <div className="cat-header" style={{ background: cat.bg }}>
        <div className="cat-icon-box" style={{ color: cat.color, borderColor: cat.color }}>
          {cat.icon}
        </div>
        <div>
          <h3 className="cat-title" style={{ color: cat.color }}>{cat.title}</h3>
          <p className="cat-desc">{cat.desc}</p>
        </div>
      </div>

      {/* Solutions */}
      <div className="cat-solutions">
        {visibleSolutions.map((sol, si) => (
          <Link
            key={si}
            to={sol.path || "#"}
            className="sol-item"
            style={{ "--accent": cat.color }}
          >
            <div className="sol-icon" style={{ color: cat.color }}>
              {sol.icon}
            </div>
            <div className="sol-text">
              <span className="sol-name">{sol.name}</span>
              <span className="sol-desc">{sol.desc}</span>
            </div>
            <div className="sol-arrow">
              <Icons.ChevronRight />
            </div>
          </Link>
        ))}
      </div>

      {/* Toggle */}
      {hasMore && (
        <button
          className="cat-toggle"
          onClick={() => setExpanded(!expanded)}
          style={{ color: cat.color }}
        >
          {expanded ? (
            <>Show Less <Icons.ChevronDown /></>
          ) : (
            <>+{cat.solutions.length - limit} More Solutions <Icons.ChevronDown /></>
          )}
        </button>
      )}
    </div>
  );
}

/* ── Benefit Card ── */
function BenefitCard({ benefit, index }) {
  return (
    <div className="benefit-card" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="benefit-icon">{benefit.icon}</div>
      <h4 className="benefit-title">{benefit.title}</h4>
      <p className="benefit-desc">{benefit.desc}</p>
    </div>
  );
}

/* ── Main Page ── */
export default function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".anim").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-root">
      {/* ── HERO ── */}
      <header className="hero">
        <ThreeFloatingShapes />
        <div className="hero-content">
          <div className="section-tag anim">
            What We Offer
          </div>
          <h1 className="hero-title anim">
            Our Solutions
          </h1>
          <p className="hero-subtitle anim">
            Comprehensive Industry 4.0 solutions — from IIoT platforms to complete automation lines — designed specifically for Indian manufacturers.
          </p>
        </div>
      </header>

      {/* ── DIVIDER ── */}
      <div className="divider-wrap">
        <div className="divider" />
      </div>

      {/* ── SOLUTIONS GRID ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header anim">
            <span className="section-tag">Full Portfolio</span>
            <h2 className="section-title">Every Solution Your Factory Needs</h2>
            <p className="section-subtitle">Six comprehensive domains covering every aspect of modern manufacturing automation.</p>
          </div>

          <div className="grid-2">
            {CATEGORIES.map((cat, i) => (
              <CategoryCard key={i} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="divider-wrap">
        <div className="divider" />
      </div>

      {/* ── WHY PITECH ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header anim">
            <span className="section-tag">Why PiTech?</span>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-subtitle">We don't just sell solutions — we become long-term technology partners in your manufacturing success.</p>
          </div>

          <div className="grid-3">
            {BENEFITS.map((b, i) => (
              <BenefitCard key={i} benefit={b} index={i} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
