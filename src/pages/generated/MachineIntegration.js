import React, { useEffect } from "react";
import "./EnterpriseStyle.css";
import { Link } from "react-router-dom";

const MachineIntegration = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".ent-animate, .ent-scale-in").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="ent-page">
            <section className="ent-hero" style={{ backgroundImage: "url('/images/production-master.jpg')" }}>
                <div className="ent-hero-overlay"></div>
                <div className="ent-shape s1"></div>
                <div className="ent-shape s2"></div>

                <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                    <div className="ent-hero-content ent-animate">
                        <span className="ent-chip">Automation Innovation</span>
                        <h1 className="ent-hero-title">
                            Machine <br />
                            <span>Integration</span>
                        </h1>
                        <p className="ent-hero-desc">Bridge legacy assets with modern IIoT architectures securely and instantly.</p>
                        <Link to="/contact" className="ent-btn-primary">Explore Platform</Link>
                    </div>
                </div>
            </section>

            <div className="container ent-visual-banner ent-scale-in">
                <div style={{ height: '400px', backgroundImage: "url('/images/automation-hero.png')", backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '24px' }}></div>
            </div>

            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-overview-content ent-animate">
                            <h3>Redefining Standard Operations with Machine Integration</h3>
                            <p>Scale operations flawlessly with transparent, connected infrastructure.</p>
                            <p>We deploy industrial-grade Machine Integration frameworks designed to bring cloud-level intelligence directly to your factory floor. Every integration ensures modularity, maximum uptime, and robust protocol security conforming to global manufacturing requirements.</p>
                        </div>
                        <div className="ent-overview-visual ent-animate" style={{ transitionDelay: "0.2s" }}>
                            <img src="/images/dashboard-ui.png" alt="Dashboard Analytics UI" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '300px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="ent-section ent-bg-slate">
                <div className="container">
                    <div className="ent-header ent-animate">
                        <h2>Enterprise Core Capabilities</h2>
                        <p>Delivering high-performance architecture built for absolute resilience and speed.</p>
                    </div>
                    <div className="ent-feature-cards">
                        <div className="ent-feature-card ent-animate">
                            <div className="ent-fc-icon">🚀</div>
                            <h4>High-Velocity Throughput</h4>
                            <p>Instantly scale your operations without friction. Our systems are load-balanced for extreme continuous capacity.</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{ transitionDelay: "0.1s" }}>
                            <div className="ent-fc-icon">🛡️</div>
                            <h4>Encrypted Machine Layers</h4>
                            <p>Secure your facility from the field device level up to your enterprise resource planners natively.</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{ transitionDelay: "0.2s" }}>
                            <div className="ent-fc-icon">📊</div>
                            <h4>Predictive Intelligence</h4>
                            <p>Transition from reactive maintenance to automated predictive analytics, saving extensive operational waste.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-animate">
                            <h3>Business Impact</h3>
                            <ul className="ent-bene-list">
                                <li>Increased OEE by 20% on average</li>
                                <li>Reduced manual inspection failures</li>
                                <li>Universal standard protocol matching</li>
                                <li>Deep API availability for IT/OT convergence</li>
                            </ul>
                        </div>
                        <div className="ent-animate" style={{ transitionDelay: "0.2s" }}>
                            <h3>Integration Advantages</h3>
                            <p>Seamlessly bridge the gap between OT (Operational Technology) and IT (Information Technology) environments to standardize data flow and operational metrics.</p>
                            <div style={{ marginTop: '20px', padding: '20px', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #2563eb', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                <strong>Value Driven:</strong> Customers report average deployment times 40% faster than legacy integration methods.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ent-section ent-bg-slate" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="ent-cta ent-animate">
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px', position: 'relative', zIndex: 2 }}>Ready to modernize your infrastructure?</h2>
                        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px', position: 'relative', zIndex: 2 }}>Talk to our automation architects to design your bespoke deployment strategy today.</p>
                        <Link to="/contact" className="ent-btn-primary" style={{ background: 'white', color: '#0f172a', position: 'relative', zIndex: 2 }}>Schedule Technical Consultation</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MachineIntegration;
