import React from 'react';
import { Activity, Calendar, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import type { RubiconPlantSample } from '../types';
import { STAGES_DATA } from '../engine/stages';

interface StageQualityCardProps {
  plant: RubiconPlantSample;
}

export const StageQualityCard: React.FC<StageQualityCardProps> = ({ plant }) => {
  const stageInfo = STAGES_DATA[plant.stageId];

  return (
    <div>
      {/* Compliance Header Banner */}
      <div className={`status-banner status-${plant.healthStatus === 'OPTIMAL' ? 'good' : plant.healthStatus === 'WARNING' ? 'warning' : 'bad'}`}>
        <div>
          <div className="status-title">
            {plant.healthStatus === 'OPTIMAL' && <CheckCircle2 size={24} />}
            {plant.healthStatus === 'WARNING' && <AlertTriangle size={24} />}
            {plant.healthStatus === 'CRITICAL' && <XCircle size={24} />}
            {plant.healthStatus === 'OPTIMAL' ? 'OPTIMAL HEALTH & QUALITY' : plant.healthStatus === 'WARNING' ? 'ATTENTION REQUIRED' : 'CRITICAL (ISOLATE / CULL)'}
          </div>
          <div style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '2px' }}>
            FVOPA Status: <strong>{plant.fvopaComplianceStatus}</strong> • Batch #{plant.batchId}
          </div>
        </div>
        <div className="status-score">{plant.organicQualityIndex}/100</div>
      </div>

      {/* Stage & Age Estimation */}
      <div className="card">
        <div className="card-title">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={16} color="#3b82f6" /> Age & Growth Stage Identification
          </span>
          <span className="preset-badge badge-good" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
            Est. Age: {plant.estimatedAgeDays} Days
          </span>
        </div>

        <div style={{ marginBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700 }}>{stageInfo.name}</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stageInfo.dayRange} • {stageInfo.photoperiod}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', background: '#090d16', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--bg-card-border)', marginBottom: '0.75rem' }}>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Target Temp</span>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f3f4f6' }}>{stageInfo.targetTemp}</div>
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Target RH</span>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f3f4f6' }}>{stageInfo.targetRH}</div>
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Target VPD</span>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981' }}>{stageInfo.targetVPD}</div>
          </div>
        </div>

        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>KEY STAGE INDICATORS:</div>
        <ul style={{ fontSize: '0.8rem', color: '#f3f4f6', paddingLeft: '1.1rem', lineHeight: 1.5 }}>
          {stageInfo.keyVisualIndicators.map((ind, idx) => (
            <li key={idx}>{ind}</li>
          ))}
        </ul>
      </div>

      {/* Quality & Trichome Index */}
      <div className="card">
        <div className="card-title">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Activity size={16} color="#10b981" /> Organic Quality & Trichome Maturity
          </span>
        </div>

        <div className="metric-row">
          <span className="metric-label">Terpene Visual Integrity Score:</span>
          <span className="metric-value" style={{ color: '#10b981' }}>{plant.terpeneScore}%</span>
        </div>

        <div style={{ marginTop: '0.75rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
            <span>Trichome Gland Head Maturity Ratio</span>
            <span>Cloudy: {plant.trichomeMaturity.cloudyPercent}% | Amber: {plant.trichomeMaturity.amberPercent}%</span>
          </div>
          <div style={{ display: 'flex', height: '10px', borderRadius: '5px', overflow: 'hidden', background: '#1e293b' }}>
            <div style={{ width: `${plant.trichomeMaturity.clearPercent}%`, background: '#94a3b8' }} title={`Clear: ${plant.trichomeMaturity.clearPercent}%`} />
            <div style={{ width: `${plant.trichomeMaturity.cloudyPercent}%`, background: '#f8fafc' }} title={`Cloudy: ${plant.trichomeMaturity.cloudyPercent}%`} />
            <div style={{ width: `${plant.trichomeMaturity.amberPercent}%`, background: '#f59e0b' }} title={`Amber: ${plant.trichomeMaturity.amberPercent}%`} />
          </div>
        </div>

        {/* Living Soil Telemetry */}
        <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--bg-card-border)' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            LIVING SOIL FOOD WEB TELEMETRY (DELTA PACIFICA):
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <div className="metric-row" style={{ border: 'none', padding: 0 }}>
              <span className="metric-label">Soil Moisture:</span>
              <span className="metric-value">{plant.livingSoilParams.soilMoisturePercent}%</span>
            </div>
            <div className="metric-row" style={{ border: 'none', padding: 0 }}>
              <span className="metric-label">Soil pH:</span>
              <span className="metric-value" style={{ color: plant.livingSoilParams.phLevel < 6.0 || plant.livingSoilParams.phLevel > 7.0 ? '#f59e0b' : '#10b981' }}>
                {plant.livingSoilParams.phLevel}
              </span>
            </div>
            <div className="metric-row" style={{ border: 'none', padding: 0 }}>
              <span className="metric-label">Microbial Index:</span>
              <span className="metric-value">{plant.livingSoilParams.microbialActivityScore}/100</span>
            </div>
            <div className="metric-row" style={{ border: 'none', padding: 0 }}>
              <span className="metric-label">Soil Temp:</span>
              <span className="metric-value">{plant.livingSoilParams.soilTempC}°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
