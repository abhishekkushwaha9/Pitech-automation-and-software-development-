import React, { useEffect } from 'react';
import './ConvergenceStyle.css';

const AssemblyConveyor = () => {
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
        <div className="convergence-page">
            {/* Hero Section */}
            <section className="conv-hero" style={{ backgroundImage: "url('/images/convergence/assembly_conveyor.png')" }}>
                <div className="conv-hero-content">
                    <h1 className="conv-hero-title">Assembly Conveyor Systems</h1>
                    <p className="conv-hero-subtitle">Empowering synchronized production lines for high-precision, continuous automation.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="conv-section">
                <h2 className="conv-section-title reveal">About Assembly Conveyors</h2>
                <p className="conv-about-text reveal">
                    Assembly conveyors are specialized systems meticulously engineered to move items between workstations during the production phase. They are highly integral in achieving synchronized workflows, ensuring that components are delivered exactly when and where they are needed to automate production lines effectively.
                </p>

                {/* Key Features */}
                <h2 className="conv-section-title reveal">Key Features</h2>
                <div className="conv-grid-3 reveal">
                    <div className="conv-card">
                        <div className="conv-card-icon">⚡</div>
                        <h3 className="conv-card-title">Reliable & Continuous</h3>
                        <p className="conv-card-desc">Engineered for 24/7 continuous operation, guaranteeing that assembly lines face zero unplanned mechanical downtime.</p>
                    </div>
                    <div className="conv-card">
                        <div className="conv-card-icon">📡</div>
                        <h3 className="conv-card-title">Sensor-Based Monitoring</h3>
                        <p className="conv-card-desc">Optical sensors trigger precision stops at each robotic or manual workstation to ensure accurate assembly actions.</p>
                    </div>
                    <div className="conv-card">
                        <div className="conv-card-icon">🔧</div>
                        <h3 className="conv-card-title">Scalable Structure</h3>
                        <p className="conv-card-desc">Highly modular designs let you expand or redirect the assembly conveyor as your manufacturing demands grow.</p>
                    </div>
                </div>

                {/* Split Image/Text */}
                <div className="conv-split reverse reveal">
                    <div className="conv-split-image" style={{ backgroundImage: "url('/images/convergence/assembly_conveyor.png')" }}></div>
                    <div className="conv-split-content">
                        <h2 className="conv-split-title">Benefits & Applications</h2>
                        <ul className="conv-list" style={{ marginBottom: "30px" }}>
                            <li>Improved cycle times and overall production efficiency</li>
                            <li>Reduced manual handling and ergonomic stress on workers</li>
                            <li>Precise workflow management bridging isolated cells</li>
                            <li>Consistent operational pacing enabling predictive scheduling</li>
                        </ul>
                        <p style={{ color: "#475569" }}>
                            <strong>Industries using Assembly Conveyors:</strong> Driving the core of automotive production, consumer electronics assembly, medical device manufacturing, and high-volume packaging industries.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AssemblyConveyor;
