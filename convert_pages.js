const fs = require('fs');
const path = require('path');
const https = require('https');

const imgDir = path.join(__dirname, 'public', 'images');

async function downloadImage(url, dest) {
    if (fs.existsSync(dest)) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const req = https.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                https.get(response.headers.location, (redirRes) => {
                    redirRes.pipe(file); file.on('finish', () => file.close(resolve));
                }).on('error', err => fs.unlink(dest, () => reject(err)));
            } else if (response.statusCode === 200) {
                response.pipe(file); file.on('finish', () => file.close(resolve));
            } else {
                fs.unlink(dest, () => reject(new Error(`Status: ${response.statusCode}`)));
            }
        });
        req.on('error', err => { fs.unlink(dest, () => reject(err)); });
    });
}

function processCustomPage(name, title, category, filepath, keyword) {
    const heroImage = `${name}_hero.jpg`;
    const contentImage = `${name}_content.jpg`;

    const code = `import React, { useEffect } from "react";
import "../../pages/generated/EnterpriseStyle.css";
import { Link } from "react-router-dom";

const ${name} = () => {
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
            {/* 1. HERO SECTION */}
            <section className="ent-hero" style={{backgroundImage: "url('/images/${heroImage}')"}}>
                <div className="ent-hero-overlay"></div>
                <div className="ent-shape s1"></div>
                <div className="ent-shape s2"></div>
                
                <div className="container" style={{position: 'relative', zIndex: 3}}>
                    <div className="ent-hero-content ent-animate">
                        <span className="ent-chip">${category} Innovation</span>
                        <h1 className="ent-hero-title">
                            ${title.split(' ')[0]} <br/>
                            <span>${title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="ent-hero-desc">Transform your manufacturing efficiency leveraging the power of ${title} analytics.</p>
                        <Link to="/contact" className="ent-btn-primary">Request Live Demo</Link>
                    </div>
                </div>
            </section>

            {/* 2. HEADER VISUAL AREA */}
            <div className="container ent-visual-banner ent-scale-in">
                <img src="/images/${contentImage}" alt="${title} Technology System" className="ent-banner-img" />
            </div>

            {/* 3. OVERVIEW SECTION */}
            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-overview-content ent-animate">
                            <h3>A Modern Approach to ${title}</h3>
                            <p>Supervise machines, evaluate workflows, and command smart factory equipment instantly from a robust enterprise platform designed precisely for heavy industry.</p>
                            <p>Real-time machine feedback drastically reduces unnecessary downtime and highlights hidden inefficiencies hiding within your assembly logic.</p>
                        </div>
                        <div className="ent-overview-visual ent-animate" style={{transitionDelay: "0.2s"}}>
                            <img src="/images/${heroImage}" alt="System Display" style={{width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. KEY FEATURES */}
            <section className="ent-section ent-bg-slate">
                <div className="container">
                    <div className="ent-header ent-animate">
                        <h2>Key Operational Features</h2>
                        <p>Unlock profound oversight utilizing the next generation of industrial connectivity algorithms.</p>
                    </div>
                    <div className="ent-feature-cards">
                        <div className="ent-feature-card ent-animate">
                            <div className="ent-fc-icon">⚙️</div>
                            <h4>Absolute Oversight</h4>
                            <p>Maintain precise situational awareness over individual mechanical components or entire factories.</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{transitionDelay: "0.1s"}}>
                            <div className="ent-fc-icon">🛡️</div>
                            <h4>Hardened Architectures</h4>
                            <p>Leverage zero-trust network topology directly interfacing with OT legacy equipment securely.</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{transitionDelay: "0.2s"}}>
                            <div className="ent-fc-icon">🧠</div>
                            <h4>AI Predictive Analytics</h4>
                            <p>Automatically predict anomalies and cycle delays hours before they physically manifest on the floor.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. BENEFITS */}
            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-animate">
                            <h3>Impact & Benefits</h3>
                            <ul className="ent-bene-list">
                                <li>Decrease critical equipment breakdown scenarios.</li>
                                <li>Automate extensive end-of-shift reporting processes instantly.</li>
                                <li>Ensure absolute compliance with complex manufacturing ISO metrics.</li>
                                <li>Simplify operations with intuitive glassmorphism HMI design.</li>
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

            {/* 6. CALL TO ACTION SECTION */}
            <section className="ent-section ent-bg-slate" style={{paddingTop: 0}}>
                <div className="container">
                    <div className="ent-cta ent-animate">
                        <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px', position: 'relative', zIndex: 2}}>Upgrade Your Infrastructure</h2>
                        <p style={{fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px', position: 'relative', zIndex: 2}}>Engage with Pi Tech automation experts to deploy ${title} architectures accurately.</p>
                        <Link to="/contact" className="ent-btn-primary" style={{background: 'white', color: '#0f172a', position: 'relative', zIndex: 2}}>Contact Engineering</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ${name};
`;

    // Write file
    fs.writeFileSync(filepath, code);
    console.log(`[+] Updated ${filepath}`);

    // Download images async
    downloadImage(`https://loremflickr.com/1200/800/${keyword}?lock=50_${name}`, path.join(imgDir, heroImage))
        .catch(() => fs.writeFileSync(path.join(imgDir, heroImage), ''));

    downloadImage(`https://loremflickr.com/1200/800/${keyword}?lock=51_${name}`, path.join(imgDir, contentImage))
        .catch(() => fs.writeFileSync(path.join(imgDir, contentImage), ''));
}

processCustomPage("OEE", "Overall Equipment Effectiveness", "Industry 4.0", path.join(__dirname, 'src/pages/industry/OEE.js'), "analytics,factory");
processCustomPage("DWI", "Digital Work Instructions", "Industry 4.0", path.join(__dirname, 'src/pages/industry/DWI.js'), "tablet,worker,factory");
processCustomPage("TraceabilitySCADA", "Traceability & SCADA", "Automation", path.join(__dirname, 'src/pages/industry/TraceabilitySCADA.js'), "scada,controlroom");
processCustomPage("Digitalization", "Factory Digitalization", "Industry 4.0", path.join(__dirname, 'src/pages/industry/Digitalization.js'), "digital,industry");
processCustomPage("DigitalAndon", "Digital Andon System", "Industry 4.0", path.join(__dirname, 'src/pages/industry/DigitalAndon.js'), "display,factory,screen");
processCustomPage("ProductionDashboard", "Production Dashboards", "Industry 4.0", path.join(__dirname, 'src/pages/industry/ProductionDashboard.js'), "dashboard,chart,production");
processCustomPage("EnergyMonitoring", "Energy Monitoring", "Industry 4.0", path.join(__dirname, 'src/pages/industry/EnergyMonitoring.js'), "energy,power,factory");
processCustomPage("PredictiveMaintenance", "Predictive Maintenance", "Industry 4.0", path.join(__dirname, 'src/pages/industry/PredictiveMaintenance.js'), "maintenance,machine,industrial");
processCustomPage("IIoT", "Industrial IoT Systems", "Industry 4.0", path.join(__dirname, 'src/pages/industry/IIoT.js'), "iot,sensor,network");

console.log("All custom pages have been overhauled to the precise Light Enterprise Theme.");
