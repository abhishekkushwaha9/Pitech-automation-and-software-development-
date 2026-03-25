import React, { useEffect } from "react";
import "../generated/PremiumTemplate.css";
import { Link } from "react-router-dom";

const EVManufacturing = () => {
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
            {/* HERO SECTION with Parallax */}
            <section className="premium-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '650px', display: 'flex', alignItems: 'center' }}>
                <div 
                    className="premium-hero-parallax-bg"
                    style={{ 
                        position: 'absolute', top: '-15%', left: 0, width: '100%', height: '130%', 
                        backgroundImage: "url('/images/EV.png')", 
                        backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px', display: 'inline-block' }}>Future of Mobility</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff" }}>
                            EV Manufacturing <br />
                            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automation</span>
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Accelerating the transition to electric mobility with smart automation for battery assembly, E-motor manufacturing, and end-of-line vehicle integration.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                            <a href="#overview" className="premium-btn-secondary">View Gigafactory Tech</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY OVERVIEW */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Industry Overview</h2>
                        <p>Leading the charge in electric vehicle manufacturing with high-precision automation.</p>
                    </div>
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/EVv.gif" alt="EV Industry Operations" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p className="lead" style={{ color: '#2563eb', fontWeight: '600' }}>
                                EV manufacturing demands extreme precision, specialized testing, and cell-level traceability.
                            </p>
                            <p>
                                Pitech provides end-to-end automation for EV gigafactories, focusing on the critical battery pack and powertrain assembly lines. Our solutions integrate high-speed robotic welding for busbars, automated thermal paste dispensing, and rigorous leak testing of battery housings.
                            </p>
                            <p>
                                We enable manufacturers to track every battery cell from the inward warehouse to the finished vehicle, ensuring performance consistency and complying with strict safety standards. Our smart factory implementations help EV OEMs scale quickly and optimize production yields in real-time.
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
                        <p>Specialized automation for the electrification of the automotive sector.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                        {[
                            { i: "🔋", t: "Production Lines", d: "High-precision assembly lines for battery pack and module manufacturing." },
                            { i: "📦", t: "Packaging Systems", d: "Automated tray stacking and module housing packaging with strict ESD controls." },
                            { i: "👁️", t: "Quality Inspection", d: "Vision systems for laser weld inspection and thermal paste application patterns." },
                            { i: "🚜", t: "Warehouse Automation", d: "AGV-led cell delivery and finished pack storage systems with safety zoning." },
                            { i: "📊", t: "Real-time Monitoring", d: "Continuous cell voltage and temperature monitoring during the assembly process." }
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
                        <p>Specialized automation targeting the unique challenges of electric vehicle production.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { i: "🔋", t: "Traceability & SCADA", d: "Cell-level traceability for battery packs, tracking voltage, capacity, and impedance throughout the multi-stage assembly process." },
                            { i: "📊", t: "OEE Dashboard", d: "Real-time efficiency tracking for robotic welding cells and motor assembly lines to maximize gigafactory output." },
                            { i: "📡", t: "Smart Sensing Solutions", d: "Precision sensors for torque verification, high-pressure leak testing of battery housings, and infrared thermal monitoring." },
                            { i: "👁️", t: "Vision Inspection System", d: "Inspecting connector pins, thermal paste application patterns, and surface quality of high-voltage powertrain components." },
                            { i: "⚙️", t: "PLC & Factory Automation", d: "Advanced control systems for automated battery module assembly, E-motor winding, and integrated end-of-line vehicle testing rigs." }
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
                        <p>Meeting the high stakes of EV battery and powertrain manufacturing.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { 
                                q: "Extreme Cell Traceability", 
                                a: "Pitech implements high-density barcode scanning and database integration to log every single cell's electrical profile before module assembly." 
                            },
                            { 
                                q: "Safety in High-Voltage Environments", 
                                a: "Our automation systems feature redundant safety PLCs and light curtains to protect operators while handling high-energy battery packs." 
                            },
                            { 
                                q: "Thermal Management Precision", 
                                a: "We utilize automated dispensing vision systems to ensure thermal interface material is applied with 0.1mm accuracy for optimal cell cooling." 
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
                        <p>Empowering EV OEMs to reach production targets with precision and sustainability.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            { t: "Increased production efficiency", d: "Smart automation reduces assembly cycle times for batteries and E-powertrains while minimizing material waste." },
                            { t: "Reduced manual errors", d: "Eliminate high-voltage risk and assembly errors via robotic welding and vision-guided positioning." },
                            { t: "Real-time monitoring and analytics", d: "Continuous oversight of critical assembly steps to ensure both operator safety and unit performance." },
                            { t: "Improved product quality", d: "Zero-defect manufacturing philosophy ensured by high-precision testing, vision inspection, and digital twin monitoring." },
                            { t: "Better traceability and compliance", d: "End-to-end data logging for regulatory compliance, warranty management, and predictive process optimization." }
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

export default EVManufacturing;
