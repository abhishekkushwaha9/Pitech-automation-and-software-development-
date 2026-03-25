import React, { useEffect } from "react";
import "./TraceabilitySCADA.css";
import { Link } from "react-router-dom";

const TraceabilitySCADA = () => {
    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // Optional: observer.unobserve(entry.target); if you want it to trigger only once.
                    observer.unobserve(entry.target);
                }
            });
        };

        const observerOptions = {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elementsToAnimate = document.querySelectorAll(".ts-animate");

        elementsToAnimate.forEach((el) => observer.observe(el));

        return () => {
            elementsToAnimate.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return (
        <div className="ts-page">
            {/* 1. HERO SECTION */}
            <section className="ts-hero">
                <div className="ts-hero-bg">
                    <div className="ts-hero-gradient"></div>
                    <div className="ts-hero-grid"></div>
                </div>
                <div className="container ts-hero-container">
                    <div className="ts-hero-content ts-animate fade-in">
                        <span className="ts-hero-badge">Industrial Connectivity</span>
                        <h1 className="ts-hero-title">
                            Traceability & <br /> <span>SCADA Solutions</span>
                        </h1>
                        <p className="ts-hero-subtitle">
                            Unlock complete visibility, control, and efficiency across your manufacturing and supply chain operations with advanced industrial automation solutions.
                        </p>
                        <div className="ts-hero-actions">
                            <Link to="/contact" className="ts-btn-primary">Request Demo</Link>
                            <a href="#what-is-traceability" className="ts-btn-secondary">Explore Solutions</a>
                        </div>
                    </div>
                    <div className="ts-hero-visual ts-animate slide-up" style={{ transitionDelay: "0.2s" }}>
                        <div className="ts-mock-dashboard">
                            <div className="ts-mock-header">
                                <span className="ts-dot close"></span>
                                <span className="ts-dot min"></span>
                                <span className="ts-dot max"></span>
                                <span className="ts-mock-title">SCADA Command Interface</span>
                            </div>
                            <div className="ts-mock-body">
                                <div className="ts-mock-sidebar">
                                    <div className="ts-nav-item active"></div>
                                    <div className="ts-nav-item"></div>
                                    <div className="ts-nav-item"></div>
                                    <div className="ts-nav-item"></div>
                                </div>
                                <div className="ts-mock-main">
                                    <div className="ts-mock-top">
                                        <div className="ts-stat-box">
                                            <span>Production</span>
                                            <strong>24,592</strong>
                                        </div>
                                        <div className="ts-stat-box">
                                            <span>Faults</span>
                                            <strong className="error">3</strong>
                                        </div>
                                        <div className="ts-stat-box">
                                            <span>Efficiency</span>
                                            <strong className="success">96.4%</strong>
                                        </div>
                                    </div>
                                    <div className="ts-mock-chart">
                                        <div className="ts-bar" style={{ height: '40%' }}></div>
                                        <div className="ts-bar" style={{ height: '60%' }}></div>
                                        <div className="ts-bar" style={{ height: '80%' }}></div>
                                        <div className="ts-bar" style={{ height: '50%' }}></div>
                                        <div className="ts-bar active" style={{ height: '90%' }}></div>
                                        <div className="ts-bar" style={{ height: '70%' }}></div>
                                        <div className="ts-bar" style={{ height: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. WHAT IS TRACEABILITY */}
            <section id="what-is-traceability" className="ts-what-is section-padding">
                <div className="container">
                    <div className="ts-split-layout">
                        <div className="ts-split-content ts-animate slide-right">
                            <h2>What is Traceability?</h2>
                            <p className="ts-lead">
                                Track every stage of a product lifecycle — from raw materials to final delivery.
                            </p>
                            <p>
                                Modern factories rely on digital traceability systems integrated with RFID, sensors, PLC systems, and centralized databases to maintain transparency and operational efficiency. Knowing exactly where, when, and how a product was manufactured is no longer optional—it's an enterprise requirement.
                            </p>
                        </div>
                        <div className="ts-split-visual ts-animate slide-left" style={{ transitionDelay: "0.2s" }}>
                            <img
                                src="/images/trace_pv.jpeg"
                                alt="Traceability System"
                                style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. KEY FEATURES OF TRACEABILITY */}
            <section className="ts-features section-padding bg-light">
                <div className="container">
                    <div className="ts-section-header ts-animate slide-up">
                        <h2>Key Features of Traceability</h2>
                        <p>Ensure product quality and supply chain integrity at every node.</p>
                    </div>
                    <div className="ts-features-grid">
                        {[
                            { icon: "👁️", title: "Complete Visibility", desc: "Gain real-time insights across your supply chain from raw material sourcing to product delivery." },
                            { icon: "🛡️", title: "Product Authentication", desc: "Protect brand integrity and prevent counterfeit products using secure product identification and tracking." },
                            { icon: "📋", title: "Regulatory Compliance", desc: "Automatically document processes and generate reports to meet industry standards and regulatory requirements." },
                            { icon: "✅", title: "Quality Assurance", desc: "Detect defects early and quickly isolate issues to reduce recalls and maintain product quality." },
                            { icon: "🔄", title: "Supply Chain Optimization", desc: "Use analytics and operational data to identify bottlenecks and improve production efficiency." }
                        ].map((feature, idx) => (
                            <div key={idx} className="ts-feature-card ts-animate slide-up" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div className="ts-fc-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TRACEABILITY IMPLEMENTATION */}
            <section className="ts-implementation section-padding">
                <div className="container">
                    <div className="ts-section-header ts-animate slide-up">
                        <h2>How It Works Inside the Factory</h2>
                        <p>A seamless flow of data from physical sensors to enterprise analytics.</p>
                    </div>
                    <div className="ts-flow-container ts-animate fade-in" style={{ transitionDelay: "0.2s" }}>
                        <div className="ts-flow-diagram">
                            <div className="ts-flow-node">
                                <div className="ts-flow-icon">📡</div>
                                <h4>Sensor / RFID</h4>
                            </div>
                            <div className="ts-flow-arrow"></div>
                            <div className="ts-flow-node">
                                <div className="ts-flow-icon">🎛️</div>
                                <h4>PLC</h4>
                            </div>
                            <div className="ts-flow-arrow"></div>
                            <div className="ts-flow-node">
                                <div className="ts-flow-icon">🖥️</div>
                                <h4>SCADA System</h4>
                            </div>
                            <div className="ts-flow-arrow"></div>
                            <div className="ts-flow-node">
                                <div className="ts-flow-icon">💾</div>
                                <h4>Central Database</h4>
                            </div>
                            <div className="ts-flow-arrow"></div>
                            <div className="ts-flow-node">
                                <div className="ts-flow-icon">📊</div>
                                <h4>Dashboard Analytics</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. WHAT IS SCADA */}
            <section className="ts-what-is-scada section-padding bg-slate text-white">
                <div className="container">
                    <div className="ts-split-layout inverse">
                        <div className="ts-split-visual ts-animate slide-right">
                            <img
                                src="/images/scada_new.jpg"
                                alt="SCADA System"
                                style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                            />
                        </div>
                        <div className="ts-split-content ts-animate slide-left" style={{ transitionDelay: "0.2s" }}>
                            <h2>What is SCADA?</h2>
                            <p className="ts-lead" style={{ color: '#60a5fa' }}>
                                Supervisory Control and Data Acquisition
                            </p>
                            <p style={{ color: '#cbd5e1' }}>
                                SCADA is a control system architecture used to monitor and control industrial processes using computers, networks, sensors, and programmable controllers.
                            </p>
                            <p style={{ color: '#cbd5e1' }}>
                                It enables operators to supervise machines, collect operational data, and control production processes in real time—all from a centralized control room or remote locations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SCADA SYSTEM ARCHITECTURE */}
            <section className="ts-architecture section-padding">
                <div className="container">
                    <div className="ts-section-header ts-animate slide-up">
                        <h2>SCADA System Architecture</h2>
                        <p>A hierarchical structure ensuring robust industrial control.</p>
                    </div>
                    <div className="ts-arch-layers ts-animate slide-up" style={{ transitionDelay: "0.2s" }}>
                        {[
                            { level: "Level 4", title: "Enterprise Planning", desc: "Production planning and scheduling systems (ERP)." },
                            { level: "Level 3", title: "Production Monitoring", desc: "Production analytics, MES, and performance monitoring." },
                            { level: "Level 2", title: "Supervisory Systems", desc: "SCADA servers, HMI, and monitoring software." },
                            { level: "Level 1", title: "Control Devices", desc: "PLC and RTU controllers managing machine logic." },
                            { level: "Level 0", title: "Field Devices", desc: "Sensors, actuators, valves, and motors." }
                        ].map((layer, idx) => (
                            <div key={idx} className="ts-layer-card">
                                <div className="ts-layer-badge">{layer.level}</div>
                                <div className="ts-layer-info">
                                    <h4>{layer.title}</h4>
                                    <p>{layer.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. SCADA CORE COMPONENTS */}
            <section className="ts-components section-padding bg-light">
                <div className="container">
                    <div className="ts-section-header ts-animate slide-up">
                        <h2>SCADA Core Components</h2>
                        <p>The building blocks of modern industrial automation.</p>
                    </div>
                    <div className="ts-components-grid">
                        {[
                            { title: "Supervisory Computers", desc: "Central systems collecting data and issuing commands." },
                            { title: "RTU (Remote Terminal Units)", desc: "Devices connecting sensors and field equipment." },
                            { title: "PLC", desc: "Industrial controllers executing automation logic." },
                            { title: "Communication Infrastructure", desc: "Protocols like Modbus, OPC-UA, IEC 61850." },
                            { title: "Human Machine Interface", desc: "Operator dashboards for monitoring machines." }
                        ].map((comp, idx) => (
                            <div key={idx} className="ts-comp-card ts-animate fade-in" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div className="ts-comp-inner">
                                    <h3>{comp.title}</h3>
                                    <p>{comp.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. REAL-TIME MONITORING DASHBOARD */}
            <section className="ts-dashboard-section section-padding bg-slate text-white">
                <div className="container">
                    <div className="ts-section-header ts-animate slide-up">
                        <h2 style={{ color: '#fff' }}>Real-Time Monitoring Dashboard</h2>
                        <p style={{ color: '#94a3b8' }}>Experience total control over your factory floor.</p>
                    </div>
                    <div className="ts-scada-ui-wrapper ts-animate slide-up" style={{ transitionDelay: "0.2s" }}>
                        <div className="ts-scada-ui">
                            <div className="ts-ui-header">
                                <div className="ts-ui-logo">SCADA<span>Pro</span></div>
                                <div className="ts-ui-alerts">
                                    <span className="ts-alert warning">⚠️ Temp Warning on Line 2</span>
                                </div>
                            </div>
                            <div className="ts-ui-body">
                                <div className="ts-ui-widget">
                                    <h4>Machine Status</h4>
                                    <div className="ts-status-list">
                                        <div className="ts-status-item"><span className="ts-dot green"></span> Extruder M1</div>
                                        <div className="ts-status-item"><span className="ts-dot green"></span> Conveyor Sys</div>
                                        <div className="ts-status-item"><span className="ts-dot yellow"></span> Cooling Unit</div>
                                        <div className="ts-status-item"><span className="ts-dot red"></span> Packaging M4</div>
                                    </div>
                                </div>
                                <div className="ts-ui-widget large">
                                    <h4>Production Rate</h4>
                                    <div className="ts-chart-line">
                                        <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                                            <path d="M0,30 L0,15 C10,10 20,25 30,20 C40,15 50,5 60,10 C70,15 80,5 90,8 L100,5 L100,30 Z" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ts-ui-widget">
                                    <h4>Energy Consumption</h4>
                                    <div className="ts-energy-ring">
                                        <div className="ts-ring-value">4.2 MW</div>
                                    </div>
                                </div>
                                <div className="ts-ui-widget wide">
                                    <h4>Equipment Health Monitoring</h4>
                                    <div className="ts-health-bars">
                                        <div className="ts-h-bar"><div className="ts-fill" style={{ width: '95%', background: '#22c55e' }}></div><span>Motor A</span></div>
                                        <div className="ts-h-bar"><div className="ts-fill" style={{ width: '82%', background: '#22c55e' }}></div><span>Pump B</span></div>
                                        <div className="ts-h-bar"><div className="ts-fill" style={{ width: '45%', background: '#eab308' }}></div><span>Valve C</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. GALLERY */}
            <section className="ts-gallery section-padding">
                <div className="container">
                    <div className="ts-section-header ts-animate slide-up">
                        <h2>Implementation Gallery</h2>
                        <p>Visualizing traceability and SCADA in action.</p>
                    </div>
                    <div className="ts-gallery-grid">
                        {[
                            { img: '/images/images.jpg', cap: 'Traceability Tracking' },
                            { img: '/images/download (1).jpg', cap: 'Piston Assembly Line Integration' },
                            { img: '/images/1742193826882.jpg', cap: 'Seat Assembly Line' },
                            { img: '/images/images.jpg', cap: 'Production Monitoring Systems' }
                        ].map((item, idx) => (
                            <div key={idx} className="ts-gallery-item ts-animate fade-in" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div className="ts-gallery-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                                <div className="ts-gallery-cap">{item.cap}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. INDUSTRY USE CASES */}
            <section className="ts-industries section-padding bg-light">
                <div className="container">
                    <div className="ts-section-header ts-animate slide-up">
                        <h2>Industry Applications</h2>
                        <p>Empowering diverse sectors with smart automation.</p>
                    </div>
                    <div className="ts-industry-cards">
                        {[
                            { name: "Automotive Manufacturing", icon: "🚗" },
                            { name: "Metal Industry", icon: "⚙️" },
                            { name: "Glass Industry", icon: "🔍" },
                            { name: "Material Handling", icon: "📦" }
                        ].map((ind, idx) => (
                            <div key={idx} className="ts-ind-card ts-animate slide-up" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div className="ts-ind-icon">{ind.icon}</div>
                                <h3>{ind.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. BENEFITS */}
            <section className="ts-benefits section-padding">
                <div className="container">
                    <div className="ts-section-header ts-animate slide-up">
                        <h2>Transformational Benefits</h2>
                        <p>Why modern enterprises invest in Traceability and SCADA.</p>
                    </div>
                    <div className="ts-benefits-grid">
                        {[
                            "Real-time visibility",
                            "Improved production efficiency",
                            "Reduced downtime",
                            "Better quality control",
                            "Regulatory compliance",
                            "Smart factory enablement"
                        ].map((benefit, idx) => (
                            <div key={idx} className="ts-benefit-item ts-animate slide-right" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <span className="ts-check">✓</span>
                                <span className="ts-b-text">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default TraceabilitySCADA;
