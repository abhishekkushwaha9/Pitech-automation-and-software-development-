import React, { useEffect } from 'react';
import './ConvergenceStyle.css';

const PalletConveyor = () => {
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
        <div className="convergence-page">
            {/* Hero Section */}
            <section className="conv-hero" style={{ backgroundImage: "url('/images/convergence/pallet_conveyor.png')" }}>
                <div className="conv-hero-content">
                    <h1 className="conv-hero-title">Pallet Conveyor Systems</h1>
                    <p className="conv-hero-subtitle">Optimized heavy-duty material handling shaping modern industrial production flow and smart manufacturing.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="conv-section">
                <h2 className="conv-section-title reveal">About Pallet Conveyors</h2>
                <p className="conv-about-text reveal">
                    Pallet conveyors form the backbone of automated material handling and warehouse logistics. Designed to transport heavy loads securely, these conveyor systems orchestrate production flow by seamlessly linking different stages of a factory, from initial assembly to final packaging and distribution.
                </p>

                {/* Key Features */}
                <h2 className="conv-section-title reveal">Key Features</h2>
                <div className="conv-grid-3 reveal">
                    <div className="conv-card">
                        <div className="conv-card-icon">🏗️</div>
                        <h3 className="conv-card-title">Efficient Material Transport</h3>
                        <p className="conv-card-desc">Move heavy pallets effortlessly across your facility with high load-bearing capacity and robust engineering.</p>
                    </div>
                    <div className="conv-card">
                        <div className="conv-card-icon">🔄</div>
                        <h3 className="conv-card-title">Smooth Merging Lines</h3>
                        <p className="conv-card-desc">Intelligent convergence modules allow multiple production lines to merge pallets seamlessly without bottlenecks.</p>
                    </div>
                    <div className="conv-card">
                        <div className="conv-card-icon">⚙️</div>
                        <h3 className="conv-card-title">Automated Flow Control</h3>
                        <p className="conv-card-desc">Integrated PLCs automatically route pallets to their correct destination based on production logic.</p>
                    </div>
                </div>

                {/* Split Image/Text */}
                <div className="conv-split reveal">
                    <div className="conv-split-image" style={{ backgroundImage: "url('/images/convergence/pallet_conveyor.png')" }}></div>
                    <div className="conv-split-content">
                        <h2 className="conv-split-title">Benefits & Applications</h2>
                        <ul className="conv-list" style={{ marginBottom: "30px" }}>
                            <li>Improved production efficiency and throughput</li>
                            <li>Reduced instances of manual lifting and forklift transport</li>
                            <li>Better warehouse workflow and space management</li>
                            <li>Faster and reliable product movement across long distances</li>
                        </ul>
                        <p style={{ color: "#475569" }}>
                            <strong>Industries using Pallet Conveyors:</strong> Commonly utilized within manufacturing plants, automated warehouses, automotive production, and massive distribution centers to streamline inventory flow.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PalletConveyor;
