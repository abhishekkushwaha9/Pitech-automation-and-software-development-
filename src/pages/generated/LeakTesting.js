import React, { useEffect } from 'react';
import '../solutions/spm/SPMStyle.css';

const LeakTesting = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            reveals.forEach(reveal => {
                const revealTop = reveal.getBoundingClientRect().top;
                const revealPoint = 100;
                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Trigger once on load
        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    return (
        <div className="spm-page">
            {/* Hero Section */}
            <section className="spm-hero" style={{ backgroundImage: "url('/images/spm/leak_testing.png')" }}>
                <div className="spm-hero-content">
                    <h1 className="spm-hero-title">Leak Testing Systems</h1>
                    <p className="spm-hero-subtitle">High-precision automated inspection ensuring flawless quality control in modern manufacturing.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="spm-section">
                <h2 className="spm-section-title reveal">About Leak Testing Systems</h2>
                <p className="spm-about-text reveal">
                    Automated leak testing machines are critical components in smart manufacturing. They help manufacturers detect even the most minute leaks in components, containers, pipelines, and automotive parts, guaranteeing product integrity before reaching the consumer.
                </p>

                {/* Key Features */}
                <h2 className="spm-section-title reveal">Key Features</h2>
                <div className="spm-grid-3 reveal">
                    <div className="spm-card">
                        <div className="spm-card-icon">🎯</div>
                        <h3 className="spm-card-title">High Precision Detection</h3>
                        <p className="spm-card-desc">Advanced sensors capable of identifying micro-leaks missed by traditional methods.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">⚡</div>
                        <h3 className="spm-card-title">Fast Testing Cycles</h3>
                        <p className="spm-card-desc">Rapid pressurization and analysis designed to keep pace with high-speed manufacturing.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">🔄</div>
                        <h3 className="spm-card-title">Line Integration</h3>
                        <p className="spm-card-desc">Seamless integration directly into existing production lines with automated rejection systems.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">🤖</div>
                        <h3 className="spm-card-title">Automated Inspection</h3>
                        <p className="spm-card-desc">Fully automated processes reducing human error and ensuring consistent quality.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">🛡️</div>
                        <h3 className="spm-card-title">Reliable Quality Control</h3>
                        <p className="spm-card-desc">Ensures 100% component compliance with stringent safety and performance standards.</p>
                    </div>
                </div>

                {/* Split Image/Text */}
                <div className="spm-split reveal">
                    <div className="spm-split-image" style={{ backgroundImage: "url('/images/spm/leak_testing.png')" }}></div>
                    <div className="spm-split-content">
                        <h2 className="spm-split-title">Applications & Benefits</h2>
                        <h4 style={{ marginBottom: "10px", color: "#3b82f6" }}>Common Applications</h4>
                        <p style={{ color: "#475569", marginBottom: "20px" }}>
                            Widely used for automotive components, industrial valves, pharmaceutical containers, fluid pipelines, and advanced packaging systems.
                        </p>

                        <h4 style={{ marginBottom: "10px", color: "#3b82f6" }}>System Benefits</h4>
                        <ul className="spm-list">
                            <li>Drastically improved product quality and safety</li>
                            <li>Significant reduction in defective parts shipped</li>
                            <li>Fully automated, data-driven inspection logging</li>
                            <li>Compliance with international manufacturing standards</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeakTesting;
