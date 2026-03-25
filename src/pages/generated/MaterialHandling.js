import React, { useEffect } from "react";
import "../generated/PremiumTemplate.css";
import { Link } from "react-router-dom";

const MaterialHandling = () => {
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
                        backgroundImage: "url('/images/Material.webp')", 
                        backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px', display: 'inline-block' }}>Logistics Intelligence</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff" }}>
                            Material Handling <br />
                            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automation</span>
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Advanced automation solutions for transport, sorting, and storage. Modernizing internal logistics with robotic precision and intelligent control.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                            <a href="#overview" className="premium-btn-secondary">Check Throughput</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY OVERVIEW */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Industry Overview</h2>
                        <p>Eliminating bottlenecks in internal logistics through smart, automated material handling.</p>
                    </div>
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/PEEKandPLACE.webp" alt="Material Handling Operations" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p className="lead" style={{ color: '#2563eb', fontWeight: '600' }}>
                                Efficient material flow is the lifeblood of every manufacturing and distribution center.
                            </p>
                            <p>
                                Pitech designs and implements high-performance material handling systems that bridge the gap between production and fulfillment. Our expertise spans across automated conveyor networks, robotic palletizing cells, and intelligent sorting systems.
                            </p>
                            <p>
                                By integrating Autonomous Mobile Robots (AMRs) and smart warehouse management interfaces, we help facilities reduce labor dependency, minimize shipment errors, and achieve the high-speed throughput required in today's rapid industrial landscape.
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
                        <p>Where Pitech automation optimizes internal logistics and storage.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                        {[
                            { i: "🏎️", t: "Sorting Systems", d: "High-speed cross-belt and pop-up sorters for parcel and product distribution." },
                            { i: "🏢", t: "Automated Warehousing", d: "AS/RS and intelligent shelf-picking systems for high-density storage." },
                            { i: "👁️", t: "Quality Inspection", d: "Vision-based dimensioning and barcode verification on fast-moving conveyors." },
                            { i: "🤖", t: "Robotic Palletizing", d: "End-of-line robotic cells for stacking goods onto pallets with pattern precision." },
                            { i: "📊", t: "Real-time Monitoring", d: "Warehouse-wide dashboards for monitoring conveyor speeds and system errors." }
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
                        <p>Driving operational excellence with advanced sensing and control for logistics.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { i: "🔭", t: "Traceability & SCADA", d: "Full-facility tracking of materials from receipt to dispatch with real-time SCADA visualization." },
                            { i: "📊", t: "OEE Dashboard", d: "Monitor the 'Overall Equipment Effectiveness' of your sorter and conveyor assets to reduce idling." },
                            { i: "📡", t: "Smart Sensing Solutions", d: "High-accuracy distance and presence sensors for collision avoidance and parcel tracking." },
                            { i: "👁️", t: "Vision Inspection System", d: "Six-sided barcode reading and condition inspection for high-volume logistics hubs." },
                            { i: "⚙️", t: "PLC & Factory Automation", d: "Synchronized control of conveyors, diverters, and robotic arms via robust industrial PLCs." }
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
                        <p>Overcoming the complexities of modern warehousing and logistics.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { 
                                q: "High Picking Error Rates", 
                                a: "We implement vision-guided picking and weight-sensing verification that ensures the correct item is moved every single time." 
                            },
                            { 
                                q: "Labor Shortage & Costs", 
                                a: "Pitech autonomous mobile robots (AMRs) and automated sorters handle the repetitive transport tasks, allowing workers to focus on high-value tasks." 
                            },
                            { 
                                q: "Inefficient Floor Space Use", 
                                a: "Our intelligent conveyor routing and multi-tier storage automation allow facilities to process more volume within the same footprint." 
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
                        <p>Quantifiable advantages of deploying intelligent logistics automation.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            { t: "Increased production efficiency", d: "Higher throughput and faster cycle times for picking, sorting, and palletizing operations." },
                            { t: "Reduced manual errors", d: "Eliminate shipping and picking mistakes through automated scanning and weight verification." },
                            { t: "Real-time monitoring and analytics", d: "Instant visibility into material flow bottlenecks and facility-wide equipment performance." },
                            { t: "Improved product quality", d: "Gentle robotic handling and controlled conveyor speeds prevent product and packaging damage." },
                            { t: "Better traceability and compliance", d: "Complete digital records of material movement for precise inventory management and accountability." }
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

export default MaterialHandling;
