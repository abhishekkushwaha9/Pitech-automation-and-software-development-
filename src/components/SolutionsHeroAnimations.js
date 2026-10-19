import React, { useRef, useEffect } from "react";
import Digitalization3DHero from "./Digitalization3DHero";
import "./SolutionsHeroAnimations.css";

// Shared GPU-accelerated interactive & autonomous motion container
function MovableContainer({ children, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      targetX = Math.max(-1, Math.min(1, x));
      targetY = Math.max(-1, Math.min(1, y));
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      el.style.setProperty("--mouse-x", currentX.toFixed(4));
      el.style.setProperty("--mouse-y", currentY.toFixed(4));
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`solution-hero-anim ${className}`}>
      {children}
    </div>
  );
}

// ============================================================
// 1. AI BASED VISION: Futuristic Camera Viewfinder & Reticle
// ============================================================
export function VisionHeroAnimation() {
  return (
    <MovableContainer className="anim-vision-view">
      {/* Background Matrix Grid */}
      <div className="anim-vision-grid" />

      {/* Sweeping Laser Line */}
      <div className="anim-vision-scanline" />

      {/* Movable Layer 1: Dual Counter-Rotating Targeting Reticle */}
      <div className="anim-move-layer-1 anim-vision-viewfinder">
        <div className="anim-reticle-outer" />
        <div className="anim-reticle-inner" />
        <div className="anim-target-pulse-dot" />

        {/* Viewfinder Corner Brackets */}
        <div className="anim-viewfinder-frame">
          <span className="anim-bracket tl" />
          <span className="anim-bracket tr" />
          <span className="anim-bracket bl" />
          <span className="anim-bracket br" />
          <span className="anim-viewfinder-tag">ROI: OPTICAL SENSOR #04</span>
        </div>
      </div>

      {/* Movable Layer 2: Floating Holographic Match Badges */}
      <div className="anim-move-layer-2 anim-vision-telemetry-stack">
        <div className="anim-hud-badge vision-live">
          <span className="anim-pulse-point green" />
          <span>AI VISION ENGINE: <strong>99.8% MATCH</strong></span>
        </div>
        <div className="anim-hud-badge vision-sub">
          <span className="anim-hud-icon">🔍</span>
          <span>DEFECT: <strong>0 DETECTED (PASS ✓)</strong></span>
        </div>
        <div className="anim-hud-badge vision-chip">
          <span>FPS: 240 • ΔE &lt; 0.4 • 4.2ms</span>
        </div>
      </div>

      {/* Movable Layer 3: Ambient Floating Target Crosshairs */}
      <div className="anim-move-layer-3 anim-crosshair c1">+</div>
      <div className="anim-move-layer-3 anim-crosshair c2">+</div>
      <div className="anim-move-layer-3 anim-crosshair c3">+</div>
    </MovableContainer>
  );
}

// ============================================================
// 2. BLE TAG: Concentric Radiating Radar & Roaming Asset Pings
// ============================================================
export function BLEHeroAnimation() {
  return (
    <MovableContainer className="anim-ble-view">
      {/* Concentric Radiating RF Wave Rings */}
      <div className="anim-ble-wave w1" />
      <div className="anim-ble-wave w2" />
      <div className="anim-ble-wave w3" />
      <div className="anim-ble-wave w4" />

      {/* Movable Layer 1: Central Glowing Bluetooth Beacon */}
      <div className="anim-move-layer-1 anim-ble-center-wrap">
        <div className="anim-ble-beacon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
          </svg>
        </div>
        <div className="anim-ble-beacon-aura" />
      </div>

      {/* Movable Layer 2: Roaming Asset Ping Tags Floating in Space */}
      <div className="anim-move-layer-2 anim-ble-asset-tag t1">
        <span className="anim-ble-ping-dot green" />
        <div className="anim-ble-asset-info">
          <strong>Pallet Asset #402</strong>
          <span>Zone A • RSSI -42 dBm</span>
        </div>
      </div>

      <div className="anim-move-layer-3 anim-ble-asset-tag t2">
        <span className="anim-ble-ping-dot blue" />
        <div className="anim-ble-asset-info">
          <strong>Forklift AGV #12</strong>
          <span>Speed: 1.4 m/s • In Transit</span>
        </div>
      </div>

      <div className="anim-move-layer-1 anim-ble-asset-tag t3">
        <span className="anim-ble-ping-dot amber" />
        <div className="anim-ble-asset-info">
          <strong>Smart Rig Station 3</strong>
          <span>Battery: 98% • Interlocked</span>
        </div>
      </div>
    </MovableContainer>
  );
}

