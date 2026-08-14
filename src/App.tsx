import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FeedsGrid } from './components/FeedsGrid';
import { Cpu, ShieldCheck, X } from 'lucide-react';
import './App.css';

export function App() {
  const [isLiveCamActive, setIsLiveCamActive] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Toggle Live Mobile/Webcam Camera Feed
  const toggleLiveCamMode = () => {
    setIsLiveCamActive((prev) => !prev);
  };

  return (
    <div className="app-wrapper">
      {/* Top Bar Header */}
      <Header
        onOpenSettings={() => setIsSettingsOpen(true)}
        onToggleCamMode={toggleLiveCamMode}
      />

      {/* Main Dashboard Layout (Sidebar + 2x2 Feeds Grid) */}
      <main className="main-dashboard">
        <Sidebar
          healthScore={96}
          healthyPlantsCount={148}
          affectedPlantsCount={12}
          predictedHarvestDays={19}
          tempC={24.1}
          humidityPct={58}
          co2Ppm={1100}
          lightIntensity={950}
        />

        <FeedsGrid isLiveCamActive={isLiveCamActive} />
      </main>

      {/* Enterprise Platform Settings & Platform Variants Modal */}
      {isSettingsOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '1rem' }}>
          <div style={{ background: '#101924', border: '1px solid #1a2838', borderRadius: '12px', width: '100%', maxWidth: '750px', maxHeight: '90vh', overflowY: 'auto', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid #1a2838', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 700, fontSize: '1.1rem' }}>
                <Cpu size={20} /> CannaVision Platform Configuration & Release Targets
              </div>
              <button className="icon-btn" onClick={() => setIsSettingsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
              <div style={{ background: '#080d14', padding: '1rem', borderRadius: '8px', border: '1px solid #1a2838' }}>
                <h4 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={16} color="#10b981" /> 1. Desktop Executable Variant (Electron)
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Configured for Windows / macOS standalone executable build (`electron/main.js`). Run <code style={{ color: '#10b981' }}>npm run build:desktop</code> to generate desktop binary package.
                </p>
              </div>

              <div style={{ background: '#080d14', padding: '1rem', borderRadius: '8px', border: '1px solid #1a2838' }}>
                <h4 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={16} color="#3b82f6" /> 2. Android & iPhone Mobile Installation Variants
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                  Configured via Capacitor (`capacitor.config.json`) and Progressive Web App Service Worker (`public/sw.js` & `public/manifest.json`).
                </p>
                <ul style={{ color: '#f3f4f6', paddingLeft: '1.2rem', lineHeight: 1.5 }}>
                  <li><strong>Android Variant:</strong> Capacitor Android native wrapper + Mobile Chrome PWA.</li>
                  <li><strong>iPhone (iOS) Variant:</strong> Capacitor iOS XCode bundle + Safari PWA Home-Screen App.</li>
                </ul>
              </div>

              <div style={{ background: '#080d14', padding: '1rem', borderRadius: '8px', border: '1px solid #1a2838' }}>
                <h4 style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.4rem' }}>
                  3. PostgreSQL & Prisma Enterprise Data Model
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Master schema deployed at <code style={{ color: '#3b82f6' }}>prisma/schema.prisma</code> tracking multi-tenant isolation, facility zones, scan sessions, YOLO detections, anomaly scores, and immutable audit logs.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <button
                onClick={() => setIsSettingsOpen(false)}
                style={{ background: '#10b981', color: '#ffffff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', fontWeight: 700, cursor: 'pointer' }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
