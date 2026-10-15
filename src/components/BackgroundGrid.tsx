import React from 'react';

interface BackgroundGridProps {
  zenMode: boolean;
}

export const BackgroundGrid: React.FC<BackgroundGridProps> = ({ zenMode }) => {
  if (zenMode) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Soft Ambient Radial Lights (Light Studio Glows) */}
      <div 
        className="ambient-glow absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[140px] opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(219, 234, 254, 0.9) 0%, rgba(224, 242, 254, 0.6) 40%, transparent 70%)' }}
      />
      
      <div 
        className="ambient-glow absolute top-[30%] -left-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(237, 233, 254, 0.8) 0%, rgba(224, 231, 255, 0.5) 50%, transparent 70%)' }}
      />

      <div 
        className="ambient-glow absolute top-[65%] -right-40 w-[650px] h-[650px] rounded-full blur-[170px] opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(209, 250, 229, 0.7) 0%, rgba(224, 242, 254, 0.4) 50%, transparent 70%)' }}
      />

      {/* Subtle Architectural Blueprint Grid */}
      <div 
        className="floating-grid absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
