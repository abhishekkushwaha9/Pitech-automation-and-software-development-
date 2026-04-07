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
    desc: 'End-to-end barcode-based product traceability with real-time defect detection and quality checkpoints.',
    img: '/images/trace_pv.jpeg',
    stats: [{ val: '+40%', label: 'Productivity' }, { val: '99.9%', label: 'Accuracy' }, { val: '₹3.2Cr', label: 'Savings' }],
  },
  {
    id: 3, cat: 'Monitoring', color: '#059669', catBg: 'rgba(5,150,105,0.1)',
    title: 'Digital Andon for Automotive',
    desc: 'AI-powered production monitoring system reducing response time from 25 minutes to under 3 minutes.',
    img: '/images/Ditial andon.jpg',
    stats: [{ val: '87%', label: 'Faster Response' }, { val: '100%', label: 'Uptime' }, { val: '₹1.8Cr', label: 'Savings' }],
  },
  {
    id: 4, cat: 'Energy', color: '#f59e0b', catBg: 'rgba(245,158,11,0.1)',
    title: 'Energy Monitoring System',
    desc: 'Real-time energy tracking across 12 machines with automated alerts and predictive analytics.',
    img: '/images/Energy%20Monitoring%20.png',
    stats: [{ val: '-22%', label: 'Energy Cost' }, { val: '15 min', label: 'ROI Period' }, { val: '₹95L', label: 'Savings' }],
  },
  {
    id: 6, cat: 'Robotics', color: '#6366f1', catBg: 'rgba(99,102,241,0.1)',
    title: 'RoboVision Inspection System', // Renamed from Robotic Inspection System
    desc: 'Vision-based robotic inspection reducing manual QC while achieving 100% component coverage.',
    img: '/images/robotics_inspection.webp',
    stats: [{ val: '+60%', label: 'Efficiency' }, { val: '100%', label: 'Coverage' }, { val: '₹1.5Cr', label: 'Savings' }],
  },
  {
    id: 7, cat: 'Industry 4.0', color: '#3b82f6', catBg: 'rgba(59,130,246,0.1)',
    title: 'DWI (Digital Work Instruction)',
    desc: 'Digital work instruction platform that provides step-by-step guidance to operators on the production line, reducing human errors and improving process consistency.',
    img: '/images/1763185884948.jpg',
    stats: [{ val: '-45%', label: 'Errors' }, { val: '99.8%', label: 'Consistency' }, { val: '₹1.2Cr', label: 'Savings' }],
  },
  {
    id: 8, cat: 'Safety', color: '#ef4444', catBg: 'rgba(239,68,68,0.1)',
    title: 'Digital Safety System',
    desc: 'Smart industrial safety monitoring solution that detects unsafe conditions, tracks compliance, and sends real-time alerts to maintain a safer manufacturing environment.',
    img: '/images/1746077711453.jpg',
    stats: [{ val: '100%', label: 'Compliance' }, { val: 'Zero', label: 'Incidents' }, { val: '₹85L', label: 'Savings' }],
  },
  {
    id: 9, cat: 'Production', color: '#8b5cf6', catBg: 'rgba(139,92,246,0.1)',
    title: 'Smart Parallel Assembly System',
    desc: 'Advanced assembly line optimization system that manages parallel production stations, improves workflow synchronization, and increases overall productivity.',
    img: '/images/Traceability998.jpeg',
    stats: [{ val: '+55%', label: 'Output' }, { val: '92%', label: 'Utilization' }, { val: '₹2.8Cr', label: 'Savings' }],
  },
  {
    id: 10, cat: 'Management', color: '#f97316', catBg: 'rgba(249,115,22,0.1)',
    title: 'Robot Access Control Management System',
    desc: 'Secure robot access management platform that controls operator permissions, monitors robotic usage, and ensures safe human-robot collaboration.',
    img: '/images/development.jpeg',
    stats: [{ val: 'Secure', label: 'Access' }, { val: '100%', label: 'Control' }, { val: '₹1.1Cr', label: 'Savings' }],
  },
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
          <p>India's trusted partner in industrial automation and Industry 4.0 transformation — powering manufacturing excellence since 2021.</p>
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
              PiTech Automation & Software Solutions was established with a clear mission: bring world-class Industry 4.0 technologies to Indian manufacturers. Based in Pune, the heart of India's industrial corridor, we serve clients across automotive, steel, glass, and material handling sectors.

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
                  <div className="success-stats">
                    {s.stats.map(stat => (
                      <div key={stat.label} className="success-stat">
                        <div className="success-stat-val" style={{ color: s.color }}>{stat.val}</div>
                        <div className="success-stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
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
