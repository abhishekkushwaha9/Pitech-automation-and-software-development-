import React, { useEffect } from "react";
import PageLayout from "../../layouts/PageLayout";
import "../../layouts/PageLayout.css";
import "./EnergyMonitoring.css";

export default function EnergyMonitoring() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e =>
          e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach(el =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout
      title="Energy <span>Monitoring System</span>"
      subtitle="Track, analyze, and reduce energy consumption across your entire facility with real-time metering and AI-powered insights."
      tag="Energy Management"
      heroImage="/images/EnergyMonitoring_hero.jpg"
      breadcrumb={[
        { label: "Solutions", path: "/services" },
        { label: "Energy Monitoring" }
      ]}
    >
      {/* Section 1: Energy Monitoring Overview */}
      <section className="energy-section">
        <div className="energy-container">
          <div className="energy-grid animate-on-scroll">
            {/* Left Column */}
            <div className="energy-text-col">
              <h2>Control Your Energy Costs</h2>
              <p className="energy-desc">
                Energy is often your third-largest manufacturing cost. Our monitoring system provides real-time visibility into consumption, identifies waste, and helps you achieve measurable cost reductions while meeting sustainability goals.
              </p>

              {/* Feature List */}
              <div className="energy-feature-list">
                {[
                  {
                    title: "Real-time Metering",
                    desc: "Per-machine and line"
                  },
                  {
                    title: "Cost Analytics",
                    desc: "Convert kWh to cost"
                  },
                  {
                    title: "Anomaly Detection",
                    desc: "Automatic waste alerts"
                  },
                  {
                    title: "Load Forecasting",
                    desc: "AI demand prediction"
                  },
                  {
                    title: "Carbon Footprint",
                    desc: "Track CO2 emissions"
                  },
                  {
                    title: "Peak Management",
                    desc: "Avoid demand charges"
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="energy-feature-item">
                    <div className="energy-check">✓</div>
                    <div className="energy-feature-info">
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="energy-img-col">
              <img
                src="/images/Energy%20Monitoring%20.png"
                alt="Energy Monitoring System"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Benefits */}
      <section
        className="benefits-section"
        style={{ padding: "80px 20px", backgroundColor: "var(--gray-50)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "var(--gray-900)",
                marginBottom: "16px"
              }}
            >
              Energy Management Benefits
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Reduce costs, improve sustainability, and optimize your energy infrastructure.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px"
            }}
          >
            {[
              { metric: "-22%", label: "Energy Costs" },
              { metric: "ISO 50001", label: "Ready" },
              { metric: "< 18mo", label: "ROI" },
              { metric: "Real-time", label: "Alerts" },
              { metric: "Cost", label: "Allocation" },
              { metric: "Carbon", label: "Reporting" }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="animate-on-scroll"
                style={{
                  backgroundColor: "var(--white)",
                  padding: "40px 30px",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow)",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "var(--primary-light)",
                    marginBottom: "12px"
                  }}
                >
                  {benefit.metric}
                </div>
                <p style={{ fontSize: "16px", fontWeight: "600", color: "var(--gray-900)" }}>
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section style={{ padding: "80px 20px", backgroundColor: "var(--white)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "var(--gray-900)",
                marginBottom: "16px"
              }}
            >
              Energy Monitoring Process
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              From data collection to actionable insights in minutes.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "30px"
            }}
          >
            {[
              {
                step: "1",
                title: "Meter Installation",
                desc: "Deploy smart meters on machines, lines, or circuits"
              },
              {
                step: "2",
                title: "Data Collection",
                desc: "Real-time kWh, voltage, power factor data aggregation"
              },
              {
                step: "3",
                title: "Analysis",
                desc: "Automatic anomaly detection and pattern recognition"
              },
              {
                step: "4",
                title: "Reporting",
                desc: "Dashboards, alerts, and compliance reports generated"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="animate-on-scroll"
                style={{
                  position: "relative",
                  padding: "40px 30px",
                  backgroundColor: "var(--gray-50)",
                  borderRadius: "var(--radius-lg)",
                  borderTop: "4px solid var(--primary-light)"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px"
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "var(--primary-light)",
                      color: "var(--white)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                      fontSize: "18px"
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "var(--gray-900)"
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: "14px", color: "var(--gray-600)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Sustainability & Compliance */}
      <section className="energy-section energy-section-gray">
        <div className="energy-container">
          <div className="energy-grid animate-on-scroll">
            {/* Left Column - Text */}
            <div className="energy-text-col">
              <h2>Sustainability Reporting</h2>
              <p className="energy-desc">
                Meet ESG goals and compliance requirements with automated carbon footprint tracking and reporting. Our system helps you document energy efficiency improvements for certifications and stakeholder communication.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {[
                  {
                    icon: "📊",
                    title: "Carbon Tracking",
                    desc: "Automatic CO2 calculation based on usage"
                  },
                  {
                    icon: "✅",
                    title: "Compliance Ready",
                    desc: "ISO 50001, ISO 14001, and ESG"
                  },
                  {
                    icon: "📈",
                    title: "Improvement Reports",
                    desc: "Track year-over-year efficiency gains"
                  }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "16px", background: 'white', padding: '15px', borderRadius: '12px' }}>
                    <div style={{ fontSize: "28px", flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontWeight: "700", color: "var(--gray-900)", marginBottom: "2px", fontSize: '15px' }}>{item.title}</h4>
                      <p style={{ fontSize: "13px", color: "var(--gray-600)", margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="energy-img-col">
              <img
                src="/images/energy-dashboard.jpg"
                alt="Sustainability Reporting"
              />
            </div>
          </div>
        </div>
      </section>


    </PageLayout>
  );
}
