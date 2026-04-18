import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Clean corporate wavy grid system using Three.js Points.
 * Forms a subtle undulating surface that shifts with mouse position.
 */
export default function ThreeFlowMesh() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 5, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 0);
    mount.appendChild(renderer.domElement);

    // Grid Parameters
    const SEPARATION = 1.4;
    const AMOUNTX = 45;
    const AMOUNTY = 45;
    const count = AMOUNTX * AMOUNTY;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Color definitions
    const cPrimary = new THREE.Color("#0d9488"); // Teal
    const cSecondary = new THREE.Color("#64748b"); // Slate

    let index = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[index * 3] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
        positions[index * 3 + 1] = 0; // y
        positions[index * 3 + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z

        // Interpolate colors based on X axis position
        const mixRatio = ix / AMOUNTX;
        colors[index * 3] = cPrimary.r * mixRatio + cSecondary.r * (1 - mixRatio);
        colors[index * 3 + 1] = cPrimary.g * mixRatio + cSecondary.g * (1 - mixRatio);
        colors[index * 3 + 2] = cPrimary.b * mixRatio + cSecondary.b * (1 - mixRatio);

        index++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.28,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    let mouseX = 0;
    let mouseY = 0;

    const onPointerMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onPointerMove);

    let frameId;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.012;

      const positionAttr = particles.geometry.attributes.position;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          // Complex sine wave interaction
          const wave1 = Math.sin(ix * 0.15 + time) * 1.5;
          const wave2 = Math.cos(iy * 0.18 + time) * 1.2;
          const wave3 = Math.sin((ix + iy) * 0.1 + time * 0.5) * 0.8;

          positionAttr.array[i * 3 + 1] = wave1 + wave2 + wave3;
          i++;
        }
      }

      positionAttr.needsUpdate = true;

      // Gentle follow camera
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 2 + 6 - camera.position.y) * 0.03;
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      renderer.render(scene, camera);
    };
    animate();

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
      window.removeEventListener("mousemove", onPointerMove);
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
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
      style={{
        maskImage: "radial-gradient(circle at center, black 50%, transparent 95%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 95%)",
      }}
    />
  );
}
