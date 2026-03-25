import React, { useEffect } from "react";
import "../generated/PremiumTemplate.css";
import { Link } from "react-router-dom";

const AutomotiveIndustry = () => {
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
                        backgroundImage: "url('/images/Automotive.gif')", 
                        backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px', display: 'inline-block' }}>Assembly Line Perfection</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff" }}>
                            Automotive Industry <br />
                            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automation</span>
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Advanced Industry 4.0 automation for automotive OEMs. Orchestrating body shops, paint lines, and assembly floors with zero-defect synchronization.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                            <a href="#overview" className="premium-btn-secondary">View Case Studies</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY OVERVIEW */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Industry Overview</h2>
                        <p>Driving the next generation of automotive manufacturing with smart, connected automation.</p>
                    </div>
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/Automotive_1.gif" alt="Automotive Industry Operations" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p className="lead" style={{ color: '#2563eb', fontWeight: '600' }}>
                                Precision, speed, and safety are the pillars of modern automotive production lines.
                            </p>
                            <p>
                                Pitech specializes in the complex orchestration of automotive assembly floors. Our solutions connect robotic welding stations, automated paint applications, and final trim assembly into a single, cohesive data environment.
                            </p>
                            <p>
                                By implementing synchronized PLC systems and real-time vision inspection, we help OEMs and Tier-1 suppliers maintain zero-defect quality standards while achieving massive throughput volumes. From battery integration to full vehicle testing, we drive automotive excellence.
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
                        <p>Where Pitech automation drives efficiency in automotive plants.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                        {[
                            { i: "🦾", t: "Body-in-White", d: "Robotic welding and body assembly with multi-layered safety integration and precision." },
                            { i: "🎨", t: "Paint Shop Controls", d: "Atmospheric and flow control for automated painting rows to ensure perfect finish quality." },
                            { i: "👁️", t: "Quality Inspection", d: "Vision systems for measuring gap and flushness, and detecting surface imperfections." },
                            { i: "🛠️", t: "Engine & Trim", d: "Synchronized assembly of powertrains and interior trim components with torque tracking." },
                            { i: "📊", t: "Real-time Monitoring", d: "Live line-side visualization of production speed, quality rates, and asset health." }
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
                        <p>Enterprise-scale Industry 4.0 infrastructure for the automotive production floor.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { i: "🔭", t: "Traceability & SCADA", d: "VIN-level tracking and genealogy of every component and torque value throughout the assembly process." },
                            { i: "📊", t: "OEE Dashboard", d: "Full-floor visibility into cycle times, bottlenecks, and downtime causes across all robotic cells." },
                            { i: "📡", t: "Smart Sensing Solutions", d: "Precision sensors for nut-runner torque, part presence, and high-frequency vibration for asset health." },
                            { i: "👁️", t: "Vision Inspection System", d: "Inspecting connector seating, windshield adhesive beads, and final exterior panel alignment." },
                            { i: "⚙️", t: "PLC & Factory Automation", d: "Centralized orchestration of conveyors, AGVs, and assembly robots for seamless production flow." }
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
                        <p>Solving the high-stakes synchronization problems of modern automakers.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { 
                                q: "Zero-Defect Quality Pressure", 
                                a: "Our integrated vision and sensor networks perform 100% automated inspection at every station, preventing downstream defects." 
                            },
                            { 
                                q: "Complex Supply Chain Sync", 
                                a: "Pitech SCADA systems bridge the gap between production and logistics, ensuring just-in-time part delivery to the robot cell." 
                            },
                            { 
                                q: "Robotic Safety & Uptime", 
                                a: "We implement safety-integrated PLC networks that allow for collaborative environments while maintaining maximum machine availability." 
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
                        <p>Driving profitability and quality in the world's most demanding assembly floors.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            { t: "Increased production efficiency", d: "Optimize robotic cycle times and line-balance workstations to maximize vehicles-per-hour output." },
                            { t: "Reduced manual errors", d: "Automate high-precision tasks like welding and part placement to eliminates human variability and error." },
                            { t: "Real-time monitoring and analytics", d: "Predict line failures before they happen and monitor shift targets in real-time for immediate action." },
                            { t: "Improved product quality", d: "Consistent, automated quality gates ensure every vehicle meets the tightest tolerances and finish standards." },
                            { t: "Better traceability and compliance", d: "Vast data logging of safety-critical assembly values (like torque) for regulatory and safety assurance." }
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

export default AutomotiveIndustry;
