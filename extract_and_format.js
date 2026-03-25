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

const sourcePath = 'C:\\pitech-website\\src\\pages\\industry';
const destPath = 'C:\\Pi Tech backup\\pitech-website\\src\\pages\\industry';

function extractArray(content, arrayName) {
    // Looks for: const featuresData = [ { icon: "...", title: "...", desc: "...", color: "..." }, ... ];
    const regex = new RegExp(`const\\s+${arrayName}\\s*=\\s*\\[([\\s\\S]*?)\\];`);
    const match = content.match(regex);
    if (!match) return [];

    const arrayContent = match[1];
    const items = [];
    const itemRegex = /{[\s\S]*?icon:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?desc:\s*["']([^"']+)["'][\s\S]*?}/g;

    let itemMatch;
    while ((itemMatch = itemRegex.exec(arrayContent)) !== null) {
        items.push({
            icon: itemMatch[1],
            title: itemMatch[2],
            desc: itemMatch[3]
        });
    }
    return items;
}

for (const file of filesToUpdate) {
    const srcFile = path.join(sourcePath, file);
    if (!fs.existsSync(srcFile)) continue;

    const content = fs.readFileSync(srcFile, 'utf8');

    const badgeMatch = content.match(/<div className="hero-badge">([^<]+)<\/div>/);
    const badge = badgeMatch ? badgeMatch[1].trim() : "Industry 4.0 Standard";

    // Extract title (handles span highlight)
    let titleLine1 = "";
    let titleLine2 = "";
    const titleRegex = /<h1 className="hero-title">([\s\S]*?)<\/h1>/;
    const titleBlockMatch = content.match(titleRegex);
    if (titleBlockMatch) {
        let tb = titleBlockMatch[1].replace(/\n/g, ' ').trim();
        // try to find span
        const spanMatch = tb.match(/^(.*?)<span.*?>(.*?)<\/span>(.*?)$/);
        if (spanMatch) {
            titleLine1 = spanMatch[1].trim() + " " + spanMatch[2].trim();
            titleLine2 = spanMatch[3].trim();
        } else {
            titleLine1 = tb;
        }
    }
    if (!titleLine1) titleLine1 = file.replace('.js', '');

    const descMatch = content.match(/<p className="hero-text">([\s\S]*?)<\/p>/);
    const heroDesc = descMatch ? descMatch[1].replace(/\n/g, ' ').trim() : "Transforming industrial operations.";

    const features = extractArray(content, "featuresData");
    const benefits = extractArray(content, "benefitsData");
    const applications = extractArray(content, "applicationsData");

    const componentName = file.replace('.js', '');

    // Default image based on name
    const imageName = file.toLowerCase().replace('.js', '') + ".jpg";

    let featuresJsx = "";
    // Generate feature cards
    features.forEach((f, idx) => {
        const delay = (idx * 0.1).toFixed(1);
        featuresJsx += `
                        <div className="ent-feature-card ent-animate" style={{transitionDelay: "${delay}s"}}>
                            <div className="ent-fc-icon">${f.icon}</div>
                            <h4>${f.title}</h4>
                            <p>${f.desc}</p>
                        </div>`;
    });

    let benefitsJsx = "";
    benefits.forEach(b => {
        benefitsJsx += `\n                                <li><strong>${b.title}:</strong> ${b.desc}</li>`;
    });

    let appsJsx = "";
    applications.forEach(a => {
        appsJsx += `\n                                <li><strong>${a.title}</strong> - ${a.desc}</li>`;
    });

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
            <section className="ent-hero" style={{backgroundImage: "url('/images/${imageName}')"}}>
                <div className="ent-hero-overlay"></div>
                <div className="ent-shape s1"></div>
                <div className="ent-shape s2"></div>
                
                <div className="container" style={{position: 'relative', zIndex: 3}}>
                    <div className="ent-hero-content ent-animate">
                        <span className="ent-chip">${badge}</span>
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
                <img src="/images/${imageName}" alt="${componentName} Technology System" className="ent-banner-img" />
            </div>

            {/* 3. OVERVIEW SECTION */}
            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-overview-content ent-animate">
                            <h3>Overview: ${titleLine1}</h3>
                            <p>${heroDesc}</p>
                            <p>Our solutions provide comprehensive evaluation and strategic integration, deploying robust IT/OT infrastructure for seamless connected operations in heavy industry.</p>
                        </div>
                        <div className="ent-overview-visual ent-animate" style={{transitionDelay: "0.2s"}}>
                            <img src="/images/${imageName}" alt="System Display" style={{width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
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
${featuresJsx}
                    </div>
                </div>
            </section>

            {/* 5. BENEFITS */}
            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-animate">
                            <h3>Impact & Benefits</h3>
                            <ul className="ent-bene-list">${benefitsJsx}
                            </ul>
                        </div>
                        <div className="ent-animate" style={{transitionDelay: "0.2s"}}>
                             <h3>Industry Applications</h3>
                             <p>Adopted heavily across the following sectors to standardize workflow mechanics and guarantee output metrics:</p>
                             <ul className="ent-bene-list" style={{marginTop: '15px'}}>${appsJsx}
                             </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CALL TO ACTION SECTION */}
            <section className="ent-section ent-bg-slate" style={{paddingTop: 0}}>
                <div className="container">
                    <div className="ent-cta ent-animate">
                        <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px', position: 'relative', zIndex: 2}}>Upgrade Your Infrastructure</h2>
                        <p style={{fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px', position: 'relative', zIndex: 2}}>Engage with Pi Tech automation experts to deploy ${componentName} architectures accurately.</p>
                        <Link to="/contact" className="ent-btn-primary" style={{background: 'white', color: '#0f172a', position: 'relative', zIndex: 2}}>Contact Engineering</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ${componentName};
`;

    const destFile = path.join(destPath, file);
    fs.writeFileSync(destFile, newTemplate, 'utf8');

    // Also right to the C:\pitech-website folder just in case that's literally where the user meant.
    fs.writeFileSync(srcFile, newTemplate, 'utf8');

    console.log("Updated", file);
}
