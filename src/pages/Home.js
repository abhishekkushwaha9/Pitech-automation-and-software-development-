import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./home.css";

/* ── Data ── */
const SLIDES = [
  '/images/home-herO.png',
  '/images/download (1).jpg',
  '/images/1759499868874.jpg',
  '/images/1748323766560.jpg',
];

const HERO_SOLUTIONS = [
  { icon: '🏭', name: 'Digitalization', desc: 'End-to-end factory digitalization', path: '/industry/digitalization', bg: 'rgba(37,99,235,0.2)' },
  { icon: '📊', name: 'Production Dashboard', desc: 'Real-time KPI visibility', path: '/industry/production-dashboard', bg: 'rgba(16,185,129,0.2)' },
  { icon: '⚡', name: 'Predictive Maintenance', desc: 'AI-driven downtime prevention', path: '/industry/predictive-maintenance', bg: 'rgba(245,158,11,0.2)' },
  { icon: '🔗', name: 'IIoT Platform', desc: 'Connected machine ecosystem', path: '/industry/iiot', bg: 'rgba(139,92,246,0.2)' },
];

const EXPERTISE = [
  {
    num: '01',
    title: 'Industrial Automation',
    desc: 'Transform manufacturing processes with cutting-edge PLC, SCADA, HMI, and IoT technologies to boost productivity and ensure seamless operations.',
    img: '/images/Traceability998.jpeg',
  },
  {
    num: '02',
    title: 'Custom Software Development',
    desc: 'Tailored .NET, C#, JavaScript, and SQL solutions for real-time monitoring, analytics, and enterprise-grade MES applications.',
    img: '/images/custom software.jpeg',
  },
  {
    num: '03',
    title: 'Special Purpose Machines',
    desc: 'Custom-designed SPMs, leak testing systems, press machines, and assembly lines to solve unique manufacturing challenges.',
    img: '/images/SPM home.jpeg',
  },
  {
    num: '04',
    title: 'Industrial Equipment',
    desc: 'Premium sensors, PLCs, HMIs, drives, RFID, and BLE tags — everything needed for effective Industry 4.0 implementation.',
    img: '/images/industrial equipment .png',

  },
];

const SOLUTIONS = [
  { tag: 'Industry 4.0', title: 'Digitalization', desc: 'Streamline production workflows, enhance data-driven decisions, and improve product quality with end-to-end factory digitalization.', img: '/images/Digitilization.jpg', path: '/industry/digitalization' },
  { tag: 'Monitoring', title: 'Digital Andon System', desc: 'Visualize production status in real-time, reduce unplanned downtime, and enable rapid problem-solving with smart alert systems.', img: '/images/digital-andonnn.jpg', path: '/industry/digital-andon' },
  { tag: 'Analytics', title: 'Production Dashboard', desc: 'Gain real-time insights, view key performance metrics, and track production objectives with customizable data visualization.', img: '/images/production-dashboard.jpeg', path: '/industry/production-dashboard' },
  { tag: 'AI/ML', title: 'Predictive Maintenance', desc: 'Leverage AI and sensor data to predict equipment failures before they occur, minimizing downtime and maintenance costs.', img: '/images/Predictive maintenance.png', path: '/industry/predictive-maintenance' },
  { tag: 'Automation', title: 'Traceability SCADA', desc: 'Monitor and track production data in real time using SCADA systems. Ensure complete traceability, improve quality control, and optimize industrial automation processes.', img: '/images/scada_new.jpg', path: '/solutions/automation/traceability-scada' },
  { tag: 'Traceability', title: 'OEE Dashboard', desc: 'Track Overall Equipment Effectiveness through an interactive dashboard that provides real-time insights into availability, performance, and quality metrics using automated data collection.', img: '/images/OEE_DASHBOARD.png', path: '/industry/oee' },
];

