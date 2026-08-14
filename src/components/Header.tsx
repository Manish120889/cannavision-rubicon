import React, { useState, useEffect } from 'react';
import { Video, Settings, Leaf } from 'lucide-react';

interface HeaderProps {
  onOpenSettings: () => void;
  onToggleCamMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings, onToggleCamMode }) => {
  const [currentTime, setCurrentTime] = useState<string>('OCT 26, 2023 10:45 AM');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      const dateStr = `${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      setCurrentTime(`${dateStr} ${hours}:${minutes} ${ampm}`);
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="top-header">
      <div className="header-left">
        <div className="brand-title">
          <Leaf size={22} color="#10b981" fill="#10b981" />
          <span>RUBICON ORGANICS</span>
          <span className="brand-divider">/</span>
          <span className="header-sub">AI PLANT VISION</span>
          <span className="brand-divider">/</span>
          <span className="header-sub" style={{ fontFamily: 'var(--font-mono)' }}>{currentTime}</span>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn" title="Toggle Live Camera Stream Mode" onClick={onToggleCamMode}>
          <Video size={20} color="#10b981" />
        </button>
        <button className="icon-btn" title="Settings & Platform Config" onClick={onOpenSettings}>
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
};
