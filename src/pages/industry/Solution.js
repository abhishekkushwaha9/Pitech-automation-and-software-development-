import React, { useState, useEffect } from "react";
import "./Solution.css";

const Solution = () => {
    const [expandedService, setExpandedService] = useState(null);
    const [expandedMAT, setExpandedMAT] = useState(null);
    const [expandedDigital, setExpandedDigital] = useState(null);
    const [expandedDashboard, setExpandedDashboard] = useState(null);
    const [expandedMES, setExpandedMES] = useState(null);
    const [expandedSoftware, setExpandedSoftware] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-show");
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll("[data-animate]").forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // ============================
    // MAT DATA
    // ============================
    const matData = {
        title: "MAT – Manufacturing Assembly & Traceability",
        subtitle: "Complete Component-to-Finished Goods Tracking Across Production Lifecycle",
        description: "Manufacturing Assembly & Traceability (MAT) ensures every component, sub-assembly, and finished product is digitally tracked throughout the production process.",
        summary: "From raw material receipt to final dispatch — we implement end-to-end traceability solutions including Barcode, RFID, and MES integration.",
        image: "/images/Traceability.jpeg",
        solutions: [
            {
                title: "Manufacturing & Assembly Traceability System",
                icon: "🔍",
                description: "Complete tracking of components and assemblies across the production lifecycle.",
                fullDescription: "Our Manufacturing & Assembly Traceability System ensures every component, sub-assembly, and finished product is digitally tracked throughout the production process. This provides complete visibility and control over your manufacturing operations.",
                cardImage: "/images/Traceability12.jpeg",
                features: [
                    "Component-Level Tracking",
                    "Assembly Stage Verification",
                    "Batch & Serial Number Management",
                    "Digital Production Records",
                    "In-Process Quality Checks",
                    "Real-Time Production Monitoring"
                ],
                technologies: [
                    "Barcode & QR",
                    "RFID",
                    "MES Integration",
                    "Cloud Database",
                    "IoT Sensors"
                ],
                benefits: [
                    "100% Product Traceability",
                    "Faster Root Cause Analysis",
                    "Improved Quality Compliance",
                    "Reduced Rework & Waste",
                    "Regulatory Compliance"
                ],
            },
            {
                title: "Barcode & RFID Integration",
                icon: "📦",
                description: "Production tracking, batch traceability & inventory management.",
                fullDescription: "Complete barcode & RFID-based tracking from raw material to finished goods. We implement automated data capture solutions that integrate seamlessly with your existing systems.",
                cardImage: "/images/Traceability12.jpeg",
                technologies: [
                    "Barcode Scanners",
                    "RFID Readers",
                    "QR Codes",
                    "Data Matrix"
                ],
                benefits: [
                    "100% Traceability",
                    "Real-time inventory",
                    "Error reduction",
                    "Fast data capture"
                ],
            },
            {
                title: "PLC Programming & Control Systems",
                icon: "⚙️",
                description: "Advanced machine control using PLC-based logic for precise operations.",
                fullDescription: "We program and commission PLC systems including Siemens, Allen Bradley, Mitsubishi & Omron to ensure reliable automation and seamless integration with traceability systems.",
                cardImage: "/images/Traceability999.jpeg",
                technologies: [
                    "Siemens",
                    "Allen Bradley",
                    "Mitsubishi",
                    "Omron",
                ],
                benefits: [
                    "Reduced manual errors",
                    "Higher productivity",
                    "Better machine control",
                    "Automated data collection"
                ],
            },
            {
                title: "HMI & SCADA Development",
                icon: "📱",
                description: "Interactive monitoring systems for real-time production visibility.",
                fullDescription: "User-friendly dashboards with live machine status, alarms & data logging. Visualize your traceability data in real-time.",
                cardImage: "/images/Traceability998.jpeg",
                technologies: [
                    "WinCC",
                    "Ignition",
                    "FactoryTalk",
                ],
                benefits: [
                    "Real-time monitoring",
                    "Improved decision making",
                    "Production visibility"
                ],
            },
        ],
    };

    // ============================
    // DIGITAL WORK INITIALIZATION DATA
    // ============================
    const digitalData = {
        title: "Digital Work Initialization",
        subtitle: "Complete Digital Transformation Journey from Assessment to Deployment",
        description: "Digital Work Initialization (DWI) ensures your manufacturing processes are digitally transformed with structured planning, implementation, and deployment.",
        summary: "From current process analysis to live system launch — we provide end-to-end digital transformation solutions tailored to your specific manufacturing needs.",
        image: "/images/DWI (2).png",
        phases: [
            {
                title: "Digital Assessment & Process Analysis",
                icon: "🔍",
                description: "Current production process ka analysis aur workflow mapping",
                fullDescription: "Comprehensive analysis of your existing processes to identify automation opportunities and pain points.",
                cardImage: "/images/DWI1.jpeg",
                items: [
                    "Current production process analysis",
                    "Manual vs automated workflow mapping",
                    "Pain points identification",
                    "Data flow audit"
                ],
                benefits: [
                    "Clear understanding of current state",
                    "Identified automation opportunities",
                    "Data-driven decision making"
                ]
            },
            {
                title: "Digital Strategy Planning",
                icon: "🎯",
                description: "Automation roadmap aur software architecture planning",
                fullDescription: "Strategic planning for your digital transformation journey with clear milestones and deliverables.",
                cardImage: "/images/DWI2.jpeg",
                items: [
                    "Automation roadmap design",
                    "Software architecture planning",
                    "Cloud migration planning",
                    "Cybersecurity framework setup"
                ],
                benefits: [
                    "Structured implementation approach",
                    "Risk mitigation",
                    "Scalable architecture"
                ]
            },
            {
                title: "Infrastructure Setup",
                icon: "⚙️",
                description: "PLC, SCADA aur IoT infrastructure ka setup",
                fullDescription: "Robust infrastructure setup for seamless digital operations and connectivity.",
                cardImage: "/images/DWI3.jpeg",
                items: [
                    "PLC & SCADA system base setup",
                    "Server & cloud configuration",
                    "IoT device connectivity",
                    "Network & API integration foundation"
                ],
                benefits: [
                    "Reliable infrastructure",
                    "Real-time connectivity",
                    "Scalable setup"
                ]
            },
            {
                title: "Data Digitization & Integration",
                icon: "💾",
                description: "Manual records ko digital system me convert karna",
                fullDescription: "End-to-end data digitization and system integration for complete visibility.",
                cardImage: "/images/DWI4.jpeg",
                items: [
                    "Manual records to digital system conversion",
                    "ERP system implementation",
                    "Machine data integration",
                    "Dashboard & analytics setup"
                ],
                benefits: [
                    "Single source of truth",
                    "Real-time data visibility",
                    "Improved decision making"
                ]
            },
            {
                title: "Pilot Implementation",
                icon: "🧪",
                description: "Small-scale testing aur prototype validation",
                fullDescription: "Risk-free pilot implementation to validate solutions before full deployment.",
                cardImage: "/images/DWI5.jpeg",
                items: [
                    "Small-scale automation testing",
                    "Prototype machine testing",
                    "Software beta deployment",
                    "Performance benchmarking"
                ],
                benefits: [
                    "Risk-free validation",
                    "Real-world testing",
                    "Optimized solution"
                ]
            },
            {
                title: "Training & Deployment",
                icon: "🎓",
                description: "Staff training aur live system launch",
                fullDescription: "Comprehensive training and smooth deployment for successful digital transformation.",
                cardImage: "/images/DWI6.jpeg",
                items: [
                    "Staff training programs",
                    "SOP documentation",
                    "Live system launch",
                    "Continuous monitoring setup"
                ],
                benefits: [
                    "Skilled workforce",
                    "Smooth transition",
                    "Ongoing support"
                ]
            }
        ]
    };

    // ============================
    // PRODUCTION DASHBOARD DATA
    // ============================
    const dashboardData = {
        title: "Production Dashboard",
        subtitle: "Real-Time Production Monitoring & Performance Analytics",
        description: "Production Dashboard provides real-time visibility into your manufacturing operations, integrating data from PLCs, SCADA, IIoT devices, and ERP systems for comprehensive production monitoring.",
        summary: "From machine utilization to energy efficiency — we deliver actionable insights through interactive dashboards tailored to your production environment.",
        image: "/images/dashboard.png",
        metrics: [
            {
                title: "Automation & Control Overview",
                icon: "🏭",
                description: "Complete automation infrastructure monitoring",
                fullDescription: "Comprehensive overview of all automation components including PLCs, SCADA, robotics, and IIoT devices for complete control room visibility.",
                cardImage: "/images/dash1.jpeg",
                items: [
                    "PLC Connected Units: 126",
                    "SCADA Monitoring Stations: 14",
                    "Robotics Cells Active: 22",
                    "Motion Control Systems: 48",
                    "IIoT Devices Connected: 310",
                    "Real-Time Data Points: 18,500+"
                ],
                benefits: [
                    "Centralized control",
                    "Complete visibility",
                    "Quick issue detection"
                ]
            },
            {
                title: "Production Performance & Analytics",
                icon: "⚙️",
                description: "Live production metrics and efficiency tracking",
                fullDescription: "Real-time tracking of production lines, machine efficiency, output rates, and target achievements with detailed analytics.",
                cardImage: "/images/dash2.jpeg",
                items: [
                    "Active Production Lines: 10",
                    "Total Machines: 158",
                    "Current Line Efficiency: 93.4%",
                    "Daily Production Output: 17,860 Units",
                    "Target Achievement: 89%",
                    "Average Cycle Time: 42 sec/unit"
                ],
                benefits: [
                    "Improved efficiency",
                    "Better planning",
                    "Real-time insights"
                ]
            },
            {
                title: "Robotics & Automation Status",
                icon: "🤖",
                description: "Robotics performance and automation health",
                fullDescription: "Complete monitoring of robotics cells, automated task completion, and manual intervention reduction metrics for optimal automation ROI.",
                cardImage: "/images/dash3.jpeg",
                items: [
                    "Robots Operational: 20",
                    "Robots Under Calibration: 2",
                    "Automated Task Completion Rate: 96.8%",
                    "Manual Intervention Reduction: –41%",
                    "Workplace Safety Improvement: +37%",
                    "Automated Quality Checks: 98.2%"
                ],
                benefits: [
                    "Higher automation",
                    "Reduced manual work",
                    "Improved safety"
                ]
            },
            {
                title: "ERP & System Integration",
                icon: "💻",
                description: "Software integration and system health",
                fullDescription: "Real-time monitoring of ERP modules, cloud infrastructure, AI predictive alerts, and API integrations for seamless operations.",
                cardImage: "/images/dash4.jpeg",
                items: [
                    "ERP Modules: Finance | HR | Inventory | Production",
                    "Active ERP Users: 420",
                    "Cloud Server Uptime: 99.97%",
                    "AI Predictive Alerts Today: 17",
                    "Workflow Automations: 63",
                    "API Integrations Active: 38",
                    "Security Threats Blocked: 128/month"
                ],
                benefits: [
                    "Seamless integration",
                    "High availability",
                    "Predictive maintenance"
                ]
            },
            {
                title: "Machine Building & Procurement",
                icon: "🏗️",
                description: "Custom machines and supply chain tracking",
                fullDescription: "Track custom machine deliveries, assembly line installations, retrofit projects, and global procurement metrics in one place.",
                cardImage: "/images/dash5.jpeg",
                items: [
                    "Custom Machines Delivered: 28/year",
                    "Assembly Lines Installed: 6",
                    "Testing Equipment Units: 12",
                    "Retrofit Projects: 19",
                    "Precision Accuracy: ±0.01mm",
                    "Active Suppliers: 75+ (18 Countries)",
                    "On-Time Delivery: 97.8%"
                ],
                benefits: [
                    "Quality assurance",
                    "Supply chain visibility",
                    "Cost optimization"
                ]
            },
            {
                title: "Sustainability & Energy Efficiency",
                icon: "🌱",
                description: "Green manufacturing and energy metrics",
                fullDescription: "Track energy consumption optimization, renewable energy usage, waste reduction, and sustainability initiatives for eco-friendly manufacturing.",
                cardImage: "/images/dash6.jpeg",
                items: [
                    "Energy Consumption: –16%",
                    "Renewable Energy Usage: 24%",
                    "Green Procurement Ratio: 31%",
                    "Waste Reduction: –22%",
                    "Carbon Footprint: –18%",
                    "Water Conservation: –15%"
                ],
                benefits: [
                    "Lower energy costs",
                    "Environmental compliance",
                    "Sustainable operations"
                ]
            }
        ]
    };

    // ============================
    // MES DATA - 6 CARDS
    // ============================
    const mesData = {
        title: "MES (Manufacturing Execution System)",
        subtitle: "Real-Time Production Monitoring, OEE Tracking & Quality Management",
        description: "Manufacturing Execution System (MES) provides complete shop-floor visibility, from production orders to quality control, with real-time data integration and analytics.",
        summary: "Track production orders, monitor OEE, manage quality, and ensure complete traceability with our advanced MES dashboard.",
        image: "/images/mes-hero.jpg",
        metrics: [
            {
                title: "Production Order Management",
                icon: "📋",
                description: "Real-time tracking of all production orders",
                fullDescription: "Complete visibility into your production orders with status tracking, completion rates, and fulfillment times.",
                cardImage: "/images/mes-orders.jpg",
                stats: [
                    { label: "Total Production Orders", value: "42" },
                    { label: "Orders In Progress", value: "28" },
                    { label: "Completed Orders", value: "11" },
                    { label: "Delayed Orders", value: "3", warning: true },
                    { label: "On-Time Completion Rate", value: "96.2%" }
                ],
                analysis: "Production running smoothly with 96.2% on-time completion. 3 delayed orders need attention.",
                recommendations: [
                    "Review material planning for Line 2",
                    "Consider buffer stock for critical components"
                ]
            },
            {
                title: "Work-in-Progress (WIP) Tracking",
                icon: "⚙️",
                description: "Real-time WIP across all production lines",
                fullDescription: "Monitor work-in-progress inventory across all production lines. Identify bottlenecks and optimize material flow.",
                cardImage: "/images/mes-wip.jpg",
                stats: [
                    { label: "Total WIP Units", value: "3,420" },
                    { label: "Line 1 WIP", value: "820" },
                    { label: "Line 2 WIP", value: "760", bottleneck: true },
                    { label: "Line 3 WIP", value: "690" },
                    { label: "Bottleneck Detection", value: "Line 2", alert: "Material Delay" }
                ],
                analysis: "Line 2 identified as bottleneck with material delay. WIP accumulating here.",
                recommendations: [
                    "Expedite material delivery to Line 2",
                    "Implement kanban system for materials"
                ]
            },
            {
                title: "OEE Dashboard",
                icon: "📊",
                description: "Overall Equipment Effectiveness tracking",
                fullDescription: "Real-time OEE Dashboard with breakdown into Availability, Performance, and Quality.",
                cardImage: "/images/mes-oee.jpg",
                stats: [
                    { label: "Availability", value: "94.1%" },
                    { label: "Performance", value: "92.7%" },
                    { label: "Quality", value: "97.8%" },
                    { label: "Overall OEE", value: "85.3%", sub: "World Class: 85%" }
                ],
                analysis: "OEE at 85.3% - world-class level achieved!",
                recommendations: [
                    "Optimize changeover times on Line 3",
                    "Implement SMED methodology"
                ]
            },
            {
                title: "Quality Management",
                icon: "✅",
                description: "Integrated quality control and SPC monitoring",
                fullDescription: "Real-time quality metrics with SPC monitoring. Track First Pass Yield and rework rates.",
                cardImage: "/images/mes-quality.jpg",
                stats: [
                    { label: "First Pass Yield", value: "96.5%" },
                    { label: "Rework Rate", value: "2.1%", warning: true },
                    { label: "Scrap Rate", value: "1.4%" },
                    { label: "Quality Incidents", value: "2", alert: "Today" },
                    { label: "SPC Status", value: "Stable" }
                ],
                analysis: "Quality stable with 96.5% First Pass Yield. Rework rate needs attention.",
                recommendations: [
                    "Root cause analysis for rework on Line 3",
                    "Calibrate sensors on inspection station"
                ]
            },
            {
                title: "Machine & Operator Tracking",
                icon: "👥",
                description: "Real-time machine status and operator efficiency",
                fullDescription: "Track machine utilization, operator efficiency, and setup times in real-time.",
                cardImage: "/images/mes-machine.jpg",
                stats: [
                    { label: "Operators On Shift", value: "86" },
                    { label: "Operator Efficiency", value: "91%" },
                    { label: "Machines Active", value: "146" },
                    { label: "Machines Idle", value: "9" },
                    { label: "Avg Setup Time", value: "18 min" }
                ],
                analysis: "Operator efficiency at 91% is good. Setup time needs improvement.",
                recommendations: [
                    "Implement quick-changeover techniques",
                    "Cross-train operators for flexibility"
                ]
            },
            {
                title: "Traceability & Batch Control",
                icon: "🔍",
                description: "End-to-end product traceability",
                fullDescription: "Complete batch traceability from raw material to finished product.",
                cardImage: "/images/mes-trace.jpg",
                stats: [
                    { label: "Active Batches", value: "17" },
                    { label: "Traceability Coverage", value: "100%" },
                    { label: "Serial Numbers Tracked", value: "18,750" },
                    { label: "Compliance Status", value: "ISO 9001" }
                ],
                analysis: "100% traceability achieved! All batches fully tracked.",
                recommendations: [
                    "Maintain current traceability protocols",
                    "Automate batch record generation"
                ]
            }
        ]
    };

    // ============================
    // CUSTOMIZED SOFTWARE DEVELOPMENT DATA
    // ============================
    const softwareData = {
        title: "Customized Software Development",
        subtitle: "Tailored Software Solutions for Enterprise & Industrial Automation",
        description: "We develop custom software applications that automate processes, integrate with existing systems, and provide real-time insights for better decision-making.",
        summary: "From ERP integration to custom MES modules and cloud applications — we build software that solves your specific business challenges.",
        image: "/images/software-hero.jpg",
        metrics: [
            {
                title: "Active Projects Overview",
                icon: "🚀",
                description: "Real-time tracking of all ongoing software development projects",
                fullDescription: "Complete visibility into all active software development projects across enterprise, industrial automation, ERP integrations, and cloud applications.",
                cardImage: "/images/software-projects.jpg",
                stats: [
                    { label: "Total Active Projects", value: "34", trend: "+8 this quarter" },
                    { label: "Enterprise-Level Projects", value: "12", color: "blue" },
                    { label: "Industrial Automation Software", value: "9", color: "green" },
                    { label: "ERP / MES Integrations", value: "7", color: "purple" },
                    { label: "Web & Cloud Applications", value: "6", color: "orange" },
                    { label: "Projects Delivered This Year", value: "41", trend: "+24% vs last year" },
                    { label: "On-Time Delivery Rate", value: "96.8%", status: "good" }
                ],
                analysis: "Strong project pipeline with 34 active projects. 96.8% on-time delivery rate exceeds industry standard.",
                recommendations: [
                    "Add resources to web & cloud team for upcoming projects",
                    "Review enterprise project timelines for Q4 planning"
                ]
            },
            {
                title: "Development Performance Metrics",
                icon: "⚙️",
                description: "Agile development performance and delivery metrics",
                fullDescription: "Track development cycles, sprint completion rates, and DevOps automation coverage across all software projects.",
                cardImage: "/images/software-performance.jpg",
                stats: [
                    { label: "Average Development Cycle", value: "6.4 Weeks", trend: "-1.2 weeks" },
                    { label: "Sprint Completion Rate", value: "94%", status: "good" },
                    { label: "Agile Adoption Rate", value: "100%", badge: true },
                    { label: "Code Deployment Frequency", value: "Weekly", status: "good" },
                    { label: "DevOps Automation Coverage", value: "89%", target: "85%", status: "exceed" },
                    { label: "Client Change Request Handling", value: "48 hrs", sub: "avg", trend: "-12 hrs" }
                ],
                analysis: "Development cycles reduced by 1.2 weeks. DevOps automation at 89% exceeding target.",
                recommendations: [
                    "Automate remaining 11% manual DevOps tasks",
                    "Implement feature flags for faster releases"
                ]
            },
            {
                title: "Software Quality & Testing",
                icon: "✅",
                description: "Comprehensive testing and quality assurance metrics",
                fullDescription: "Real-time quality metrics including test coverage, automated testing, bug detection, and security compliance.",
                cardImage: "/images/software-quality.jpg",
                stats: [
                    { label: "Test Coverage", value: "92%", target: "90%", status: "exceed" },
                    { label: "Automated Test Cases", value: "4,800+", trend: "+1,200 this year" },
                    { label: "Bugs Detected (Pre-Release)", value: "98%", status: "good" },
                    { label: "Production Error Rate", value: "0.7%", target: "<1%", status: "good" },
                    { label: "Security Vulnerability Score", value: "Low Risk", status: "good" },
                    { label: "Compliance Standard", value: "ISO & Industry Aligned", badge: true }
                ],
                analysis: "Exceptional quality metrics with 92% test coverage and 98% pre-release bug detection.",
                recommendations: [
                    "Increase automated test cases to 6,000 by Q2",
                    "Schedule third-party security audit"
                ]
            },
            {
                title: "Technology Stack Monitoring",
                icon: "💻",
                description: "Real-time tracking of technologies and integrations",
                fullDescription: "Monitor the technology stack usage across all projects including backend, frontend, databases, cloud platforms, and microservices.",
                cardImage: "/images/software-tech.jpg",
                stats: [
                    { label: "Backend Technologies", value: ".NET | Node.js | Python", sub: "3 stacks" },
                    { label: "Frontend Technologies", value: "React | Angular", sub: "2 stacks" },
                    { label: "Database Systems", value: "SQL | MongoDB", sub: "Dual" },
                    { label: "Cloud Platforms", value: "AWS | Azure", sub: "Multi-cloud" },
                    { label: "API Integrations Active", value: "38", trend: "+12 this year" },
                    { label: "Microservices Running", value: "64", sub: "Containerized" }
                ],
                analysis: "Modern tech stack with microservices architecture. 38 active API integrations.",
                recommendations: [
                    "Standardize API documentation with OpenAPI",
                    "Implement service mesh for microservices"
                ]
            },
            {
                title: "ERP & Industrial Integration",
                icon: "🏭",
                description: "Integration metrics for industrial systems",
                fullDescription: "Track all industrial system integrations including ERP, MES, SCADA, and PLC interfaces with real-time data sync accuracy.",
                cardImage: "/images/software-erp.jpg",
                stats: [
                    { label: "ERP Implementations", value: "18", sub: "SAP, Oracle, Dynamics" },
                    { label: "MES Integrations", value: "11", status: "good" },
                    { label: "SCADA Integrations", value: "14", trend: "+3 this year" },
                    { label: "PLC Software Interfaces", value: "26", sub: "Siemens, Allen Bradley" },
                    { label: "Data Sync Accuracy", value: "99.4%", status: "excellent" },
                    { label: "Real-Time Data Processing", value: "Live", badge: true }
                ],
                analysis: "Strong industrial integration portfolio with 18 ERP implementations and 26 PLC interfaces.",
                recommendations: [
                    "Develop OPC UA connectors for standardization",
                    "Create integration templates for faster deployment"
                ]
            },
            {
                title: "Client & Support Analytics",
                icon: "🤝",
                description: "Client satisfaction and support performance",
                fullDescription: "Monitor client retention, support ticket resolution, and satisfaction scores across all enterprise clients.",
                cardImage: "/images/software-support.jpg",
                stats: [
                    { label: "Active Enterprise Clients", value: "27", trend: "+5 this year" },
                    { label: "Support Tickets (Monthly)", value: "63", sub: "avg" },
                    { label: "Avg Resolution Time", value: "5.3 hrs", trend: "-1.2 hrs" },
                    { label: "SLA Compliance", value: "98.6%", status: "excellent" },
                    { label: "Customer Satisfaction Score", value: "4.7 / 5", status: "good" },
                    { label: "Client Retention Rate", value: "93%", status: "excellent" }
                ],
                analysis: "93% client retention rate shows strong satisfaction. CSAT at 4.7/5 exceeds industry benchmark.",
                recommendations: [
                    "Implement AI-powered support chatbot",
                    "Create client success program for top accounts"
                ]
            },
            {
                title: "Cybersecurity & Data Protection",
                icon: "🔒",
                description: "Security compliance and data protection metrics",
                fullDescription: "Monitor security measures including encryption, backup frequency, threat detection, and penetration testing results.",
                cardImage: "/images/software-security.jpg",
                stats: [
                    { label: "Data Encryption", value: "256-bit", sub: "AES standard", badge: true },
                    { label: "Cloud Backup Frequency", value: "Every 12 hrs", status: "good" },
                    { label: "Threat Detection", value: "24/7 Monitoring", badge: true },
                    { label: "Penetration Tests", value: "Quarterly", status: "good" },
                    { label: "Security Breaches", value: "Zero", status: "excellent", sub: "100% Secure Record" }
                ],
                analysis: "Zero security breaches maintained with 256-bit encryption and 24/7 threat monitoring.",
                recommendations: [
                    "Implement zero-trust architecture",
                    "Achieve ISO 27001 certification"
                ]
            },
            {
                title: "Business Impact Metrics",
                icon: "📈",
                description: "ROI and business value delivered",
                fullDescription: "Track the business impact of software solutions including operational efficiency, manual work reduction, and ROI improvement for clients.",
                cardImage: "/images/software-impact.jpg",
                stats: [
                    { label: "Operational Efficiency", value: "+24%", trend: "improvement", status: "good" },
                    { label: "Manual Work Reduction", value: "-38%", trend: "reduction", status: "excellent" },
                    { label: "ROI Improvement for Clients", value: "+31%", trend: "average", status: "good" },
                    { label: "Digital Transformation Coverage", value: "Full-Scale", badge: true },
                    { label: "AI & Automation Modules", value: "15", sub: "implemented", trend: "+8 this year" }
                ],
                analysis: "Significant business impact with 24% efficiency gain and 38% manual work reduction.",
                recommendations: [
                    "Develop case studies for top ROI clients",
                    "Expand AI/automation modules to 20 by year end"
                ]
            }
        ]
    };

    // ============================
    // OTHER SERVICES
    // ============================
    const services = [
        {
            title: "MES (Manufacturing Execution System)",
            icon: "🏭",
            description: "Complete shop-floor production monitoring & ERP integration.",
            items: [
                "Production Tracking",
                "OEE Dashboard",
                "Downtime Analysis",
                "Batch Traceability",
            ],
        },
        {
            title: "Production Dashboard",
            icon: "📊",
            description: "Live production dashboards with performance analytics.",
            items: [
                "Target vs Actual",
                "Machine Utilization",
                "Shift Performance",
            ],
        },
        {
            title: "Customized Software Development",
            icon: "💻",
            description: "Custom-built automation & IIoT solutions.",
            items: [
                "Custom MES Modules",
                "ERP Integration",
                "Cloud Monitoring Systems",
            ],
        },
    ];

    return (
        <div className="pitech">

            {/* MAT SECTION */}
            <div className="mat-section">
                <div className="container">
                    <div className="mat-header" data-animate>
                        <h2>
                            <span className="mat-icon">🔧</span>
                            {matData.title}
                        </h2>
                        <p className="mat-subtitle">{matData.subtitle}</p>
                    </div>

                    <div className="mat-hero" data-animate>
                        <div className="mat-image-container">
                            <img
                                src={matData.image}
                                alt="Manufacturing Assembly & Traceability"
                                className="mat-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/600x400/2563eb/ffffff?text=MAT+System";
                                }}
                            />
                            <div className="image-overlay">
                                <span>End-to-End Traceability</span>
                            </div>
                        </div>

                        <div className="mat-description">
                            <p>{matData.description}</p>
                            <p className="mat-summary">{matData.summary}</p>
                        </div>
                    </div>

                    <h3 className="solutions-heading">
                        <span className="heading-icon">⚡</span>
                        Our Traceability & Automation Solutions
                    </h3>

                    <div className="mat-solutions-grid">
                        {matData.solutions.map((solution, index) => (
                            <div key={index} className="mat-solution-card" data-animate="zoomIn">
                                <div className="solution-card-header">
                                    <span className="solution-icon">
                                        {solution.icon}
                                    </span>
                                    <h4>{solution.title}</h4>
                                </div>

                                {solution.cardImage && (
                                    <div className="card-image-container">
                                        <img
                                            src={solution.cardImage}
                                            alt={solution.title}
                                            className="card-image"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.style.display = 'none';
                                                const parent = e.target.parentElement;
                                                const fallbackDiv = document.createElement('div');
                                                fallbackDiv.className = 'image-fallback';
                                                fallbackDiv.innerHTML = `
                                                    <span>${solution.icon}</span>
                                                    <p>${solution.title}</p>
                                                `;
                                                parent.appendChild(fallbackDiv);
                                            }}
                                        />
                                    </div>
                                )}

                                <p>{solution.description}</p>

                                <button
                                    className="see-more-btn"
                                    onClick={() =>
                                        setExpandedMAT(
                                            expandedMAT === index
                                                ? null
                                                : index
                                        )
                                    }
                                >
                                    {expandedMAT === index ? "See Less" : "See More"}
                                </button>

                                {expandedMAT === index && (
                                    <div className="solution-expanded">
                                        <p>{solution.fullDescription}</p>

                                        {solution.features && (
                                            <>
                                                <h5>Key Features:</h5>
                                                <ul>
                                                    {solution.features.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {solution.technologies && (
                                            <>
                                                <h5>Technologies:</h5>
                                                <ul>
                                                    {solution.technologies.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {solution.benefits && (
                                            <>
                                                <h5>Benefits:</h5>
                                                <ul>
                                                    {solution.benefits.map((item, i) => (
                                                        <li key={i}>✓ {item}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* DIGITAL WORK INITIALIZATION SECTION */}
            <div className="digital-section">
                <div className="container">
                    <div className="digital-header" data-animate>
                        <h2>
                            <span className="digital-icon">💡</span>
                            {digitalData.title}
                        </h2>
                        <p className="digital-subtitle">{digitalData.subtitle}</p>
                    </div>

                    <div className="digital-hero" data-animate>
                        <div className="digital-image-container">
                            <img
                                src={digitalData.image}
                                alt="Digital Work Initialization"
                                className="digital-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/600x400/2563eb/ffffff?text=Digital+Work";
                                }}
                            />
                            <div className="image-overlay">
                                <span>Digital Transformation Journey</span>
                            </div>
                        </div>

                        <div className="digital-description">
                            <p>{digitalData.description}</p>
                            <p className="digital-summary">{digitalData.summary}</p>
                        </div>
                    </div>

                    <h3 className="solutions-heading">
                        <span className="heading-icon">🔄</span>
                        Our Digital Work Initialization Process
                    </h3>

                    <div className="digital-solutions-grid">
                        {digitalData.phases.map((phase, index) => (
                            <div key={index} className="digital-solution-card" data-animate="zoomIn">
                                <div className="solution-card-header">
                                    <span className="solution-icon">
                                        {phase.icon}
                                    </span>
                                    <h4>{phase.title}</h4>
                                </div>

                                {phase.cardImage && (
                                    <div className="card-image-container">
                                        <img
                                            src={phase.cardImage}
                                            alt={phase.title}
                                            className="card-image"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.style.display = 'none';
                                                const parent = e.target.parentElement;
                                                const fallbackDiv = document.createElement('div');
                                                fallbackDiv.className = 'image-fallback';
                                                fallbackDiv.innerHTML = `
                                                    <span>${phase.icon}</span>
                                                    <p>${phase.title}</p>
                                                `;
                                                parent.appendChild(fallbackDiv);
                                            }}
                                        />
                                    </div>
                                )}

                                <p>{phase.description}</p>

                                <button
                                    className="see-more-btn"
                                    onClick={() =>
                                        setExpandedDigital(
                                            expandedDigital === index
                                                ? null
                                                : index
                                        )
                                    }
                                >
                                    {expandedDigital === index ? "See Less" : "See More"}
                                </button>

                                {expandedDigital === index && (
                                    <div className="solution-expanded">
                                        <p>{phase.fullDescription}</p>

                                        <h5>Key Activities:</h5>
                                        <ul>
                                            {phase.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>

                                        <h5>Benefits:</h5>
                                        <ul>
                                            {phase.benefits.map((benefit, i) => (
                                                <li key={i}>✓ {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PRODUCTION DASHBOARD SECTION */}
            <div className="dashboard-section">
                <div className="container">
                    <div className="dashboard-header" data-animate>
                        <h2>
                            <span className="dashboard-icon">📊</span>
                            {dashboardData.title}
                        </h2>
                        <p className="dashboard-subtitle">{dashboardData.subtitle}</p>
                    </div>

                    <div className="dashboard-hero" data-animate>
                        <div className="dashboard-image-container">
                            <img
                                src={dashboardData.image}
                                alt="Production Dashboard"
                                className="dashboard-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/600x400/2563eb/ffffff?text=Production+Dashboard";
                                }}
                            />
                            <div className="image-overlay">
                                <span>Real-Time Production Monitoring</span>
                            </div>
                        </div>

                        <div className="dashboard-description">
                            <p>{dashboardData.description}</p>
                            <p className="dashboard-summary">{dashboardData.summary}</p>
                        </div>
                    </div>

                    <h3 className="solutions-heading">
                        <span className="heading-icon">📈</span>
                        Real-Time Production Metrics
                    </h3>

                    <div className="dashboard-solutions-grid">
                        {dashboardData.metrics.map((metric, index) => (
                            <div key={index} className="dashboard-solution-card" data-animate="zoomIn">
                                <div className="solution-card-header">
                                    <span className="solution-icon">
                                        {metric.icon}
                                    </span>
                                    <h4>{metric.title}</h4>
                                </div>

                                {metric.cardImage && (
                                    <div className="card-image-container">
                                        <img
                                            src={metric.cardImage}
                                            alt={metric.title}
                                            className="card-image"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.style.display = 'none';
                                                const parent = e.target.parentElement;
                                                const fallbackDiv = document.createElement('div');
                                                fallbackDiv.className = 'image-fallback';
                                                fallbackDiv.innerHTML = `
                                                    <span>${metric.icon}</span>
                                                    <p>${metric.title}</p>
                                                `;
                                                parent.appendChild(fallbackDiv);
                                            }}
                                        />
                                    </div>
                                )}

                                <p>{metric.description}</p>

                                <button
                                    className="see-more-btn"
                                    onClick={() =>
                                        setExpandedDashboard(
                                            expandedDashboard === index
                                                ? null
                                                : index
                                        )
                                    }
                                >
                                    {expandedDashboard === index ? "See Less" : "See More"}
                                </button>

                                {expandedDashboard === index && (
                                    <div className="solution-expanded">
                                        <p>{metric.fullDescription}</p>

                                        <h5>Key Metrics:</h5>
                                        <ul>
                                            {metric.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>

                                        <h5>Benefits:</h5>
                                        <ul>
                                            {metric.benefits.map((benefit, i) => (
                                                <li key={i}>✓ {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MES SECTION */}
            <div className="mes-section">
                <div className="container">
                    <div className="mes-header" data-animate>
                        <h2>
                            <span className="mes-icon">🏭</span>
                            {mesData.title}
                        </h2>
                        <p className="mes-subtitle">{mesData.subtitle}</p>
                    </div>

                    <div className="mes-hero" data-animate>
                        <div className="mes-image-container">
                            <img
                                src={mesData.image}
                                alt="Manufacturing Execution System"
                                className="mes-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/600x400/059669/ffffff?text=MES+Dashboard";
                                }}
                            />
                            <div className="image-overlay">
                                <span>Real-Time Production Control</span>
                            </div>
                        </div>

                        <div className="mes-description">
                            <p>{mesData.description}</p>
                            <p className="mes-summary">{mesData.summary}</p>
                        </div>
                    </div>

                    <h3 className="solutions-heading">
                        <span className="heading-icon">📊</span>
                        Real-Time MES Dashboard Metrics
                    </h3>

                    <div className="mes-solutions-grid">
                        {mesData.metrics.map((metric, index) => (
                            <div key={index} className="mes-solution-card" data-animate="zoomIn">
                                <div className="solution-card-header">
                                    <span className="solution-icon">{metric.icon}</span>
                                    <h4>{metric.title}</h4>
                                </div>

                                {metric.cardImage && (
                                    <div className="card-image-container">
                                        <img
                                            src={metric.cardImage}
                                            alt={metric.title}
                                            className="card-image"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.style.display = 'none';
                                                const parent = e.target.parentElement;
                                                const fallbackDiv = document.createElement('div');
                                                fallbackDiv.className = 'image-fallback';
                                                fallbackDiv.innerHTML = `
                                                    <span>${metric.icon}</span>
                                                    <p>${metric.title}</p>
                                                `;
                                                parent.appendChild(fallbackDiv);
                                            }}
                                        />
                                    </div>
                                )}

                                <p className="metric-description">{metric.description}</p>

                                <div className="metric-stats-simple">
                                    {metric.stats.slice(0, 4).map((stat, i) => (
                                        <div key={i} className={`stat-item-simple ${stat.warning ? 'has-warning' : ''}`}>
                                            <span className="stat-label">{stat.label}:</span>
                                            <span className="stat-value-simple">
                                                {stat.value}
                                            </span>
                                            {stat.alert && <span className="alert-badge-simple">⚠️</span>}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className="see-more-btn"
                                    onClick={() =>
                                        setExpandedMES(
                                            expandedMES === index
                                                ? null
                                                : index
                                        )
                                    }
                                >
                                    {expandedMES === index ? "See Less" : "See More"}
                                </button>

                                {expandedMES === index && (
                                    <div className="solution-expanded">
                                        <p className="full-description">{metric.fullDescription}</p>

                                        <h5>Complete Metrics:</h5>
                                        <ul>
                                            {metric.stats.map((stat, i) => (
                                                <li key={i}>
                                                    <strong>{stat.label}:</strong> {stat.value}
                                                    {stat.sub && ` (${stat.sub})`}
                                                </li>
                                            ))}
                                        </ul>

                                        <h5>📊 Analysis:</h5>
                                        <p>{metric.analysis}</p>

                                        <h5>💡 Recommendations:</h5>
                                        <ul>
                                            {metric.recommendations.map((rec, i) => (
                                                <li key={i}>→ {rec}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mes-benefits-summary" data-animate>
                        <h3 className="solutions-heading">MES Implementation Benefits</h3>
                        <div className="benefits-grid-simple">
                            <div className="benefit-item-simple">
                                <span className="benefit-icon">📈</span>
                                <h4>24% Productivity Increase</h4>
                            </div>
                            <div className="benefit-item-simple">
                                <span className="benefit-icon">⏱️</span>
                                <h4>29% Downtime Reduction</h4>
                            </div>
                            <div className="benefit-item-simple">
                                <span className="benefit-icon">✅</span>
                                <h4>100% Traceability</h4>
                            </div>
                            <div className="benefit-item-simple">
                                <span className="benefit-icon">🏆</span>
                                <h4>85.3% OEE</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CUSTOMIZED SOFTWARE DEVELOPMENT SECTION */}
            <div className="software-section">
                <div className="container">
                    <div className="software-header" data-animate>
                        <h2>
                            <span className="software-icon">💻</span>
                            {softwareData.title}
                        </h2>
                        <p className="software-subtitle">{softwareData.subtitle}</p>
                    </div>

                    <div className="software-hero" data-animate>
                        <div className="software-image-container">
                            <img
                                src={softwareData.image}
                                alt="Customized Software Development"
                                className="software-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Software+Development";
                                }}
                            />
                            <div className="image-overlay">
                                <span>Enterprise Software Solutions</span>
                            </div>
                        </div>

                        <div className="software-description">
                            <p>{softwareData.description}</p>
                            <p className="software-summary">{softwareData.summary}</p>
                        </div>
                    </div>

                    <h3 className="solutions-heading">
                        <span className="heading-icon">📊</span>
                        Software Development Dashboard Metrics
                    </h3>

                    <div className="software-solutions-grid">
                        {softwareData.metrics.map((metric, index) => (
                            <div key={index} className="software-solution-card" data-animate="zoomIn">
                                <div className="solution-card-header">
                                    <span className="solution-icon">{metric.icon}</span>
                                    <h4>{metric.title}</h4>
                                </div>

                                {metric.cardImage && (
                                    <div className="card-image-container">
                                        <img
                                            src={metric.cardImage}
                                            alt={metric.title}
                                            className="card-image"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.style.display = 'none';
                                                const parent = e.target.parentElement;
                                                const fallbackDiv = document.createElement('div');
                                                fallbackDiv.className = 'image-fallback';
                                                fallbackDiv.innerHTML = `
                                                    <span>${metric.icon}</span>
                                                    <p>${metric.title}</p>
                                                `;
                                                parent.appendChild(fallbackDiv);
                                            }}
                                        />
                                    </div>
                                )}

                                <p className="metric-description">{metric.description}</p>

                                <div className="metric-stats-simple">
                                    {metric.stats.slice(0, 4).map((stat, i) => (
                                        <div key={i} className={`stat-item-simple ${stat.warning ? 'has-warning' : ''}`}>
                                            <span className="stat-label">{stat.label}:</span>
                                            <span className={`stat-value-simple ${stat.status ? `status-${stat.status}` : ''}`}>
                                                {stat.value}
                                                {stat.trend && <small className="trend">{stat.trend}</small>}
                                            </span>
                                            {stat.alert && <span className="alert-badge-simple">⚠️</span>}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className="see-more-btn"
                                    onClick={() =>
                                        setExpandedSoftware(
                                            expandedSoftware === index
                                                ? null
                                                : index
                                        )
                                    }
                                >
                                    {expandedSoftware === index ? "See Less" : "See More"}
                                </button>

                                {expandedSoftware === index && (
                                    <div className="solution-expanded">
                                        <p className="full-description">{metric.fullDescription}</p>

                                        <h5>Complete Metrics:</h5>
                                        <ul>
                                            {metric.stats.map((stat, i) => (
                                                <li key={i}>
                                                    <strong>{stat.label}:</strong> {stat.value}
                                                    {stat.sub && ` (${stat.sub})`}
                                                    {stat.trend && ` - ${stat.trend}`}
                                                    {stat.target && ` [Target: ${stat.target}]`}
                                                </li>
                                            ))}
                                        </ul>

                                        <h5>📊 Analysis:</h5>
                                        <p>{metric.analysis}</p>

                                        <h5>💡 Recommendations:</h5>
                                        <ul>
                                            {metric.recommendations.map((rec, i) => (
                                                <li key={i}>→ {rec}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="software-benefits-summary" data-animate>
                        <h3 className="solutions-heading">Software Development Impact</h3>
                        <div className="benefits-grid-simple">
                            <div className="benefit-item-simple">
                                <span className="benefit-icon">📈</span>
                                <h4>96.8% On-Time Delivery</h4>
                                <p>41 projects delivered this year</p>
                            </div>
                            <div className="benefit-item-simple">
                                <span className="benefit-icon">🔒</span>
                                <h4>100% Secure Record</h4>
                                <p>Zero security breaches</p>
                            </div>
                            <div className="benefit-item-simple">
                                <span className="benefit-icon">🤝</span>
                                <h4>93% Client Retention</h4>
                                <p>4.7/5 satisfaction score</p>
                            </div>
                            <div className="benefit-item-simple">
                                <span className="benefit-icon">💰</span>
                                <h4>+31% ROI</h4>
                                <p>Average client improvement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICES SECTION */}
            <div className="services-section">
                <div className="container">
                    <h3 className="solutions-heading">
                        <span className="heading-icon">⚙️</span>
                        Additional Solutions
                    </h3>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card" data-animate="zoomIn">
                                <div className="solution-card-header">
                                    <span className="solution-icon">
                                        {service.icon}
                                    </span>
                                    <h4>{service.title}</h4>
                                </div>

                                <p>{service.description}</p>

                                <button
                                    className="see-more-btn"
                                    onClick={() =>
                                        setExpandedService(
                                            expandedService === index
                                                ? null
                                                : index
                                        )
                                    }
                                >
                                    {expandedService === index ? "See Less" : "See More"}
                                </button>

                                {expandedService === index && (
                                    <div className="solution-expanded">
                                        <ul>
                                            {service.items.map((item, i) => (
                                                <li key={i}>✓ {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CONTACT SECTION */}
            <div className="contact">
                <div className="container">
                    <h2>Ready to Implement Complete Automation?</h2>
                    <p>Get in touch with our experts today</p>
                    <button className="btn-primary">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Solution;
