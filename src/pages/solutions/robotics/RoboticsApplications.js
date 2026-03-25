import React, { useEffect } from 'react';
import './RoboticsStyle.css';
import { Link } from 'react-router-dom';

const RoboticsApplications = () => {
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
        <div className="robotics-container">
            <section className="robo-hero" style={{ backgroundImage: "url('/images/robotics/agv.png')" }}>
                <div className="robo-hero-content">
                    <h1 className="robo-hero-title">Robotics Applications in Industry</h1>
                    <p className="robo-hero-subtitle">High-precision technology driving autonomous workflows</p>
                </div>
            </section>

            <section className="robo-section">
                <h2 className="robo-section-title reveal">Key Industrial Applications</h2>

                <div className="robo-split-card reveal">
                    <div className="robo-card-content">
                        <h2 className="robo-card-title">Navigation and Transport Safety</h2>
                        <div className="robo-card-req">
                            <strong>Requirement</strong>
                            <p>If natural navigation is used for AGVs, the safety sensor must protect the transportation path while simultaneously providing measurement data for navigation software.</p>
                        </div>
                        <div className="robo-card-sol">
                            <strong>Solution</strong>
                            <p>Safety laser scanners such as the <strong>RSL series</strong> combine safety protection with high-precision measurement output. These scanners provide detailed environmental mapping with high angular resolution and allow safe navigation of AGVs in dynamic industrial environments.</p>
                        </div>
                    </div>
                    <div className="robo-card-image" style={{ backgroundImage: "url('/images/robotics/agv.png')" }}></div>
                </div>

                <div className="robo-split-card reverse reveal">
                    <div className="robo-card-content">
                        <h2 className="robo-card-title">Vertical Positioning of Load Receptacles</h2>
                        <div className="robo-card-req">
                            <strong>Requirement</strong>
                            <p>For reliable storage and retrieval of pallets, the load carrier must be positioned precisely at the correct height.</p>
                        </div>
                        <div className="robo-card-sol">
                            <strong>Solution</strong>
                            <p>Laser positioning systems deliver accurate measurement data with millimeter precision, enabling reliable pallet positioning and improved warehouse automation.</p>
                        </div>
                    </div>
                    <div className="robo-card-image" style={{ backgroundImage: "url('/images/robotics/pallet.png')" }}></div>
                </div>

                <div className="robo-split-card reveal">
                    <div className="robo-card-content">
                        <h2 className="robo-card-title">Pallet Presence and Position Control</h2>
                        <div className="robo-card-req">
                            <strong>Requirement</strong>
                            <p>After transferring the pallet or container to a shuttle, it is necessary to verify that the load has been placed correctly.</p>
                        </div>
                        <div className="robo-card-sol">
                            <strong>Solution</strong>
                            <p>Optical sensors with background suppression detect pallets reliably even with reflective or complex surfaces. These sensors ensure accurate positioning and improve process reliability.</p>
                        </div>
                    </div>
                    <div className="robo-card-image" style={{ backgroundImage: "url('/images/robotics/overview.png')" }}></div>
                </div>

                <div className="robo-nav reveal">
                    <Link to="/solutions/robotics/overview" className="btn btn-secondary btn-large">← Back to Overview</Link>
                    <Link to="/solutions/robotics/safety" className="btn btn-primary btn-large">View Safety Systems →</Link>
                </div>
            </section>
        </div>
    );
};
export default RoboticsApplications;
