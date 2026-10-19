import React from "react";
import { Factory, Wrench, PackageCheck, ShieldCheck, Radio } from "lucide-react";
import PageLayout from "../../layouts/PageLayout";
import "./RFID.css";

const HERO_SUBTITLE_WORDS = [
  "Complete",
  "RFID",
  "solutions",
  "for",
  "traceability,",
  "access",
  "control,",
  "and",
  "asset",
  "tracking",
  "in",
  "harsh",
  "industrial",
  "environments."
];

export default function RFID() {
  const [titleWordsCount, setTitleWordsCount] = React.useState(0);
  const [subtitleWordsCount, setSubtitleWordsCount] = React.useState(0);
  const [isTypingDone, setIsTypingDone] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

    let titleIdx = 0;
    const titleInterval = setInterval(() => {
      titleIdx++;
      setTitleWordsCount(titleIdx);
      if (titleIdx >= 4) {
        clearInterval(titleInterval);
        setTimeout(() => {
          let subIdx = 0;
          const subInterval = setInterval(() => {
            subIdx++;
            setSubtitleWordsCount(subIdx);
            if (subIdx >= HERO_SUBTITLE_WORDS.length) {
              clearInterval(subInterval);
              setTimeout(() => setIsTypingDone(true), 1200);
            }
          }, 110);
        }, 150);
      }
    }, 140);

    return () => {
      observer.disconnect();
      clearInterval(titleInterval);
    };
  }, []);

  const rfidTypes = [
    {
      title: "HF RFID",
      frequency: "13.56 MHz",
      standard: "ISO 15693",
      description: "Short to medium range, excellent for access control and payment systems"
    },
    {
      title: "UHF RFID",
      frequency: "865-868 MHz",
      standard: "ISO 18000",
      description: "Long range, ideal for supply chain and inventory management"
    },
    {
      title: "Industrial RFID Tags",
      rating: "IP67/IP68",
      standard: "Ruggedized",
      description: "Waterproof and temperature-resistant tags for harsh manufacturing"
    },
    {
      title: "RFID Readers/Writers",
      speed: "1-5ms",
      interface: "USB/Ethernet/Serial",
      description: "High-speed data capture with multiple connectivity options"
    },
    {
      title: "RFID Antennas",
      type: "Directional/Omnidirectional",
      gain: "4-12 dBi",
      description: "Optimized antenna designs for various deployment scenarios"
    },
    {
      title: "RFID Middleware",
      features: "Real-time filtering",
      integration: "ERP/MES compatible",
      description: "Software layer for data management and system integration"
    }
  ];

  const applications = [
    { icon: <Factory size={26} strokeWidth={2} />, name: "Assembly Traceability", desc: "Track components through manufacturing stages" },
    { icon: <Wrench size={26} strokeWidth={2} />, name: "Tooling Management", desc: "Monitor tool location and maintenance status" },
    { icon: <PackageCheck size={26} strokeWidth={2} />, name: "WIP Tracking", desc: "Real-time work-in-progress visibility" },
    { icon: <ShieldCheck size={26} strokeWidth={2} />, name: "Access Control", desc: "Secure personnel and asset movement" },
    { icon: <Radio size={26} strokeWidth={2} />, name: "Asset Tracking", desc: "Complete lifecycle monitoring of equipment" }
  ];

  const rfidProducts = [
    { 
      name: "RFM 32 SL 200", 
      type: "RFID Read/Write Device", 
      image: "/images/RFM 32 SL 200.jpg",
      frequency: "13.56 MHz (HF)",
      range: "Up to 200 mm",
      interface: "RS485 / Profinet",
      desc: "Industrial high-frequency read/write head optimized for automated conveyor lines and pallet routing."
    },
    { 
      name: "RDH 242 00", 
      type: "UHF Long-Range Device", 
      image: "/images/RDH 242 00.jpg",
      frequency: "865 - 868 MHz (UHF)",
      range: "Up to 2.5 Meters",
      interface: "Ethernet / Modbus TCP",
      desc: "Heavy-duty UHF transceiver for bulk identification, logistics gating, and yard asset management."
    },
    { 
      name: "RFM 32 SL 200 Ex-n", 
      type: "Explosion-Proof RFID Head", 
      image: "/images/RFM 32 SL 200 Ex-n.jpg",
      frequency: "13.56 MHz (HF)",
      range: "Up to 180 mm",
      interface: "ATEX Zone 2 Certified",
      desc: "ATEX certified explosion-proof head designed for paint shops, chemical lines, and hazardous zones."
    },
    { 
      name: "RFM 62 SL 200", 
      type: "High-Performance RFID Head", 
      image: "/images/RFM 62 SL 200.jpg",
      frequency: "13.56 MHz (HF)",
      range: "Up to 300 mm",
      interface: "IO-Link / Profibus",
      desc: "Extended sensing range reader with direct PLC fieldbus connectivity for robotic cell part verification."
    },
    { 
      name: "RFM 32 SL 200-M12-5A", 
      type: "M12 Connector RFID Unit", 
      image: "/images/RFM 32 SL 200-M12-5A.jpg",
      frequency: "13.56 MHz (HF)",
      range: "Up to 200 mm",
      interface: "M12 5-Pin Quick-Lock",
      desc: "Compact cylindrical housing with industrial quick-disconnect M12 connector for space-constrained tooling."
    },
    { 
      name: "RFI 32 L 120-L10", 
      type: "Compact RFID Read Sensor", 
      image: "/images/RFI 32 L 120-L10.jpg",
      frequency: "125 kHz / 13.56 MHz",
      range: "Up to 120 mm",
      interface: "Digital I/O & Serial",
      desc: "Ultra-fast read-only sensor engineered for rapid component indexing and error-proof assembly lines."
    }
  ];

  const renderedTitle = (
    <>
      {titleWordsCount >= 1 && <span className="rfid-typed-word">RFID</span>}
      {titleWordsCount >= 2 && (
        <span>
          <span className="rfid-typed-word">(Radio</span>
          {titleWordsCount >= 3 && <span className="rfid-typed-word">Frequency</span>}
          {titleWordsCount >= 4 && <span className="rfid-typed-word">Identification)</span>}
        </span>
      )}
      {titleWordsCount < 4 && <span className="rfid-typewriter-cursor">|</span>}
    </>
  );

  const renderedSubtitle = (
    <p className="rfid-hero-subtitle">
      {HERO_SUBTITLE_WORDS.slice(0, subtitleWordsCount).map((word, idx) => (
        <span key={idx} className="rfid-typed-word">
          {word}
        </span>
      ))}
      {titleWordsCount >= 4 && !isTypingDone && (
        <span className="rfid-typewriter-cursor">|</span>
      )}
    </p>
  );

  return (
    <div className="rfid-page-wrapper">
      <PageLayout
        title="RFID <span>(Radio Frequency Identification)</span>"
        tag="Industry 4.0"
        subtitle="Complete RFID solutions for traceability, access control, and asset tracking in harsh industrial environments."
        heroVideo="/videos/rfid.mp4"
        heroImage="/images/RFID-i.jpg"
        breadcrumb={[
          { label: "Solutions", path: "/services" },
          { label: "Industry 4.0", path: "/industry/digitalization" },
          { label: "RFID" }
        ]}
      >
        {/* RFID Types Section */}
        <section className="rfid-types-section">
          <div className="container">
            <div className="rfid-section-header animate-on-scroll">
              <h2>Complete RFID Technology Suite</h2>
              <p>From readers and tags to middleware, we provide all components for end-to-end traceability</p>
            </div>

            <div className="rfid-types-grid">
              {rfidTypes.map((type, index) => (
                <div key={index} className="rfid-type-card animate-on-scroll">
                  <div className="type-header">
                    <h3>{type.title}</h3>
                    <div className="type-specs">
                      {type.frequency && <span className="spec-badge">{type.frequency}</span>}
                      {type.rating && <span className="spec-badge">{type.rating}</span>}
                      {type.speed && <span className="spec-badge">{type.speed}</span>}
                      {type.type && <span className="spec-badge">{type.type}</span>}
                    </div>
                  </div>

                  <div className="type-details">
                    {type.standard && <p><strong>Standard:</strong> {type.standard}</p>}
                    {type.interface && <p><strong>Interface:</strong> {type.interface}</p>}
                    {type.gain && <p><strong>Gain:</strong> {type.gain}</p>}
                    {type.integration && <p><strong>Integration:</strong> {type.integration}</p>}
                  </div>

                  <p className="type-description">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="rfid-benefits-section">
          <div className="container">
            <div className="benefits-grid">
              <div className="benefits-content animate-on-scroll">
                <h2>Why RFID for Industrial Automation</h2>
                <p className="lead">
                  RFID technology provides a contactless, highly reliable method for identifying and tracking products, tools, and assets throughout your manufacturing facility.
                </p>

                <div className="benefits-list">
                  <div className="benefit-item">
                    <div className="benefit-icon">🚀</div>
                    <div>
                      <h4>Increased Efficiency</h4>
                      <p>Eliminate manual data entry and reduce cycle times by 30-50%</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">📈</div>
                    <div>
                      <h4>Real-Time Visibility</h4>
                      <p>Track materials and finished goods through every production stage</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">✓</div>
                    <div>
                      <h4>Quality Assurance</h4>
                      <p>Trace product history and ensure regulatory compliance</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">💰</div>
                    <div>
                      <h4>Cost Reduction</h4>
                      <p>Lower operational costs through process automation and optimization</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">🔒</div>
                    <div>
                      <h4>Security & Control</h4>
                      <p>Prevent counterfeiting and unauthorized asset removal</p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">🔄</div>
                    <div>
                      <h4>Scalability</h4>
                      <p>Easily expand from pilot to full-scale production deployment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="benefits-image animate-on-scroll">
                <img src="/images/RFID-i.jpg" alt="RFID System in Action" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="rfid-products-section">
          <div className="container">
            <div className="rfid-section-header animate-on-scroll">
              <h2>Featured RFID Products</h2>
              <p>Explore our industrial-grade RFID read and write devices</p>
            </div>

            <div className="rfid-products-grid">
              {rfidProducts.map((product, index) => (
                <div key={index} className="rfid-product-card animate-on-scroll">
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <span className="product-type-badge">{product.type}</span>
                    <h3>{product.name}</h3>
                    <p className="product-card-desc">{product.desc}</p>
                    <div className="product-specs-pills">
                      <span className="spec-pill">📡 {product.frequency}</span>
                      <span className="spec-pill">📏 {product.range}</span>
                      <span className="spec-pill">🔌 {product.interface}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="rfid-applications-section">
          <div className="container">
            <div className="rfid-section-header animate-on-scroll">
              <h2>Real-World RFID Applications</h2>
              <p>Proven use cases across manufacturing and logistics</p>
            </div>

            <div className="applications-grid">
              {applications.map((app, index) => (
                <div key={index} className="application-card animate-on-scroll">
                  <div className="app-icon">{app.icon}</div>
                  <h3>{app.name}</h3>
                  <p>{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="rfid-specs-section">
          <div className="container">
            <div className="specs-wrapper animate-on-scroll">
              <div className="specs-left">
                <h2>Advanced RFID Capabilities</h2>
                <p className="lead">
                  Our RFID systems are built on proven standards with enterprise-grade reliability for mission-critical applications.
                </p>

                <ul className="specs-checklist">
                  <li>Operating range: 0.3 m to 10+ meters depending on type</li>
                  <li>Tag capacity: 64 bytes to 8 KB per tag</li>
                  <li>Read accuracy: 99.9% with proper antenna placement</li>
                  <li>Operating frequency: 125 kHz to 2.45 GHz</li>
                  <li>Multi-tag simultaneous reading capability</li>
                  <li>ISO certification compliance (ISO/IEC 18000 series)</li>
                  <li>Integration with PLCs, HMIs, and ERP systems</li>
                  <li>Metal and liquid tolerance options available</li>
                </ul>
              </div>

              <div className="specs-right">
                <div className="specs-highlight-box">
                  <h3>System Performance</h3>
                  <div className="performance-metric">
                    <div className="metric-label">Read Speed</div>
                    <div className="metric-value">1-5ms</div>
                  </div>
                  <div className="performance-metric">
                    <div className="metric-label">Operating Temp</div>
                    <div className="metric-value">-20 to +60°C</div>
                  </div>
                  <div className="performance-metric">
                    <div className="metric-label">IP Rating</div>
                    <div className="metric-value">IP67/IP68</div>
                  </div>
                  <div className="performance-metric">
                    <div className="metric-label">Data Retention</div>
                    <div className="metric-value">10+ Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </PageLayout>
    </div>
  );
}