// ============================================================
// 3. ENERGY MONITORING: Flowing 3-Phase AC Sine Waves & Telemetry
// ============================================================
export function EnergyHeroAnimation() {
  return (
    <MovableContainer className="anim-energy-view">
      {/* 3-Phase Flowing Sinusoidal AC Waves */}
      <div className="anim-energy-wave-container">
        <svg className="anim-energy-svg" viewBox="0 0 800 160" preserveAspectRatio="none">
          {/* Phase R (Amber) */}
          <path
            className="anim-sine-path r-phase"
            d="M 0 80 Q 100 0, 200 80 T 400 80 T 600 80 T 800 80"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3.5"
          />
          {/* Phase Y (Sky Blue) */}
          <path
            className="anim-sine-path y-phase"
            d="M 0 80 Q 100 160, 200 80 T 400 80 T 600 80 T 800 80"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
          />
          {/* Phase B (Emerald) */}
          <path
            className="anim-sine-path b-phase"
            d="M 0 80 Q 100 80, 200 20 T 400 80 T 600 140 T 800 80"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
        </svg>

        {/* Traveling Energy Sparks */}
        <div className="anim-energy-spark s1" />
        <div className="anim-energy-spark s2" />
        <div className="anim-energy-spark s3" />
      </div>

      {/* Movable Layer 1: Floating Telemetry HUD Glass Card */}
      <div className="anim-move-layer-1 anim-energy-telemetry-hud">
        <div className="anim-energy-pill">
          <span className="anim-pulse-point green" />
          <span>3-PHASE GRID: 415.2V • 50.02 Hz</span>
        </div>
        <div className="anim-energy-card">
          <div className="anim-energy-card-row">
            <span>ACTIVE LOAD</span>
            <strong className="anim-kpi-green">184.6 kW</strong>
          </div>
          <div className="anim-energy-card-row">
            <span>POWER FACTOR</span>
            <strong className="anim-kpi-cyan">0.992 cos φ</strong>
          </div>
          <div className="anim-energy-bar-track">
            <div className="anim-energy-bar-fill" />
          </div>
        </div>
      </div>
    </MovableContainer>
  );
}

// ============================================================
// 4. PREDICTIVE MAINTENANCE: Vibration ECG Waveform + FFT Spectrum
// ============================================================
export function PredictiveHeroAnimation() {
  return (
    <MovableContainer className="anim-pm-view">
      {/* Vibration Velocity ECG Waveform */}
      <div className="anim-pm-wave-wrap">
        <svg className="anim-pm-ecg-svg" viewBox="0 0 700 130" preserveAspectRatio="none">
          <path
            className="anim-ecg-path"
            d="M 0 65 L 80 65 L 95 30 L 110 100 L 125 15 L 140 85 L 155 65 L 260 65 L 275 30 L 290 100 L 305 15 L 320 85 L 335 65 L 440 65 L 455 30 L 470 100 L 485 15 L 500 85 L 515 65 L 620 65 L 635 30 L 650 100 L 665 15 L 680 85 L 700 65"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Movable Layer 3: Dancing 8-Band FFT Equalizer Spectrum */}
      <div className="anim-move-layer-3 anim-pm-spectrum">
        <span className="anim-fft-bar f1" />
        <span className="anim-fft-bar f2" />
        <span className="anim-fft-bar f3" />
        <span className="anim-fft-bar f4" />
        <span className="anim-fft-bar f5" />
        <span className="anim-fft-bar f6" />
        <span className="anim-fft-bar f7" />
        <span className="anim-fft-bar f8" />
      </div>

      {/* Movable Layer 1: Machine Health Status Card */}
      <div className="anim-move-layer-1 anim-pm-hud">
        <div className="anim-pm-pill">
          <span className="anim-pulse-point green" />
          <span>VIBRATION RMS: 1.1 mm/s • HEALTHY</span>
        </div>
        <div className="anim-pm-card">
          <div className="anim-pm-row">
            <span>BEARING TEMP</span>
            <strong className="anim-kpi-cyan">41.8°C</strong>
          </div>
          <div className="anim-pm-row">
            <span>HEALTH INDEX</span>
            <strong className="anim-kpi-green">98.4%</strong>
          </div>
          <div className="anim-pm-status-badge">
            ISO 10816 CLASS 1: NORMAL
          </div>
        </div>
      </div>
    </MovableContainer>
  );
}

