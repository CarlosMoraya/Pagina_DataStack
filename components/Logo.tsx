import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-900';
  const iconFillPrimary = variant === 'light' ? '#3b82f6' : '#0f172a'; // Brand Blue or Dark Slate
  const iconFillSecondary = variant === 'light' ? '#93c5fd' : '#3b82f6'; // Lighter Blue or Brand Blue
  const iconFillTertiary = variant === 'light' ? '#ffffff' : '#94a3b8'; // White or Gray

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 
        CONCEPT: The logo represents "Data Stack". 
        Three geometric rhombuses/layers stacked vertically but with a slight isometric perspective.
        - Bottom layer: Raw Data (Foundation)
        - Middle layer: Structure/Processing (Transformation)
        - Top layer: Intelligence/Output (Value)
        
        The geometry suggests stability, order, and upward movement.
      */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Bottom Layer - Foundation */}
        <path d="M20 38L4 30L20 22L36 30L20 38Z" fill={iconFillPrimary} opacity="0.9"/>
        
        {/* Middle Layer - Structure */}
        <path d="M20 28L4 20L20 12L36 20L20 28Z" fill={iconFillSecondary} opacity="0.95"/>
        
        {/* Top Layer - Intelligence */}
        <path d="M20 18L4 10L20 2L36 10L20 18Z" fill={iconFillTertiary} />
      </svg>

      <div className={`flex flex-col leading-none ${textColor}`}>
        <span className="font-bold text-xl tracking-tight">DATA</span>
        <span className="font-light text-xl tracking-widest text-opacity-80">STACK</span>
      </div>
    </div>
  );
};

export default Logo;