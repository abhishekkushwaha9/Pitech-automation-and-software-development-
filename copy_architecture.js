const fs = require('fs');
const path = require('path');

try {
    const destDir = 'c:\\Pi Tech backup\\pitech-website\\src\\pages\\industry';
    const srcDir = 'c:\\pitech-website\\src\\pages\\industry';

    // Read DigitalAndon.js as the master template
    const masterTemplate = fs.readFileSync(path.join(destDir, 'DigitalAndon.js'), 'utf8');

    const pages = [
        {
            file: "Digitalization.js",
            comp: "Digitalization",
            title1: "Industrial",
            title2: "Digitalization",
            img: "smart-factory.jpg"
        },
        {
            file: "EnergyMonitoring.js",
            comp: "EnergyMonitoring",
            title1: "Energy",
            title2: "Monitoring System",
            img: "energy-dashboard.jpg"
        },
        {
            file: "IIoT.js",
            comp: "IIoT",
            title1: "Industrial",
            title2: "IoT (IIoT)",
            img: "connected-machines.jpg"
        },
        {
            file: "PredictiveMaintenance.js",
            comp: "PredictiveMaintenance",
            title1: "Predictive",
            title2: "Maintenance",
            img: "ai-maintenance.jpg"
        },
        {
            file: "ProductionDashboard.js",
            comp: "ProductionDashboard",
            title1: "Production",
            title2: "Dashboard",
            img: "manufacturing-analytics.jpg"
        }
    ];

    pages.forEach(p => {
        let oldContent = "";
        if (fs.existsSync(path.join(destDir, p.file))) {
            oldContent = fs.readFileSync(path.join(destDir, p.file), 'utf8');
        } else {
            console.log("File not found:", p.file);
            return;
        }

        // Extract Overview text from old content
        const overviewRegex = /<div className="ent-overview-content ent-animate">([\\s\\S]*?)<\\/div >\\s* <div className="ent-overview-visual/;
        let overviewBlock = "";
        const overviewMatch = oldContent.match(overviewRegex);
        if (overviewMatch) {
            overviewBlock = overviewMatch[1];
        }

        // Extract Feature cards from old content
        const featuresRegex = /<div className="ent-feature-cards">([\\s\\S]*?)<\\/div >\\s*<\\/div>\\s*<\\/section >/;
        let featuresBlock = "";
        const featuresMatch = oldContent.match(featuresRegex);
        if (featuresMatch) {
            featuresBlock = featuresMatch[1];
        }

        let newContent = masterTemplate;

        // Component Name
        newContent = newContent.replace(/const DigitalAndon = \(\) => \\{/g, \`const \${p.comp} = () => {\`);
        newContent = newContent.replace(/export default DigitalAndon;/g, \`export default \${p.comp};\`);

        // Image mappings
        newContent = newContent.replace(/andon-board\\.jpg/g, p.img);

        // Hero Title
        newContent = newContent.replace(/<h1 className="ent-hero-title">([\\s\\S]*?)<\\/h1>/,
            \`<h1 className="ent-hero-title">
                                \${p.title1} <br/>
                                <span>\${p.title2}</span>
                            </h1>\`);

        // Update CTA text
        newContent = newContent.replace(/Digital Andon System architectures/g, \`\${p.title1} \${p.title2} architectures\`);
        
        // Update alt text
        newContent = newContent.replace(/alt="DigitalAndon System"/g, \`alt="\${p.comp} System"\`);

        // Inject Overview Block
        if(overviewBlock) {
            newContent = newContent.replace(/(<div className="ent-overview-content ent-animate">)[\\s\\S]*?(<\\/div>\\s*<div className="ent-overview-visual)/, \`$1\${overviewBlock}$2\`);
        }

        // Inject Feature Cards
        if(featuresBlock) {
            newContent = newContent.replace(/(<div className="ent-feature-cards">)[\\s\\S]*?(<\\/div>\\s*<\\/div>\\s*<\\/section>)/, \`$1\${featuresBlock}$2\`);
        }

        const heroDescRegex = /<p className="ent-hero-desc">([\\s\\S]*?)<\\/p>/;
        const oldHeroDescMatch = oldContent.match(heroDescRegex);
        if(oldHeroDescMatch) {
           newContent = newContent.replace(/<p className="ent-hero-desc">[\\s\\S]*?<\\/p>/, \`<p className="ent-hero-desc">\${oldHeroDescMatch[1]}</p>\`);
        }

        fs.writeFileSync(path.join(srcDir, p.file), newContent, 'utf8');
        fs.writeFileSync(path.join(destDir, p.file), newContent, 'utf8');
        console.log("Updated:", p.file);
    });

} catch (e) {
    console.error("CRASH:", e);
}
