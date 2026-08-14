import React, { useRef, useEffect } from 'react';
import { Camera, Upload, RefreshCw, Smartphone } from 'lucide-react';
import type { RubiconPlantSample } from '../types';

interface VisualInspectorProps {
  plant: RubiconPlantSample;
  viewMode: 'rgb' | 'hsv' | 'heatmap' | 'boxes';
  setViewMode: (mode: 'rgb' | 'hsv' | 'heatmap' | 'boxes') => void;
  isWebcamActive: boolean;
  toggleCamera: () => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customImage: string | null;
  facingMode: 'environment' | 'user';
  switchFacingMode: () => void;
}

export const VisualInspector: React.FC<VisualInspectorProps> = ({
  plant,
  viewMode,
  setViewMode,
  isWebcamActive,
  toggleCamera,
  onFileUpload,
  customImage,
  facingMode,
  switchFacingMode
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isWebcamActive && videoRef.current && videoRef.current.readyState === 4) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      } else if (customImage) {
        const img = new Image();
        img.src = customImage;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      } else {
        drawOrganicPlantStage(ctx, canvas.width, canvas.height, plant, viewMode);
      }

      // Draw bounding boxes for pathogen detections
      if (viewMode === 'boxes' || viewMode === 'heatmap') {
        plant.pathogens.forEach((pat) => {
          const bx = (pat.bbox.x / 100) * canvas.width;
          const by = (pat.bbox.y / 100) * canvas.height;
          const bw = (pat.bbox.w / 100) * canvas.width;
          const bh = (pat.bbox.h / 100) * canvas.height;

          const color = pat.severity === 'critical' ? '#ef4444' : '#f59e0b';
          ctx.lineWidth = 3;
          ctx.strokeStyle = color;
          ctx.strokeRect(bx, by, bw, bh);

          // Header Tag
          ctx.fillStyle = color;
          ctx.fillRect(bx, by - 24, Math.max(bw, 180), 24);

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(`${pat.label} (${(pat.confidence * 100).toFixed(0)}%)`, bx + 6, by - 7);
        });
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [plant, viewMode, isWebcamActive, customImage]);

  // Procedural Canvas Generator tailored to organic cannabis growth stages
  const drawOrganicPlantStage = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    p: RubiconPlantSample,
    mode: 'rgb' | 'hsv' | 'heatmap' | 'boxes'
  ) => {
    // Fill background
    ctx.fillStyle = mode === 'hsv' ? '#010511' : '#080d1a';
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2 + 20;

    let leafColor = '#10b981';
    let yellowColor = '#eab308';
    let brownColor = '#78350f';
    let pistilColor = '#f97316'; // amber orange

    if (mode === 'hsv') {
      leafColor = '#00ff66';
      yellowColor = '#ffff00';
      brownColor = '#ff00ff';
      pistilColor = '#00ffff';
    } else if (mode === 'heatmap') {
      leafColor = '#1e3a8a';
      yellowColor = '#f97316';
      brownColor = '#ef4444';
      pistilColor = '#ffffff';
    }

    // Stem & living soil base
    ctx.fillStyle = mode === 'hsv' ? '#333333' : '#451a03';
    ctx.fillRect(cx - 90, cy + 130, 180, 70);

    ctx.strokeStyle = mode === 'hsv' ? '#00cc44' : '#15803d';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx, cy + 130);
    ctx.lineTo(cx, cy - 70);
    ctx.stroke();

    // Stage-specific visual rendering
    if (p.stageId === 'mid_flower' || p.stageId === 'late_flower') {
      const isLate = p.stageId === 'late_flower';
      ctx.fillStyle = isLate ? '#166534' : leafColor;
      
      // Main Cola Head
      ctx.beginPath();
      ctx.ellipse(cx, cy - 90, 45, 80, 0, 0, Math.PI * 2);
      ctx.fill();

      // Side Colas
      ctx.beginPath();
      ctx.ellipse(cx - 65, cy - 30, 35, 60, -0.3, 0, Math.PI * 2);
      ctx.ellipse(cx + 65, cy - 30, 35, 60, 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Trichome Head Glistening Effect
      for (let i = 0; i < 35; i++) {
        const tx = cx + (Math.random() - 0.5) * 80;
        const ty = (cy - 90) + (Math.random() - 0.5) * 120;
        ctx.fillStyle = mode === 'hsv' ? '#ffffff' : (Math.random() > 0.3 ? 'rgba(255, 255, 255, 0.9)' : '#f59e0b');
        ctx.beginPath();
        ctx.arc(tx, ty, isLate ? 3 : 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Pistil Hairs
      for (let j = 0; j < 25; j++) {
        const px = cx + (Math.random() - 0.5) * 70;
        const py = (cy - 90) + (Math.random() - 0.5) * 100;
        ctx.strokeStyle = pistilColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + (Math.random() - 0.5) * 18, py - 15);
        ctx.stroke();
      }
    } else {
      // Fan Leaves for Veg Stages
      const drawLeaf = (lx: number, ly: number, scale: number, rot: number, isChlorotic: boolean) => {
        ctx.save();
        ctx.translate(lx, ly);
        ctx.rotate((rot * Math.PI) / 180);

        ctx.fillStyle = isChlorotic ? yellowColor : leafColor;
        ctx.beginPath();
        ctx.ellipse(0, -40 * scale, 18 * scale, 55 * scale, 0, 0, Math.PI * 2);
        ctx.fill();

        if (p.necrosis > 3 && isChlorotic) {
          ctx.fillStyle = brownColor;
          ctx.beginPath();
          ctx.arc(0, -50 * scale, 8 * scale, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      };

      drawLeaf(cx, cy - 60, 1.2, 0, p.chlorosis > 12);
      drawLeaf(cx - 70, cy - 10, 1.0, -40, p.chlorosis > 10);
      drawLeaf(cx + 70, cy - 10, 1.0, 40, false);
      drawLeaf(cx - 90, cy + 50, 0.8, -75, p.chlorosis > 15);
      drawLeaf(cx + 90, cy + 50, 0.8, 75, p.chlorosis > 15);
    }

    // Powdery Mildew Overlay if present
    if (p.pathogens.some((pat) => pat.category === 'fungal') && mode !== 'hsv') {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(cx - 30, cy - 40, 18, 0, Math.PI * 2);
      ctx.arc(cx + 50, cy + 10, 14, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  return (
    <div className="card">
      <div className="card-title" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Smartphone size={18} color="#10b981" /> Mobile Rear-Camera AI Scanner
        </span>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <button className="control-btn" onClick={toggleCamera} style={{ padding: '0.5rem 0.8rem', fontWeight: 600 }}>
            <Camera size={15} /> {isWebcamActive ? 'Stop Scanner' : 'Start Mobile Cam'}
          </button>

          {isWebcamActive && (
            <button className="control-btn" onClick={switchFacingMode} title="Switch Front / Rear Mobile Camera">
              <RefreshCw size={14} /> {facingMode === 'environment' ? 'Rear Cam' : 'Front Cam'}
            </button>
          )}

          <button className="control-btn" onClick={() => fileInputRef.current?.click()}>
            <Upload size={14} /> Upload Photo
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={onFileUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
      </div>

      <div className="canvas-wrapper">
        <video ref={videoRef} style={{ display: 'none' }} playsInline muted />
        <canvas ref={canvasRef} width={640} height={480} className="inspection-canvas" />
      </div>

      <div className="canvas-controls">
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', alignSelf: 'center', marginRight: '0.25rem' }}>
          Vision Filters:
        </span>
        <button
          className={`control-btn ${viewMode === 'rgb' ? 'active' : ''}`}
          onClick={() => setViewMode('rgb')}
        >
          RGB Normal
        </button>
        <button
          className={`control-btn ${viewMode === 'hsv' ? 'active' : ''}`}
          onClick={() => setViewMode('hsv')}
        >
          HSV Foliage
        </button>
        <button
          className={`control-btn ${viewMode === 'heatmap' ? 'active' : ''}`}
          onClick={() => setViewMode('heatmap')}
        >
          Stress Heatmap
        </button>
        <button
          className={`control-btn ${viewMode === 'boxes' ? 'active' : ''}`}
          onClick={() => setViewMode('boxes')}
        >
          YOLO Bounding Boxes
        </button>
      </div>
    </div>
  );
};
