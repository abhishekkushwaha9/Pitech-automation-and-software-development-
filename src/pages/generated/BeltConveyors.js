import React, { useEffect } from 'react';
import './ConvergenceStyle.css';

const BeltConveyors = () => {
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
            <section className="conv-hero" style={{ backgroundImage: "url('/images/convergence/belt_conveyor.png')" }}>
                <div className="conv-hero-content">
                    <h1 className="conv-hero-title">Industrial Belt Conveyors</h1>
                    <p className="conv-hero-subtitle">High-speed, automated material routing for agile manufacturing footprints.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="conv-section">
                <h2 className="conv-section-title reveal">About Belt Conveyors</h2>
                <p className="conv-about-text reveal">
                    Belt conveyors are the dynamic arteries of modern manufacturing floors. Utilizing advanced motorized pulleys and industrial-grade belts, they allow seamless transport of loose, irregular, or packaged goods across variable inclinations and incredibly long distances, adapting perfectly to any layout.
                </p>

                {/* Key Features */}
                <h2 className="conv-section-title reveal">Key Features</h2>
                <div className="conv-grid-3 reveal">
                    <div className="conv-card">
                        <div className="conv-card-icon">🌀</div>
                        <h3 className="conv-card-title">High-Speed Operation</h3>
                        <p className="conv-card-desc">Designed to rapidly move bulk small-to-medium parts across the facility without risking product damage.</p>
                    </div>
                    <div className="conv-card">
                        <div className="conv-card-icon">⚡</div>
                        <h3 className="conv-card-title">Energy Efficient</h3>
                        <p className="conv-card-desc">Advanced servo drives ensure smooth acceleration and deceleration, optimizing power loads.</p>
                    </div>
                    <div className="conv-card">
                        <div className="conv-card-icon">🛣️</div>
                        <h3 className="conv-card-title">Flexibility</h3>
                        <p className="conv-card-desc">Can easily incorporate distinct bends, elevation changes, and diverting arms for complex routing.</p>
                    </div>
                </div>

                {/* Split Image/Text */}
                <div className="conv-split reveal">
                    <div className="conv-split-image" style={{ backgroundImage: "url('/images/convergence/belt_conveyor.png')" }}></div>
                    <div className="conv-split-content">
                        <h2 className="conv-split-title">Benefits & Applications</h2>
                        <ul className="conv-list" style={{ marginBottom: "30px" }}>
                            <li>Massive reduction in transitional downtime</li>
                            <li>Quiet operation compared to traditional roller systems</li>
                            <li>Ability to handle diverse product shapes and sizes</li>
                            <li>Easy integration with vision inspection stations</li>
                        </ul>
                        <p style={{ color: "#475569" }}>
                            <strong>Industries using Belt Conveyors:</strong> Essential for highly automated food processing lines, pharmaceuticals, massive eCommerce fulfillment centers, and varied light-assembly automation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BeltConveyors;
