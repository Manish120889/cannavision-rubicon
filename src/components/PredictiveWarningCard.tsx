import React from 'react';
import { Sparkles, AlertTriangle, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import type { RubiconPlantSample } from '../types';

interface PredictiveWarningCardProps {
  plant: RubiconPlantSample;
}

export const PredictiveWarningCard: React.FC<PredictiveWarningCardProps> = ({ plant }) => {
  return (
    <div className="card">
      <div className="card-title">
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#f59e0b' }}>
          <Sparkles size={18} /> Predictive Sub-Clinical Warning Engine
        </span>
        <span className="preset-badge badge-warning">
          5 - 10 Day Early Predictions
        </span>
      </div>

      {plant.predictiveWarnings.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '1.5rem 0', color: 'var(--text-muted)' }}>
          <ShieldCheck size={36} color="#10b981" style={{ margin: '0 auto 0.5rem auto' }} />
          <p style={{ fontWeight: 600, color: '#f3f4f6' }}>No Impending Sub-Clinical Risks Detected</p>
          <p style={{ fontSize: '0.8rem' }}>Plant canopy transpiration, leaf angle vectors, and living soil parameters are within optimal predictive curves.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {plant.predictiveWarnings.map((warn) => (
            <div
              key={warn.id}
              style={{
                background: '#090d16',
                border: '1px solid var(--bg-card-border)',
                borderLeft: '4px solid #f59e0b',
                borderRadius: '8px',
                padding: '0.9rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: '#f3f4f6', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <AlertTriangle size={15} color="#f59e0b" /> {warn.title}
                </h4>
                <span style={{ fontSize: '0.75rem', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  <Clock size={11} style={{ display: 'inline', marginRight: '3px' }} />
                  In {warn.timeframeDays} Days ({warn.probability}% Likelihood)
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                <strong style={{ color: '#94a3b8' }}>Sub-Clinical Symptom:</strong> {warn.subClinicalSymptom}
              </div>

              <div style={{ fontSize: '0.8rem', color: '#ef4444', marginBottom: '0.5rem' }}>
                <strong style={{ color: '#f87171' }}>Predicted Impact:</strong> {warn.predictedRisk}
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ArrowRight size={14} /> <span><strong>FVOPA Organic Action:</strong> {warn.preventativeAction}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
