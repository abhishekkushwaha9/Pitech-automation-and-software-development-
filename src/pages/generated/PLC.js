import React, { useEffect } from "react";
import PageLayout from "../../layouts/PageLayout";
import "./PLC.css";

export default function PLC() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageLayout
        title="PLC <span>Controllers</span>"
        tag="Industrial Automation"
        subtitle="Industry-grade Programmable Logic Controllers from leading brands — pre-configured and ready for your automation project."
        heroImage="/images/PLC.png"
        breadcrumb={[{ label: "Products" }, { label: "PLC" }]}
      >
        {/* Brands Section */}
        <section className="plc-brands-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <span className="section-tag">Leading Manufacturers</span>
              <h2>Industry-Standard PLC Brands</h2>
              <p>We partner with world-class PLC manufacturers to deliver proven, reliable control solutions</p>
            </div>

            <div className="plc-brands-grid">
              <div className="brand-card animate-on-scroll">
                <div className="brand-icon">🏭</div>
                <h3>Siemens S7 Series</h3>
                <p className="brand-desc">S7-1200, S7-1500 with advanced diagnostics</p>
                <ul className="brand-features">
                  <li>Scalable architecture</li>
                  <li>High-speed processing</li>
                  <li>Cloud connectivity ready</li>
                </ul>
              </div>

              <div className="brand-card animate-on-scroll">
                <div className="brand-icon">⚡</div>
                <h3>Allen-Bradley CompactLogix</h3>
                <p className="brand-desc">Compact yet powerful automation control</p>
                <ul className="brand-features">
                  <li>Modular I/O design</li>
                  <li>Rapid deployment</li>
                  <li>Easy integration</li>
                </ul>
              </div>

              <div className="brand-card animate-on-scroll">
                <div className="brand-icon">⚙️</div>
                <h3>Mitsubishi MELSEC</h3>
                <p className="brand-desc">Robust Japanese manufacturing heritage</p>
                <ul className="brand-features">
                  <li>Reliable performance</li>
                  <li>Cost-effective solutions</li>
                  <li>Proven in harsh conditions</li>
                </ul>
              </div>

              <div className="brand-card animate-on-scroll">
                <div className="brand-icon">🔧</div>
                <h3>Schneider Modicon</h3>
                <p className="brand-desc">Industrial-grade automation control</p>
                <ul className="brand-features">
                  <li>High reliability</li>
                  <li>Safety-integrated options</li>
                  <li>Legacy system support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="plc-features-section">
          <div className="container">
            <div className="plc-features-grid">
              {/* Left Column: Text & Features */}
              <div className="plc-features-content animate-on-scroll">
                <h2>Comprehensive PLC Solutions for Modern Manufacturing</h2>
                <p className="lead">
                  Our PLC controllers are pre-configured, tested, and ready for immediate deployment. Whether you're upgrading legacy systems or building new automation lines, we provide the expertise and hardware you need.
                </p>

                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Multi-protocol Support</h4>
                      <p>Modbus, Profibus, Profinet, EtherCAT, and OPC-UA compatibility</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Redundancy Support</h4>
                      <p>Dual-channel architecture with automatic failover for 24/7 operation</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Edge Computing</h4>
                      <p>Local intelligence with minimal cloud latency for critical decisions</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Remote Diagnostics</h4>
                      <p>Monitor and troubleshoot systems from anywhere in real-time</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Hot-swappable I/O</h4>
                      <p>Replace modules without powering down the entire system</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Cybersecurity</h4>
                      <p>Industrial-grade encryption and access controls built-in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="plc-features-image animate-on-scroll">
                <div className="image-wrapper">
                  <img src="/images/PLC.png" alt="PLC Controller System" />
                  <div className="image-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="plc-benefits-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2>Why Choose Our PLC Solutions</h2>
              <p>Proven benefits that drive manufacturing excellence</p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-number">1</div>
                <h3>High Reliability</h3>
                <p>MTBF exceeding 50,000 hours with minimal downtime</p>
              </div>

              <div className="benefit-card animate-on-scroll">
                <div className="benefit-number">2</div>
                <h3>Scalable I/O</h3>
                <p>Expandable input/output modules to grow with your facility</p>
              </div>

              <div className="benefit-card animate-on-scroll">
                <div className="benefit-number">3</div>
                <h3>Fast Processing</h3>
                <p>Sub-millisecond cycle times for precision manufacturing</p>
              </div>

              <div className="benefit-card animate-on-scroll">
                <div className="benefit-number">4</div>
                <h3>Built-in Safety</h3>
                <p>SIL 3 rated safety functions integrated into the platform</p>
              </div>

              <div className="benefit-card animate-on-scroll">
                <div className="benefit-number">5</div>
                <h3>Remote Access</h3>
                <p>Monitor and control production from any location securely</p>
              </div>

              <div className="benefit-card animate-on-scroll">
                <div className="benefit-number">6</div>
                <h3>Long Lifecycle</h3>
                <p>Support and spare parts availability for 15+ years</p>
              </div>
            </div>
          </div>
        </section>


      </PageLayout>
    </>
  );
}
