import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import { VisionHeroAnimation } from "../../components/SolutionsHeroAnimations";
import {
  Eye, Cpu, CheckCircle2, AlertTriangle, Zap,
  Activity, Layers, Scan, BarChart3,
  Check, X, Camera, Sparkles, Filter, Server
} from "lucide-react";
import "./ColorDetection.css";

const INSPECTION_MODES = [
  {
    id: "wire-harness",
    title: "Wire Harness Sequence",
    category: "Automotive",
    desc: "12-Pin multi-color wire terminal order and crimp validation",
    targetColor: "Red / White / Blue / Green / Yellow",
    tolerance: "ΔE < 0.8",
    speed: "240 items/min",
    passSample: {
      matchScore: "99.8%",
      deltaE: "0.24",
      status: "PASS (Sequence Valid)",
      verdict: "All 12 wire colors matched standard terminal pinout.",
      detected: ["#ef4444", "#ffffff", "#3b82f6", "#10b981", "#eab308"],
      plcSignal: "Q0.0 -> OK (Proceed Assembly)"
    },
    failSample: {
      matchScore: "68.2%",
      deltaE: "3.42",
      status: "REJECT (Pin 4 Mismatch)",
      verdict: "Pin 4 expected Green (#10b981), detected Blue (#3b82f6). Line interlocked.",
      detected: ["#ef4444", "#ffffff", "#3b82f6", "#ef4444", "#eab308"],
      plcSignal: "Q0.1 -> NG (Trigger Pneumatic Lock)"
    }
  },
  {
    id: "painted-panel",
    title: "Paint Finish & Shade (ΔE)",
    category: "Coating / Plastics",
    desc: "Automotive body trim & plastic housing gloss/tint shade matching",
    targetColor: "Glacier Metallic Silver (LAB: 88.2, -0.4, 1.2)",
    tolerance: "ΔE < 0.3",
    speed: "450 items/min",
    passSample: {
      matchScore: "99.9%",
      deltaE: "0.12",
      status: "PASS (Within Shade Limits)",
      verdict: "Spectral hue variation within master batch delta tolerance.",
      detected: ["#94a3b8", "#cbd5e1", "#e2e8f0"],
      plcSignal: "Q0.0 -> OK (Conveyor Pass)"
    },
    failSample: {
      matchScore: "74.6%",
      deltaE: "1.86",
      status: "REJECT (Batch Shade Drift)",
      verdict: "Yellow hue shift detected. Coating tint out of OEM customer tolerance.",
      detected: ["#cbd5e1", "#fef08a", "#fde047"],
      plcSignal: "Q0.1 -> NG (Route to Rework Buffer)"
    }
  },
  {
    id: "packaging-cap",
    title: "High-Speed Cap Sorting",
    category: "FMCG / Beverage",
    desc: "1200 BPM bottle closure color sorting & seal integrity",
    targetColor: "Cobalt Blue Caps (#1d4ed8)",
    tolerance: "RGB 3% Band",
    speed: "1,200 caps/min",
    passSample: {
      matchScore: "99.7%",
      deltaE: "0.18",
      status: "PASS (Correct Flavor Code)",
      verdict: "Cobalt blue cap confirmed. Flavor packaging line sync OK.",
      detected: ["#1d4ed8", "#2563eb"],
      plcSignal: "Q0.0 -> OK (Continuous Feed)"
    },
    failSample: {
      matchScore: "42.1%",
      deltaE: "6.94",
      status: "REJECT (Wrong Cap Color)",
      verdict: "Red cap detected on Blue line. 8ms high-speed air blast ejected defective bottle.",
      detected: ["#dc2626", "#b91c1c"],
      plcSignal: "Q0.1 -> NG (Air Jet Solenoid Fired)"
    }
  }
];

