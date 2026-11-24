import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Activity,
  Gauge,
  TrendingDown,
  ShieldCheck,
  Sparkles,
  Server,
  Monitor
} from "lucide-react";
import "./PitechEMS.css";

export default function PitechEMS() {
  useEffect(() => {
    document.title = "Pitech EMS - Energy Monitoring System | Pitech Automation";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.pitechautomation.com/products/pitech-ems");

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Pitech EMS (Energy Monitoring System): From manual paper logbooks to automated digital telemetry. Connect RS485 meters, Ethernet gateways, and monitor entire shop-floor power in real time."
      );
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pems-page">
      {/* ════════════════════════════════════════════
          HERO SECTION (LEFT ALIGNED WITH BACKGROUND VIDEO)
      ════════════════════════════════════════════ */}
      <section className="pems-hero">
        {/* Background Video */}
        <div className="pems-hero-video-wrap">
          <video
            className="pems-hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/WhatsApp Video 2026-11-05 at 12.03.16 PM (1).mp4" type="video/mp4" />
          </video>
        </div>

        {/* Faded overlay for high video visibility */}
        <div className="pems-hero-overlay" />
        <div className="pems-hero-mesh" />

        <div className="pems-container">
          {/* Breadcrumb - Left Aligned */}
          <div className="pems-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/products/pitech-connect">Products</Link>
            <span>›</span>
            <span className="current">Pitech EMS</span>
          </div>

          {/* Left Aligned Content */}
          <div className="pems-hero-content">
            <div className="pems-badge">
              <span className="pems-badge-dot" />
              <Sparkles size={13} />
              <span>PITECH EMS CONNECT · DIGITALIZE YOUR NEEDS</span>
            </div>

            <h1 className="pems-title">
              Industrial Energy <br />
              <span>Monitoring System (EMS)</span>
            </h1>

            <p className="pems-subtitle">
              Transform manual logbook meter reading into a fully automated, real-time digital energy platform. Connect RS485 DIN-rail meters, stream data through Ethernet gateways, and monitor your entire shop-floor power from a centralized control room.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          OVERVIEW SECTION (MATCHING VIDEO STORY)
      ════════════════════════════════════════════ */}
      <section className="pems-section w hite">
        <div className="pems-container">
          <div className="pems-overview-grid animate-on-scroll">
            <div className="pems-overview-text">
              <span className="pems-tag">DIGITAL TRANSFORMATION</span>
              <h2>From Manual Clipboard Logbooks to Automated Digital Telemetry</h2>
              <p>
                In traditional manufacturing facilities, engineers and technicians walk across panels with paper clipboards to write down meter values once per shift. This causes delayed insights, missed peak spikes, and human logging errors.
              </p>
              <p>
                <strong>Pitech EMS</strong> automates this entire chain: compact DIN-rail RS485 meters connect directly to distribution panels, stream through high-speed Ethernet converters (Port 502), and feed real-time telemetry straight into central control room displays and plant dashboards.
              </p>
            </div>

            <div className="pems-highlights-grid">
              <div className="pems-highlight-card">
                <div className="pems-highlight-icon">
                  <Gauge size={22} color="#059669" />
                </div>
                <h4>Zero Manual Logging</h4>
                <p>Replace error-prone clipboards with continuous, sub-second automated telemetry.</p>
              </div>

              <div className="pems-highlight-card">
                <div className="pems-highlight-icon">
                  <Zap size={22} color="#0284c7" />
                </div>
                <h4>RS485 DIN-Rail Smart Meters</h4>
                <p>Direct integration with Pitech Energy Conecters, transformers, PCC, and MCC panels.</p>
              </div>

              <div className="pems-highlight-card">
                <div className="pems-highlight-icon">
                  <Server size={22} color="#d97706" />
                </div>
                <h4>RS485-to-Ethernet Gateway</h4>
                <p>Modbus RTU to TCP converters (Port 502) routing telemetry over standard factory LAN.</p>
              </div>

              <div className="pems-highlight-card">
                <div className="pems-highlight-icon">
                  <Monitor size={22} color="#7c3aed" />
                </div>
                <h4>Control Room Command Center</h4>
                <p>Multi-display live plant monitoring for operators, supervisors, and management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CORE ESSENTIAL CAPABILITIES
      ════════════════════════════════════════════ */}
      <section className="pems-section gray">
        <div className="pems-container">
          <div className="pems-header animate-on-scroll">
            <span className="pems-tag">KEY CAPABILITIES</span>
            <h2>What Pitech EMS Connect Delivers</h2>
            <p>End-to-end electrical telemetry and analytics designed for real-world manufacturing plants.</p>
          </div>

          <div className="pems-features-grid">
            <div className="pems-feature-box animate-on-scroll">
              <div className="pems-feature-icon-wrap green">
                <Gauge size={24} />
              </div>
              <h3>Real-Time Power &amp; Quality</h3>
              <p>
                Continuously track Voltage, Current, Active Load (kW), Power Factor (cos φ), and Harmonics (THD) to safeguard motors, transformers, and capacitor banks.
              </p>
            </div>

            <div className="pems-feature-box animate-on-scroll">
              <div className="pems-feature-icon-wrap blue">
                <Activity size={24} />
              </div>
              <h3>Peak Demand Management</h3>
              <p>
                15-minute rolling maximum demand forecasting alerts floor supervisors before crossing contract limits, preventing costly utility penalty surcharges.
              </p>
            </div>

            <div className="pems-feature-box animate-on-scroll">
              <div className="pems-feature-icon-wrap amber">
                <TrendingDown size={24} />
              </div>
              <h3>Specific Energy Consumption (SEC)</h3>
              <p>
                Correlate power usage with real-time production counts to calculate exact kWh consumed per finished unit or batch, pinpointing hidden machine waste.
              </p>
            </div>

            <div className="pems-feature-box animate-on-scroll">
              <div className="pems-feature-icon-wrap purple">
                <ShieldCheck size={24} />
              </div>
              <h3>Automated Shift Reports &amp; Alarms</h3>
              <p>
                Automated Shift, Daily, and Monthly Excel/PDF summaries dispatched automatically via Email and instant WhatsApp alerts on power quality anomalies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3-STEP ARCHITECTURE (AS SHOWN IN VIDEO)
      ════════════════════════════════════════════ */}
      <section className="pems-section white">
        <div className="pems-container">
          <div className="pems-header animate-on-scroll">
            <span className="pems-tag">HOW IT WORKS</span>
            <h2>Seamless 3-Step Factory Integration</h2>
            <p>Hardware and software architecture directly connecting field meters to control room dashboards.</p>
          </div>

          <div className="pems-steps-grid">
            <div className="pems-step-item animate-on-scroll">
              <div className="pems-step-num">01</div>
              <h3>DIN-Rail RS485 Meters</h3>
              <p>
                Connected to main incomer transformers, sub-feeders, DG sets, and machine panels over RS485 serial multidrop bus.
              </p>
            </div>

            <div className="pems-step-arrow">→</div>

            <div className="pems-step-item animate-on-scroll">
              <div className="pems-step-num">02</div>
              <h3>RS485-to-Ethernet Gateway</h3>
              <p>
                Industrial Modbus RTU-to-TCP/IP converter (Port 502) transmits encrypted telemetry across factory network switches.
              </p>
            </div>

            <div className="pems-step-arrow">→</div>

            <div className="pems-step-item animate-on-scroll">
              <div className="pems-step-num">03</div>
              <h3>Pitech EMS Connect Platform</h3>
              <p>
                Centralized software with live single-line diagrams (SLD), multi-monitor control room views, and shift analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
