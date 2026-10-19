import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import { DigitalizationHeroAnimation } from "../../components/SolutionsHeroAnimations";
import "../../layouts/PageLayout.css";
import "./Digitalization.css";

export default function Digitalization() {
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        // SEO logic
        document.title = "Industry 4.0 Solutions in Haryana | Smart Manufacturing";
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://www.pitechautomation.com/industry/digitalization');

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Transform your factory with Pitech Automation's Industry 4.0 solutions in Haryana. We integrate IoT, data analytics, and smart automation for manufacturing.");
        }

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
      heroAnimation={<DigitalizationHeroAnimation />}
      breadcrumb={[
        { label: "Solutions", path: "/services" },
        { label: "Digitalization" }
      ]}
    >
      {/* Section 1: What is Factory Digitalization? */}
      <section style={{ padding: "60px 20px 40px", backgroundColor: "var(--white)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section Header */}
          <div className="animate-on-scroll" style={{ marginBottom: "36px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "16px",
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
                maxWidth: "850px"
              }}
            >
              Factory Digitalization means replacing manual, paper-based workflows with integrated digital systems that provide real-time visibility and control across your entire production environment. This transformation enables data-driven decision making and eliminates inefficiencies.
            </p>
          </div>

          <div className="animate-on-scroll digitalization-overview-grid">
            {/* Left Column - 2-Column Grid of 6 Points */}
            <div className="digitalization-points-grid">
              {[
                {
                  title: "Paperless Production",
                  desc: "Replace manual paper checklists with digital forms"
                },
                {
                  title: "Real-time OEE",
                  desc: "Track OEE automatically from machine sensor data"
                },
                {
                  title: "Quality Management",
                  desc: "Digital inspection with immediate defect tracking"
                },
                {
                  title: "Traceability",
                  desc: "End-to-end product genealogy and batch history"
                },
                {
                  title: "Data Analytics",
                  desc: "Plant-wide live KPI and trend dashboards"
                },
                {
                  title: "Alert Management",
                  desc: "Multi-tier escalation matrix for quick response"
                }
              ].map((feature, idx) => (
                <div key={idx} className="digitalization-point-card pitech-ripple-card">
                  <div className="digitalization-point-icon">
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

            {/* Right Column - Image */}
            <div className="digitalization-image-wrap">
              <img
                src="/images/digitalization-new.jpeg"
                alt="Factory Digitalization"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Benefits Grid */}
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
              {
                metric: "+40%",
                label: "Efficiency Gain",
                desc: "Automate manual logging and eliminate production bottlenecks to significantly improve line throughput."
              },
              {
                metric: "99.9%",
                label: "Quality Rate",
                desc: "In-line parameter tracking and automated digital inspections catch defects before they cause batch rejections."
              },
              {
                metric: "-30%",
                label: "Downtime Reduction",
                desc: "Real-time anomaly detection and prompt escalation prevent minor machine issues from turning into major halts."
              },
              {
                metric: "100%",
                label: "Traceability",
                desc: "End-to-end digital genealogy tracks materials, machine parameters, and operator logs across every batch."
              },
              {
                metric: "Paperless",
                label: "Factory Operations",
                desc: "Replace manual clipboards and error-prone shift forms with standardized, cloud-synced digital interfaces."
              },
              {
                metric: "Real-time",
                label: "Data Insights",
                desc: "Unified shop-floor KPI dashboards provide immediate visibility into production count, OEE, and energy metrics."
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="animate-on-scroll digitalization-benefit-card pitech-ripple-card"
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
                    margin: 0
                  }}
                >
                  {benefit.desc}
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


      {/* Section 5: SEO Content Block */}
      <section style={{ padding: "80px 20px", backgroundColor: "var(--white)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: "var(--gray-50)",
              padding: "40px 36px",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--gray-200)"
            }}
          >
            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "var(--gray-900)", marginBottom: "20px" }}>
              Industry 4.0 Solutions in Haryana | Smart Manufacturing
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--gray-600)", marginBottom: "16px", textAlign: "justify" }}>
              The future of manufacturing relies on connectivity, data, and intelligent systems. At Pitech Automation, we are at the forefront of delivering comprehensive <strong>Industry 4.0 solutions in Haryana</strong>. Our goal is to help traditional manufacturing setups transition into fully connected, smart factories that operate with maximum efficiency and minimal downtime.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--gray-600)", marginBottom: showMore ? "16px" : "0", textAlign: "justify" }}>
              Industry 4.0 represents the fourth industrial revolution, emphasizing the integration of digital technologies into manufacturing and industrial practices. As leading <strong>Industry 4.0 consultants in Haryana</strong>, we implement advanced technologies such as the Industrial Internet of Things (IIoT), cloud computing, and real-time data analytics. By connecting your machinery and software systems, we enable machines to communicate with each other, providing you with unprecedented visibility into your production lines.
            </p>

            {showMore && (
              <div style={{ marginTop: "16px" }}>
                <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--gray-600)", marginBottom: "16px", textAlign: "justify" }}>
                  Our <strong>smart manufacturing companies in Gurgaon</strong> and Manesar trust us to digitize their operations. We deploy smart sensors and IoT gateways that collect critical performance data. This data is then analyzed to predict equipment failures before they happen, reducing maintenance costs and avoiding unexpected production halts.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.8", color: "var(--gray-600)", marginBottom: "0", textAlign: "justify" }}>
                  Whether you are looking to implement predictive maintenance, digital twins, or automated quality control, our <strong>factory automation solutions in Manesar</strong> are designed to scale with your business. We tailor our Industry 4.0 strategies to match your specific production requirements, ensuring a seamless digital transformation that boosts productivity and ROI. Embrace the power of <strong>smart factory automation in Gurgaon</strong> with Pitech Automation and stay ahead of the competition.
                </p>
              </div>
            )}

            <div style={{ marginTop: "20px" }}>
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                style={{
                  backgroundColor: "var(--white)",
                  color: "var(--primary-light)",
                  border: "1px solid var(--primary-light)",
                  borderRadius: "20px",
                  padding: "8px 20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 4px rgba(37,99,235,0.1)"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "var(--primary-light)";
                  e.currentTarget.style.color = "var(--white)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "var(--white)";
                  e.currentTarget.style.color = "var(--primary-light)";
                }}
              >
                {showMore ? "Read Less ↑" : "Read More ↓"}
              </button>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
