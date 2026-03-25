const fs = require('fs');
const https = require('https');
const path = require('path');

const unsplashIds = [
    '1581091226825-a6a2a5aee158', '1551288049-bebda4e38f71', '1585829365295-ab7cd400c167',
    '1537462715879-38c28cb14b0b', '1504917595217-d4bf52f10b80', '1611108257088-2fc83bbf5ff1',
    '1473341304170-971dccb5ac1e', '1580983518173-20f781bb4546', '1620714223084-8fcacc6dfd8d',
    '1563986768609-322da13575f3', '1516192510265-a8cd56dff262', '1563986768494-4da5f9b4acbf',
    '1581092144365-ea911e3b5e40', '1504328345606-18bbc8c9d7d1', '1629352926715-dd4c01ff3941',
    '1617300344566-aeab4c3046ee', '1565514020179-026c2bc6e3ef', '1614742468352-841f3d607a93'
];

let idCounter = 0;
function getNextImageId() {
    let id = unsplashIds[idCounter % unsplashIds.length];
    idCounter++;
    return id;
}

async function downloadImage(id, filename) {
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;
    const dest = path.join(__dirname, 'public', 'images', filename);

    if (fs.existsSync(dest)) return;

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                https.get(res.headers.location, handleResponse).on('error', reject);
            } else {
                handleResponse(res);
            }

            function handleResponse(response) {
                let file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            }
        }).on('error', reject);
    });
}

