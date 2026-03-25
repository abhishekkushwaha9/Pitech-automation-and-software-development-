import React from "react";
import "./WhyPiTech.css";
import { Link } from "react-router-dom";

const WhyPiTech = () => {
    const reasons = [
        {
            id: 1,
            icon: "🎯",
            title: "120+ Successful Implementations",
            description: "Over a decade of experience in industrial automation and digital transformation.",
            color: "#3B82F6"
        },
        {
            id: 2,
            icon: "🤝",
            title: "100+ Happy Clients",
            description: "Trusted by leading manufacturers across India for automation solutions.",
            color: "#10B981"
        },
        {
            id: 3,
            icon: "⚡",
            title: "150+ Projects Delivered",
            description: "Successful implementation of Industry 4.0 solutions across sectors.",
            color: "#8B5CF6"
        },
        {
            id: 4,
            icon: "🔧",
            title: "Expert Team",
            description: "25+ skilled professionals dedicated to innovation and excellence.",
            color: "#F59E0B"
        },
        {
            id: 5,
            icon: "🌐",
            title: "Pan-India Presence",
            description: "Serving clients across India with local support and global standards.",
            color: "#EC4899"
        },
        {
            id: 6,
            icon: "🏆",
            title: "Award-Winning Solutions",
            description: "Recognized for innovation in industrial automation and IIoT.",
            color: "#6366F1"
        }
    ];

    const features = [
        {
            icon: "🔌",
            title: "End-to-End Integration",
            desc: "Complete automation solutions from consulting to implementation."
        },
        {
            icon: "📊",
            title: "Data-Driven Insights",
            desc: "Real-time analytics for better decision making."
        },
        {
            icon: "⚙️",
            title: "Custom Development",
            desc: "Tailored solutions for your unique manufacturing needs."
        },
        {
            icon: "🛡️",
            title: "Robust Security",
            desc: "Enterprise-grade security for your critical infrastructure."
        },
        {
            icon: "🚀",
            title: "Rapid Deployment",
            desc: "Quick implementation with minimal downtime."
        },
        {
            icon: "💡",
            title: "Innovation Focus",
            desc: "Always at the forefront of Industry 4.0 technologies."
        }
    ];

    // Mission commitments based on the document
    const missionCommitments = [
        {
            icon: "⚙️",
            title: "ENGINEER",
            description: "Design and deliver precision-engineered automation and IoT systems that solve real industrial challenges",
            color: "#3B82F6"
        },
        {
            icon: "📊",
            title: "DIGITIZE",
            description: "Enable factories and facilities to move from paper-based, reactive operations to data-driven, proactive management",
            color: "#8B5CF6"
        },
        {
            icon: "📈",
            title: "GROW",
            description: "Create measurable, sustainable improvements in productivity, efficiency, quality, and profitability for every customer",
            color: "#10B981"
        }
    ];

    return (
        <div className="why-pitech-container">
            {/* Hero Section with Background Image */}
            <section
                className="why-hero-section"
                style={{
                    backgroundImage: `linear-gradient(rgba(78, 78, 78, 0.6), rgba(0, 0, 0, 0.5)), url('/images/pitech_automation_and_software_solutions_cover.jpg')`,
                    backgroundSize: '100% auto',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                }}
            >
                <div className="why-hero-overlay"></div>
                <div className="why-hero-content">

                    <h1 className="why-hero-title">
                        Why <span className="why-hero-highlight">PiTech Automation?</span>
                    </h1>
                    <p className="why-hero-text">
                        We don't just automate processes — we transform industries.
                        Discover what makes us the preferred partner for Industry 4.0 solutions.
                    </p>
                </div>
                <div className="why-hero-graphic">
                    <div className="why-graphic-circle"></div>
                    <div className="why-graphic-circle2"></div>
                </div>
            </section>

            {/* Who We Are Section - Without Highlight Box */}
            <section className="why-who-we-are-section">
                <div className="why-section-header">
                    <h2 className="why-section-title">Who We Are</h2>
                    <p className="why-section-subtitle">Your Trusted Partner in Industrial Automation</p>
                </div>

                <div className="why-who-we-are-content">
                    <div className="why-who-we-are-text-full">
                        <p className="why-who-we-are-paragraph">
                            <strong>Pitech Automation and Software Solutions Pvt Ltd</strong> is a specialized technology
                            solutions company headquartered in India, focused on Industrial IoT (IIoT), Factory Automation,
                            Digitalization, and Industry 4.0 transformation. We are a system integrator and solution provider —
                            not just a vendor — meaning we own the project from concept to commissioning and deliver working,
                            intelligent systems that make our customers' operations smarter, faster, and more efficient.
                        </p>

                        <p className="why-who-we-are-paragraph">
                            We serve manufacturing plants, process industries, infrastructure projects, and commercial facilities —
                            delivering custom-engineered automation systems, real-time IoT monitoring platforms, data analytics
                            dashboards, and integrated digital solutions that bridge the gap between operational technology (OT)
                            and information technology (IT).
                        </p>

                        <p className="why-who-we-are-paragraph">
                            Founded on the belief that Indian industries deserve world-class automation expertise at accessible cost,
                            Pitech combines deep domain knowledge, hands-on engineering capability, and a relentless customer-first
                            philosophy to deliver projects that create lasting value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="why-stats-section">
                <div className="why-stats-grid">
                    <div className="why-stat-card">
                        <div className="why-stat-number">120+</div>
                        <div className="why-stat-label">Happy Clients</div>
                    </div>
                    <div className="why-stat-card">
                        <div className="why-stat-number">100+</div>
                        <div className="why-stat-label">Projects</div>
                    </div>
                    <div className="why-stat-card">
                        <div className="why-stat-number">150+</div>
                        <div className="why-stat-label">Clients</div>
                    </div>
                    <div className="why-stat-card">
                        <div className="why-stat-number">25+</div>
                        <div className="why-stat-label">Experts</div>
                    </div>
                </div>
            </section>

            {/* Main Reasons Grid */}
            <section className="why-reasons-section">
                <div className="why-section-header">
                    <h2 className="why-section-title">What Sets Us Apart</h2>
                    <p className="why-section-subtitle">The PiTech advantage in industrial automation</p>
                </div>

                <div className="why-reasons-grid">
                    {reasons.map((reason) => (
                        <div
                            key={reason.id}
                            className="why-reason-card"
                            style={{ borderTop: `4px solid ${reason.color}` }}
                        >
                            <div className="why-reason-icon" style={{ background: `${reason.color}15`, color: reason.color }}>
                                {reason.icon}
                            </div>
                            <h3 className="why-reason-title">{reason.title}</h3>
                            <p className="why-reason-desc">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Grid - Core Strengths */}
            <section className="why-features-section">
                <div className="why-section-header">
                    <h2 className="why-section-title">Our Core Strengths</h2>
                    <p className="why-section-subtitle">What makes us the right partner for your journey</p>
                </div>

                <div className="why-features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="why-feature-card">
                            <div className="why-feature-icon">{feature.icon}</div>
                            <h3 className="why-feature-title">{feature.title}</h3>
                            <p className="why-feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Mission Section - Light Theme */}
            <section className="why-mission-section-light">
                <div className="why-section-header">
                    <span className="why-mission-badge-light">Why We Exist</span>
                    <h2 className="why-section-title">Our Mission</h2>
                </div>

                <div className="why-mission-quote-light">
                    <div className="why-mission-quote-mark-light">"</div>
                    <p className="why-mission-quote-text-light">
                        To empower Indian industries with intelligent automation, IoT-driven insights,
                        and end-to-end digital solutions — transforming manual, fragmented, and inefficient
                        operations into smart, connected, and high-performance systems that drive real business growth.
                    </p>
                    <div className="why-mission-quote-mark-light closing">"</div>
                </div>

                <div className="why-mission-commitments-light">
                    {missionCommitments.map((commitment, index) => (
                        <div key={index} className="why-mission-card-light">
                            <div className="why-mission-icon-light" style={{ background: `${commitment.color}15`, color: commitment.color }}>
                                {commitment.icon}
                            </div>
                            <h3 className="why-mission-card-title-light">{commitment.title}</h3>
                            <p className="why-mission-card-desc-light">{commitment.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="why-cta-section">
                <div className="why-cta-content">
                    <h2 className="why-cta-title">Ready to Transform Your Manufacturing?</h2>
                    <p className="why-cta-text">
                        Join the industry leaders who trust PiTech for their automation journey.
                    </p>
                    <div className="why-cta-buttons">
                        <Link to="/contact" className="why-cta-primary">
                            Contact Us Today
                            <span className="why-cta-arrow">→</span>
                        </Link>
                        <Link to="/solutions" className="why-cta-secondary">
                            Explore Solutions
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyPiTech;