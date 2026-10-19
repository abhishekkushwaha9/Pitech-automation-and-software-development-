import React, { useEffect } from "react";
import PageLayout from "../../layouts/PageLayout";
import { IIoTHeroAnimation } from "../../components/SolutionsHeroAnimations";
import "../../layouts/PageLayout.css";
import "./Digitalization.css";

export default function IIoT() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries =>
                entries.forEach(e =>
                    e.isIntersecting && e.target.classList.add("visible")
                ),
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );
        document.querySelectorAll(".animate-on-scroll").forEach(el =>
            observer.observe(el)
        );
        return () => observer.disconnect();
    }, []);

    const featuresData = [
        { title: "Real-time Data Acquisition", desc: "Continuous monitoring and collection of industrial machine data." },
        { title: "Interconnectivity", desc: "Seamless communication between devices, sensors, and systems using standard protocols." },
        { title: "Edge Computing", desc: "Local data processing to reduce latency and improve response time." },
        { title: "Predictive Maintenance", desc: "Data analytics helps predict equipment failures before they occur." },
        { title: "Enhanced Security", desc: "Advanced cybersecurity measures ensure data protection and system safety." },
        { title: "Scalability", desc: "Flexible systems that can scale with expanding industrial operations." }
    ];

    const steps = [
        { step: "1", title: "Assessment & Planning", desc: "Comprehensive evaluation of current processes with strategic digitalization roadmap development." },
        { step: "2", title: "Infrastructure Setup", desc: "Deployment of robust IT/OT infrastructure for seamless connected operations." },
        { step: "3", title: "Data Integration", desc: "Unified integration of data streams from diverse industrial sources and systems." },
        { step: "4", title: "Implementation", desc: "Precision deployment of customized digital solutions with agile methodology." },
        { step: "5", title: "Testing & Validation", desc: "Rigorous quality assurance ensuring optimal system performance and efficiency." },
        { step: "6", title: "Training & Support", desc: "Comprehensive staff enablement with continuous support and optimization." }
    ];

    const coreComponents = [
        { icon: "🎛️", title: "Smart Sensors and Actuators", desc: "Devices that collect, monitor, and transmit real-time operational data from machines and industrial processes." },
        { icon: "🌐", title: "IoT Gateways", desc: "Hardware devices that connect sensors and industrial machines to centralized data platforms or cloud infrastructure." },
        { icon: "⚡", title: "Edge Computing Devices", desc: "Local computing systems that process industrial data near the source to reduce latency and bandwidth usage." },
        { icon: "☁️", title: "Cloud Platforms", desc: "Centralized platforms that store, analyze, and visualize industrial data collected from connected devices." }
    ];

    const benefitsData = [
        { icon: "⚡", title: "Increased Operational Efficiency", desc: "Real-time insights improve production processes." },
        { icon: "💰", title: "Cost Reduction", desc: "Predictive maintenance reduces unexpected downtime and maintenance costs." },
        { icon: "🚀", title: "Enhanced Productivity", desc: "Continuous monitoring optimizes machine performance." },
        { icon: "🧠", title: "Better Decision Making", desc: "Data-driven insights help managers make strategic decisions." },
        { icon: "🛡️", title: "Improved Safety", desc: "Monitoring environmental conditions and equipment health." },
        { icon: "🌱", title: "Sustainability", desc: "Optimized operations reduce energy consumption and industrial waste." }
    ];

    const applicationsData = [
        { icon: "🏭", title: "Manufacturing", desc: "Monitoring machine performance and optimizing production lines." },
        { icon: "🔋", title: "Energy Management", desc: "Tracking and improving energy consumption across facilities." },
        { icon: "📦", title: "Supply Chain Management", desc: "Improving logistics visibility and coordination." },
        { icon: "⚡", title: "Smart Grid", desc: "Managing and optimizing energy distribution systems." },
        { icon: "🌾", title: "Agriculture", desc: "Monitoring soil, crop health, and equipment performance." },
        { icon: "🏥", title: "Healthcare", desc: "Monitoring critical medical equipment and facility operations." }
    ];

    const toolData = [
        { icon: "☁️", title: "IoT Platforms", desc: "AWS IoT, Microsoft Azure IoT, Google Cloud IoT" },
        { icon: "📡", title: "Communication Protocols", desc: "MQTT, OPC UA, Modbus TCP/IP" },
        { icon: "📊", title: "Data Analytics", desc: "Apache Kafka, TensorFlow, Python" },
        { icon: "⚡", title: "Edge Computing", desc: "NVIDIA Jetson, Intel NUC, Raspberry Pi" },
        { icon: "🎛️", title: "Sensors and Actuators", desc: "Bosch, Honeywell, Siemens" },
        { icon: "🔒", title: "Cybersecurity", desc: "TLS/SSL, VPNs, Firewalls" }
    ];

    return (
        <PageLayout
            title="Industrial <span>IIoT</span> Solutions"
            subtitle="Transforming industrial operations through smart connected systems, real-time visibility, and automated control for unparalleled efficiency and productivity in modern industrial environments."
            tag="Industrial Internet of Things (IIoT)"
            heroImage="/images/IOT-neww.jpeg"
            heroAnimation={<IIoTHeroAnimation />}
            breadcrumb={[
                { label: "Solutions", path: "/services" },
                { label: "IIoT" }
            ]}
        >
            {/* 1. Features (Mapped to Section 1 Checkmarks) */}
            <section style={{ padding: "60px 20px 40px", backgroundColor: "var(--white)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div className="animate-on-scroll" style={{ marginBottom: "36px" }}>
                        <h2
                            style={{
                                fontSize: "32px",
                                fontWeight: "700",
                                marginBottom: "16px",
                                color: "var(--gray-900)"
                            }}
                        >
                            Key Operational Features
                        </h2>
                        <p
                            style={{
                                fontSize: "16px",
                                lineHeight: "1.6",
                                color: "var(--gray-600)",
                                maxWidth: "850px"
                            }}
                        >
                            Unlock profound oversight utilizing the next generation of industrial connectivity algorithms, smart sensor telemetry, and real-time edge processing.
                        </p>
                    </div>

                    <div className="animate-on-scroll digitalization-overview-grid">
                        {/* Left Column - 2-Column Grid of 6 Points */}
                        <div className="digitalization-points-grid">
                            {featuresData.map((feature, idx) => (
                                <div key={idx} className="digitalization-point-card">
                                    <div className="digitalization-point-icon">
                                        ✓
                                    </div>
                                    <div>
                                        <h4
                                            style={{
                                                fontWeight: "600",
                                                fontSize: "14px",
                                                color: "var(--gray-900)",
                                                marginBottom: "4px",
                                                lineHeight: "1.3"
                                            }}
                                        >
                                            {feature.title}
                                        </h4>
                                        <p style={{ fontSize: "12px", color: "var(--gray-600)", margin: 0, lineHeight: "1.45" }}>
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column - Image */}
                        <div className="digitalization-image-wrap">
                            <img
                                src="/images/iott new.jpeg"
                                alt="IIoT Key Operational Features"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Core Components (Mapped to Grid style) */}
            <section style={{ padding: "60px 20px 50px", backgroundColor: "var(--gray-50)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <h2
                            style={{
                                fontSize: "32px",
                                fontWeight: "700",
                                color: "var(--gray-900)",
                                marginBottom: "12px"
                            }}
                        >
                            Core Digitalization Components
                        </h2>
                        <p
                            style={{
                                fontSize: "16px",
                                color: "var(--gray-600)",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}
                        >
                            Essential systems powering modern industrial transformation.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: "24px"
                        }}
                    >
                        {coreComponents.map((item, idx) => (
                            <div
                                key={idx}
                                className="animate-on-scroll"
                                style={{
                                    backgroundColor: "var(--white)",
                                    padding: "30px 24px 26px",
                                    borderRadius: "16px",
                                    border: "1px solid var(--gray-100)",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    textAlign: "left",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <div
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "14px",
                                        backgroundColor: "rgba(37, 99, 235, 0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "26px",
                                        margin: "0 auto 16px auto"
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <h3
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "var(--gray-900)",
                                        marginBottom: "10px",
                                        lineHeight: "1.35",
                                        minHeight: "48px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        textAlign: "left",
                                        width: "100%"
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                        color: "var(--gray-600)",
                                        margin: 0,
                                        textAlign: "left",
                                        width: "100%"
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Digitalization Journey (Mapped to numbered steps) */}
            <section style={{ padding: "80px 20px", backgroundColor: "var(--white)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2
                            style={{
                                fontSize: "32px",
                                fontWeight: "700",
                                color: "var(--gray-900)",
                                marginBottom: "16px"
                            }}
                        >
                            Digitalization Journey
                        </h2>
                        <p
                            style={{
                                fontSize: "16px",
                                color: "var(--gray-600)",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}
                        >
                            Our proven 6-step methodology for success.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "30px"
                        }}
                    >
                        {steps.map((item, idx) => (
                            <div
                                key={idx}
                                className="animate-on-scroll"
                                style={{
                                    position: "relative",
                                    padding: "40px 30px",
                                    backgroundColor: "var(--gray-50)",
                                    borderRadius: "var(--radius-lg)",
                                    borderLeft: "4px solid var(--primary-light)"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        marginBottom: "16px"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            backgroundColor: "var(--primary-light)",
                                            color: "var(--white)",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: "700",
                                            fontSize: "18px",
                                            flexShrink: 0
                                        }}
                                    >
                                        {item.step}
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "700",
                                            color: "var(--gray-900)",
                                            margin: 0
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                                <p style={{ fontSize: "14px", color: "var(--gray-600)", margin: 0 }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Benefits (Grid) */}
            <section style={{ padding: "60px 20px 50px", backgroundColor: "var(--gray-50)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <h2
                            style={{
                                fontSize: "32px",
                                fontWeight: "700",
                                color: "var(--gray-900)",
                                marginBottom: "12px"
                            }}
                        >
                            Benefits
                        </h2>
                        <p
                            style={{
                                fontSize: "16px",
                                color: "var(--gray-600)",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}
                        >
                            Advantages gained through implementing our digitalization solutions
                        </p>
                    </div>

                    <div className="animate-on-scroll iiot-three-card-grid">
                        {benefitsData.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    backgroundColor: "var(--white)",
                                    padding: "32px 24px 28px",
                                    borderRadius: "var(--radius-lg)",
                                    border: "1px solid var(--gray-100)",
                                    boxShadow: "var(--shadow)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    textAlign: "left",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <div
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "14px",
                                        backgroundColor: "rgba(37, 99, 235, 0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "28px",
                                        margin: "0 auto 16px auto"
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <h3
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "var(--gray-900)",
                                        marginBottom: "10px",
                                        minHeight: "48px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        textAlign: "left",
                                        lineHeight: "1.3",
                                        width: "100%"
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                        color: "var(--gray-600)",
                                        margin: 0,
                                        textAlign: "left",
                                        width: "100%"
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Applications (Grid) */}
            <section style={{ padding: "60px 20px 50px", backgroundColor: "var(--white)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <h2
                            style={{
                                fontSize: "32px",
                                fontWeight: "700",
                                color: "var(--gray-900)",
                                marginBottom: "12px"
                            }}
                        >
                            Applications
                        </h2>
                        <p
                            style={{
                                fontSize: "16px",
                                color: "var(--gray-600)",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}
                        >
                            Practical implementations across various industrial domains
                        </p>
                    </div>

                    <div className="animate-on-scroll iiot-three-card-grid">
                        {applicationsData.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    backgroundColor: "var(--gray-50)",
                                    padding: "32px 24px 28px",
                                    borderRadius: "var(--radius-lg)",
                                    border: "1px solid var(--gray-100)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    textAlign: "left",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <div
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "14px",
                                        backgroundColor: "rgba(37, 99, 235, 0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "28px",
                                        margin: "0 auto 16px auto"
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <h3
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "var(--gray-900)",
                                        marginBottom: "10px",
                                        minHeight: "48px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        textAlign: "left",
                                        lineHeight: "1.3",
                                        width: "100%"
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                        color: "var(--gray-600)",
                                        margin: 0,
                                        textAlign: "left",
                                        width: "100%"
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Tools & Technologies (Grid) */}
            <section style={{ padding: "60px 20px 50px", backgroundColor: "var(--gray-50)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <h2
                            style={{
                                fontSize: "32px",
                                fontWeight: "700",
                                color: "var(--gray-900)",
                                marginBottom: "12px"
                            }}
                        >
                            Tools and Technologies We Use
                        </h2>
                        <p
                            style={{
                                fontSize: "16px",
                                color: "var(--gray-600)",
                                maxWidth: "600px",
                                margin: "0 auto"
                            }}
                        >
                            Comprehensive suite for industrial digital transformation
                        </p>
                    </div>

                    <div className="animate-on-scroll iiot-three-card-grid">
                        {toolData.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    backgroundColor: "var(--white)",
                                    padding: "32px 24px 28px",
                                    borderRadius: "var(--radius-lg)",
                                    border: "1px solid var(--gray-100)",
                                    boxShadow: "var(--shadow)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    textAlign: "left",
                                    borderTop: "4px solid var(--primary-light)",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <div
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "14px",
                                        backgroundColor: "rgba(37, 99, 235, 0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "28px",
                                        margin: "0 auto 16px auto"
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <h3
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "var(--gray-900)",
                                        marginBottom: "10px",
                                        minHeight: "48px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        textAlign: "left",
                                        lineHeight: "1.3",
                                        width: "100%"
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                        color: "var(--gray-600)",
                                        margin: 0,
                                        textAlign: "left",
                                        width: "100%"
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </PageLayout>
    );
}
