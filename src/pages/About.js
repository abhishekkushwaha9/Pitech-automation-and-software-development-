import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";

/* ── Data ── */
const STATS = [
  { num: '25+', label: 'Expert Engineers' },
  { num: '120+', label: 'Projects Delivered' },
  { num: '80+', label: 'Enterprise Clients' },
  { num: '24/7', label: 'Technical Support' },
];

const VALUES = [
  { icon: '💡', title: 'Innovation', desc: 'Continuously developing cutting-edge technologies and solutions to stay ahead of industrial evolution.' },
  { icon: '⭐', title: 'Quality', desc: 'Ensuring the highest standards in every product, software, and service we deliver to our clients.' },
  { icon: '🤝', title: 'Customer Focus', desc: 'Prioritizing client needs with exceptional service, dedicated support, and tailored solutions.' },
  { icon: '🔒', title: 'Integrity', desc: 'Maintaining transparency, accountability, and ethical practices in all our business relationships.' },
];

const SUCCESS_STORIES = [
  {
    id: 2, cat: 'Automation', color: '#7c3aed', catBg: 'rgba(124,58,237,0.1)',
    title: 'Traceability & SCADA', // Renamed from Assembly Line Traceability
    desc: 'Product traceability and process monitoring with automated data collection and validation checkpoints.',
    img: '/images/trace_pv.jpeg',
  },
  {
    id: 3, cat: 'Monitoring', color: '#059669', catBg: 'rgba(5,150,105,0.1)',
    title: 'Digital Andon for Automotive',
    desc: 'Production monitoring system that provides immediate line-side alerts to technicians to reduce downtime.',
    img: '/images/Ditial andon.jpg',
  },
  {
    id: 4, cat: 'Energy', color: '#f59e0b', catBg: 'rgba(245,158,11,0.1)',
    title: 'Energy Monitoring System',
    desc: 'Continuous monitoring of plant energy consumption, load patterns, and power quality parameters.',
    img: '/images/Energy%20Monitoring%20.png',
  },

  {
    id: 7, cat: 'Industry 4.0', color: '#3b82f6', catBg: 'rgba(59,130,246,0.1)',
    title: 'DWI (Digital Work Instruction)',
    desc: 'Electronic work instruction platform providing step-by-step guidance to assembly operators for improved process consistency.',
    img: '/images/1763185884948.jpg',
  },

  {
    id: 9, cat: 'Production', color: '#8b5cf6', catBg: 'rgba(139,92,246,0.1)',
    title: 'Smart Parallel Assembly System',
    desc: 'Control system that manages and synchronizes parallel production stations to balance assembly workflows.',
    img: '/images/Traceability998.jpeg',
  },
  {
    id: 10, cat: 'Management', color: '#f97316', catBg: 'rgba(249,115,22,0.1)',
    title: 'Robot Access Control Management System',
    desc: 'Access control management for robotic cells, managing operator authentication and monitoring equipment intervention.',
    img: '/images/development.jpeg',
  },
  {
    id: 11, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'Shop Floor Dashboard',
    desc: 'Centralized display of machine status, operational shifts, and production metrics across the manufacturing floor.',
    img: '/images/Screenshot 2026-04-08 112752.png',
  },
  {
    id: 12, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'Injection Molding Dashboard',
    desc: 'Visualization of key molding process parameters such as cycle times, cavity temperatures, and mold stroke counts.',
    img: '/images/Injection molding_   .png',
  },
  {
    id: 13, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'CNC Machine Dashboard',
    desc: 'Monitoring interface tracking CNC spindle speeds, axis loads, tool lifespans, and machine fault codes.',
    img: '/images/CNC.png',
  },
  {
    id: 14, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'Press Shop Dashboard',
    desc: 'Tracking of press stroke rates, cumulative tonnage, and production tallies for daily shift management.',
    img: '/images/Press Shop.png',
  },
  {
    id: 15, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'Assembly Line Dashboard',
    desc: 'Display of station takt times, line bottlenecks, and output rates for assembly process tracking.',
    img: '/images/Assembly line dashboard.png',
  },
  {
    id: 16, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'Quality Management',
    desc: 'Platform for logging quality defects, managing inspection checklists, and storing audit records.',
    img: '/images/Quality Management .png',
  },
  {
    id: 17, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'Predictive Maintenance',
    desc: 'Condition-based monitoring using vibration and temperature sensors to schedule proactive equipment maintenance.',
    img: '/images/Predictive maintenance.png',
  },
  {
    id: 18, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'Production Planning',
    desc: 'System for scheduling production orders, managing bill of materials (BOM), and tracking work-in-progress (WIP).',
    img: '/images/Production Planning.png',
  },
  {
    id: 19, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'Plant Utility Monitoring',
    desc: 'Tracking of facility utilities including compressed air pressure, chilled water flow, and ambient temperatures.',
    img: '/images/Plant Utilities.png',
  },
  {
    id: 20, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'Mold & Die Management',
    desc: 'Management system tracking tooling life cycles, stroke counts, and physical storage locations for molds and dies.',
    img: '/images/Mold Die management.png',
  },
  {
    id: 21, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'Warehouse Management',
    desc: 'Inventory tracking system utilizing barcode scanners to manage raw material storage and finished goods dispatch.',
    img: '/images/WMS pro.png',
  },
  {
    id: 22, cat: 'Live Now', color: '#10b981', catBg: 'rgba(16,185,129,0.1)',
    title: 'IoT Architecture & Data Flow',
    desc: 'Visualization of network topology, PLC connection statuses, and MQTT data payloads across the factory.',
    img: '/images/Iot Architecture & data flow .png',
  }
];

