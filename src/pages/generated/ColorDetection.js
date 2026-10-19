import React, { useEffect } from "react";
import PageLayout from "../../layouts/PageLayout";
import { VisionHeroAnimation } from "../../components/SolutionsHeroAnimations";
import "./ColorDetection.css";

export default function ColorDetection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".cd-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🎨",
      title: "High-Speed RGB Sensing",
      desc: "Ultra-fast optical color sensors detecting exact RGB and LAB color values within microseconds on high-speed lines.",
      color: "#2563eb"
    },
    {
      icon: "🔍",
      title: "Micro-Variance Hue Detection",
      desc: "Distinguishes subtle shades, tint variations, and finish discrepancies that are invisible to the human eye.",
      color: "#10b981"
    },
    {
      icon: "⚡",
      title: "Automated OK/NG Sorting",
      desc: "Instant trigger to pneumatic rejection arms or diverters to reject color-mismatched items without stopping the line.",
      color: "#8b5cf6"
    },
    {
      icon: "🔄",
      title: "PLC & SCADA Interlocking",
      desc: "Direct integration with Siemens, Mitsubishi, and Allen-Bradley PLCs via PROFINET, Modbus, or Digital I/O.",
      color: "#f59e0b"
    },
    {
      icon: "☀️",
      title: "Ambient Light Compensation",
      desc: "Built-in modulated white LED lighting ensures reliable color readings regardless of changing factory ambient light.",
      color: "#06b6d4"
    },
    {
      icon: "📊",
      title: "Quality Analytics & Logging",
      desc: "Logs batch color trends and tolerance drifts to cloud dashboards for complete traceability and audit compliance.",
      color: "#ec4899"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Target Illumination",
      desc: "Calibrated multi-spectrum or white LED light illuminates the moving part on the production line."
    },
    {
      step: "02",
      title: "Spectral Color Capture",
      desc: "Precision optical lenses focus reflected light onto high-sensitivity RGB photodiode arrays or vision cameras."
    },
    {
      step: "03",
      title: "Tolerance & Hue Analysis",
      desc: "Embedded processor compares detected color wavelengths against pre-programmed master color tolerances."
    },
    {
      step: "04",
      title: "Automated Ejection / Sorting",
      desc: "Sends instant pass/fail signals to the sorting mechanism to separate defective parts seamlessly."
    }
  ];

  const applications = [
    {
      icon: "🚗",
      title: "Automotive & Wire Harness",
      desc: "Validation of multi-colored wire sequences, interior trim shade matching, and painted body panel consistency."
    },
    {
      icon: "💊",
      title: "Pharma & Medical Packaging",
      desc: "Verification of blister pack foil colors, capsule color coding, and tamper-evident cap inspection."
    },
    {
      icon: "🧴",
      title: "FMCG & Packaging",
      desc: "Bottle cap color sorting, print label verification, and multi-flavored carton sorting on packaging conveyors."
    },
    {
      icon: "🔌",
      title: "Consumer Electronics & Plastics",
      desc: "Color uniformity inspection for molded housings, buttons, connectors, and LED indicator status verification."
    }
  ];

  return (
    <PageLayout
      title="Color Detection <span>(AI Vision Inspection)</span>"
      tag="Industry 4.0"
      subtitle="High-speed industrial vision and optical RGB sensing systems for precision color verification, automated sorting, and zero-defect manufacturing."
      heroImage="/images/ai-vision-solution.jpg"
      heroAnimation={<VisionHeroAnimation />}
      breadcrumb={[
        { label: "Solutions", path: "/services" },
        { label: "Industry 4.0", path: "/industry/digitalization" },
        { label: "AI based vision solution" }
      ]}
    >
      <div className="cd-page">
        {/* ── OVERVIEW SECTION ── */}
        <section id="overview" className="cd-section cd-bg-white">
        <div className="container">
          <div className="cd-section-header cd-animate">
            <span className="cd-tag">Product Overview</span>
            <h2>Intelligent Optical Quality Assurance</h2>
            <p>Eliminate human inspection error and ensure consistent color matching across high-volume production lines.</p>
          </div>

          <div className="cd-overview-grid">
            <div className="cd-overview-img cd-animate">
              <img src="/images/ai-vision-solution.jpg" alt="AI Based Vision Inspection Solution" />
              <div className="cd-img-card-badge">
                <strong>99.8%</strong>
                <span>Inspection Accuracy</span>
              </div>
            </div>
            <div className="cd-overview-text cd-animate">
              <h3>Next-Generation Industrial Color Verification</h3>
              <p>
                PiTech Automation’s <strong>Color Detection System</strong> combines ultra-responsive RGB color sensors, industrial vision cameras, and intelligent edge processing to verify shades, finishes, and color markings on parts moving at high velocities.
              </p>
              <p>
                Whether detecting minute color variations in painted plastic components, verifying multi-colored automotive wiring harnesses, or sorting packaged goods by cap colors, our solutions integrate directly into your existing conveyor lines and PLCs.
              </p>
              <div className="cd-highlights-list">
                <div className="cd-highlight-item">
                  <span className="cd-check">✓</span>
                  <span>Microsecond response time for line speeds up to 10 m/s</span>
                </div>
                <div className="cd-highlight-item">
                  <span className="cd-check">✓</span>
                  <span>Stores up to 32 master color profiles with teach-in button & software</span>
                </div>
                <div className="cd-highlight-item">
                  <span className="cd-check">✓</span>
                  <span>IP67 ruggedized housing resistant to industrial oil, dust, and washdowns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="cd-section cd-bg-gray">
        <div className="container">
          <div className="cd-section-header cd-animate">
            <span className="cd-tag">Core Capabilities</span>
            <h2>Engineered for Industrial Performance</h2>
            <p>Advanced optical technologies designed to solve complex shop floor color detection challenges.</p>
          </div>

          <div className="cd-features-grid">
            {features.map((f, i) => (
              <div key={i} className="cd-feature-card cd-animate" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="cd-feature-icon" style={{ background: `${f.color}15`, color: f.color }}>
                  {f.icon}
                </div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="cd-section cd-bg-white">
        <div className="container">
          <div className="cd-section-header cd-animate">
            <span className="cd-tag">Workflow</span>
            <h2>How the Color Detection System Works</h2>
            <p>A closed-loop optical inspection cycle ensuring immediate pass/fail verdict and part handling.</p>
          </div>

          <div className="cd-steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="cd-step-card cd-animate" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="cd-step-num">{s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="cd-section cd-bg-gray">
        <div className="container">
          <div className="cd-section-header cd-animate">
            <span className="cd-tag">Industry Applications</span>
            <h2>Where Color Detection Makes an Impact</h2>
            <p>Versatile deployment across high-precision manufacturing sectors across India.</p>
          </div>

          <div className="cd-apps-grid">
            {applications.map((app, i) => (
              <div key={i} className="cd-app-card cd-animate" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="cd-app-icon">{app.icon}</div>
                <h4>{app.title}</h4>
                <p>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>
    </PageLayout>
  );
}