export default function ColorDetection() {
  const location = useLocation();
  const isProductRoute = location.pathname.startsWith("/products");
  const [activeModeIdx, setActiveModeIdx] = useState(0);
  const [simState, setSimState] = useState("pass"); // 'pass', 'fail', 'scanning'
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    document.title = "AI Based Vision Solutions & Industrial Color Detection | PiTech Automation";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".cd-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const currentMode = INSPECTION_MODES[activeModeIdx];
  const currentResult = simState === "pass" ? currentMode.passSample : currentMode.failSample;

  const triggerScan = (state) => {
    setIsSimulating(true);
    setTimeout(() => {
      setSimState(state);
      setIsSimulating(false);
    }, 450);
  };

  const coreFeatures = [
    {
      icon: <Camera size={22} />,
      title: "High-Speed RGB & Spectral Array",
      desc: "Industrial CMOS vision sensors and multi-spectrum photodiodes detecting precise RGB and CIELAB color values in microseconds.",
      color: "#0284c7"
    },
    {
      icon: <Eye size={22} />,
      title: "Micro-Variance Hue (ΔE < 0.3)",
      desc: "Detects minute shade drift, coating thickness inconsistencies, and finish discrepancies totally invisible to the human eye.",
      color: "#10b981"
    },
    {
      icon: <Zap size={22} />,
      title: "Sub-Millisecond Sorting & Rejection",
      desc: "Immediate trigger to pneumatic air-jets, diverters, or robotic pickers to eject defective parts without line deceleration.",
      color: "#8b5cf6"
    },
    {
      icon: <Server size={22} />,
      title: "Direct PLC & PROFINET Interlock",
      desc: "Native communication with Siemens S7, Mitsubishi SLMP, Omron, and Allen-Bradley PLCs via PROFINET, Modbus TCP, or Digital I/O.",
      color: "#f59e0b"
    },
    {
      icon: <Sparkles size={22} />,
      title: "Dynamic Ambient Light Immunity",
      desc: "Synchronized pulsed high-CRI strobe lighting eliminates inspection drift caused by factory daylight variations or shadows.",
      color: "#06b6d4"
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Real-Time SPC & Cloud Telemetry",
      desc: "Live batch statistics, Delta-E trend curves, and reject Pareto analytics logged continuously to factory dashboards and MES.",
      color: "#ec4899"
    }
  ];

  const workflowSteps = [
    {
      num: "01",
      icon: <Sparkles size={20} />,
      title: "Calibrated Lighting",
      desc: "Diffused multi-angle high-CRI white or multi-spectrum LED strobe illuminates the target part at exact microsecond pulse."
    },
    {
      num: "02",
      icon: <Scan size={20} />,
      title: "Optical Capture",
      desc: "High-resolution telecentric optical lens projects the target onto high-frame-rate vision sensors at speeds up to 1200 BPM."
    },
    {
      num: "03",
      icon: <Cpu size={20} />,
      title: "AI & ΔE Color Matching",
      desc: "Edge neural model compares detected spectral wavelengths against stored master recipes with user-defined delta tolerances."
    },
    {
      num: "04",
      icon: <Zap size={20} />,
      title: "High-Speed Rejection",
      desc: "PLC handshake fires high-speed pneumatic ejector within 8ms for NG items while logging production audit data to SQL."
    }
  ];

  const industryApps = [
    {
      badge: "Automotive",
      title: "Wire Harness & Connectors",
      desc: "Validating multi-colored wire sequences, interior trim shade continuity, and painted body panel consistency.",
      stats: "100% Sequence Check"
    },
    {
      badge: "Pharma & Healthcare",
      title: "Blister Packs & Caps",
      desc: "Verification of blister foil colors, tablet hues, liquid fill levels, and tamper-evident cap color identification.",
      stats: "Zero Cross-Contamination"
    },
    {
      badge: "FMCG & Packaging",
      title: "Closures & Bottle Labels",
      desc: "High-speed bottle cap sorting, multi-flavor package routing, and print label registration verification at 1200 BPM.",
      stats: "1200 BPM Throughput"
    },
    {
      badge: "Electronics & Plastics",
      title: "Molded Parts & LEDs",
      desc: "Color uniformity inspection for molded housings, buttons, connectors, and optical verification of multi-color LED indicators.",
      stats: "ΔE < 0.3 Precision"
    }
  ];

  return (
    <PageLayout
      title="AI Based Vision <span>Solution</span>"
      tag={isProductRoute ? "Product · Optical Inspection Platform" : "Industry 4.0 · Optical Inspection Platform"}
      subtitle="High-speed industrial AI vision systems, multi-spectrum RGB sensing, and deep learning optical inspection for sub-millimeter color matching, zero-defect verification, and automated rejection."
      heroImage="/images/ai-vision-solution.jpg"
      heroAnimation={<VisionHeroAnimation />}
      breadcrumb={
        isProductRoute
          ? [
              { label: "Products", path: "/products/sensor" },
              { label: "AI Based Vision Solution" }
            ]
          : [
              { label: "Industry 4.0", path: "/industry/digitalization" },
              { label: "AI Based Vision Solution" }
            ]
      }
    >
      <div className="cd-page">

        {/* ── 4 STATS RIBBON ── */}
        <section className="cd-stats-ribbon">
          <div className="container">
            <div className="cd-stats-grid">
              <div className="cd-stat-card cd-animate">
                <div className="cd-stat-icon-wrap"><Eye size={22} /></div>
                <div className="cd-stat-info">
                  <strong>99.98%</strong>
                  <span>Inspection Accuracy</span>
                </div>
              </div>

              <div className="cd-stat-card cd-animate cd-delay-1">
                <div className="cd-stat-icon-wrap"><Zap size={22} /></div>
                <div className="cd-stat-info">
                  <strong>&lt; 2.5 ms</strong>
                  <span>Inference Latency</span>
                </div>
              </div>

              <div className="cd-stat-card cd-animate cd-delay-2">
                <div className="cd-stat-icon-wrap"><Activity size={22} /></div>
                <div className="cd-stat-info">
                  <strong>1,200+ BPM</strong>
                  <span>Conveyor Throughput</span>
                </div>
              </div>

              <div className="cd-stat-card cd-animate cd-delay-3">
                <div className="cd-stat-icon-wrap"><Layers size={22} /></div>
                <div className="cd-stat-info">
                  <strong>32 Profiles</strong>
                  <span>One-Touch Teach-in</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LIVE INTERACTIVE VISION TESTBENCH ── */}
        <section className="cd-section cd-bg-dark">
          <div className="container">
            <div className="cd-section-header cd-dark-head cd-animate">
              <span className="cd-tag dark"><Scan size={13} /> Interactive Simulator</span>
              <h2 className="cd-white-h2">Experience Live AI Vision Inspection</h2>
              <p className="cd-gray-p">
                Select an industrial use-case below to simulate how PiTech AI Vision intercepts part color, calculates Delta-E hue variance, and communicates with the factory PLC.
              </p>
            </div>

            {/* Testbench Container */}
            <div className="cd-simulator-box cd-animate">
              {/* Mode Select Tabs */}
              <div className="cd-sim-tabs">
                {INSPECTION_MODES.map((mode, idx) => (
                  <button
                    key={mode.id}
                    className={`cd-sim-tab ${activeModeIdx === idx ? "active" : ""}`}
                    onClick={() => { setActiveModeIdx(idx); setSimState("pass"); }}
                  >
                    <span className="cd-sim-tab-cat">{mode.category}</span>
                    <strong className="cd-sim-tab-title">{mode.title}</strong>
                  </button>
                ))}
              </div>

              {/* Simulation Screen & HUD */}
              <div className="cd-sim-body">
                {/* Left: Viewfinder Camera Feed */}
                <div className="cd-viewfinder-screen">
                  {/* Top Status Bar */}
                  <div className="cd-vf-topbar">
                    <div className="cd-vf-live-indicator">
                      <span className="cd-vf-dot" />
                      <span>CAM 01: INDUSTRIAL GIGE VISION</span>
                    </div>
                    <span className="cd-vf-fps">FPS: 360 · EXP: 350µs</span>
                  </div>

                  {/* Viewfinder Center Display */}
                  <div className="cd-vf-lens">
                    {/* Corner Reticles */}
                    <div className="cd-reticle tl" />
                    <div className="cd-reticle tr" />
                    <div className="cd-reticle bl" />
                    <div className="cd-reticle br" />

                    {/* Animated Scanline */}
                    <div className={`cd-laser-scanline ${isSimulating ? "scanning" : ""}`} />

                    {/* Inspection Target Simulation */}
                    <div className="cd-target-visual">
                      <div className="cd-target-swatches">
                        {currentResult.detected.map((color, i) => (
                          <div key={i} className="cd-swatch-box" style={{ borderColor: color }}>
                            <div className="cd-swatch-fill" style={{ backgroundColor: color }} />
                            <span>P{i + 1}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bounding Box Overlay */}
                      <div className={`cd-bounding-box ${simState}`}>
                        <div className="cd-bbox-label">
                          ROI #01 · {simState === "pass" ? "MATCH 99.8%" : "NG: ΔE > LIMIT"}
                        </div>
                      </div>
                    </div>

                    {/* Bottom HUD Overlays */}
                    <div className="cd-vf-hud-bottom">
                      <div className="cd-hud-spec">
                        <span>TOLERANCE:</span>
                        <strong>{currentMode.tolerance}</strong>
                      </div>
                      <div className="cd-hud-spec">
                        <span>LINE SPEED:</span>
                        <strong>{currentMode.speed}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Live Diagnostics Panel */}
                <div className="cd-sim-telemetry">
                  <div className="cd-telemetry-header">
                    <span className="cd-telemetry-title">INSPECTION TELEMETRY</span>
                    <span className={`cd-verdict-badge ${simState}`}>
                      {simState === "pass" ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
                      {currentResult.status}
                    </span>
                  </div>

                  <p className="cd-verdict-desc">{currentResult.verdict}</p>

                  <div className="cd-metrics-grid">
                    <div className="cd-metric-card">
                      <span className="cd-metric-lbl">Color Match</span>
                      <strong className={`cd-metric-val ${simState === "pass" ? "ok" : "fail"}`}>
                        {currentResult.matchScore}
                      </strong>
                    </div>

                    <div className="cd-metric-card">
                      <span className="cd-metric-lbl">Delta-E (ΔE)</span>
                      <strong className={`cd-metric-val ${simState === "pass" ? "ok" : "fail"}`}>
                        {currentResult.deltaE}
                      </strong>
                    </div>
                  </div>

                  <div className="cd-plc-handshake-box">
                    <div className="cd-plc-title">
                      <Server size={14} /> PLC Handshake Register (PROFINET / I/O)
                    </div>
                    <code className="cd-plc-code">{currentResult.plcSignal}</code>
                  </div>

                  <div className="cd-sim-controls">
                    <span className="cd-sim-controls-lbl">Test Trigger Scenario:</span>
                    <div className="cd-sim-btns-row">
                      <button
                        className={`cd-sim-btn pass ${simState === "pass" ? "active" : ""}`}
                        onClick={() => triggerScan("pass")}
                        disabled={isSimulating}
                      >
                        <Check size={16} /> Simulate Normal (PASS)
                      </button>
                      <button
                        className={`cd-sim-btn fail ${simState === "fail" ? "active" : ""}`}
                        onClick={() => triggerScan("fail")}
                        disabled={isSimulating}
                      >
                        <X size={16} /> Simulate Defective (FAIL)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW & ADVANTAGES ── */}
        <section id="overview" className="cd-section cd-bg-white">
          <div className="container">
            <div className="cd-overview-grid">
              <div className="cd-overview-img-wrap cd-animate">
                <div className="cd-img-frame">
                  <img src="/images/ai-vision-solution.jpg" alt="PiTech AI Vision System in Industrial Operation" />
                  <div className="cd-img-corner-tag">
                    <Activity size={14} />
                    <span>Real-Time Edge AI</span>
                  </div>
                </div>
                <div className="cd-img-card-badge">
                  <strong>0.02mm</strong>
                  <span>Spatial Resolution</span>
                </div>
              </div>

              <div className="cd-overview-text cd-animate">
                <span className="cd-tag"><Sparkles size={12} /> Next-Gen Inspection</span>
                <h2>Eliminate Human Error in Color &amp; Optical Quality</h2>
                <p>
                  Industrial production lines moving at hundreds of parts per minute cannot rely on fatigued human visual inspection. PiTech Automation's <strong>AI Vision Solutions</strong> combine ultra-responsive RGB sensor arrays, multi-wavelength strobes, and deep learning neural classifiers to detect exact hues, surface tints, and multi-color sequences in milliseconds.
                </p>
                <p>
                  Whether verifying multi-wire pinouts on automotive harnesses, matching exterior car trim coatings under varying factory sunlight, or validating cap colors on high-speed bottling lines, our vision hardware seamlessly talks to your line PLCs to automate 100% inline quality checks.
                </p>

                <div className="cd-highlights-list">
                  <div className="cd-highlight-item">
                    <span className="cd-check"><Check size={14} /></span>
                    <span><strong>Sub-Millisecond Sorting:</strong> Line speeds up to 1200 parts per minute without false rejections.</span>
                  </div>
                  <div className="cd-highlight-item">
                    <span className="cd-check"><Check size={14} /></span>
                    <span><strong>Ambient Light Immunity:</strong> Dynamic pulse-width modulation ignores factory sunlight and shadow shifts.</span>
                  </div>
                  <div className="cd-highlight-item">
                    <span className="cd-check"><Check size={14} /></span>
                    <span><strong>Ruggedized IP67 Enclosure:</strong> Resistant to heavy factory dust, vibration, and liquid washdown environments.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE CAPABILITIES ── */}
        <section className="cd-section cd-bg-gray">
          <div className="container">
            <div className="cd-section-header cd-animate">
              <span className="cd-tag"><Cpu size={13} /> Optical Engineering</span>
              <h2>Engineered for Demanding Shop Floors</h2>
              <p>Cutting-edge optical components and neural processing designed to solve complex industrial color verification challenges.</p>
            </div>

            <div className="cd-features-grid">
              {coreFeatures.map((f, i) => (
                <div key={i} className="cd-feature-card cd-animate" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="cd-feature-icon" style={{ color: f.color, background: `${f.color}15`, borderColor: `${f.color}30` }}>
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
              <span className="cd-tag"><Layers size={13} /> End-To-End Architecture</span>
              <h2>How The Optical Inspection System Works</h2>
              <p>A deterministic, closed-loop machine vision inspection cycle ensuring instantaneous pass/fail decisions.</p>
            </div>

            <div className="cd-steps-grid">
              {workflowSteps.map((s, i) => (
                <div key={i} className="cd-step-card cd-animate" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="cd-step-top">
                    <span className="cd-step-num">{s.num}</span>
                    <div className="cd-step-icon">{s.icon}</div>
                  </div>
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
              <span className="cd-tag"><Filter size={13} /> High-Impact Sectors</span>
              <h2>Where Color &amp; Vision Make The Difference</h2>
              <p>Proven production deployments running 24/7 across major manufacturing facilities in India.</p>
            </div>

            <div className="cd-apps-grid">
              {industryApps.map((app, i) => (
                <div key={i} className="cd-app-card cd-animate" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="cd-app-badge">{app.badge}</div>
                  <h4>{app.title}</h4>
                  <p>{app.desc}</p>
                  <div className="cd-app-footer">
                    <CheckCircle2 size={15} />
                    <span>{app.stats}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
