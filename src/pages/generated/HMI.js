import React, { useEffect } from "react";
import "./PremiumTemplate.css";
import { Link } from "react-router-dom";

const HMI = () => {
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

    // Additional scroll listener for parallax if needed beyond css background-attachment
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
            <section className="premium-hero" style={{ position: 'relative', overflow: 'hidden', padding: '110px 0 65px', minHeight: 'auto' }}>
                {/* Parallax Background Layer */}
                <div
                    className="premium-hero-parallax-bg"
                    style={{
                        position: 'absolute',
                        top: '-15%',
                        left: 0,
                        width: '100%',
                        height: '130%',
                        backgroundImage: "url('/images/Hmi_NEW.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
                {/* Dark Overlay */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container left-aligned-hero" style={{ position: "relative", zIndex: 2, display: 'block', width: '100%', textAlign: 'left' }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "left", maxWidth: "800px", margin: "0" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '14px', display: 'inline-block' }}>Products Innovation</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff", textAlign: 'left' }}>
                            HMI – Human Machine Interface
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 0 32px 0', maxWidth: '680px', textAlign: 'left' }}>
                            Empower operators with crystal-clear visual dashboards and real-time control points.
                        </p>
                        <div style={{ marginTop: "32px", display: 'flex', justifyContent: 'flex-start' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Platform</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Overview</h2>
                        <p>Redefining standard operations with centralized industrial visualization.</p>
                    </div>
                    <div className="premium-split" style={{ alignItems: 'center' }}>
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/hmi-touchscreen-panel.jpg" alt="HMI Touchscreen Dashboard" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: "100%", height: "100%", maxHeight: "380px", objectFit: "cover" }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s', textAlign: 'justify' }}>
                            <p style={{ color: '#0f172a', fontSize: '1.02rem', fontWeight: '600', lineHeight: 1.8, marginBottom: '14px', textAlign: 'justify' }}>
                                HMI (Human Machine Interface) is a critical component of modern industrial automation systems. It provides a graphical interface that allows operators and engineers to monitor, control, and interact with industrial machines and processes.
                            </p>
                            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '14px', textAlign: 'justify' }}>
                                In PiTech Industry 4.0 solutions, HMI panels act as the bridge between operators and automation systems such as PLCs, sensors, robotic systems, and production equipment.
                            </p>
                            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
                                Through real-time dashboards and visualization tools, HMI enables operators to track machine performance, monitor production status, and control operations efficiently. HMI systems play an important role in smart factories by improving production visibility, simplifying machine operation, and enabling better decision-making through real-time data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES SECTION */}
            <section className="premium-section-padding premium-bg-gradient">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Key Features</h2>
                        <p>Enterprise core capabilities built for absolute resilience and intuitive interaction.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                        {[
                            { i: "⏱️", t: "Real-Time Machine Monitoring", d: "HMI panels display real-time information about machine status, production metrics, and system performance." },
                            { i: "👆", t: "Touchscreen Control Interface", d: "Modern HMI systems use intuitive touchscreen interfaces that make it easier for operators to control industrial machines." },
                            { i: "⚠️", t: "Alarm and Fault Notifications", d: "HMI systems provide instant alerts and notifications when abnormal conditions or machine faults occur." },
                            { i: "📊", t: "Data Visualization", d: "Production data, machine parameters, and operational insights are displayed through charts, graphs, and dashboards." },
                            { i: "🔌", t: "PLC Integration", d: "HMI panels communicate directly with PLC systems to control industrial equipment and automation processes." }
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

            {/* APPLICATIONS SECTION */}
            <section className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Applications</h2>
                        <p>Where Industrial HMI Systems make the biggest impact.</p>
                    </div>
                    <div className="premium-split" style={{ alignItems: 'center', marginTop: '40px', gap: '60px' }}>
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/hmi-applications.jpg" alt="HMI Applications on Assembly Line" style={{ borderRadius: "16px", boxShadow: "0 15px 35px rgba(0,0,0,0.1)", width: "100%", height: "100%", maxHeight: "420px", objectFit: "cover" }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <div style={{ marginBottom: "22px" }}>
                                <h3 style={{ fontSize: "1.18rem", fontWeight: '700', color: "#0f172a", marginBottom: "6px" }}>Manufacturing Automation</h3>
                                <p style={{ color: "#475569", lineHeight: 1.6, margin: 0, textAlign: 'justify' }}>HMI panels are widely used to monitor and control automated machines in production environments.</p>
                            </div>
                            <div style={{ marginBottom: "22px" }}>
                                <h3 style={{ fontSize: "1.18rem", fontWeight: '700', color: "#0f172a", marginBottom: "6px" }}>Assembly Line Monitoring</h3>
                                <p style={{ color: "#475569", lineHeight: 1.6, margin: 0, textAlign: 'justify' }}>Operators can track production flow, machine status, and system performance in real time.</p>
                            </div>
                            <div style={{ marginBottom: "22px" }}>
                                <h3 style={{ fontSize: "1.18rem", fontWeight: '700', color: "#0f172a", marginBottom: "6px" }}>Machine Diagnostics</h3>
                                <p style={{ color: "#475569", lineHeight: 1.6, margin: 0, textAlign: 'justify' }}>HMI dashboards help engineers quickly detect system faults and perform troubleshooting.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: "1.18rem", fontWeight: '700', color: "#0f172a", marginBottom: "6px" }}>Smart Factory Operations</h3>
                                <p style={{ color: "#475569", lineHeight: 1.6, margin: 0, textAlign: 'justify' }}>HMI acts as a central interface for managing multiple machines and production processes in Industry 4.0 environments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="premium-section-padding premium-bg-light">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Benefits</h2>
                        <p>Core advantages of deploying our robust HMI architecture.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            "Improved machine monitoring and control",
                            "Faster fault detection and troubleshooting",
                            "Better production visibility",
                            "Reduced operator errors",
                            "Enhanced operational efficiency"
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

export default HMI;
