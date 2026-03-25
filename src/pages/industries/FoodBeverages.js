import React, { useEffect } from "react";
import "../generated/PremiumTemplate.css";
import { Link } from "react-router-dom";

const FoodBeverages = () => {
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
                        backgroundImage: "url('/images/Food and beverage.jpg')", 
                        backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px', display: 'inline-block' }}>Industrial Excellence</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff" }}>
                            Food & Beverages <br />
                            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automation</span>
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Pitech delivers advanced automation solutions to ensure food safety, optimize production yield, and maintain strict quality standards across beverage and food processing plants.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                            <a href="#overview" className="premium-btn-secondary">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY OVERVIEW */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Industry Overview</h2>
                        <p>How Pitech automation transforms food and beverage production processes.</p>
                    </div>
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/FOOD and beveraee.jpg" alt="F&B Industry Operations" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p className="lead" style={{ color: '#2563eb', fontWeight: '600' }}>
                                Maintaining hygiene, consistency, and traceability is critical in F&B manufacturing.
                            </p>
                            <p>
                                At Pitech, we provide integrated automation services that help manufacturers control every aspect of production. From raw material intake to automated mixing, bottling, and packaging, our solutions ensure that quality standards like HACCP and ISO are met consistently.
                            </p>
                            <p>
                                By implementing smart sensors, high-speed vision systems, and robust PLC controls, we enable factories to reduce waste, improve energy efficiency, and gain total visibility into their manufacturing performance through real-time data analytics.
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
                        <p>Where Pitech automation adds value in Food & Beverage facilities.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                        {[
                            { i: "🏭", t: "Production Lines", d: "Automated bottling, canning, and food processing lines for high-speed operation." },
                            { i: "📦", t: "Packaging Systems", d: "Smart conveyor systems and robotic palletizing for efficient end-of-line packaging." },
                            { i: "🔍", t: "Quality Inspection", d: "High-resolution vision systems for checking labels, fill levels, and bottle defects." },
                            { i: "🚛", t: "Warehouse Automation", d: "Autonomous transport and sorting systems for efficient product distribution." },
                            { i: "📊", t: "Real-time Monitoring", d: "Continuous tracking of production parameters to ensure consistency and quality." }
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
                        <p>Specialized Industry 4.0 solutions designed for modern F&B manufacturers.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { i: "🔍", t: "Traceability & SCADA", d: "End-to-end batch tracking from raw material intake to final packaging, ensuring compliance with global food safety regulations." },
                            { i: "📊", t: "OEE Dashboard", d: "Real-time visibility into machine performance, availability, and quality to minimize micro-stops and optimize throughput." },
                            { i: "📡", t: "Smart Sensing Solutions", d: "High-precision sensors for temperature, pressure, and level monitoring to ensure consistent product taste and quality." },
                            { i: "👁️", t: "Vision Inspection System", d: "Automated optical inspection for label verification, bottle fill-level checks, and defect detection in real-time." },
                            { i: "⚙️", t: "PLC & Factory Automation", d: "Centralized control systems for seamless synchronization of conveyors, mixers, and bottling lines for maximum efficiency." }
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
                        <p>How Pitech addresses the most pressing issues in F&B manufacturing.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { 
                                q: "Strict Hygiene & Safety Standards", 
                                a: "We implement food-grade sensors and stainless-steel automation components that withstand rigorous washdown procedures while maintaining accuracy." 
                            },
                            { 
                                q: "Batch Consistency Issues", 
                                a: "Our SCADA systems and recipe management modules ensure every batch follows exact specifications, reducing product variation and waste." 
                            },
                            { 
                                q: "Complex Regulatory Compliance", 
                                a: "Pitech provides automated batch genealogy and digital logbooks that make auditing and recall management simple and transparent." 
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
                        <p>Driving operational excellence and compliance through data-driven automation.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            { t: "Increased production efficiency", d: "Automated processes reduce manual intervention and speed up production cycles effectively." },
                            { t: "Reduced manual errors", d: "Eliminate human mistakes in mixing, labeling, and sorting via robotic and PLC precision." },
                            { t: "Real-time monitoring and analytics", d: "Get instant alerts and data insights for proactive decision-making on the shop floor." },
                            { t: "Improved product quality", d: "Consistent monitoring and vision systems ensure every product meets safety and taste standards." },
                            { t: "Better traceability and compliance", d: "End-to-end digital tracking ensures faultless traceability for regulatory compliance." }
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

export default FoodBeverages;
