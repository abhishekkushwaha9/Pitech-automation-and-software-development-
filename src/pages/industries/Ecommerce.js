import React, { useEffect } from "react";
import "../generated/PremiumTemplate.css";
import { Link } from "react-router-dom";

const EcommerceAutomation = () => {
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
                        backgroundImage: "url('/images/E_commerce.jpg')", 
                        backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px', display: 'inline-block' }}>Speed & Accuracy</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff" }}>
                            E-Commerce <br />
                            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Warehouse Automation</span>
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Intelligent warehouse solutions for ultra-fast sorting, reliable traceability, and optimized fulfillment centers to drive global E-commerce success.
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
                        <p>Modernizing logistics with high-speed automated sorting and fulfillment systems.</p>
                    </div>
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/E-commerce.gif" alt="Logistics Operations" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p className="lead" style={{ color: '#2563eb', fontWeight: '600' }}>
                                Speed of delivery and accuracy of picking are the key differentiators in E-commerce.
                            </p>
                            <p>
                                Pitech specializes in the automation of large-scale fulfillment centers, implementing high-speed sorting systems, automated storage and retrieval (AS/RS), and intelligent conveyor networks. Our solutions are designed to handle millions of parcels with minimal human intervention.
                            </p>
                            <p>
                                By integrating advanced vision systems for address reading and weight sensing for parcel verification, we help logistics providers reduce error rates, lower operational costs per unit, and achieve throughput levels required for peak shopping seasons.
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
                        <p>Enabling hyper-speed logistics with integrated warehouse automation.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                        {[
                            { i: "🏎️", t: "Sorting Systems", d: "High-speed cross-belt and shoe sorters for high-volume parcel distribution." },
                            { i: "📦", t: "Fulfillment Tech", d: "Automated pick-to-light and conveyor networks for rapid order assembly." },
                            { i: "👁️", t: "Quality Inspection", d: "Vision-based dimensioning and barcode reading from all six sides of a parcel." },
                            { i: "🤖", t: "Warehouse Automation", d: "Integration of Autonomous Mobile Robots (AMRs) for unit load movement." },
                            { i: "📊", t: "Real-time Monitoring", d: "Throughput monitoring dashboards for live fulfillment center visibility." }
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
                        <p>Modernizing fulfillment with advanced sensing, tracking, and robotic systems.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { i: "📦", t: "Traceability & SCADA", d: "Real-time package tracking and sorting system integration with warehouse management systems (WMS) for total parcel visibility." },
                            { i: "📊", t: "OEE Dashboard", d: "Monitor sorting machine performance and conveyor availability to ensure seamless order processing and zero bottlenecks." },
                            { i: "📡", t: "Smart Sensing Solutions", d: "High-speed dimensioning sensors, static/dynamic weight checks, and parcel detection for ultra-fast automated sorting lines." },
                            { i: "👁️", t: "Vision Inspection System", d: "OCR for address reading, barcode scanning from multiple angles, and parcel condition inspection for damages." },
                            { i: "⚙️", t: "PLC & Factory Automation", d: "Control systems for high-speed belt conveyors, cross-belt sorters, and integration with Autonomous Mobile Robots (AMRs)." }
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
                        <p>Optimizing logistics for the demands of modern digital commerce.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { 
                                q: "Peak Season Bottlenecks", 
                                a: "Our high-speed sorting algorithms intelligently balance conveyor loads to prevent parcel pile-ups during massive sales events." 
                            },
                            { 
                                q: "Picking & Sorting Errors", 
                                a: "Pitech vision-based barcode and OCR readers achieve 99.9% accuracy, significantly reducing returns due to shipping errors." 
                            },
                            { 
                                q: "Return Management Complexity", 
                                a: "We implement specialized reverse-logistics automation that identifies, sorts, and re-bins returned goods in record time." 
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
                        <p>Driving throughput and accuracy in modern distribution hubs.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            { t: "Increased production efficiency", d: "Automated sorting and picking systems reduce order cycle times and fulfillment costs dramatically." },
                            { t: "Reduced manual errors", d: "High-accuracy vision systems ensure correct labeling and sorting, significantly reducing return rates." },
                            { t: "Real-time monitoring and analytics", d: "Continuous oversight of conveyor health, sorter status, and parcel flow to prevent logjams." },
                            { t: "Improved product quality", d: "Precise handling and condition inspection systems prevent parcel damage during high-speed transit." },
                            { t: "Better traceability and compliance", d: "Real-time package tracking and WMS integration ensure total parcel visibility and audit trails." }
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

export default EcommerceAutomation;
