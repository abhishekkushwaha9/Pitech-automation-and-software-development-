import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Success.css";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Success = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const mountRef = useRef(null);
  const containerRef = useRef(null);

  // THREE.JS BACKGROUND
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Particles / Geometry
    const geometry = new THREE.BufferGeometry();
    const count = 1000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 50;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x2563eb,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 25;

    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.001;
      points.rotation.x += 0.0005;

      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

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
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  // GSAP ANIMATIONS
  useEffect(() => {
    // Hero Animations
    const tl = gsap.timeline();
    tl.fromTo(".hero-v2-tag", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".hero-v2-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=0.5")
      .fromTo(".hero-v2-subtitle", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.7")
    // Stats Reveal
    gsap.fromTo(".stat-card-v2",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-v2",
          start: "top 90%"
        }
      }
    );

    // Cards Reveal on Scroll
    gsap.utils.toArray(".story-card-v2").forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
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
          Industrial <span>Success</span> <br /> Stories
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
              <div className="card-v2-overlay"></div>
              <div className="card-v2-client">
                <img src={story.logo} alt={story.company} className="client-logo-v2" />
                <span className="client-name-v2">{story.company}</span>
              </div>
            </div>

            <div className="card-v2-body">
              <h3 className="card-v2-title">{story.title}</h3>

              <div className="info-item-v2">
                <span className="info-label-v2">The Challenge</span>
                <p className="info-text-v2">{story.problem.substring(0, 100)}...</p>
              </div>

              <div className="info-item-v2">
                <span className="info-label-v2">Outcome</span>
                <p className="info-text-v2" style={{ color: "var(--primary)", fontWeight: "bold" }}>{story.results}</p>
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
                  onClick={() => window.location.href = '/contact'}
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