const pagesData = {
    // INDUSTRY
    "OEE.js": {
        topic: "OEE Monitoring",
        desc: "Track production efficiency, manufacturing KPIs, and resolve hidden downtime with real-time OEE analytics.",
        overviewP1: "Modern manufacturing demands absolute visibility into line performance. Our OEE analytics directly measures availability, performance, and quality continuously.",
        overviewP2: "Instantly uncover bottleneck stages and micro-stops that operators miss. Automated dashboards guide daily improvement meetings based on accurate, ground-truth data.",
        f1: "Real-time Metrics", f1d: "Live visibility into Availability, Performance, and Quality.",
        f2: "Downtime Categorization", f2d: "Automatic parsing of micro-stops vs scheduled maintenance.",
        f3: "Production Dashboards", f3d: "Customized visual views for operators and plant managers.",
        imgPath: "oee-dashboard.jpg"
    },
    "DWI.js": {
        topic: "Digital Work Instructions",
        desc: "Empower operators with dynamic, multimedia guidance systems that eliminate assembly errors.",
        overviewP1: "Replace static paper guides with interactive digital visual instructions at every station. Validate processes and confirm operator compliance dynamically.",
        overviewP2: "Our DWI platform supports video playback, tool interlock signals, and immediate revision control to guarantee every product is built to spec.",
        f1: "Version Control", f1d: "Instantly update instructions across the entire floor globally.",
        f2: "Tool Integration", f2d: "Sync steps directly with smart torque tools and PLC triggers.",
        f3: "Multimedia Support", f3d: "Embed high-res images and 3D cad models to guide complex routes.",
        imgPath: "digital-work-instructions.jpg"
    },
    "TraceabilitySCADA.js": {
        topic: "Traceability & SCADA",
        desc: "Implement product tracking, compliance monitoring, and total control room operations.",
        overviewP1: "Capture a complete electronic birth history of every component traversing your lines. Combine local traceability with global SCADA monitoring.",
        overviewP2: "From barcode parsing to complex RFID gate tracking, we ensure ISO compliance seamlessly. Historical recall capabilities take seconds instead of days.",
        f1: "Birth History", f1d: "Permanent digital twin records of every assembly step.",
        f2: "Component Genealogy", f2d: "Track parent-child relationships across sub-assembly integration.",
        f3: "SCADA Overlays", f3d: "Live topology mapping of facility routing and hardware status.",
        imgPath: "scada-traceability.jpg"
    },
    "ProductionDashboard.js": {
        topic: "Intelligent Dashboards",
        desc: "Visualize factory health with unified control room dashboards designed for heavy industry.",
        overviewP1: "Consolidate thousands of disconnected PLC tags into actionable KPI displays. Put powerful, dynamic data at the fingertips of your shift supervisors.",
        overviewP2: "Our dashboards pull telemetry directly through secure OT gateways, rendering smooth, real-time analytics without lagging traditional ERP systems.",
        f1: "Widget Customization", f1d: "Drag and drop the exact gauges relevant to your department.",
        f2: "Mobile Responsiveness", f2d: "View critical alerts securely from your tablet or phone.",
        f3: "Historian Trending", f3d: "Overlay current shifts against historical benchmarks instantly.",
        imgPath: "production-dashboard.jpg"
    },
    "PredictiveMaintenance.js": {
        topic: "Predictive Maintenance",
        desc: "Transition from scheduled repairs to AI-driven acoustic and vibration analysis.",
        overviewP1: "Don't wait for a motor to fail. Our machine-learning edge nodes monitor current draw variations and harmonic vibration to predict imminent hardware failure.",
        overviewP2: "Dramatically lower replacement costs and ensure zero unplanned line stoppages. Automatically generate service tickets when thresholds are breached.",
        f1: "Vibration Sensing", f1d: "Identify bearing wear weeks before physical failure.",
        f2: "Automated Work Orders", f2d: "Integration directly into your CMMS platform.",
        f3: "Anomaly Detection", f3d: "Self-training AI baselines normal operating rhythms.",
        imgPath: "predictive-maintenance.jpg"
    },
    "EnergyMonitoring.js": {
        topic: "Energy Monitoring",
        desc: "Optimize power consumption and identify massive utility waste in real-time.",
        overviewP1: "Manufacturing requires extreme power. Stop paying for inefficient compressed air leaks and phantom drain on idle machinery.",
        overviewP2: "We deploy smart meters across individual cells to correlate power events with production cycles, identifying exactly how much energy each part costs.",
        f1: "Per-Part Energy Cost", f1d: "Allocate utility spending directly to manufactured goods.",
        f2: "Peak Load Shaving", f2d: "Alerts when approaching costly demand-charge thresholds.",
        f3: "Sustainability Reporting", f3d: "Automate your scope-2 emissions reports for ISO 14001.",
        imgPath: "energy-monitoring.jpg"
    },
    "IIoT.js": {
        topic: "Industrial IoT",
        desc: "Connect legacy hardware to the cloud with secure, edge-computed IoT gateways.",
        overviewP1: "Bring 30-year-old stamping presses online alongside modern robotic cells. Our hardware-agnostic IoT layers translate every proprietary protocol into MQTT or OPC-UA.",
        overviewP2: "Bridge the IT/OT divide safely. We engineer isolated network enclaves that push only necessary telemetry while preventing external intrusion into safety systems.",
        f1: "Protocol Translation", f1d: "Native drivers for Modbus, Profinet, Ethernet/IP, and direct I/O.",
        f2: "Edge Analytics", f2d: "Process massive high-frequency data locally to save bandwidth.",
        f3: "Zero Trust Security", f3d: "Completely disconnected inbound routing ensures hacker resilience.",
        imgPath: "industrial-iot.jpg"
    },
    "Digitalization.js": {
        topic: "Factory Digitalization",
        desc: "Eliminate paper processes and integrate deep vertical software stacks.",
        overviewP1: "Move beyond Excel sheets and clipboards. We replace manual quality checks and shift handovers with native digital workflows integrated directly into SAP/Oracle.",
        overviewP2: "A fully digitalized factory allows dynamic routing of materials and instantaneous visibility into work-in-progress inventory across all facilities globally.",
        f1: "Paperless Logic", f1d: "Transform archaic manual binders into responsive digital forms.",
        f2: "ERP Synchronization", f2d: "bi-directional data flow preventing double data entry.",
        f3: "WIP Tracking", f3d: "Live mapping of material locations and buffer states.",
        imgPath: "factory-digitalization.jpg"
    },
    "DigitalAndon.js": {
        topic: "Digital Andon System",
        desc: "Empower operators to trigger instant escalation events and halt defective productions.",
        overviewP1: "The Toyota Production System modernized for the 21st century. Replace physical pull-cords with networked touch screens at every cell.",
        overviewP2: "Instantly broadcast material shortages or quality defects to the right supervisor's smartwatch or plant overhead display, preventing defective accumulation.",
        f1: "Tiered Escalation", f1d: "Automatically page engineers if supervisors don't clear an issue in 5 minutes.",
        f2: "Smart Wearable Sync", f2d: "Push notifications directly to maintenance team pagers or radios.",
        f3: "Bottleneck Logging", f3d: "Record exact response times to optimize support staff allocation.",
        imgPath: "digital-andon.jpg"
    },
    "Solution.js": {
        topic: "Enterprise Solutions",
        desc: "End-to-end bespoke system architecture for complex automated processes.",
        overviewP1: "When off-the-shelf software fails, we engineer robust, tailored operational technology solutions designed from the bare metal up to the cloud infrastructure.",
        overviewP2: "Our enterprise solution architects evaluate your specific geometric and software constraints to deliver a highly cohesive, turn-key automation platform.",
        f1: "Bespoke Engineering", f1d: "Custom C#/.NET middleware for non-standard equipment.",
        f2: "Turn-key Delivery", f2d: "We manage wiring, networking, protocol logic, and frontend design.",
        f3: "Lifecycle Support", f3d: "Dedicated SLA guarantees maintaining absolute high availability.",
        imgPath: "enterprise-solution.jpg"
    },
    // PRODUCTS
    "Automation.js": {
        topic: "Automation Systems",
        desc: "Hardened PLC architectures, specialized instrumentation, and robotic assembly systems.",
        overviewP1: "Providing the physical muscle and digital brain power to automate the most hazardous and repetitive manufacturing tasks flawlessly.",
        overviewP2: "From compact micro-PLCs driving single conveyors to redundant ControlLogix systems orchestrating entire paint lines, our automation products are built for 24/7 abuse.",
        f1: "Redundant Processing", f1d: "Hot-standby controllers preventing single-point plant failures.",
        f2: "High-Speed I/O", f2d: "Microsecond reaction times for complex synchronizations.",
        f3: "Safety Rated", f3d: "SIL3 and PLe rated safety interlocks and light curtains natively supported.",
        imgPath: "automation-systems.jpg"
    },
    "IIoTPlatforms.js": {
        topic: "IIoT Platforms",
        desc: "The software core driving your digitalization. Scalable, modular, and fast.",
        overviewP1: "Deploy our core IIoT Platform locally on-premise or scale it elastically in Azure/AWS. It acts as the central nervous system for your entire organization.",
        overviewP2: "Aggregating millions of data points per second, this platform structures chaotic machine telemetry into clean, queryable SQL/NoSQL architectures.",
        f1: "Time-Series Databases", f1d: "Optimized storage engines handling massive data streams affordably.",
        f2: "API First", f2d: "Open REST/GraphQL endpoints allowing your IT team full access.",
        f3: "Docker Containerized", f3d: "Microservice architecture meaning zero downtime updates.",
        imgPath: "iiot-platforms.jpg"
    },
    // SERVICES
    "Consulting.js": {
        topic: "Strategic Consulting",
        desc: "Navigate the complex landscape of Industry 4.0 with seasoned technology veterans.",
        overviewP1: "Avoid the 'pilot purgatory' that plagues most digitalization efforts. We map a strict, ROI-driven roadmap scaling from a single cell out to a global rollout.",
        overviewP2: "We audit your existing network infrastructure, assess cybersecurity risks in OT networks, and standardize hardware selections before a single wire is pulled.",
        f1: "OT Risk Assessments", f1d: "Identifying vulnerabilities separating your IT network from machine logic.",
        f2: "ROI Modeling", f2d: "Detailed financial justifications based on predictable yield improvement.",
        f3: "Vendor Selection", f3d: "Unbiased hardware comparisons tailored to your environment.",
        imgPath: "strategic-consulting.jpg"
    },
    "Implementation.js": {
        topic: "System Implementation",
        desc: "Flawless physical execution. Wiring, panel building, and network commissioning.",
        overviewP1: "We are more than consultants. Our certified electricians and automation integrators bend conduit, terminate fiber, and build UL-certified panels.",
        overviewP2: "Every implementation follows strict standard operating procedures, guaranteeing safety and minimizing downtime during critical weekend cutovers.",
        f1: "Panel Fabrication", f1d: "In-house build and testing of custom electrical enclosures.",
        f2: "Network Pulling", f2d: "Industrial CAT6 and fiber optic backbone installation.",
        f3: "Site Acceptance", f3d: "Rigorous FAT and SAT testing before official handovers.",
        imgPath: "system-implementation.jpg"
    }
};

