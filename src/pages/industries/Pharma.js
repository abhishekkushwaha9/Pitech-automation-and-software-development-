import React, { useEffect } from "react";
import "../generated/PremiumTemplate.css";
import { Link } from "react-router-dom";

const PharmaIndustry = () => {
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
                        backgroundImage: "url('/images/pharma.png')", 
                        backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px', display: 'inline-block' }}>Compliance & Precision</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff" }}>
                            Pharma Industry <br />
                            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automation</span>
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Advanced automation solutions for pharmaceutical manufacturing, ensuring 21 CFR Part 11 compliance, absolute traceability, and high-precision production.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                            <a href="#overview" className="premium-btn-secondary">View Compliance</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY OVERVIEW */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Industry Overview</h2>
                        <p>Overcoming pharmaceutical manufacturing complexities with high-integrity automation.</p>
                    </div>
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/pharmaa.jpg" alt="Pharma Industry Operations" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p className="lead" style={{ color: '#2563eb', fontWeight: '600' }}>
                                Regulatory compliance and data integrity are the backbones of pharmaceutical production.
                            </p>
                            <p>
                                Pitech specializes in delivering validated automation systems that adhere to global standards like GAMP 5 and FDA regulations. Our solutions handle everything from automated tablet compression and liquid filling to complex serialization and packaging lines.
                            </p>
                            <p>
                                By integrating secure SCADA backends with high-definition vision systems and environmental sensors, we ensure that every batch is produced under perfect conditions with a complete, tamper-proof audit trail for regulatory submission.
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
                        <p>High-precision automation for sensitive pharmaceutical processes.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                        {[
                            { i: "💊", t: "Production Lines", d: "Validated automation for tablet compression, capsule filling, and liquid processing." },
                            { i: "📦", t: "Packaging Systems", d: "Secondary packaging automation with integrated serialization and labeling." },
                            { i: "🔍", t: "Quality Inspection", d: "Vision-based inspection for vial caps, tablet defects, and label accuracy." },
                            { i: "🏛️", t: "Warehouse Automation", d: "Automated storage for raw materials and finished goods with strict batch control." },
                            { i: "🌡️", t: "Real-time Monitoring", d: "Cleanroom environment monitoring for temperature, humidity, and particle counts." }
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
                        <p>Driving digital transformation in life sciences with reliable automation and tracking.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { i: "🔬", t: "Traceability & SCADA", d: "Secure batch genealogy and serialization solutions to prevent counterfeiting and meet strict regulatory requirements." },
                            { i: "🛡️", t: "OEE Dashboard", d: "Monitor critical production parameters in real-time to ensure maximum machine availability and pharmaceutical grade quality." },
                            { i: "🌡️", t: "Smart Sensing Solutions", d: "High-accuracy environmental monitoring for humidity, temperature, and pressure in cleanroom environments." },
                            { i: "💊", t: "Vision Inspection System", d: "Surface defect detection for tablets, vial cap inspection, and precise label/barcode verification." },
                            { i: "⚙️", t: "PLC & Factory Automation", d: "Validated control systems for packaging lines, tablet presses, and liquid filling machines with audit trail capabilities." }
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
                        <p>Solving the toughest compliance and precision hurdles in Pharma.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { 
                                q: "21 CFR Part 11 Compliance", 
                                a: "Our SCADA systems are built with multi-level authentication, encrypted audit trails, and electronic signatures to ensure total data integrity." 
                            },
                            { 
                                q: "Risk of Cross-Contamination", 
                                a: "We implement automated cleaning-in-place (CIP) controls and non-contact sensing to maintain sterile production environments." 
                            },
                            { 
                                q: "Product Serialization Requirements", 
                                a: "Pitech delivers integrated track-and-trace modules that generate and verify unique identifiers from the primary pack to the pallet." 
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
                        <p>Empowering pharmaceutical manufacturers with data-integrity and operational efficiency.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            { t: "Increased production efficiency", d: "Minimize downtime and human error through automated, validated production workflows and digital logbooks." },
                            { t: "Reduced manual errors", d: "Eliminate transcriptive errors with automated data logging directly from the production floor." },
                            { t: "Real-time monitoring and analytics", d: "Critical alerts and remote monitoring of production lines to ensure zero deviations from the validated process." },
                            { t: "Improved product quality", d: "Automated inspection and multi-point sensing guarantee the highest levels of product purity and safety." },
                            { t: "Better traceability and compliance", d: "Comprehensive audit trails and analytics for regulatory compliance, root cause analysis, and yield optimization." }
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

export default PharmaIndustry;
