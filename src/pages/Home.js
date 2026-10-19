import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./home.css";
import QuickAccess from "../components/QuickAccess";
import TypewriterText from "../components/TypewriterText";
import WordRevealText from "../components/WordRevealText";

/* ── Animated Counter on Scroll ── */
function AnimatedCounter({ end, suffix = '', duration = 1800, start = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let frameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);

  return <>{start ? count : 0}{suffix}</>;
}

/* ── Data ── */
const SLIDES = [
  { type: 'video', src: '/videos/Welcome_to_Pitech_Automation_.mp4' },
  { type: 'video', src: '/videos/Welcome_to_Pitech_Automation_.mp4' },
  { type: 'image', src: '/images/1759499868874.jpg' },
  { type: 'video', src: '/videos/Welcome_to_Pitech_Automation_.mp4' },
];


const EXPERTISE = [
  {
    num: '01',
    title: 'Industrial Automation Systems',
    desc: 'Transform manufacturing processes with cutting-edge PLC, SCADA, HMI, and IoT technologies to boost productivity and ensure seamless operations.',
    img: '/images/scada_kiosk_monitor.jpg',
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
    img: '/images/spm_rotary_machine.jpg',
  },
  {
    num: '04',
    title: 'Industrial Equipment',
    desc: 'Premium sensors, PLCs, HMIs, drives, RFID, and BLE tags — everything needed for effective Industry 4.0 implementation.',
    img: '/images/plc_new.png',

  },
];