const entTemplate = (data, p, importPath) => `import React, { useEffect } from "react";
import "${importPath}";
import { Link } from "react-router-dom";

const ${p.replace('.js', '')} = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".ent-animate, .ent-scale-in").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="ent-page">
            <section className="ent-hero" style={{backgroundImage: "url('/images/${data.imgPath}')"}}>
                <div className="ent-hero-overlay"></div>
                <div className="ent-shape s1"></div>
                <div className="ent-shape s2"></div>
                
                <div className="container" style={{position: 'relative', zIndex: 3}}>
                    <div className="ent-hero-content ent-animate">
                        <span className="ent-chip">Industry 4.0 Standard</span>
                        <h1 className="ent-hero-title">
                            ${data.topic.split(' ')[0]} <br/>
                            <span>${data.topic.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="ent-hero-desc">${data.desc}</p>
                        <Link to="/contact" className="ent-btn-primary">Request Live Demo</Link>
                    </div>
                </div>
            </section>

            <div className="container ent-visual-banner ent-scale-in">
                <div style={{height: '400px', backgroundImage: "url('/images/${data.imgPath}')", backgroundSize: 'cover', backgroundPosition:'center', borderRadius: '24px'}}></div>
            </div>

            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-overview-content ent-animate">
                            <h3>A Modern Approach to ${data.topic}</h3>
                            <p>${data.overviewP1}</p>
                            <p>${data.overviewP2}</p>
                        </div>
                        <div className="ent-overview-visual ent-animate" style={{transitionDelay: "0.2s"}}>
                            <img src="/images/${data.imgPath}" alt="${data.topic} System" style={{width: '100%', height:'100%', objectFit:'cover', minHeight: '300px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="ent-section ent-bg-slate">
                <div className="container">
                    <div className="ent-header ent-animate">
                        <h2>Key Operational Features</h2>
                        <p>Unlock profound oversight utilizing the next generation of industrial connectivity algorithms.</p>
                    </div>
                    <div className="ent-feature-cards">
                        <div className="ent-feature-card ent-animate">
                            <div className="ent-fc-icon">⚙️</div>
                            <h4>${data.f1}</h4>
                            <p>${data.f1d}</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{transitionDelay: "0.1s"}}>
                            <div className="ent-fc-icon">🛡️</div>
                            <h4>${data.f2}</h4>
                            <p>${data.f2d}</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{transitionDelay: "0.2s"}}>
                            <div className="ent-fc-icon">🧠</div>
                            <h4>${data.f3}</h4>
                            <p>${data.f3d}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-animate">
                            <h3>Impact & Benefits</h3>
                            <ul className="ent-bene-list">
                                <li>Decrease critical equipment breakdown scenarios.</li>
                                <li>Automate extensive end-of-shift reporting processes instantly.</li>
                                <li>Ensure absolute compliance with complex manufacturing ISO metrics.</li>
                                <li>Simplify operations with intuitive minimal UI design.</li>
                            </ul>
                        </div>
                        <div className="ent-animate" style={{transitionDelay: "0.2s"}}>
                             <h3>Industry Applications</h3>
                             <p>Adopted heavily across automotive, metallurgy, logistics, and precision manufacturing ecosystems to standardize workflow mechanics and guarantee output metrics.</p>
                             <div style={{marginTop: '20px', padding: '20px', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #2563eb', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}>
                                 <strong>Value Driven:</strong> Customers report average yield increases of 18.5% within the first 60 days of complete integration.
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ent-section ent-bg-slate" style={{paddingTop: 0}}>
                <div className="container">
                    <div className="ent-cta ent-animate">
                        <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px', position: 'relative', zIndex: 2}}>Upgrade Your Infrastructure</h2>
                        <p style={{fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px', position: 'relative', zIndex: 2}}>Engage with Pi Tech automation experts to deploy ${data.topic} architectures accurately.</p>
                        <Link to="/contact" className="ent-btn-primary" style={{background: 'white', color: '#0f172a', position: 'relative', zIndex: 2}}>Contact Engineering</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ${p.replace('.js', '')};
`;