// ============================================================
// 5. DIGITAL ANDON: 3D Signal Light Tower with Radiance
// ============================================================
export function AndonHeroAnimation() {
  return (
    <MovableContainer className="anim-andon-view">
      {/* Radiating Soundwave Pulses */}
      <div className="anim-andon-radiance r1" />
      <div className="anim-andon-radiance r2" />

      {/* Movable Layer 1: 3D Physical Signal Tower with Fresnel Lenses */}
      <div className="anim-move-layer-1 anim-andon-tower-wrap">
        <div className="anim-andon-tower">
          <div className="anim-andon-cap" />
          <div className="anim-andon-light green">
            <span className="anim-lens-glow green" />
          </div>
          <div className="anim-andon-light amber">
            <span className="anim-lens-glow amber" />
          </div>
          <div className="anim-andon-light red">
            <span className="anim-lens-glow red" />
          </div>
          <div className="anim-andon-pole" />
          <div className="anim-andon-base" />
        </div>
      </div>

      {/* Movable Layer 2: Live Shopfloor Alert Cards */}
      <div className="anim-move-layer-2 anim-andon-hud">
        <div className="anim-andon-status-card green">
          <span className="anim-pulse-point green" />
          <div>
            <strong>LINE 1: OPERATIONAL</strong>
            <span>Output: 98.4% • 0 Escalations</span>
          </div>
        </div>
        <div className="anim-andon-status-card amber">
          <span className="anim-pulse-point amber" />
          <div>
            <strong>STATION 04: CALL ACTIVE</strong>
            <span>Material Supply In Route (42s)</span>
          </div>
        </div>
      </div>
    </MovableContainer>
  );
}

// ============================================================
// 6. PRODUCTION DASHBOARD: Operator Cockpit Console & Meters
// ============================================================
export function ProductionHeroAnimation() {
  return (
    <MovableContainer className="anim-prod-view">
      {/* Movable Layer 1: Cockpit Telemetry Console */}
      <div className="anim-move-layer-1 anim-prod-console">
        <div className="anim-prod-header">
          <div className="anim-prod-title">
            <span className="anim-pulse-point blue" />
            <span>SHIFT 1 TELEMETRY</span>
          </div>
          <span className="anim-live-chip">LIVE MQTT</span>
        </div>

        <div className="anim-prod-metric-group">
          <div className="anim-prod-label-row">
            <span>Production Output</span>
            <strong className="anim-kpi-cyan">1,480 / 1,500 (98.6%)</strong>
          </div>
          <div className="anim-prod-track">
            <div className="anim-prod-fill cyan" />
          </div>
        </div>

        <div className="anim-prod-metric-group">
          <div className="anim-prod-label-row">
            <span>Cycle Time Performance</span>
            <strong className="anim-kpi-green">42s (Target: 45s)</strong>
          </div>
          <div className="anim-prod-track">
            <div className="anim-prod-fill green" />
          </div>
        </div>

        <div className="anim-prod-footer-row">
          <span>OEE: <strong>92.4%</strong></span>
          <span>DOWNTIME: <strong style={{ color: "#4ade80" }}>0.0m</strong></span>
        </div>
      </div>

      {/* Movable Layer 3: Floating Auxiliary Takt Widget */}
      <div className="anim-move-layer-3 anim-prod-mini-widget">
        <span className="anim-spark-title">TAKT SPEED</span>
        <span className="anim-spark-value">1.2 pcs/min</span>
      </div>
    </MovableContainer>
  );
}

