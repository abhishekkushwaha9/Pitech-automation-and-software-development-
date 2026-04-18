import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Light-theme Three.js hero scene:
 * - Wireframe icosahedron core (deep teal)
 * - Two orbiting rings (teal + amber)
 * - Particle field with darker tones for visibility on white
 * - Subtle mouse parallax
 */
export default function ThreeHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf1f5f9, 0.045);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const coreGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0e7490,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    const glowGeo = new THREE.IcosahedronGeometry(2.0, 0);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x155e75,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    const ringGeo = new THREE.TorusGeometry(4.2, 0.018, 8, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xb45309,
      transparent: true,
      opacity: 0.7,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.4;
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(5.2, 0.01, 8, 140),
      new THREE.MeshBasicMaterial({
        color: 0x0e7490,
        transparent: true,
        opacity: 0.55,
      })
    );
    ring2.rotation.x = Math.PI / 1.6;
    ring2.rotation.y = Math.PI / 5;
    scene.add(ring2);

    const particleCount = 1400;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const teal = new THREE.Color(0x0e7490);
    const amber = new THREE.Color(0xb45309);
    const slate = new THREE.Color(0x334155);

    for (let i = 0; i < particleCount; i++) {
      const r = 6 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      positions[i * 3 + 2] = r * Math.cos(phi);

      const pick = Math.random();
      const c = pick < 0.15 ? amber : pick < 0.55 ? teal : slate;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    const target = { x: 0, y: 0 };
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };
    window.addEventListener("mousemove", onMove);

    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      core.rotation.x = t * 0.15;
      core.rotation.y = t * 0.2;
      glow.rotation.x = -t * 0.1;
      glow.rotation.y = -t * 0.12;
      ring.rotation.z = t * 0.25;
      ring2.rotation.z = -t * 0.18;
      points.rotation.y = t * 0.04;

      camera.position.x += (target.x * 1.5 - camera.position.x) * 0.04;
      camera.position.y += (-target.y * 1.5 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}
