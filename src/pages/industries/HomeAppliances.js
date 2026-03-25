import React, { useEffect } from "react";
import "../generated/PremiumTemplate.css";
import { Link } from "react-router-dom";

const HomeAppliances = () => {
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
                        backgroundImage: "url('/images/home_appliances.jpg')", 
                        backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px', display: 'inline-block' }}>Assembly Line Mastery</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff" }}>
                            Home Appliances <br />
                            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automation</span>
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Precision automation for high-volume consumer electronic and appliance manufacturing. Scaling production from assembly to final quality inspection with robotic accuracy.
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
                        <p>Scaling volume and maintaining aesthetic quality through smart appliance automation.</p>
                    </div>
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/home-appliaances.jpg" alt="Home Appliances Operations" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p className="lead" style={{ color: '#2563eb', fontWeight: '600' }}>
                                Consumer demand for home appliances requires high-speed, flexible, and zero-defect assembly.
                            </p>
                            <p>
                                Pitech designs and implements comprehensive assembly line automation for white goods like air conditioners, refrigerators, and washing machines. Our systems focus on minimizing human interaction in critical assembly steps to ensure structural integrity and perfect finish.
                            </p>
                            <p>
                                By utilizing high-speed robotic pick-and-place, automated end-of-line testing rigs, and synchronized materials handling, we help OEMs achieve massive scale while keeping a close eye on individual unit quality and production cost metrics.
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
                        <p>Where Pitech automation drives throughput in appliance manufacturing.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                        {[
                            { i: "🦾", t: "Production Lines", d: "High-speed assembly lines for white goods with synchronized component feeding." },
                            { i: "📦", t: "Packaging Systems", d: "End-of-line packaging with integrated weighing and barcode labeling." },
                            { i: "👁️", t: "Quality Inspection", d: "Vision-based cosmetic inspection for scratches, gaps, and component alignment." },
                            { i: "🏢", t: "Warehouse Automation", d: "Automated palletizing and conveyor systems for efficient parts and finished goods movement." },
                            { i: "📊", t: "Real-time Monitoring", d: "Line-side dashboards showing production targets vs actuals for rapid response." }
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
                        <p>Driving operational excellence in appliance assembly lines world-wide.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { i: "🔍", t: "Traceability & SCADA", d: "Track critical components like compressors and motors throughout the assembly process for complete genealogy and warranty tracking." },
                            { i: "📊", t: "OEE Dashboard", d: "Optimize production cycle times and identify bottlenecks in assembly and testing stations in real-time." },
                            { i: "📡", t: "Smart Sensing Solutions", d: "Pneumatic and electronic sensors for component detection, alignment, and force monitoring during assembly." },
                            { i: "👁️", t: "Vision Inspection System", d: "Cosmetic defect detection, logo placement verification, and gap/flushness measurement during final assembly." },
                            { i: "⚙️", t: "PLC & Factory Automation", d: "Automated end-of-line testing rigs and conveyor synchronization for air conditioners, refrigerators, and washing machines." }
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
                        <p>Addressing the complexities of high-volume consumer good assembly.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { 
                                q: "High Model Variability", 
                                a: "Our flexible PLC programming and smart conveyors allow for rapid changeovers between different appliance models on the same line." 
                            },
                            { 
                                q: "Aesthetic & Surface Quality", 
                                a: "Pitech vision systems detect microscopic surface defects and misalignments that human inspectors might miss during high-speed assembly." 
                            },
                            { 
                                q: "Complex Testing Requirements", 
                                a: "We build integrated end-of-line testing rigs that perform automated leak tests, electrical safety checks, and functional audits simultaneously." 
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
                        <p>Scaling output while maintaining rigorous consumer quality standards.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            { t: "Increased production efficiency", d: "Achieve higher throughput with synchronized robotic assembly and smart materials handling systems." },
                            { t: "Reduced manual errors", d: "Minimize assembly defects and rework via automated component placement and torque control." },
                            { t: "Real-time monitoring and analytics", d: "Instant visibility into line status to prevent unplanned downtime and ensure continuous flow." },
                            { t: "Improved product quality", d: "Integrated testing and vision inspection ensure zero-defect shipment of finished goods to consumers." },
                            { t: "Better traceability and compliance", d: "Full genealogy of critical parts ensures faultless warranty tracking and recall management." }
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

export default HomeAppliances;
