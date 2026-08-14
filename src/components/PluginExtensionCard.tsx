import React, { useState } from 'react';
import { Cpu, Code, ToggleLeft, ToggleRight } from 'lucide-react';
import { engineInstance } from '../engine/CannaEngine';
import type { ICannaVisionPlugin } from '../types';

export const PluginExtensionCard: React.FC = () => {
  const [plugins, setPlugins] = useState<ICannaVisionPlugin[]>(
    engineInstance.getRegisteredPlugins()
  );

  const togglePlugin = (id: string) => {
    const p = plugins.find((item) => item.id === id);
    if (p) {
      engineInstance.togglePlugin(id, !p.enabled);
      setPlugins([...engineInstance.getRegisteredPlugins()]);
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-title">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3b82f6' }}>
            <Cpu size={20} /> Open Plugin Architecture & Future Improvement Engine
          </span>
          <span className="preset-badge badge-good" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
            Modular AI Pipeline
          </span>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          CannaVision AI is built with an open, decoupled plugin framework. Engineering teams at Rubicon Organics can seamlessly plug in custom PyTorch/YOLOv10 models, RTSP camera drivers, or Living Soil IoT sensor telemetry without modifying the core software infrastructure.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {plugins.map((plug) => (
            <div
              key={plug.id}
              style={{
                background: '#090d16',
                border: '1px solid var(--bg-card-border)',
                borderRadius: '8px',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#f3f4f6', fontWeight: 700 }}>{plug.name}</h4>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    v{plug.version} • by {plug.author}
                  </span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', maxWidth: '650px' }}>
                  {plug.description}
                </p>
              </div>

              <button
                onClick={() => togglePlugin(plug.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: plug.enabled ? '#10b981' : '#64748b',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}
              >
                {plug.enabled ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
                {plug.enabled ? 'ACTIVE' : 'DISABLED'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Integration Code Example */}
      <div className="card">
        <div className="card-title">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#f3f4f6' }}>
            <Code size={16} /> Developer Extension Blueprint (How to add custom ML models)
          </span>
        </div>
        <div
          style={{
            background: '#04070d',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid var(--bg-card-border)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: '#a7f3d0',
            overflowX: 'auto',
            lineHeight: 1.6
          }}
        >
          <pre>{`// Registering a Custom Terpene Analysis ML Plugin for Rubicon Organics
import { engineInstance } from './engine/CannaEngine';

engineInstance.registerPlugin({
  id: 'custom_terpene_analyzer',
  name: 'Living Soil Terpene Monoterpene Classifier',
  version: '1.0.0',
  description: 'Predicts myrcene vs caryophyllene ratios from flower trichome visual specular reflection.',
  author: 'Rubicon Data Science Team',
  enabled: true,
  onAnalyze: (plantSample) => {
    // Run custom PyTorch ONNX runtime inference or IoT sensor query
    const calculatedTerpeneScore = 98;
    return { terpeneScore: calculatedTerpeneScore };
  }
});`}</pre>
        </div>
      </div>
    </div>
  );
};
