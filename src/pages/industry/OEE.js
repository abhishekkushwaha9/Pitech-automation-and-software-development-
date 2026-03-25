import React, { useEffect } from "react";
import "../../pages/generated/EnterpriseStyle.css";
import { Link } from "react-router-dom";

const OEE = () => {
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
            <section className="ent-hero" style={{
                backgroundImage: "url('/images/OEE-image.png')",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                {/* Light dark overlay replacing the previous white gradient */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    zIndex: 1
                }}></div>
                <div className="ent-shape s1" style={{ opacity: 0.2 }}></div>
                <div className="ent-shape s2" style={{ opacity: 0.2 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                    <div className="ent-hero-content ent-animate">
                        <span className="ent-chip" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)' }}>Industry 4.0 Standard</span>
                        <h1 className="ent-hero-title" style={{ color: '#ffffff' }}>
                            OEE <br />
                            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #7dd3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Dashboard</span>
                        </h1>
                        <p className="ent-hero-desc" style={{ color: '#e2e8f0' }}>Track production efficiency, manufacturing KPIs, and resolve hidden downtime with real-time OEE analytics.</p>
                        <Link to="/contact" className="ent-btn-primary">Request Live Demo</Link>
                    </div>
                </div>
            </section>

            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
                        <div className="ent-overview-content ent-animate">
                            <h3>A Modern Approach to OEE Dashboard</h3>
                            <p>Modern manufacturing demands absolute visibility into line performance. Our OEE analytics directly measures availability, performance, and quality continuously.</p>
                            <p>Instantly uncover bottleneck stages and micro-stops that operators miss. Automated dashboards guide daily improvement meetings based on accurate, ground-truth data.</p>
                        </div>
                        <div className="ent-overview-visual ent-animate" style={{ transitionDelay: "0.2s" }}>
                            <img src="/images/oee-new.jpeg" alt="OEE Dashboard System" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '300px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
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
                            <h4>Real-time Metrics</h4>
                            <p>Live visibility into Availability, Performance, and Quality.</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{ transitionDelay: "0.1s" }}>
                            <div className="ent-fc-icon">🛡️</div>
                            <h4>Downtime Categorization</h4>
                            <p>Automatic parsing of micro-stops vs scheduled maintenance.</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{ transitionDelay: "0.2s" }}>
                            <div className="ent-fc-icon">🧠</div>
                            <h4>Production Dashboards</h4>
                            <p>Customized visual views for operators and plant managers.</p>
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

export default OEE;
