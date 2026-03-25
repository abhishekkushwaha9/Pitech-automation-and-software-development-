const fs = require('fs');

const inDir = 'C:\\pitech-website\\src\\pages\\industry';
const bakDir = 'C:\\Pi Tech backup\\pitech-website\\src\\pages\\industry';

const master = fs.readFileSync(inDir + '\\DigitalAndon.js', 'utf8');

const mapping = [
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

function extractBetween(str, startStr, endStr) {
    const startObj = str.indexOf(startStr);
    if (startObj === -1) return null;
    const startIndex = startObj + startStr.length;
    const endIndex = str.indexOf(endStr, startIndex);
    if (endIndex === -1) return null;
    return str.substring(startIndex, endIndex);
}

for (const p of mapping) {
    console.log("Processing", p.file);
    const oldCode = fs.readFileSync(bakDir + '\\' + p.file, 'utf8');

    // Extract blocks
    const overviewBlock = extractBetween(oldCode, '<div className="ent-overview-content ent-animate">', '</div>\n                        <div className="ent-overview-visual');
    const featuresBlock = extractBetween(oldCode, '<div className="ent-feature-cards">', '</div>\n                \n                </div>\n            </section>');
    const descBlock = extractBetween(oldCode, '<p className="ent-hero-desc">', '</p>');

    let newCode = master;

    // Component names
    newCode = newCode.split('const DigitalAndon = () => {').join('const ' + p.comp + ' = () => {');
    newCode = newCode.split('export default DigitalAndon;').join('export default ' + p.comp + ';');
    newCode = newCode.split('alt="DigitalAndon System"').join('alt="' + p.comp + ' System"');

    // Replace images
    newCode = newCode.split('andon-board.jpg').join(p.img);

    // Hero title
    const oldTitle = extractBetween(newCode, '<h1 className="ent-hero-title">', '</h1>');
    if (oldTitle) {
        newCode = newCode.replace(oldTitle, '\n                            ' + p.title1 + ' <br/>\n                            <span>' + p.title2 + '</span>\n                        ');
    }

    // Replace Desc
    if (descBlock) {
        const oldDesc = extractBetween(newCode, '<p className="ent-hero-desc">', '</p>');
        if (oldDesc) {
            newCode = newCode.replace(oldDesc, descBlock);
        }
    }

    // Replace Overview
    if (overviewBlock) {
        const oldOverview = extractBetween(newCode, '<div className="ent-overview-content ent-animate">', '</div>\n                        <div className="ent-overview-visual');
        if (oldOverview) {
            newCode = newCode.replace(oldOverview, overviewBlock);
        }
    }

    // Replace Features
    if (featuresBlock) {
        const oldFeats = extractBetween(newCode, '<div className="ent-feature-cards">', '</div>\n                \n                </div>\n            </section>');
        if (oldFeats) {
            newCode = newCode.replace(oldFeats, featuresBlock);
        }
    }

    // Update CTA text
    newCode = newCode.split('Digital Andon System architectures').join(p.title1 + ' ' + p.title2 + ' architectures');

    fs.writeFileSync(inDir + '\\' + p.file, newCode, 'utf8');
    fs.writeFileSync(bakDir + '\\' + p.file, newCode, 'utf8');
    console.log("Saved", p.file);
}
