import React, { useEffect } from "react";
import "./PremiumTemplate.css";
import { Link } from "react-router-dom";

const IoTGateway = () => {
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
                            <span>IoT Gateways</span>
                        </h1>
                        <p className="premium-hero-subtitle">Enable seamless industrial connectivity, protocol conversion, and edge data processing.</p>
                        <div>
                            <Link to="/contact" className="premium-btn-primary">Explore Platform</Link>
                            <a href="#overview" className="premium-btn-secondary">View Architecture</a>
                        </div>
                    </div>

                    <div className="premium-animate slide-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="premium-hero-image-wrapper">
                            <img src="/images/IOT_gateway.png" alt="Industrial IoT Gateway System" className="premium-hero-image" />
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
                            <img src="/images/iot-gateway/overview.png" alt="Gateway Overview" style={{ borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <h2>Overview</h2>
                            <p className="lead">IoT Gateway acts as a bridge between industrial machines, sensors, PLCs, and cloud platforms.</p>
                            <p>It collects real-time data from factory devices and securely transfers it to centralized systems for monitoring and analysis. In modern Industry 4.0 environments, IoT gateways help connect legacy equipment with modern smart systems.</p>
                            <p>They enable seamless communication between machines, controllers, and analytics platforms, allowing factories to operate more efficiently and intelligently.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="premium-section-padding premium-bg-gradient">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Key Features</h2>
                        <p>Essential capabilities that power true industrial connectivity.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {[
                            { i: "⚡", t: "Real-Time Data Collection", d: "IoT gateways collect and transmit real-time data from industrial machines, sensors, and controllers. This allows operators to monitor machine health, production status, and performance metrics continuously." },
                            { i: "🧠", t: "Edge Computing Capability", d: "With built-in processing capability, IoT gateways can process and filter data locally before sending it to the cloud. This reduces latency and improves system response time." },
                            { i: "🔗", t: "Multi-Protocol Communication", d: "Industrial environments use multiple communication protocols such as Modbus, OPC UA, MQTT, and Ethernet/IP. IoT gateways support multiple protocols to ensure seamless device connectivity." },
                            { i: "🛡️", t: "Secure Connectivity", d: "IoT gateways provide encrypted communication and authentication mechanisms to protect industrial data and ensure secure device communication." },
                            { i: "☁️", t: "Cloud Integration", d: "They connect factory machines to cloud platforms, enabling advanced analytics, predictive maintenance, and remote monitoring." }
                        ].map((f, idx) => (
                            <div key={idx} className="premium-card premium-animate slide-up" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div className="premium-gc-icon">{f.i}</div>
                                <h3 className="premium-gc-title">{f.t}</h3>
                                <p className="premium-gc-desc" style={{ fontSize: '0.9rem' }}>{f.d}</p>
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
                        <p>Where Industrial IoT Gateways make the biggest impact.</p>
                    </div>
                    <div className="premium-split" style={{ flexDirection: 'row-reverse', marginTop: '40px' }}>
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/iot-gateway/applications.png" alt="IoT Gateway Applications" style={{ borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s', padding: '0 40px 0 0' }}>
                            <div style={{ marginBottom: '25px' }}>
                                <h3 style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '8px' }}>Smart Manufacturing</h3>
                                <p style={{ color: '#475569' }}>IoT gateways allow factories to monitor machines and production data in real time, improving operational efficiency.</p>
                            </div>
                            <div style={{ marginBottom: '25px' }}>
                                <h3 style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '8px' }}>Predictive Maintenance</h3>
                                <p style={{ color: '#475569' }}>By continuously analyzing equipment data, potential failures can be identified before breakdown occurs.</p>
                            </div>
                            <div style={{ marginBottom: '25px' }}>
                                <h3 style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '8px' }}>Energy Monitoring</h3>
                                <p style={{ color: '#475569' }}>Factories can track energy consumption and optimize power usage to reduce operational costs.</p>
                            </div>
                            <div>
                                <h3 style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '8px' }}>Remote Equipment Monitoring</h3>
                                <p style={{ color: '#475569' }}>Engineers can monitor machines remotely, enabling faster troubleshooting and maintenance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Benefits</h2>
                        <p>Core advantages of deploying our robust gateway architecture.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            "Improved production visibility",
                            "Reduced machine downtime",
                            "Better data-driven decision making",
                            "Enhanced system connectivity",
                            "Scalable Industry 4.0 infrastructure"
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

export default IoTGateway;
