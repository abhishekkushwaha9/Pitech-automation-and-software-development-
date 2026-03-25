import React, { useEffect } from "react";
import "./PremiumTemplate.css";
import { Link } from "react-router-dom";

const Sensor = () => {
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

    return (
        <div className="premium-page">
            {/* HERO SECTION */}
            <section className="premium-hero">
                <div className="premium-hero-bg"></div>
                <div className="premium-hero-grid"></div>
                
                <div className="container premium-hero-container">
                    <div className="premium-animate slide-right">
                        <span className="premium-chip">Products Innovation</span>
                        <h1 className="premium-hero-title">
                            Industrial <br />
                            <span>Smart Sensors</span>
                        </h1>
                        <p className="premium-hero-subtitle">Capture real-time environmental and mechanical data with robust IoT edge nodes.</p>
                        <div>
                            <Link to="/contact" className="premium-btn-primary">Explore Platform</Link>
                            <a href="#overview" className="premium-btn-secondary">View Architecture</a>
                        </div>
                    </div>
                    
                    <div className="premium-animate slide-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="premium-hero-image-wrapper">
                            <img src="/images/automation-hero.png" alt="Industrial Automation Interface" className="premium-hero-image" />
                            <div className="premium-floating-card">
                                <div className="premium-fc-icon">⚡</div>
                                <div className="premium-fc-text">
                                    <h4>System Health</h4>
                                    <p>Optimized & Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                             <img src="/images/dashboard-ui.png" alt="Dashboard Analytics UI" />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <h2>Redefining Standard Operations with Industrial Smart Sensors</h2>
                            <p className="lead">Scale operations flawlessly with transparent, connected infrastructure.</p>
                            <p>We deploy industrial-grade Industrial Smart Sensors frameworks designed to bring cloud-level intelligence directly to your factory floor. Every integration ensures modularity, maximum uptime, and robust protocol security conforming to global manufacturing requirements.</p>
                            <ul className="premium-list">
                                <li>Cloud-native connectivity with zero-downtime deployment</li>
                                <li>Comprehensive legacy equipment integration</li>
                                <li>Real-time telemetry and predictive diagnostic logic</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="premium-section-padding premium-bg-gradient">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Enterprise Core Capabilities</h2>
                        <p>Delivering high-performance architecture built for absolute resilience and speed.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { i: "🚀", t: "High-Velocity Throughput", d: "Instantly scale your operations without friction. Our systems are load-balanced for extreme continuous capacity." },
                            { i: "🛡️", t: "Encrypted Machine Layers", d: "Secure your facility from the field device level up to your enterprise resource planners natively." },
                            { i: "📊", t: "Predictive Intelligence", d: "Transition from reactive maintenance to automated predictive analytics, saving extensive operational waste." }
                        ].map((f, idx) => (
                            <div key={idx} className="premium-card premium-animate slide-up" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div className="premium-gc-icon">{f.i}</div>
                                <h3 className="premium-gc-title">{f.t}</h3>
                                <p className="premium-gc-desc">{f.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Business Impact</h2>
                        <p>How Industrial Smart Sensors continuously drives enterprise value.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            "Increased OEE by 20% on average",
                            "Reduced manual inspection failures",
                            "Universal standard protocol matching",
                            "Deep API availability for IT/OT convergence"
                        ].map((b, idx) => (
                            <div key={idx} className="premium-benefit-row premium-animate slide-up" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div style={{width:'30px', height:'30px', borderRadius:'50%', background:'#dbeafe', color:'#2563eb', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold'}}>✓</div>
                                <div style={{fontSize:'1.1rem', fontWeight:'600', color:'#334155'}}>{b}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="premium-section-padding premium-bg-light">
                <div className="container">
                    <div className="premium-cta premium-animate slide-up">
                        <div className="premium-cta-bg"></div>
                        <div style={{position: 'relative', zIndex: 1}}>
                            <h2 className="premium-cta-title">Ready to modernize your infrastructure?</h2>
                            <p className="premium-cta-subtitle">Talk to our automation architects to design your bespoke deployment strategy today.</p>
                            <Link to="/contact" className="premium-btn-primary" style={{ padding: '20px 40px', fontSize: '1.2rem', background: '#fff', color: '#0f172a' }}>
                                Schedule Technical Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sensor;
