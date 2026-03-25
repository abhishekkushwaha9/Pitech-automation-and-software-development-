import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import "../../layouts/PageLayout.css";
import "./Digitalization.css";

export default function Digitalization() {
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
      title="Factory <span>Digitalization</span>"
      subtitle="Transform paper-based workflows into a fully connected, data-driven smart factory with real-time visibility across every production line."
      tag="Industry 4.0"
      heroImage="/images/digitalization-new.jpeg"
      breadcrumb={[
        { label: "Solutions", path: "/services" },
        { label: "Digitalization" }
      ]}
    >
      {/* Section 1: What is Factory Digitalization? */}
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
                What is Factory Digitalization?
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--gray-600)",
                  marginBottom: "40px"
                }}
              >
                Factory Digitalization means replacing manual, paper-based workflows with integrated digital systems that provide real-time visibility and control across your entire production environment. This transformation enables data-driven decision making and eliminates inefficiencies.
              </p>

              {/* Feature List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    title: "Paperless Production",
                    desc: "Replace paper checklists with digital forms"
                  },
                  {
                    title: "Real-time OEE",
                    desc: "Track OEE automatically from machine data"
                  },
                  {
                    title: "Quality Management",
                    desc: "Digital inspection with defect tracking"
                  },
                  {
                    title: "Traceability",
                    desc: "End-to-end product genealogy"
                  },
                  {
                    title: "Data Analytics",
                    desc: "Production KPI dashboards"
                  },
                  {
                    title: "Alert Management",
                    desc: "Escalation matrix for quick response"
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
                src="/images/digitalization-new.jpeg"
                alt="Factory Digitalization"
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
              Key Benefits
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Digitalization drives measurable improvements across efficiency, quality, and operational visibility.
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
              { metric: "+40%", label: "Efficiency Gain" },
              { metric: "99.9%", label: "Quality Rate" },
              { metric: "-30%", label: "Downtime Reduction" },
              { metric: "100%", label: "Traceability" },
              { metric: "Paperless", label: "Factory Operations" },
              { metric: "Real-time", label: "Data Insights" }
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

      {/* Section 3: How We Implement */}
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
              How We Implement
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              A structured 4-phase approach to ensure successful deployment and adoption.
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
                title: "Assessment",
                duration: "2 weeks",
                desc: "Analyze current workflows, identify digitalization opportunities, and map data sources."
              },
              {
                step: "2",
                title: "Design & Development",
                duration: "4-8 weeks",
                desc: "Build digital workflows, integrate with your systems, and configure dashboards."
              },
              {
                step: "3",
                title: "Pilot Deployment",
                duration: "2 weeks",
                desc: "Deploy to a single production line, test workflows, and refine based on feedback."
              },
              {
                step: "4",
                title: "Full Rollout & Training",
                duration: "2 weeks",
                desc: "Scale to all lines, conduct operator training, and ensure smooth operations."
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

      {/* Section 4: Related Solutions */}
      <section className="related-cta" style={{ padding: "80px 20px", backgroundColor: "var(--gray-50)" }}>
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
              Related Solutions
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray-600)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Complement your digitalization strategy with these integrated solutions.
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
                title: "Digital Andon System",
                desc: "Real-time alert visualization and escalation for instant issue response.",
                link: "/industry/digital-andon"
              },
              {
                title: "OEE Dashboard",
                desc: "Comprehensive machine efficiency tracking and performance analytics.",
                link: "/industry/oee"
              },
              {
                title: "Production Dashboard",
                desc: "Unified KPI dashboard for plant-wide visibility and control.",
                link: "/industry/production-dashboard"
              }
            ].map((solution, idx) => (
              <div
                key={idx}
                className="animate-on-scroll"
                style={{
                  backgroundColor: "var(--white)",
                  padding: "40px 30px",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow)",
                  display: "flex",
                  flexDirection: "column"
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
                  {solution.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--gray-600)",
                    marginBottom: "20px",
                    flex: 1
                  }}
                >
                  {solution.desc}
                </p>
                <Link
                  to={solution.link}
                  style={{
                    color: "var(--primary-light)",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "gap 0.3s ease"
                  }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


    </PageLayout>
  );
}
