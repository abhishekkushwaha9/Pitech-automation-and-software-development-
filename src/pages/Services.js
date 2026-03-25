import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";

/* ── Solution Categories Data ── */
const CATEGORIES = [
  {
    title: 'Industry 4.0',
    icon: '🏭',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.08)',
    desc: 'Digitalize your factory floor with smart monitoring, analytics, and connected machines.',
    solutions: [
      { name: 'Digitalization', path: '/industry/digitalization', icon: '📱', desc: 'End-to-end factory digitalization platform' },
      { name: 'OEE Dashboard', path: '/industry/oee', icon: '📊', desc: 'Overall Equipment Effectiveness dashboard' },
      { name: 'Digital Andon', path: '/industry/digital-andon', icon: '🔔', desc: 'Real-time production status alerts' },
      { name: 'Digital Work Instructions', path: '/industry/dwi', icon: '📋', desc: 'Paperless work instruction management' },
      { name: 'IIoT Platform', path: '/industry/iiot', icon: '🌐', desc: 'Industrial Internet of Things connectivity' },
      { name: 'Energy Monitoring', path: '/industry/energy-monitoring', icon: '⚡', desc: 'Real-time energy consumption analytics' },
      { name: 'Production Dashboard', path: '/industry/production-dashboard', icon: '📺', desc: 'Customizable KPI visualization boards' },
      { name: 'Predictive Maintenance', path: '/industry/predictive-maintenance', icon: '🤖', desc: 'AI-driven maintenance scheduling' },
    ],
  },
  {
    title: 'Automation Solutions',
    icon: '⚙️',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    desc: 'Complete automation systems from PLC programming to full SCADA integration.',
    solutions: [
      { name: 'Traceability & SCADA', path: '/solutions/automation/traceability-scada', icon: '🔍', desc: 'End-to-end product traceability' },
      { name: 'PLC / HMI Programming', path: '/solutions/automation/plc', icon: '💻', desc: 'Siemens, Mitsubishi, AB platforms' },
      { name: 'Machine Integration', path: '/solutions/automation/machine-integration', icon: '🔗', desc: 'Multi-protocol machine connectivity' },
    ],
  },
  {
    title: 'Special Purpose Machines',
    icon: '🔬',
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    desc: 'Custom-engineered machines designed for your unique manufacturing requirements.',
    solutions: [
      { name: 'Leak Testing Systems', path: '/solutions/spm/leak-testing', icon: '🔧', desc: 'Precision pneumatic leak detection' },
      { name: 'Assembly Line Machines', path: '/solutions/spm/assembly-line', icon: '🏗️', desc: 'Ergonomic assembly stations & lines' },
      { name: 'Press Machines', path: '/solutions/spm/press-machine', icon: '⬇️', desc: 'Hydraulic & pneumatic press systems' },
    ],
  },
  {
    title: 'Conveyors & Material Handling',
    icon: '📦',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    desc: 'Intelligent conveyor systems for optimized material flow and logistics.',
    solutions: [
      { name: 'Pallet Conveyor', path: '/solutions/convergence/pallet-conveyor', icon: '🔄', desc: 'Heavy-duty pallet transfer systems' },
      { name: 'Assembly Conveyor', path: '/solutions/convergence/assembly-conveyor', icon: '⚡', desc: 'Variable speed assembly lines' },
      { name: 'Belt Conveyors', path: '/solutions/convergence/belt-conveyors', icon: '➡️', desc: 'Flat & inclined belt transport' },
      { name: 'Chain Conveyors', path: '/solutions/convergence/chain-conveyors', icon: '⛓️', desc: 'Heavy load chain drive systems' },
    ],
  },
  {
    title: 'Robotics Integration',
    icon: '🤖',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
    desc: 'End-to-end robotic solutions from integration to inspection and automation.',
    solutions: [
      { name: 'Robotics Overview', path: '/solutions/robotics/overview', icon: '🤖', desc: 'Full robotics capability overview' },
      { name: 'Tool Integration', path: '/solutions/robotics/integration', icon: '🔧', desc: 'Multi-brand robot integration' },
      { name: 'Robotic Inspection', path: '/solutions/robotics/inspection', icon: '👁️', desc: 'Vision-based quality control' },
      { name: 'Pick & Place', path: '/solutions/robotics/pick-and-place', icon: '🦾', desc: 'High-speed pick and place cells' },
    ],
  },
  {
    title: 'Complete Automation Lines',
    icon: '🏭',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    desc: 'Fully integrated end-to-end automation lines designed and built from scratch.',
    solutions: [
      { name: 'Automation Lines', path: '/solutions/automation-lines', icon: '🏭', desc: 'Turnkey complete automation systems' },
    ],
  },
];