const INDUSTRIES = [
  {
    title: 'Automotive',
    desc: 'Assembly lines, traceability, and robotics for automotive OEMs.',
    img: '/images/Automotive.gif',
    path: '/industry-4/automotive-industry'
  },
  {
    title: 'Metal & Steel',
    desc: 'Molten metal tracking, quality control, and energy monitoring.',
    img: '/images/METAL_gif.gif',
    path: '/industry-4/metal-industry'
  },
  {
    title: 'Glass Manufacturing',
    desc: 'Process automation, defect detection, and production analytics.',
    img: '/images/glass.webp',
    path: '/industry-4/glass-industry'
  },
  {
    title: 'Material Handling',
    desc: 'Conveyor systems, robotics integration, and WMS solutions.',
    img: '/images/Assembly line.avif',
    path: '/industry-4/material-handling'
  },
  {
    title: 'Food & Beverages',
    desc: 'Automated production, packaging, and sorting for the food industry.',
    img: '/images/Food and beverage.jpg',
    path: '/industries/food-beverages'
  },
  {
    title: 'Pharma Industry',
    desc: 'High-precision automation ensuring strict compliance and traceability.',
    img: '/images/pharma.png',
    path: '/industries/pharma'
  },
  {
    title: 'Home Appliances',
    desc: 'Smart assembly lines for high-volume consumer goods manufacturing.',
    img: '/images/home_appliances.jpg',
    path: '/industries/home-appliances'
  },
  {
    title: 'EV Manufacturing',
    desc: 'Accelerating EV production with battery and powertrain automation.',
    img: '/images/EV.png',
    path: '/industries/ev-manufacturing'
  },
  {
    title: 'E-Commerce / Warehouse',
    desc: 'Intelligent sorting and fulfillment solutions for modern logistics.',
    img: '/images/E_commerce.jpg',
    path: '/industries/ecommerce'
  },
];

const PROCESS = [
  { num: '01', title: 'Requirement Analysis', desc: 'Deep-dive into your production challenges and define measurable goals.' },
  { num: '02', title: 'Solution Design', desc: 'Architect the optimal technology stack and custom roadmap for your factory.' },
  { num: '03', title: 'Implementation', desc: 'Rapid deployment by certified engineers with minimal production disruption.' },
  { num: '04', title: 'Support & Scale', desc: 'Ongoing 24/7 support, training, and iterative enhancements.' },
];

const TESTIMONIALS = [
  { text: "PiTech's factory digitalization tools have revolutionized our quality control processes. The real-time monitoring of our production lines has led to a significant reduction in waste and improved overall efficiency.", name: "Mahesh Dhaka", role: "Plant Head, Saint Gobain", initials: "MD", color: "linear-gradient(135deg, #2a6b9e, #4fb5e0)" },
  { text: "The integration of PiTech's IIoT platform across our manufacturing systems has provided unprecedented visibility. We've seen a significant improvement in energy efficiency and data accuracy since implementation.", name: "Akshay Agrawal", role: "Operations Director, CMR", initials: "AA", color: "#7c3aed" },
  { text: "PiTech's automated assembly line solutions have significantly boosted our throughput. Their expertise in robotics and PLC programming ensured a seamless transition to our new production standards.", name: "Nippun Kumar", role: "Senior Manager - Production, Honda", initials: "NK", color: "#059669" },
  { text: "The custom MES solution provided by PiTech has streamlined our compliance reporting and batch tracking. Their understanding of complex manufacturing workflows is truly world-class.", name: "Sanjay Yadav", role: "GM Manufacturing, Johnson Matthey", initials: "SY", color: "linear-gradient(135deg, #f59e0b, #d97706)" },
  { text: "Implementing PiTech’s smart manufacturing solution improved our production visibility and reduced downtime significantly. Their team understands the nuances of industrial automation perfectly.", name: "Manish Sehgal", role: "Technical Lead, PV", initials: "MS", color: "#e11d48" },
];

