// src/pages/Vision.js
import PageLayout from "../layouts/PageLayout";
import { useEffect, useState } from "react";
import BlurText from '../components/BlurText';
import RippleGrid from '../components/RippleGrid';
import './Vision.css';

// StarBorder component definition (Local implementation matching Vision.css)
const StarBorder = ({
    as: Component = "div",
    className = "",
    color = "#a18cd1",
    speed = "6s",
    thickness = 3,
    children,
    ...props
}) => {
    return (
        <Component
            className={`star-border-container ${className}`}
            style={{
                '--star-color': color,
                '--star-speed': speed,
                '--star-thickness': `${thickness}px`
            }}
            {...props}
        >
            <div className="star-border">
                <div className="star-border-inner"></div>
                <div className="star-corner corner-tl"></div>
                <div className="star-corner corner-tr"></div>
                <div className="star-corner corner-bl"></div>
                <div className="star-corner corner-br"></div>
            </div>
            {children}
        </Component>
    );
};

export default function Vision() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Track mouse position for spotlight effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Vision strategic pillars data
    const visionPillars = [
        {
            title: "TECHNOLOGY",
            description: "Be at the forefront of IIoT, Edge AI, and Industry 4.0 adoption in Indian industry"
        },
        {
            title: "REACH",
            description: "Expand our project footprint across manufacturing, pharma, food & beverage, infrastructure, and smart cities"
        },
        {
            title: "TALENT",
            description: "Build a world-class team of automation and IoT engineers, developers, and project professionals"
        },
        {
            title: "IMPACT",
            description: "Deliver systems that reduce downtime, save energy, and create lasting competitive advantage for customers"
        }
    ];

    // Core values data (8 values)
    const coreValues = [
        {
            icon: "⚙",
            title: "Innovation First",
            description: "We engineer tomorrow's solutions today — pushing the frontier of IoT, AI, and Industrial Automation."
        },
        {
            icon: "✓",
            title: "Integrity Always",
            description: "We operate with complete transparency, honesty, and accountability — in every project and every promise made."
        },
        {
            icon: "◎",
            title: "Customer at Centre",
            description: "Every solution is designed around the customer's real problem. Their success is our success."
        },
        {
            icon: "↗",
            title: "Excellence in Delivery",
            description: "We do not just complete projects — we deliver measurable value, on time, every time."
        },
        {
            icon: "⬡",
            title: "Technology Leadership",
            description: "We stay ahead of the curve — adopting Industry 4.0, IIoT, SCADA, PLC, and emerging digital technologies."
        },
        {
            icon: "⚑",
            title: "Safety & Compliance",
            description: "Industrial safety and regulatory compliance are non-negotiable in every system we design and deploy."
        },
        {
            icon: "⊕",
            title: "Team & People First",
            description: "We invest in our people, build expertise, and foster a culture of continuous learning and mutual respect."
        },
        {
            icon: "⬤",
            title: "Sustainable Impact",
            description: "We build smarter, greener industrial systems that reduce waste, save energy, and future-proof operations."
        }
    ];

    // What We Do - Expertise data (updated from document)
    const expertiseAreas = [
        {
            icon: "🏭",
            title: "IoT Solutions",
            description: "Smart sensors, edge computing, cloud connectivity, real-time dashboards, and industrial IoT architecture design and deployment",
            tags: ["IIoT", "Edge Computing", "Cloud", "Dashboards"]
        },
        {
            icon: "⚙️",
            title: "Industrial Automation",
            description: "PLC / SCADA programming, HMI design, process automation, machine integration, and control panel engineering",
            tags: ["PLC", "SCADA", "HMI", "Process Control"]
        },
        {
            icon: "📊",
            title: "Digitalization",
            description: "Industry 4.0 transformation, MES, CMMS, digital twin, data analytics, and enterprise system integration",
            tags: ["Industry 4.0", "MES", "CMMS", "Digital Twin"]
        },
        {
            icon: "🔄",
            title: "System Integration",
            description: "End-to-end integration of OT and IT systems — connecting the shop floor to the boardroom",
            tags: ["OT/IT", "Integration", "Connectivity", "Data Flow"]
        },
        {
            icon: "💻",
            title: "Software Development",
            description: "Custom SCADA, IoT applications, mobile dashboards, reporting tools, and industrial software solutions",
            tags: ["Custom Apps", "SCADA", "Mobile", "Reporting"]
        },
        {
            icon: "🔧",
            title: "AMC & Support",
            description: "Annual Maintenance Contracts, remote monitoring, field service support, and system upgrades",
            tags: ["Maintenance", "Support", "Monitoring", "Upgrades"]
        }
    ];

    // PiTech Promise data
    const pitechPromise = {
        customers: [
            "We will understand your problem before we propose a solution.",
            "We will deliver what we promise — on time, on budget, and on scope.",
            "We will be available after delivery — not just during the sale.",
            "We will continuously improve our solutions based on your feedback.",
            "We will treat your plant as if it were our own."
        ],
        team: [
            "We will invest in your growth — technically and professionally.",
            "We will reward performance, initiative, and ownership.",
            "We will ensure your work creates real impact — not just billable hours.",
            "We will build a workplace where engineers are proud to work and grow.",
            "We will lead by example — with integrity, discipline, and ambition."
        ]
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <PageLayout>
            <div className="vision-container">

                {/* ===== HERO SECTION WITH GALAXY BACKGROUND AND STAR BORDER TEXT ===== */}
                <div className="vision-hero">
                    {/* Galaxy Background */}
                    <div className="galaxy-bg">
                        <div className="stars"></div>
                        <div className="twinkling"></div>
                        <div className="clouds"></div>
                        <div className="shooting-stars"></div>
                    </div>

                    <div className="vision-hero-content">
                        <StarBorder
                            as="span"
                            className="hero-tag-star"
                            color="#a8c0ff"
                            speed="4s"
                            thickness={1}
                        >
                            <span className="hero-tag">✦ PITECH AUTOMATION AND SOFTWARE SOLUTIONS ✦</span>
                        </StarBorder>

                        <StarBorder
                            as="div"
                            className="vision-hero-title-star"
                            color="#a18cd1"
                            speed="5s"
                            thickness={2}
                        >
                            <h1 className="vision-hero-title">
                                <BlurText
                                    text="Empowering Industry. Enabling the Future."
                                    animateBy="words"
                                    direction="top"
                                    delay={150}
                                    stepDuration={0.4}
                                    threshold={0.1}
                                    rootMargin="0px"
                                />
                            </h1>
                        </StarBorder>

                        <StarBorder
                            as="p"
                            className="vision-hero-subtitle-star"
                            color="#fbc2eb"
                            speed="3s"
                            thickness={1}
                        >
                            <p className="vision-hero-subtitle">Industrial IoT · Automation · Digitalization · Industry 4.0</p>
                        </StarBorder>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Excellence</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">120+</span>
                                <span className="stat-label">Projects Delivered</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">80+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== OUR VISION SECTION ===== */}
                <section className="vision-statement-section animate-on-scroll">
                    <div className="section-header">

                        <h2 className="section-title">Where We Are Going</h2>
                    </div>

                    <StarBorder
                        as="div"
                        className="vision-quote-card"
                        color="#a18cd1"
                        speed="6s"
                        thickness={2}
                    >
                        <div className="vision-quote-content">
                            <p className="vision-quote-text">
                                "To be India's most trusted and innovative Industrial IoT and Automation Systems House — recognized for engineering excellence, digital transformation leadership, and the measurable value we deliver to every industry we serve."
                            </p>
                        </div>
                    </StarBorder>

                    <div className="vision-pillars-grid">
                        {visionPillars.map((pillar, index) => (
                            <StarBorder
                                key={index}
                                as="div"
                                className="pillar-card spotlight-card"
                                color="#a18cd1"
                                speed="4s"
                                thickness={2}
                            >
                                <div className="spotlight" style={{ background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(161,140,209,0.2) 0%, transparent 50%)` }} />
                                <div className="pillar-content">
                                    <h3 className="pillar-title">{pillar.title}</h3>
                                    <p className="pillar-description">{pillar.description}</p>
                                </div>
                            </StarBorder>
                        ))}
                    </div>
                </section>

                {/* ===== CORE VALUES SECTION ===== */}
                <section className="core-values-section animate-on-scroll">
                    <div className="section-header">

                        <h2 className="section-title">The Principles That Define Us</h2>
                    </div>

                    <div className="values-grid">
                        {coreValues.map((value, index) => (
                            <StarBorder
                                key={index}
                                as="div"
                                className="value-card spotlight-card"
                                color="#a18cd1"
                                speed="3s"
                                thickness={2}
                            >
                                <div className="spotlight" style={{ background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(161,140,209,0.2) 0%, transparent 50%)` }} />
                                <div className="value-icon">{value.icon}</div>
                                <div className="value-content">
                                    <h3 className="value-title">{value.title}</h3>
                                    <p className="value-description">{value.description}</p>
                                </div>
                            </StarBorder>
                        ))}
                    </div>
                </section>

                {/* ===== WHAT WE DO - EXPERTISE SECTION ===== */}
                <section className="expertise-section">
                    <div className="section-header animate-on-scroll">

                        <h2 className="section-title">
                            <BlurText
                                text="End-to-End Solutions Across Industrial Technology"
                                animateBy="words"
                                direction="top"
                                delay={100}
                                stepDuration={0.35}
                                threshold={0.1}
                                rootMargin="0px"
                            />
                        </h2>
                    </div>

                    <div className="expertise-grid">
                        {expertiseAreas.map((area, index) => (
                            <StarBorder
                                key={index}
                                as="div"
                                className="expertise-card spotlight-card"
                                color="#a18cd1"
                                speed="4s"
                                thickness={2}
                            >
                                <div className="spotlight" style={{ background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(161,140,209,0.2) 0%, transparent 50%)` }} />
                                <div className="expertise-icon">{area.icon}</div>
                                <h3 className="expertise-title">{area.title}</h3>
                                <p className="expertise-text">{area.description}</p>
                                <div className="card-stats">
                                    {area.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </StarBorder>
                        ))}
                    </div>
                </section>

                {/* ===== THE PITECH PROMISE SECTION ===== */}
                <section className="promise-section animate-on-scroll">
                    <div className="section-header">

                        <h2 className="section-title">What Every Customer Can Count On</h2>
                    </div>

                    <div className="promise-grid">
                        <StarBorder
                            as="div"
                            className="promise-card"
                            color="#a18cd1"
                            speed="4s"
                            thickness={2}
                        >
                            <h3 className="promise-card-title">For Our Customers</h3>
                            <ul className="promise-list">
                                {pitechPromise.customers.map((item, index) => (
                                    <li key={index} className="promise-list-item">{item}</li>
                                ))}
                            </ul>
                        </StarBorder>

                        <StarBorder
                            as="div"
                            className="promise-card"
                            color="#fbc2eb"
                            speed="4s"
                            thickness={2}
                        >
                            <h3 className="promise-card-title">For Our Team</h3>
                            <ul className="promise-list">
                                {pitechPromise.team.map((item, index) => (
                                    <li key={index} className="promise-list-item">{item}</li>
                                ))}
                            </ul>
                        </StarBorder>
                    </div>

                    <div className="promise-tagline">
                        <StarBorder
                            as="div"
                            className="promise-tagline-card"
                            color="#a18cd1"
                            speed="3s"
                            thickness={1}
                        >
                            <p className="promise-tagline-text">
                                "Connecting Machines. Digitizing Operations. Delivering Growth."
                            </p>
                        </StarBorder>
                    </div>
                </section>

                {/* ===== FOOTER WITH DYNAMIC RAINBOW RIPPLE GRID ===== */}
                <footer className="simple-footer animate-on-scroll">
                    {/* Dynamic Ripple Grid Background */}
                    <div className="footer-bg-wrapper">
                        <RippleGrid
                            enableRainbow={true}
                            gridColor="#a18cd1"
                            rippleIntensity={0.2}
                            gridSize={15}
                            gridThickness={3}
                            fadeDistance={1.5}
                            vignetteStrength={1.0}
                            glowIntensity={0.4}
                            opacity={0.9}
                            mouseInteraction={true}
                            mouseInteractionRadius={1.8}
                            gridRotation={5}
                            waveSpeed={3}
                            colorShiftSpeed={0.3}
                        />
                    </div>

                    {/* Footer Content */}
                    <div className="footer-content">
                        <div className="footer-logo">
                            <div className="logo-stroke">
                                <img
                                    src="/images/pitech-logo.png"
                                    alt="Pi-Tech Logo"
                                    className="footer-logo-img"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.style.display = 'none';
                                        const parent = e.target.parentElement;
                                        const fallbackSpan = document.createElement('span');
                                        fallbackSpan.style.cssText = 'font-size: 2.5rem; font-weight: 800; color: white; letter-spacing: 2px; text-shadow: 0 0 10px #a18cd1;';
                                        fallbackSpan.textContent = 'PITECH';
                                        parent.appendChild(fallbackSpan);
                                    }}
                                />
                            </div>
                        </div>

                        <p className="footer-text">
                            A Complete Industrial Solution - Custom automation, machine manufacturing,
                            and premium product trading. Efficiency and reliability with our SPMs,
                            Laser Marking, and Testing Benches.
                        </p>

                        <div className="footer-stats">
                            <div className="footer-stat">
                                <span>24/7</span>
                                <span>Support</span>
                            </div>
                            <div className="footer-stat">
                                <span>100%</span>
                                <span>Quality</span>
                            </div>
                            <div className="footer-stat">
                                <span>5 Yrs</span>
                                <span>Warranty</span>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <p className="copyright">© 2024 Pitech Automation and Software Solutions Pvt Ltd. All rights reserved</p>
                        </div>
                    </div>
                </footer>

            </div>
        </PageLayout>
    );
}