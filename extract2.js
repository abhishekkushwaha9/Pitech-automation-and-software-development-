const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\pitech-website\\src\\pages\\industry';
const destDir = 'c:\\Pi Tech backup\\pitech-website\\src\\pages\\industry';

const oeeContent = fs.readFileSync(path.join(destDir, 'OEE.js'), 'utf8');

const filesToUpdate = [
    { file: "DigitalAndon.js", comp: "DigitalAndon", title1: "Digital", title2: "Andon System", img: "andon-board.jpg" },
    { file: "Digitalization.js", comp: "Digitalization", title1: "Factory", title2: "Digitalization", img: "smart-factory.jpg" },
    { file: "EnergyMonitoring.js", comp: "EnergyMonitoring", title1: "Energy", title2: "Monitoring", img: "energy-dashboard.jpg" },
    { file: "IIoT.js", comp: "IIoT", title1: "IIoT", title2: "Connect", img: "connected-machines.jpg" },
    { file: "PredictiveMaintenance.js", comp: "PredictiveMaintenance", title1: "Predictive", title2: "Maintenance", img: "ai-maintenance.jpg" },
    { file: "ProductionDashboard.js", comp: "ProductionDashboard", title1: "Production", title2: "Dashboard", img: "manufacturing-analytics.jpg" }
];

filesToUpdate.forEach(f => {
    let oldContent = "";
    if (fs.existsSync(path.join(destDir, f.file))) {
        oldContent = fs.readFileSync(path.join(destDir, f.file), 'utf8');
    }

    // Extract hero description
    const descMatch = oldContent.match(/<p className="ent-hero-desc">([\s\S]*?)<\/p>/);
    const desc = descMatch ? descMatch[1] : `Transform ${f.title1} ${f.title2} with AI.`;

    // Extract overview paragraphs
    const overviewMatch = oldContent.match(/<div className="ent-overview-content ent-animate">([\s\S]*?)<\/div>/);
    let overviewContent = overviewMatch ? overviewMatch[1] : `<h3>A Modern Approach to ${f.title1} ${f.title2}</h3><p>Integrate robust ${f.title1} solutions seamlessly.</p>`;
    // Force the first tag to be H3 A Modern Approach
    overviewContent = overviewContent.replace(/<h3>.*?<\/h3>/, `<h3>A Modern Approach to ${f.title1} ${f.title2}</h3>`);

    // Extract features block
    const featuresMatch = oldContent.match(/<div className="ent-feature-cards">([\s\S]*?)<\/section>/);
    let featuresBlock = oeeContent.match(/<div className="ent-feature-cards">([\s\S]*?)<\/section>/)[1]; // fallback to OEE
    if (featuresMatch) {
        featuresBlock = featuresMatch[1].replace(/<\/div>\s*$/, ''); // strip out that div correctly below
    }

    // Extract benefits block elements
    const beneMatch = oldContent.match(/<ul className="ent-bene-list">([\s\S]*?)<\/ul>/g);
    let benefitsHtml = "";
    let appsHtml = "";
    if (beneMatch && beneMatch.length >= 2) {
        benefitsHtml = beneMatch[0];
        appsHtml = beneMatch[1];
    } else {
        benefitsHtml = oeeContent.match(/<ul className="ent-bene-list">([\s\S]*?)<\/ul>/g)[0];
        appsHtml = `<ul className="ent-bene-list" style={{marginTop: '15px'}}><li><strong>Value Driven:</strong> Boost operational yields.</li></ul>`;
    }

    // Now construct exactly the OEE.js template wrapper but inject this data
    let newJsx = `import React, { useEffect } from "react";
import "../../pages/generated/EnterpriseStyle.css";
import { Link } from "react-router-dom";

const ${f.comp} = () => {
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
            <section className="ent-hero" style={{backgroundImage: "url('/images/${f.img}')"}}>
                <div className="ent-hero-overlay"></div>
                <div className="ent-shape s1"></div>
                <div className="ent-shape s2"></div>
                
                <div className="container" style={{position: 'relative', zIndex: 3}}>
                    <div className="ent-hero-content ent-animate">
                        <span className="ent-chip">Industry 4.0 Standard</span>
                        <h1 className="ent-hero-title">
                            ${f.title1} <br/>
                            <span>${f.title2}</span>
                        </h1>
                        <p className="ent-hero-desc">${desc}</p>
                        <Link to="/contact" className="ent-btn-primary">Request Live Demo</Link>
                    </div>
                </div>
            </section>

            <div className="container ent-visual-banner ent-scale-in">
                <div style={{height: '400px', backgroundImage: "url('/images/${f.img}')", backgroundSize: 'cover', backgroundPosition:'center', borderRadius: '24px'}}></div>
            </div>

            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-overview-content ent-animate">
${overviewContent}
                        </div>
                        <div className="ent-overview-visual ent-animate" style={{transitionDelay: "0.2s"}}>
                            <img src="/images/${f.img}" alt="${f.comp} System" style={{width: '100%', height:'100%', objectFit:'cover', minHeight: '300px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
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
${featuresBlock}
                </div>
            </section>

            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-animate">
                            <h3>Impact & Benefits</h3>
                            ${benefitsHtml}
                        </div>
                        <div className="ent-animate" style={{transitionDelay: "0.2s"}}>
                             <h3>Industry Applications</h3>
                             <p>Adopted heavily across automotive, metallurgy, logistics, and precision manufacturing ecosystems to standardize workflow mechanics and guarantee output metrics.</p>
                             ${appsHtml}
                        </div>
                    </div>
                </div>
            </section>

            <section className="ent-section ent-bg-slate" style={{paddingTop: 0}}>
                <div className="container">
                    <div className="ent-cta ent-animate">
                        <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px', position: 'relative', zIndex: 2}}>Upgrade Your Infrastructure</h2>
                        <p style={{fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px', position: 'relative', zIndex: 2}}>Engage with Pi Tech automation experts to deploy ${f.title1} ${f.title2} architectures accurately.</p>
                        <Link to="/contact" className="ent-btn-primary" style={{background: 'white', color: '#0f172a', position: 'relative', zIndex: 2}}>Contact Engineering</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ${f.comp};
`;

    fs.writeFileSync(path.join(srcDir, f.file), newJsx, 'utf8');
    fs.writeFileSync(path.join(destDir, f.file), newJsx, 'utf8');
});
console.log("All files updated exactly to OEE.js layout structure!");
