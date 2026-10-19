import React, { useEffect } from "react";
import "./PremiumTemplate.css";
import "./RoboticInspection.css";
import { Link } from "react-router-dom";
import TypewriterText from "../../components/TypewriterText";

const RoboticInspection = () => {

    // Observer for slide animations
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

    // Parallax scroll listener for hero background
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const heroBg = document.querySelector('.premium-hero-parallax-bg');
            if (heroBg && scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="premium-page robotic-inspection-page">
            {/* HERO SECTION with Parallax Background */}
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

                {/* Dark Overlay */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up visible" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ display: 'inline-block', marginBottom: '20px' }}>
                            Robotics Innovation
                        </span>
                        <h1 className="premium-hero-title" style={{ color: "#fff", justifyContent: 'center' }}>
                            <TypewriterText text="Robotic Inspection" />
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Autonomous AI-powered optical defect detection arrays tracking at unprecedented FPS rates.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION - Slide Left Image / Slide Right Content */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Overview" />
                        </h2>
                        <p>Advanced automation solutions for smart factory quality assurance.</p>
                    </div>
                    <div className="premium-split" style={{ alignItems: 'stretch' }}>
                        <div className="premium-split-image premium-animate slide-left" style={{ height: '100%', minHeight: '460px', display: 'flex' }}>
                            <img
                                src="/images/ROOOObotic inspection.webp"
                                alt="Robotic Inspection Operations"
                                style={{
                                    borderRadius: "16px",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                    width: '100%',
                                    height: '100%',
                                    minHeight: '460px',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    display: 'block'
                                }}
                            />
                        </div>
                        <div className="premium-split-content premium-animate slide-right" style={{ transitionDelay: '0.2s' }}>
                            <p style={{ color: '#0f172a', fontSize: '1.05rem', fontWeight: '500', lineHeight: '1.7', marginBottom: '15px' }}>
                                Robotic Inspection is an advanced automation solution used in smart factories to automatically inspect products during manufacturing and assembly processes. By combining industrial robots, machine vision systems, sensors, and automation controllers, robotic inspection ensures that products meet strict quality standards.
                            </p>
                            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                                In PiTech Industry 4.0 solutions, robotic inspection systems help manufacturers detect defects, verify product dimensions, and monitor quality in real time. These systems significantly reduce manual inspection efforts while improving accuracy and consistency across high-speed production lines.
                            </p>
                            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                                Robotic inspection solutions can be integrated with PLC systems, industrial cameras, and automation platforms to enable seamless inspection, data collection, and quality monitoring across the entire manufacturing process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES SECTION - Staggered Slide-Up Cards */}
            <section className="premium-section-padding premium-bg-gradient">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Key Features" />
                        </h2>
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
                        <h2>
                            <TypewriterText text="Applications" />
                        </h2>
                        <p>Where Robotic Inspection Systems make the biggest business impact.</p>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "60px",
                        alignItems: "start",
                        position: "relative",
                        marginTop: "20px"
                    }}>
                        {/* Sticky Video: Compact size that stays pinned in place as user scrolls through the points */}
                        <div style={{
                            position: "sticky",
                            top: "100px",
                            alignSelf: "start",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                            background: "#0f172a",
                            height: "380px"
                        }}>
                            <div className="ri-video-wrapper" style={{ width: '100%', height: '100%', position: 'relative' }}>
                                <div className="ri-live-badge">
                                    <span className="ri-live-dot"></span>
                                    LIVE INSPECTION
                                </div>
                                <video
                                    src="/images/roboticesssss.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "block",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>

                        {/* Normal Clean Points: No dabba, simply scrolls naturally past the pinned video */}
                        <div style={{ padding: "0 10px" }}>
                            {[
                                {
                                    title: "Manufacturing Quality Control",
                                    desc: "Robotic inspection verifies product quality during assembly and manufacturing operations."
                                },
                                {
                                    title: "Automotive Industry",
                                    desc: "Used for inspecting automotive components, detecting surface defects, and verifying dimensional accuracy."
                                },
                                {
                                    title: "Electronics Manufacturing",
                                    desc: "Ensures correct placement of components and identifies defects in electronic assemblies."
                                },
                                {
                                    title: "Packaging Inspection",
                                    desc: "Checks product labeling, packaging alignment, and sealing quality before products leave the production line."
                                }
                            ].map((app, idx) => (
                                <div key={idx} style={{ marginBottom: idx === 3 ? "20px" : "48px" }}>
                                    <h3 style={{ fontSize: "1.28rem", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                                        {app.title}
                                    </h3>
                                    <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: "1.7", margin: 0 }}>
                                        {app.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION - Staggered Slide-Up Rows */}
            <section className="premium-section-padding premium-bg-light">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Benefits" />
                        </h2>
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
                                <div className="ri-check-circle" style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#dbeafe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>✓</div>
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
