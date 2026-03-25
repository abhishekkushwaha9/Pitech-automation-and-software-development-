import React, { useEffect } from 'react';
import '../solutions/spm/SPMStyle.css';

const AssemblyLine = () => {
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
            <section className="spm-hero" style={{ backgroundImage: "url('/images/spm/assembly_line.png')" }}>
                <div className="spm-hero-content">
                    <h1 className="spm-hero-title">Automated Assembly Line Systems</h1>
                    <p className="spm-hero-subtitle">Intelligent synchronization of robotics, conveyors, and sensors for ultimate production efficiency.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="spm-section">
                <h2 className="spm-section-title reveal">About Assembly Lines</h2>
                <p className="spm-about-text reveal">
                    Automated assembly lines represent the pinnacle of smart factory integration. By combining industrial robots, advanced conveyors, and precision sensors, these systems systematically assemble complex products efficiently, reliably, and without error.
                </p>

                {/* Key Features */}
                <h2 className="spm-section-title reveal">Key Features</h2>
                <div className="spm-grid-3 reveal">
                    <div className="spm-card">
                        <div className="spm-card-icon">🧩</div>
                        <h3 className="spm-card-title">Modular Stations</h3>
                        <p className="spm-card-desc">Easily reconfigurable assembly cells that adapt quickly to new product designs.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">🔄</div>
                        <h3 className="spm-card-title">Automated Movement</h3>
                        <p className="spm-card-desc">Seamless material transfer between stations minimizing handling time and errors.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">👁️</div>
                        <h3 className="spm-card-title">Sensor Quality Control</h3>
                        <p className="spm-card-desc">In-line vision systems verifying components step-by-step to prevent defects.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">🤖</div>
                        <h3 className="spm-card-title">Robotic Integration</h3>
                        <p className="spm-card-desc">Complete harmony between PLC systems and robotic arms for complex manipulations.</p>
                    </div>
                    <div className="spm-card">
                        <div className="spm-card-icon">📊</div>
                        <h3 className="spm-card-title">Real-Time Monitoring</h3>
                        <p className="spm-card-desc">SCADA connected dashboards providing instant visibility into production throughput.</p>
                    </div>
                </div>

                {/* Split Image/Text */}
                <div className="spm-split reveal">
                    <div className="spm-split-image" style={{ backgroundImage: "url('/images/spm/assembly_line.png')" }}></div>
                    <div className="spm-split-content">
                        <h2 className="spm-split-title">Applications & Benefits</h2>
                        <h4 style={{ marginBottom: "10px", color: "#3b82f6" }}>Common Applications</h4>
                        <p style={{ color: "#475569", marginBottom: "20px" }}>
                            The standard for high-volume electronics manufacturing, modern automotive assembly, consumer appliance production, and diverse packaging systems.
                        </p>

                        <h4 style={{ marginBottom: "10px", color: "#3b82f6" }}>System Benefits</h4>
                        <ul className="spm-list">
                            <li>Unmatched productivity and manufacturing throughput</li>
                            <li>Dramatically faster manufacturing cycle times</li>
                            <li>Flawless product consistency eliminating human variability</li>
                            <li>Highly scalable infrastructure for future factory expansions</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AssemblyLine;
