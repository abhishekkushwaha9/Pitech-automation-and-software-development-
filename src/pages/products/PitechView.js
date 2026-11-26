import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Monitor, LayoutDashboard, Cpu,
  CheckCircle2, ArrowRight, Bell, Tv,
  Gauge, TrendingUp, Sparkles, Clock, Server,
  Sliders, Palette, Radio
} from "lucide-react";
import "./PitechView.css";

export default function PitechView() {
  useEffect(() => {
    document.title = "Pitech View - Web SCADA & Production ANDON Platform | PiTech Automation";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.pitechautomation.com/products/pitech-view");

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Pitech View: Web-based SCADA screens, real-time process visualization, and Production ANDON monitoring. Connects seamlessly with Pitech Connect machine data."
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

    document.querySelectorAll(".pv-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pv-page-wrapper">
      {/* ════════════════════════════════════════════
          HERO SECTION (BACKGROUND VIDEO WITH FADED BLUE OVERLAY)
      ════════════════════════════════════════════ */}
      <section className="pv-hero">
        <div className="pv-hero-video-wrap">
          <video
            className="pv-hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/pitech view.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Faded blue / dark overlay for high video readability */}
        <div className="pv-hero-overlay" />

        <div className="pv-container pv-hero-inner">
          <div className="pv-hero-content pv-animate">
            <nav className="pv-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/products/pitech-connect">Products</Link>
              <span>›</span>
              <span className="pv-breadcrumb-current">Pitech View</span>
            </nav>

            <span className="pv-hero-tag pv-glass-dark">
              <Sparkles size={13} className="pv-pulse" />
              Web SCADA · Process Visualization · Production ANDON
            </span>

            <h1 className="pv-hero-title">
              Pitech <span>View</span>
            </h1>

            <p className="pv-hero-subtitle">
              Transform raw factory telemetry into interactive visual dashboards, Web SCADA animated screens,
              and shop-floor Production ANDON displays. Plugs directly into Pitech Connect for instant operational visibility.
            </p>

            <div className="pv-hero-actions">
              <a href="#how-it-works" className="pv-btn pv-btn-primary">
                Explore Architecture <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pv-hero-wave">
          <svg viewBox="0 0 1440 45" fill="none" preserveAspectRatio="none">
            <path d="M0 45 L0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 45 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STATS RIBBON
      ════════════════════════════════════════════ */}
      <div className="pv-stats-bar">
        <div className="pv-container pv-stats-inner">
          <div className="pv-stat-item pv-animate">
            <div className="pv-stat-icon-wrap"><Tv size={20} /></div>
            <div>
              <strong>Browser-Based</strong>
              <span>Zero Client Software Installs</span>
            </div>
          </div>
          <div className="pv-stat-item pv-animate pv-delay-1">
            <div className="pv-stat-icon-wrap"><Clock size={20} /></div>
            <div>
              <strong>Under 1 Minute</strong>
              <span>Fast Production ANDON Setup</span>
            </div>
          </div>
          <div className="pv-stat-item pv-animate pv-delay-2">
            <div className="pv-stat-icon-wrap"><Gauge size={20} /></div>
            <div>
              <strong>Sub-Second</strong>
              <span>Live Process Gauge & Trend Refresh</span>
            </div>
          </div>
          <div className="pv-stat-item pv-animate pv-delay-3">
            <div className="pv-stat-icon-wrap"><Palette size={20} /></div>
            <div>
              <strong>White-Label</strong>
              <span>Custom Logos & Theme Colors</span>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 1: INTEGRATED ECOSYSTEM OVERVIEW
      ════════════════════════════════════════════ */}
      <section className="pv-section pv-bg-white" id="how-it-works">
        <div className="pv-container">
          <header className="pv-section-head pv-animate">
            <span className="pv-badge">Connected Ecosystem</span>
            <h2>How Pitech Connect and Pitech View Work Together</h2>
            <p>
              Pitech Connect and Pitech View work together seamlessly to create an integrated industrial monitoring ecosystem.
              While Pitech Connect handles low-level machine connectivity and high-speed data acquisition,
              Pitech View turns that available data into intuitive visual dashboards, Web SCADA screens, and Production ANDON displays.
            </p>
          </header>

          <div className="pv-duo-cards pv-animate pv-delay-1">
            {/* Pitech Connect Role */}
            <div className="pv-role-card connect-card">
              <div className="pv-role-head">
                <div className="pv-role-topbar">
                  <span className="pv-role-badge">Data Acquisition Layer</span>
                  <span className="pv-role-layer-tag">Layer 01</span>
                </div>
                <div className="pv-role-title-row">
                  <div className="pv-role-icon"><Cpu size={24} /></div>
                  <div>
                    <h3>Pitech Connect</h3>
                    <p className="pv-role-summary">Machine Communication & Unified Connectivity Layer</p>
                  </div>
                </div>
              </div>

              <ul className="pv-role-list">
                <li className="pv-role-item">
                  <div className="pv-role-check">
                    <CheckCircle2 size={15} />
                  </div>
                  <div className="pv-role-info">
                    <span className="pv-role-item-title">60+ Native Protocol Drivers</span>
                    <span className="pv-role-item-desc">Connects PLCs, CNCs, robots, meters & industrial scanners.</span>
                  </div>
                </li>
                <li className="pv-role-item">
                  <div className="pv-role-check">
                    <CheckCircle2 size={15} />
                  </div>
                  <div className="pv-role-info">
                    <span className="pv-role-item-title">OPC UA & MQTT Edge Transport</span>
                    <span className="pv-role-item-desc">Standardized industrial edge telemetry transport for enterprise IoT.</span>
                  </div>
                </li>
                <li className="pv-role-item">
                  <div className="pv-role-check">
                    <CheckCircle2 size={15} />
                  </div>
                  <div className="pv-role-info">
                    <span className="pv-role-item-title">Live Machine Tag Acquisition</span>
                    <span className="pv-role-item-desc">Microsecond register reads and continuous process synchronization.</span>
                  </div>
                </li>
                <li className="pv-role-item">
                  <div className="pv-role-check">
                    <CheckCircle2 size={15} />
                  </div>
                  <div className="pv-role-info">
                    <span className="pv-role-item-title">Automated Alarms & Escalations</span>
                    <span className="pv-role-item-desc">Instant real-time alerts dispatched via Email and WhatsApp.</span>
                  </div>
                </li>
                <li className="pv-role-item">
                  <div className="pv-role-check">
                    <CheckCircle2 size={15} />
                  </div>
                  <div className="pv-role-info">
                    <span className="pv-role-item-title">Enterprise Database Logging</span>
                    <span className="pv-role-item-desc">Structured relational logging into SQL Server, MySQL, Postgres & SQLite.</span>
                  </div>
                </li>
              </ul>

              <div className="pv-role-footer">
                <span className="pv-role-footer-tag">
                  <Radio size={14} className="pv-pulse" /> Connects Devices & Streams Live Telemetry
                </span>
              </div>
            </div>

            {/* Pitech View Role */}
            <div className="pv-role-card view-card">
              <div className="pv-role-head">
                <div className="pv-role-topbar">
                  <span className="pv-role-badge view-badge">Visualization Layer</span>
                  <span className="pv-role-layer-tag view-layer-tag">Layer 02</span>
                </div>
                <div className="pv-role-title-row">
                  <div className="pv-role-icon view-icon"><Monitor size={24} /></div>
                  <div>
                    <h3>Pitech View</h3>
                    <p className="pv-role-summary">Web SCADA & Production ANDON Monitoring Layer</p>
                  </div>
                </div>
              </div>

              <ul className="pv-role-list">
                <li className="pv-role-item">
                  <div className="pv-role-check view-check">
                    <CheckCircle2 size={15} />
                  </div>
                  <div className="pv-role-info">
                    <span className="pv-role-item-title">Web-Based SCADA Screens</span>
                    <span className="pv-role-item-desc">Interactive process mimics and animated floor screens from any device.</span>
                  </div>
                </li>
                <li className="pv-role-item">
                  <div className="pv-role-check view-check">
                    <CheckCircle2 size={15} />
                  </div>
                  <div className="pv-role-info">
                    <span className="pv-role-item-title">Real-Time Process Visualization</span>
                    <span className="pv-role-item-desc">High-precision gauges, multi-pen live trend charts, and visual indicators.</span>
                  </div>
                </li>
                <li className="pv-role-item">
                  <div className="pv-role-check view-check">
                    <CheckCircle2 size={15} />
                  </div>
                  <div className="pv-role-info">
                    <span className="pv-role-item-title">Production ANDON Monitoring</span>
                    <span className="pv-role-item-desc">Live target vs. actual production output tracking per line and cell.</span>
                  </div>
                </li>
                <li className="pv-role-item">
                  <div className="pv-role-check view-check">
                    <CheckCircle2 size={15} />
                  </div>
                  <div className="pv-role-info">
                    <span className="pv-role-item-title">Shift-Wise & Hourly Visibility</span>
                    <span className="pv-role-item-desc">Instant identification of speed losses, line bottlenecks, and gaps.</span>
                  </div>
                </li>
                <li className="pv-role-item">
                  <div className="pv-role-check view-check">
                    <CheckCircle2 size={15} />
                  </div>
                  <div className="pv-role-info">
                    <span className="pv-role-item-title">Custom Dashboards & Formulas</span>
                    <span className="pv-role-item-desc">Bespoke KPI formulas, user-defined units, and plant white-labeling.</span>
                  </div>
                </li>
              </ul>

              <div className="pv-role-footer view-footer">
                <span className="pv-role-footer-tag view-tag">
                  <Tv size={14} className="pv-pulse" /> Visualizes, Alerts & Monitors Operations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2: STEP-BY-STEP DATA FLOW DIAGRAM
      ════════════════════════════════════════════ */}
      <section className="pv-section pv-bg-light">
        <div className="pv-container">
          <header className="pv-section-head pv-animate">
            <span className="pv-badge">Architecture</span>
            <h2>How the Complete System Works</h2>
            <p>From shop-floor sensors and machine PLCs to high-definition management dashboards.</p>
          </header>

          <div className="pv-flow-wrapper pv-animate pv-delay-1">
            <div className="pv-flow-step">
              <div className="pv-flow-step-num">01</div>
              <div className="pv-flow-card">
                <div className="pv-flow-icon"><Server size={24} /></div>
                <h4>Industrial Machines & PLCs</h4>
                <p>Machine sensors, process parameters, cycle pulses, temperature, torque and production signals.</p>
                <span className="pv-flow-tag">Raw Electrical Signals</span>
              </div>
            </div>

            <div className="pv-flow-connector">
              <div className="pv-flow-arrow"><ArrowRight size={20} /></div>
              <span>Drivers & Protocols</span>
            </div>

            <div className="pv-flow-step">
              <div className="pv-flow-step-num">02</div>
              <div className="pv-flow-card highlight">
                <div className="pv-flow-icon"><Radio size={24} /></div>
                <h4>PITECH CONNECT</h4>
                <p>Industrial communication, device configuration, live tag polling, alarm dispatch, and SQL logging.</p>
                <span className="pv-flow-tag highlight-tag">Connectivity & Data Layer</span>
              </div>
            </div>

            <div className="pv-flow-connector">
              <div className="pv-flow-arrow"><ArrowRight size={20} /></div>
              <span>Normalized Machine Data</span>
            </div>

            <div className="pv-flow-step">
              <div className="pv-flow-step-num">03</div>
              <div className="pv-flow-card highlight-view">
                <div className="pv-flow-icon"><LayoutDashboard size={24} /></div>
                <h4>PITECH VIEW</h4>
                <p>Web SCADA with interactive mimics, live trends, and dedicated Production ANDON line displays.</p>
                <span className="pv-flow-tag highlight-view-tag">Web SCADA + ANDON</span>
              </div>
            </div>
          </div>

          <div className="pv-dual-views-grid pv-animate pv-delay-2">
            <div className="pv-view-branch-card">
              <div className="pv-branch-header">
                <Gauge size={22} />
                <h4>Web SCADA Visualization</h4>
              </div>
              <p>Live animated processes, tank levels, digital pressure gauges, multi-pen trend charts, and real-time equipment status overlays.</p>
            </div>

            <div className="pv-view-branch-card">
              <div className="pv-branch-header">
                <Tv size={22} />
                <h4>Production ANDON Displays</h4>
              </div>
              <p>Planned vs actual production count, shift targets, line downtime reasons, hourly run rates, and shop-floor TV broadcasting.</p>
            </div>
          </div>

          <div className="pv-flow-note pv-animate pv-delay-3">
            <span>ℹ️</span>
            <p><strong>Note:</strong> This represents the conceptual data pipeline. The exact integration route depends on your configured network topology, database source, and shop-floor deployment architecture.</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3: CORE CAPABILITIES GRID
      ════════════════════════════════════════════ */}
      <section className="pv-section pv-bg-white">
        <div className="pv-container">
          <header className="pv-section-head pv-animate">
            <span className="pv-badge">Features</span>
            <h2>Engineered for Modern Shop Floors</h2>
            <p>Empower plant operators, maintenance engineers, and plant heads with clear, actionable real-time data.</p>
          </header>

          <div className="pv-features-grid pv-animate pv-delay-1">
            <div className="pv-feature-card">
              <div className="pv-feature-icon"><LayoutDashboard size={24} /></div>
              <h4>No-Code Dashboard Builder</h4>
              <p>Design complex supervisory screens in minutes with drag-and-drop gauges, switches, charts, and digital readouts.</p>
            </div>

            <div className="pv-feature-card">
              <div className="pv-feature-icon"><Tv size={24} /></div>
              <h4>ANDON in Under a Minute</h4>
              <p>Select target count, select running tag, and project live planned vs actual output onto shop-floor line TVs immediately.</p>
            </div>

            <div className="pv-feature-card">
              <div className="pv-feature-icon"><Palette size={24} /></div>
              <h4>Brand Customization & White-Label</h4>
              <p>Upload your company logo, configure brand theme colors, choose custom number formats, and customize unit labels across screens.</p>
            </div>

            <div className="pv-feature-card">
              <div className="pv-feature-icon"><Sliders size={24} /></div>
              <h4>Configurable Formulas</h4>
              <p>Perform live mathematical calculations, unit conversions, and efficiency metrics on incoming tag values without modifying PLC code.</p>
            </div>

            <div className="pv-feature-card">
              <div className="pv-feature-icon"><TrendingUp size={24} /></div>
              <h4>High-Speed Historical Trends</h4>
              <p>Compare multiple process parameters side-by-side with zoom, pan, and historical playback for deep root-cause troubleshooting.</p>
            </div>

            <div className="pv-feature-card">
              <div className="pv-feature-icon"><Bell size={24} /></div>
              <h4>Visual Alarms & Thresholds</h4>
              <p>Set multi-level color-coded warning limits. Instantly alert floor operators when process temperatures, pressures, or cycle times drift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4: INTEGRATION COMPARISON TABLE
      ════════════════════════════════════════════ */}
      <section className="pv-section pv-bg-light">
        <div className="pv-container">
          <header className="pv-section-head pv-animate">
            <span className="pv-badge">Side-by-Side</span>
            <h2>Key Benefits of Integration</h2>
            <p>A unified architecture eliminating third-party middleware, gateway boxes, and costly integration software.</p>
          </header>

          <div className="pv-table-wrap pv-animate pv-delay-1">
            <table className="pv-table">
              <thead>
                <tr>
                  <th className="pv-th-cap">Capability Focus</th>
                  <th className="pv-th-connect">Pitech Connect</th>
                  <th className="pv-th-view">Pitech View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Primary Mission</strong></td>
                  <td>Machine Connectivity & Protocol Normalization</td>
                  <td>Data Visualization & Supervisory Monitoring</td>
                </tr>
                <tr>
                  <td><strong>Interface Layer</strong></td>
                  <td>Communication Channels, Driver Config & Tag Server</td>
                  <td>Web SCADA Screens, Responsive Mimics & ANDON TVs</td>
                </tr>
                <tr>
                  <td><strong>Data Handling</strong></td>
                  <td>Microsecond Tag Acquisition & SQL Data Logging</td>
                  <td>Real-Time Screen Refresh, Trend Charts & Formulas</td>
                </tr>
                <tr>
                  <td><strong>Alerting & Action</strong></td>
                  <td>Email & WhatsApp Notification Dispatch Engine</td>
                  <td>Live On-Screen Audio/Visual Flashing Alarms</td>
                </tr>
                <tr>
                  <td><strong>Outputs</strong></td>
                  <td>Structured Database Records & OPC UA / MQTT Feeds</td>
                  <td>Operational Dashboards, KPI Reports & Line TVs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pv-combined-benefits pv-animate pv-delay-2">
            <h3>Combined Solution Value:</h3>
            <div className="pv-benefits-row">
              <div className="pv-benefit-pill">
                <CheckCircle2 size={16} /> One connected industrial monitoring ecosystem
              </div>
              <div className="pv-benefit-pill">
                <CheckCircle2 size={16} /> Complete visibility into machine health and cycle operations
              </div>
              <div className="pv-benefit-pill">
                <CheckCircle2 size={16} /> Centralized process and production monitoring from any browser
              </div>
              <div className="pv-benefit-pill">
                <CheckCircle2 size={16} /> Instant identification of manufacturing bottlenecks and gaps
              </div>
              <div className="pv-benefit-pill">
                <CheckCircle2 size={16} /> Data-driven decision making powered by trusted real-time telemetry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of Content */}
    </div>
  );
}
