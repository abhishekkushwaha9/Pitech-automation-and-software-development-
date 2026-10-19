import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Ultra-Premium Interactive Three.js Hero Scene for Our Expertise:
 * - Holographic Polyhedral Tech Core with Glowing Vertex Nodes
 * - Inner Counter-Rotating Amber Geodesic Nucleus
 * - Multi-Axis Gyroscopic Rings with Orbiting Telemetry Satellites & Data Packets
 * - Dual-Wave Glowing Constellation Field with Sine Undulation
 * - Smooth Physics-Damped Mouse Parallax & Scroll Parallax
 */
export default function ThreeHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || 650;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Master Group for 3D Hologram
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ── 1. PRIMARY TECH DODECAHEDRON / ICOSAHEDRON CORE ──
    const coreGeo = new THREE.IcosahedronGeometry(3.0, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7, // Vivid sky blue
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(core);

    // Core Vertex Beacon Nodes (Glowing Spheres at each vertex of the core)
    const vertexPositions = coreGeo.attributes.position.array;
    const vertexCount = vertexPositions.length / 3;
    const nodeGeo = new THREE.SphereGeometry(0.065, 8, 8);
    const nodeMatCyan = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const nodeMatAmber = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const nodesGroup = new THREE.Group();
    masterGroup.add(nodesGroup);

    const nodeMeshes = [];
    for (let i = 0; i < vertexCount; i += 3) {
      const isAmber = (i / 3) % 4 === 0;
      const node = new THREE.Mesh(nodeGeo, isAmber ? nodeMatAmber : nodeMatCyan);
      node.position.set(
        vertexPositions[i * 3],
        vertexPositions[i * 3 + 1],
        vertexPositions[i * 3 + 2]
      );
      nodesGroup.add(node);
      nodeMeshes.push(node);
    }

    // ── 2. INNER ROTATING GEODESIC NUCLEUS (Amber Tech Engine) ──
    const innerGeo = new THREE.OctahedronGeometry(1.8, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xd97706, // Rich amber
      wireframe: true,
      transparent: true,
      opacity: 0.48,
    });
    const innerNucleus = new THREE.Mesh(innerGeo, innerMat);
    masterGroup.add(innerNucleus);

    // ── 3. GYROSCOPIC MULTI-AXIS ORBITAL RINGS ──
    const ringGroup = new THREE.Group();
    masterGroup.add(ringGroup);

    // Ring 1 - Cyan Wide Orbit
    const ring1Geo = new THREE.TorusGeometry(5.0, 0.022, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.55,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.6;
    ringGroup.add(ring1);

    // Ring 2 - Amber Diagonal Orbit
    const ring2Geo = new THREE.TorusGeometry(6.2, 0.018, 16, 140);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3.0;
    ring2.rotation.y = Math.PI / 3.8;
    ringGroup.add(ring2);

    // Ring 3 - Outer Cobalt Blue Thin Orbit
    const ring3Geo = new THREE.TorusGeometry(7.2, 0.014, 16, 160);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.38,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 3.2;
    ring3.rotation.x = Math.PI / 5;
    ringGroup.add(ring3);

    // ── 4. ORBITING DATA NODES / SATELLITE BEACONS ──
    const beaconCount = 6;
    const beacons = [];
    const beaconGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const bMatTeal = new THREE.MeshBasicMaterial({ color: 0x0ea5e9 });
    const bMatAmber = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const bMatBlue = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });

    const ringRadii = [5.0, 6.2, 7.2];
    const ringMats = [bMatTeal, bMatAmber, bMatBlue];

    for (let i = 0; i < beaconCount; i++) {
      const rIdx = i % 3;
      const bMesh = new THREE.Mesh(beaconGeo, ringMats[rIdx]);
      ringGroup.add(bMesh);
      beacons.push({
        mesh: bMesh,
        radius: ringRadii[rIdx],
        speed: 0.5 + (i * 0.18),
        offset: (i * Math.PI) / 3,
        inclination: (i * Math.PI) / 4,
        ringIdx: rIdx,
      });
    }

    // ── 5. FLOATING MICRO DATA CUBES ──
    const cubeCount = 18;
    const cubes = [];
    const cubeGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const cubeMatCyan = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.45 });
    const cubeMatAmber = new THREE.MeshBasicMaterial({ color: 0xfbbf24, wireframe: true, transparent: true, opacity: 0.45 });

    for (let i = 0; i < cubeCount; i++) {
      const cMesh = new THREE.Mesh(cubeGeo, i % 2 === 0 ? cubeMatCyan : cubeMatAmber);
      const angle = Math.random() * Math.PI * 2;
      const dist = 3.5 + Math.random() * 6.5;
      const height = (Math.random() - 0.5) * 6;
      cMesh.position.set(Math.cos(angle) * dist, height, Math.sin(angle) * dist);
      masterGroup.add(cMesh);
      cubes.push({
        mesh: cMesh,
        rotSpeedX: (Math.random() - 0.5) * 0.04,
        rotSpeedY: (Math.random() - 0.5) * 0.04,
        floatSpeed: 0.8 + Math.random() * 0.8,
        floatOffset: Math.random() * Math.PI * 2,
        baseY: height,
      });
    }

    // ── 6. DYNAMIC PARTICLE CONSTELLATION WAVE (1100 Particles) ──
    const particleCount = 1100;
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const baseAngles = new Float32Array(particleCount);
    const baseRadii = new Float32Array(particleCount);
    const baseHeights = new Float32Array(particleCount);

    const cTeal = new THREE.Color(0x0284c7);
    const cAmber = new THREE.Color(0xf59e0b);
    const cBlue = new THREE.Color(0x2563eb);
    const cCyan = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.0 + Math.random() * 16;
      const height = (Math.random() - 0.5) * 14;

      baseAngles[i] = angle;
      baseRadii[i] = radius;
      baseHeights[i] = height;

      pPositions[i * 3] = Math.cos(angle) * radius;
      pPositions[i * 3 + 1] = height;
      pPositions[i * 3 + 2] = Math.sin(angle) * radius;

      const pick = Math.random();
      const col = pick < 0.22 ? cAmber : pick < 0.55 ? cCyan : pick < 0.82 ? cTeal : cBlue;
      pColors[i * 3] = col.r;
      pColors[i * 3 + 1] = col.g;
      pColors[i * 3 + 2] = col.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ── MOUSE & SCROLL TRACKING WITH DAMPING ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // ── ANIMATION LOOP ──
    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Damped smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. Rotate Core & Nodes
      core.rotation.x = elapsed * 0.16;
      core.rotation.y = elapsed * 0.20;
      nodesGroup.rotation.x = elapsed * 0.16;
      nodesGroup.rotation.y = elapsed * 0.20;

      // Pulse vertex nodes slightly
      const pulse = 1 + Math.sin(elapsed * 3) * 0.2;
      nodeMeshes.forEach((n) => n.scale.set(pulse, pulse, pulse));

      // 2. Counter-Rotate Nucleus
      innerNucleus.rotation.x = -elapsed * 0.22;
      innerNucleus.rotation.y = -elapsed * 0.28;
      innerNucleus.rotation.z = Math.sin(elapsed * 0.5) * 0.3;

      // 3. Gyroscopic Ring Rotation
      ring1.rotation.z = elapsed * 0.22;
      ring2.rotation.z = -elapsed * 0.18;
      ring3.rotation.y = elapsed * 0.14;

      // 4. Update Orbiting Satellite Beacons
      beacons.forEach((b) => {
        const theta = elapsed * b.speed + b.offset;
        if (b.ringIdx === 0) {
          b.mesh.position.x = Math.cos(theta) * b.radius;
          b.mesh.position.y = Math.sin(theta) * (b.radius * 0.42);
          b.mesh.position.z = Math.sin(theta) * (b.radius * 0.88);
        } else if (b.ringIdx === 1) {
          b.mesh.position.x = Math.cos(theta) * (b.radius * 0.8);
          b.mesh.position.y = Math.sin(theta) * (b.radius * 0.7);
          b.mesh.position.z = Math.sin(theta) * (b.radius * 0.5);
        } else {
          b.mesh.position.x = Math.sin(theta) * (b.radius * 0.75);
          b.mesh.position.y = Math.cos(theta) * (b.radius * 0.9);
          b.mesh.position.z = Math.sin(theta) * (b.radius * 0.6);
        }
      });

      // 5. Animate Floating Micro Cubes
      cubes.forEach((c) => {
        c.mesh.rotation.x += c.rotSpeedX;
        c.mesh.rotation.y += c.rotSpeedY;
        c.mesh.position.y = c.baseY + Math.sin(elapsed * c.floatSpeed + c.floatOffset) * 0.4;
      });

      // 6. Fluid Wave Motion on Particle Constellation
      const positionsArr = pGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const ang = baseAngles[i] + elapsed * 0.07;
        const rad = baseRadii[i];
        positionsArr[i * 3] = Math.cos(ang) * rad;
        positionsArr[i * 3 + 1] = baseHeights[i] + Math.sin(elapsed * 1.1 + rad * 0.8) * 0.5;
        positionsArr[i * 3 + 2] = Math.sin(ang) * rad;
      }
      pGeo.attributes.position.needsUpdate = true;

      // 7. Dynamic Parallax on Master Group & Camera
      masterGroup.rotation.y = mouse.x * 0.32;
      masterGroup.rotation.x = -mouse.y * 0.22;
      masterGroup.position.y = -scrollY * 0.0035;

      camera.position.x = mouse.x * 1.6;
      camera.position.y = -mouse.y * 1.1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      nodeGeo.dispose();
      nodeMatCyan.dispose();
      nodeMatAmber.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      beaconGeo.dispose();
      bMatTeal.dispose();
      bMatAmber.dispose();
      bMatBlue.dispose();
      cubeGeo.dispose();
      cubeMatCyan.dispose();
      cubeMatAmber.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();

      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
}
