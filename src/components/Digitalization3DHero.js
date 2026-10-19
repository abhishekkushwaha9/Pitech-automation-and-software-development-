import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./Digitalization3DHero.css";

export default function Digitalization3DHero() {
  const mountRef = useRef(null);
  const containerRef = useRef(null);
  const hudRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene & Perspective Camera Setup
    const scene = new THREE.Scene();
    const width = mount.clientWidth || 580;
    const height = mount.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 16, 54);
    camera.lookAt(0, 3.6, 0);

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // Master interactive 3D group
    const masterGroup = new THREE.Group();
    masterGroup.position.set(0, -1.8, 0);
    scene.add(masterGroup);

    // Disposables tracking for clean unmount
    const disposables = [];

    // Helper to generate soft round circular glow texture
    const createSoftCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.25, "rgba(56, 189, 248, 0.95)");
      grad.addColorStop(0.55, "rgba(14, 165, 233, 0.4)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const texture = new THREE.CanvasTexture(canvas);
      disposables.push(texture);
      return texture;
    };

    const circleTexture = createSoftCircleTexture();

    // ==========================================
    // 3. SEMI-CIRCLE EARTH DOME (HEMISPHERE)
    // ==========================================
    const domeRadius = 11.6;

    // True 3D Hemisphere (thetaLength = Math.PI * 0.52 creates clean dome)
    const domeGeo = new THREE.SphereGeometry(
      domeRadius,
      36,
      20,
      0,
      Math.PI * 2,
      0,
      Math.PI * 0.52
    );
    disposables.push(domeGeo);

    // Translucent holographic inner dome shell
    const domeMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    disposables.push(domeMat);
    const domeMesh = new THREE.Mesh(domeGeo, domeMat);
    masterGroup.add(domeMesh);

    // High-tech Cyan Wireframe Grid Lines
    const wireGeo = new THREE.WireframeGeometry(domeGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
    });
    disposables.push(wireGeo, wireMat);
    const domeWireframe = new THREE.LineSegments(wireGeo, wireMat);
    masterGroup.add(domeWireframe);

    // Outer subtle atmospheric glow
    const glowGeo = new THREE.SphereGeometry(
      domeRadius * 1.035,
      32,
      16,
      0,
      Math.PI * 2,
      0,
      Math.PI * 0.52
    );
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    disposables.push(glowGeo, glowMat);
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    masterGroup.add(glowMesh);

    // ==========================================
    // 4. HOLOGRAPHIC BASE PLATFORM
    // ==========================================
    const baseGroup = new THREE.Group();
    baseGroup.position.set(0, 0.05, 0);
    baseGroup.rotation.x = -Math.PI / 2;
    masterGroup.add(baseGroup);

    // Primary Neon Base Rim
    const outerRimGeo = new THREE.RingGeometry(domeRadius * 0.985, domeRadius * 1.015, 64);
    const outerRimMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    disposables.push(outerRimGeo, outerRimMat);
    const outerRim = new THREE.Mesh(outerRimGeo, outerRimMat);
    baseGroup.add(outerRim);

    // Ambient Floor Aura
    const outerAuraGeo = new THREE.RingGeometry(domeRadius * 0.94, domeRadius * 1.06, 64);
    const outerAuraMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    disposables.push(outerAuraGeo, outerAuraMat);
    const outerAura = new THREE.Mesh(outerAuraGeo, outerAuraMat);
    baseGroup.add(outerAura);

    // Inner Mechanical Ring
    const innerRingGeo = new THREE.RingGeometry(domeRadius * 0.72, domeRadius * 0.735, 48);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    disposables.push(innerRingGeo, innerRingMat);
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    baseGroup.add(innerRing);

    // Center Core Emitter
    const coreDiscGeo = new THREE.CircleGeometry(domeRadius * 0.35, 32);
    const coreDiscMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
    });
    disposables.push(coreDiscGeo, coreDiscMat);
    const coreDisc = new THREE.Mesh(coreDiscGeo, coreDiscMat);
    baseGroup.add(coreDisc);

    // ==========================================
    // 5. CONTINENTAL CYBER PARTICLES (ROUND PHOTONS)
    // ==========================================
    const latLonToVec3 = (lat, lon, radius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = Math.max(0.2, radius * Math.cos(phi));
      return new THREE.Vector3(x, y, z);
    };

    const dustPositions = [];
    const clusterSeeds = [
      { lat: 24, lon: 30 },
      { lat: 44, lon: 85 },
      { lat: 54, lon: 140 },
      { lat: 50, lon: -150 },
      { lat: 38, lon: -85 },
      { lat: 46, lon: -25 },
      { lat: 68, lon: 0 }
    ];

    clusterSeeds.forEach((seed) => {
      for (let i = 0; i < 18; i++) {
        const offLat = seed.lat + (Math.random() - 0.5) * 14;
        const offLon = seed.lon + (Math.random() - 0.5) * 20;
        if (offLat > 3) {
          const v = latLonToVec3(offLat, offLon, domeRadius * 1.002);
          dustPositions.push(v.x, v.y, v.z);
        }
      }
    });

    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.Float32BufferAttribute(dustPositions, 3));
    disposables.push(dustGeo);
    const dustMat = new THREE.PointsMaterial({
      map: circleTexture,
      size: 1.3,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    disposables.push(dustMat);
    const dustMesh = new THREE.Points(dustGeo, dustMat);
    masterGroup.add(dustMesh);

    // ==========================================
    // 6. FACTORY DIGITALIZATION STATIONS (VIBRANT MODULES & 3D LABELS)
    // ==========================================
    const digitalizationStations = [
      {
        id: 0,
        lat: 18,
        lon: 35,
        title: "SHOP-FLOOR SENSORS & PLC",
        short: "SENSORS & PLC",
        color: "#10b981",
        colorHex: 0x10b981,
        connectingMsg: "Establishing 100 Hz Machine Sensor Link...",
        connectedMsg: "Live Sensor Stream Connected (100 Hz OPC-UA)",
      },
      {
        id: 1,
        lat: 38,
        lon: 85,
        title: "PAPERLESS PRODUCTION",
        short: "PAPERLESS OPS",
        color: "#06b6d4",
        colorHex: 0x06b6d4,
        connectingMsg: "Digitizing SOPs & Operator Checklists...",
        connectedMsg: "Paperless Work Orders Synced to Line",
      },
      {
        id: 2,
        lat: 52,
        lon: 145,
        title: "REAL-TIME OEE ENGINE",
        short: "REAL-TIME OEE",
        color: "#38bdf8",
        colorHex: 0x38bdf8,
        connectingMsg: "Linking Availability & Speed Telemetry...",
        connectedMsg: "OEE Engine Online • Efficiency: 94.2%",
      },
      {
        id: 3,
        lat: 54,
        lon: -155,
        title: "QUALITY INSPECTION AI",
        short: "QUALITY AI",
        color: "#818cf8",
        colorHex: 0x818cf8,
        connectingMsg: "Syncing In-Line Optical Vision Defect Check...",
        connectedMsg: "Zero-Defect AI Inspection Active (0.02% PPM)",
      },
      {
        id: 4,
        lat: 36,
        lon: -90,
        title: "BATCH TRACEABILITY",
        short: "TRACEABILITY",
        color: "#c084fc",
        colorHex: 0xc084fc,
        connectingMsg: "Binding Component Serial Numbers & Genealogy...",
        connectedMsg: "100% Batch Genealogy Logged to Database",
      },
      {
        id: 5,
        lat: 44,
        lon: -30,
        title: "CLOUD DATA ANALYTICS",
        short: "CLOUD KPI",
        color: "#3b82f6",
        colorHex: 0x3b82f6,
        connectingMsg: "Streaming Factory Data to Central Dashboard...",
        connectedMsg: "Plant-wide Executive Dashboard Live",
      },
      {
        id: 6,
        lat: 20,
        lon: -15,
        title: "ALERT MANAGEMENT MATRIX",
        short: "ALERT MATRIX",
        color: "#f59e0b",
        colorHex: 0xf59e0b,
        connectingMsg: "Arming Automated Multi-Tier SMS Escalation...",
        connectedMsg: "Instant Alert Escalation Protocol Active",
      },
      {
        id: 7,
        lat: 72,
        lon: 0,
        title: "DIGITAL TWIN REPLICA",
        short: "DIGITAL TWIN",
        color: "#34d399",
        colorHex: 0x34d399,
        connectingMsg: "Syncing Virtual Model to Physical Line...",
        connectedMsg: "Full 3D Digital Twin Synchronized Closed-Loop",
      },
    ];

    const stationPositions = digitalizationStations.map((s) =>
      latLonToVec3(s.lat, s.lon, domeRadius)
    );

    // Text Billboard Generator for High-Tech Vibrant 3D Labels
    const makeTextSprite = (label, colorHexStr) => {
      const canvas = document.createElement("canvas");
      canvas.width = 300;
      canvas.height = 70;
      const ctx = canvas.getContext("2d");

      // Semi-transparent dark glass capsule pill
      ctx.fillStyle = "rgba(10, 18, 36, 0.90)";
      ctx.strokeStyle = colorHexStr;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(6, 6, 288, 58, 29);
      ctx.fill();
      ctx.stroke();

      // Glowing dot
      ctx.fillStyle = colorHexStr;
      ctx.shadowColor = colorHexStr;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(32, 35, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Crisp text
      ctx.font = "bold 21px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(label, 48, 42);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      disposables.push(texture);

      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
      });
      disposables.push(spriteMat);

      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(4.3, 1.0, 1);
      return sprite;
    };

    // Render Stations on Dome with Individual Colors & 3D Labels
    const stationTerminals = [];
    stationPositions.forEach((pos, idx) => {
      const stData = digitalizationStations[idx];
      const termGroup = new THREE.Group();
      termGroup.position.copy(pos);

      const normal = pos.clone().normalize();

      // Station Core Luminous Bead
      const coreGeo = new THREE.SphereGeometry(0.52, 16, 16);
      const coreMat = new THREE.MeshBasicMaterial({
        color: stData.colorHex,
      });
      disposables.push(coreGeo, coreMat);
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      termGroup.add(coreMesh);

      // Outer Soft Colored Halo
      const haloGeo = new THREE.SphereGeometry(0.85, 12, 12);
      const haloMat = new THREE.MeshBasicMaterial({
        color: stData.colorHex,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });
      disposables.push(haloGeo, haloMat);
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      termGroup.add(haloMesh);

      // Station Antenna Pin
      const pinGeo = new THREE.CylinderGeometry(0.05, 0.08, 1.1, 8);
      pinGeo.translate(0, 0.55, 0);
      const pinMat = new THREE.MeshBasicMaterial({
        color: stData.colorHex,
        transparent: true,
        opacity: 0.75,
      });
      disposables.push(pinGeo, pinMat);
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
      termGroup.add(pinMesh);

      // Radar Ripple Wave Ring in Station's Color
      const rippleGeo = new THREE.RingGeometry(0.35, 0.65, 24);
      const rippleMat = new THREE.MeshBasicMaterial({
        color: stData.colorHex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });
      disposables.push(rippleGeo, rippleMat);
      const rippleMesh = new THREE.Mesh(rippleGeo, rippleMat);
      rippleMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
      termGroup.add(rippleMesh);

      // 3D Text Label floating just above the pin
      const sprite = makeTextSprite(stData.short, stData.color);
      const labelOffset = normal.clone().multiplyScalar(1.65);
      sprite.position.copy(labelOffset);
      termGroup.add(sprite);

      masterGroup.add(termGroup);

      stationTerminals.push({
        group: termGroup,
        ripple: rippleMesh,
        core: coreMesh,
        sprite,
        color: stData.color,
        colorHex: stData.colorHex,
        rippleScale: 1,
        rippleOpacity: 0.85,
      });
    });

    // ==========================================
    // 7. DYNAMIC PROGRESSIVE CONNECTION BUILDING ARCS
    // (A visible beam physically draws itself from Point A to Point B, locks on, then proceeds)
    // ==========================================
    const totalHops = digitalizationStations.length;
    const NUM_CURVE_POINTS = 64;
    const hopCurves = [];

    for (let i = 0; i < totalHops; i++) {
      const p1 = stationPositions[i];
      const nextIdx = (i + 1) % totalHops;
      const p2 = stationPositions[nextIdx];
      const sourceData = digitalizationStations[i];
      const targetData = digitalizationStations[nextIdx];

      // Elevated arched trajectory over dome
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const dist = p1.distanceTo(p2);
      const apexRadius = domeRadius + Math.max(3.2, dist * 0.44);
      mid.normalize().multiplyScalar(apexRadius);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const curvePoints = curve.getPoints(NUM_CURVE_POINTS);

      // Static faint baseline guide line (so network structure is softly hinted)
      const baseLineGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      disposables.push(baseLineGeo);
      const baseLineMat = new THREE.LineBasicMaterial({
        color: sourceData.colorHex,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
      });
      disposables.push(baseLineMat);
      const baseLine = new THREE.Line(baseLineGeo, baseLineMat);
      masterGroup.add(baseLine);

      // Active Progressive Drawing Beam Line
      const activeLineGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      activeLineGeo.setDrawRange(0, 0); // starts hidden
      disposables.push(activeLineGeo);

      const activeLineMat = new THREE.LineBasicMaterial({
        color: targetData.colorHex,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      disposables.push(activeLineMat);
      const activeLine = new THREE.Line(activeLineGeo, activeLineMat);
      masterGroup.add(activeLine);

      // Beam Spark Head (Luminous Energy Emitter at the growing tip of the beam)
      const sparkGroup = new THREE.Group();
      masterGroup.add(sparkGroup);

      const sparkCoreGeo = new THREE.SphereGeometry(0.58, 12, 12);
      const sparkCoreMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        blending: THREE.AdditiveBlending,
      });
      disposables.push(sparkCoreGeo, sparkCoreMat);
      const sparkCore = new THREE.Mesh(sparkCoreGeo, sparkCoreMat);
      sparkGroup.add(sparkCore);

      const sparkAuraGeo = new THREE.SphereGeometry(1.2, 12, 12);
      const sparkAuraMat = new THREE.MeshBasicMaterial({
        color: targetData.colorHex,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });
      disposables.push(sparkAuraGeo, sparkAuraMat);
      const sparkAura = new THREE.Mesh(sparkAuraGeo, sparkAuraMat);
      sparkGroup.add(sparkAura);

      sparkGroup.visible = false;

      hopCurves.push({
        fromIndex: i,
        toIndex: nextIdx,
        fromShort: sourceData.short,
        toShort: targetData.short,
        fromColor: sourceData.color,
        toColor: targetData.color,
        toColorHex: targetData.colorHex,
        connectingMsg: targetData.connectingMsg,
        connectedMsg: targetData.connectedMsg,
        curve,
        curvePoints,
        activeLine,
        activeLineGeo,
        activeLineMat,
        sparkGroup,
      });
    }

    // ==========================================
    // 8. AMBIENT PARTICLES (ROUND PHOTONS)
    // ==========================================
    const ambientCount = 65;
    const ambPositions = new Float32Array(ambientCount * 3);
    for (let i = 0; i < ambientCount * 3; i += 3) {
      ambPositions[i] = (Math.random() - 0.5) * 38;
      ambPositions[i + 1] = Math.random() * 26;
      ambPositions[i + 2] = (Math.random() - 0.5) * 38;
    }
    const ambGeo = new THREE.BufferGeometry();
    ambGeo.setAttribute("position", new THREE.BufferAttribute(ambPositions, 3));
    disposables.push(ambGeo);
    const ambMat = new THREE.PointsMaterial({
      map: circleTexture,
      color: 0x7dd3fc,
      size: 1.3,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    disposables.push(ambMat);
    const ambParticles = new THREE.Points(ambGeo, ambMat);
    scene.add(ambParticles);

    // ==========================================
    // 9. INTERACTION & SCROLL CONTROLS
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseX = Math.max(-1, Math.min(1, nx));
      mouseY = Math.max(-1, Math.min(1, ny));
    };

    const handleMouseLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Dynamic scroll scaling (smoothly contracts slightly on scroll)
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY || window.pageYOffset;
      const p = Math.min(1, Math.max(0, scrollY / 450));
      const scale = 1 - p * 0.35;
      const translateY = p * 40;
      containerRef.current.style.setProperty("--hero-scroll-scale", scale.toFixed(3));
      containerRef.current.style.setProperty("--hero-scroll-y", `${translateY.toFixed(1)}px`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Window Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const newW = mount.clientWidth || 580;
      const newH = mount.clientHeight || 500;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    // ==========================================
    // 10. DELIBERATE, HIGH-PRECISION "CONNECTION ESTABLISHMENT" ENGINE
    // Smooth, relaxed duration so user clearly sees the link extending,
    // reaching the destination node, locking on, and building the factory network!
    // ==========================================
    const HOP_DURATION = 2.6; // Relaxed 2.6 seconds per hop for clear visual satisfaction!
    const TOTAL_CYCLE = totalHops * HOP_DURATION;

    let animId;
    const clock = new THREE.Clock();
    let lastActiveHop = -1;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Continuous gentle rotation around Y axis
      targetRotY += 0.0024;
      masterGroup.rotation.y = THREE.MathUtils.lerp(
        masterGroup.rotation.y,
        targetRotY + mouseX * 0.45,
        0.05
      );
      masterGroup.rotation.x = THREE.MathUtils.lerp(
        masterGroup.rotation.x,
        mouseY * -0.22,
        0.05
      );

      // Counter-rotating base rings
      innerRing.rotation.z -= 0.005;
      outerRim.rotation.z += 0.002;

      // Current Hop in Cycle
      const cycleTime = elapsed % TOTAL_CYCLE;
      const currentHop = Math.floor(cycleTime / HOP_DURATION);
      const hopProgress = (cycleTime % HOP_DURATION) / HOP_DURATION; // 0.0 to 1.0

      // Reset inactive hops and keep previously established links softly visible
      hopCurves.forEach((hop, idx) => {
        if (idx === currentHop) {
          // ACTIVE CONNECTING HOP:
          // Phase 1 (0.0 to 0.72): Beam physically grows and extends from Point A to Point B
          const EXTEND_LIMIT = 0.72;
          hop.sparkGroup.visible = true;

          if (hopProgress < EXTEND_LIMIT) {
            const extendRatio = hopProgress / EXTEND_LIMIT; // 0 to 1
            const count = Math.max(2, Math.floor(extendRatio * NUM_CURVE_POINTS));
            hop.activeLineGeo.setDrawRange(0, count);
            hop.activeLineMat.opacity = 0.95;

            // Position energy spark tip right at current extension point
            const currentTip = hop.curve.getPointAt(extendRatio);
            hop.sparkGroup.position.copy(currentTip);
            hop.sparkGroup.scale.setScalar(1.0 + Math.sin(elapsed * 12) * 0.2);

            // HUD while connecting
            if (hudRef.current && lastActiveHop !== currentHop) {
              hudRef.current.innerHTML = `CONNECTING: <span style="color:${hop.fromColor};font-weight:700;">${hop.fromShort}</span> ───► <span style="color:${hop.toColor};font-weight:700;">${hop.toShort}</span> (${hop.connectingMsg})`;
            }
          } else {
            // Phase 2 (0.72 to 1.0): Beam has reached Point B and LOCKED ON!
            hop.activeLineGeo.setDrawRange(0, NUM_CURVE_POINTS);
            hop.activeLineMat.opacity = 0.85;

            // Park spark tip at destination node
            const destPos = hop.curve.getPointAt(1.0);
            hop.sparkGroup.position.copy(destPos);

            // Trigger destination terminal ripple lock-on
            const destTerminal = stationTerminals[hop.toIndex];
            const lockProgress = (hopProgress - EXTEND_LIMIT) / (1 - EXTEND_LIMIT); // 0 to 1
            if (destTerminal) {
              destTerminal.rippleScale = 1 + lockProgress * 2.8;
              destTerminal.rippleOpacity = Math.max(0, 1 - lockProgress);
              destTerminal.ripple.scale.set(destTerminal.rippleScale, destTerminal.rippleScale, 1);
              destTerminal.ripple.material.opacity = destTerminal.rippleOpacity;
              destTerminal.sprite.scale.set(
                4.3 + Math.sin(lockProgress * Math.PI) * 0.6,
                1.0 + Math.sin(lockProgress * Math.PI) * 0.15,
                1
              );
            }

            // HUD when locked on
            if (hudRef.current) {
              hudRef.current.innerHTML = `✓ LINK ACTIVE: <span style="color:${hop.fromColor};font-weight:700;">${hop.fromShort}</span> ➔ <span style="color:${hop.toColor};font-weight:700;">${hop.toShort}</span> (${hop.connectedMsg})`;
            }
          }
        } else if (idx < currentHop || (currentHop === 0 && idx === totalHops - 1)) {
          // ALREADY CONNECTED LINK: Keep fully visible with soft steady glow
          hop.activeLineGeo.setDrawRange(0, NUM_CURVE_POINTS);
          hop.activeLineMat.opacity = 0.32;
          hop.sparkGroup.visible = false;
        } else {
          // UPCOMING LINK: Not yet established in this cycle
          hop.activeLineGeo.setDrawRange(0, 0);
          hop.sparkGroup.visible = false;
        }
      });

      lastActiveHop = currentHop;

      // Ambient particle motion
      ambParticles.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // ==========================================
    // 11. CLEANUP ON UNMOUNT
    // ==========================================
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      disposables.forEach((item) => {
        if (item && item.dispose) item.dispose();
      });
    };
  }, []);

  return (
    <div className="digit-3d-canvas-wrap" ref={containerRef}>
      {/* Three.js WebGL Mount Canvas Container */}
      <div className="digit-3d-mount" ref={mountRef} />

      {/* Factory Digitalization Connected Telemetry Badge */}
      <div className="digit-3d-telemetry-pill">
        <span className="telemetry-live-dot" />
        <span className="telemetry-text" ref={hudRef}>
          CONNECTING: <span style={{ color: "#10b981", fontWeight: 700 }}>SENSORS & PLC</span> ───► <span style={{ color: "#06b6d4", fontWeight: 700 }}>PAPERLESS OPS</span> (Establishing Link...)
        </span>
      </div>
    </div>
  );
}
