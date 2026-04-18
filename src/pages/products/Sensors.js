import React from "react";
import PageLayout from "../../layouts/PageLayout";
import "./Sensors.css";

export default function Sensors() {
  React.useEffect(() => {
    // SEO logic
    document.title = "Products - PiTech Automation";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.pitechautomation.com/products/sensor');

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute("content", "Industrial Sensors & Products by PiTech Automation. High-accuracy sensors, PLCs, and IoT gateways for your smart factory transformation.");
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      id: 1,
      image: "/images/Throughbeam photoelectric sensors.jpg",
      title: "Throughbeam photoelectric sensors",
      description: "",
      models: [
        "Separate transmitter and receiver opposite one another",
        "Reliable standard photoelectric sensors",
        "With high function reserves and operating ranges up to 150 m"
      ]
    },
    {
      id: 2,
      image: "/images/Basic sensors.jpg",
      title: "Basic sensors",
      description: "",
      models: [
        "Extensive portfolio with cubic and cylindrical designs",
        "Short and long designs",
        "Sensors with basic performance"
      ]
    },
    {
      id: 3,
      image: "/images/Special sensors.jpg",
      title: "Special sensors",
      description: "",
      models: [
        "Sensors with an extra level of performance",
        "All stainless steel sensors for extreme requirements",
        "10–320V AC/DC 2-wire sensors",
        "IO-Link models"
      ]
    },
    {
      id: 4,
      image: "/images/Sensors for Ex applications.jpg",
      title: "Sensors for Ex applications",
      description: "",
      models: [
        "Universal sensors for use in potentially explosive areas",
        <>Certified in accordance with <strong>ATEX and IECEx directives</strong></>,
        <>Devices with type examination certificates for <strong>Zone 2 and Zone 22</strong>, as well as <strong>Zone 1 and Zone 21</strong></>
      ]
    },
    {
      id: 5,
      image: "/images/Amplifiers for Fiber Optics.jpg",
      title: "Amplifiers for Fiber Optics",
      description: "",
      models: [
        "Red light and infrared light models",
        "Devices with large operating range and very short response time",
        <>Universal compatibility for plastic and glass fiber optics with <strong>Ø 2.2 mm</strong></>,
        <>Adjustment via <strong>teach, signal sequence, and IO-Link</strong></>
      ]
    },
    {
      id: 6,
      image: "/images/ultrasonic sensor.jpg",
      title: "DMU420B-1000.3/LV-M8 – Ultrasonic Distance Sensor",
      description: "",
      models: [
        <>High precision <strong>ultrasonic distance measurement sensor</strong></>,
        "Reliable detection for industrial automation environments",
        <>Suitable for <strong>distance measurement, object detection, and level monitoring</strong></>,
        "Compact design with stable and accurate sensing performance"
      ]
    }
  ];

  return (
    <>
      <PageLayout
        title="Industrial <span>Sensors</span>"
        tag="Smart Sensing"
        subtitle="High-accuracy industrial sensors for every measurement need — temperature, pressure, vibration, proximity, and more."
        heroImage="/images/BLE.webp"
        breadcrumb={[{ label: "Products" }, { label: "Sensors" }]}
      >
        {/* Categories Grid Section */}
        <section className="sensors-categories-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2>Sensor Categories for Every Application</h2>
              <p>Comprehensive solutions for industrial measurement and control</p>
            </div>

            <div className="sensors-grid">
              {categories.map((category, index) => (
                <div key={category.id} className="sensor-category-card animate-on-scroll">
                  {category.image && (
                    <div className="category-image">
                      <img src={category.image} alt={category.title} />
                    </div>
                  )}
                  {category.icon && <div className="category-icon">{category.icon}</div>}
                  <h3>{category.title}</h3>
                  {category.description && <p className="category-description">{category.description}</p>}

                  {category.models && category.models.length > 0 && (
                    <div className="category-models">
                      <h4>Features</h4>
                      <ul>
                        {category.models.map((model, idx) => (
                          <li key={idx}>{model}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="card-accent"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Highlight */}
        <section className="sensors-features-section">
          <div className="container">
            <div className="features-content">
              <div className="features-left animate-on-scroll">
                <h2>Industry-Leading Sensor Technology</h2>
                <p className="lead">
                  Our sensor portfolio covers all major measurement types with precision, reliability, and ease of integration into any industrial automation system.
                </p>

                <div className="highlights-list">
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <div>
                      <h4>High Accuracy</h4>
                      <p>±0.5% to ±1% measurement accuracy across full range</p>
                    </div>
                  </div>

                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <div>
                      <h4>Wide Temperature Range</h4>
                      <p>Operating from -40°C to +125°C for harsh environments</p>
                    </div>
                  </div>

                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <div>
                      <h4>Industrial Connectivity</h4>
                      <p>4-20mA, 0-10V, Modbus, Profbus, and wireless options</p>
                    </div>
                  </div>

                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <div>
                      <h4>Rugged Design</h4>
                      <p>IP67/IP68 rated for machine tool, washdown, and outdoor applications</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="features-right animate-on-scroll">
                <div className="feature-image">
                  <img src="/images/BLE.webp" alt="Industrial Sensor Technology" />
                  <div className="image-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </PageLayout>
    </>
  );
}
