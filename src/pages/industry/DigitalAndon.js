import React, { useEffect } from "react";
import PageLayout from "../../layouts/PageLayout";
import "../../layouts/PageLayout.css";
import "./DigitalAndon.css";

export default function DigitalAndon() {
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
      title="Digital <span>Andon System</span>"
      subtitle="Visualize production status in real-time, respond to issues instantly, and eliminate downtime with intelligent alert escalation."
      tag="Production Monitoring"
      heroImage="/images/DigitalAndon_hero.jpg"
      breadcrumb={[
        { label: "Solutions", path: "/services" },
        { label: "Digital Andon" }
      ]}
    >
      {/* Section 1: What is Digital Andon? */}
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
                Real-time Visual Control
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--gray-600)",
                  marginBottom: "40px"
                }}
              >
                The Digital Andon System replaces manual alert systems with intelligent, real-time visualization that ensures no production issue goes unnoticed. Automatically escalate alerts through your team hierarchy and track response times for continuous improvement.
              </p>

              {/* Feature List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    title: "Real-time Status Display",
                    desc: "Live production line visualization on large displays"
                  },
                  {
                    title: "Automatic Alert Escalation",
                    desc: "Multi-level escalation: operator → supervisor → manager"
                  },
                  {
                    title: "Machine Status Monitoring",
                    desc: "Green/Yellow/Red status with timestamps"
                  },
                  {
                    title: "Response Time Tracking",
                    desc: "Measure team response time for every alert"
                  },
                  {
                    title: "Shift Reports",
                    desc: "Automated end-of-shift performance summaries"
                  },
                  {
                    title: "Mobile Notifications",
                    desc: "SMS/WhatsApp alerts to on-call engineers"
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
                src="/images/new_andon_image.png"
                alt="Digital Andon System"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-lg)",
                  transform: "scale(1.55)",
                  transformOrigin: "center"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Benefits Grid */}
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
              Why Digital Andon
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Faster response times, complete visibility, and data-driven decision making across your entire facility.
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
              { metric: "87%", label: "Faster Response" },
              { metric: "Zero", label: "Missed Alerts" },
              { metric: "Visual", label: "Factory Control" },
              { metric: "Live", label: "Shift Analytics" },
              { metric: "Mobile", label: "Ready Alerts" },
              { metric: "Custom", label: "Escalation Rules" }
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
              Alert Escalation Workflow
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Intelligent routing ensures the right person gets notified at the right time.
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
                level: "Level 1",
                role: "Operator",
                action: "Receives instant notification",
                time: "Immediate"
              },
              {
                level: "Level 2",
                role: "Supervisor",
                action: "Escalation if no response",
                time: "5-10 minutes"
              },
              {
                level: "Level 3",
                role: "Manager",
                action: "Further escalation if needed",
                time: "15-20 minutes"
              },
              {
                level: "Level 4",
                role: "Director",
                action: "Critical alert notification",
                time: "Immediate"
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
                    flexDirection: "column",
                    gap: "12px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "var(--primary-light)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {item.level}
                  </span>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "var(--gray-900)"
                    }}
                  >
                    {item.role}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--gray-600)", marginBottom: "12px" }}>
                    {item.action}
                  </p>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "var(--primary-light)",
                      paddingTop: "12px",
                      borderTop: "1px solid var(--gray-200)"
                    }}
                  >
                    {item.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Integration & Mobile */}
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
            {/* Left Column - Text */}
            <div className="animate-on-scroll">
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "var(--gray-900)"
                }}
              >
                Mobile & Integration
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--gray-600)",
                  marginBottom: "30px"
                }}
              >
                Digital Andon works seamlessly across all devices and integrates with your existing MES, ERP, and communication platforms.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    icon: "📱",
                    title: "Mobile Alerts",
                    desc: "Push notifications, SMS, WhatsApp, and Telegram"
                  },
                  {
                    icon: "🖥️",
                    title: "Large Displays",
                    desc: "Real-time status boards for shop floor visibility"
                  },
                  {
                    icon: "🔗",
                    title: "System Integration",
                    desc: "API integration with MES, ERP, and IoT platforms"
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

            {/* Right Column - Image */}
            <div className="animate-on-scroll">
              <img
                src="/images/andon_mobile_image.jpg"
                alt="Mobile Andon Interface"
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


    </PageLayout>
  );
}
