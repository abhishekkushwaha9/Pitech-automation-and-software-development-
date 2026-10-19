import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import "./Success.css";

const Success = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const mountRef = useRef(null);
  const containerRef = useRef(null);

  // THREE.JS SUBTLE & ELEGANT 3D TECH BACKGROUND
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 2. SUBTLE 3D WIREFRAME GEOMETRIES (Understated & Elegant)
    const geometriesGroup = new THREE.Group();
    scene.add(geometriesGroup);

    // Primary Floating Tech Icosahedron (Top Right Corner)
    const icosaGeo = new THREE.IcosahedronGeometry(3.5, 1);
    const wireMat1 = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.16
    });
    const icosahedron = new THREE.Mesh(icosaGeo, wireMat1);
    icosahedron.position.set(14, 5, -8);
    geometriesGroup.add(icosahedron);

    // Secondary Floating Octahedron Crystal (Bottom Left Corner)
    const octaGeo = new THREE.OctahedronGeometry(2.8, 0);
    const wireMat2 = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.14
    });
    const octahedron = new THREE.Mesh(octaGeo, wireMat2);
    octahedron.position.set(-14, -8, -6);
    geometriesGroup.add(octahedron);

    // Delicate Concentric Tech Ring
    const ringGeo = new THREE.RingGeometry(2.2, 2.3, 36);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(13, -12, -7);
    ring.rotation.x = Math.PI / 3;
    geometriesGroup.add(ring);

    // 3. SUBTLE GLOWING 3D PARTICLE WAVE MATRIX (750 Particles)
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleBaseY = new Float32Array(particleCount);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x2563eb);
    const c2 = new THREE.Color(0x0ea5e9);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 70;
      const y = (Math.random() - 0.5) * 55;
      const z = (Math.random() - 0.5) * 45;

      particlePos[i * 3] = x;
      particlePos[i * 3 + 1] = y;
      particlePos[i * 3 + 2] = z;
      particleBaseY[i] = y;

      const mix = Math.random();
      const col = c1.clone().lerp(c2, mix);
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    camera.position.z = 24;

    // 4. MOUSE & SCROLL STATE
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let targetScrollY = 0;
    let currentScrollY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY || window.pageYOffset;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 5. ANIMATION LOOP WITH SUBTLE DYNAMICS
    let clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      currentScrollY += (targetScrollY - currentScrollY) * 0.06;

      const scrollFactor = currentScrollY * 0.008;

      // Gentle Constant Rotation
      icosahedron.rotation.x = elapsedTime * 0.12;
      icosahedron.rotation.y = elapsedTime * 0.16;

      octahedron.rotation.z = elapsedTime * 0.14;
      octahedron.rotation.y = elapsedTime * -0.12;

      ring.rotation.z = elapsedTime * 0.2;

      // Subtle Harmonic Floating & Scroll Reaction
      icosahedron.position.y = 5 + Math.sin(elapsedTime * 0.9) * 0.4 - scrollFactor * 1.8;
      icosahedron.position.x = 14 + Math.cos(elapsedTime * 0.7) * 0.4 - mouseX * 1.5;

      octahedron.position.y = -8 + Math.cos(elapsedTime * 0.8) * 0.4 + scrollFactor * 1.5;
      octahedron.position.x = -14 + Math.sin(elapsedTime * 0.6) * 0.3 + mouseX * 1.5;

      // Gentle Wave Particle Dynamics
      const posArray = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const px = posArray[idx];
        const pz = posArray[idx + 2];
        posArray[idx + 1] = particleBaseY[i] + Math.sin(elapsedTime * 0.9 + px * 0.1 + pz * 0.1) * 0.9;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y = elapsedTime * 0.01;
      particles.position.y = -scrollFactor * 0.8;

      // Subtle Camera Tilt
      camera.position.x = mouseX * 2;
      camera.position.y = -mouseY * 1.5 - (currentScrollY * 0.005);
      camera.lookAt(0, -currentScrollY * 0.004, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      icosaGeo.dispose();
      wireMat1.dispose();
      octaGeo.dispose();
      wireMat2.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  // SCROLL REVEAL & INSTANT SCROLL RESET
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".story-card-v2").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const stories = [
    {
      id: 1,
      company: "Pranav Vikas",
      title: "Smart Pallet Assembly System",
      logo: "/images/pranav vikas.png",
      image: "/images/Assembly line dashboard.png",
      problem: "Inefficient manual tracking of assembly lines and lack of real-time productivity data led to delayed decision-making.",
      solution: "Implemented a comprehensive IIoT system including Digital Work Instructions (DWI), ANDON dashboards, and real-time productivity monitoring.",
      results: "Achieved 100% traceability and a 20% increase in overall assembly line efficiency.",
      tech: ["Digital DWI", "ANDON Dashboard", "Productivity Monitoring", "Traceability"],
      stats: { label: "Efficiency", value: "+20%" }
    },
    {
      id: 2,
      company: "Spiro Africa",
      title: "EV Plant Traceability & Monitoring",
      logo: "/images/spiro.jpeg",
      image: "/images/development.jpeg",
      problem: "Lack of end-to-end component traceability and high energy consumption without a monitoring system.",
      solution: "Deployed a full-plant traceability system integrated with Robo Vision for quality inspection and energy monitoring dashboards.",
      results: "Reduced energy costs by 15% and achieved zero-defect leakage through automated vision inspection.",
      tech: ["Plant Traceability", "Robo Vision", "Energy Monitoring", "Live Dashboards"],
      stats: { label: "Energy Savings", value: "15%" }
    },
    {
      id: 3,
      company: "Saint Gobain",
      title: "Robot Access Control System",
      logo: "/images/saint goobin.png",
      image: "/images/saint gobin project .png",
      problem: "Unauthorized personnel entering robotic cells posed significant safety risks and potential machine damage.",
      solution: "Installed a Biometric-based biometric access control system integrated with the robot safety PLC circuit.",
      results: "Eliminated unauthorized access incidents and enhanced workplace safety compliance to 100%.",
      tech: ["Biometric Access", "Safety Integration", "PLC Interlocking"],
      stats: { label: "Safety Incidents", value: "0" }
    },
    {
      id: 5,
      company: "Honda Logistics",
      title: "Dock Yard Truck Monitoring",
      logo: "/images/honda.png",
      image: "/images/honda project.png",
      problem: "Severe traffic mismanagement and long turnaround times for trucks at the dock yard.",
      solution: "Implemented an IIoT tracking system with real-time slot management and automated gate control.",
      results: "Reduced truck turnaround time by 40% and streamlined yard logistics operations.",
      tech: ["IIoT Tracking", "Slot Management", "Automated Gate Control"],
      stats: { label: "Turnaround", value: "-40%" }
    },
    {
      id: 6,
      company: "Sebros",
      title: "Die Casting Monitoring System",
      logo: "/images/sebros.jpg",
      image: "/images/sebros project .png",
      problem: "Manual tracking of die casting cycles led to data inaccuracies and zero visibility into machine downtime.",
      solution: "Automated data collection from die casting machines with real-time OEE dashboards and downtime analytics.",
      results: "Improved OEE by 18% through data-driven downtime reduction and process optimization.",
      tech: ["Real-time Dashboards", "Automation", "Downtime Analytics"],
      stats: { label: "OEE Increase", value: "18%" }
    },
    {
      id: 8,
      company: "CMR Green Technologies",
      title: "Supply Chain IIoT - Molten Metal Transfer",
      logo: "/images/CMR_logo.png",
      image: "/images/cmr.jpeg",
      problem: "Frequent mismanagement and safety hazards during molten metal transfer across the supply chain led to material waste and significant risk.",
      solution: "Integrated smart sensors and RFID tracking with a centralized cloud system for real-time transfer monitoring and automated safety alerts.",
      results: "Improved transfer accuracy by 30% and significantly reduced material waste and safety hazards.",
      tech: ["Smart Sensors", "RFID", "Cloud System", "IIoT Tracking"],
      stats: { label: "Accuracy", value: "+30%" }
    },
    {
      id: 9,
      company: "Sun N Shade",
      title: "Color Detection System (Industrial Vision Inspection)",
      logo: "/images/sun n shade.jpg",
      image: "/images/ROOOObotic inspection.webp",
      problem: "Manual visual inspection of multi-colored parts was prone to human error, color variance mismatches, and delayed quality control on high-speed lines.",
      solution: "Deployed high-speed industrial RGB color detection and vision sensors with automated OK/NG sorting and PLC interlocking.",
      results: "Eliminated color mismatch defects by 99.8% and accelerated inspection cycle time by 45%.",
      tech: ["Color Detection", "Vision Sensors", "Automated OK/NG Sorting", "PLC Interlocking"],
      stats: { label: "Defect Reduction", value: "99.8%" }
    },
    {
      id: 10,
      company: "Tokai Rika",
      title: "BLE Tag (Bluetooth Low Energy Tag) Asset Tracking",
      logo: "/trmn.png",
      image: "/images/ble.png",
      problem: "Lack of real-time visibility for high-value inventory, trolleys, and WIP materials across multi-building manufacturing plants.",
      solution: "Implemented active BLE (Bluetooth Low Energy) beacon tags with long-range gateways for continuous indoor positioning and zone tracking.",
      results: "Cut asset search time by 60% and achieved 100% real-time inventory visibility.",
      tech: ["BLE (Bluetooth Low Energy)", "Indoor Positioning", "Asset Tracking", "IoT Gateway"],
      stats: { label: "Search Time", value: "-60%" }
    },
    {
      id: 11,
      company: "Bharat Seats Limited",
      title: "RFID (Radio Frequency Identification) Traceability",
      logo: "/images/bharat seats limited.png",
      image: "/images/RFID-Devices1.jpg",
      problem: "Barcode labels were frequently getting damaged in harsh shop-floor environments, leading to lost part history and inaccurate batch tracking.",
      solution: "Installed rugged industrial RFID (Radio Frequency Identification) tags, readers, and automated antenna checkpoints integrated with MES.",
      results: "Attained 100% error-free part identification and reduced traceability logging time by 50%.",
      tech: ["RFID (Radio Frequency Identification)", "MES Integration", "Automated Verification", "Industrial Readers"],
      stats: { label: "Traceability", value: "100%" }
    }
  ];


  return (
    <div className="success-page" ref={containerRef}>
      {/* 3D BACKGROUND */}
      <div className="background-canvas" ref={mountRef}></div>

      {/* HERO SECTION */}
      <section className="hero-v2">
        <span className="hero-v2-tag">Our Impact</span>
        <h1 className="hero-v2-title">
          Industrial <span>Success</span> Stories
        </h1>
        <p className="hero-v2-subtitle">
          From legacy factories to intelligent manufacturing hubs. We bridge the gap between human potential and industrial efficiency.
        </p>
      </section>

      {/* STORIES GRID */}
      <section className="stories-grid-v2">
        {stories.map((story) => (
          <div key={story.id} className="story-card-v2">
            <div className="card-v2-header">
              <img src={story.image} alt={story.title} className="card-v2-img" />
            </div>

            <div className="card-v2-body">
              <div className="card-v2-client">
                <img src={story.logo} alt={story.company} className="client-logo-v2" />
                <span className="client-name-v2">{story.company}</span>
              </div>
              <h3 className="card-v2-title" title={story.title}>{story.title}</h3>
              
              <div className="info-item-v2">
                <span className="info-label-v2">The Challenge</span>
                <p className="info-text-v2">{story.problem}</p>
              </div>

              <div className="info-item-v2">
                <span className="info-label-v2">Outcome</span>
                <p className="info-text-v2 outcome-text">{story.results}</p>
              </div>
            </div>

            <div className="card-v2-footer">
              <button 
                className="view-case-btn"
                onClick={() => setSelectedStory(story)}
              >
                Explore Details →
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* MODAL V2 - REDESIGNED */}
      {selectedStory && (
        <div className="modal-v3-overlay" onClick={() => setSelectedStory(null)}>
          <div className="modal-v3-content" onClick={e => e.stopPropagation()}>
            <div className="modal-v3-hero">
              <img src={selectedStory.image} alt={selectedStory.title} className="modal-v3-hero-img" />
              <div className="modal-v3-hero-overlay"></div>
              <button className="modal-v3-close" onClick={() => setSelectedStory(null)}>&times;</button>
              
              <div className="modal-v3-hero-text">
                <div className="client-badge-v3">
                  <img src={selectedStory.logo} alt={selectedStory.company} className="client-logo-v3" />
                  <span>{selectedStory.company}</span>
                </div>
                <h2 className="modal-v3-title">{selectedStory.title}</h2>
              </div>
            </div>

            <div className="modal-v3-body">
              <div className="modal-v3-grid">
                <div className="modal-v3-card problem-border">
                  <div className="modal-v3-icon">⚠️</div>
                  <h4 className="problem-text">The Challenge</h4>
                  <p>{selectedStory.problem}</p>
                </div>

                <div className="modal-v3-card solution-border">
                  <div className="modal-v3-icon">💡</div>
                  <h4 className="solution-text">The Solution</h4>
                  <p>{selectedStory.solution}</p>
                </div>

                <div className="modal-v3-card results-border">
                  <div className="modal-v3-icon">🎯</div>
                  <h4 className="results-text">The Outcome</h4>
                  <p>{selectedStory.results}</p>
                </div>
              </div>

              <div className="modal-v3-tech">
                <h4>Technologies Deployed</h4>
                <div className="tech-tags-v3">
                  {selectedStory.tech.map((t, i) => (
                    <span key={i} className="tech-tag-v3">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-v3-footer">
                <button 
                  className="ent-btn-primary" 
                  onClick={() => window.location.href='/contact'}
                >
                  Request Similar Implementation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Success;