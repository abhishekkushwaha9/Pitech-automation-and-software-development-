import React, { useEffect } from "react";
import "../generated/PremiumTemplate.css";
import { Link } from "react-router-dom";

const MetalIndustry = () => {
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
        <div className="premium-page" style={{ backgroundColor: '#ffffff' }}>
            {/* HERO SECTION */}
            <section className="premium-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '650px', display: 'flex', alignItems: 'center' }}>
                <div 
                    className="premium-hero-parallax-bg"
                    style={{ 
                        position: 'absolute', top: '-15%', left: 0, width: '100%', height: '130%', 
                        backgroundImage: "url('/images/METAL_gif.gif')", 
                        backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px', display: 'inline-block' }}>Heavy Industry Excellence</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff" }}>
                            Metal Industry <br />
                            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automation</span>
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Advanced Industry 4.0 automation for the modern metal industry, transforming traditional facilities into smart, connected, and safe manufacturing hubs.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                            <a href="#overview" className="premium-btn-secondary">View Strategy</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY OVERVIEW */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Industry Overview</h2>
                        <p>Bridging the gap between heavy metal production and digital intelligence.</p>
                    </div>
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/METAL_image.jpg" alt="Metal Industry Operations" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p className="lead" style={{ color: '#2563eb', fontWeight: '600' }}>
                                Metal manufacturing requires resilience, synchronized production, and real-time operational visibility.
                            </p>
                            <p>
                                Pitech empowers metal manufacturers to overcome traditional challenges such as high machine downtime and energy loss. By integrating PLC controllers, industrial robotics, and IoT sensors, we create a unified ecosystem that monitors everything from furnace temperatures to rolling mill speeds.
                            </p>
                            <p>
                                Our data-driven approach enables predictive maintenance, ensuring that massive industrial assets running 24/7 are optimized for performance, safety, and consistent output quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* APPLICATIONS SECTION */}
            <section className="premium-section-padding premium-bg-light">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Key Applications</h2>
                        <p>Where Pitech automation optimizes metal manufacturing workflows.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                        {[
                            { i: "🔥", t: "Furnace Monitoring", d: "Real-time temperature and load monitoring for optimized melting and energy consumption." },
                            { i: "🌀", t: "Rolling Mill Sync", d: "High-precision PLC control of rollers to ensure uniform thickness and surface quality." },
                            { i: "👁️", t: "Defect Detection", d: "Vision systems for detecting cracks, surface irregularities, and scaling in real-time." },
                            { i: "🦾", t: "Robotic Handling", d: "Safe, automated transport of heavy metal coils, sheets, and components across the floor." },
                            { i: "📊", t: "Predictive Maintenance", d: "Vibration and heat sensing on large motors to prevent costly unplanned downtime." }
                        ].map((app, idx) => (
                            <div key={idx} className="premium-card premium-animate slide-up" style={{ transitionDelay: `${idx * 0.1}s`, padding: '25px' }}>
                                <div className="premium-gc-icon" style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{app.i}</div>
                                <h3 className="premium-gc-title" style={{ fontSize: '1.1rem' }}>{app.t}</h3>
                                <p className="premium-gc-desc" style={{ fontSize: '0.9rem' }}>{app.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTIONS SECTION */}
            <section className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Automation Solutions</h2>
                        <p>Enterprise-ready solutions built for the harsh environments of metal processing.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { i: "🔗", t: "Traceability & SCADA", d: "End-to-end heat-tracking and genealogy from raw ore processing to finished metal components." },
                            { i: "📊", t: "OEE Dashboard", d: "Enterprise visibility into mill availability and yield to drive continuous process improvement." },
                            { i: "📡", t: "Smart Sensing Solutions", d: "Industrial-grade sensors for extreme conditions, monitoring vibration, flow, and high-degree heat." },
                            { i: "👁️", t: "Vision Inspection System", d: "Automated optical inspection for thickness verification and surface defect analysis on moving sheets." },
                            { i: "⚙️", t: "PLC & Factory Automation", d: "Robust control systems for synchronized operation of heavy machinery and material flow." }
                        ].map((s, idx) => (
                            <div key={idx} className="premium-card premium-animate slide-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className="premium-gc-icon">{s.i}</div>
                                <h3 className="premium-gc-title">{s.t}</h3>
                                <p className="premium-gc-desc">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDUSTRY CHALLENGES SECTION */}
            <section className="premium-section-padding premium-bg-light">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Industry Challenges & Our Solutions</h2>
                        <p>Solving the fundamental problems of heavy industry with smart tech.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { 
                                q: "Extreme Working Conditions", 
                                a: "We deploy ruggedized automation hardware and remote sensing that eliminates the need for human presence in hazardous, high-heat areas." 
                            },
                            { 
                                q: "Massive Energy Consumption", 
                                a: "Pitech energy monitoring systems identify inefficiencies in furnaces and motors, allowing plants to reduce carbon footprint and costs." 
                            },
                            { 
                                q: "Continuous Process Downtime", 
                                a: "Our predictive maintenance modules analyze asset health in real-time, scheduling repairs before a breakdown occurs." 
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="premium-card premium-animate slide-up" style={{ transitionDelay: `${idx * 0.1}s`, backgroundColor: '#fff' }}>
                                <h4 style={{ color: '#0f172a', marginBottom: '15px', fontWeight: '700' }}>Challenge: {item.q}</h4>
                                <div style={{ height: '2px', width: '40px', background: '#2563eb', marginBottom: '15px' }}></div>
                                <p style={{ color: '#475569', fontSize: '0.95rem' }}><strong>Pitech Solution:</strong> {item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Key Benefits</h2>
                        <p>Core operational advantages of deploying automated infrastructures.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            { t: "Increased production efficiency", d: "Optimize metal processing speeds and minimize idle time across continuous production lines." },
                            { t: "Reduced manual errors", d: "Minimize variation in metallurgy and dimensions through automated chemical and physical controls." },
                            { t: "Real-time monitoring and analytics", d: "Instant visibility into furnace health and mill performance for rapid response to deviations." },
                            { t: "Improved product quality", d: "Vision and sensor inspection guarantee that finished products meet precise industrial standards." },
                            { t: "Better traceability and compliance", d: "Digital genealogy tracks every batch from furnace to customer, ensuring accountability." }
                        ].map((b, idx) => (
                            <div key={idx} className="premium-benefit-row premium-animate slide-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#dbeafe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>✓</div>
                                <div>
                                    <h4 style={{ margin: '0 0 5px', color: '#0f172a' }}>{b.t}</h4>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b' }}>{b.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MetalIndustry;
