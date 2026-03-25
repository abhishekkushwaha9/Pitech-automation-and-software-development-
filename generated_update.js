const fs = require('fs');
const https = require('https');
const path = require('path');

const unsplashIds = [
    '1581091226825-a6a2a5aee158', '1551288049-bebda4e38f71', '1585829365295-ab7cd400c167',
    '1537462715879-38c28cb14b0b', '1504917595217-d4bf52f10b80', '1611108257088-2fc83bbf5ff1',
    '1473341304170-971dccb5ac1e', '1580983518173-20f781bb4546', '1620714223084-8fcacc6dfd8d',
    '1563986768609-322da13575f3', '1516192510265-a8cd56dff262', '1563986768494-4da5f9b4acbf',
    '1581092144365-ea911e3b5e40', '1504328345606-18bbc8c9d7d1', '1629352926715-dd4c01ff3941',
    '1617300344566-aeab4c3046ee', '1565514020179-026c2bc6e3ef', '1614742468352-841f3d607a93',
    '1601506521937-0121a7fc2a6b', '1587293852726-70cdb56c2866', '1610992338622-eff2384a6931',
    '1581092916297-f0c0ae2f8c5b', '1615598284711-20e3a62886c9', '1504328345606-18bbc8c9d7d1',
    '1581092873132-ce0196cb9516', '1605810230434-7631ac76ec81', '1551288049-bebda4e38f71',
    '1508345228860-ce0196cb9516'
];

let idCounter = 3;

function downloadImage(id, filename) {
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;
    const dest = path.join(__dirname, 'public', 'images', filename);
    if (fs.existsSync(dest)) return Promise.resolve();

    return new Promise((resolve) => {
        https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                https.get(res.headers.location, handleResponse).on('error', () => resolve());
            } else {
                handleResponse(res);
            }
            function handleResponse(response) {
                let file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => { file.close(resolve); });
            }
        }).on('error', () => resolve());
    });
}

const dir = path.join(__dirname, 'src', 'pages', 'generated');
if (!fs.existsSync(dir)) process.exit(0);

let files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'EnterpriseStyle.css' && f !== 'PremiumTemplate.css');
let downloadPromises = [];

for (let i = 0; i < files.length; i++) {
    const f = files[i];
    let content = fs.readFileSync(path.join(dir, f), 'utf8');

    const topic = f.replace('.js', '').replace(/([A-Z])/g, ' $1').trim();
    const imageName1 = `${topic.toLowerCase().replace(/\s+/g, '-')}-1.jpg`;
    const imageName2 = `${topic.toLowerCase().replace(/\s+/g, '-')}-2.jpg`;

    // Replace automation-hero.png and dashboard-ui.png with unique image names
    content = content.replace(/automation-hero\.png/g, imageName1);
    content = content.replace(/dashboard-ui\.png/g, imageName2);

    // Improve text specificity slightly to make them unique
    content = content.replace(/>Scale operations flawlessly with transparent, connected infrastructure\.</g,
        `>Scale ${topic} flawlessly with transparent, connected infrastructure designed for your needs.<`);

    content = content.replace(/>We deploy industrial-grade.*?frameworks/g,
        `>We deploy specialized ${topic} frameworks`);

    // Specifically fix any generic "Automation Interface" alt tags
    content = content.replace(/alt="Industrial Automation Interface"/g, `alt="${topic} Interface"`);

    fs.writeFileSync(path.join(dir, f), content, 'utf8');

    let id1 = unsplashIds[(idCounter++) % unsplashIds.length];
    let id2 = unsplashIds[(idCounter++) % unsplashIds.length];

    downloadPromises.push(downloadImage(id1, imageName1));
    downloadPromises.push(downloadImage(id2, imageName2));
}

Promise.all(downloadPromises).then(() => {
    console.log('All generated files updated uniquely and images downloaded.');
});
