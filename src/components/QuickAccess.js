import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

/**
 * DEFAULT_CARDS: The source of truth for all possible quick access items.
 * Each card has a unique 'id' and 'path'.
 */
const DEFAULT_CARDS = [
  { id: 'digitalization', icon: '🏭', name: 'Digitalization', desc: 'End-to-end factory digitalization', path: '/industry/digitalization', bg: 'rgba(37,99,235,0.2)' },
  { id: 'production-dashboard', icon: '📊', name: 'Production Dashboard', desc: 'Real-time KPI visibility', path: '/industry/production-dashboard', bg: 'rgba(16,185,129,0.2)' },
  { id: 'predictive-maintenance', icon: '⚡', name: 'Predictive Maintenance', desc: 'AI-driven downtime prevention', path: '/industry/predictive-maintenance', bg: 'rgba(245,158,11,0.2)' },
  { id: 'iiot', icon: '🔗', name: 'IIoT Platform', desc: 'Connected machine ecosystem', path: '/industry/iiot', bg: 'rgba(139,92,246,0.2)' },
  { id: 'energy-monitoring', icon: '🔋', name: 'Energy Monitoring', desc: 'Track and optimize power usage', path: '/industry/energy-monitoring', bg: 'rgba(16,185,129,0.2)' },
  { id: 'traceability-scada', icon: '🖥️', name: 'Traceability SCADA', desc: 'Supervisory control & data acquisition', path: '/solutions/automation/traceability-scada', bg: 'rgba(245,158,11,0.2)' },
  { id: 'plc-programming', icon: '⚙️', name: 'PLC Programming', desc: 'Advanced logic control systems', path: '/solutions/automation/plc', bg: 'rgba(37,99,235,0.2)' },
  { id: 'plc-products', icon: '🔩', name: 'PLC Products', desc: 'Industrial grade PLC hardware', path: '/products/plc', bg: 'rgba(37,99,235,0.2)' },
  { id: 'digital-andon', icon: '🔔', name: 'Digital Andon', desc: 'Visual signal tracking system', path: '/industry/digital-andon', bg: 'rgba(139,92,246,0.2)' },
  { id: 'sensor', icon: '📡', name: 'Smart Sensors', desc: 'Advanced industrial sensing', path: '/products/sensor', bg: 'rgba(239,68,68,0.2)' },
  { id: 'success', icon: '🏆', name: 'Success Stories', desc: 'Our proven transformations', path: '/about/success', bg: 'rgba(245,158,11,0.2)' },
  { id: 'leak-testing', icon: '💧', name: 'SPM Automation', desc: 'Precision leak detection systems', path: '/solutions/spm/leak-testing', bg: 'rgba(59,130,246,0.2)' },
  { id: 'assembly-line', icon: '🏗️', name: 'Assembly Lines', desc: 'Automated production flows', path: '/solutions/spm/assembly-line', bg: 'rgba(139,92,246,0.2)' },
  { id: 'automation-lines', icon: '🤖', name: 'Automation Lines', desc: 'Full-scale robotic systems', path: '/solutions/automation-lines', bg: 'rgba(16,185,129,0.2)' },
  { id: 'blogs', icon: '📝', name: 'Our Stories', desc: 'Latest insights and updates', path: '/blogs', bg: 'rgba(37,99,235,0.2)' },
  { id: 'oee', icon: '📈', name: 'OEE Dashboard', desc: 'Efficiency tracking systems', path: '/industry/oee', bg: 'rgba(239,68,68,0.2)' },
  { id: 'iot-gateway', icon: '📡', name: 'IoT Gateway', desc: 'Smart machine connectivity', path: '/products/iot-gateway', bg: 'rgba(59,130,246,0.2)' },
  { id: 'pharma', icon: '💊', name: 'Pharma Industry', desc: 'High-precision automation', path: '/industries/pharma', bg: 'rgba(16,185,129,0.2)' },
  { id: 'ev', icon: '🔋', name: 'EV Manufacturing', desc: 'Battery production solutions', path: '/industries/ev-manufacturing', bg: 'rgba(139,92,246,0.2)' },
  { id: 'food-beverage', icon: '🍱', name: 'Food & Beverage', desc: 'Automated processing lines', path: '/industries/food-beverages', bg: 'rgba(245,158,11,0.2)' },
  { id: 'metal-industry', icon: '🔩', name: 'Metal & Steel', desc: 'Industrial process control', path: '/industry-4/metal-industry', bg: 'rgba(107,114,128,0.2)' },
];

