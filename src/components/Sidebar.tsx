import React from 'react';
import { AlertTriangle, Leaf } from 'lucide-react';

interface SidebarProps {
  healthScore: number;
  healthyPlantsCount: number;
  affectedPlantsCount: number;
  predictedHarvestDays: number;
  tempC: number;
  humidityPct: number;
  co2Ppm: number;
  lightIntensity: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  healthScore = 96,
  healthyPlantsCount = 148,
  affectedPlantsCount = 12,
  predictedHarvestDays = 19,
  tempC = 24.1,
  humidityPct = 58,
  co2Ppm = 1100,
  lightIntensity = 950
}) => {
  return (
    <aside className="sidebar">
      {/* 1. PLANT HEALTH SUMMARY */}
      <div className="side-card">
        <div className="side-card-header">
          <span>PLANT HEALTH SUMMARY</span>
        </div>

        <div className="gauge-container">
          {/* Custom SVG Arc Gauge matching design */}
          <svg width="180" height="100" viewBox="0 0 180 100">
            <path
              d="M 20,90 A 70,70 0 0,1 160,90"
              fill="none"
              stroke="#1e293b"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 20,90 A 70,70 0 0,1 160,90"
              fill="none"
              stroke="#10b981"
              strokeWidth="12"
              strokeDasharray="220"
              strokeDashoffset={220 - (220 * (healthScore / 100))}
              strokeLinecap="round"
            />
          </svg>
          <div style={{ position: 'absolute', bottom: '5px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700 }}>HEALTH SCORE:</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
              <span className="health-score-val">{healthScore}</span>
              <span className="health-score-denom">/100</span>
            </div>
          </div>
        </div>

        <div className="summary-stats">
          <div className="stat-item">
            <div className="stat-bar-green" />
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Healthy Plants</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>{healthyPlantsCount}</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-bar-amber" />
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Affected Plants</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>{affectedPlantsCount}</div>
            </div>
          </div>
        </div>

        <div className="status-badge-text">
          Current Batch Status: <span className="status-badge-val">EXCELLENT</span>
        </div>
      </div>

      {/* 2. TRICHOME MATURITY */}
      <div className="side-card">
        <div className="side-card-header">
          <span>TRICHOME MATURITY</span>
          <Leaf size={14} color="#10b981" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
          {/* Custom SVG Donut Chart matching design */}
          <svg width="100" height="100" viewBox="0 0 100 100">
            {/* 74% Milky */}
            <circle cx="50" cy="50" r="35" fill="none" stroke="#a7f3d0" strokeWidth="18" strokeDasharray="162 220" strokeDashoffset="0" />
            {/* 19% Amber */}
            <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="18" strokeDasharray="41 220" strokeDashoffset="-162" />
            {/* 7% Clear */}
            <circle cx="50" cy="50" r="35" fill="none" stroke="#fef3c7" strokeWidth="18" strokeDasharray="17 220" strokeDashoffset="-203" />
          </svg>

          <div className="donut-legend">
            <div className="legend-row"><div className="dot-milky" /> <span>74% Milky</span></div>
            <div className="legend-row"><div className="dot-amber" /> <span>19% Amber</span></div>
            <div className="legend-row"><div className="dot-clear" /> <span>7% Clear</span></div>
          </div>
        </div>

        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
          Predicted Harvest: <strong style={{ color: '#ffffff' }}>Nov 14 ({predictedHarvestDays} days)</strong>
        </div>
      </div>

      {/* 3. PREDICTIVE 5-10 DAY WARNINGS */}
      <div className="side-card" style={{ borderColor: 'rgba(245, 158, 11, 0.4)' }}>
        <div className="side-card-header" style={{ color: '#f59e0b' }}>
          <span>PREDICTIVE 5-10 DAY WARNINGS</span>
          <AlertTriangle size={15} color="#ef4444" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem' }}>
          <div style={{ color: '#f3f4f6', background: 'rgba(255,255,255,0.03)', padding: '6px 8px', borderRadius: '4px' }}>
            Row 7 (Potential Spider Mites - 85% Prob.)
          </div>
          <div style={{ color: '#f3f4f6', background: 'rgba(255,255,255,0.03)', padding: '6px 8px', borderRadius: '4px' }}>
            Bay 2 (PM Risk: High - Hum. Spike)
          </div>
        </div>
      </div>

      {/* 4. ENVIRONMENTAL DATA */}
      <div className="side-card">
        <div className="side-card-header">
          <span>ENVIRONMENTAL DATA</span>
        </div>

        <div className="env-grid">
          <div className="env-item">
            <div className="env-label">Temp</div>
            <div className="env-val">{tempC}°C</div>
          </div>
          <div className="env-item">
            <div className="env-label">Humidity</div>
            <div className="env-val">{humidityPct}%</div>
          </div>
          <div className="env-item">
            <div className="env-label">CO2</div>
            <div className="env-val">{co2Ppm}ppm</div>
          </div>
          <div className="env-item">
            <div className="env-label">Light Intensity</div>
            <div className="env-val">{lightIntensity}µmol/m²/s</div>
          </div>
        </div>
      </div>
    </aside>
  );
};
