import React, { useEffect } from "react";
import "./PremiumTemplate.css";
import { Link } from "react-router-dom";
import TypewriterText from "../../components/TypewriterText";

const RoboticsIntegration = () => {

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

    // Additional scroll listener for parallax background
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
            {/* HERO SECTION with Parallax */}
            <section className="premium-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
                {/* Parallax Background Layer */}
                <div
                    className="premium-hero-parallax-bg"
                    style={{
                        position: 'absolute',
                        top: '-15%',
                        left: 0,
                        width: '100%',
                        height: '130%',
                        backgroundImage: "url('/images/automation tools integration1.gif')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: 0,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>

                {/* Dark Overlay to make text legible over background */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: "rgba(10, 25, 47, 0.75)", zIndex: 1 }}></div>

                <div className="container premium-hero-container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="premium-animate slide-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="premium-chip" style={{ display: 'inline-block', marginBottom: '20px' }}>Robotics Innovation</span>
                        <h1 className="premium-hero-title" style={{ color: "#fff", justifyContent: 'center' }}>
                            <TypewriterText text="Automation Tools Integration" />
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Seamless communication between robots, PLC systems, sensors, and intelligent controllers.
                        </p>
                        <div style={{ marginTop: "40px", display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <Link to="/contact" className="premium-btn-primary">Explore Solutions</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Overview" />
                        </h2>
                        <p>Advanced integration of robotic tools, sensors, and controllers for industrial ops.</p>
                    </div>
                    <div className="premium-split" style={{ alignItems: 'center' }}>
                        <div className="premium-split-image premium-animate slide-up" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}>
                            <img src="/images/1763185884948.jpg" alt="Robotic Integration Operations" style={{ borderRadius: "16px", width: "100%", height: "500px", objectFit: "cover", display: "block" }} />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p style={{ color: '#0f172a', fontSize: '1.05rem', fontWeight: '500', lineHeight: '1.7', marginBottom: '15px' }}>
                                Automation Tools Integration refers to the process of integrating robotic tools, sensors, controllers, and automation systems into a unified robotic solution for industrial operations. In modern smart factories, robots perform multiple tasks such as assembly, inspection, welding, material handling, and packaging using specialized tools.
                            </p>
                            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                                In PiTech Industry 4.0 solutions, robotic tool integration enables robots to automatically switch between different tools or end-effectors depending on the production requirement. This flexibility allows manufacturers to improve productivity, reduce manual intervention, and optimize manufacturing processes.
                            </p>
                            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                                Automation tools integration ensures seamless communication between robots, PLC systems, sensors, vision systems, and industrial controllers, enabling intelligent automation and efficient production workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES SECTION */}
            <section className="premium-section-padding premium-bg-gradient">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Key Features" />
                        </h2>
                        <p>Enterprise core capabilities built for flexible, real-time advanced integration.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                        {[
                            { i: "🦾", t: "Multi-Tool Robotic Systems", d: "Robots can automatically change tools such as grippers, welders, screwdrivers, or inspection cameras depending on the task." },
                            { i: "🎛️", t: "Seamless PLC Integration", d: "Automation tools are integrated with PLC controllers for synchronized robotic operations and real-time machine control." },
                            { i: "📡", t: "Smart Sensor Integration", d: "Industrial sensors and vision systems help robots detect objects, verify positions, and ensure accurate operations." },
                            { i: "🔄", t: "Flexible Manufacturing", d: "Robotic tool integration allows production lines to adapt quickly to different product types and manufacturing requirements." },
                            { i: "📈", t: "Real-Time Monitoring", d: "Automation systems provide real-time monitoring of robotic tasks, tool status, and production performance." }
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
                        <p>Where Robotics and Automation Tool Integration transforms enterprise production.</p>
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
                            <video
                                src="/images/AUTO intergration.mp4"
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

                        {/* Normal Clean Points: No dabba, simply scrolls naturally past the pinned video */}
                        <div style={{ padding: "0 10px" }}>
                            {[
                                {
                                    title: "Assembly Automation",
                                    desc: "Robots equipped with different tools perform assembly operations with high precision and speed."
                                },
                                {
                                    title: "Material Handling",
                                    desc: "Integrated robotic grippers and handling tools allow automated movement of products and components."
                                },
                                {
                                    title: "Robotic Welding and Processing",
                                    desc: "Specialized robotic tools perform welding, cutting, and machining tasks in manufacturing environments."
                                },
                                {
                                    title: "Quality Inspection Systems",
                                    desc: "Robots integrated with vision cameras and sensors inspect products during the production process."
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

            {/* BENEFITS SECTION */}
            <section className="premium-section-padding premium-bg-light">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Benefits" />
                        </h2>
                        <p>Key impact metrics of adopting synchronized automation architecture.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            "Increased production flexibility",
                            "Faster automation processes",
                            "Reduced manual intervention",
                            "Improved operational efficiency",
                            "Better integration with Industry 4.0 systems"
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

export default RoboticsIntegration;
