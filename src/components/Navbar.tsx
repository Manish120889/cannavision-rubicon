import React from 'react';
import { Eye, Activity, Cpu, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: 'inspector' | 'predictive' | 'plugins' | 'architecture';
  setActiveTab: (tab: 'inspector' | 'predictive' | 'plugins' | 'architecture') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="header">
      <div className="logo-group">
        <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '8px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
          <Cpu className="logo-icon" style={{ color: '#10b981' }} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <h1 className="header-title">CannaVision AI</h1>
            <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.4)', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
              RUBICON ORGANICS EDITION
            </span>
          </div>
          <p className="header-subtitle">
            Pacifica Facility (Delta, BC) • FVOPA Organic & GACP Certified Inspection Engine
          </p>
        </div>
      </div>

      <nav className="nav-tabs">
        <button
          className={`nav-tab ${activeTab === 'inspector' ? 'active' : ''}`}
          onClick={() => setActiveTab('inspector')}
        >
          <Eye size={16} /> Live Visual Inspection
        </button>
        <button
          className={`nav-tab ${activeTab === 'predictive' ? 'active' : ''}`}
          onClick={() => setActiveTab('predictive')}
        >
          <Sparkles size={16} /> Predictive Warnings (5-10 Days)
        </button>
        <button
          className={`nav-tab ${activeTab === 'plugins' ? 'active' : ''}`}
          onClick={() => setActiveTab('plugins')}
        >
          <Cpu size={16} /> Open Plugin Architecture
        </button>
        <button
          className={`nav-tab ${activeTab === 'architecture' ? 'active' : ''}`}
          onClick={() => setActiveTab('architecture')}
        >
          <Activity size={16} /> Technical Architecture
        </button>
      </nav>
    </header>
  );
};