// ============================================================
// 7. OEE DASHBOARD: Subtle Cybernetic Radar Overlay
// ============================================================
export function OEEHeroAnimation() {
  return (
    <MovableContainer className="anim-oee-subtle">
      {/* Subtle sweeping scanline over the dashboard background */}
      <div className="anim-oee-scanline" />

      {/* Movable Layer 1: Subtle holographic radar ping over radar chart area */}
      <div className="anim-move-layer-1 anim-oee-radar-ping-wrap">
        <div className="anim-oee-radar-ring" />
        <div className="anim-oee-radar-ring-dashed" />
        <div className="anim-oee-radar-sweep" />
        <div className="anim-oee-radar-center-blip" />
      </div>

      {/* Movable Layer 2: Subtle floating live telemetry badge */}
      <div className="anim-move-layer-2 anim-oee-telemetry-badge">
        <span className="anim-pulse-point green" />
        <span className="anim-oee-badge-text">LIVE EDGE TELEMETRY • OEE 4.0 ACTIVE</span>
      </div>

      {/* Movable Layer 3: Subtle ambient floating cyber particles */}
      <div className="anim-move-layer-3 anim-oee-particles">
        <span className="anim-oee-particle p1" />
        <span className="anim-oee-particle p2" />
        <span className="anim-oee-particle p3" />
      </div>
    </MovableContainer>
  );
}

// ============================================================
// 8. DIGITAL WORK INSTRUCTIONS: Connected Vertical SOP Pipeline
// ============================================================
export function DWIHeroAnimation() {
  return (
    <MovableContainer className="anim-dwi-view">
      {/* Movable Layer 1: Connected SOP Sequence Cards */}
      <div className="anim-move-layer-1 anim-dwi-flow">
        <div className="anim-dwi-station-tag">
          <span className="anim-pulse-point blue" />
          <span>ASSEMBLY LINE 01 • SOP REV 3.2</span>
        </div>

        <div className="anim-dwi-step step1">
          <div className="anim-dwi-check verified">✓</div>
          <div className="anim-dwi-step-content">
            <strong>STEP 01: Parts Clamped</strong>
            <span>Pneumatic sensor verified • 6.2 bar</span>
          </div>
        </div>

        <div className="anim-dwi-connector-line">
          <span className="anim-dwi-pulse-bead" />
        </div>

        <div className="anim-dwi-step step2">
          <div className="anim-dwi-check active">→</div>
          <div className="anim-dwi-step-content">
            <strong>STEP 02: Torque 45.0 Nm</strong>
            <span>Smart wireless tool interlock active</span>
          </div>
        </div>

        <div className="anim-dwi-connector-line" />

        <div className="anim-dwi-step step3">
          <div className="anim-dwi-check pending">○</div>
          <div className="anim-dwi-step-content">
            <strong>STEP 03: Vision Inspection</strong>
            <span>Awaiting torque completion</span>
          </div>
        </div>
      </div>
    </MovableContainer>
  );
}

