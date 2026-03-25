import React, { useEffect } from 'react';
import './ConvergenceStyle.css';

const ChainConveyors = () => {
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
            <section className="conv-hero" style={{ backgroundImage: "url('/images/convergence/chain_conveyor.png')" }}>
                <div className="conv-hero-content">
                    <h1 className="conv-hero-title">Heavy-Duty Chain Conveyors</h1>
                    <p className="conv-hero-subtitle">Rugged logistics systems managing high-stress loads in harsh industrial conditions.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="conv-section">
                <h2 className="conv-section-title reveal">About Chain Conveyors</h2>
                <p className="conv-about-text reveal">
                    When dealing with extremely heavy, abrasive, or metallic payloads, standard belts often fail. Chain conveyors step in to provide unparalleled strength and durability. They employ continuous chain loops to consistently drag or carry massive manufacturing chassis directly down the production line.
                </p>

                {/* Key Features */}
                <h2 className="conv-section-title reveal">Key Features</h2>
                <div className="conv-grid-3 reveal">
                    <div className="conv-card">
                        <div className="conv-card-icon">⛓️</div>
                        <h3 className="conv-card-title">Ultimate Load Capacity</h3>
                        <p className="conv-card-desc">Engineered purely for high-weight logistics and structural stability across extensive transport beds.</p>
                    </div>
                    <div className="conv-card">
                        <div className="conv-card-icon">🛡️</div>
                        <h3 className="conv-card-title">Extreme Durability</h3>
                        <p className="conv-card-desc">Highly resistant to abrasive wear, high heat, and industrial cutting fluids common in manufacturing.</p>
                    </div>
                    <div className="conv-card">
                        <div className="conv-card-icon">🔧</div>
                        <h3 className="conv-card-title">Multi-Strand Systems</h3>
                        <p className="conv-card-desc">Configurable into double or triple strand layouts to adequately support wide structural frames.</p>
                    </div>
                </div>

                {/* Split Image/Text */}
                <div className="conv-split reverse reveal">
                    <div className="conv-split-image" style={{ backgroundImage: "url('/images/convergence/chain_conveyor.png')" }}></div>
                    <div className="conv-split-content">
                        <h2 className="conv-split-title">Benefits & Applications</h2>
                        <ul className="conv-list" style={{ marginBottom: "30px" }}>
                            <li>Unwavering reliability involving multi-ton workloads</li>
                            <li>Perfectly suited for severe environments where belts degrade</li>
                            <li>Positional accuracy under extreme physical stress</li>
                            <li>Automated indexing synchronized with robotic welding or painting</li>
                        </ul>
                        <p style={{ color: "#475569" }}>
                            <strong>Industries using Chain Conveyors:</strong> Foundational in heavy automotive chassis manufacturing, steel processing plants, large-scale appliance assembly, and heavy agricultural equipment production.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChainConveyors;
