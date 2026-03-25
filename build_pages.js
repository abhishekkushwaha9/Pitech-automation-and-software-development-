const fs = require('fs');
const path = require('path');
const https = require('https');

// Create images directory
const imgDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Ensure generated pages directory exists
const outputDir = path.join(__dirname, 'src', 'pages', 'generated');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper to download an image with simple retries and fallback
async function downloadImage(url, dest) {
  if (fs.existsSync(dest)) return Promise.resolve(); // Skip if exists

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (redirRes) => {
          redirRes.pipe(file);
          file.on('finish', () => { file.close(resolve); });
        }).on('error', (err) => { fs.unlink(dest, () => reject(err)); });
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => { file.close(resolve); });
      } else {
        fs.unlink(dest, () => reject(new Error(`Failed with status: ${response.statusCode}`)));
      }
    });
    req.on('error', (err) => { fs.unlink(dest, () => reject(err)); });
    req.setTimeout(10000, () => { req.abort(); reject(new Error('Timeout')); });
  });
}

// Premium Light Enterprise CSS
const cssContent = `/* EnterpriseStyle.css - Light Mode Premium */

.ent-page {
  font-family: var(--font-body, 'Inter', 'Segoe UI', sans-serif);
  color: #334155;
  background-color: #f8fafc;
  overflow-x: hidden;
  position: relative;
}

.ent-section { padding: 100px 0; position: relative; }
.ent-bg-white { background-color: #ffffff; }
.ent-bg-light { background-color: #f8fafc; }
.ent-bg-slate { background-color: #f1f5f9; }

.ent-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.ent-header h2 {
  font-family: var(--font-heading, 'Montserrat', sans-serif);
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800; margin-bottom: 20px; color: #0f172a; letter-spacing: -0.5px;
}

.ent-header p { font-size: 1.15rem; color: #64748b; line-height: 1.8; }

/* 1. HERO SECTION */
.ent-hero {
  position: relative; min-height: 85vh; display: flex; align-items: center;
  background-attachment: fixed; background-size: cover; background-position: center; overflow: hidden;
}

.ent-hero-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.85) 100%); z-index: 1;
}

/* Floating Shapes */
.ent-shape { position: absolute; z-index: 2; border-radius: 50%; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1)); }
.ent-shape.s1 { width: 400px; height: 400px; top: -100px; right: -100px; animation: floatShape 12s infinite alternate ease-in-out; }
.ent-shape.s2 { width: 200px; height: 200px; bottom: 100px; left: -50px; animation: floatShape 8s infinite alternate-reverse ease-in-out; }

@keyframes floatShape { 0% { transform: translateY(0) scale(1); } 100% { transform: translateY(-40px) scale(1.05); } }

.ent-hero-content { position: relative; z-index: 3; max-width: 800px; padding: 120px 0 60px; }
.ent-chip { display: inline-block; padding: 6px 16px; background: rgba(59,130,246,0.1); color: #2563eb; border-radius: 30px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 25px; border: 1px solid rgba(59,130,246,0.2); }
.ent-hero-title { font-family: var(--font-heading); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: #0f172a; line-height: 1.1; margin-bottom: 25px; }
.ent-hero-title span { background: linear-gradient(135deg, #2563eb, #0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.ent-hero-desc { font-size: 1.25rem; color: #475569; line-height: 1.8; margin-bottom: 40px; }

.ent-btn-primary { background: #2563eb; color: #ffffff; padding: 16px 36px; border-radius: 8px; font-size: 1.1rem; font-weight: 600; text-decoration: none; transition: all 0.3s ease; display: inline-block; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); }
.ent-btn-primary:hover { background: #1d4ed8; transform: translateY(-3px); color: #fff; box-shadow: 0 15px 30px rgba(37, 99, 235, 0.3); }

/* 2. HEADER VISUAL AREA */
.ent-visual-banner { margin-top: -80px; position: relative; z-index: 10; padding: 0 20px; }
.ent-banner-img { width: 100%; height: 400px; object-fit: cover; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); transition: transform 0.5s ease; }
.ent-visual-banner:hover .ent-banner-img { transform: scale(1.02); }

/* 3. OVERVIEW SECTION */
.ent-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.ent-overview-content h3 { font-size: 2rem; color: #0f172a; margin-bottom: 20px; font-weight: 800;}
.ent-overview-content p { font-size: 1.1rem; color: #475569; line-height: 1.8; margin-bottom: 20px; }

/* 4. KEY FEATURES */
.ent-feature-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.ent-feature-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 40px 30px; transition: all 0.3s ease; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.ent-feature-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-color: #cbd5e1; }
.ent-fc-icon { font-size: 2.5rem; margin-bottom: 20px; color: #2563eb; }
.ent-feature-card h4 { font-size: 1.25rem; color: #0f172a; margin-bottom: 15px; font-weight: 700; }
.ent-feature-card p { color: #64748b; line-height: 1.6; }

/* 5. TECHNOLOGY ARCHITECTURE */
.ent-tech-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.ent-tech-item { background: #ffffff; padding: 25px; border-radius: 12px; border-left: 4px solid #0ea5e9; box-shadow: 0 4px 10px rgba(0,0,0,0.03); display: flex; align-items: center; gap: 20px; }
.ent-tech-info h4 { margin: 0 0 5px 0; color: #0f172a; font-size: 1.1rem; }
.ent-tech-info p { margin: 0; color: #64748b; font-size: 0.95rem; }

/* 6. BENEFITS & INDUSTRY ALIGNMENT */
.ent-bene-list { list-style: none; padding: 0; }
.ent-bene-list li { padding: 15px 0; border-bottom: 1px solid #e2e8f0; display: flex; align-items: flex-start; gap: 15px; font-size: 1.1rem; color: #334155; }
.ent-bene-list li::before { content: '✓'; color: #22c55e; font-weight: bold; background: #dcfce7; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 50%; flex-shrink: 0; }

/* 7. GALLERY */
.ent-gallery { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.ent-gal-item { border-radius: 16px; overflow: hidden; height: 250px; position: relative; }
.ent-gal-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.ent-gal-item:hover .ent-gal-img { transform: scale(1.1); }
.ent-gal-overlay { position: absolute; bottom: 0; left: 0; width: 100%; padding: 20px; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: white; font-weight: 600; font-size: 1.1rem; }

/* 8. CTA */
.ent-cta { background: #0f172a; border-radius: 24px; padding: 80px 40px; text-align: center; color: white; position: relative; overflow: hidden; }
.ent-cta::before { content: ''; position: absolute; width: 300px; height: 300px; background: rgba(59,130,246,0.2); filter: blur(80px); right: -100px; top: -100px; border-radius: 50%; }

/* ANIMATIONS (SCROLL) */
.ent-animate { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.ent-animate.visible { opacity: 1; transform: translateY(0); }
.ent-scale-in { opacity: 0; transform: scale(0.9); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.ent-scale-in.visible { opacity: 1; transform: scale(1); }

@media (max-width: 900px) {
  .ent-overview-grid, .ent-tech-grid { grid-template-columns: 1fr; }
  .ent-hero-title { font-size: 2.5rem; }
}
`;

