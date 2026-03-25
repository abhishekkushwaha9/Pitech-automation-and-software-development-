import React, { useEffect } from 'react';
import './RoboticsStyle.css';
import { Link } from 'react-router-dom';

const RoboticsOverview = () => {
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
        <div className="robotics-container">
            <section className="robo-hero" style={{ backgroundImage: "url('/images/robotics/overview.png')" }}>
                <div className="robo-hero-content">
                    <h1 className="robo-hero-title">Robotics in Smart Manufacturing</h1>
                    <p className="robo-hero-subtitle">Intelligent Automation for Modern Industry</p>
                </div>
            </section>

            <section className="robo-section">
                <h2 className="robo-section-title reveal">Transforming Industrial Operations</h2>
                <div className="robo-split-card reveal">
                    <div className="robo-card-content">
                        <h2 className="robo-card-title">Agile Material Flow & Manufacturing</h2>
                        <p style={{ marginBottom: "15px" }}>
                            Industrial robotics is fundamentally transforming manufacturing, logistics, and warehousing operations globally. By answering the increasing demand for flexible material flow, robotic integrations are paving the way for adaptable, high-efficiency smart factories.
                        </p>
                        <p style={{ marginBottom: "15px" }}>
                            <strong>Automated Guided Vehicles (AGVs)</strong> are actively replacing traditional physical conveyors to enable faster process changes and uniquely flexible automation routing. Whether for material delivery or picking operations, intelligent AGVs act as the lifelines of the factory floor.
                        </p>
                        <p>
                            Furthermore, fully automated robotic systems are actively supporting heavy assembly and production tasks, providing unmatched precision, speed, and workplace safety without operational fatigue.
                        </p>
                    </div>
                    <div className="robo-card-image" style={{ backgroundImage: "url('/images/robotics/pallet.png')" }}></div>
                </div>

                <div className="robo-split-card reverse reveal">
                    <div className="robo-card-content">
                        <h2 className="robo-card-title">Mobile vs Stationary Robotics</h2>
                        <div className="robo-card-sol" style={{ marginBottom: "20px" }}>
                            <strong>Mobile Robotics (AGVs)</strong>
                            <p>Automated Guided Vehicles utilized heavily for dynamic transport, agile logistics, and non-linear warehouse workflows connecting smart floor nodes.</p>
                        </div>
                        <div className="robo-card-req">
                            <strong>Stationary Robotics (Robotic Arms)</strong>
                            <p>Industrial robotic arms intricately stationed for precision welding, fast-paced assembly, picking, and heavy payload manufacturing directly on the production line.</p>
                        </div>
                    </div>
                    <div className="robo-card-image" style={{ backgroundImage: "url('/images/robotics/overview.png')" }}></div>
                </div>

                <div className="robo-nav reveal">
                    <Link to="/solutions/robotics/applications" className="btn btn-primary btn-large">View Robot Applications</Link>
                    <Link to="/solutions/robotics/safety" className="btn btn-secondary btn-large">Explore Safety Systems</Link>
                </div>
            </section>
        </div>
    );
};
export default RoboticsOverview;