const STORAGE_KEY = 'pitech_clicks_v3';

// Path normalization helper
const normalizePath = (p) => {
  if (!p) return '';
  let path = p.toLowerCase();
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path;
};

export default function QuickAccess() {
  const [cards, setCards] = useState([]);
  
  // Helper to get sorted cards from current clicks
  const getSortedCards = useCallback((clickData) => {
    // We normalize incoming click data keys just in case
    const normalizedData = {};
    Object.keys(clickData).forEach(k => {
      normalizedData[normalizePath(k)] = clickData[k];
    });

    return [...DEFAULT_CARDS]
      .sort((a, b) => {
        const pathA = normalizePath(a.path);
        const pathB = normalizePath(b.path);
        const countA = normalizedData[pathA] || 0;
        const countB = normalizedData[pathB] || 0;
        
        // Primary sort: Click frequency (Highest first)
        if (countB !== countA) return countB - countA;
        
        // Secondary sort: Stability (Use DEFAULT_CARDS index)
        return DEFAULT_CARDS.indexOf(a) - DEFAULT_CARDS.indexOf(b);
      })
      .slice(0, 4);
  }, []);

  // Initial load
  useEffect(() => {
    const s = localStorage.getItem(STORAGE_KEY);
    const clickData = s ? JSON.parse(s) : {};
    const sorted = getSortedCards(clickData);
    setCards(sorted);
    console.log("[QuickAccess] Initialized cards from localStorage");
  }, [getSortedCards]);

  /**
   * handleCardClick:
   * 1. Updates localStorage immediately.
   * 2. Re-sorts using the original DEFAULT_CARDS.
   * 3. Updates 'cards' state instantly for real-time UI response.
   */
  const handleCardClick = (path) => {
    const normalized = normalizePath(path);
    console.log(`[QuickAccess] Click detected for: ${normalized}`);
    
    try {
      // 1. Get latest clicks from storage to avoid stale state
      const s = localStorage.getItem(STORAGE_KEY);
      const currentClicks = s ? JSON.parse(s) : {};
      
      // 2. Increment count (using normalized path)
      const updatedClicks = {
        ...currentClicks,
        [normalized]: (currentClicks[normalized] || 0) + 1
      };
      
      // 3. Save back to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedClicks));
      
      // 4. Immediately re-sort from DEFAULT_CARDS
      const newSorted = getSortedCards(updatedClicks);
      
      // 5. Update state instantly
      setCards(newSorted);
      
      console.log(`[QuickAccess] UI Updated. New Top Card: ${newSorted[0]?.name}`);
    } catch (err) {
      console.error("[QuickAccess] Error in handleCardClick:", err);
    }
  };

  // Sync logic for external changes (like navigation tracker)
  useEffect(() => {
    const sync = () => {
      try {
        const s = localStorage.getItem(STORAGE_KEY);
        const latestClicks = s ? JSON.parse(s) : {};
        const freshSorted = getSortedCards(latestClicks);
        
        // Only update state if order has actually changed to prevent loops/flicker
        setCards(prev => {
          const isSame = prev.length === freshSorted.length && 
                         prev.every((c, i) => normalizePath(c.path) === normalizePath(freshSorted[i].path));
          return isSame ? prev : freshSorted;
        });
      } catch (err) {}
    };

    const interval = setInterval(sync, 1000);
    window.addEventListener('storage', sync);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', sync);
    };
  }, [getSortedCards]);

  return (
    <div className="hero-card animate-on-scroll">
      <div className="hero-card-title">Quick Access</div>
      {cards.map((s) => (
        <Link 
          key={s.id} 
          to={s.path} 
          className="hero-card-item visible"
          onClick={() => handleCardClick(s.path)}
        >
          <div className="hero-card-icon" style={{ background: s.bg }}>{s.icon}</div>
          <div className="hero-card-item-text">
            <div className="hero-card-item-name">{s.name}</div>
            <div className="hero-card-item-desc">{s.desc}</div>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>›</span>
        </Link>
      ))}
    </div>
  );
}