const BENEFITS = [
  { icon: '📈', title: 'Proven ROI', desc: 'Average 35-60% efficiency improvement within 6 months of deployment.' },
  { icon: '🛠️', title: 'End-to-End Delivery', desc: 'From design to commissioning — we handle everything in-house.' },
  { icon: '🔧', title: '24/7 Support', desc: 'Round-the-clock remote and on-site support with guaranteed SLAs.' },
  { icon: '🎓', title: 'Operator Training', desc: 'Comprehensive training programs ensuring smooth technology adoption.' },
  { icon: '🔌', title: 'Legacy Integration', desc: 'Seamlessly connect new solutions with existing machines and systems.' },
  { icon: '📊', title: 'Data Analytics', desc: 'Real-time dashboards and reports that drive better decisions.' },
];

export default function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout
      title="Our <span>Solutions</span>"
      subtitle="Comprehensive Industry 4.0 solutions — from IIoT platforms to complete automation lines — designed specifically for Indian manufacturers."
      tag="What We Offer"
      heroImage="/images/1759499868874.jpg"
      breadcrumb={[{ label: 'Solutions' }]}
    >
      {/* ── Solution Categories ── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' }}>
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Full Portfolio</span>
            <h2>Every Solution Your Factory Needs</h2>
            <p>Six comprehensive domains covering every aspect of modern manufacturing automation.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginTop: '64px' }}>
            {CATEGORIES.map((cat, ci) => (
              <div key={ci} className="animate-on-scroll"
                style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--gray-100)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
                {/* Category Header */}
                <div style={{ padding: '32px 36px', borderBottom: '1px solid var(--gray-100)', display: 'flex', alignItems: 'center', gap: '20px', background: cat.bg }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-lg)', background: cat.bg, border: `2px solid ${cat.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0 }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: cat.color, margin: 0 }}>{cat.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--gray-500)', margin: '4px 0 0', lineHeight: 1.6 }}>{cat.desc}</p>
                  </div>
                </div>
                {/* Solutions Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1px', background: 'var(--gray-100)' }}>
                  {cat.solutions.map((sol, si) => (
                    <Link key={si} to={sol.path}
                      style={{ background: 'var(--white)', padding: '20px 24px', textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: '14px', transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = cat.bg}
                      onMouseLeave={e => e.currentTarget.style.background = 'var(--white)'}>
                      <div style={{ fontSize: '1.3rem', marginTop: '2px' }}>{sol.icon}</div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '4px' }}>{sol.name}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>{sol.desc}</div>
                      </div>
                      <span style={{ marginLeft: 'auto', color: 'var(--gray-300)', fontSize: '0.9rem', flexShrink: 0, marginTop: '2px' }}>›</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose PiTech ── */}
      <section className="benefits-section">
        <div className="benefits-inner">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Why PiTech?</span>
            <h2>What Sets Us Apart</h2>
            <p>We don't just sell solutions — we become long-term technology partners in your manufacturing success.</p>
          </div>
          <div className="benefits-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="benefit-card animate-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="benefit-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="related-cta">
        <div className="related-cta-inner">
          <h2>Let's Build Your Solution Together</h2>
          <p>Tell us your manufacturing challenge — we'll design the right automation and digitalization solution for your factory.</p>
          <div className="related-cta-btns">
            <Link to="/contact" className="related-btn-w">Start a Conversation</Link>
            <Link to="/about/success" className="related-btn-o">View Success Stories</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