const ALL_CLIENTS = [
  { company: 'Saint Gobain', logo: '/images/saint goobin.png', contact: 'Mahesh Dhaka' },
  { company: 'Green fuel', logo: '/images/green fuel.png', contact: 'Industrial Partner' },
  { company: 'CMR', logo: '/images/CMR_logo.png', contact: 'Akshay Agrawal' },
  { company: 'Hi-Tech', logo: '/images/Hi-Tech.png', contact: 'Automation Partner' },
  { company: 'Honda', logo: '/images/honda.png', contact: 'Nippun Kumar' },
  { company: 'Johnson Matthey', logo: '/images/johnson-matthey.png', contact: 'Sanjay Yadav' },
  { company: 'JSW', logo: '/images/jsw.png', contact: 'Strategic Partner' },
  { company: 'Lenskart', logo: '/images/lenskart.avif', contact: 'Manufacturing Partner' },
  { company: 'PV', logo: '/images/PV.png', contact: 'Manish Sehgal' },
  { company: 'Panasonic', logo: '/images/parasonic.png', contact: 'Industrial Partner' },
  { company: 'Ahresty', logo: '/images/ahresty.jpg', contact: 'Industrial Partner' },
  { company: 'Spiro', logo: '/images/spiro.jpeg', contact: 'Industrial Partner' },
  { company: 'SQT', logo: '/images/SQT.png', contact: 'Industrial Partner' },
  { company: 'SKH ', logo: '/images/skh-grp.png', contact: 'Industrial Partner' },
  { company: 'Somic ZF', logo: '/images/somic_zf.png', contact: 'Industrial Partner' },
  { company: 'Pranav Vikas', logo: '/images/pranav%20vikas.png', contact: 'Industrial Partner' },
  { company: 'Havells', logo: '/images/haveels.png', contact: 'Industrial Partner' },
  { company: 'Exide', logo: '/images/exide.png', contact: 'Industrial Partner' },
  { company: 'Bharat Seats Limited', logo: '/images/bharat%20seats%20limited.png', contact: 'Industrial Partner' },
  { company: 'India Nippon', logo: '/images/india%20nippon.jpg', contact: 'Industrial Partner' },
  { company: 'Sun N Shade', logo: '/images/sun%20n%20shade.jpg', contact: 'Industrial Partner' },
  { company: 'PMI', logo: '/images/PMI.webp', contact: 'Industrial Partner' },
  { company: 'A2Z Fil', logo: '/images/a2z-fil.png', contact: 'Industrial Partner' },
];