const pageDefs = [
  { name: "MetalIndustry", title: "Metal Industry Automation", cat: "Industry", kw: "foundry,steel,industrial" },
  { name: "GlassIndustry", title: "Glass Industry Solutions", cat: "Industry", kw: "factory,glass,production" },
  { name: "AutomotiveIndustry", title: "Automotive Manufacturing", cat: "Industry", kw: "automotive,assembly,robot" },
  { name: "MaterialHandling", title: "Material Handling Integration", cat: "Industry", kw: "warehouse,logistics,conveyor" },
  { name: "Sensor", title: "Industrial Smart Sensors", cat: "Products", kw: "sensor,electronics,iot" },
  { name: "PLC", title: "Programmable Logic Controllers", cat: "Products", kw: "plc,control,cabinet" },
  { name: "Server", title: "Industrial Edge Servers", cat: "Products", kw: "server,datacenter,network" },
  { name: "RFID", title: "Industrial RFID Systems", cat: "Products", kw: "rfid,scanning,barcode" },
  { name: "HMI", title: "Human-Machine Interfaces", cat: "Products", kw: "dashboard,screen,operator" },
  { name: "BLETag", title: "BLE Asset Tracking", cat: "Products", kw: "bluetooth,tracking,circuit" },
  { name: "PLCProgramming", title: "PLC / HMI Programming", cat: "Automation", kw: "code,monitor,automation" },
  { name: "MachineIntegration", title: "Machine Integration", cat: "Automation", kw: "machinery,factory,cable" },
  { name: "LeakTesting", title: "Leak Testing Systems", cat: "SPM", kw: "testing,pressure,gauge" },
  { name: "AssemblyLine", title: "Automated Assembly Lines", cat: "SPM", kw: "assembly,manufacturing,line" },
  { name: "PressMachine", title: "Press Machine Automation", cat: "SPM", kw: "stamping,press,metalwork" },
  { name: "AutomationLines", title: "Complete Automation Lines", cat: "Lines", kw: "smartfactory,production,automation" },
  { name: "PalletConveyor", title: "Pallet Conveyor Systems", cat: "Convergence", kw: "pallet,conveyor,warehouse" },
  { name: "AssemblyConveyor", title: "Assembly Conveyors", cat: "Convergence", kw: "belt,assembly,factory" },
  { name: "BeltConveyors", title: "Belt Conveyors", cat: "Convergence", kw: "roller,belt,cargo" },
  { name: "ChainConveyors", title: "Chain Conveyors", cat: "Convergence", kw: "chain,motor,industrial" },
  { name: "RoboticsIntegration", title: "Automation Tools Integration", cat: "Robotics", kw: "technology,robotics,arm" },
  { name: "RoboticInspection", title: "Robotic Inspection", cat: "Robotics", kw: "vision,camera,robot" },
  { name: "PickAndPlace", title: "Pick and Place Robotics", cat: "Robotics", kw: "scara,picking,robotarm" }
];

