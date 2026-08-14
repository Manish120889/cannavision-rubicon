import React from 'react';
import { Bug, Leaf, CheckCircle2 } from 'lucide-react';
import type { RubiconPlantSample } from '../types';

interface OrganicIPMCardProps {
  plant: RubiconPlantSample;
}

export const OrganicIPMCard: React.FC<OrganicIPMCardProps> = ({ plant }) => {
  return (
    <div className="card">
      <div className="card-title">
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981' }}>
          <Leaf size={18} /> FVOPA Certified Organic IPM & Remediation Protocol
        </span>
        <span className="preset-badge badge-good">
          Zero Synthetic Pesticides
        </span>
      </div>

      {plant.pathogens.length === 0 ? (
        <div style={{ padding: '0.75rem 0', color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle2 size={18} color="#10b981" /> No active pathogens or pest outbreaks detected on this canopy. Standard FVOPA organic living soil regimen active.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {plant.pathogens.map((pat) => (
            <div
              key={pat.id}
              style={{
                background: '#090d16',
                border: '1px solid var(--bg-card-border)',
                borderRadius: '8px',
                padding: '0.85rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: pat.severity === 'critical' ? '#ef4444' : '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Bug size={15} /> {pat.label}
                </span>
                <span className={`preset-badge badge-${pat.severity === 'critical' ? 'bad' : 'warning'}`}>
                  {pat.severity.toUpperCase()} ({Math.round(pat.confidence * 100)}%)
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#f3f4f6', marginTop: '0.4rem', background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
                <strong style={{ color: '#10b981' }}>FVOPA Living Soil Protocol:</strong> {pat.organicIPM}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
