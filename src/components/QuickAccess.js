import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './QuickAccess.css';

/**
 * 4 Canonical Quick Access Cards matching the user's reference image:
 * 1. Top: Digitalization (Cyan theme)
 * 2. Right: Our Stories (Royal Blue theme)
 * 3. Bottom: Digital Andon (Purple theme)
 * 4. Left: Success Stories (Amber theme)
 */
const ORBIT_CARDS = [
  {
    id: 'digitalization',
    position: 'top',
    theme: 'cyan',
    name: 'Digitalization',
    desc: 'Smart Factory 4.0',
    backBadge: 'Industry 4.0',
    backCta: 'Explore Solutions →',
    path: '/industry/digitalization',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="white">
        <path d="M3 21h12V11l-5 3.5V10.5L3 15v6zm3-4h3v2.5H6V17zm4.5 0h3v2.5h-3V17z" />
        <rect x="17" y="17" width="2.8" height="2.8" rx="0.5" />
        <rect x="21" y="17" width="2.8" height="2.8" rx="0.5" />
        <rect x="17" y="13" width="2.8" height="2.8" rx="0.5" />
        <rect x="21" y="13" width="2.8" height="2.8" rx="0.5" />
        <rect x="17" y="9" width="2.8" height="2.8" rx="0.5" />
        <rect x="21" y="9" width="2.8" height="2.8" rx="0.5" />
        <rect x="21" y="5" width="2.8" height="2.8" rx="0.5" />
      </svg>
    )
  },
  {
    id: 'blogs',
    position: 'right',
    theme: 'blue',
    name: 'Our Stories',
    desc: 'Latest Insights',
    backBadge: 'Case Studies',
    backCta: 'Read Articles →',
    path: '/blogs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="4" width="15" height="20" rx="2" fill="#ffffff" />
        <line x1="8" y1="8" x2="16" y2="8" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="12" x2="16" y2="12" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="16" x2="13" y2="16" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <g transform="rotate(-45 16 19)">
          <rect x="13" y="14" width="5" height="12" rx="1" fill="#f97316" />
          <path d="M13 26l2.5 4 2.5-4h-5z" fill="#fde047" />
          <path d="M14.5 28.5l1 1.5 1-1.5h-2z" fill="#1e293b" />
        </g>
      </svg>
    )
  },
  {
    id: 'digital-andon',
    position: 'bottom',
    theme: 'purple',
    name: 'Digital Andon',
    desc: 'Visual Tracking',
    backBadge: 'Real-time Alerts',
    backCta: 'View System →',
    path: '/industry/digital-andon',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M12 2a2 2 0 0 0-2 2c0 .26.04.5.11.73C7.38 5.76 5 8.61 5 12.16V17l-2 2v1h18v-1l-2-2v-4.84c0-3.55-2.38-6.4-5.11-7.43.07-.23.11-.47.11-.73a2 2 0 0 0-2-2zm0 20a3 3 0 0 0 3-3h-6a3 3 0 0 0 3 3z" />
      </svg>
    )
  },
  {
    id: 'success',
    position: 'left',
    theme: 'amber',
    name: 'Success Stories',
    desc: 'Transformations',
    backBadge: 'Proven ROI',
    backCta: 'View Stories →',
    path: '/about/success',
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M8 5h12v7c0 3.3-2.7 6-6 6s-6-2.7-6-6V5z" fill="#ffeb3b" />
        <path d="M8 7H5c-1.1 0-2 .9-2 2v2c0 2.2 1.8 4 4 4h1V7zm12 0h3c1.1 0 2 .9 2 2v2c0 2.2-1.8 4-4 4h-1V7z" fill="#ffca28" />
        <path d="M12.5 18h3v3h-3z" fill="#ffa000" />
        <path d="M9 21h10l-1 4H10l-1-4z" fill="#6b21a8" />
        <path d="M11 23h6v1.5h-6z" fill="#fbbf24" />
      </svg>
    )
  }
];

const STORAGE_KEY = 'pitech_clicks_v3';

const normalizePath = (p) => {
  if (!p) return '';
  let path = p.toLowerCase();
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path;
};

export default function QuickAccess() {
  const [flippedIndex, setFlippedIndex] = useState(-1);

  // Gentle sequential micro-flip animation every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFlippedIndex((prev) => (prev + 1) % ORBIT_CARDS.length);
      // Reset flip after 2 seconds
      setTimeout(() => {
        setFlippedIndex(-1);
      }, 2000);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleCardClick = (path) => {
    const normalized = normalizePath(path);
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      const currentClicks = s ? JSON.parse(s) : {};
      const updatedClicks = {
        ...currentClicks,
        [normalized]: (currentClicks[normalized] || 0) + 1
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedClicks));
    } catch (err) {
      console.error('[QuickAccess] Error in handleCardClick:', err);
    }
  };

  return (
    <div className="quick-access-wrapper animate-on-scroll">
      {/* Header */}
      <div className="qa-header">
        <h2 className="qa-title">
          <span className="qa-title-quick">QUICK </span>
          <span className="qa-title-access">ACCESS</span>
        </h2>
        <p className="qa-subtitle">Faster access to what you need</p>
      </div>

      {/* Compact Orbital Arena */}
      <div className="qa-orbit-arena">
        {/* Center Glowing 3D Stage / Platform */}
        <div className="qa-center-stage">
          {/* Outer Orbit Track with Chevrons */}
          <div className="qa-orbit-outer">
            <span className="qa-chevron-left">«</span>
            <span className="qa-chevron-right">»</span>
          </div>

          {/* Inner Glowing Disc */}
          <div className="qa-orbit-inner" />

          {/* Center Brand Badge Platform */}
          <div className="qa-core-disc">
            <div className="qa-brand-badge">
              <span className="qa-brand-pi">Pi</span>
              <div className="qa-brand-text">
                <span className="qa-brand-tech">Tech</span>
                <span className="qa-brand-sub">Automation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Holographic Vertical Beam */}
        <div className="qa-vertical-beam" />

        {/* 4 Flipping 3D Orbital Cards */}
        {ORBIT_CARDS.map((card, idx) => {
          const isAutoFlipped = flippedIndex === idx;

          return (
            <Link
              key={card.id}
              to={card.path}
              className={`qa-flip-card qa-node-${card.position} ${isAutoFlipped ? 'is-flipped' : ''}`}
              onClick={() => handleCardClick(card.path)}
            >
              <div className="qa-flip-inner">
                {/* Front Face */}
                <div className="qa-flip-front">
                  <div className={`qa-tile qa-tile-${card.theme}`}>
                    <div className="qa-tile-gloss" />
                    <div className="qa-tile-icon">{card.icon}</div>
                  </div>
                  <div className="qa-info">
                    <span className="qa-info-title">{card.name}</span>
                    <span className="qa-info-desc">{card.desc}</span>
                  </div>
                </div>

                {/* Back Face (Flip) */}
                <div className={`qa-flip-back qa-back-${card.theme}`}>
                  <span className="qa-back-badge">{card.backBadge}</span>
                  <span className="qa-back-cta">{card.backCta}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
