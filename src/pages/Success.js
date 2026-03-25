import { useState, useEffect } from "react";
import "./Success.css";

export default function Success() {
  const [open, setOpen] = useState(false);
  const [activeProject] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.dataset.id]);
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    document.querySelectorAll("[data-project-id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ================= PROJECT LIST ================= */
  const projects = [
    {
      id: 1,
      name: "Digital Work Instruction System",
      client: "Automotive Tier-1 Manufacturer",
      industry: "Automotive Manufacturing",
      result: "Reduced training time by 45%",
      image: "/images/dwi.png"
    },
    {
      id: 2,
      name: "Real-time Production Dashboard",
      client: "Heavy Engineering Plant",
      industry: "Industrial Manufacturing",
      result: "Increased OEE by 18%",
      image: "/images/production-dashboard.jpeg"
    },
    {
      id: 3,
      name: "Digital Check Sheets",
      client: "Automotive Tier-1 Manufacturer",
      industry: "Automotive Manufacturing",
      result: "Improved quality compliance",
      image: "/images/check-sheet.png"
    },
    {
      id: 4,
      name: "Cloud-based IIoT Monitoring",
      client: "Automotive Tier-1 Manufacturer",
      industry: "Automotive Manufacturing",
      result: "Live monitoring & tracking",
      image: "/images/real-time.jpeg"
    },
    {
      id: 5,
      name: "IIoT Alerts & Tracking",
      client: "Automotive Tier-1 Manufacturer",
      industry: "Automotive Manufacturing",
      result: "Automated alerts & dashboards",
      image: "/images/monitoring.jpeg"
    },
    {
      id: 6,
      name: "Barcode Quality Tracking",
      client: "Heavy Engineering Plant",
      industry: "Industrial Manufacturing",
      result: "Improved traceability",
      image: "/images/cmr.jpeg"
    },
    {
      id: 7,
      name: "Force Measurement Software",
      client: "Automotive Tier-1 Manufacturer",
      industry: "Automotive Manufacturing",
      result: "Accurate force reporting",
      image: "/images/tracking.jpeg"
    }
  ];

  /* ================= POPUP CONTENT ================= */
  const caseStudyData = {
    1: {
      challenges: ["Paper-based SOPs", "High training effort", "No revision control"],
      solution: ["Digital SOPs", "Visual instructions", "Instant updates"],
      benefits: ["45% training reduction", "Paperless shopfloor", "Higher quality"]
    },
    2: {
      challenges: ["No real-time visibility", "Manual reports", "Delayed decisions"],
      solution: ["Live dashboards", "OEE tracking", "Downtime analytics"],
      benefits: ["18% OEE increase", "Faster decisions", "Live production data"]
    },
    3: {
      challenges: ["Manual quality checks", "Data loss", "No traceability"],
      solution: ["Digital check sheets", "Real-time validation", "Centralized data"],
      benefits: ["Higher compliance", "Reduced defects", "Audit-ready data"]
    },
    4: {
      challenges: ["No machine visibility", "Unplanned downtime"],
      solution: ["Cloud IIoT platform", "Real-time monitoring"],
      benefits: ["Live machine status", "Reduced downtime"]
    },
    5: {
      challenges: ["Delayed alerts", "Manual monitoring"],
      solution: ["Automated alerts", "Real-time tracking"],
      benefits: ["Instant notifications", "Improved response time"]
    },
    6: {
      challenges: ["Poor traceability", "Manual logs"],
      solution: ["Barcode scanning", "Quality checkpoints"],
      benefits: ["Full traceability", "Improved OEE"]
    },
    7: {
      challenges: ["Manual force measurement", "Data inaccuracies"],
      solution: ["Automated force capture", "Digital reports"],
      benefits: ["Accurate data", "Standardized reporting"]
    }
  };

  /* ================= ENHANCED CARD ================= */
  const Card = ({ title, icon, items, color, delay = 0 }) => (
    <div
      className="info-card-item"
      style={{
        borderTop: `6px solid ${color}`,
        animation: `slideInCard 0.5s ease-out ${delay}s forwards`
      }}
    >
      <h3 className="info-card-title" style={{ color }}>
        <span style={{ fontSize: "1.5rem" }}>{icon}</span>
        {title}
      </h3>
      <ul className="info-card-list">
        {items.map((i, idx) => (
          <li key={idx} className="info-card-list-item">
            <span style={{ color }}>✔</span>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );

  /* ================= UI ================= */
  return (
    <div className="success-container">
      {/* HEADER */}
      <div className="success-header">
        <div className="header-circle-1" />
        <div className="header-circle-2" />

        <div className="header-content">
          <h1 className="success-title">
            Our Success Stories
          </h1>
          <p className="success-subtitle">
            Proven Industry 4.0 Solutions Delivered by Pitech
          </p>
        </div>
      </div>

      {/* PROJECT LIST */}
      <div className="projects-wrapper">
        {projects.map((p, index) => {
          const isVisible = visibleItems.includes(p.id.toString());

          return (
            <div
              key={p.id}
              data-project-id={p.id}
              data-id={p.id}
              className={`project-item ${isVisible ? 'visible' : ''} ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="project-image-col">
                <div className="project-image-wrapper">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="project-image"
                  />
                  <div className="project-overlay" />
                </div>
                <div className="case-study-badge">
                  Case Study #{p.id}
                </div>
              </div>

              <div className="project-content-col">
                <h2 className="project-title">
                  {p.name}
                </h2>

                <div className="project-details-card">
                  <p className="detail-row">
                    <b>🏢 Client:</b> {p.client}
                  </p>
                  <p className="detail-row">
                    <b>⚙️ Industry:</b> {p.industry}
                  </p>
                  <p className="result-row">
                    <b>🎯 Result:</b> {p.result}
                  </p>
                </div>


              </div>
            </div>
          );
        })}
      </div>

      {/* ================= ENHANCED POPUP ================= */}
      {open && activeProject && (
        <div
          className="popup-overlay"
          onClick={() => setOpen(false)}
        >
          <div
            className="popup-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="popup-header">
              <div className="popup-circle" />
              <h2 className="popup-title">
                {activeProject.name}
              </h2>
              <p className="popup-subtitle">
                Industry 4.0 Implementation Case Study
              </p>
            </div>

            {/* CONTENT */}
            <div className="popup-grid">
              <Card
                title="Challenges"
                icon="⚠️"
                items={caseStudyData[activeProject.id].challenges}
                color="#ef4444"
                delay={0}
              />
              <Card
                title="Solution"
                icon="💡"
                items={caseStudyData[activeProject.id].solution}
                color="#3b82f6"
                delay={0.1}
              />
              <Card
                title="Benefits"
                icon="🎯"
                items={caseStudyData[activeProject.id].benefits}
                color="#22c55e"
                delay={0.2}
              />
            </div>

            {/* FOOTER */}
            <div className="popup-footer">
              <button
                className="close-btn"
                onClick={() => setOpen(false)}
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}