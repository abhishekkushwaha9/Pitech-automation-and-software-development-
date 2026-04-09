import React, { useEffect } from "react";
import PageLayout from "../../layouts/PageLayout";
import "../../layouts/PageLayout.css";
import "./ProductionDashboard.css";

export default function ProductionDashboard() {
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
      title="Production <span>Dashboard</span>"
      subtitle="A single, unified view of your entire production operation — from individual machines to plant-wide KPIs — updated in real-time."
      tag="Real-time Analytics"
      heroImage="/images/dashboard-new.jpeg"
      breadcrumb={[
        { label: "Solutions", path: "/services" },
        { label: "Production Dashboard" }
      ]}
    >
      {/* Section 1: Dashboard Overview */}
      <section style={{ padding: "80px 20px", backgroundColor: "var(--white)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="animate-on-scroll"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "60px",
              alignItems: "center"
            }}
          >
            {/* Left Column */}
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "var(--gray-900)"
                }}
              >
                Complete Production Visibility
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--gray-600)",
                  marginBottom: "40px"
                }}
              >
                Our Production Dashboard gives you instant visibility into every machine, line, and KPI across your entire facility. Make data-driven decisions in real-time with customizable widgets and drill-down analytics.
              </p>

              {/* Feature List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    title: "Live KPI Widgets",
                    desc: "Production count, efficiency, quality rate widgets"
                  },
                  {
                    title: "Multi-line View",
                    desc: "Monitor multiple production lines simultaneously"
                  },
                  {
                    title: "Historical Trends",
                    desc: "Daily/weekly/monthly trend analysis charts"
                  },
                  {
                    title: "Target vs Actual",
                    desc: "Real-time target achievement tracking"
                  },
                  {
                    title: "Machine Utilization",
                    desc: "Per-machine uptime and utilization heatmaps"
                  },
                  {
                    title: "Shift Comparison",
                    desc: "Compare shifts and teams for continuous improvement"
                  }
                ].map((feature, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "16px" }}>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "var(--primary-light)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--white)",
                        fontWeight: "600",
                        fontSize: "14px"
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: "600",
                          color: "var(--gray-900)",
                          marginBottom: "4px"
                        }}
                      >
                        {feature.title}
                      </h4>
                      <p style={{ fontSize: "14px", color: "var(--gray-600)" }}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="animate-on-scroll">
              <img
                src="/images/Production Planning.png"
                alt="Production Dashboard"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-lg)"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Advantages */}
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
              Dashboard Capabilities
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Powerful features designed for manufacturers who need real-time operational intelligence.
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
              { metric: "Real-time", label: "Data Updates" },
              { metric: "Custom", label: "Widgets" },
              { metric: "Cloud", label: "Access" },
              { metric: "Mobile", label: "Ready" },
              { metric: "Auto", label: "Shift Reports" },
              { metric: "Role-based", label: "Access Control" }
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

      {/* Section 3: Dashboard Components */}
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
              Standard Dashboard Components
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Choose from a library of pre-built widgets or create custom ones to match your needs.
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
                name: "OEE Widget",
                desc: "Overall Equipment Effectiveness with drill-down to A/P/Q"
              },
              {
                name: "Production Count",
                desc: "Real-time piece count and target progress"
              },
              {
                name: "Quality Rate",
                desc: "Pass/fail rate with defect categorization"
              },
              {
                name: "Downtime Log",
                desc: "Real-time downtime tracking and categorization"
              },
              {
                name: "Trend Charts",
                desc: "Historical performance trends with date range selection"
              },
              {
                name: "Shift Summary",
                desc: "End-of-shift KPI recap and targets achieved"
              },
              {
                name: "Machine Matrix",
                desc: "Grid view of all machines with status indicators"
              },
              {
                name: "Target vs Actual",
                desc: "Visual comparison with variance analysis"
              }
            ].map((component, idx) => (
              <div
                key={idx}
                className="animate-on-scroll"
                style={{
                  position: "relative",
                  padding: "40px 30px",
                  backgroundColor: "var(--gray-50)",
                  borderRadius: "var(--radius-lg)",
                  borderLeft: "4px solid var(--primary-light)"
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "var(--gray-900)",
                    marginBottom: "12px"
                  }}
                >
                  {component.name}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--gray-600)" }}>
                  {component.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Access & Integration */}
      <section style={{ padding: "80px 20px", backgroundColor: "var(--gray-50)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "60px",
              alignItems: "center"
            }}
          >
            {/* Left Column - Image */}
            <div className="animate-on-scroll">
              <img
                src="/images/dashboardNew.jpeg"
                alt="Dashboard Access"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-lg)"
                }}
              />
            </div>

            {/* Right Column - Text */}
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "var(--gray-900)"
                }}
              >
                Everywhere, Anytime
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--gray-600)",
                  marginBottom: "30px"
                }}
              >
                Access your production data from any device, anywhere. Cloud-based or on-premise deployment options available.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    icon: "💻",
                    title: "Desktop & Web",
                    desc: "Full-featured dashboard on computers and tablets"
                  },
                  {
                    icon: "📱",
                    title: "Mobile App",
                    desc: "Native iOS and Android apps for on-the-go monitoring"
                  },
                  {
                    icon: "☁️",
                    title: "Cloud or On-Premise",
                    desc: "Choose deployment model that fits your IT infrastructure"
                  }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "16px" }}>
                    <div
                      style={{
                        fontSize: "28px",
                        flexShrink: 0
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: "600",
                          color: "var(--gray-900)",
                          marginBottom: "4px"
                        }}
                      >
                        {item.title}
                      </h4>
                      <p style={{ fontSize: "14px", color: "var(--gray-600)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </PageLayout>
  );
}
