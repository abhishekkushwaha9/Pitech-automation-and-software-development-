import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Monitor, Cpu, Activity, ArrowRight,
  Bell, Tv, Sparkles, Clock, Server,
  Sliders, ShieldCheck, Zap, Layers, CheckCircle2,
  Lock, RefreshCw, AlertTriangle, Workflow,
  TrendingUp, Radio
} from "lucide-react";
import "./PitechWebSCADA.css";

export default function PitechWebSCADA() {
  useEffect(() => {
    document.title = "Pitech Web SCADA - Pure HTML5 Supervisory Control & Plant Mimics | PiTech Automation";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.pitechautomation.com/products/web-scada");

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Pitech Web SCADA: Zero-client, web-native supervisory control and data acquisition. HTML5 vector process mimics, real-time telemetry, ISA-18.2 alarm engine, and historical trend analysis."
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

    document.querySelectorAll(".pws-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pws-page-wrapper">
      {/* ════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════ */}
      <section className="pws-hero">
        <div className="pws-hero-bg" />
        <div className="pws-hero-grid-pattern" />

        <div className="pws-container pws-hero-inner">
          <div className="pws-hero-content pws-animate">
            <nav className="pws-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/products/pitech-connect">Products</Link>
              <span>›</span>
              <span className="pws-breadcrumb-current">Pitech Web SCADA</span>
            </nav>

            <span className="pws-hero-tag">
              <Sparkles size={13} className="pws-pulse" />
              Next-Gen Supervisory Control & Industrial Web SCADA
            </span>

            <h1 className="pws-hero-title">
              Pitech <span>Web SCADA</span>
            </h1>

            <p className="pws-hero-subtitle">
              Enterprise-grade web-native Supervisory Control and Data Acquisition.
              Pure HTML5 vector process mimics, microsecond telemetry binding, zero client installs,
              and secure supervisory automation across any browser, tablet, or central control room.
            </p>

            <div className="pws-hero-actions">
              <a href="#scada-architecture" className="pws-btn pws-btn-primary">
                Explore SCADA Architecture <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pws-hero-wave">
          <svg viewBox="0 0 1440 45" fill="none" preserveAspectRatio="none">
            <path d="M0 45 L0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 45 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STATS RIBBON
      ════════════════════════════════════════════ */}
      <div className="pws-stats-bar">
        <div className="pws-container pws-stats-inner">
          <div className="pws-stat-item pws-animate">
            <div className="pws-stat-icon"><Monitor size={20} /></div>
            <div>
              <strong>100% Zero-Client</strong>
              <span>Pure HTML5 & WebSockets (No Java/ActiveX)</span>
            </div>
          </div>
          <div className="pws-stat-item pws-animate pws-delay-1">
            <div className="pws-stat-icon"><Activity size={20} /></div>
            <div>
              <strong>&lt;10ms Live Latency</strong>
              <span>Microsecond Reactive Tag Binding</span>
            </div>
          </div>
          <div className="pws-stat-item pws-animate pws-delay-2">
            <div className="pws-stat-icon"><Cpu size={20} /></div>
            <div>
              <strong>60+ Protocol Drivers</strong>
              <span>Siemens, Mitsubishi, Rockwell, Modbus, OPC UA</span>
            </div>
          </div>
          <div className="pws-stat-item pws-animate pws-delay-3">
            <div className="pws-stat-icon"><ShieldCheck size={20} /></div>
            <div>
              <strong>ISA-18.2 Compliant</strong>
              <span>Prioritized Alarming & Audit Trail Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 1: THEORETICAL PARADIGM SHIFT
      ════════════════════════════════════════════ */}
      <section className="pws-section pws-bg-white" id="scada-theory">
        <div className="pws-container">
          <header className="pws-section-head pws-animate">
            <span className="pws-badge">Theoretical Foundation</span>
            <h2>The Shift from Legacy Thick-Client to Web-Native SCADA</h2>
            <p>
              Traditional SCADA architectures were engineered around desktop client executables,
              per-seat runtime licensing, locked operating systems, and heavy network management.
              Pitech Web SCADA fundamentally re-architects industrial supervision by decoupling visualization
              from machine control—delivering high-performance process mimics straight to modern web browsers.
            </p>
          </header>

          <div className="pws-compare-grid pws-animate pws-delay-1">
            {/* Legacy SCADA Card */}
            <div className="pws-compare-card legacy-card">
              <div className="pws-compare-head">
                <span className="pws-compare-badge legacy-badge">Traditional Architecture</span>
                <h3>Legacy Thick-Client SCADA</h3>
                <p>Proprietary desktop software tied to dedicated engineering workstations.</p>
              </div>
              <ul className="pws-compare-list">
                <li>
                  <div className="pws-compare-icon-wrap legacy-wrap"><Clock size={15} /></div>
                  <div>
                    <strong>Per-Terminal Client Installation:</strong>
                    <span>Each PC requires dedicated OS software installs, runtime dongles, and local configuration.</span>
                  </div>
                </li>
                <li>
                  <div className="pws-compare-icon-wrap legacy-wrap"><Lock size={15} /></div>
                  <div>
                    <strong>Per-Seat Runtime Licensing:</strong>
                    <span>Licensing costs scale rapidly with every added viewer, operator station, or control monitor.</span>
                  </div>
                </li>
                <li>
                  <div className="pws-compare-icon-wrap legacy-wrap"><AlertTriangle size={15} /></div>
                  <div>
                    <strong>Hardware &amp; OS Lock-In:</strong>
                    <span>Vulnerable to Windows version deprecations, Java runtime conflicts, and heavy IT maintenance.</span>
                  </div>
                </li>
                <li>
                  <div className="pws-compare-icon-wrap legacy-wrap"><RefreshCw size={15} /></div>
                  <div>
                    <strong>Complex Deployment Cycles:</strong>
                    <span>Screen changes or tag modifications require redeploying client packages station by station.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Modern Pitech Web SCADA Card */}
            <div className="pws-compare-card modern-card">
              <div className="pws-compare-head">
                <span className="pws-compare-badge modern-badge">Next-Gen Architecture</span>
                <h3>Pitech Modern Web SCADA</h3>
                <p>Decoupled HTML5 server-client architecture with reactive WebSockets.</p>
              </div>
              <ul className="pws-compare-list">
                <li>
                  <div className="pws-compare-icon-wrap modern-wrap"><CheckCircle2 size={15} /></div>
                  <div>
                    <strong>100% Zero-Touch Web Deployment:</strong>
                    <span>Accessible on Chrome, Edge, Safari or Firefox with zero client installations or browser plugins.</span>
                  </div>
                </li>
                <li>
                  <div className="pws-compare-icon-wrap modern-wrap"><CheckCircle2 size={15} /></div>
                  <div>
                    <strong>Unlimited Operator &amp; Manager Views:</strong>
                    <span>Centralized server licensing with zero per-seat penalty across mobile, tablet, and plant TVs.</span>
                  </div>
                </li>
                <li>
                  <div className="pws-compare-icon-wrap modern-wrap"><CheckCircle2 size={15} /></div>
                  <div>
                    <strong>Platform-Agnostic Vector Mimics:</strong>
                    <span>High-resolution SVG and WebGL rendering that scales from handheld tablets to 4K video walls.</span>
                  </div>
                </li>
                <li>
                  <div className="pws-compare-icon-wrap modern-wrap"><CheckCircle2 size={15} /></div>
                  <div>
                    <strong>Instant Server-Side Hot Updates:</strong>
                    <span>Modifications made on the central server reflect instantaneously across all live operator sessions.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2: 4-TIER SUPERVISORY TOPOLOGY
      ════════════════════════════════════════════ */}
      <section className="pws-section pws-bg-light" id="scada-architecture">
        <div className="pws-container">
          <header className="pws-section-head pws-animate">
            <span className="pws-badge">System Topology</span>
            <h2>4-Tier Web SCADA Control &amp; Data Pipeline</h2>
            <p>
              A robust, decoupled architecture separating fieldbus control from enterprise visualization
              to ensure plant-floor deterministic execution is never compromised by supervisory traffic.
            </p>
          </header>

          <div className="pws-topo-grid pws-animate pws-delay-1">
            {/* Tier 1 */}
            <div className="pws-topo-card">
              <div className="pws-topo-number">TIER 01</div>
              <div className="pws-topo-icon"><Cpu size={24} /></div>
              <h4>Fieldbus &amp; Machine Level</h4>
              <p>Deterministic machine automation executed locally on industrial controllers.</p>
              <div className="pws-topo-features">
                <span>PLC (Siemens, Mitsubishi, Rockwell)</span>
                <span>CNCs &amp; Robotic Controllers</span>
                <span>Smart Power Meters &amp; RTUs</span>
                <span>Distributed Remote I/O Nodes</span>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="pws-topo-card highlight-edge">
              <div className="pws-topo-number">TIER 02</div>
              <div className="pws-topo-icon"><Zap size={24} /></div>
              <h4>Edge Ingestion Engine</h4>
              <p>Pitech Connect industrial data acquisition and protocol translation layer.</p>
              <div className="pws-topo-features">
                <span>60+ Protocol Drivers Native</span>
                <span>OPC UA / MQTT Sparkplug B</span>
                <span>10ms Microsecond Register Polling</span>
                <span>Edge Filtering &amp; Heartbeat Watchdog</span>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="pws-topo-card highlight-server">
              <div className="pws-topo-number">TIER 03</div>
              <div className="pws-topo-icon"><Server size={24} /></div>
              <h4>SCADA Core &amp; State Engine</h4>
              <p>In-memory real-time tag database, formula evaluations, and event state machines.</p>
              <div className="pws-topo-features">
                <span>Real-Time In-Memory Tag Cache</span>
                <span>ISA-18.2 Alarm Priority Matrix</span>
                <span>Dynamic Calculation &amp; Math Parser</span>
                <span>Relational / Time-Series Historian</span>
              </div>
            </div>

            {/* Tier 4 */}
            <div className="pws-topo-card highlight-web">
              <div className="pws-topo-number">TIER 04</div>
              <div className="pws-topo-icon"><Tv size={24} /></div>
              <h4>Pure HTML5 Presentation</h4>
              <p>Reactive browser visualization, animated mimics, and central control room consoles.</p>
              <div className="pws-topo-features">
                <span>Interactive SVG Process Mimics</span>
                <span>60 FPS Multi-Pen Live Trends</span>
                <span>Central Plant Video Walls</span>
                <span>Mobile &amp; Operator Tablet HMI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3: CORE TECHNICAL CAPABILITIES
      ════════════════════════════════════════════ */}
      <section className="pws-section pws-bg-white" id="scada-features">
        <div className="pws-container">
          <header className="pws-section-head pws-animate">
            <span className="pws-badge">Capabilities</span>
            <h2>Core Technical Web SCADA Capabilities</h2>
            <p>Built from the ground up for mission-critical industrial supervision, compliance, and operator agility.</p>
          </header>

          <div className="pws-caps-grid pws-animate pws-delay-1">
            {/* Cap 1 */}
            <div className="pws-cap-card">
              <div className="pws-cap-icon"><Layers size={22} /></div>
              <h4>Dynamic Vector Process Mimics</h4>
              <p>
                Resolution-independent SVG vector graphics. Animated pumps, color-coded multi-state valves,
                filling liquid tanks, dynamic conveyor flows, and real-time machine status overlays.
              </p>
              <div className="pws-cap-pill">Vector SVG / Canvas Engine</div>
            </div>

            {/* Cap 2 */}
            <div className="pws-cap-card">
              <div className="pws-cap-icon"><TrendingUp size={22} /></div>
              <h4>High-Frequency Trend Engine</h4>
              <p>
                Multi-pen time-series graphing capable of rendering 10,000+ points at 60 FPS.
                Features instant pan, pinch-to-zoom, delta cursor measurement, and historical overlay comparisons.
              </p>
              <div className="pws-cap-pill">60 FPS WebGL Rendering</div>
            </div>

            {/* Cap 3 */}
            <div className="pws-cap-card">
              <div className="pws-cap-icon"><Bell size={22} /></div>
              <h4>ISA-18.2 Alarm &amp; Escalation</h4>
              <p>
                Hierarchical alarm management with Priority 1 (Emergency) to Priority 4 (Advisory) states.
                Includes alarm shelving, flood suppression, audit trails, and multi-channel WhatsApp/Email dispatch.
              </p>
              <div className="pws-cap-pill">State-Machine Prioritization</div>
            </div>

            {/* Cap 4 */}
            <div className="pws-cap-card">
              <div className="pws-cap-icon"><Sliders size={22} /></div>
              <h4>Recipe &amp; Setpoint Supervisory</h4>
              <p>
                Secure write-back to machine registers with two-way handshaking. Store, validate, and download
                production recipes, temperature targets, and line speed parameters with operator privilege checks.
              </p>
              <div className="pws-cap-pill">Two-Way Handshake Writes</div>
            </div>

            {/* Cap 5 */}
            <div className="pws-cap-card">
              <div className="pws-cap-icon"><Clock size={22} /></div>
              <h4>Historical Shift Playback</h4>
              <p>
                "Time-Machine" playback engine allowing plant supervisors to rewind and replay exact second-by-second
                machine and process parameters during unexpected stoppages or quality deviations.
              </p>
              <div className="pws-cap-pill">Incident Replay &amp; Diagnostics</div>
            </div>

            {/* Cap 6 */}
            <div className="pws-cap-card">
              <div className="pws-cap-icon"><ShieldCheck size={22} /></div>
              <h4>Role-Based Access &amp; Audit Trail</h4>
              <p>
                Granular security matrix (Administrator, Chief Engineer, Line Operator, Read-Only Observer).
                Tamper-evident 21 CFR Part 11 compliant audit logs recording every setpoint write and alarm acknowledgment.
              </p>
              <div className="pws-cap-pill">21 CFR Part 11 Readiness</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4: ECOSYSTEM SYNERGY
      ════════════════════════════════════════════ */}
      <section className="pws-section pws-bg-light" id="ecosystem-synergy">
        <div className="pws-container">
          <header className="pws-section-head pws-animate">
            <span className="pws-badge">Integrated Stack</span>
            <h2>How Pitech Web SCADA Unites with the Pitech Ecosystem</h2>
            <p>
              Pitech Web SCADA serves as the real-time supervisory nervous system of your factory,
              bridging raw machine telemetry from Pitech Connect with production intelligence from intelliAI MES.
            </p>
          </header>

          <div className="pws-synergy-grid pws-animate pws-delay-1">
            <div className="pws-synergy-card connect">
              <div className="pws-synergy-tag">LAYER 01: ACQUISITION</div>
              <div className="pws-synergy-icon"><Radio size={24} /></div>
              <h3>Pitech Connect</h3>
              <p className="pws-synergy-role">The Ingestion Engine</p>
              <p className="pws-synergy-desc">
                Connects 60+ PLC and CNC brands, polls high-speed registers, and feeds normalized real-time telemetry.
              </p>
              <span className="pws-synergy-link-badge">Streams Machine Telemetry →</span>
            </div>

            <div className="pws-synergy-card scada active">
              <div className="pws-synergy-tag highlight">LAYER 02: SUPERVISION</div>
              <div className="pws-synergy-icon highlight"><Monitor size={24} /></div>
              <h3>Pitech Web SCADA</h3>
              <p className="pws-synergy-role">The Supervisory Engine</p>
              <p className="pws-synergy-desc">
                Visualizes real-time vector mimics, monitors process alarms, enables setpoint control, and logs historical time-series.
              </p>
              <span className="pws-synergy-link-badge highlight">Controls &amp; Monitors in Real-Time</span>
            </div>

            <div className="pws-synergy-card mes">
              <div className="pws-synergy-tag">LAYER 03: INTELLIGENCE</div>
              <div className="pws-synergy-icon"><Workflow size={24} /></div>
              <h3>intelliAI MES</h3>
              <p className="pws-synergy-role">The Operational Engine</p>
              <p className="pws-synergy-desc">
                Turns SCADA telemetry into shift plans, real-time OEE calculations, serial traceability, and AI loss-tree reduction.
              </p>
              <span className="pws-synergy-link-badge">Optimizes Factory Production →</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