const premiumTemplate = (data, p, importPath) => `import React, { useEffect } from "react";
import "${importPath}";
import { Link } from "react-router-dom";

const ${p.replace('.js', '')} = () => {
    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        document.querySelectorAll(".premium-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="premium-page">
            <section className="premium-hero">
                <div className="premium-hero-bg"></div>
                <div className="premium-hero-grid"></div>
                
                <div className="container premium-hero-container">
                    <div className="premium-animate slide-right">
                        <span className="premium-chip">Intelligent Platform</span>
                        <h1 className="premium-hero-title">
                            ${data.topic.split(' ')[0]} <br />
                            <span>${data.topic.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="premium-hero-subtitle">${data.desc}</p>
                        <div>
                            <Link to="/contact" className="premium-btn-primary">Explore Platform</Link>
                            <a href="#overview" className="premium-btn-secondary">View Architecture</a>
                        </div>
                    </div>
                    
                    <div className="premium-animate slide-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="premium-hero-image-wrapper">
                            <img src="/images/${data.imgPath}" alt="${data.topic}" className="premium-hero-image" />
                            <div className="premium-floating-card">
                                <div className="premium-fc-icon">⚡</div>
                                <div className="premium-fc-text">
                                    <h4>System Health</h4>
                                    <p>Optimized & Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="overview" className="premium-section-padding premium-bg-white">
                <div className="container">
                    <div className="premium-split">
                        <div className="premium-split-image premium-animate slide-up">
                             <img src="/images/${data.imgPath}" alt="Analytics UI" />
                        </div>
                        <div className="premium-split-content premium-animate slide-up" style={{ transitionDelay: '0.2s' }}>
                            <h2>Redefining Standard Operations with ${data.topic}</h2>
                            <p className="lead">Scale operations flawlessly with transparent, connected infrastructure.</p>
                            <p>${data.overviewP1}</p>
                            <p>${data.overviewP2}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="premium-section-padding premium-bg-gradient">
                <div className="container">
                    <div className="premium-header premium-animate slide-up">
                        <h2>Enterprise Core Capabilities</h2>
                        <p>Delivering high-performance architecture built for absolute resilience and speed.</p>
                    </div>
                    <div className="premium-features-grid">
                        <div className="premium-card premium-animate slide-up">
                            <div className="premium-gc-icon">🚀</div>
                            <h3 className="premium-gc-title">${data.f1}</h3>
                            <p className="premium-gc-desc">${data.f1d}</p>
                        </div>
                        <div className="premium-card premium-animate slide-up" style={{ transitionDelay: "0.1s" }}>
                            <div className="premium-gc-icon">🛡️</div>
                            <h3 className="premium-gc-title">${data.f2}</h3>
                            <p className="premium-gc-desc">${data.f2d}</p>
                        </div>
                        <div className="premium-card premium-animate slide-up" style={{ transitionDelay: "0.2s" }}>
                            <div className="premium-gc-icon">📊</div>
                            <h3 className="premium-gc-title">${data.f3}</h3>
                            <p className="premium-gc-desc">${data.f3d}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="premium-section-padding premium-bg-light">
                <div className="container">
                    <div className="premium-cta premium-animate slide-up">
                        <div className="premium-cta-bg"></div>
                        <div style={{position: 'relative', zIndex: 1}}>
                            <h2 className="premium-cta-title">Ready to modernize your infrastructure?</h2>
                            <p className="premium-cta-subtitle">Talk to our automation architects to design your bespoke deployment strategy today.</p>
                            <Link to="/contact" className="premium-btn-primary" style={{ padding: '20px 40px', fontSize: '1.2rem', background: '#fff', color: '#0f172a' }}>
                                Schedule Technical Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ${p.replace('.js', '')};
`;

