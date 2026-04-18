import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Light-theme floating geometric shapes:
 * - Wireframe polyhedrons (octahedron, tetrahedron, icosahedron)
 * - Floating and rotating with mouse parallax
 * - Soft teal/amber colors for light background
 */
export default function ThreeFloatingShapes() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.02);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Colors
    const TEAL = 0x0d9488;
    const AMBER = 0xd97706;
    const SLATE = 0x64748b;
    const CYAN = 0x06b6d4;

    const shapes = [];
    const velocities = [];

    // Create floating shapes
    const geometries = [
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.IcosahedronGeometry(0.6, 0),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.TetrahedronGeometry(0.4, 0),
      new THREE.IcosahedronGeometry(0.9, 0),
      new THREE.OctahedronGeometry(0.6, 0),
      new THREE.TetrahedronGeometry(0.5, 0),
    ];

    const colors = [TEAL, AMBER, SLATE, CYAN, TEAL, AMBER, SLATE, CYAN];

    for (let i = 0; i < 12; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        wireframe: true,
        transparent: true,
        opacity: 0.25 + Math.random() * 0.15,
      });
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.5 + Math.random() * 1.5;
      mesh.scale.setScalar(scale);

      scene.add(mesh);
      shapes.push(mesh);
      velocities.push({
        rotX: (Math.random() - 0.5) * 0.008,
        rotY: (Math.random() - 0.5) * 0.008,
        rotZ: (Math.random() - 0.5) * 0.005,
        floatSpeed: 0.3 + Math.random() * 0.5,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // Particle field
    const PARTICLE_COUNT = 600;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(PARTICLE_COUNT * 3);
    const pColors = new Float32Array(PARTICLE_COUNT * 3);

    const tealC = new THREE.Color(TEAL);
    const amberC = new THREE.Color(AMBER);
    const slateC = new THREE.Color(SLATE);
    const palette = [tealC, amberC, slateC];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 50;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
      const c = palette[Math.floor(Math.random() * palette.length)];
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;
    }

    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Mouse tracking
    let mx = 0, my = 0;
    const handleMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    // Animation
    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      shapes.forEach((mesh, i) => {
        const v = velocities[i];
        mesh.rotation.x += v.rotX;
        mesh.rotation.y += v.rotY;
        mesh.rotation.z += v.rotZ;
        mesh.position.y += Math.sin(t * v.floatSpeed + v.floatOffset) * 0.003;
      });

      particles.rotation.y = t * 0.015;
      particles.rotation.x = Math.sin(t * 0.01) * 0.05;

      camera.position.x += (mx * 1.5 - camera.position.x) * 0.02;
      camera.position.y += (-my * 1 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
