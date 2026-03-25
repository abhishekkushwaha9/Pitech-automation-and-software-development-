const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    "DigitalAndon.js",
    "Digitalization.js",
    "EnergyMonitoring.js",
    "IIoT.js",
    "PredictiveMaintenance.js",
    "ProductionDashboard.js"
];

const basePath = path.join(__dirname, 'src', 'pages', 'industry');

for (const file of filesToUpdate) {
    const filePath = path.join(basePath, file);
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, 'utf8');

    // Extracting data using regex
    const bgMatch = content.match(/url\('([^']+)'\)/);
    const heroImage = bgMatch ? bgMatch[1] : '';

    const chipMatch = content.match(/<span className="ent-chip">([^<]+)<\/span>/);
    const chipText = chipMatch ? chipMatch[1] : 'Industry 4.0 Standard';

    const titleMatch = content.match(/<h1 className="ent-hero-title">\s*([^<]+)<br\/>\s*<span>([^<]+)<\/span>/);
    const titleLine1 = titleMatch ? titleMatch[1].trim() : '';
    const titleLine2 = titleMatch ? titleMatch[2].trim() : '';

    const heroDescMatch = content.match(/<p className="ent-hero-desc">([^<]+)<\/p>/);
    const heroDesc = heroDescMatch ? heroDescMatch[1].trim() : '';

    const sysNameMatch = content.match(/<h3>A Modern Approach to ([^<]+)<\/h3>/);
    const systemName = sysNameMatch ? sysNameMatch[1].trim() : '';

    const overviewMatch = content.match(/<h3>A Modern Approach to [^<]+<\/h3>\s*<p>([\s\S]+?)<\/p>\s*<p>([\s\S]+?)<\/p>/);
    const overviewP1 = overviewMatch ? overviewMatch[1].trim() : '';
    const overviewP2 = overviewMatch ? overviewMatch[2].trim() : '';

    const featuresMatch = [...content.matchAll(/<h4>([^<]+)<\/h4>\s*<p>([^<]+)<\/p>/g)];
    const f1Title = featuresMatch[0] ? featuresMatch[0][1].trim() : '';
    const f1Desc = featuresMatch[0] ? featuresMatch[0][2].trim() : '';
    const f2Title = featuresMatch[1] ? featuresMatch[1][1].trim() : '';
    const f2Desc = featuresMatch[1] ? featuresMatch[1][2].trim() : '';
    const f3Title = featuresMatch[2] ? featuresMatch[2][1].trim() : '';
    const f3Desc = featuresMatch[2] ? featuresMatch[2][2].trim() : '';

    const beneListMatch = content.match(/<ul className="ent-bene-list">([\s\S]+?)<\/ul>/);
    const beneList = beneListMatch ? beneListMatch[1].trim() : `
                                <li>Decrease critical equipment breakdown scenarios.</li>
                                <li>Automate extensive end-of-shift reporting processes instantly.</li>
                                <li>Ensure absolute compliance with complex manufacturing ISO metrics.</li>
                                <li>Simplify operations with intuitive minimal UI design.</li>`;

    const impactDescMatch = content.match(/<h3>Industry Applications<\/h3>\s*<p>([\s\S]+?)<\/p>/);
    const impactDesc = impactDescMatch ? impactDescMatch[1].trim() : '';

    const valueDrivenMatch = content.match(/<strong>Value Driven:<\/strong> ([\s\S]+?)\s*<\/div>/);
    const valueDriven = valueDrivenMatch ? valueDrivenMatch[1].trim() : '';

    const componentName = file.replace('.js', '');

    const newTemplate = `import React, { useEffect } from "react";
import "../../pages/generated/EnterpriseStyle.css";
import { Link } from "react-router-dom";

const ${componentName} = () => {
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
            <section className="ent-hero" style={{backgroundImage: "url('${heroImage}')"}}>
                <div className="ent-hero-overlay"></div>
                <div className="ent-shape s1"></div>
                <div className="ent-shape s2"></div>
                
                <div className="container" style={{position: 'relative', zIndex: 3}}>
                    <div className="ent-hero-content ent-animate">
                        <span className="ent-chip">${chipText}</span>
                        <h1 className="ent-hero-title">
                            ${titleLine1} <br/>
                            <span>${titleLine2}</span>
                        </h1>
                        <p className="ent-hero-desc">${heroDesc}</p>
                        <Link to="/contact" className="ent-btn-primary">Request Live Demo</Link>
                    </div>
                </div>
            </section>

            {/* 2. HEADER VISUAL AREA */}
            <div className="container ent-visual-banner ent-scale-in">
                <img src="${heroImage}" alt="${systemName} Technology System" className="ent-banner-img" />
            </div>

            {/* 3. OVERVIEW SECTION */}
            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-overview-content ent-animate">
                            <h3>A Modern Approach to ${systemName}</h3>
                            <p>${overviewP1}</p>
                            <p>${overviewP2}</p>
                        </div>
                        <div className="ent-overview-visual ent-animate" style={{transitionDelay: "0.2s"}}>
                            <img src="${heroImage}" alt="System Display" style={{width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
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
                            <h4>${f1Title}</h4>
                            <p>${f1Desc}</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{transitionDelay: "0.1s"}}>
                            <div className="ent-fc-icon">🛡️</div>
                            <h4>${f2Title}</h4>
                            <p>${f2Desc}</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{transitionDelay: "0.2s"}}>
                            <div className="ent-fc-icon">🧠</div>
                            <h4>${f3Title}</h4>
                            <p>${f3Desc}</p>
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
${beneList}
                            </ul>
                        </div>
                        <div className="ent-animate" style={{transitionDelay: "0.2s"}}>
                             <h3>Industry Applications</h3>
                             <p>${impactDesc}</p>
                             <div style={{marginTop: '20px', padding: '20px', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #2563eb', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}>
                                 <strong>Value Driven:</strong> ${valueDriven}
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
                        <p style={{fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px', position: 'relative', zIndex: 2}}>Engage with Pi Tech automation experts to deploy ${systemName} architectures accurately.</p>
                        <Link to="/contact" className="ent-btn-primary" style={{background: 'white', color: '#0f172a', position: 'relative', zIndex: 2}}>Contact Engineering</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ${componentName};
`;

    fs.writeFileSync(filePath, newTemplate, 'utf8');
    console.log(`Updated ${file}`);
}