// Dictionary defining context for content uniqueness
function gText(page) {
  const d = {
    Industry: { verb: "revolutionize", node: "facilities", benefit: "yield metrics", example: "massive infrastructure deployments" },
    Products: { verb: "integrate", node: "edge devices", benefit: "data capture efficiency", example: "hardware module deployments" },
    Automation: { verb: "synchronize", node: "control loops", benefit: "process stability", example: "logic controller configurations" },
    SPM: { verb: "automate", node: "specialized mechanisms", benefit: "cycle time reduction", example: "custom machine integrations" },
    Lines: { verb: "orchestrate", node: "entire production lines", benefit: "end-to-end throughput", example: "turnkey plant solutions" },
    Convergence: { verb: "connect", node: "material routing flows", benefit: "logistical speed", example: "continuous transfer mechanisms" },
    Robotics: { verb: "articulate", node: "robotic kinematics", benefit: "micron-level precision", example: "autonomous manipulation arrays" }
  };
  const c = d[page.cat] || d.Industry;

  return {
    desc: `Leverage cutting-edge ${page.title} to ${c.verb} your ${c.node} and unlock unprecedented ${c.benefit}.`,
    overview: `The ${page.title} paradigm is redefining how modern enterprises approach ${c.example}. By migrating from legacy disjointed systems to a centralized, connected architecture, operators gain direct visibility into every operational stage. This reduces latency, prevents catastrophic failures, and optimizes operational expenditure dynamically.`,
    feature1: `Enhance ${c.node} utilizing real-time analytics.`,
    feature2: `Secure ${c.benefit} with deep encryption.`,
    benefit1: `Dramatically improve ${c.benefit} across all shifts.`,
    benefit2: `Seamlessly ${c.verb} with legacy PLC and SCADA environments.`,
    tech1: `Advanced ${c.node} interfacing protocols.`,
    tech2: `Cloud-native telemetry pushing to AWS/Azure.`
  };
}

