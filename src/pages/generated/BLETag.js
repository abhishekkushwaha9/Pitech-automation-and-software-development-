import React, { useEffect } from "react";
import {
    MapPin,
    Zap,
    Feather,
    Wifi,
    Navigation,
    Network,
    Factory,
    Package,
    ShieldCheck,
    Truck,
    HeartPulse,
    Building
} from "lucide-react";
import PageLayout from "../../layouts/PageLayout";
import { BLEHeroAnimation } from "../../components/SolutionsHeroAnimations";
import "./BLETag.css";

const BLETag = () => {
    // Intersection observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const featuresData = [
        { icon: <MapPin size={26} strokeWidth={2} />, title: "Real-Time Asset Tracking", desc: "BLE tags allow companies to monitor the location of equipment, tools, and assets within a facility in real time.", color: "#3B82F6" },
        { icon: <Zap size={26} strokeWidth={2} />, title: "Low Power Consumption", desc: "Bluetooth Low Energy technology ensures minimal battery usage, allowing BLE tags to operate for months or even years.", color: "#10B981" },
        { icon: <Feather size={26} strokeWidth={2} />, title: "Compact and Lightweight Design", desc: "BLE tags are small and easy to attach to equipment, tools, pallets, or machinery.", color: "#8B5CF6" },
        { icon: <Wifi size={26} strokeWidth={2} />, title: "Wireless Communication", desc: "The tags communicate wirelessly with BLE gateways, mobile devices, and IoT systems without requiring complex wiring.", color: "#F59E0B" },
        { icon: <Navigation size={26} strokeWidth={2} />, title: "Indoor Positioning Capability", desc: "BLE systems enable indoor asset tracking in factories, warehouses, hospitals, and offices.", color: "#EF4444" },
        { icon: <Network size={26} strokeWidth={2} />, title: "Easy Integration with IoT Platforms", desc: "BLE tag data can be integrated into industrial dashboards, ERP systems, and IoT monitoring platforms.", color: "#EC4899" }
    ];

    const principlesData = [
        { title: "Signal Broadcasting", desc: "BLE tags continuously broadcast Bluetooth signals containing unique identification information." },
        { title: "Signal Detection", desc: "BLE gateways or receivers placed around the facility detect the signals transmitted by the tags." },
        { title: "Location Calculation", desc: "The system analyzes signal strength and gateway positions to determine the approximate location of the asset." },
        { title: "Data Processing", desc: "The tracking data is sent to the central server or IoT platform for processing and visualization." },
        { title: "Dashboard Monitoring", desc: "Operators can view asset locations, movement history, and system alerts through monitoring dashboards." }
    ];

    const applicationsData = [
        { icon: <Factory size={26} strokeWidth={2} />, title: "Industrial Asset Tracking", desc: "Track machines, tools, equipment, and movable assets within manufacturing facilities.", color: "#3B82F6" },
        { icon: <Package size={26} strokeWidth={2} />, title: "Warehouse Management", desc: "Monitor pallet locations, storage zones, and inventory movement inside warehouses.", color: "#10B981" },
        { icon: <ShieldCheck size={26} strokeWidth={2} />, title: "Employee Safety Monitoring", desc: "Track worker location in hazardous environments to improve safety and emergency response.", color: "#8B5CF6" },
        { icon: <Truck size={26} strokeWidth={2} />, title: "Logistics and Supply Chain", desc: "Monitor the movement of goods and assets across logistics and transportation facilities.", color: "#F59E0B" },
        { icon: <HeartPulse size={26} strokeWidth={2} />, title: "Hospital Equipment Tracking", desc: "Hospitals use BLE tags to track medical devices, wheelchairs, beds, and critical equipment.", color: "#EF4444" },
        { icon: <Building size={26} strokeWidth={2} />, title: "Smart Building Management", desc: "BLE tags can help monitor equipment movement within offices, campuses, and large buildings.", color: "#EC4899" }
    ];

    const benefitsData = [
        "Real-time visibility of assets",
        "Reduced asset loss and misplacement",
        "Improved operational efficiency",
        "Lower infrastructure cost compared to wired tracking systems",
        "Easy deployment and scalability",
        "Integration with Industry 4.0 smart factory platforms"
    ];

    return (
        <PageLayout
            title="BLE Tag <span>(Bluetooth Low Energy)</span>"
            tag="Industry 4.0"
            subtitle="Transform indoor positioning and asset tracking with compact, wireless, long-lasting Bluetooth Low Energy technology."
            heroImage="/images/ble.png"
            heroAnimation={<BLEHeroAnimation />}
            breadcrumb={[
                { label: "Solutions", path: "/services" },
                { label: "Industry 4.0", path: "/industry/digitalization" },
                { label: "BLE Tag" }
            ]}
        >
            <div className="ble-container">
                {/* Overview Section */}
                <section className="ble-section ble-bg-white">
                    <div className="ble-overview">
                        <div className="ble-overview-content animate-on-scroll">
                            <h2 className="ble-section-title">Product Overview</h2>
                            <div className="ble-section-desc">
                                <p style={{ marginBottom: '15px' }}>
                                    BLE Tags (Bluetooth Low Energy Tags) are smart wireless tracking devices used in modern Industry 4.0 environments to monitor the location, movement, and status of assets in real time. These compact electronic tags communicate using Bluetooth Low Energy technology and can be detected by BLE gateways, mobile devices, or industrial IoT systems.
                                </p>
                                <p style={{ marginBottom: '15px' }}>
                                    In PiTech Industry 4.0 solutions, BLE Tags help organizations track tools, equipment, vehicles, inventory, and personnel across manufacturing plants, warehouses, and logistics facilities. The system provides accurate indoor positioning and asset monitoring without requiring complex wiring or infrastructure.
                                </p>
                                <p style={{ marginBottom: '15px' }}>
                                    By integrating BLE Tags with IoT platforms, dashboards, and automation systems, companies can gain real-time visibility of assets and optimize operational efficiency. These smart tags improve asset utilization, reduce loss or misplacement of equipment, and enable better decision-making through data analytics.
                                </p>
                                <p>
                                    BLE technology consumes extremely low power, allowing the tags to operate for long periods on small batteries while continuously broadcasting signals for location tracking.
                                </p>
                            </div>
                        </div>
                        <div className="ble-overview-image animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
                            <img src="/images/ble.png" alt="BLE Smart Tag Device" />
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="ble-section-alt">
                    <div className="ble-section-header animate-on-scroll">
                        <h2 className="ble-section-title">Key Features</h2>
                        <p className="ble-section-desc">Advanced tracking capabilities driven by efficient Bluetooth technology.</p>
                    </div>
                    <div className="ble-grid">
                        {featuresData.map((feature, idx) => (
                            <div key={idx} className="ble-card animate-on-scroll" style={{ borderTopColor: feature.color, transitionDelay: `${0.1 * idx}s` }}>
                                <div className="ble-card-icon" style={{ color: feature.color, background: `${feature.color}15` }}>
                                    {feature.icon}
                                </div>
                                <h3 className="ble-card-title">{feature.title}</h3>
                                <p className="ble-card-text">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Working Principle Section */}
                <section className="ble-section">
                    <div className="ble-section-header animate-on-scroll">
                        <h2 className="ble-section-title">Working Principle</h2>
                        <p className="ble-section-desc">End-to-end operational flow from signal broadcasting to centralized dashboarding.</p>
                    </div>
                    <div className="ble-steps">
                        {principlesData.map((step, idx) => (
                            <div key={idx} className="ble-step animate-on-scroll" style={{ transitionDelay: `${0.1 * idx}s` }}>
                                <div className="ble-step-number">{idx + 1}</div>
                                <div className="ble-step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Applications Section */}
                <section className="ble-section-alt">
                    <div className="ble-section-header animate-on-scroll">
                        <h2 className="ble-section-title">Applications</h2>
                        <p className="ble-section-desc">Practical deployments across industrial, commercial, and healthcare domains.</p>
                    </div>
                    <div className="ble-grid">
                        {applicationsData.map((app, idx) => (
                            <div key={idx} className="ble-card animate-on-scroll" style={{ borderTopColor: app.color, transitionDelay: `${0.1 * idx}s` }}>
                                <div className="ble-card-icon" style={{ color: app.color, background: `${app.color}15` }}>
                                    {app.icon}
                                </div>
                                <h3 className="ble-card-title">{app.title}</h3>
                                <p className="ble-card-text">{app.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="ble-section">
                    <div className="ble-section-header animate-on-scroll">
                        <h2 className="ble-section-title">Benefits</h2>
                        <p className="ble-section-desc">Why modern enterprises choose BLE Tag solutions for asset visibility.</p>
                    </div>
                    <div className="ble-benefits-grid">
                        {benefitsData.map((benefit, idx) => (
                            <div key={idx} className="ble-benefit-item animate-on-scroll" style={{ transitionDelay: `${0.05 * idx}s` }}>
                                <div className="ble-benefit-icon">✓</div>
                                <div className="ble-benefit-text">{benefit}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default BLETag;