const SOLUTIONS = [
  { tag: 'Industry 4.0', title: 'Digitalization', desc: 'Streamline production workflows, enhance data-driven decisions, and improve product quality with end-to-end factory digitalization.', img: '/images/digitalization    .png', path: '/industry/digitalization' },
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
  { company: 'Bellsonica', logo: '/images/bellsonica.png', contact: 'Industrial Partner' },
  { company: 'Tokai Rika', logo: '/trmn.png', contact: 'Industrial Partner' },
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
  const [statsVisible, setStatsVisible] = useState(false);
  const [phoneFlipped, setPhoneFlipped] = useState(false);
  const statsRef = useRef(null);
  const iotSectionRef = useRef(null);
  useScrollAnimation();

  const nextSlide = useCallback(() => setSlide(s => (s + 1) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(nextSlide, 3000);
    return () => clearInterval(t);
  }, [nextSlide]);

  useEffect(() => {
    const elem = statsRef.current;
    if (!elem) return;

    const checkVisibility = () => {
      const rect = elem.getBoundingClientRect();
      const inView = rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 60 && rect.bottom >= 0;
      if (inView) {
        setStatsVisible(true);
        return true;
      }
      return false;
    };

    if (checkVisibility()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '60px 0px' }
    );

    observer.observe(elem);

    const fallbackTimer = setTimeout(() => {
      setStatsVisible(true);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    const elem = iotSectionRef.current;
    if (!elem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPhoneFlipped(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(elem);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section className="hero">
        {/* Slideshow */}
        <div className="hero-slides">
          {SLIDES.map((item, i) => (
            <div
              key={i}
              className={`hero-slide${i === slide ? ' active' : ''}`}
              style={item.type === 'image' ? { backgroundImage: `url('${item.src}')` } : {}}
            >
              {item.type === 'video' && (
                <video
                  className="hero-slide-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.defaultMuted = true;
                    }
                  }}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
        <div className="hero-overlay" />

        {/* Top Right Watermark Text */}
        <div className="hero-watermark">
          <span>SMART</span>
          <span>FACTORY</span>
          <span>BRIGHTER</span>
          <span>TOMORROW</span>
        </div>

        {/* Content */}
        <div className="hero-content">
          <div className="hero-text animate-on-scroll">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              INDIA'S LEADING INDUSTRY 4.0 PARTNER
            </div>
            <h1 className="hero-title">
              <span className="hero-title-main">
                <TypewriterText text="Empowering Manufacturing" speed={30} delay={150} />
              </span>
              <span className="hero-title-sub">
                <span className="hero-title-with">
                  <TypewriterText text="with " speed={30} delay={950} />
                </span>
                <span className="hero-title-accent">
                  <TypewriterText text="Industry 4.0 & Industrial Automation in Manesar" speed={22} delay={1150} />
                </span>
              </span>
            </h1>
            <p className="hero-desc" style={{ color: '#cbd5e1' }}>
              Empowering MSMEs and large manufacturers with cutting-edge IIoT, automation,
              and digitalization technologies — from factory floor to boardroom.
            </p>
            <div className="hero-btns">
              <Link to="/services" className="hero-btn-primary">Explore Solutions →</Link>
              <Link to="/contact" className="hero-btn-secondary">Get a Free Consultation</Link>
            </div>

          </div>

          {/* Floating Solutions Card */}
          <QuickAccess />
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
      <div className="stats-band" ref={statsRef}>
        <div className="stats-band-inner">
          {[
            {
              target: 120,
              suffix: '+',
              label: 'Projects Delivered',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
                  <polyline points="10 12 11.5 13.5 14.5 10.5" strokeWidth="2.2" />
                </svg>
              )
            },
            {
              target: 80,
              suffix: '+',
              label: 'Enterprise Clients',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M5 21V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v14" />
                  <path d="M12 21V11a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v10" />
                  <path d="M8 9h1M8 13h1M8 17h1M15 13h1M15 17h1" strokeWidth="2.2" />
                </svg>
              )
            },
            {
              target: 5,
              suffix: '+',
              label: 'Years of Excellence',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
                  <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
                  <path d="M6 3h12v7a6 6 0 0 1-12 0V3Z" />
                  <path d="M12 16v3" />
                  <path d="M8 21h8" />
                  <polygon points="12 6.5 12.8 8.2 14.6 8.4 13.3 9.7 13.6 11.5 12 10.6 10.4 11.5 10.7 9.7 9.4 8.4 11.2 8.2 12 6.5" fill="currentColor" stroke="none" />
                </svg>
              )
            },
            {
              target: 99,
              suffix: '%',
              label: 'Client Satisfaction',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" strokeWidth="2.4" />
                </svg>
              )
            },
          ].map((s, idx, arr) => (
            <React.Fragment key={s.label}>
              <div className="stats-band-item animate-on-scroll">
                <div className="stats-band-icon-badge">
                  <div className="stats-band-icon-inner">
                    {s.icon}
                  </div>
                </div>
                <div className="stats-band-num">
                  <AnimatedCounter end={s.target} suffix={s.suffix} start={statsVisible} />
                </div>
                <div className="stats-band-label">{s.label}</div>
              </div>
              {idx < arr.length - 1 && <div className="stats-band-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════════ */}
      <section className="home-about">
        <div className="home-about-inner">
          <div className="home-about-left animate-on-scroll slide-left">
            <div className="home-about-images">
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

            <div className="home-about-features">
              {[
                { icon: '🔧', name: 'Industrial Automation', desc: 'PLC, SCADA, HMI solutions' },
                { icon: '💻', name: 'Software Development', desc: 'Custom MES & analytics' },
                { icon: '🤖', name: 'Robotics Integration', desc: 'Pick, place & inspection' },
                { icon: '📡', name: 'IIoT Connectivity', desc: 'Machine-to-cloud platforms' },
                { icon: '📊', name: 'Smart Sensing Solution', desc: 'Intelligent sensors for real-time monitoring, data collection, and predictive insights', fullWidth: true },
              ].map(f => (
                <div key={f.name} className={`home-about-feature ${f.fullWidth ? 'feature-full' : ''}`}>
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <div>
                    <div className="feature-text-name">{f.name}</div>
                    <div className="feature-text-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="home-about-text animate-on-scroll slide-right">
            <span className="section-tag">ABOUT PITECH AUTOMATION</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '16px', marginTop: '12px' }}>
              <TypewriterText text="Innovative Solutions for" speed={30} /><br />
              <span style={{
                background: 'linear-gradient(135deg, #2a6b9e, #4fb5e0)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                <TypewriterText text="Smart Manufacturing" speed={35} delay={700} />
              </span>
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '12px', textAlign: 'justify' }}>
              Welcome to Pitech Automation, your trusted partner for <strong>industrial automation</strong> and <strong>Industry 4.0 solutions in Haryana</strong>. Located in the industrial hub of <strong>Manesar</strong>, we specialize in transforming traditional factories into smart manufacturing units. In today's competitive landscape, optimizing production processes is critical, and we deliver customized automation solutions tailored to the needs of manufacturing companies.
            </p>
            <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '12px', textAlign: 'justify' }}>
              As a leading <strong>automation company in Manesar</strong>, we provide comprehensive services ranging from machine automation to advanced IoT integration. Our team understands the unique challenges of the manufacturing sector. We offer end-to-end <strong>factory automation solutions</strong>, ensuring increased efficiency, reduced downtime, and enhanced productivity. Pitech Automation is the preferred <strong>automation service provider in Gurgaon</strong> and Manesar.
            </p>
            <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px', textAlign: 'justify' }}>
              In addition to hardware automation, we are a premier <strong>software development company for industries</strong>. Manufacturing facilities trust our <strong>industrial IT solutions</strong> to bring real-time data analytics and seamless connectivity to their shop floors. We bridge the gap between hardware and software through our innovative <strong>IoT solutions for factories</strong>. Partner with Pitech Automation today and step into the future of manufacturing with the best <strong>industrial software development</strong> and automation expertise in the region.
            </p>

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
          <div className="section-header animate-on-scroll expertise-header">
            <span className="section-tag">WHAT WE DO BEST</span>
            <h2 className="expertise-title">
              <WordRevealText text="Our Core Expertise" delay={100} stagger={160} />
            </h2>
            <div className="expertise-title-divider">
              <span className="divider-line left" />
              <span className="divider-dot small" />
              <span className="divider-dot main" />
              <span className="divider-dot small" />
              <span className="divider-line right" />
            </div>
            <p className="expertise-subtitle">
              Four pillars of excellence that drive manufacturing transformation across India.
            </p>
            <div className="expertise-chips">
              <div className="expertise-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="chip-icon">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
                </svg>
                <span>Automation</span>
              </div>
              <div className="expertise-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="chip-icon">
                  <path d="M4 19h4V9H4v10Zm6 0h4V3h-4v16Zm6 0h4v-6h-4v6Z" />
                </svg>
                <span>Industrial Software</span>
              </div>
              <div className="expertise-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="chip-icon">
                  <path d="M12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4.95-3.05a7 7 0 0 1 9.9 0l1.41-1.42a9 9 0 0 0-12.72 0l1.41 1.42Zm-2.83-2.83a11 11 0 0 1 15.56 0l1.41-1.41a13 13 0 0 0-18.38 0l1.41 1.41Z" />
                </svg>
                <span>IIoT</span>
              </div>
              <div className="expertise-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="chip-icon">
                  <path d="M22 19h-3.26l-3.64-7.27L16 11a3 3 0 0 0-3-3h-1.17A4.002 4.002 0 0 0 8 5H4v2h4a2 2 0 1 1 0 4H5v2h3a2 2 0 0 1 1.83 1.2l-3.32 3.32-.51.48H2v2h4l4.24-4.24 3.36 6.72A1 1 0 0 0 14.5 21H22v-2Z" />
                </svg>
                <span>Robotics</span>
              </div>
            </div>
          </div>
          <div className="expertise-slider-wrapper animate-on-scroll">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              speed={800}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 28 },
              }}
              className="expertise-swiper"
            >
              {EXPERTISE.map((e, i) => (
                <SwiperSlide key={i}>
                  <div className="expertise-card">
                    <div className="expertise-card-img">
                      <img src={e.img} alt={e.title} />
                    </div>
                    <div className="expertise-card-body">
                      <div className="expertise-num">{e.num}</div>
                      <h3>{e.title}</h3>
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
      <section className="live-iot-section" ref={iotSectionRef}>
        <div className="live-iot-inner">
          <div className="live-iot-card animate-on-scroll">
            <div className="live-iot-content">
              <span className="section-tag" style={{ border: '2px solid #10b981', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)' }}>Interactive Demo</span>
              <h2>
                <TypewriterText text="Live IoT Platform" speed={40} delay={100} />
              </h2>
              <p>Experience our real-time IoT platform designed for smart monitoring, real-time analytics, and efficient industrial automation.</p>
              <a href="https://pitechiotdashboard.runasp.net/" target="_blank" rel="noreferrer" className="live-iot-btn">Explore Live Platform →</a>
            </div>
            <div className="live-iot-image-wrapper">
              <div className="live-iot-stage">
                <div className="live-iot-monitor">
                  <div className="monitor-top-camera" />
                  <div className="monitor-screen-container">
                    <img
                      src="/images/Live IoT Platform.png"
                      alt="Live IoT Platform Dashboard"
                      className="monitor-screen-image"
                    />
                    <div className="monitor-glare" />
                  </div>
                  <div className="monitor-chin">
                    <span className="monitor-brand">PiTech</span>
                  </div>
                </div>
                <div className="monitor-stand-neck" />
                <div className="monitor-stand-base" />

                {/* Smartphone Device Mockup with 3D Flip Showcase */}
                <div className={`live-iot-phone ${phoneFlipped ? 'phone-flip-active' : ''}`}>
                  <div className="phone-flipper">
                    {/* Front Face: Screen & UI */}
                    <div className="phone-face phone-front">
                      <div className="phone-dynamic-island">
                        <span className="phone-camera-lens" />
                      </div>
                      <div className="phone-screen-container">
                        <div className="phone-status-bar">
                          <span className="phone-status-time">09:41</span>
                          <div className="phone-status-icons">
                            <span className="phone-icon-signal" />
                            <span className="phone-icon-battery" />
                          </div>
                        </div>
                        <div className="phone-app-content">
                          <div className="phone-app-badge-bar">
                            <span className="phone-live-dot" />
                            <span className="phone-app-title">Live IoT Mobile</span>
                          </div>
                          <img
                            src="/images/live-iot-mobile.png"
                            alt="Live IoT Platform Mobile Dashboard"
                            className="phone-screen-image"
                          />
                        </div>
                      </div>
                      <div className="phone-home-indicator" />
                    </div>

                    {/* Back Face: Matte Titanium Chassis & Camera Bump */}
                    <div className="phone-face phone-back">
                      <div className="phone-camera-module">
                        <div className="phone-lens-ring">
                          <span className="phone-lens-glass" />
                        </div>
                        <div className="phone-lens-ring">
                          <span className="phone-lens-glass" />
                        </div>
                        <div className="phone-lens-ring">
                          <span className="phone-lens-glass" />
                        </div>
                        <span className="phone-flash-led" />
                        <span className="phone-lidar-sensor" />
                      </div>
                      <div className="phone-back-branding">
                        <span className="phone-back-symbol">⬡</span>
                        <span className="phone-back-name">PITECH</span>
                        <span className="phone-back-sub">IoT 4.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SOLUTIONS
      ════════════════════════════════════════════ */}
      <section className="solutions">
        <div className="solutions-inner">
          <div className="section-header animate-on-scroll expertise-header">
            <span className="section-tag">INDUSTRY 4.0 SOLUTIONS</span>
            <h2 className="expertise-title">
              <span className="heading-kinetic-blur">Tailored for Indian Enterprises</span>
            </h2>
            <div className="expertise-title-divider">
              <span className="divider-line left" />
              <span className="divider-dot small" />
              <span className="divider-dot main" />
              <span className="divider-dot small" />
              <span className="divider-line right" />
            </div>
            <p className="expertise-subtitle">
              Comprehensive solutions that digitalize your factory floor and connect every machine.
            </p>
          </div>
          <div className="solutions-grid">
            {SOLUTIONS.map((s, i) => (
              <Link key={i} to={s.path} className="solution-card animate-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="solution-card-img">
                  <img src={s.img} alt={s.title}
                    onError={e => { e.target.src = '/images/connected-machines.jpg'; }} />
                  <div className="solution-card-overlay">
                    <p>{s.desc}</p>
                    <span className="solution-card-view-btn">View Details →</span>
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
            <h2>
              Built for <span>Every Sector</span>
            </h2>
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
          <div className="section-header animate-on-scroll expertise-header">
            <span className="section-tag">OUR PROCESS</span>
            <h2 className="expertise-title">
              <WordRevealText text="How We Deliver Results" delay={100} stagger={140} />
            </h2>
            <div className="expertise-title-divider">
              <span className="divider-line left" />
              <span className="divider-dot small" />
              <span className="divider-dot main" />
              <span className="divider-dot small" />
              <span className="divider-line right" />
            </div>
            <p className="expertise-subtitle">
              A proven 4-step methodology that ensures on-time delivery and lasting impact.
            </p>
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
          <div className="section-header animate-on-scroll expertise-header">
            <span className="section-tag">TRUSTED BY INDUSTRY LEADERS</span>
            <h2 className="expertise-title">
              <TypewriterText text="Strategic Partnerships" speed={35} delay={100} />
            </h2>
            <div className="expertise-title-divider">
              <span className="divider-line left" />
              <span className="divider-dot small" />
              <span className="divider-dot main" />
              <span className="divider-dot small" />
              <span className="divider-line right" />
            </div>
            <p className="expertise-subtitle">
              Collaborating with global giants to drive industrial excellence.
            </p>
          </div>
          <div className="clients-slider-wrapper animate-on-scroll">
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

    </>
  );
}
