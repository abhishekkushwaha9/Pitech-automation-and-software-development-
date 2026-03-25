import React, { useEffect } from "react";
import PageLayout from "../../layouts/PageLayout";
import "../../layouts/PageLayout.css";
import "./PredictiveMaintenance.css";

export default function PredictiveMaintenance() {
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
      title="Predictive <span>Maintenance</span>"
      subtitle="Stop reacting to breakdowns. Use sensor data and machine learning to predict failures before they happen."
      tag="AI-Powered Maintenance"
      heroImage="/images/ai-maintenance.jpg"
      breadcrumb={[
        { label: "Solutions", path: "/services" },
        { label: "Predictive Maintenance" }
      ]}
    >
      {/* Section 1: Predictive Maintenance Overview */}
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
                Predict Failures Before They Happen
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--gray-600)",
                  marginBottom: "40px"
                }}
              >
                Unplanned downtime costs money. Our AI-powered predictive maintenance system monitors equipment health in real-time, predicts failures days or weeks in advance, and automatically schedules maintenance before problems occur.
              </p>

              {/* Feature List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    title: "Vibration Analysis",
                    desc: "Real-time vibration monitoring with FFT analysis"
                  },
                  {
                    title: "Temperature Monitoring",
                    desc: "Thermal sensors for motor and bearing health"
                  },
                  {
                    title: "Oil Quality Sensing",
                    desc: "Lubricant degradation detection"
                  },
                  {
                    title: "ML-based Prediction",
                    desc: "Machine learning models trained on your equipment data"
                  },
                  {
                    title: "Maintenance Scheduling",
                    desc: "Auto-generate work orders based on predictions"
                  },
                  {
                    title: "Spare Parts Optimization",
                    desc: "Predict parts consumption for inventory management"
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
                src="/images/ai-maintenance.jpg"
                alt="Predictive Maintenance"
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
              Maintenance Benefits
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Reduce downtime, extend equipment life, and optimize your maintenance strategy.
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
              { metric: "-85%", label: "Unplanned Downtime" },
              { metric: "3x", label: "Machine Lifespan" },
              { metric: "-40%", label: "Maintenance Cost" },
              { metric: "95%", label: "Prediction Accuracy" },
              { metric: "Auto", label: "Work Orders" },
              { metric: "MES", label: "Connected" }
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

      {/* Section 3: Sensor Technology */}
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
              Advanced Sensor Network
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Multiple sensors provide comprehensive equipment health monitoring.
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
                sensor: "Accelerometers",
                measurement: "Vibration Analysis",
                use: "Bearing wear, misalignment detection"
              },
              {
                sensor: "Temperature Sensors",
                measurement: "Thermal Monitoring",
                use: "Motor windings, bearing temperature"
              },
              {
                sensor: "Current Sensors",
                measurement: "Electrical Load",
                use: "Motor health, efficiency degradation"
              },
              {
                sensor: "Oil Analysis",
                measurement: "Lubrication Quality",
                use: "Degradation, contamination detection"
              },
              {
                sensor: "Pressure Sensors",
                measurement: "Hydraulic Health",
                use: "Pump/motor wear, leakage detection"
              },
              {
                sensor: "Ultrasonic",
                measurement: "Early Stage Faults",
                use: "Bearing faults, electrical discharges"
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
                  {item.sensor}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "var(--primary-light)",
                    marginBottom: "12px"
                  }}
                >
                  {item.measurement}
                </p>
                <p style={{ fontSize: "14px", color: "var(--gray-600)" }}>
                  {item.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: AI & Machine Learning */}
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
                src="/images/ai-maintenance.jpg"
                alt="AI Prediction Engine"
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
                AI-Powered Prediction Engine
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--gray-600)",
                  marginBottom: "30px"
                }}
              >
                Our machine learning models analyze thousands of historical failure patterns to predict equipment degradation with 95%+ accuracy, giving you 2-4 weeks notice before failures occur.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    icon: "🧠",
                    title: "Continuous Learning",
                    desc: "Models improve with every equipment cycle"
                  },
                  {
                    icon: "📈",
                    title: "Trend Analysis",
                    desc: "Detect degradation 2-4 weeks in advance"
                  },
                  {
                    icon: "⚙️",
                    title: "Equipment-Specific",
                    desc: "Models trained on YOUR equipment data"
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

      {/* Section 5: Maintenance Workflow */}
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
              Automated Maintenance Workflow
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              From prediction to work order to completion—fully integrated.
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
                title: "Sensor Monitoring",
                duration: "Continuous",
                desc: "Real-time data collection from all equipment"
              },
              {
                step: "2",
                title: "Prediction",
                duration: "2-4 weeks advance",
                desc: "AI detects degradation trend"
              },
              {
                step: "3",
                title: "Alert Generation",
                duration: "Automatic",
                desc: "System creates work order and notifies team"
              },
              {
                step: "4",
                title: "Scheduled Maintenance",
                duration: "Planned",
                desc: "Fix equipment during planned downtime"
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
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "var(--primary-light)",
                    marginBottom: "12px"
                  }}
                >
                  {item.duration}
                </p>
                <p style={{ fontSize: "14px", color: "var(--gray-600)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </PageLayout>
  );
}
