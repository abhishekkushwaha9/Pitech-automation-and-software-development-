import PageLayout from "../../layouts/PageLayout";
import { useEffect, useRef } from "react";
import "./Industry.css";

export default function Industry() {
    const cardsData = [
        { icon: "🌐", title: "Digitalization", desc: "Comprehensive transformation of industrial processes into digital workflows for end-to-end visibility.", color: "#3B82F6" },
        { icon: "📈", title: "OEE", desc: "Overall Equipment Effectiveness tracking to maximize productivity and reduce downtime.", color: "#10B981" },
        { icon: "🚨", title: "Digital Andon System", desc: "Real-time intelligent alert systems that instantly notify operators of line issues.", color: "#8B5CF6" },
        { icon: "📋", title: "DWI", desc: "Digital Work Instructions providing interactive, real-time guidance to production line workers.", color: "#F59E0B" },
        { icon: "📱", title: "IoT", desc: "Industrial Internet of Things solutions connecting machines, sensors, and enterprise systems.", color: "#EF4444" },
        { icon: "⚡", title: "Energy Monitoring System", desc: "Advanced analytics and tracking to optimize power consumption across the facility.", color: "#EC4899" },
        { icon: "📊", title: "Production Dashboard", desc: "Live unified displays of critical metrics, KPI tracking, and operational analytics.", color: "#06B6D4" },
        { icon: "🔧", title: "Predictive Maintenance", desc: "AI-driven maintenance schedules predicting component failures before they occur.", color: "#84CC16" }
    ];

    // Simple observer for scroll animations
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // We don't unobserve here to allow repeatable triggers, or unobserve if preferred:
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        elementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    return (
        <PageLayout>
            <div className="digitalization-container">
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="hero-content">
                        <div className="hero-badge">Industrial Solutions</div>
                        <h1 className="hero-title">
                            Next-Generation <span className="hero-highlight">Industry</span> Platforms
                        </h1>
                        <p className="hero-text">
                            Transforming industrial operations through smart connected systems,
                            real-time visibility, and automated control for unparalleled efficiency
                            and productivity in modern industrial environments.
                        </p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">99.9%</div>
                                <div className="stat-label">Uptime</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">40%</div>
                                <div className="stat-label">Efficiency Gain</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Monitoring</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-graphic">
                        <div className="graphic-circle"></div>
                        <div className="graphic-circle2"></div>
                        <div className="graphic-icon">🏭</div>
                    </div>
                </div>

                {/* Main Content Cards Grid */}
                <section className="section">
                    <div className="section-header">
                        <h2 className="section-title">Industry Solutions</h2>
                        <p className="section-subtitle">Discover our comprehensive suite of industrial digital transformation products.</p>
                    </div>

                    <div className="features-grid">
                        {cardsData.map((card, index) => (
                            <div
                                key={index}
                                className="feature-card scroll-animate"
                                ref={addToRefs}
                                style={{
                                    borderLeft: `4px solid ${card.color}`,
                                    background: "#ffffff",
                                    transitionDelay: `${(index % 4) * 0.1}s`
                                }}
                            >
                                <div className="feature-icon" style={{ background: `${card.color}15`, color: card.color }}>
                                    {card.icon}
                                </div>
                                <h4 className="feature-title">{card.title}</h4>
                                <p className="feature-desc">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <div className="cta-section">
                    <h2 className="cta-title">Ready to Transform Your Operations?</h2>
                    <p className="cta-text">
                        Schedule a consultation with our digitalization experts to develop a
                        customized strategy for your industrial needs.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn-primary">Get Started</button>
                        <button className="btn-secondary">View Case Studies →</button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
