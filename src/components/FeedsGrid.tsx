import React, { useRef, useEffect } from 'react';
import { Video } from 'lucide-react';

interface FeedsGridProps {
  isLiveCamActive: boolean;
}

export const FeedsGrid: React.FC<FeedsGridProps> = ({ isLiveCamActive }) => {
  const feed1Ref = useRef<HTMLCanvasElement | null>(null);
  const feed2Ref = useRef<HTMLCanvasElement | null>(null);
  const feed3Ref = useRef<HTMLCanvasElement | null>(null);
  const feed4Ref = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Initialize webcam stream if activated
  useEffect(() => {
    if (isLiveCamActive) {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 1280, height: 720 } })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((err) => console.log('Camera stream warning:', err));
    }
  }, [isLiveCamActive]);

  // Render procedure for all 4 feeds matching the design image
  useEffect(() => {
    let animId: number;

    const renderAllFeeds = () => {
      // --- FEED 1: RUBICON - ROW 4 / UNIT 12 (Multi-plant Green Bounding Boxes) ---
      if (feed1Ref.current) {
        const c1 = feed1Ref.current;
        const ctx1 = c1.getContext('2d');
        if (ctx1) {
          ctx1.clearRect(0, 0, c1.width, c1.height);
          if (isLiveCamActive && videoRef.current && videoRef.current.readyState === 4) {
            ctx1.drawImage(videoRef.current, 0, 0, c1.width, c1.height);
          } else {
            drawCanopyBackground(ctx1, c1.width, c1.height);
          }

          // Draw 4 Green Healthy Plant Bounding Boxes
          const greenBoxes = [
            { label: 'Healthy Plant: 98.4%', x: 30, y: 80, w: 140, h: 120 },
            { label: 'Healthy Plant: 98.4%', x: 190, y: 50, w: 150, h: 140 },
            { label: 'Healthy Plant: 98.4%', x: 360, y: 60, w: 140, h: 130 },
            { label: 'Healthy Plant: 98.4%', x: 200, y: 190, w: 160, h: 130 }
          ];

          greenBoxes.forEach((b) => drawBoundingBox(ctx1, b.x, b.y, b.w, b.h, b.label, '#10b981', 'rgba(16, 185, 129, 0.9)'));
        }
      }

      // --- FEED 2: POWDERY MILDEW (PM) [HIGH RISK] Red Bounding Boxes ---
      if (feed2Ref.current) {
        const c2 = feed2Ref.current;
        const ctx2 = c2.getContext('2d');
        if (ctx2) {
          ctx2.clearRect(0, 0, c2.width, c2.height);
          drawLeafCloseUp(ctx2, c2.width, c2.height, true, false);

          // Draw 1 Outer Green Box + 2 Red Mildew Bounding Boxes
          drawBoundingBox(ctx2, 40, 40, 520, 300, 'Green Box: 97.9%', '#10b981', 'rgba(16, 185, 129, 0.9)');
          drawBoundingBox(ctx2, 100, 110, 180, 190, 'Red Box: 91.2%', '#ef4444', 'rgba(239, 68, 68, 0.9)');
          drawBoundingBox(ctx2, 330, 80, 210, 210, 'POWDERY MILDEW (PM) [HIGH RISK]\nRed Box: 91.2%', '#ef4444', 'rgba(239, 68, 68, 0.9)');
        }
      }

      // --- FEED 3: SPIDER MITE (SM) [EARLY DETECTION] Amber Bounding Box ---
      if (feed3Ref.current) {
        const c3 = feed3Ref.current;
        const ctx3 = c3.getContext('2d');
        if (ctx3) {
          ctx3.clearRect(0, 0, c3.width, c3.height);
          drawLeafCloseUp(ctx3, c3.width, c3.height, false, true);

          // Outer Green Box + 1 Amber Spider Mite Box
          drawBoundingBox(ctx3, 30, 30, 520, 320, 'Green Box: 96.7%', '#10b981', 'rgba(16, 185, 129, 0.9)');
          drawBoundingBox(ctx3, 230, 180, 220, 150, 'SPIDER MITE (SM) [EARLY DETECTION]\nAmber Box: 89.1%', '#f59e0b', 'rgba(245, 158, 11, 0.9)');
        }
      }

      // --- FEED 4: Clean Green Foliage & Bud ---
      if (feed4Ref.current) {
        const c4 = feed4Ref.current;
        const ctx4 = c4.getContext('2d');
        if (ctx4) {
          ctx4.clearRect(0, 0, c4.width, c4.height);
          drawLeafCloseUp(ctx4, c4.width, c4.height, false, false);

          drawBoundingBox(ctx4, 40, 40, 500, 300, 'Green Box: 98.2%', '#10b981', 'rgba(16, 185, 129, 0.9)');
        }
      }

      animId = requestAnimationFrame(renderAllFeeds);
    };

    renderAllFeeds();

    return () => cancelAnimationFrame(animId);
  }, [isLiveCamActive]);

  // Helper: Draw Bounding Box with Label matching design image
  const drawBoundingBox = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    label: string,
    strokeColor: string,
    fillColor: string
  ) => {
    ctx.lineWidth = 3;
    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(x, y, w, h);

    // Label Header
    const lines = label.split('\n');
    const labelHeight = lines.length * 18 + 6;
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y - labelHeight, Math.max(w, 220), labelHeight);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px sans-serif';
    lines.forEach((line, idx) => {
      ctx.fillText(line, x + 6, y - labelHeight + (idx + 1) * 16 - 2);
    });
  };

  // Helper: Draw Procedural Multi-plant Canopy (Feed 1)
  const drawCanopyBackground = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.fillStyle = '#060f18';
    ctx.fillRect(0, 0, w, h);

    // Grid lines for hydroponic tables
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Draw multiple plant canopies
    const plants = [
      { x: 100, y: 140, r: 60 },
      { x: 260, y: 120, r: 70 },
      { x: 430, y: 130, r: 65 },
      { x: 280, y: 250, r: 75 }
    ];

    plants.forEach((p) => {
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // Flower center
      ctx.fillStyle = '#a7f3d0';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 0.4, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  // Helper: Draw Close-Up Cannabis Leaf with optional Mildew or Mite spots (Feeds 2, 3, 4)
  const drawLeafCloseUp = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    hasMildew: boolean,
    hasMites: boolean
  ) => {
    ctx.fillStyle = '#07101a';
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2 + 20;

    // Stem
    ctx.strokeStyle = '#15803d';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(cx, cy + 120);
    ctx.lineTo(cx, cy - 80);
    ctx.stroke();

    // Center Flower Cola
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.ellipse(cx, cy - 80, 50, 75, 0, 0, Math.PI * 2);
    ctx.fill();

    // Fan Leaves
    const leafletAngles = [-60, -35, -15, 0, 15, 35, 60];
    leafletAngles.forEach((angle) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((angle * Math.PI) / 180);

      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.ellipse(0, -90, 22, 90, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    });

    // Powdery Mildew White Spots if Feed 2
    if (hasMildew) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.beginPath();
      ctx.arc(cx - 50, cy - 30, 28, 0, Math.PI * 2);
      ctx.arc(cx + 80, cy - 20, 32, 0, Math.PI * 2);
      ctx.fill();
    }

    // Spider Mite Yellow Stippling if Feed 3
    if (hasMites) {
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(cx + 60, cy + 40, 25, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  return (
    <div className="feeds-grid">
      <video ref={videoRef} style={{ display: 'none' }} playsInline muted />

      {/* FEED 1 */}
      <div className="feed-card">
        <div className="feed-header">
          <span>RUBICON - ROW 4 / UNIT 12</span>
          <Video size={14} className="feed-cam-icon" />
        </div>
        <div className="feed-canvas-container">
          <canvas ref={feed1Ref} width={600} height={380} className="feed-canvas" />
        </div>
      </div>

      {/* FEED 2 */}
      <div className="feed-card">
        <div className="feed-header">
          <span>FEED 2</span>
          <Video size={14} className="feed-cam-icon" />
        </div>
        <div className="feed-canvas-container">
          <canvas ref={feed2Ref} width={600} height={380} className="feed-canvas" />
        </div>
      </div>

      {/* FEED 3 */}
      <div className="feed-card">
        <div className="feed-header">
          <span>FEED 3</span>
          <Video size={14} className="feed-cam-icon" />
        </div>
        <div className="feed-canvas-container">
          <canvas ref={feed3Ref} width={600} height={380} className="feed-canvas" />
        </div>
      </div>

      {/* FEED 4 */}
      <div className="feed-card">
        <div className="feed-header">
          <span>FEED 4</span>
          <Video size={14} className="feed-cam-icon" />
        </div>
        <div className="feed-canvas-container">
          <canvas ref={feed4Ref} width={600} height={380} className="feed-canvas" />
        </div>
      </div>
    </div>
  );
};
