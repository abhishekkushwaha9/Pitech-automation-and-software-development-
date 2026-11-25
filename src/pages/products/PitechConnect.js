import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Server, Cpu, Database, ShieldCheck, CheckCircle2, AlertTriangle,
  Scan, Activity, ArrowRight, Play, Pause, Volume2, VolumeX,
  Maximize, Monitor, RefreshCw, FileCode, Settings, Zap, Clock,
  Radio, Search, Calculator, Sparkles,
  Check, X, Network, Layers, Workflow
} from "lucide-react";
import "./PitechConnect.css";

const CHAPTERS = [
  { time: 5, label: "Introduction", desc: "One server for the entire shop floor" },
  { time: 10, label: "Machine Challenges", desc: "Every machine speaks a different language" },
  { time: 20, label: "The Unified Hub", desc: "Pitech Connect brings them together" },
  { time: 30, label: "40+ Protocol Drivers", desc: "Parallel polling of 100+ PLCs" },
  { time: 45, label: "Part Traceability", desc: "Scan barcode, validate rules, log to SQL" },
  { time: 70, label: "Automatic Takeover", desc: "10-second failover with witness check" },
];

export default function PitechConnect() {
  const showcaseVideoRef = useRef(null);
  const [isShowcasePlaying, setIsShowcasePlaying] = useState(true);
  const [isShowcaseMuted, setIsShowcaseMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [activeHeadacheTab, setActiveHeadacheTab] = useState("connectivity");
  const [driverSearch, setDriverSearch] = useState("");
  const [driverCategory, setDriverCategory] = useState("All");
  const [calcMachines, setCalcMachines] = useState(15);
  const [calcStations, setCalcStations] = useState(4);
  const [calcIncludeTrace, setCalcIncludeTrace] = useState(true);
  const [simMode, setSimMode] = useState("idle");
  const [simLogData, setSimLogData] = useState(null);

  useEffect(() => {
    document.title = "Pitech Connect - Universal Industrial Connectivity & Traceability Platform | PiTech Automation";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.pitechautomation.com/products/pitech-connect");

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content",
        "Pitech Connect solves machine connectivity, zero-script data logging, and configuration-driven traceability on one server. 40+ protocol drivers for 500+ devices with no client software.");
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".pc-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleTimeUpdate = () => {
    if (!showcaseVideoRef.current) return;
    const cur = showcaseVideoRef.current.currentTime;
    setCurrentTimeSec(cur);
    for (let i = CHAPTERS.length - 1; i >= 0; i--) {
      if (cur >= CHAPTERS[i].time - 1) { setActiveChapter(i); break; }
    }
  };

  const jumpToChapter = (time, index) => {
    if (!showcaseVideoRef.current) return;
    showcaseVideoRef.current.currentTime = time;
    showcaseVideoRef.current.play();
    setIsShowcasePlaying(true);
    setActiveChapter(index);
  };

  const toggleShowcasePlay = () => {
    if (!showcaseVideoRef.current) return;
    if (showcaseVideoRef.current.paused) {
      showcaseVideoRef.current.play(); setIsShowcasePlaying(true);
    } else {
      showcaseVideoRef.current.pause(); setIsShowcasePlaying(false);
    }
  };

  const toggleShowcaseMute = () => {
    if (!showcaseVideoRef.current) return;
    showcaseVideoRef.current.muted = !showcaseVideoRef.current.muted;
    setIsShowcaseMuted(showcaseVideoRef.current.muted);
  };

  const toggleShowcaseFullscreen = () => {
    if (!showcaseVideoRef.current) return;
    showcaseVideoRef.current.requestFullscreen?.();
  };

  const runSimulator = (type) => {
    setSimMode("validating");
    setSimLogData(null);
    setTimeout(() => {
      if (type === "valid") {
        setSimMode("ok");
        setSimLogData({
          barcode: "PT-2611-004521", status: "PASSED (OK)",
          codeSent: "1 (OK - Proceed)", childParts: "3 / 3 Linked",
          station: "Station 04 - Auto Press", timeMs: "14ms",
          dbTable: "tbl_traceability_prod",
          registers: { trigger: "D100: 1", result: "D101: 1", ack: "D102: 1" }
        });
      } else {
        setSimMode("rejected");
        setSimLogData({
          barcode: "PT-2611-004521 [DUPLICATE]", status: "REJECTED (DUPLICATE FOUND)",
          codeSent: "2 (NG - Lock Station)", childParts: "Station 03 not completed!",
          station: "Station 04 - Auto Press", timeMs: "9ms",
          dbTable: "tbl_traceability_ng_logs",
          registers: { trigger: "D100: 1", result: "D101: 2", ack: "D102: 1" }
        });
      }
    }, 700);
  };

  const protocolDrivers = [
    { name: "Mitsubishi SLMP / MC", cat: "PLC", desc: "iQ-R, iQ-F, Q, FX3U/5U series" },
    { name: "Siemens S7 Protocol", cat: "PLC", desc: "S7-300, 400, 1200, 1500 Iso-on-TCP" },
    { name: "Allen-Bradley CIP", cat: "PLC", desc: "ControlLogix, CompactLogix, Micro800" },
    { name: "Omron FINS / HostLink", cat: "PLC", desc: "CJ, CP, CS, NX/NJ Series" },
    { name: "Keyence KV Protocol", cat: "PLC", desc: "KV-8000, 7000, Nano Series" },
    { name: "Fanuc FOCAS 1 & 2", cat: "CNC", desc: "0i, 30i/31i/32i CNC controllers" },
    { name: "Modbus TCP / RTU", cat: "Standards", desc: "Holding registers, coils, power meters" },
    { name: "OPC UA & OPC DA", cat: "Standards", desc: "Enterprise client & server bridging" },
    { name: "EtherNet/IP", cat: "Standards", desc: "Explicit & implicit I/O messaging" },
    { name: "Panasonic FP Series", cat: "PLC", desc: "FP-X, FP0R, FP7 controllers" },
    { name: "Delta DVP & AS Series", cat: "PLC", desc: "DVP, AS300, AH500 PLCs" },
    { name: "LS Electric XGT", cat: "PLC", desc: "XGB, XGI, XGR Series controllers" },
    { name: "DC Tools Open Protocol", cat: "Tools", desc: "Atlas Copco, Desoutter torque tools" },
    { name: "MTConnect", cat: "CNC", desc: "Standard machine tool telemetry" },
    { name: "IO-Link Master", cat: "IIoT", desc: "Smart sensor data hub & parameters" },
    { name: "MQTT & Sparkplug B", cat: "IIoT", desc: "Lightweight JSON cloud pub/sub" },
    { name: "BACnet / IP & SNMP", cat: "Standards", desc: "HVAC, energy meters, UPS monitoring" },
    { name: "Barcode & Serial (RS-232)", cat: "IIoT", desc: "Keyence, Cognex, Zebra, Datalogic" },
  ];

  const filteredDrivers = protocolDrivers.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(driverSearch.toLowerCase()) ||
      d.desc.toLowerCase().includes(driverSearch.toLowerCase());
    const matchesCategory = driverCategory === "All" || d.cat === driverCategory;
    return matchesSearch && matchesCategory;
  });

  const traceSteps = [
    { num: "01", icon: <Scan size={22} />, title: "Scan Barcode", desc: "Fixed scanner, handheld, or RFID reads 1D/2D part code in <10ms." },
    { num: "02", icon: <ShieldCheck size={22} />, title: "Validate Rules", desc: "Instant check of length, prefix, duplicates, previous station & NG flags." },
    { num: "03", icon: <Layers size={22} />, title: "Link Child Parts", desc: "Bind sub-assemblies, serials, and batch numbers to parent ID." },
    { num: "04", icon: <Workflow size={22} />, title: "PLC Handshake", desc: "Only 3 PLC words mapped (Trigger, Result, ACK). Machine runs operation." },
    { num: "05", icon: <Database size={22} />, title: "SQL Audit Log", desc: "Results, cycle times & torque logged to SQL. Ready for customer audit." },
  ];

  const estTradMonths = Math.max(3, Math.round(calcMachines * 0.18 + calcStations * 0.45));
  const estPitechDays = Math.max(2, Math.round((calcMachines * 0.18 + calcStations * 0.45) * 1.8));
  const estHoursSaved = Math.round((calcMachines * 20 + calcStations * 45) * 0.82);
  const estSavingsInr = (calcMachines * 24000 + calcStations * 40000).toLocaleString("en-IN");

  return (
    <div className="pc-page-wrapper">

      {/* ══════════ HERO ══════════ */}
      <section className="pc-hero">
        {/* Background Video */}
        <div className="pc-hero-video-wrap">
          <video
            className="pc-hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/pitechconnect_herosection.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Faded Blue / Dark Overlay */}
        <div className="pc-hero-overlay" />
        <div className="pc-hero-grid-bg" />

        <div className="pc-container pc-hero-inner">
          <div className="pc-hero-content pc-animate">
            <nav className="pc-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/products/sensor">Products</Link>
              <span>›</span>
              <span className="pc-breadcrumb-current">Pitech Connect</span>
            </nav>

            <span className="pc-hero-tag pc-glass-dark">
              <Radio size={12} className="pc-pulse" />
              Unified Shop Floor Platform
            </span>

            <h1 className="pc-hero-title">
              Pitech <span>Connect</span>
            </h1>

            <p className="pc-hero-subtitle">
              One web-based server for every machine on your shop floor. Universal protocol drivers,
              automated database logging, and configuration-driven traceability — zero programming required.
            </p>

            <div className="pc-hero-actions">
              <a href="#video-demo" className="pc-btn pc-btn-primary">
                <Play size={16} fill="currentColor" /> Watch Demonstration
              </a>
            </div>
          </div>
        </div>

        <div className="pc-hero-wave">
          <svg viewBox="0 0 1440 45" fill="none" preserveAspectRatio="none">
            <path d="M0 45 L0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 45 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <div className="pc-stats-bar">
        <div className="pc-container pc-stats-inner">
          {[
            { icon: <Cpu size={18} />, value: "40+", label: "Protocols Inside" },
            { icon: <Server size={18} />, value: "500", label: "Devices / Server" },
            { icon: <Zap size={18} />, value: "80%", label: "Less Effort" },
            { icon: <Monitor size={18} />, value: "Zero", label: "Client Installs" },
          ].map((s, i) => (
            <div key={i} className="pc-stat pc-neu">
              <div className="pc-stat-icon">{s.icon}</div>
              <div>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ VIDEO SHOWCASE (IMAGE 1) ══════════ */}
      <section id="video-demo" className="pc-section pc-bg-light">
        <div className="pc-container">
          <header className="pc-section-head pc-animate">
            <span className="pc-badge">Live Interactive Walkthrough</span>
            <h2>See Pitech Connect in Action</h2>
            <p>Select any topic below to jump directly to that point in the demonstration video.</p>
          </header>

          <div className="pc-showcase pc-animate pc-delay-1">
            {/* Left Card: Video Player styled like Image 1 */}
            <div className="pc-video-card pc-window-card">
              <div className="pc-video-header">
                <div className="pc-dots">
                  <span className="red" /><span className="yellow" /><span className="green" />
                </div>
                <div className="pc-video-label">
                  <Activity size={14} className="pc-pulse" /> PITECH CONNECT / PRODUCT DEMO
                </div>
                <span className="pc-video-time">{Math.floor(currentTimeSec)}s / 85s</span>
              </div>

              <div className="pc-video-wrap">
                <video ref={showcaseVideoRef} className="pc-video" autoPlay muted loop playsInline controls
                  onTimeUpdate={handleTimeUpdate} poster="/images/pitech_connect_frame_5.jpg">
                  <source src="/videos/WhatsApp Video 2026-11-05 at 12.03.16 PM.mp4" type="video/mp4" />
                  <source src="/videos/pitech-connect-demo.mp4" type="video/mp4" />
                </video>
                <div className="pc-video-controls">
                  <div className="pc-video-ctrl-left">
                    <button onClick={toggleShowcasePlay} className="pc-ctrl-btn">
                      {isShowcasePlaying ? <Pause size={15} /> : <Play size={15} />}
                    </button>
                    <button onClick={toggleShowcaseMute} className="pc-ctrl-btn">
                      {isShowcaseMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    </button>
                    <span className="pc-video-chapter-label">
                      {CHAPTERS[activeChapter]?.label || "Pitech Connect Walkthrough"}
                    </span>
                  </div>
                  <button onClick={toggleShowcaseFullscreen} className="pc-ctrl-btn">
                    <Maximize size={15} />
                  </button>
                </div>
              </div>

              <div className="pc-video-footer">
                <div className="pc-video-accent-bar" />
                <div className="pc-video-tags-row">
                  <span><Zap size={14} /> 40+ Drivers</span>
                  <span><Database size={14} /> Automated SQL</span>
                  <span><RefreshCw size={14} /> Redundancy</span>
                </div>
              </div>
            </div>

            {/* Right Card: Video Chapters styled like Image 1 */}
            <div className="pc-chapters-card">
              <div className="pc-chapters-head">
                <div className="pc-chapters-head-title"><Sparkles size={16} /> Video Chapters</div>
                <span className="pc-chapters-select-label">SELECT A TOPIC</span>
              </div>
              <div className="pc-chapters-list">
                {CHAPTERS.map((ch, idx) => {
                  const isActive = activeChapter === idx;
                  return (
                    <button key={idx} className={`pc-chapter-row ${isActive ? "active" : ""}`}
                      onClick={() => jumpToChapter(ch.time, idx)}>
                      <span className={`pc-chapter-badge ${isActive ? "active" : ""}`}>
                        {ch.time < 10 ? `0:0${ch.time}` : `0:${ch.time}`}
                      </span>
                      <div className="pc-chapter-content">
                        <div className="pc-chapter-name">{ch.label}</div>
                        <div className="pc-chapter-sub">{ch.desc}</div>
                      </div>
                      <ArrowRight size={15} className={`pc-chapter-arrow-icon ${isActive ? "active" : ""}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROBLEM VS SOLUTION (IMAGE 2) ══════════ */}
      <section className="pc-section pc-bg-white">
        <div className="pc-container">
          <header className="pc-section-head pc-animate">
            <span className="pc-badge">Problem vs Solution</span>
            <h2>Every Plant Has The Same Three Headaches</h2>
            <p>Click between the three key pain points below to explore how Pitech Connect solves them.</p>
          </header>

          <div className="pc-tabs pc-animate pc-delay-1">
            {[
              { id: "connectivity", icon: <Cpu size={15} />, label: "Machine Connectivity" },
              { id: "data", icon: <Database size={15} />, label: "Data to SQL" },
              { id: "traceability", icon: <ShieldCheck size={15} />, label: "Traceability" },
            ].map((t) => (
              <button key={t.id} className={`pc-tab ${activeHeadacheTab === t.id ? "active" : ""}`}
                onClick={() => setActiveHeadacheTab(t.id)}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          <div className="pc-tab-panel pc-animate pc-delay-2">
            {activeHeadacheTab === "connectivity" && (
              <div className="pc-vs-container">
                <div className="pc-vs-card traditional">
                  <div className="pc-vs-badge problem">
                    <span className="pc-vs-badge-icon"><AlertTriangle size={16} /></span>
                    <span className="pc-vs-badge-text">TRADITIONAL APPROACH</span>
                  </div>
                  <h3>Machine Connectivity Chaos</h3>
                  <p>Mitsubishi on one line, Siemens on another, a Fanuc CNC, a robot and energy meters. Each needs proprietary software, licensing and specialist support.</p>
                  <ul className="pc-vs-list">
                    <li><span className="pc-vs-x">✕</span> Fragmented vendor cables and licenses</li>
                    <li><span className="pc-vs-x">✕</span> High dependency on OEM specialists</li>
                    <li><span className="pc-vs-x">✕</span> Driver incompatibilities and communication drops</li>
                  </ul>
                  <div className="pc-vs-footer">
                    <span className="pc-vs-footer-label">COMPLEXITY</span>
                    <span className="pc-vs-footer-val high">HIGH</span>
                  </div>
                </div>

                <div className="pc-vs-divider">
                  <div className="pc-vs-circle">
                    <ArrowRight size={18} />
                  </div>
                  <span className="pc-vs-divider-text">TRANSFORM</span>
                </div>

                <div className="pc-vs-card pitech">
                  <div className="pc-vs-badge solution">
                    <span className="pc-vs-badge-icon"><ShieldCheck size={16} /></span>
                    <span className="pc-vs-badge-text">PITECH CONNECT</span>
                  </div>
                  <h3>One Web App For The Complete Plant</h3>
                  <p>PLCs, CNCs, robots and meters are configured from your browser. Built-in drivers support common industrial protocols, with a centralized architecture for device communication.</p>
                  <div className="pc-vs-pills-row">
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> 40+ Drivers</span>
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> Browser Setup</span>
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> Parallel Polling</span>
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> Centralized Access</span>
                  </div>
                  <div className="pc-vs-footer">
                    <span className="pc-vs-footer-label">SIMPLICITY</span>
                    <span className="pc-vs-footer-val unified">UNIFIED</span>
                  </div>
                </div>
              </div>
            )}

            {activeHeadacheTab === "data" && (
              <div className="pc-vs-container">
                <div className="pc-vs-card traditional">
                  <div className="pc-vs-badge problem">
                    <span className="pc-vs-badge-icon"><AlertTriangle size={16} /></span>
                    <span className="pc-vs-badge-text">TRADITIONAL APPROACH</span>
                  </div>
                  <h3>Data Pulling Bottlenecks</h3>
                  <p>Production counts, temperatures, and alarms are trapped inside PLCs. Getting them into a database means custom code, Excel exports, or heavy SCADA projects.</p>
                  <ul className="pc-vs-list">
                    <li><span className="pc-vs-x">✕</span> Fragile scripts that crash on timeouts</li>
                    <li><span className="pc-vs-x">✕</span> Unsynchronized Excel & delayed reports</li>
                    <li><span className="pc-vs-x">✕</span> Months spent on SCADA configuration</li>
                  </ul>
                  <div className="pc-vs-footer">
                    <span className="pc-vs-footer-label">COMPLEXITY</span>
                    <span className="pc-vs-footer-val high">HIGH</span>
                  </div>
                </div>

                <div className="pc-vs-divider">
                  <div className="pc-vs-circle">
                    <ArrowRight size={18} />
                  </div>
                  <span className="pc-vs-divider-text">TRANSFORM</span>
                </div>

                <div className="pc-vs-card pitech">
                  <div className="pc-vs-badge solution">
                    <span className="pc-vs-badge-icon"><ShieldCheck size={16} /></span>
                    <span className="pc-vs-badge-text">PITECH CONNECT</span>
                  </div>
                  <h3>Pick Tags, Pick Database, Done</h3>
                  <p>Pick your tags, pick your database (SQL Server, MySQL, PostgreSQL, SQLite), and choose when to log: interval, value change, or PLC trigger. Tables created automatically.</p>
                  <div className="pc-vs-pills-row">
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> Auto Schema</span>
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> Multi-DB Support</span>
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> Buffer & Forward</span>
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> Real-time Sync</span>
                  </div>
                  <div className="pc-vs-footer">
                    <span className="pc-vs-footer-label">SIMPLICITY</span>
                    <span className="pc-vs-footer-val unified">UNIFIED</span>
                  </div>
                </div>
              </div>
            )}

            {activeHeadacheTab === "traceability" && (
              <div className="pc-vs-container">
                <div className="pc-vs-card traditional">
                  <div className="pc-vs-badge problem">
                    <span className="pc-vs-badge-icon"><AlertTriangle size={16} /></span>
                    <span className="pc-vs-badge-text">TRADITIONAL APPROACH</span>
                  </div>
                  <h3>Brittle Traceability Logic</h3>
                  <p>Barcode checks, duplicates, routing, and NG handling get written as messy ladder logic or one-off desktop software per line. Fragile and impossible to audit safely.</p>
                  <ul className="pc-vs-list">
                    <li><span className="pc-vs-x">✕</span> Thousands of lines of custom PLC ladder</li>
                    <li><span className="pc-vs-x">✕</span> Re-programming needed whenever station rules change</li>
                    <li><span className="pc-vs-x">✕</span> Failed audits from missing genealogy and logs</li>
                  </ul>
                  <div className="pc-vs-footer">
                    <span className="pc-vs-footer-label">COMPLEXITY</span>
                    <span className="pc-vs-footer-val high">HIGH</span>
                  </div>
                </div>

                <div className="pc-vs-divider">
                  <div className="pc-vs-circle">
                    <ArrowRight size={18} />
                  </div>
                  <span className="pc-vs-divider-text">TRANSFORM</span>
                </div>

                <div className="pc-vs-card pitech">
                  <div className="pc-vs-badge solution">
                    <span className="pc-vs-badge-icon"><ShieldCheck size={16} /></span>
                    <span className="pc-vs-badge-text">PITECH CONNECT</span>
                  </div>
                  <h3>Configuration-Driven Stations</h3>
                  <p>Barcode handshaking, validation rules (length, prefix, regex, duplicates, previous station), rework routing, child-part linking, and full history — all as station browser settings.</p>
                  <div className="pc-vs-pills-row">
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> 3 Registers Only</span>
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> Child Part Linking</span>
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> Station Rules</span>
                    <span className="pc-vs-pill"><CheckCircle2 size={13} /> Full Genealogy</span>
                  </div>
                  <div className="pc-vs-footer">
                    <span className="pc-vs-footer-label">SIMPLICITY</span>
                    <span className="pc-vs-footer-val unified">UNIFIED</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════ SIMULATOR (IMAGE 3) ══════════ */}
      <section className="pc-section pc-bg-light">
        <div className="pc-container">
          <header className="pc-section-head pc-animate">
            <span className="pc-badge">Interactive Testbench</span>
            <h2>Try The Live Traceability Simulator</h2>
            <p>Test how Pitech Connect intercepts barcodes, validates rules in milliseconds, and talks to the PLC register.</p>
          </header>

          <div className="pc-sim-panel pc-animate pc-delay-1">
            {/* Top Bar */}
            <div className="pc-sim-bar">
              <div className="pc-sim-bar-title">
                <span className="pc-sim-prompt">&gt;_</span>
                <span>PITECH CONNECT / STATION 04</span>
              </div>
              <div className="pc-sim-online-badge">
                <span className="pc-sim-online-dot" />
                <span>SIMULATOR ONLINE</span>
              </div>
            </div>

            {/* Inner Grid */}
            <div className="pc-sim-grid">
              {/* Left Column: Test Scenario */}
              <div className="pc-sim-scenario-col">
                <span className="pc-sim-sub-tag">TEST SCENARIO</span>
                <h3 className="pc-sim-main-title">Trigger a barcode scan</h3>
                <p className="pc-sim-scenario-desc">
                  Choose a scenario to simulate the validation and PLC handshake.
                </p>

                <div className="pc-sim-buttons-stack">
                  <button
                    className={`pc-sim-action-btn pass ${simMode === "ok" ? "selected" : ""}`}
                    onClick={() => runSimulator("valid")}
                    disabled={simMode === "validating"}
                  >
                    <CheckCircle2 size={18} />
                    <span>Simulate Valid Part</span>
                  </button>

                  <button
                    className={`pc-sim-action-btn fail ${simMode === "rejected" ? "selected" : ""}`}
                    onClick={() => runSimulator("invalid")}
                    disabled={simMode === "validating"}
                  >
                    <AlertTriangle size={18} />
                    <span>Simulate Duplicate / NG</span>
                  </button>
                </div>

                <div className="pc-sim-info-pill">
                  <ShieldCheck size={18} />
                  <span>Validation includes barcode rules, station history and duplicate checks.</span>
                </div>
              </div>

              {/* Right Column: Terminal Output */}
              <div className="pc-sim-terminal-col">
                <div className="pc-sim-term-header">
                  <span>TERMINAL OUTPUT</span>
                  <span>PLC / SQL HANDSHAKE</span>
                </div>

                <div className="pc-sim-term-body">
                  {simMode === "idle" && (
                    <div className="pc-sim-idle-view">
                      <div className="pc-sim-scan-frame">
                        <Scan size={36} />
                      </div>
                      <h4>Waiting for barcode input</h4>
                      <p>Select a test scenario to begin</p>
                    </div>
                  )}

                  {simMode === "validating" && (
                    <div className="pc-sim-loading-view">
                      <RefreshCw size={30} className="pc-spin" />
                      <h4>Validating against SQL database…</h4>
                      <p>Checking duplicate rules and previous station status</p>
                    </div>
                  )}

                  {simMode !== "idle" && simMode !== "validating" && simLogData && (
                    <div className={`pc-sim-log-view ${simMode}`}>
                      <div className="pc-sim-log-top">
                        <span className="pc-sim-status-badge">
                          {simMode === "ok" ? <Check size={16} /> : <X size={16} />}
                          {simLogData.status}
                        </span>
                        <span className="pc-sim-latency-badge">⚡ {simLogData.timeMs}</span>
                      </div>
                      <div className="pc-sim-log-grid">
                        <div className="pc-sim-log-cell">
                          <span className="label">Barcode</span>
                          <strong className="value">{simLogData.barcode}</strong>
                        </div>
                        <div className="pc-sim-log-cell">
                          <span className="label">Decision</span>
                          <strong className={`value ${simMode === "ok" ? "ok" : "err"}`}>{simLogData.codeSent}</strong>
                        </div>
                        <div className="pc-sim-log-cell">
                          <span className="label">Child Parts</span>
                          <strong className="value">{simLogData.childParts}</strong>
                        </div>
                        <div className="pc-sim-log-cell">
                          <span className="label">SQL Table</span>
                          <strong className="value">{simLogData.dbTable}</strong>
                        </div>
                      </div>
                      <div className="pc-sim-regs-row">
                        <span className="pc-sim-regs-title">PLC Registers Handshake:</span>
                        <span className="pc-reg-badge">{simLogData.registers.trigger}</span>
                        <span className="pc-reg-badge">{simLogData.registers.result}</span>
                        <span className="pc-reg-badge">{simLogData.registers.ack}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ DRIVERS ══════════ */}
      <section className="pc-section pc-bg-white">
        <div className="pc-container">
          <header className="pc-section-head pc-animate">
            <span className="pc-badge">Broad Compatibility</span>
            <h2>40+ Protocol Drivers In One Software</h2>
            <p>Search your machine brand or filter by category to check native driver support.</p>
          </header>

          <div className="pc-driver-controls pc-animate pc-delay-1">
            <div className="pc-search pc-neu-inset">
              <Search size={17} className="pc-search-icon" />
              <input type="text" placeholder="Search protocol, PLC brand or standard..."
                value={driverSearch} onChange={(e) => setDriverSearch(e.target.value)} />
              {driverSearch && <button onClick={() => setDriverSearch("")}><X size={14} /></button>}
            </div>
            <div className="pc-cats">
              {["All", "PLC", "CNC", "Tools", "Standards", "IIoT"].map((cat) => (
                <button key={cat} className={`pc-cat ${driverCategory === cat ? "active" : ""}`}
                  onClick={() => setDriverCategory(cat)}>{cat}</button>
              ))}
            </div>
          </div>

          <div className="pc-drivers pc-animate pc-delay-2">
            {filteredDrivers.map((d, i) => (
              <div key={i} className="pc-driver pc-glass">
                <div className="pc-driver-icon"><Cpu size={15} /></div>
                <div className="pc-driver-info">
                  <strong>{d.name}</strong>
                  <span>{d.desc}</span>
                </div>
              </div>
            ))}
            {filteredDrivers.length === 0 && (
              <div className="pc-drivers-empty">
                <p>No matching driver for "{driverSearch}".</p>
                <button onClick={() => { setDriverSearch(""); setDriverCategory("All"); }}>Reset</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════ CALCULATOR ══════════ */}
      <section className="pc-section pc-bg-light">
        <div className="pc-container">
          <header className="pc-section-head pc-animate">
            <span className="pc-badge">Engineering ROI</span>
            <h2>Estimate Your Project Time & Effort Savings</h2>
            <p>Adjust your factory machine count and stations to compare against traditional SCADA projects.</p>
          </header>

          <div className="pc-calc pc-glass pc-animate pc-delay-1">
            <div className="pc-calc-grid">
              <div className="pc-calc-inputs">
                <div className="pc-calc-block">
                  <div className="pc-calc-label">
                    <span>Connected Machines / PLCs:</span>
                    <strong>{calcMachines} Devices</strong>
                  </div>
                  <input type="range" min="2" max="100" value={calcMachines}
                    onChange={(e) => setCalcMachines(Number(e.target.value))} className="pc-range" />
                  <div className="pc-calc-hints"><span>2</span><span>50</span><span>100+</span></div>
                </div>

                <div className="pc-calc-block">
                  <div className="pc-calc-label">
                    <span>Traceability Stations:</span>
                    <strong>{calcStations} Stations</strong>
                  </div>
                  <input type="range" min="1" max="25" value={calcStations}
                    onChange={(e) => setCalcStations(Number(e.target.value))} className="pc-range" />
                  <div className="pc-calc-hints"><span>1</span><span>12</span><span>25</span></div>
                </div>

                <label className="pc-calc-check pc-neu">
                  <input type="checkbox" checked={calcIncludeTrace}
                    onChange={(e) => setCalcIncludeTrace(e.target.checked)} />
                  <span>Include Barcode Rules & Child-Part Traceability</span>
                </label>
              </div>

              <div className="pc-calc-results">
                <div className="pc-calc-results-head">
                  <Calculator size={17} /> Estimated Comparison
                </div>
                <div className="pc-compare">
                  <div className="pc-compare-card traditional">
                    <span>Traditional SCADA</span>
                    <div className="pc-compare-value">~{estTradMonths} Months</div>
                    <p>Custom ladder logic, external programmers, months of debugging.</p>
                  </div>
                  <div className="pc-compare-card pitech">
                    <span>With Pitech Connect</span>
                    <div className="pc-compare-value">~{estPitechDays} Days</div>
                    <p>Browser config, pre-built drivers, 80% less effort.</p>
                  </div>
                </div>
                <div className="pc-calc-stats">
                  <div><span>Hours Saved</span><strong>~{estHoursSaved} hrs</strong></div>
                  <div><span>PLC Rewrites</span><strong className="ok">Zero</strong></div>
                  <div><span>License Savings</span><strong className="blue">₹{estSavingsInr}*</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ARCHITECTURE (IMAGE 4) ══════════ */}
      <section className="pc-section pc-arch-section">
        <div className="pc-container">
          <header className="pc-section-head pc-animate">
            <span className="pc-badge dark">Unified Architecture</span>
            <h2 className="light">Pitech Connect Brings Them Together</h2>
            <p className="light">From legacy serial PLCs to modern Ethernet controllers to cloud MES — one intelligence bridge.</p>
          </header>

          <div className="pc-arch-container pc-animate pc-delay-1">
            {/* Column 1: Shop Floor Devices */}
            <div className="pc-arch-card devices-card">
              <div className="pc-arch-card-header devices">
                <Cpu size={16} />
                <span>SHOP FLOOR DEVICES</span>
              </div>
              <div className="pc-arch-rows-list">
                {[
                  ["Mitsubishi PLC", "SLMP / MC"],
                  ["Siemens PLC", "S7 ISO"],
                  ["Allen-Bradley", "EtherNet/IP"],
                  ["Omron / Keyence", "FINS / KV"],
                  ["Fanuc CNC", "FOCAS"],
                  ["DC Torque Tools", "Open Protocol"],
                  ["Barcode / RFID", "TCP / Serial"],
                ].map(([name, proto], i) => (
                  <div key={i} className="pc-arch-row">
                    <span className="pc-arch-row-name"><Cpu size={14} className="pc-arch-row-icon" /> {name}</span>
                    <span className="pc-arch-row-proto">{proto}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector 1 */}
            <div className="pc-arch-connector">
              <div className="pc-arch-circle-btn">
                <ArrowRight size={18} />
              </div>
              <span className="pc-arch-conn-label">DATA IN</span>
            </div>

            {/* Column 2: Central Edge Hub */}
            <div className="pc-arch-card hub-card">
              <div className="pc-hub-top-tag">
                <Radio size={13} className="pc-pulse" />
                <span>CENTRAL EDGE HUB</span>
              </div>

              <div className="pc-hub-icon-box">
                <Network size={36} />
              </div>

              <h3 className="pc-hub-brand-title">
                PiTech <span>Connect</span>
              </h3>
              <p className="pc-hub-subtitle">UNIFIED INDUSTRIAL PLATFORM</p>

              <div className="pc-hub-grid-features">
                <div className="pc-hub-feat-item"><Zap size={14} /> Read &amp; Write</div>
                <div className="pc-hub-feat-item"><Database size={14} /> Automated Logging</div>
                <div className="pc-hub-feat-item"><ShieldCheck size={14} /> Traceability</div>
                <div className="pc-hub-feat-item"><Activity size={14} /> Alarms &amp; Monitoring</div>
              </div>

              <div className="pc-hub-config-badge">
                <Check size={14} />
                <span>Browser-Based Configuration</span>
              </div>
            </div>

            {/* Connector 2 */}
            <div className="pc-arch-connector">
              <div className="pc-arch-circle-btn">
                <ArrowRight size={18} />
              </div>
              <span className="pc-arch-conn-label">DATA OUT</span>
            </div>

            {/* Column 3: Enterprise Systems */}
            <div className="pc-arch-card enterprise-card">
              <div className="pc-arch-card-header enterprise">
                <Database size={16} />
                <span>ENTERPRISE SYSTEMS</span>
              </div>
              <div className="pc-arch-rows-list inside-padded">
                {[
                  ["SQL Server / MySQL", "Auto Schema"],
                  ["PostgreSQL / SQLite", "Direct Log"],
                  ["Pitech IntelliMES", "Native Sync"],
                  ["REST APIs", "JSON HTTP"],
                  ["MQTT / Sparkplug B", "Cloud Broker"],
                  ["SCADA / ERP", "Integration"],
                  ["Quality Audits", "SQL Reports"],
                ].map(([name, proto], i) => (
                  <div key={i} className="pc-arch-row enterprise-row">
                    <span className="pc-arch-row-name"><Database size={14} className="pc-arch-row-icon green" /> {name}</span>
                    <span className="pc-arch-row-dest">{proto}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRACE STEPS ══════════ */}
      <section className="pc-section pc-bg-light">
        <div className="pc-container">
          <header className="pc-section-head pc-animate">
            <span className="pc-badge">Zero-Code Traceability</span>
            <h2>Every Part. Every Component. Every Result.</h2>
            <p>Machine PLC needs only 3 words (Trigger, Result, ACK). Pitech Connect handles validation and SQL genealogy.</p>
          </header>

          <div className="pc-steps pc-animate pc-delay-1">
            {traceSteps.map((s, i) => (
              <div key={i} className="pc-step pc-glass">
                <div className="pc-step-num">{s.num}</div>
                <div className="pc-step-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ REDUNDANCY (IMAGE 5) ══════════ */}
      <section className="pc-section pc-bg-light">
        <div className="pc-container">
          <header className="pc-section-head pc-animate">
            <span className="pc-badge">Always-On Reliability</span>
            <h2>Built For The Real Shop Floor</h2>
            <p>Dual-server automatic takeover, heartbeat watchdog, and live tag modification without stopping production.</p>
          </header>

          <div className="pc-redundancy-section pc-animate pc-delay-1">
            {/* Top 2 Cards + Failover Indicator */}
            <div className="pc-redun-servers-row">
              {/* Server A */}
              <div className="pc-redun-server-card primary-failed">
                <span className="pc-redun-top-tag">PRIMARY SERVER</span>
                <div className="pc-redun-icon-box failed">
                  <Server size={30} />
                </div>
                <h3 className="pc-redun-server-name">Server A</h3>
                <span className="pc-redun-status-text failure">SIMULATED FAILURE</span>
                <p className="pc-redun-server-desc">Heartbeat lost · Isolated through witness check</p>
              </div>

              {/* Center Failover */}
              <div className="pc-redun-failover-indicator">
                <div className="pc-redun-sync-circle">
                  <RefreshCw size={20} className="pc-spin-slow" />
                </div>
                <span className="pc-redun-failover-label">FAILOVER</span>
                <span className="pc-redun-failover-time">~10 SEC</span>
              </div>

              {/* Server B */}
              <div className="pc-redun-server-card standby-active">
                <span className="pc-redun-top-tag">HOT STANDBY</span>
                <div className="pc-redun-icon-box active">
                  <Server size={30} />
                </div>
                <h3 className="pc-redun-server-name">Server B</h3>
                <span className="pc-redun-status-text active">ACTIVE</span>
                <p className="pc-redun-server-desc">Device polling and logging take over</p>
              </div>
            </div>

            {/* Bottom 4 Pill Cards */}
            <div className="pc-redun-pills-grid">
              <div className="pc-redun-pill-card">
                <div className="pc-redun-pill-icon"><Clock size={18} /></div>
                <div>
                  <strong>Automatic Takeover</strong>
                  <span>Target failover of approximately 10 seconds</span>
                </div>
              </div>

              <div className="pc-redun-pill-card">
                <div className="pc-redun-pill-icon"><ShieldCheck size={18} /></div>
                <div>
                  <strong>Witness Check</strong>
                  <span>Designed to prevent split-brain operation</span>
                </div>
              </div>

              <div className="pc-redun-pill-card">
                <div className="pc-redun-pill-icon"><RefreshCw size={18} /></div>
                <div>
                  <strong>Configuration Synchronization</strong>
                  <span>Continuous project synchronization</span>
                </div>
              </div>

              <div className="pc-redun-pill-card">
                <div className="pc-redun-pill-icon"><Database size={18} /></div>
                <div>
                  <strong>Separate Database Server</strong>
                  <span>Database hosted independently</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BENEFITS ══════════ */}
      <section className="pc-section pc-bg-white">
        <div className="pc-container">
          <header className="pc-section-head pc-animate">
            <span className="pc-badge">Customer Impact</span>
            <h2>What This Means For Your Factory</h2>
            <p>Real business value from Day 1 — less engineering overhead, faster go-live, total autonomy.</p>
          </header>

          <div className="pc-benefits pc-animate pc-delay-1">
            {[
              { icon: <Zap size={22} />, stat: "80% Less", title: "Implementation Effort", desc: "Traceability projects that took 4-6 months go live in days with standard station settings." },
              { icon: <FileCode size={22} />, stat: "3 Words", title: "Minimal PLC Changes", desc: "No rewriting complicated ladder logic. Only 3 registers (Trigger, Result, ACK) needed." },
              { icon: <Settings size={22} />, stat: "100% Team", title: "Internal Autonomy", desc: "Your maintenance team can add a station, update barcode regex, or change rules in seconds." },
              { icon: <Monitor size={22} />, stat: "Zero", title: "Client Software Installs", desc: "Everything visible from any PC, tablet, or terminal on the plant network using a browser." },
            ].map((b, i) => (
              <div key={i} className="pc-benefit pc-glass">
                <div className="pc-benefit-icon">{b.icon}</div>
                <div className="pc-benefit-stat">{b.stat}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}