import React, { useEffect } from "react";
import "../../pages/generated/EnterpriseStyle.css";
import { Link } from "react-router-dom";

const DWI = () => {
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
            <section className="ent-hero" style={{ backgroundImage: "url('/images/DWI ud.png')" }}>
                <div className="ent-hero-overlay"></div>
                <div className="ent-shape s1"></div>
                <div className="ent-shape s2"></div>

                <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                    <div className="ent-hero-content ent-animate">
                        <span className="ent-chip">Industry 4.0 Standard</span>
                        <h1 className="ent-hero-title">
                            Digital <br />
                            <span>Work Instructions</span>
                        </h1>
                        <p className="ent-hero-desc">Empower operators with dynamic, multimedia guidance systems that eliminate assembly errors.</p>
                        <Link to="/contact" className="ent-btn-primary">Request Live Demo</Link>
                    </div>
                </div>
            </section>

            <div className="container ent-visual-banner ent-scale-in">
                <img
                    src="/images/DWI ud.png"
                    alt="Digital Work Instructions"
                    className="ent-banner-img dwi-banner-image"
                />
            </div>

            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
                        <div className="ent-overview-content ent-animate">
                            <h3>A Modern Approach to Digital Work Instructions</h3>
                            <p>Replace static paper guides with interactive digital visual instructions at every station. Validate processes and confirm operator compliance dynamically.</p>
                            <p>Our DWI platform supports video playback, tool interlock signals, and immediate revision control to guarantee every product is built to spec.</p>
                        </div>
                        <div className="ent-overview-visual ent-animate" style={{ transitionDelay: "0.2s" }}>
                            <img src="/images/DWI ud.png" alt="Digital Work Instructions System" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="ent-section ent-bg-slate">
                <div className="container">
                    <div className="ent-header ent-animate">
                        <h2>Key Operational Features</h2>
                        <p>Unlock profound oversight utilizing the next generation of industrial connectivity algorithms.</p>
                    </div>
                    <div className="ent-feature-cards">
                        <div className="ent-feature-card ent-animate">
                            <div className="ent-fc-icon">⚙️</div>
                            <h4>Version Control</h4>
                            <p>Instantly update instructions across the entire floor globally.</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{ transitionDelay: "0.1s" }}>
                            <div className="ent-fc-icon">🛡️</div>
                            <h4>Tool Integration</h4>
                            <p>Sync steps directly with smart torque tools and PLC triggers.</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{ transitionDelay: "0.2s" }}>
                            <div className="ent-fc-icon">🧠</div>
                            <h4>Multimedia Support</h4>
                            <p>Embed high-res images and 3D cad models to guide complex routes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
                        <div className="ent-animate">
                            <h3>Impact & Benefits</h3>
                            <ul className="ent-bene-list">
                                <li>Decrease critical equipment breakdown scenarios.</li>
                                <li>Automate extensive end-of-shift reporting processes instantly.</li>
                                <li>Ensure absolute compliance with complex manufacturing ISO metrics.</li>
                                <li>Simplify operations with intuitive minimal UI design.</li>
                            </ul>
                        </div>
                        <div className="ent-animate" style={{ transitionDelay: "0.2s" }}>
                            <h3>Industry Applications</h3>
                            <p>Adopted heavily across automotive, metallurgy, logistics, and precision manufacturing ecosystems to standardize workflow mechanics and guarantee output metrics.</p>
                            <div style={{ marginTop: '20px', padding: '20px', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #2563eb', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                <strong>Value Driven:</strong> Customers report average yield increases of 18.5% within the first 60 days of complete integration.
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default DWI;
