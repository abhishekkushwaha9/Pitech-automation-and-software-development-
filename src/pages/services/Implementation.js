import React, { useState } from "react";
import "./Implementation.css";

const Implementation = () => {
    const [expandedCards, setExpandedCards] = useState({});

    const toggleExpand = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const implementationProcesses = [
        {
            icon: "🔧",
            title: "System Installation & Configuration",
            shortDesc: "Installation of industrial software, servers, PLC programs, and production monitoring systems.",
            fullDesc: "Our experts ensure seamless installation and configuration of all industrial software components. We handle everything from server setup to PLC programming, ensuring your systems are optimized for peak performance from day one.",
            keyActivities: [
                "MES / SCADA software installation",
                "PLC program configuration",
                "Machine communication setup",
                "Industrial server deployment"
            ]
        },
        {
            icon: "⚙️",
            title: "Machine & System Integration",
            shortDesc: "Integration of machines, PLCs, sensors, and IoT devices with centralized monitoring systems.",
            fullDesc: "We create a unified manufacturing ecosystem by connecting all your equipment and systems. Our integration services ensure seamless communication between machines, controllers, and monitoring platforms.",
            keyActivities: [
                "PLC to MES integration",
                "Machine data acquisition",
                "IoT device connectivity",
                "Industrial protocol configuration"
            ]
        },
        {
            icon: "📡",
            title: "Data Communication Setup",
            shortDesc: "Implementation of industrial communication protocols for seamless data flow.",
            fullDesc: "Establish robust communication networks that enable real-time data exchange across your entire manufacturing operation. We configure industry-standard protocols for reliable data transmission.",
            keyActivities: [
                "OPC UA / Modbus configuration",
                "Industrial network setup",
                "Real-time data transmission",
                "ERP / MES connectivity"
            ]
        },
        {
            icon: "📊",
            title: "Dashboard & Monitoring Setup",
            shortDesc: "Deployment of real-time dashboards and monitoring systems.",
            fullDesc: "Transform raw production data into actionable insights with custom dashboards. Monitor key performance indicators in real-time and make data-driven decisions instantly.",
            keyActivities: [
                "Production dashboards",
                "OEE dashboard",
                "Machine utilization tracking",
                "Real-time alerts & notifications"
            ]
        },
        {
            icon: "🧪",
            title: "System Testing & Validation",
            shortDesc: "Complete system testing to ensure reliability and performance.",
            fullDesc: "Rigorous testing protocols ensure your systems perform flawlessly before going live. We validate every component and integration point for maximum reliability.",
            keyActivities: [
                "Functional testing",
                "System performance testing",
                "Data accuracy validation",
                "Industrial acceptance testing"
            ]
        },
        {
            icon: "🎓",
            title: "Training & Go-Live Support",
            shortDesc: "Training plant operators and engineers for smooth system adoption.",
            fullDesc: "Ensure your team is fully prepared to leverage new systems with comprehensive training programs. We provide ongoing support during and after deployment.",
            keyActivities: [
                "Operator training",
                "Engineering training",
                "Documentation & SOPs",
                "Go-live technical support"
            ]
        }
    ];

    const impactMetrics = [
        {
            icon: "⚡",
            value: "Faster Deployment",
            description: "Production systems implemented with minimal downtime",
            color: "#2563eb"
        },
        {
            icon: "⚙️",
            value: "Seamless Integration",
            description: "Complete connectivity between machines, PLCs, and software systems",
            color: "#7c3aed"
        },
        {
            icon: "📊",
            value: "Real-Time Visibility",
            description: "Live monitoring of production, quality, and efficiency",
            color: "#059669"
        },
        {
            icon: "🚀",
            value: "Scalable Systems",
            description: "Solutions designed for future expansion and Industry 4.0 readiness",
            color: "#dc2626"
        }
    ];

    return (
        <div className="implementation-page">
            {/* Hero Section */}
            <section className="hero-section" data-animate="fadeIn">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-tag">⚙️ Implementation Services</span>
                        <h1 className="hero-title">
                            From Strategy to <span className="gradient-text">Live System Deployment</span>
                        </h1>
                        <p className="hero-description">
                            Implementation Services ensure that the planned digital and automation solutions
                            are successfully deployed on the shop floor. We transform consulting insights into
                            fully functional systems by installing hardware, configuring software, integrating
                            machines, and launching production-ready solutions.
                        </p>
                        <p className="hero-highlight">
                            From system setup to live production deployment — we deliver complete implementation
                            services for industrial automation, MES, and digital manufacturing systems.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary pulse-animation">
                                Start Your Implementation Journey
                            </button>
                            <button className="btn-secondary">
                                Talk to Our Experts
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hero-shape"></div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header" data-animate="slideIn">
                        <h2 className="section-title">
                            🚀 Our Implementation Process
                        </h2>
                        <p className="section-subtitle">
                            Systematic approach to ensure successful deployment and integration
                        </p>
                    </div>

                    <div className="process-grid">
                        {implementationProcesses.map((process, index) => (
                            <div
                                key={index}
                                className={`process-card ${expandedCards[index] ? 'expanded' : ''}`}
                                data-animate="zoomIn"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="process-icon float-animation">
                                    {process.icon}
                                </div>
                                <h3 className="process-title">{process.title}</h3>
                                <p className="process-description">
                                    {expandedCards[index] ? process.fullDesc : process.shortDesc}
                                </p>

                                {expandedCards[index] && (
                                    <div className="process-details">
                                        <h4>Key Activities</h4>
                                        <ul className="activities-list">
                                            {process.keyActivities.map((activity, idx) => (
                                                <li key={idx}>{activity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <button
                                    className="see-more-btn"
                                    onClick={() => toggleExpand(index)}
                                >
                                    {expandedCards[index] ? 'Show Less' : 'See More'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="impact-section">
                <div className="container">
                    <div className="section-header" data-animate="slideIn">
                        <h2 className="section-title">
                            📈 Implementation Impact
                        </h2>
                        <p className="section-subtitle">
                            Measurable results that transform your manufacturing operations
                        </p>
                    </div>

                    <div className="impact-grid">
                        {impactMetrics.map((metric, index) => (
                            <div
                                key={index}
                                className="impact-card"
                                data-animate="zoomIn"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div
                                    className="impact-icon"
                                    style={{ background: `${metric.color}15` }}
                                >
                                    <span style={{ color: metric.color }}>{metric.icon}</span>
                                </div>
                                <h3 className="impact-value">{metric.value}</h3>
                                <p className="impact-description">{metric.description}</p>
                                <div
                                    className="impact-progress"
                                    style={{ background: `${metric.color}20` }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            background: metric.color,
                                            width: '100%',
                                            animation: 'progressFill 1.5s ease-out'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content" data-animate="zoomIn">
                        <h2 className="cta-title">
                            Ready to Transform Your Manufacturing?
                        </h2>
                        <p className="cta-description">
                            Let's discuss how our implementation services can help you achieve
                            operational excellence and Industry 4.0 readiness.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn-primary pulse-animation">
                                Schedule a Consultation
                            </button>
                            <button className="btn-outline">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-info">
                            <div className="footer-brand">Pitech</div>
                            <p className="footer-description">
                                Empowering manufacturers with cutting-edge automation and implementation solutions.
                            </p>
                        </div>
                        <div className="footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#solutions">Solutions</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h4>Contact Us</h4>
                            <p>📍 123 Automation Street</p>
                            <p>📞 +1 (555) 123-4567</p>
                            <p>✉️ info@pitech.com</p>
                        </div>
                        <div className="footer-social">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <span className="social-icon">📘</span>
                                <span className="social-icon">🐦</span>
                                <span className="social-icon">📷</span>
                                <span className="social-icon">💼</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="copyright">© 2024 Pitech. All rights reserved. | Implementation Services for Industry 4.0</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Implementation;