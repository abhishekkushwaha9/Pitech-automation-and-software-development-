import "./PageLayout.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function useScrollAnimate() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function PageLayout({ title, subtitle, tag, breadcrumb, heroImage, children }) {
  useScrollAnimate();

  return (
    <>
      {/* Hero */}
      <div className="inner-hero">
        {heroImage && (
          <div className="inner-hero-bg" style={{ backgroundImage: `url('${heroImage}')` }} />
        )}
        <div className="inner-hero-overlay" />
        <div className="inner-hero-content">
          {breadcrumb && (
            <div className="inner-hero-breadcrumb">
              <Link to="/">Home</Link>
              {breadcrumb.map((crumb, i) => (
                <span key={i} style={{ display: 'contents' }}>
                  <span>›</span>
                  {crumb.path ? <Link to={crumb.path}>{crumb.label}</Link> : <span style={{ color: 'rgba(255,255,255,0.9)' }}>{crumb.label}</span>}
                </span>
              ))}
            </div>
          )}
          {tag && <span className="inner-hero-tag">{tag}</span>}
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="inner-hero-wave">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50 L0 25 Q360 0 720 25 Q1080 50 1440 25 L1440 50 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Body */}
      {children}
    </>
  );
}
