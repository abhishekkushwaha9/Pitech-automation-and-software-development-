import React, { useEffect } from 'react';
import './SPMStyle.css';

const PressMachine = () => {
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
        revealOnScroll();
        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    return (
        <div className="spm-page">
            {/* Hero Section */}
            <section className="spm-hero" style={{ backgroundImage: "url('/images/spm/press_machine.png')" }}>
                <div className="spm-hero-content">
                    <h1 className="spm-hero-title">Industrial Press Machine Automation</h1>
                    <p className="spm-hero-subtitle">High-force, precision-engineered metal forming for fast and reliable fabrication.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="spm-section">
                <h2 className="spm-section-title reveal">About Press Machines</h2>
                <p className="spm-about-text reveal">
                    Automated press machines are the heavy-duty workhorses of modern industrial fabrication. They are structurally engineered for applications involving forming, stamping, punching, and shaping tough metal components with unparalleled exactness.
                </p>

                {/* Key Features */}
                <h2 className="spm-section-title reveal">Key Features</h2>
                <div className="spm-grid-3 reveal">
                    <div className="spm-card">
                        <div className="spm-card-icon">🏗️</div>
                        <h3 className="spm-card-title">High Force & Precision</h3>
                        <p className="spm-card-desc">Delivers immense tonnage while maintaining micron-level accuracy on every single strike.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">⚙️</div>
                        <h3 className="spm-card-title">Automated Feeding</h3>
                        <p className="spm-card-desc">Continuous material handling systems to keep the press running without human intervention.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">🛡️</div>
                        <h3 className="spm-card-title">Integrated Safety</h3>
                        <p className="spm-card-desc">Advanced light curtains and interlocking guards to ensure complete operator safety.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">⚡</div>
                        <h3 className="spm-card-title">Fast Production Cycles</h3>
                        <p className="spm-card-desc">Optimized hydraulics providing rapid stroke speeds to maximize daily output volume.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">🌐</div>
                        <h3 className="spm-card-title">Industry 4.0 Ready</h3>
                        <p className="spm-card-desc">Fully compatible with IIoT frameworks for remote monitoring and predictive maintenance.</p>
                    </div>
                </div>

                {/* Split Image/Text */}
                <div className="spm-split reverse reveal">
                    <div className="spm-split-image" style={{ backgroundImage: "url('/images/spm/press_machine.png')" }}></div>
                    <div className="spm-split-content">
                        <h2 className="spm-split-title">Applications & Benefits</h2>
                        <h4 style={{ marginBottom: "10px", color: "#3b82f6" }}>Common Applications</h4>
                        <p style={{ color: "#475569", marginBottom: "20px" }}>
                            Ideal for automotive manufacturing, sheet metal processing, heavy mechanical components, and general industrial fabrication.
                        </p>

                        <h4 style={{ marginBottom: "10px", color: "#3b82f6" }}>System Benefits</h4>
                        <ul className="spm-list">
                            <li>Significantly higher production speeds vs manual presses</li>
                            <li>Consistent product quality across massive manufacturing runs</li>
                            <li>Major reduction in manual labor and related ergonomic hazards</li>
                            <li>Minimized material waste through precise stamping</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PressMachine;