// ============================================================
// 9. IIoT PLATFORM: Constellation Mesh / Node Network Topology
// ============================================================
export function IIoTHeroAnimation() {
  return (
    <MovableContainer className="anim-iiot-view">
      {/* Movable Layer 1: Connected Node Network Mesh */}
      <div className="anim-move-layer-1 anim-iiot-mesh">
        <svg className="anim-iiot-svg-streams" viewBox="0 0 420 180">
          <line x1="60" y1="90" x2="160" y2="90" className="anim-stream-line" />
          <line x1="200" y1="90" x2="300" y2="90" className="anim-stream-line" />
          <line x1="200" y1="90" x2="380" y2="40" className="anim-stream-line dashed" />
        </svg>

        {/* Node 1: PLC */}
        <div className="anim-iiot-node plc">
          <span className="anim-node-icon">⚡</span>
          <span>PLC</span>
        </div>

        {/* Node 2: EDGE GATEWAY */}
        <div className="anim-iiot-node edge">
          <span className="anim-node-icon">🖧</span>
          <span>EDGE</span>
          <div className="anim-node-ring" />
        </div>

        {/* Node 3: SCADA */}
        <div className="anim-iiot-node scada">
          <span className="anim-node-icon">🖥️</span>
          <span>SCADA</span>
        </div>

        {/* Node 4: CLOUD PLATFORM */}
        <div className="anim-iiot-node cloud">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
          <span>CLOUD</span>
        </div>

        {/* Traveling Data Packets */}
        <div className="anim-iiot-packet pkt1" />
        <div className="anim-iiot-packet pkt2" />
      </div>

      {/* Movable Layer 2: Floating Telemetry Badges */}
      <div className="anim-move-layer-2 anim-iiot-telemetry">
        <span className="anim-iiot-chip">MQTT v5.0: 100 Hz</span>
        <span className="anim-iiot-chip green">OPC-UA: CONNECTED</span>
        <span className="anim-iiot-chip blue">PACKET LOSS: 0.00%</span>
      </div>
    </MovableContainer>
  );
}

// ============================================================
// 10. FACTORY DIGITALIZATION: Interactive 3D WebGL Semi-Circle Earth Dome
// ============================================================
export function DigitalizationHeroAnimation() {
  return <Digitalization3DHero />;
}

// ============================================================
// 11. ABOUT US (OUR STORY): Ambient 3D Hero Background Animation
// ============================================================
export function AboutHeroBackgroundAnimation() {
  return (
    <MovableContainer className="anim-about-bg-view">
      {/* Background Cybernetic Grid */}
      <div className="anim-about-grid" />

      {/* Ambient Sweeping Laser Line */}
      <div className="anim-about-laser" />

      {/* Movable Layer 1: Ambient 3D Orbital Rings in Background */}
      <div className="anim-move-layer-1 anim-about-orbital-wrap">
        <div className="anim-about-ring r1" />
        <div className="anim-about-ring r2" />
        <div className="anim-about-ring r3" />
        <div className="anim-about-center-glow" />
      </div>

      {/* Movable Layer 2: Floating Constellation Tech Particles */}
      <div className="anim-move-layer-2 anim-about-particles">
        <span className="anim-about-node n1" />
        <span className="anim-about-node n2" />
        <span className="anim-about-node n3" />
        <span className="anim-about-node n4" />
        <span className="anim-about-node n5" />
      </div>

      {/* Movable Layer 3: Floating Crosshairs */}
      <div className="anim-move-layer-3 anim-about-crosshair c1">+</div>
      <div className="anim-move-layer-3 anim-about-crosshair c2">+</div>
      <div className="anim-move-layer-3 anim-about-crosshair c3">+</div>
    </MovableContainer>
  );
}

export const AboutStoryHeroAnimation = AboutHeroBackgroundAnimation;