function useScrollFade() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function About() {
  useScrollFade();

  return (
    <>
      {/* ── Page Hero ── */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/1759499868874.jpg')" }} />
        <div className="page-hero-gradient" />
        <div className="page-hero-inner">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>About Us</span>
          </div>
          <span className="page-hero-tag">Our Story</span>
          <h1>About <span>PiTech</span> Automation</h1>
          <p>India's trusted partner in industrial automation and Industry 4.0 transformation — powering manufacturing excellence.</p>
        </div>
        <div className="page-hero-wave">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60 L0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* ── Story Section ── */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-imgs animate-on-scroll">

            <div className="about-story-img-main">
              <img src="/images/1759499897557.jpg" alt="PiTech Automation Team" />
            </div>
            <div className="about-story-img-sm">
              <img src="/images/1763185884948.jpg" alt="Factory Floor" />
            </div>
          </div>

          <div className="about-story-text animate-on-scroll">
            <span className="section-tag">Who We Are</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '20px', marginTop: '12px' }}>
              A Decade of Manufacturing <span style={{ color: 'var(--primary-light)' }}>Experience</span>
            </h2>
            <p>
              PiTech Automation & Software Solutions was established with a clear mission: bring world-class Industry 4.0 technologies to Indian manufacturers. Based in Manesar, Haryana, the heart of India's industrial corridor, we serve clients across automotive, steel, glass, and material handling sectors.

            </p>
            <p>
              From our first PLC integration project to delivering complete smart factory solutions for large
              enterprises, we have consistently delivered measurable results — improving efficiency, reducing
              downtime, and enabling data-driven decision making for over 100 clients.
            </p>
            <div className="about-list">
              {[
                'Certified experts in Siemens, Allen-Bradley, and Mitsubishi automation platforms',
                'Full-stack capability: hardware supply, software development, and deployment',
                'Proven track record across automotive, steel, glass, and FMCG industries',
                '24/7 on-site and remote support with guaranteed SLA compliance',
              ].map((item, i) => (
                <div key={i} className="about-list-item">
                  <div className="about-list-check">✓</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="about-stats">
        <div className="about-stats-inner">
          {STATS.map((s, i) => (
            <div key={i} className="about-stat-card animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="about-stat-num">{s.num}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Vision & Mission ── */}
      <section className="about-vision">
        <div className="about-vision-inner">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Direction & Purpose</span>
            <h2>Our Vision & Mission</h2>
            <p>The compass that guides every project, partnership, and product we build.</p>
          </div>
          <div className="about-vision-grid">
            <div className="vision-card animate-on-scroll">
              <div className="vision-card-accent" style={{ background: 'linear-gradient(to right, #1e3a8a, #2563eb)' }} />
              <div className="vision-icon">🔭</div>
              <h3>Our <span style={{ color: 'var(--primary-light)' }}>Vision</span></h3>
              <p>To be India's leading innovator in Industry 4.0 solutions, empowering manufacturers of all sizes with cutting-edge digitalization and IIoT technologies that make them globally competitive.</p>
              <div className="vision-card-points">
                {["Lead India's smart manufacturing revolution", 'Make Industry 4.0 accessible to MSMEs', 'Build indigenous technology for Indian factories'].map((p, i) => (
                  <div key={i} className="vision-point"><div className="vision-point-dot" />{p}</div>
                ))}
              </div>
            </div>
            <div className="vision-card animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
              <div className="vision-card-accent" style={{ background: 'linear-gradient(to right, #7c3aed, #a78bfa)' }} />
              <div className="vision-icon">🎯</div>
              <h3>Our <span style={{ color: '#7c3aed' }}>Mission</span></h3>
              <p>To deliver tailored automation and IIoT solutions that revolutionize manufacturing processes, reduce operational costs, and enable data-driven decision making for Indian industries.</p>
              <div className="vision-card-points">
                {['Deliver measurable ROI on every project', 'Provide end-to-end support and training', 'Build long-term technology partnerships'].map((p, i) => (
                  <div key={i} className="vision-point" style={{ '--dot-color': '#7c3aed' }}><div className="vision-point-dot" style={{ background: '#7c3aed' }} />{p}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">What Drives Us</span>
            <h2>Our Core Values</h2>
            <p>The principles that guide every decision, every project, and every relationship we build.</p>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Stories ── */}
      <section className="about-success" style={{ background: 'var(--gray-50)' }}>
        <div className="about-success-inner">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Proven Results</span>
            <h2>Success Stories</h2>
            <p>Real solutions delivering real results — measurable impact for our clients across India.</p>
          </div>
          <div className="success-grid">
            {SUCCESS_STORIES.map((s, i) => (
              <div key={s.id} className="success-card animate-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="success-card-img">
                  <img src={s.img} alt={s.title}
                    onError={e => { e.target.src = '/images/connected-machines.jpg'; }} />
                </div>
                <div className="success-card-body">
                  <span className="success-card-cat" style={{ background: s.catBg, color: s.color }}>{s.cat}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}

    </>
  );
}
