import React, { useEffect } from 'react';
import './RoboticsStyle.css';
import { Link } from 'react-router-dom';

const RoboticsSafety = () => {
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
            <section className="robo-hero" style={{ backgroundImage: "url('/images/robotics/safety.png')" }}>
                <div className="robo-hero-content">
                    <h1 className="robo-hero-title">Robotics Safety and Monitoring Systems</h1>
                    <p className="robo-hero-subtitle">Ensuring operational security in modern smart factories</p>
                </div>
            </section>

            <section className="robo-section">
                <h2 className="robo-section-title reveal">Cell Safety and Sensor Monitoring</h2>

                <div className="robo-split-card reveal">
                    <div className="robo-card-content">
                        <h2 className="robo-card-title">Restart Protection in Robot Cells</h2>
                        <div className="robo-card-req">
                            <strong>Requirement</strong>
                            <p>To prevent accidents, robotic processes must not restart until it is confirmed that no personnel are inside the robot cell or hidden working areas.</p>
                        </div>
                        <div className="robo-card-sol">
                            <strong>Solution</strong>
                            <p>3D radar safety systems monitor the protected area and detect human presence even in harsh environments such as welding zones or dusty factories.</p>
                        </div>
                    </div>
                    <div className="robo-card-image" style={{ backgroundImage: "url('/images/robotics/safety.png')" }}></div>
                </div>

                <div className="robo-split-card reverse reveal">
                    <div className="robo-card-content">
                        <h2 className="robo-card-title">Monitoring Hidden Areas</h2>
                        <div className="robo-card-req">
                            <strong>Requirement</strong>
                            <p>Robot cells often contain hidden areas where workers may not be visible.</p>
                        </div>
                        <div className="robo-card-sol">
                            <strong>Solution</strong>
                            <p>Radar-based safety technology detects both moving and stationary objects to ensure safe operation by monitoring complex geometries invisibly.</p>
                        </div>
                    </div>
                    <div className="robo-card-image" style={{ backgroundImage: "url('/images/robotics/overview.png')" }}></div>
                </div>

                <div className="robo-split-card reveal">
                    <div className="robo-card-content">
                        <h2 className="robo-card-title">Material Presence Detection on Robotic Grippers</h2>
                        <div className="robo-card-req">
                            <strong>Requirement</strong>
                            <p>Sensors must detect whether the robotic gripper has successfully picked up the material.</p>
                        </div>
                        <div className="robo-card-sol">
                            <strong>Solution</strong>
                            <p>Compact optical distance sensors mounted on the gripper measure distance and confirm correct positioning of the material. This improves process safety and production accuracy.</p>
                        </div>
                    </div>
                    <div className="robo-card-image" style={{ backgroundImage: "url('/images/robotics/agv.png')" }}></div>
                </div>

                <div className="robo-nav reveal">
                    <Link to="/solutions/robotics/applications" className="btn btn-secondary btn-large">← Back to Applications</Link>
                    <Link to="/products/sensor" className="btn btn-primary btn-large">Return to Products</Link>
                </div>
            </section>
        </div>
    );
};
export default RoboticsSafety;
