import React, { useEffect } from "react";
import "./PremiumTemplate.css";
import { Link } from "react-router-dom";

const AutomationLines = () => {
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
                        <span className="premium-chip">Lines Innovation</span>
                        <h1 className="premium-hero-title">
                            Complete <br />
                            <span>Automation Lines</span>
                        </h1>
                        <p className="premium-hero-subtitle">Turnkey smart factory rollouts from mechanical design to deep cloud analytics integration.</p>
                        <div>
                            <Link to="/contact" className="premium-btn-primary">Explore Platform</Link>
                        </div>
                    </div>

                    <div className="premium-animate slide-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="premium-hero-image-wrapper">
                            <img src="/images/pv1.jpeg" alt="Industrial Automation Interface" className="premium-hero-image" />
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
                            <img src="/images/pv2.jpeg" alt="Dashboard Analytics UI" />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <h2>Redefining Standard Operations with Complete Automation Lines</h2>
                            <p className="lead">Scale operations flawlessly with transparent, connected infrastructure.</p>
                            <p>We deploy industrial-grade Complete Automation Lines frameworks designed to bring cloud-level intelligence directly to your factory floor. Every integration ensures modularity, maximum uptime, and robust protocol security conforming to global manufacturing requirements.</p>
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
                        <p>How Complete Automation Lines continuously drives enterprise value.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            "Increased OEE by 20% on average",
                            "Reduced manual inspection failures",
                            "Universal standard protocol matching",
                            "Deep API availability for IT/OT convergence"
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

export default AutomationLines;
