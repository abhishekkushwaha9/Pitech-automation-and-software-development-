import React, { useEffect, useState } from 'react';
import '../../generated/PremiumTemplate.css';
import { Link } from 'react-router-dom';
import TypewriterText from '../../../components/TypewriterText';

const RoboticsOverview = () => {

    // Observer for slide animations
    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        document.querySelectorAll(".premium-animate").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Scroll listener for parallax background
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const heroBg = document.querySelector('.premium-hero-parallax-bg');
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="premium-page">
            {/* HERO SECTION with Parallax */}
            <section className="premium-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
                <div
                    className="premium-hero-parallax-bg"
                    style={{
                        position: 'absolute',
                        top: '-15%',
                        left: 0,
                        width: '100%',
                        height: '130%',
                        backgroundImage: "url('/images/robotics/overview.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>

                {/* Dark Overlay */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ display: 'inline-block', marginBottom: '20px' }}>Industrial Robotics</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff", justifyContent: 'center' }}>
                            <TypewriterText text="Robotics in Smart Manufacturing" />
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Intelligent Automation and Robotic Systems for Modern Industry 4.0.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Overview" />
                        </h2>
                        <p>Intelligent automation and flexible material routing for smart factory operations.</p>
                    </div>
                    <div className="premium-split" style={{ alignItems: 'center' }}>
                        <div className="premium-split-image premium-animate slide-up" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}>
                            <img
                                src="/images/robotics/pallet.png"
                                alt="Robotics Operations Overview"
                                style={{ borderRadius: "16px", width: "100%", height: "460px", objectFit: "cover", display: "block" }}
                            />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p style={{ color: '#0f172a', fontSize: '1.05rem', fontWeight: '500', lineHeight: '1.7', marginBottom: '15px' }}>
                                Industrial robotics is fundamentally transforming manufacturing, logistics, and warehousing operations globally. By answering the increasing demand for flexible material flow, robotic integrations are paving the way for adaptable, high-efficiency smart factories.
                            </p>
                            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                                Automated Guided Vehicles (AGVs) and autonomous mobile robots are actively replacing traditional physical conveyors to enable faster process changes and uniquely flexible automation routing. Whether for material delivery or picking operations, intelligent AGVs act as the lifelines of the factory floor.
                            </p>
                            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                                Furthermore, fully automated robotic systems and multi-axis articulated arms support heavy assembly, machine tending, and continuous production tasks, providing unmatched precision, speed, and workplace safety without operational fatigue.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES SECTION */}
            <section className="premium-section-padding premium-bg-gradient">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Key Features" />
                        </h2>
                        <p>Enterprise core capabilities built for flexible, real-time autonomous robotics.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                        {[
                            { i: "🤖", t: "Agile Material Flow & AGVs", d: "Automated guided vehicles and autonomous mobile robots provide flexible material transport without fixed floor conveyor constraints." },
                            { i: "🦾", t: "Multi-Axis Articulated Arms", d: "Stationary industrial robotic arms deliver high-precision assembly, precision welding, and repeatable material handling." },
                            { i: "📡", t: "Intelligent Sensor Guidance", d: "Integrated vision systems, lidar, and optical sensors enable real-time navigation, environmental mapping, and obstacle avoidance." },
                            { i: "⚡", t: "Real-Time Fleet Coordination", d: "Centralized automation platforms continuously monitor, dispatch, and synchronize robotic cells and mobile fleets." },
                            { i: "🛡️", t: "Certified Safety Systems", d: "Safety-rated laser scanners, protective interlocks, and presence sensors ensure completely safe human-robot collaboration." }
                        ].map((f, idx) => (
                            <div key={idx} className="premium-card premium-animate slide-up" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div className="premium-gc-icon">{f.i}</div>
                                <h3 className="premium-gc-title">{f.t}</h3>
                                <p className="premium-gc-desc" style={{ fontSize: "0.95rem" }}>{f.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPLICATIONS SECTION - Sticky Media with Natural Clean Points */}
            <section className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Applications" />
                        </h2>
                        <p>Where Intelligent Robotics Systems make the biggest business impact.</p>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "60px",
                        alignItems: "start",
                        position: "relative",
                        marginTop: "20px"
                    }}>
                        {/* Sticky Image: Compact size that stays pinned in place as user scrolls through the points */}
                        <div style={{
                            position: "sticky",
                            top: "100px",
                            alignSelf: "start",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                            background: "#0f172a",
                            height: "380px"
                        }}>
                            <img
                                src="/images/robotics/agv.png"
                                alt="Robotics Applications AGV"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "block",
                                    objectFit: "cover"
                                }}
                            />
                        </div>

                        {/* Normal Clean Points: No dabba, simply scrolls naturally past the pinned image */}
                        <div style={{ padding: "0 10px" }}>
                            {[
                                {
                                    title: "Navigation and Dynamic AGV Transport",
                                    desc: "Safety laser scanners protect autonomous AGV transportation routes while simultaneously supplying precise measurement data for natural navigation."
                                },
                                {
                                    title: "Vertical Positioning & High-Bay Pallet Handling",
                                    desc: "Laser positioning systems deliver millimeter-level accuracy for reliable storage, vertical lifting, and pallet retrieval across multi-tier warehouses."
                                },
                                {
                                    title: "Pallet Presence and Position Control",
                                    desc: "Optical sensors with background suppression reliably detect pallet presence and verify load placement even on complex or reflective surfaces."
                                },
                                {
                                    title: "Heavy Component Transfer & Assembly Docking",
                                    desc: "Industrial robots transfer high-payload components, engine parts, and sub-assemblies between conveyors, presses, and robotic cells."
                                }
                            ].map((app, idx) => (
                                <div key={idx} style={{ marginBottom: idx === 3 ? "20px" : "48px" }}>
                                    <h3 style={{ fontSize: "1.28rem", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                                        {app.title}
                                    </h3>
                                    <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: "1.7", margin: 0 }}>
                                        {app.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="premium-section-padding premium-bg-light">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Benefits" />
                        </h2>
                        <p>Core advantages of deploying our robust industrial robotics architecture.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            "Increased production throughput and 24/7 continuous operation",
                            "Reduced manual labor and elimination of repetitive strain injuries",
                            "Higher precision, consistency, and repeatability across assembly tasks",
                            "Dynamic factory routing flexibility without fixed conveyor constraints",
                            "Seamless integration with smart factory controllers and SCADA networks"
                        ].map((b, idx) => (
                            <div key={idx} className="premium-benefit-row premium-animate slide-up" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#dbeafe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>✓</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#334155' }}>{b}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RoboticsOverview;