async function prepareImages() {
  console.log('Downloading unique images for each page via loremflickr...');
  for (let i = 0; i < pageDefs.length; i++) {
    const page = pageDefs[i];
    const img1Path = path.join(imgDir, `${page.name}_hero.jpg`);
    const img2Path = path.join(imgDir, `${page.name}_content.jpg`);

    try {
      await downloadImage(`https://loremflickr.com/1200/800/${page.kw}?lock=${i * 2}`, img1Path);
      await downloadImage(`https://loremflickr.com/1200/800/${page.kw}?lock=${i * 2 + 1}`, img2Path);
      console.log(`[+] Downloaded images for ${page.name}`);
    } catch (e) {
      console.log(`[-] Failed download for ${page.name}, using fallback.`);
      if (!fs.existsSync(img1Path)) fs.writeFileSync(img1Path, '');
      if (!fs.existsSync(img2Path)) fs.writeFileSync(img2Path, '');
    }
  }
}

function renderComponent(page) {
  const txt = gText(page);
  return `import React, { useEffect } from "react";
import "./EnterpriseStyle.css";
import { Link } from "react-router-dom";

const ${page.name} = () => {
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
            <section className="ent-hero" style={{backgroundImage: "url('/images/${page.name}_hero.jpg')"}}>
                <div className="ent-hero-overlay"></div>
                <div className="ent-shape s1"></div>
                <div className="ent-shape s2"></div>
                
                <div className="container" style={{position: 'relative', zIndex: 3}}>
                    <div className="ent-hero-content ent-animate">
                        <span className="ent-chip">${page.cat} Systems</span>
                        <h1 className="ent-hero-title">
                            ${page.title.split(' ')[0]} <br/>
                            <span>${page.title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="ent-hero-desc">${txt.desc}</p>
                        <Link to="/contact" className="ent-btn-primary">Explore Capability</Link>
                    </div>
                </div>
            </section>

            {/* 2. HEADER VISUAL AREA */}
            <div className="container ent-visual-banner ent-scale-in">
                <img src="/images/${page.name}_content.jpg" alt="${page.title} Architecture" className="ent-banner-img" />
            </div>

            {/* 3. OVERVIEW SECTION */}
            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-overview-content ent-animate">
                            <h3>Modernizing Industrial Infrastructure</h3>
                            <p>${txt.overview}</p>
                            <p>Through robust IoT layering and edge-compute algorithms, our technology bridges the gap between hardware mechanics and digital intelligence.</p>
                        </div>
                        <div className="ent-overview-visual ent-animate" style={{transitionDelay: "0.2s"}}>
                            <img src="/images/${page.name}_hero.jpg" alt="Overview" style={{width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. KEY FEATURES */}
            <section className="ent-section ent-bg-slate">
                <div className="container">
                    <div className="ent-header ent-animate">
                        <h2>Key Operational Features</h2>
                        <p>Built exclusively for harsh industrial zones requiring exceptional uptime.</p>
                    </div>
                    <div className="ent-feature-cards">
                        <div className="ent-feature-card ent-animate">
                            <div className="ent-fc-icon">⚙️</div>
                            <h4>Precision Control</h4>
                            <p>${txt.feature1}</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{transitionDelay: "0.1s"}}>
                            <div className="ent-fc-icon">🛡️</div>
                            <h4>Enterprise Security</h4>
                            <p>${txt.feature2}</p>
                        </div>
                        <div className="ent-feature-card ent-animate" style={{transitionDelay: "0.2s"}}>
                            <div className="ent-fc-icon">📊</div>
                            <h4>Unified Telemetry</h4>
                            <p>Aggregate raw physical metrics into powerful cloud dashboards instantly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. BIG TECHNOLOGY / SYSTEM ARCHITECTURE */}
            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-header ent-animate">
                        <h2>System Architecture</h2>
                        <p>How ${page.title} integrates into your facility flawlessly.</p>
                    </div>
                    <div className="ent-tech-grid">
                        <div className="ent-tech-item ent-animate"><div style={{fontSize:'2rem'}}>🌐</div><div className="ent-tech-info"><h4>OT/IT Connectivity</h4><p>${txt.tech1}</p></div></div>
                        <div className="ent-tech-item ent-animate" style={{transitionDelay: "0.1s"}}><div style={{fontSize:'2rem'}}>☁️</div><div className="ent-tech-info"><h4>Cloud Integration</h4><p>${txt.tech2}</p></div></div>
                        <div className="ent-tech-item ent-animate" style={{transitionDelay: "0.2s"}}><div style={{fontSize:'2rem'}}>🧠</div><div className="ent-tech-info"><h4>Edge Computing</h4><p>Local data processing ensures zero latency during critical faults.</p></div></div>
                        <div className="ent-tech-item ent-animate" style={{transitionDelay: "0.3s"}}><div style={{fontSize:'2rem'}}>🔒</div><div className="ent-tech-info"><h4>ISO-compliant Safety</h4><p>Hardwired safety relays mapping direct to the control firmware.</p></div></div>
                    </div>
                </div>
            </section>

            {/* 6. BENEFITS AND INDUSTRY USE CASES */}
            <section className="ent-section ent-bg-light">
                <div className="container">
                    <div className="ent-overview-grid">
                        <div className="ent-animate">
                            <h3>Impact & Benefits</h3>
                            <ul className="ent-bene-list">
                                <li>${txt.benefit1}</li>
                                <li>${txt.benefit2}</li>
                                <li>Reduce unpredictable machine downtime natively.</li>
                                <li>Simplify operations with intuitive HMI design.</li>
                            </ul>
                        </div>
                        <div className="ent-animate" style={{transitionDelay: "0.2s"}}>
                             <h3>Industry Applications</h3>
                             <p>Adopted heavily across automotive, metallurgy, logistics, and precision manufacturing ecosystems to standardize workflow mechanics and guarantee output metrics.</p>
                             <div style={{marginTop: '20px', padding: '20px', background: 'white', borderRadius: '12px', borderLeft: '4px solid #2563eb', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}>
                                 <strong>Case Reference:</strong> A high-volume facility utilizing ${page.title} increased daily throughput by 14% while reducing manual interventions by over 40 hours weekly.
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. GALLERY SECTION */}
            <section className="ent-section ent-bg-white">
                <div className="container">
                    <div className="ent-header ent-animate">
                        <h2>Visual Documentation</h2>
                    </div>
                    <div className="ent-gallery">
                        <div className="ent-gal-item ent-scale-in">
                            <img src="/images/${page.name}_content.jpg" alt="Gallery 1" className="ent-gal-img"/>
                            <div className="ent-gal-overlay">Deployment Phase</div>
                        </div>
                        <div className="ent-gal-item ent-scale-in" style={{transitionDelay: "0.2s"}}>
                            <img src="/images/${page.name}_hero.jpg" alt="Gallery 2" className="ent-gal-img"/>
                            <div className="ent-gal-overlay">Active Telemetry</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CALL TO ACTION SECTION */}
            <section className="ent-section ent-bg-white" style={{paddingTop: 0}}>
                <div className="container">
                    <div className="ent-cta ent-animate">
                        <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px', position: 'relative', zIndex: 2}}>Upgrade Your Infrastructure</h2>
                        <p style={{fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px', position: 'relative', zIndex: 2}}>Engage with Pi Tech automation experts to deploy ${page.title} accurately.</p>
                        <Link to="/contact" className="ent-btn-primary" style={{background: 'white', color: '#0f172a', position: 'relative', zIndex: 2}}>Contact Engineering</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ${page.name};
`;
}

async function run() {
  // Generate the CSS file
  fs.writeFileSync(path.join(outputDir, 'EnterpriseStyle.css'), cssContent);
  console.log('[+] Created EnterpriseStyle.css');

  // Download images uniquely
  await prepareImages();

  // Generate unique content pages
  for (const page of pageDefs) {
    const code = renderComponent(page);
    fs.writeFileSync(path.join(outputDir, `${page.name}.js`), code);
    console.log(`[+] Generated ${page.name}.js`);
  }

  console.log('[+] Generation complete. Rebuilding UI.');
}

run();
