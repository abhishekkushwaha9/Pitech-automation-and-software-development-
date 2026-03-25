import React, { useEffect } from "react";
import "./PremiumTemplate.css";
import { Link, useNavigate } from "react-router-dom";

const PLCProgramming = () => {
    const navigate = useNavigate();

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
        <div className="premium-page" style={{ backgroundColor: '#ffffff' }}>
            {/* HERO SECTION */}
            <section className="premium-hero" style={{ background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)', color: 'white', padding: '100px 0' }}>
                <div className="container premium-hero-container">
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px', display: 'inline-block' }}>Automation Solution</span>
                        <h1 className="premium-hero-title" style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px', justifyContent: 'center' }}>
                            PLC / HMI / Sensor Programming
                        </h1>
                        <p className="premium-hero-subtitle" style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '750px', margin: '0 auto 40px' }}>
                            Custom Logical Architecture Designed for Smart Automation
                        </p>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container premium-animate slide-up">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', color: '#0a192f', marginBottom: '30px', fontWeight: 'bold' }}>Overview</h2>
                        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px', textAlign: 'left' }}>
                            Industrial automation requires reliable control systems capable of managing complex manufacturing operations efficiently. PLC, HMI, and Sensor programming plays a crucial role in building intelligent automation systems for modern Industry 4.0 environments.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px', textAlign: 'left' }}>
                            PiTech provides advanced PLC, HMI, and Sensor programming solutions designed to optimize machine performance, improve process control, and enhance production reliability. Our automation solutions integrate intelligent controllers, human-machine interfaces, and industrial sensors to create seamless and efficient control architectures.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '20px', textAlign: 'left' }}>
                            By designing customized automation logic and system architectures, PiTech enables factories to automate repetitive operations, monitor machine performance in real time, and reduce manual intervention. Our solutions are built to support scalable industrial environments, ensuring flexibility and long-term reliability.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', textAlign: 'left' }}>
                            From manufacturing plants and assembly lines to warehouse automation and smart factories, PLC, HMI, and Sensor programming ensures that machines communicate effectively and operate with high precision and stability.
                        </p>
                    </div>
                </div>
            </section>

            {/* AUTOMATION COMPONENTS (INTERACTIVE CARDS) SECTION */}
            <section className="premium-section-padding" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div className="premium-header premium-animate slide-up" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem', color: '#0a192f', fontWeight: 'bold' }}>Automation Components</h2>
                        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Explore our core integration services driving intelligent infrastructure operations.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

                        {/* CARD 1: PLC */}
                        <div
                            className="premium-animate slide-up"
                            style={{
                                background: '#fff',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onClick={() => navigate('/products/plc')}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}
                        >
                            <img src="/images/mitsubishi.jpg" alt="PLC Programming" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '15px', fontWeight: 'bold' }}>PLC Programming</h3>
                                <p style={{ color: '#475569', marginBottom: '25px', lineHeight: '1.6', flexGrow: 1 }}>
                                    Designing customized PLC logic to control machines, conveyors, and industrial processes flawlessly.
                                </p>
                                <span style={{ color: '#2563eb', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                                    Learn More <span style={{ marginLeft: '8px' }}>→</span>
                                </span>
                            </div>
                        </div>

                        {/* CARD 2: HMI */}
                        <div
                            className="premium-animate slide-up"
                            style={{
                                transitionDelay: '0.1s',
                                background: '#fff',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onClick={() => navigate('/products/hmi')}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}
                        >
                            <img src="/images/HMI!.jpg" alt="HMI Development" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '15px', fontWeight: 'bold' }}>HMI Development</h3>
                                <p style={{ color: '#475569', marginBottom: '25px', lineHeight: '1.6', flexGrow: 1 }}>
                                    Developing intuitive human-machine interfaces that allow operators to monitor and control systems easily.
                                </p>
                                <span style={{ color: '#2563eb', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                                    Learn More <span style={{ marginLeft: '8px' }}>→</span>
                                </span>
                            </div>
                        </div>

                        {/* CARD 3: Sensor */}
                        <div
                            className="premium-animate slide-up"
                            style={{
                                transitionDelay: '0.2s',
                                background: '#fff',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onClick={() => navigate('/products/sensor')}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}
                        >
                            <img src="/images/automation-hero.png" alt="Sensor Integration" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '15px', fontWeight: 'bold' }}>Sensor Integration</h3>
                                <p style={{ color: '#475569', marginBottom: '25px', lineHeight: '1.6', flexGrow: 1 }}>
                                    Integrating industrial sensors to detect motion, position, temperature, pressure, and operational metrics.
                                </p>
                                <span style={{ color: '#2563eb', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                                    Learn More <span style={{ marginLeft: '8px' }}>→</span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* KEY CAPABILITIES SECTION */}
            <section className="premium-section-padding premium-bg-gradient">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Key Capabilities</h2>
                        <p>Enterprise core capabilities defining our robust automated control architecture.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                        {[
                            { i: "💻", t: "Custom PLC Programming", d: "Designing customized PLC logic to control machines, conveyors, and industrial processes." },
                            { i: "🖥️", t: "HMI Interface Development", d: "Developing intuitive human-machine interfaces that allow operators to monitor and control systems easily." },
                            { i: "📡", t: "Sensor Integration", d: "Integrating industrial sensors to detect motion, position, temperature, pressure, and other operational parameters." },
                            { i: "📊", t: "Real-Time Monitoring", d: "Automation systems provide real-time data monitoring for improved operational visibility." }
                        ].map((f, idx) => (
                            <div key={idx} className="premium-card premium-animate slide-up" style={{ transitionDelay: `${0.1 * (idx % 3)}s` }}>
                                <div className="premium-gc-icon">{f.i}</div>
                                <h3 className="premium-gc-title">{f.t}</h3>
                                <p className="premium-gc-desc" style={{ fontSize: '0.95rem' }}>{f.d}</p>
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
                        <div style={{ position: 'relative', zIndex: 1 }}>
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

export default PLCProgramming;
