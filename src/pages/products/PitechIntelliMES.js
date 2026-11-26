import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Layers, Cpu, Activity, BarChart3,
  Bell, Tv, Sparkles, Clock, Settings,
  Play, FileText,
  ShieldCheck, Wrench, Smartphone, Users, Zap,
  AlertTriangle, Workflow, Sliders,
  MessageSquare, CheckCircle2
} from "lucide-react";
import "./PitechIntelliMES.css";

const AI_CHAPTERS = [
  { time: 0, label: "Telemetry & Signal Ingestion", desc: "Live streaming from PLCs, drives, sensors and edge devices" },
  { time: 18, label: "Ask in Natural Language", desc: "Plain language inquiries with engineering reasons, not guesses" },
  { time: 38, label: "Permissible Limits Control", desc: "Strict engineer-configured safety envelopes for speed, temp & feed" },
  { time: 58, label: "2-Way PLC Machine Tuning", desc: "Autonomous setpoint recalibration and write-back to controller" },
  { time: 82, label: "Closed-Loop Sensor Feedback", desc: "Continuous sensor validation to verify mechanical response" },
  { time: 108, label: "One Platform, One Brain", desc: "Connect, View, EMS and MES unified under Intelli AI" },
];

export default function PitechIntelliMES() {
  const [activeChapter, setActiveChapter] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    document.title = "intelli AI - Autonomous Factory Intelligence & Closed-Loop Control | PiTech Automation";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.pitechautomation.com/products/intelli-ai");

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Pitech Intelli AI: Autonomous industrial artificial intelligence. Data in, optimum out. Live PLC ingestion, plain language questions, and automatic machine setpoint tuning strictly inside engineer-set permissible limits."
      );
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".pmes-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    for (let i = AI_CHAPTERS.length - 1; i >= 0; i--) {
      if (cur >= AI_CHAPTERS[i].time - 1) {
        setActiveChapter(i);
        break;
      }
    }
  };

  const jumpToChapter = (time, index) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    videoRef.current.play().catch(() => {});
    setActiveChapter(index);
  };

  return (
    <div className="pmes-page-wrapper">
      {/* ════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════ */}
      <section className="pmes-hero">
        <div className="pmes-hero-bg" />
        <div className="pmes-hero-grid-pattern" />

        <div className="pmes-container pmes-hero-inner">
          <div className="pmes-hero-content pmes-animate">
            <nav className="pmes-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/products/pitech-connect">Products</Link>
              <span>›</span>
              <span className="pmes-breadcrumb-current">intelli AI</span>
            </nav>

            <span className="pmes-hero-tag">
              <Sparkles size={13} className="pmes-pulse" />
              Autonomous Factory Intelligence &amp; Closed-Loop Tuning
            </span>

            <h1 className="pmes-hero-title">
              Pitech <span>intelli AI</span>
            </h1>

            <p className="pmes-hero-subtitle">
              <strong>Data in. Optimum out.</strong> Next-generation industrial artificial intelligence that analyzes live
              PLC telemetry, answers factory inquiries in natural language, and automatically tunes machine setpoints—strictly
              within engineer-set permissible limits.
            </p>

            <div className="pmes-hero-actions">
              <a href="#video-showcase" className="pmes-btn pmes-btn-primary">
                Watch System Demo <Play size={15} fill="currentColor" />
              </a>
            </div>
          </div>
        </div>

        <div className="pmes-hero-wave">
          <svg viewBox="0 0 1440 45" fill="none" preserveAspectRatio="none">
            <path d="M0 45 L0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 45 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STATS RIBBON
      ════════════════════════════════════════════ */}
      <div className="pmes-stats-bar">
        <div className="pmes-container pmes-stats-inner">
          <div className="pmes-stat-item pmes-animate">
            <div className="pmes-stat-icon"><Activity size={20} /></div>
            <div>
              <strong>Data In → Optimum Out</strong>
              <span>Microsecond Edge &amp; Cloud Ingestion</span>
            </div>
          </div>
          <div className="pmes-stat-item pmes-animate pmes-delay-1">
            <div className="pmes-stat-icon"><ShieldCheck size={20} /></div>
            <div>
              <strong>Permissible Limits</strong>
              <span>100% Safe Engineer-Set Guardrails</span>
            </div>
          </div>
          <div className="pmes-stat-item pmes-animate pmes-delay-2">
            <div className="pmes-stat-icon"><MessageSquare size={20} /></div>
            <div>
              <strong>Ask in Plain Language</strong>
              <span>Answers with Reasons, Not Guesses</span>
            </div>
          </div>
          <div className="pmes-stat-item pmes-animate pmes-delay-3">
            <div className="pmes-stat-icon"><Workflow size={20} /></div>
            <div>
              <strong>2-Way PLC Synchronization</strong>
              <span>Closed-Loop Sensor Verification</span>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          DEDICATED VIDEO DEMO SHOWCASE SECTION
      ════════════════════════════════════════════ */}
      <section className="pmes-section pmes-bg-dark" id="video-showcase">
        <div className="pmes-container">
          <header className="pmes-section-head pmes-dark-head pmes-animate">
            <span className="pmes-badge dark">Product Showcase</span>
            <h2>Experience Pitech Intelli AI in Action</h2>
            <p>
              Watch the complete walkthrough of Pitech Intelli AI: from live machine tag ingestion and natural language plant inquiries
              to autonomous permissible limits tuning and real-time sensor feedback loops.
            </p>
          </header>

          <div className="pmes-showcase pmes-animate pmes-delay-1">
            {/* Left Card: Video Player styled like Pitech Connect */}
            <div className="pmes-window-card">
              <div className="pmes-video-header">
                <div className="pmes-dots">
                  <span className="red" /><span className="yellow" /><span className="green" />
                </div>
                <div className="pmes-video-label">
                  <Activity size={14} className="pmes-pulse" /> PITECH INTELLI AI / LIVE SYSTEM DEMO
                </div>
              </div>

              <div className="pmes-video-wrap">
                <video
                  ref={videoRef}
                  className="pmes-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                >
                  <source src="/videos/pitech intelliAI.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="pmes-video-footer">
                <div className="pmes-video-accent-bar" />
                <div className="pmes-video-tags-row">
                  <span><Zap size={14} /> Edge Telemetry</span>
                  <span><Sliders size={14} /> Permissible Limits</span>
                  <span><Workflow size={14} /> 2-Way Machine Tuning</span>
                  <span><CheckCircle2 size={14} /> Sensor Feedback</span>
                </div>
              </div>
            </div>

            {/* Right Card: Video Chapters */}
            <div className="pmes-chapters-card">
              <div className="pmes-chapters-head">
                <div className="pmes-chapters-head-title"><Sparkles size={16} /> Video Chapters</div>
                <span className="pmes-chapters-select-label">SELECT A TOPIC</span>
              </div>
              <div className="pmes-chapters-list">
                {AI_CHAPTERS.map((ch, idx) => {
                  const isActive = activeChapter === idx;
                  return (
                    <button
                      key={idx}
                      className={`pmes-chapter-row ${isActive ? "active" : ""}`}
                      onClick={() => jumpToChapter(ch.time, idx)}
                    >
                      <span className={`pmes-chapter-badge ${isActive ? "active" : ""}`}>
                        {ch.time === 0 ? "0:00" : ch.time < 60 ? `0:${ch.time}` : `${Math.floor(ch.time / 60)}:${ch.time % 60 < 10 ? '0' : ''}${ch.time % 60}`}
                      </span>
                      <div className="pmes-chapter-text">
                        <div className="pmes-chapter-title">{ch.label}</div>
                        <div className="pmes-chapter-desc">{ch.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 1: PITECH INTELLI AI - DATA IN. OPTIMUM OUT. (IMAGE 1)
      ════════════════════════════════════════════ */}
      <section className="pmes-section pmes-bg-white" id="ai-core-control">
        <div className="pmes-container">
          <header className="pmes-section-head pmes-animate">
            <span className="pmes-badge">Core Intelligence</span>
            <h2>Pitech Intelli AI — Data In. Optimum Out.</h2>
            <p>
              Autonomous closed-loop optimization that reads live shop-floor signals, reasons through natural language questions,
              and recalibrates machine parameters safely within engineer-defined boundaries.
            </p>
          </header>

          {/* Featured Visual & Analysis Grid */}
          <div className="pai-core-grid pmes-animate pmes-delay-1">
            {/* Left: Embedded High-Resolution Graphic of Image 1 */}
            <div className="pai-image-card">
              <div className="pai-card-glow-badge">
                <Sparkles size={14} /> LIVE CLOSED-LOOP ARCHITECTURE
              </div>
              <div className="pai-image-wrapper">
                <img
                  src="/images/pitech-intelli-ai-control.jpg"
                  alt="Pitech Intelli AI - Data in. Optimum out. Permissible limits and automatic machine control"
                  className="pai-graphic-img"
                  loading="lazy"
                />
              </div>
              <div className="pai-image-caption">
                <strong>Pitech Intelli AI Operational Flow</strong>
                <span>Real-time ingestion, plain-language interaction, and bounded autonomous setpoint tuning.</span>
              </div>
            </div>

            {/* Right: Detailed Deep Dive on the 3 Pillars & Safe Limits */}
            <div className="pai-pillars-container">
              {/* 3 Pillars */}
              <div className="pai-pillars-list">
                <div className="pai-pillar-box">
                  <div className="pai-pillar-num">1</div>
                  <div className="pai-pillar-content">
                    <h4>Analyse</h4>
                    <p>
                      Live data from PLCs, sensors, drives. In the cloud, or on a local edge device inside your plant.
                      Continuous microsecond register polling captures speed, thermal profiles, and pressure spikes.
                    </p>
                  </div>
                </div>

                <div className="pai-pillar-box">
                  <div className="pai-pillar-num">2</div>
                  <div className="pai-pillar-content">
                    <h4>Ask</h4>
                    <p>
                      Type a question in plain language ("Why did Line 3 reject rate increase during shift C?").
                      Get instant, explainable answers backed by historical telemetry reasons, not guesswork.
                    </p>
                  </div>
                </div>

                <div className="pai-pillar-box">
                  <div className="pai-pillar-num">3</div>
                  <div className="pai-pillar-content">
                    <h4>Tune</h4>
                    <p>
                      Recalibrates speed, temperature, pressure, and feed rates automatically.
                      Operates <strong>strictly inside engineer-set permissible limits</strong> for total plant safety.
                    </p>
                  </div>
                </div>
              </div>

              {/* Permissible Limits Interactive Simulation Box */}
              <div className="pai-limits-box">
                <div className="pai-limits-head">
                  <div className="pai-limits-title">
                    <Sliders size={16} /> PERMISSIBLE LIMITS
                  </div>
                  <span className="pai-limits-sub">Sample screen, illustrative</span>
                </div>

                <div className="pai-sliders-list">
                  <div className="pai-slider-row">
                    <span className="pai-slider-name">Speed</span>
                    <div className="pai-slider-track">
                      <div className="pai-slider-safe-zone" style={{ left: "30%", width: "55%" }}>
                        <div className="pai-slider-pin" style={{ left: "68%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="pai-slider-row">
                    <span className="pai-slider-name">Temperature</span>
                    <div className="pai-slider-track">
                      <div className="pai-slider-safe-zone" style={{ left: "20%", width: "65%" }}>
                        <div className="pai-slider-pin" style={{ left: "55%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="pai-slider-row">
                    <span className="pai-slider-name">Pressure</span>
                    <div className="pai-slider-track">
                      <div className="pai-slider-safe-zone" style={{ left: "25%", width: "60%" }}>
                        <div className="pai-slider-pin" style={{ left: "76%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="pai-slider-row">
                    <span className="pai-slider-name">Feed</span>
                    <div className="pai-slider-track">
                      <div className="pai-slider-safe-zone" style={{ left: "35%", width: "50%" }}>
                        <div className="pai-slider-pin" style={{ left: "52%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pai-limits-success-banner">
                  <CheckCircle2 size={16} /> Optimum reached, within permissible limits
                </div>
              </div>
            </div>
          </div>

          {/* 5-Step Automatic Control Pipeline */}
          <div className="pai-workflow-wrap pmes-animate pmes-delay-2">
            <div className="pai-workflow-head">
              <span className="pai-workflow-badge">CLOSED-LOOP AUTOMATION</span>
              <h3>How It Controls the Machine, Automatically</h3>
              <p>Five synchronized validation gates ensure no parameter is adjusted without full sensory confirmation.</p>
            </div>

            <div className="pai-workflow-steps">
              <div className="pai-w-step">
                <div className="pai-w-num">1</div>
                <h4>Read Live Data</h4>
                <p>Telemetry stream polled directly from fieldbus controllers.</p>
              </div>
              <div className="pai-w-arrow">→</div>

              <div className="pai-w-step">
                <div className="pai-w-num">2</div>
                <h4>Recommend Set Points</h4>
                <p>AI model determines optimal physical parameters for the active lot.</p>
              </div>
              <div className="pai-w-arrow">→</div>

              <div className="pai-w-step">
                <div className="pai-w-num">3</div>
                <h4>Check Limits</h4>
                <p>Hardcoded software &amp; safety barriers enforce permissible ranges.</p>
              </div>
              <div className="pai-w-arrow">→</div>

              <div className="pai-w-step">
                <div className="pai-w-num">4</div>
                <h4>Write to PLC</h4>
                <p>Authenticated writeback to PLC register memory blocks.</p>
              </div>
              <div className="pai-w-arrow">→</div>

              <div className="pai-w-step">
                <div className="pai-w-num">5</div>
                <h4>Sensors Confirm</h4>
                <p>High-speed sensor feedback confirms physical adherence.</p>
              </div>
            </div>

            {/* Business Outcomes Banner */}
            <div className="pai-outcomes-ribbon">
              <span className="pai-outcome-pill">Higher yield</span>
              <span className="pai-outcome-pill">Less scrap</span>
              <span className="pai-outcome-pill">Stable quality</span>
              <span className="pai-outcome-pill">Lower energy per part</span>
              <span className="pai-outcome-pill">Know-how stays in plant</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2: ONE PLATFORM. ONE BRAIN. (IMAGE 2)
      ════════════════════════════════════════════ */}
      <section className="pmes-section pmes-bg-light" id="one-platform-brain">
        <div className="pmes-container">
          <header className="pmes-section-head pmes-animate">
            <span className="pmes-badge">Integrated Ecosystem</span>
            <h2>One Platform. One Brain.</h2>
            <p>
              <strong>Collect. See. Track. Decide.</strong> Pitech Intelli AI acts as the central decision-making brain,
              unifying machine connectivity, supervisory visualization, energy monitoring, and production execution.
            </p>
          </header>

          <div className="pai-platform-grid pmes-animate pmes-delay-1">
            {/* Left Column: Graphic Display of Image 2 */}
            <div className="pai-platform-graphic-card">
              <div className="pai-card-glow-badge">
                <Workflow size={14} /> UNIFIED INDUSTRIAL ECOSYSTEM
              </div>
              <div className="pai-image-wrapper">
                <img
                  src="/images/pitech-one-platform-brain.jpg"
                  alt="One Platform. One Brain. Pitech Connect, Pitech View, Pitech EMS, Pitech MES unified by Pitech Intelli AI"
                  className="pai-graphic-img"
                  loading="lazy"
                />
              </div>
              <div className="pai-image-caption">
                <strong>Central Cognitive Hub</strong>
                <span>Pitech Intelli AI processes inputs across all four specialized plant systems to drive unified optimization.</span>
              </div>
            </div>

            {/* Right Column: 4 Connected Pillars */}
            <div className="pai-quad-pillars">
              {/* Connect */}
              <div className="pai-quad-card">
                <div className="pai-quad-tag blue">COLLECT</div>
                <div className="pai-quad-icon"><Cpu size={22} /></div>
                <h4>Pitech Connect</h4>
                <p className="pai-quad-sub">The Connectivity Layer</p>
                <p className="pai-quad-desc">
                  60+ native industrial protocol drivers, OPC UA, and MQTT edge ingestion. Talks directly to PLCs, CNCs, and sensors.
                </p>
              </div>

              {/* View */}
              <div className="pai-quad-card">
                <div className="pai-quad-tag orange">SEE LIVE</div>
                <div className="pai-quad-icon"><Tv size={22} /></div>
                <h4>Pitech View</h4>
                <p className="pai-quad-sub">The Visualization Layer</p>
                <p className="pai-quad-desc">
                  Web-based SCADA screens, real-time process mimics, production ANDON displays, and multi-channel alarm notifications.
                </p>
              </div>

              {/* EMS */}
              <div className="pai-quad-card">
                <div className="pai-quad-tag teal">ENERGY</div>
                <div className="pai-quad-icon"><Zap size={22} /></div>
                <h4>Pitech EMS</h4>
                <p className="pai-quad-sub">The Energy &amp; Utility Layer</p>
                <p className="pai-quad-desc">
                  Machine-level electrical monitoring, power factor tracking, peak demand alerts, and specific kWh cost per unit produced.
                </p>
              </div>

              {/* MES */}
              <div className="pai-quad-card">
                <div className="pai-quad-tag purple">PRODUCTION</div>
                <div className="pai-quad-icon"><Layers size={22} /></div>
                <h4>Pitech MES</h4>
                <p className="pai-quad-sub">The Execution &amp; Traceability Layer</p>
                <p className="pai-quad-desc">
                  Shift planning, operator touch terminals, quality SPC, downtime Pareto loss-trees, and end-to-end component genealogy.
                </p>
              </div>
            </div>
          </div>

          {/* Central Brain Banner */}
          <div className="pai-brain-banner pmes-animate pmes-delay-2">
            <div className="pai-brain-center-circle">
              <Sparkles size={28} />
              <span>Pitech Intelli AI</span>
              <strong>DECIDES</strong>
            </div>
            <div className="pai-brain-text">
              <h3>The Cognitive Engine of Modern Manufacturing</h3>
              <p>
                Instead of isolated software silos, Pitech Intelli AI correlates energy consumption with tool wear, machine vibration,
                and operator cycle times—automatically recommending and applying optimum set-points to maximize plant-wide profitability.
              </p>
              <div className="pai-brain-cycle-pills">
                <span className="pai-cycle-pill">1. Collect (Connect)</span>
                <span className="pai-cycle-arrow">→</span>
                <span className="pai-cycle-pill">2. See (View)</span>
                <span className="pai-cycle-arrow">→</span>
                <span className="pai-cycle-pill">3. Track (EMS &amp; MES)</span>
                <span className="pai-cycle-arrow">→</span>
                <span className="pai-cycle-pill active">4. Decide (Intelli AI)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ALL 20 MODULES BREAKDOWN
      ════════════════════════════════════════════ */}
      <section className="pmes-section pmes-bg-white">
        <div className="pmes-container">
          <header className="pmes-section-head pmes-animate">
            <span className="pmes-badge">Comprehensive Scope</span>
            <h2>Integrated Manufacturing Execution Capabilities</h2>
            <p>Everything your manufacturing operations need from raw material intake to final dispatched product.</p>
          </header>

          <div className="pmes-modules-columns pmes-animate pmes-delay-1">
            {/* Modules 1-6 */}
            <div className="pmes-module-group">
              <div className="pmes-group-header">
                <span className="pmes-group-tag">MODULES 1–6</span>
                <h3>Plan &amp; Run Production</h3>
                <p>Align customer demand with shop-floor execution and operator workflow.</p>
              </div>

              <div className="pmes-module-items">
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><FileText size={18} /></div>
                  <div>
                    <strong>01. Business Planning:</strong> Plants, production lines, item masters, routing, and demand forecasting.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><Clock size={18} /></div>
                  <div>
                    <strong>02. Shift Planning:</strong> Shifts, planned breaks, statutory holidays, and dynamic plant calendar.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><BarChart3 size={18} /></div>
                  <div>
                    <strong>03. Production Planning:</strong> Daily work orders, line capacity constraints, and plan-from-demand scheduling.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><Smartphone size={18} /></div>
                  <div>
                    <strong>04. Operator Terminal:</strong> Industrial touch tablet interface with PIN login, OK/NG entry, and shift handover.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><Activity size={18} /></div>
                  <div>
                    <strong>05. Production Tracking &amp; OEE:</strong> Live counts, hourly target vs actual, and shop-floor line TV screens.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><Users size={18} /></div>
                  <div>
                    <strong>06. Manpower &amp; Skills:</strong> Attendance tracking, multi-skill matrix, and optimal workstation deployment.
                  </div>
                </div>
              </div>
            </div>

            {/* Modules 7-13 */}
            <div className="pmes-module-group highlight-group">
              <div className="pmes-group-header">
                <span className="pmes-group-tag green">MODULES 7–13</span>
                <h3>Quality, Maintenance &amp; Insight</h3>
                <p>Zero defect compliance, root-cause loss elimination, and total productive maintenance.</p>
              </div>

              <div className="pmes-module-items">
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><ShieldCheck size={18} /></div>
                  <div>
                    <strong>07. Quality &amp; Statistical Process Control (SPC):</strong> NG defect logs, first piece approval, PPM, and Cp/Cpk tracking.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><AlertTriangle size={18} /></div>
                  <div>
                    <strong>08. Downtime &amp; Loss Tree:</strong> Automatic stoppage categorization, Six Big Losses capture, and Pareto analysis.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><Layers size={18} /></div>
                  <div>
                    <strong>09. End-to-End Traceability:</strong> Work orders, batch lots, parts genealogy, child part binding, and barcode audits.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><Zap size={18} /></div>
                  <div>
                    <strong>10. Energy per Unit:</strong> Direct kWh power consumption per line, per shift, and specific energy cost per part.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><Wrench size={18} /></div>
                  <div>
                    <strong>11. Maintenance TPM:</strong> Breakdown work orders, preventive maintenance (PM) schedules, spares, and MTTR/MTBF.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><Settings size={18} /></div>
                  <div>
                    <strong>12. Mould &amp; Tool Management:</strong> Shot count accumulation, tool lifespan tracking, and tooling maintenance cards.
                  </div>
                </div>
                <div className="pmes-module-item">
                  <div className="pmes-m-icon"><Bell size={18} /></div>
                  <div>
                    <strong>13. Andon &amp; Escalation Alerts:</strong> Line call buttons, automated supervisor escalation, TV boards &amp; WhatsApp alerts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          AI ROADMAP
      ════════════════════════════════════════════ */}
      <section className="pmes-section pmes-bg-light">
        <div className="pmes-container">
          <header className="pmes-section-head pmes-animate">
            <span className="pmes-badge purple">Operational Intelligence</span>
            <h2>Intelli AI — Continuous Autonomous Learning</h2>
            <p>
              Machine learning models trained on your plant's own historical cycle times, stoppage logs, reject patterns, and PLC process values.
            </p>
          </header>

          <div className="pmes-ai-grid pmes-animate pmes-delay-1">
            <div className="pmes-ai-card">
              <div className="pmes-ai-badge">Gain: +4% to +8% OEE</div>
              <h4>"Fix this loss first"</h4>
              <p>
                Identifies micro-stoppages and tool change bottlenecks causing the biggest cumulative availability loss across all plant shifts.
              </p>
            </div>

            <div className="pmes-ai-card">
              <div className="pmes-ai-badge warning">Predictive Anomaly</div>
              <h4>"Maintain before it fails"</h4>
              <p>
                Detects early mechanical drift, motor current rises, and temperature deviations to recommend preventative maintenance before catastrophic downtime.
              </p>
            </div>

            <div className="pmes-ai-card">
              <div className="pmes-ai-badge green">Yield Optimization</div>
              <h4>"Best recipe settings"</h4>
              <p>
                Correlates ambient conditions and material batches to recommend optimal temperature, pressure, and speed set-points that minimize scrap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