/* ── Intersection Observer Hook ── */
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  useScrollAnimation();

  const nextSlide = useCallback(() => setSlide(s => (s + 1) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(nextSlide, 4000);
    return () => clearInterval(t);
  }, [nextSlide]);

  return (
    <>
      {/* ════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section className="hero">
        {/* Slideshow */}
        <div className="hero-slides">
          {SLIDES.map((src, i) => (
            <div key={i} className={`hero-slide${i === slide ? ' active' : ''}`}
              style={{ backgroundImage: `url('${src}')` }} />
          ))}
        </div>
        <div className="hero-overlay" />

        {/* Content */}
        <div className="hero-content">
          <div className="hero-text animate-on-scroll">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              India's Leading Industry 4.0 Partner
            </div>
            <h1 className="hero-title">
              Transforming Indian
              <span className="hero-title-accent">Manufacturing</span>
              with Smart Automation
            </h1>
            <p className="hero-desc">
              Empowering MSMEs and large manufacturers with cutting-edge IIoT, automation,
              and digitalization technologies — from factory floor to boardroom.
            </p>
            <div className="hero-btns">
              <Link to="/services" className="hero-btn-primary">Explore Solutions →</Link>
              <Link to="/contact" className="hero-btn-secondary">Get a Free Consultation</Link>
            </div>

          </div>

          {/* Floating Solutions Card */}
          <div className="hero-card animate-on-scroll">
            <div className="hero-card-title">Quick Access</div>
            {HERO_SOLUTIONS.map(s => (
              <Link key={s.path} to={s.path} className="hero-card-item">
                <div className="hero-card-icon" style={{ background: s.bg }}>{s.icon}</div>
                <div className="hero-card-item-text">
                  <div className="hero-card-item-name">{s.name}</div>
                  <div className="hero-card-item-desc">{s.desc}</div>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="hero-indicators">
          {SLIDES.map((_, i) => (
            <button key={i} className={`hero-indicator${i === slide ? ' active' : ''}`}
              onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STATS BAND
      ════════════════════════════════════════════ */}
      <div className="stats-band">
        <div className="stats-band-inner">
          {[
            { num: '120+', label: 'Projects Delivered' },
            { num: '80+', label: 'Enterprise Clients' },
            { num: '5+', label: 'Years of Excellence' },
            { num: '99%', label: 'Client Satisfaction' },
          ].map(s => (
            <div key={s.label} className="stats-band-item">
              <div className="stats-band-num">{s.num}</div>
              <div className="stats-band-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════════ */}
      <section className="home-about">
        <div className="home-about-inner">
          <div className="home-about-images animate-on-scroll">
            <div className="home-about-img-main">
              <img src="/images/1759499868874.jpg" alt="Pi Tech Factory" />
            </div>
            <div className="home-about-img-float">
              <img src="/images/1763185884948.jpg" alt="Team at Work" />
            </div>
            <div className="home-about-badge">
              <div className="home-about-badge-num">5+</div>
              <div className="home-about-badge-text">Years of Excellence</div>
            </div>
          </div>

          <div className="home-about-text animate-on-scroll">
            <span className="section-tag">About PiTech Automation</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '16px', marginTop: '12px' }}>
              Leading India's<br />
              <span style={{
                background: 'linear-gradient(135deg, #2a6b9e, #4fb5e0)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Manufacturing Revolution</span>
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '8px' }}>
              PiTech Automation & Software Solutions brings world-class Industry 4.0
              technologies to Indian MSMEs and large manufacturers. Our skilled team
              of engineers and developers helps you harness the power of IIoT,
              digitalization, and smart automation.
            </p>
            <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', lineHeight: 1.8 }}>
              From PLC programming to full factory digitalization, we deliver end-to-end
              solutions that improve efficiency, reduce costs, and keep you ahead of the curve.
            </p>

            <div className="home-about-features">
              {[
                { icon: '🔧', name: 'Industrial Automation', desc: 'PLC, SCADA, HMI solutions' },
                { icon: '💻', name: 'Software Development', desc: 'Custom MES & analytics' },
                { icon: '🤖', name: 'Robotics Integration', desc: 'Pick, place & inspection' },
                { icon: '📡', name: 'IIoT Connectivity', desc: 'Machine-to-cloud platforms' },
                { icon: '🔬', name: 'Smart Sensing Solution', desc: 'Intelligent sensors for real-time monitoring, data collection, and predictive insights' },
              ].map(f => (
                <div key={f.name} className="home-about-feature">
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <div>
                    <div className="feature-text-name">{f.name}</div>
                    <div className="feature-text-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="home-about-link">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CORE EXPERTISE
      ════════════════════════════════════════════ */}
      <section className="expertise">
        <div className="expertise-inner">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">What We Do Best</span>
            <h2>Our Core Expertise</h2>
            <p>Four pillars of excellence that drive manufacturing transformation across India.</p>
          </div>
          <div className="expertise-slider-wrapper animate-on-scroll" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={800}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1280: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="expertise-swiper"
            >
              {EXPERTISE.map((e, i) => (
                <SwiperSlide key={i} style={{ height: 'auto' }}>
                  <div className="expertise-card" style={{ height: '100%', margin: '0' }}>
                    <div className="expertise-card-img">
                      <img src={e.img} alt={e.title} />
                    </div>
                    <div className="expertise-card-body">
                      <div className="expertise-num">{e.num}</div>
                      <h4>{e.title}</h4>
                      <p>{e.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          LIVE IOT PLATFORM
      ════════════════════════════════════════════ */}
      <section className="live-iot-section">
        <div className="live-iot-inner">
          <div className="live-iot-card animate-on-scroll">
            <div className="live-iot-content">
              <span className="section-tag" style={{ border: '2px solid #10b981', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)' }}>Interactive Demo</span>
              <h2>Live IoT Platform</h2>
              <p>Experience our real-time IoT platform designed for smart monitoring, real-time analytics, and efficient industrial automation.</p>
              <a href="https://pitechiotdashboard.runasp.net/" target="_blank" rel="noreferrer" className="live-iot-btn">Explore Live Platform →</a>
            </div>
            <div className="live-iot-image-wrapper">
              <div className="live-iot-parallax-bg" style={{ backgroundImage: "url('/images/Live IoT Platform.png')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SOLUTIONS
      ════════════════════════════════════════════ */}
      <section className="solutions">
        <div className="solutions-inner">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Industry 4.0 Solutions</span>
            <h2>Tailored for Indian Enterprises</h2>
            <p>Comprehensive solutions that digitalize your factory floor and connect every machine.</p>
          </div>
          <div className="solutions-grid">
            {SOLUTIONS.map((s, i) => (
              <Link key={i} to={s.path} className="solution-card animate-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="solution-card-img">
                  <img src={s.img} alt={s.title}
                    onError={e => { e.target.src = '/images/connected-machines.jpg'; }} />
                  <div className="solution-card-overlay">
                    <p>{s.desc}</p>
                    <span className="solution-card-view-btn">View Details</span>
                  </div>
                </div>
                <div className="solution-card-body">
                  <span className="solution-card-tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p className="solution-card-short-desc">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          INDUSTRIES
      ════════════════════════════════════════════ */}
      <section className="industries">
        <div className="industries-inner">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Industries We Serve</span>
            <h2>Built for Every Sector</h2>
            <p>Deep domain expertise across high-growth manufacturing sectors.</p>
          </div>
          <div className="industries-slider-wrapper animate-on-scroll">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              speed={800}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="industries-swiper"
            >
              {INDUSTRIES.map((ind, i) => (
                <SwiperSlide key={i} style={{ height: 'auto' }}>
                  <div className="industry-card" style={{ height: '100%', margin: '0' }}>
                    <div className="industry-card-img">
                      <img src={ind.img} alt={ind.title}
                        onError={e => { e.target.src = '/images/connected-machines.jpg'; }} />
                    </div>
                    <div className="industry-card-overlay" />
                    <div className="industry-card-body">
                      <h3>{ind.title}</h3>
                      <p>{ind.desc}</p>
                      <Link to={ind.path} className="industry-card-link">Learn More →</Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HOW WE WORK
      ════════════════════════════════════════════ */}
      <section className="process">
        <div className="process-inner">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Process</span>
            <h2>How We Deliver Results</h2>
            <p>A proven 4-step methodology that ensures on-time delivery and lasting impact.</p>
          </div>
          <div className="process-steps">
            {PROCESS.map((p, i) => (
              <div key={i} className="process-step animate-on-scroll" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="process-step-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CLIENTS
      ════════════════════════════════════════════ */}
      <section className="clients">
        <div className="clients-inner">
          <div className="section-header animate-on-scroll" style={{ textAlign: 'center' }}>
            <span className="section-tag">Trusted By Industry Leaders</span>
            <h2 style={{ color: '#0f172a' }}>Strategic Partnerships</h2>
            <p>Collaborating with global giants to drive industrial excellence.</p>
          </div>
          <div className="clients-slider-wrapper animate-on-scroll" style={{ marginTop: '60px' }}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="clients-swiper"
            >
              {ALL_CLIENTS.map((client, idx) => (
                <SwiperSlide key={idx}>
                  <div className="client-contact-card">
                    <div className="client-logo-box">
                      <img src={client.logo} alt={client.company} onError={e => e.target.style.opacity = '0.5'} />
                    </div>
                    <div className="client-info">
                      <h4>{client.company}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════ */}
      <section className="testimonials">
        <div className="testimonials-inner">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Client Success</span>
            <h2>What Our Clients Say</h2>
            <p>Real results from real manufacturers across India.</p>
          </div>
          <div className="testimonials-slider-wrapper animate-on-scroll" style={{ paddingTop: '20px', paddingBottom: '30px', marginTop: '40px' }}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              speed={800}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="testimonials-swiper"
            >
              {TESTIMONIALS.map((t, i) => (
                <SwiperSlide key={i} style={{ height: 'auto' }}>
                  <div className="testimonial-card" style={{ height: '100%' }}>
                    <div className="testimonial-quote">"</div>
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar" style={{ background: t.color }}>{t.initials}</div>
                      <div>
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
