import React, { useEffect } from "react";
import "../generated/PremiumTemplate.css";
import { Link } from "react-router-dom";

const GlassIndustry = () => {
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
                        backgroundImage: "url('/images/Ditial andon.jpg')", 
                        backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px', display: 'inline-block' }}>Precision Glass Automation</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff" }}>
                            Glass Industry <br />
                            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automation</span>
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Innovative automation for float glass, bottle production, and specialty glass manufacturing. Enhancing precision, safety, and yield in extreme environments.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                            <a href="#overview" className="premium-btn-secondary">View Innovation</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRY OVERVIEW */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Industry Overview</h2>
                        <p>Optimizing delicate glass production processes with high-precision digital controls.</p>
                    </div>
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                            <img src="/images/Hi-Tech.png" alt="Glass Industry Operations" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p className="lead" style={{ color: '#2563eb', fontWeight: '600' }}>
                                Fragility, high heat, and extreme speed define the challenges of glass manufacturing.
                            </p>
                            <p>
                                At Pitech, we provide specialized automation for the glass sector, focusing on the critical synchronization of Lehr ovens, automated cutting tables, and quality inspection stations. Our systems ensure that thermal profiles are maintained with perfect accuracy to prevent stress fractures.
                            </p>
                            <p>
                                By integrating ultra-high-speed vision systems and non-contact sensors, we enable manufacturers to detect microscopic inclusions and surface scratches at production speeds that exceed human capabilities, ensuring only perfect glass reaches the warehouse.
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
                        <p>Where Pitech automation drives quality in glass production.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                        {[
                            { i: "🔥", t: "Lehr Control", d: "Sophisticated PID control of annealing ovens to ensure perfect stress-free glass formation." },
                            { i: "📐", t: "Cutting Tables", d: "Automated, high-precision cutting and optimization of float glass for maximum yield." },
                            { i: "👁️", t: "Quality Inspection", d: "Vision systems for detection of bubbles, stones, and surface defects in high-volume production." },
                            { i: "📦", t: "Staking & Handling", d: "Robotic systems with vacuum suction for safe handling and palletizing of fragile glass sheets." },
                            { i: "📊", t: "Real-time Monitoring", d: "Continuous tracking of thermal profiles and production speed to ensure process stability." }
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
                        <p>Reliable Industry 4.0 infrastructure for a transparent and efficient factory floor.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { i: "🔭", t: "Traceability & SCADA", d: "Batch tracking of raw materials and full history of thermal profiles for every sheet or bottle produced." },
                            { i: "📊", t: "OEE Dashboard", d: "Real-time analysis of furnace efficiency and line throughput to reduce energy waste and maximize output." },
                            { i: "📡", t: "Smart Sensing Solutions", d: "Non-contact infrared sensors for precise temperature measurement and distance sensors for glass positioning." },
                            { i: "👁️", t: "Vision Inspection System", d: "Microscopic defect detection and dimensional verification for automotive and architectural glass." },
                            { i: "⚙️", t: "PLC & Factory Automation", d: "Integrated control of conveyors, ovens, and cutting machines with millisecond synchronization." }
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
                        <p>Navigating the extreme heat and fragility of glass manufacturing.</p>
                    </div>
                    <div className="premium-features-grid">
                        {[
                            { 
                                q: "Fragility & Scrap Rates", 
                                a: "Our robotic handling systems and precision vibration-dampened conveyors minimize physical impact, significantly reducing breakage compared to manual labor." 
                            },
                            { 
                                q: "Inconsistent Thermal Profiles", 
                                a: "Pitech implements high-accuracy temperature zones with rapid-response PLC feedback, ensuring glass is annealed perfectly every time." 
                            },
                            { 
                                q: "Invisible Defects", 
                                a: "We utilize multi-angle vision inspection with specialized lighting that highlights bubbles and inclusions invisible to the human eye on a moving line." 
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
                        <p>Enabling a smarter and more profitable glass manufacturing environment.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            { t: "Increased production efficiency", d: "Lower energy consumption per unit through optimized furnace and motor control systems." },
                            { t: "Reduced manual errors", d: "Automated handling and cutting eliminates human-induced fractures and measurement mistakes." },
                            { t: "Real-time monitoring and analytics", d: "Identify process drift instantly and correct thermal parameters before quality is compromised." },
                            { t: "Improved product quality", d: "Vision systems ensure that only zero-defect glass makes it to the final packaging stage." },
                            { t: "Better traceability and compliance", d: "Continuous logging of process data ensures architectural and automotive glass meet all safety standards." }
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

export default GlassIndustry;