// ============================================================
// 12. SENSORS: Pure 3D — Orbiting Sensor Rings + Beam + Particles
// ============================================================
export function SensorHeroAnimation() {
  return (
    <MovableContainer className="anim-sensor-view">
      {/* Background faint grid */}
      <div className="anim-sensor-grid" />

      {/* Radar sweep rings */}
      <div className="anim-sensor-radar-wrap">
        <div className="anim-sensor-radar-ring sr1" />
        <div className="anim-sensor-radar-ring sr2" />
        <div className="anim-sensor-radar-ring sr3" />
        <div className="anim-sensor-radar-sweep" />
        <div className="anim-sensor-radar-center" />
      </div>

      {/* Movable Layer 1: 3D floating sensor orb with beam */}
      <div className="anim-move-layer-1 anim-sensor-3d-wrap">
        {/* 3D sensor body */}
        <div className="anim-sensor-3d-body">
          <div className="anim-sensor-3d-face front" />
          <div className="anim-sensor-3d-face top" />
          <div className="anim-sensor-3d-face side" />
          <div className="anim-sensor-3d-led" />
          {/* Orbiting halo rings */}
          <div className="anim-sensor-halo h1" />
          <div className="anim-sensor-halo h2" />
        </div>
        {/* Emission beam */}
        <div className="anim-sensor-beam" />
        {/* Impact target rings */}
        <div className="anim-sensor-beam-target">
          <div className="anim-sensor-hit-ring r1" />
          <div className="anim-sensor-hit-ring r2" />
          <div className="anim-sensor-hit-ring r3" />
          <div className="anim-sensor-hit-dot" />
        </div>
      </div>

      {/* Movable Layer 2: Floating glowing orbs */}
      <div className="anim-move-layer-2 anim-sensor-orbs">
        <div className="anim-sensor-orb o1" />
        <div className="anim-sensor-orb o2" />
        <div className="anim-sensor-orb o3" />
      </div>

      {/* Movable Layer 3: Particle nodes */}
      <div className="anim-move-layer-3 anim-sensor-nodes">
        <span className="anim-sensor-node sn1" />
        <span className="anim-sensor-node sn2" />
        <span className="anim-sensor-node sn3" />
        <span className="anim-sensor-node sn4" />
        <span className="anim-sensor-node sn5" />
      </div>
    </MovableContainer>
  );
}

// ============================================================
// 13. PLC: Pure 3D — Processor Cube + Circuit Rings + Pulses
// ============================================================
export function PLCHeroAnimation() {
  return (
    <MovableContainer className="anim-plc-view">
      {/* Background circuit trace pattern */}
      <div className="anim-plc-circuit-bg" />

      {/* Traveling data pulses */}
      <div className="anim-plc-pulse-line pl1" />
      <div className="anim-plc-pulse-line pl2" />
      <div className="anim-plc-pulse-line pl3" />

      {/* Movable Layer 1: 3D rotating processor cube */}
      <div className="anim-move-layer-1 anim-plc-cube-wrap">
        <div className="anim-plc-scene">
          <div className="anim-plc-cube">
            <div className="anim-plc-cube-face face-front" />
            <div className="anim-plc-cube-face face-back" />
            <div className="anim-plc-cube-face face-left" />
            <div className="anim-plc-cube-face face-right" />
            <div className="anim-plc-cube-face face-top" />
            <div className="anim-plc-cube-face face-bottom" />
          </div>
        </div>
        {/* Orbiting rings around cube */}
        <div className="anim-plc-orbit-ring or1" />
        <div className="anim-plc-orbit-ring or2" />
        {/* I/O dot grid — purely visual */}
        <div className="anim-plc-io-grid">
          <span className="anim-plc-io-dot on" />
          <span className="anim-plc-io-dot on" />
          <span className="anim-plc-io-dot off" />
          <span className="anim-plc-io-dot on" />
          <span className="anim-plc-io-dot pulsing" />
          <span className="anim-plc-io-dot off" />
          <span className="anim-plc-io-dot on" />
          <span className="anim-plc-io-dot pulsing" />
          <span className="anim-plc-io-dot off" />
        </div>
      </div>

      {/* Movable Layer 2: Floating geometry shapes */}
      <div className="anim-move-layer-2 anim-plc-shapes">
        <div className="anim-plc-diamond d1" />
        <div className="anim-plc-diamond d2" />
        <div className="anim-plc-diamond d3" />
      </div>

      {/* Movable Layer 3: Glowing node particles */}
      <div className="anim-move-layer-3 anim-plc-particles">
        <span className="anim-plc-particle pp1" />
        <span className="anim-plc-particle pp2" />
        <span className="anim-plc-particle pp3" />
        <span className="anim-plc-particle pp4" />
      </div>
    </MovableContainer>
  );
}

