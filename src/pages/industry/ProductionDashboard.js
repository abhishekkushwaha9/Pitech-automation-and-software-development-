import React, { useEffect } from "react";
import PageLayout from "../../layouts/PageLayout";
import { ProductionHeroAnimation } from "../../components/SolutionsHeroAnimations";
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
      heroAnimation={<ProductionHeroAnimation />}
      breadcrumb={[
        { label: "Solutions", path: "/services" },
        { label: "Production Dashboard" }
      ]}
    >
      {/* Section 1: Dashboard Overview */}
      <section style={{ padding: "60px 20px 40px", backgroundColor: "var(--white)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="animate-on-scroll dashboard-overview-grid">
            {/* Left Column */}
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "16px",
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
                  marginBottom: "28px"
                }}
              >
                Our Production Dashboard gives you instant visibility into every machine, line, and KPI across your entire facility. Make data-driven decisions in real-time with customizable widgets and drill-down analytics.
              </p>

              {/* Feature List (2-column grid) */}
              <div className="dashboard-points-grid">
                {[
                  {
                    title: "Live KPI Widgets",
                    desc: "Production count, efficiency, and quality rate widgets"
                  },
                  {
                    title: "Multi-line View",
                    desc: "Monitor multiple production lines simultaneously"
                  },
                  {
                    title: "Historical Trends",
                    desc: "Daily, weekly, and monthly trend analysis charts"
                  },
                  {
                    title: "Target vs Actual",
                    desc: "Real-time target achievement and variance tracking"
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
                  <div
                    key={idx}
                    className="dashboard-point-card pitech-ripple-card"
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      padding: "14px 12px",
                      backgroundColor: "var(--gray-50)",
                      borderRadius: "var(--radius)",
                      border: "1px solid var(--gray-100)"
                    }}
                  >
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        backgroundColor: "var(--primary-light)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--white)",
                        fontWeight: "700",
                        fontSize: "12px",
                        marginTop: "1px"
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "var(--gray-900)",
                          marginBottom: "4px",
                          lineHeight: "1.3"
                        }}
                      >
                        {feature.title}
                      </h4>
                      <p style={{ fontSize: "12px", color: "var(--gray-600)", margin: 0, lineHeight: "1.45" }}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src="/images/Production Planning.png"
                alt="Production Dashboard"
                style={{
                  width: "100%",
                  maxHeight: "380px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid var(--gray-200)"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Advantages */}
      <section
        className="benefits-section"
        style={{ padding: "50px 20px 60px", backgroundColor: "var(--gray-50)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "var(--gray-900)",
                marginBottom: "12px"
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
              {
                metric: "Real-time",
                label: "Data Updates",
                desc: "Live millisecond telemetry streaming from every active machine on the production floor."
              },
              {
                metric: "Custom",
                label: "Widgets",
                desc: "Configurable drag-and-drop tiles for OEE, cycle times, throughput, and scrap metrics."
              },
              {
                metric: "Cloud",
                label: "Access",
                desc: "Secure remote plant monitoring and analytics accessible from any authorized browser."
              },
              {
                metric: "Mobile",
                label: "Ready",
                desc: "Responsive mobile interface for floor supervisors and plant managers on the go."
              },
              {
                metric: "Auto",
                label: "Shift Reports",
                desc: "Automated end-of-shift summaries and production exports delivered straight to inbox."
              },
              {
                metric: "Role-based",
                label: "Access Control",
                desc: "Granular permission levels ensuring operators, supervisors, and executives see relevant data."
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="animate-on-scroll prod-card pitech-ripple-card"
                style={{
                  backgroundColor: "var(--white)",
                  padding: "36px 24px",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow)",
                  border: "1px solid var(--gray-100)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "all 0.3s ease"
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "var(--primary-light)",
                    marginBottom: "10px"
                  }}
                >
                  {benefit.metric}
                </div>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "var(--gray-900)",
                    marginBottom: "10px"
                  }}
                >
                  {benefit.label}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "var(--gray-600)",
                    margin: 0,
                    textAlign: "left",
                    width: "100%"
                  }}
                >
                  {benefit.desc}
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
                className="animate-on-scroll prod-card pitech-ripple-card"
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
