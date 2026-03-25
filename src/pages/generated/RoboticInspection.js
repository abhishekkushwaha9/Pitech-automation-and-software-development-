import React, { useEffect } from "react";
import "./PremiumTemplate.css";
import { Link } from "react-router-dom";

const RoboticInspection = () => {
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

    // Additional scroll listener for parallax with iframe background
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const heroBg = document.querySelector('.premium-hero-parallax-bg');
            if (heroBg) {
                // Adjust translateY for the parallax effect
                heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="premium-page">
            {/* HERO SECTION with Parallax Iframe */}
            <section className="premium-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
                <img
                    alt="Hero Parallax Background"
                    className="premium-hero-parallax-bg"
                    src="/images/robotics_inspection.webp"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                />

                {/* Dark Overlay to make text legible over background */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ display: 'inline-block', marginBottom: '20px' }}>Robotics Innovation</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff", justifyContent: 'center' }}>
                            Robotic Inspection
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Autonomous AI-powered optical defect detection arrays tracking at unprecedented FPS rates.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                            <a href="#overview" className="premium-btn-secondary">View Architecture</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Overview</h2>
                        <p>Advanced automation solutions for smart factory quality assurance.</p>
                    </div>
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/images/robotics_inspection.webp" alt="Robotic Inspection Operations" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', height: 'auto', objectFit: 'contain' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p className="lead" style={{ color: '#0f172a' }}>
                                Robotic Inspection is an advanced automation solution used in smart factories to automatically inspect products during manufacturing and assembly processes. By combining industrial robots, machine vision systems, sensors, and automation controllers, robotic inspection ensures that products meet strict quality standards.
                            </p>
                            <p style={{ color: '#475569', marginBottom: '15px' }}>
                                In PiTech Industry 4.0 solutions, robotic inspection systems help manufacturers detect defects, verify product dimensions, and monitor quality in real time. These systems significantly reduce manual inspection efforts while improving accuracy and consistency across high-speed production lines.
                            </p>
                            <p style={{ color: '#475569' }}>
                                Robotic inspection solutions can be integrated with PLC systems, industrial cameras, and automation platforms to enable seamless inspection, data collection, and quality monitoring across the entire manufacturing process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES SECTION */}
            <section className="premium-section-padding premium-bg-gradient">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Key Features</h2>
                        <p>Enterprise core capabilities built for absolute resilience and high-velocity inspection.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                        {[
                            { i: "✔️", t: "Automated Quality Inspection", d: "Robotic systems automatically inspect products for defects, alignment issues, and quality deviations during production." },
                            { i: "📷", t: "High Precision Vision Systems", d: "Industrial cameras and vision sensors capture high-resolution images to perform accurate inspection and measurement." },
                            { i: "⚡", t: "Real-Time Defect Detection", d: "Robotic inspection systems detect defects instantly and notify operators or automation systems for corrective action." },
                            { i: "🔌", t: "Automation System Integration", d: "The system integrates with PLCs and factory monitoring platforms to provide real-time inspection data." },
                            { i: "🚀", t: "High-Speed Inspection", d: "Robotic inspection operates efficiently in fast-moving production environments without slowing down manufacturing processes." }
                        ].map((f, idx) => (
                            <div key={idx} className="premium-card premium-animate slide-up" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div className="premium-gc-icon">{f.i}</div>
                                <h3 className="premium-gc-title">{f.t}</h3>
                                <p className="premium-gc-desc" style={{ fontSize: "0.95rem" }}>{f.d}</p>
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
                        <p>Where Robotic Inspection Systems make the biggest business impact.</p>
                    </div>
                    <div className="premium-split" style={{ flexDirection: "row-reverse", marginTop: '40px' }}>
                        <div className="premium-split-image premium-animate slide-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/images/robotics_inspection.webp" alt="Robotic Inspection Applications" style={{ borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: '100%', height: 'auto', objectFit: 'contain' }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s', padding: '0 40px 0 0' }}>
                            <div style={{ marginBottom: "25px" }}>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 'bold', color: "#0f172a", marginBottom: "8px" }}>Manufacturing Quality Control</h3>
                                <p style={{ color: "#475569" }}>Robotic inspection verifies product quality during assembly and manufacturing operations.</p>
                            </div>
                            <div style={{ marginBottom: "25px" }}>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 'bold', color: "#0f172a", marginBottom: "8px" }}>Automotive Industry</h3>
                                <p style={{ color: "#475569" }}>Used for inspecting automotive components, detecting surface defects, and verifying dimensional accuracy.</p>
                            </div>
                            <div style={{ marginBottom: "25px" }}>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 'bold', color: "#0f172a", marginBottom: "8px" }}>Electronics Manufacturing</h3>
                                <p style={{ color: "#475569" }}>Ensures correct placement of components and identifies defects in electronic assemblies.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 'bold', color: "#0f172a", marginBottom: "8px" }}>Packaging Inspection</h3>
                                <p style={{ color: "#475569" }}>Checks product labeling, packaging alignment, and sealing quality before products leave the production line.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="premium-section-padding premium-bg-light">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Benefits</h2>
                        <p>Core advantages of deploying our robust robotic inspection architecture.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            "Improved product quality and consistency",
                            "Reduced human inspection errors",
                            "Faster inspection processes",
                            "Increased production efficiency",
                            "Real-time quality monitoring"
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

export default RoboticInspection;