async function processFile(fileFullPath, p) {
    if (!pagesData[p]) return;

    let content = fs.readFileSync(fileFullPath, 'utf8');
    let template = entTemplate;

    // Default to EnterpriseStyle except if existing explicitly had premium-page
    let isPremium = content.includes('premium-page');
    if (isPremium) template = premiumTemplate;

    // adjust CSS imports based on folder depth
    const folderDepth = fileFullPath.split('src')[1].split(/[\\\\/]/).length - 2;
    let prefix = '../'.repeat(folderDepth);
    let importPath = isPremium ? prefix + 'pages/generated/PremiumTemplate.css' : prefix + 'pages/generated/EnterpriseStyle.css';

    let newContent = template(pagesData[p], p, importPath);

    fs.writeFileSync(fileFullPath, newContent, 'utf8');

    await downloadImage(getNextImageId(), pagesData[p].imgPath);
    console.log('Updated', fileFullPath);
}

const dirs = [
    path.join(__dirname, 'src', 'pages', 'industry'),
    path.join(__dirname, 'src', 'pages', 'products'),
    path.join(__dirname, 'src', 'pages', 'services')
];

async function run() {
    for (let dir of dirs) {
        if (!fs.existsSync(dir)) continue;
        let files = fs.readdirSync(dir);
        for (let f of files) {
            if (f.endsWith('.js')) {
                await processFile(path.join(dir, f), f);
            }
        }
    }
    console.log('Done rendering templates and downloading images!');
}

run().catch(console.error);
