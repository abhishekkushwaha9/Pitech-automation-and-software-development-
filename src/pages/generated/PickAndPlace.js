import React, { useEffect } from "react";
import "./PremiumTemplate.css";
import { Link } from "react-router-dom";
import TypewriterText from "../../components/TypewriterText";

const PickAndPlace = () => {

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
                        backgroundImage: "url('/images/PEEKandPLACE_hero.gif')",
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
                            <TypewriterText text="Robotic Pick and Place Solutions" />
                        </h1>
                        <p className="premium-hero-subtitle" style={{ color: "#e2e8f0", margin: '0 auto', maxWidth: '650px' }}>
                            Increase production speed, precision, and efficiency using automated material handling architecture.
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
                        <p>High-precision automated handling for modern smart factory packaging processes.</p>
                    </div>
                    <div className="premium-split" style={{ alignItems: 'center' }}>
                        <div className="premium-split-image premium-animate slide-up" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.12)", background: "#000", lineHeight: 0 }}>
                            <video
                                src="/images/picking and place .mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    borderRadius: "16px",
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    objectFit: "contain"
                                }}
                            />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <p style={{ color: '#0f172a', fontSize: '1.05rem', fontWeight: '500', lineHeight: '1.7', marginBottom: '15px' }}>
                                Robotic Pick and Place systems are widely used in modern smart factories to automate the handling of products, components, and materials during manufacturing and packaging processes. These systems use industrial robotic arms equipped with specialized grippers or vacuum tools to pick items from one location and place them accurately in another position.
                            </p>
                            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                                In PiTech Industry 4.0 solutions, robotic pick and place systems improve manufacturing efficiency, increase production speed, and reduce human error in repetitive material handling tasks. By integrating robotic systems with sensors, vision cameras, PLC controllers, and automation platforms, pick and place operations can be performed with extremely high precision and reliability.
                            </p>
                            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                                These solutions are ideal for industries where products need to be transferred, sorted, assembled, or packaged quickly and accurately. Robotic pick and place technology enables manufacturers to achieve higher throughput while maintaining consistent product quality.
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
                        <p>Enterprise core capabilities built for absolute resilience and high-velocity throughput.</p>
                    </div>
                    <div className="premium-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                        {[
                            { i: "🚀", t: "High-Speed Robotic Handling", d: "Industrial robots perform pick and place operations at high speed, allowing manufacturers to increase production output and reduce cycle times." },
                            { i: "🎯", t: "Precision Positioning", d: "Robotic arms equipped with advanced sensors and vision systems can accurately detect object positions and place them with millimeter-level precision." },
                            { i: "👁️", t: "Vision-Guided Robotics", d: "Machine vision cameras help robots identify product orientation, detect objects on conveyors, and adjust pick positions automatically." },
                            { i: "🧲", t: "Flexible Gripper Systems", d: "Different types of grippers such as vacuum grippers, mechanical grippers, or magnetic grippers can be integrated depending on the product type." },
                            { i: "🔌", t: "PLC and Automation Integration", d: "Robotic pick and place systems integrate seamlessly with PLC controllers and factory automation systems for synchronized production workflows." },
                            { i: "📊", t: "Real-Time Monitoring", d: "Operators can monitor robot performance, production speed, and system status through industrial monitoring dashboards." }
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

            {/* WORKING PROCESS SECTION */}
            <section className="premium-section-padding premium-bg-light">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Working Process" />
                        </h2>
                        <p>A streamlined sequence of automation for continuous operational success.</p>
                    </div>
                    <div className="premium-process-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
                        {[
                            { step: "01", t: "Object Detection", d: "Sensors or vision systems detect the location and orientation of the product on the conveyor or workstation." },
                            { step: "02", t: "Robotic Picking", d: "The robotic arm moves to the detected position and picks the object using a suitable gripper or suction tool." },
                            { step: "03", t: "Object Transfer", d: "The robot transfers the object to the desired location such as another conveyor, assembly station, or packaging unit." },
                            { step: "04", t: "Precise Placement", d: "The robot places the object in the exact required position, ensuring proper alignment for the next process step." },
                            { step: "05", t: "System Monitoring", d: "Automation systems continuously monitor the process and provide feedback for improved efficiency." }
                        ].map((p, idx) => (
                            <div key={idx} className="premium-card premium-animate slide-up" style={{ transitionDelay: `${0.1 * idx}s`, flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '15px' }}>{p.step}</div>
                                <h3 className="premium-gc-title">{p.t}</h3>
                                <p className="premium-gc-desc" style={{ fontSize: "0.95rem" }}>{p.d}</p>
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
                        <p>Where Pick and Place Systems make the biggest business impact.</p>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "60px",
                        alignItems: "start",
                        position: "relative",
                        marginTop: "20px"
                    }}>
                        {/* Sticky Image: Compact size that stays pinned in place as user scrolls through the points */}
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
                            <img
                                src="/images/PEEKandPLACE_hero.gif"
                                alt="Pick and Place Application Environment"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "block",
                                    objectFit: "cover"
                                }}
                            />
                        </div>

                        {/* Normal Clean Points: No dabba, simply scrolls naturally past the pinned image */}
                        <div style={{ padding: "0 10px" }}>
                            {[
                                {
                                    title: "Manufacturing Assembly Lines",
                                    desc: "Robotic pick and place systems are used to move components between different stages of assembly processes."
                                },
                                {
                                    title: "Packaging and Sorting",
                                    desc: "Products can be automatically sorted and placed into packaging boxes or trays."
                                },
                                {
                                    title: "Electronics Manufacturing",
                                    desc: "Used for placing electronic components onto circuit boards with high precision."
                                },
                                {
                                    title: "Automotive Component Handling",
                                    desc: "Robots transfer engine parts, mechanical components, and assemblies within production lines."
                                },
                                {
                                    title: "Food and Beverage Industry",
                                    desc: "Pick and place robots help handle packaged food items quickly while maintaining hygiene and consistency."
                                },
                                {
                                    title: "Warehouse Automation",
                                    desc: "Robotic systems assist in sorting and placing items in logistics and warehouse operations."
                                }
                            ].map((app, idx) => (
                                <div key={idx} style={{ marginBottom: idx === 5 ? "20px" : "48px" }}>
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
            <section className="premium-section-padding premium-bg-gradient">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>
                            <TypewriterText text="Benefits" />
                        </h2>
                        <p>Core advantages of deploying our robust robotic architecture.</p>
                    </div>
                    <div className="premium-benefits-grid">
                        {[
                            "Increased production speed and efficiency",
                            "Reduced manual labor and repetitive work",
                            "Higher accuracy and consistency in product placement",
                            "Improved workplace safety",
                            "Better integration with smart factory systems",
                            "Reduced operational errors and product damage"
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

export default PickAndPlace;
