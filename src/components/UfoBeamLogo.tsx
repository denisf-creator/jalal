import React, { useId } from 'react';
import { UfoIcon } from './UfoIcon';

interface UfoBeamLogoProps {
  className?: string;
}

export const UfoBeamLogo: React.FC<UfoBeamLogoProps> = ({ className = '' }) => {
  const beamGradId = useId();
  const beamCoreGradId = useId();
  const highlightGradId = useId();
  const emitterGlowId = useId();
  const filterGlowId = useId();
  const filterSoftId = useId();
  const filterRimId = useId();

  return (
    <div className={`relative flex justify-center items-center mb-6 select-none group w-full ${className}`}>
      <div className="relative inline-flex items-center justify-center">
        {/* Exactly centered Xeno wordmark */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F0F0F3] to-[#7B7B88] drop-shadow-sm text-center">
          Xeno
        </h1>

        {/* 
          High-Precision Optical Light Beam Overlay:
          Sized in font units (em) so that its coordinates, angles, and scale
          remain 100% synchronized with the wordmark typography across all screen breakpoints.
        */}
        <div
          className="absolute pointer-events-none overflow-visible z-10"
          style={{
            top: '-0.24em',
            right: '-0.32em',
            width: '1.25em',
            height: '0.92em',
          }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 125 92"
            className="w-full h-full overflow-visible"
            style={{ mixBlendMode: 'screen' }}
          >
            <defs>
              {/* Main Tapered Beam Gradient: Cool White to Ice Blue to Subtle Haze */}
              <linearGradient id={beamGradId} x1="91" y1="28" x2="60" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="12%" stopColor="#E0F2FE" stopOpacity="0.75" />
                <stop offset="38%" stopColor="#BAE6FD" stopOpacity="0.38" />
                <stop offset="70%" stopColor="#93C5FD" stopOpacity="0.16" />
                <stop offset="92%" stopColor="#60A5FA" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>

              {/* Core Ray Gradient: Ultra-delicate optical filament */}
              <linearGradient id={beamCoreGradId} x1="91" y1="28" x2="60" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="20%" stopColor="#F0F9FF" stopOpacity="0.85" />
                <stop offset="55%" stopColor="#BAE6FD" stopOpacity="0.45" />
                <stop offset="85%" stopColor="#93C5FD" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
              </linearGradient>

              {/* Radial Highlight Gradient for the top crest of the letter "o" */}
              <radialGradient id={highlightGradId} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="30%" stopColor="#E0F2FE" stopOpacity="0.55" />
                <stop offset="65%" stopColor="#BAE6FD" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
              </radialGradient>

              {/* Emitter Point Radial Flare */}
              <radialGradient id={emitterGlowId} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="35%" stopColor="#E0F2FE" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#7DD3FC" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </radialGradient>

              {/* Gaussian Blurs for perfectly smooth photonic edges (ZERO geometric steps or rings) */}
              <filter id={filterGlowId} x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="1.5" />
              </filter>

              <filter id={filterSoftId} x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="3.6" />
              </filter>

              <filter id={filterRimId} x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="0.75" />
              </filter>
            </defs>

            {/* Layer 1: Atmospheric Outer Light Wash (ultra-smooth ambient light cone) */}
            <path
              d="M 92.5 29.5 L 65.5 57.5 Q 60 52.5 54.5 46.5 L 89.5 26.5 Z"
              fill={`url(#${beamGradId})`}
              filter={`url(#${filterSoftId})`}
              opacity="0.5"
            />

            {/* Layer 2: Primary Clean Tapered Beam (narrow at UFO underside, gently expanding towards "o") */}
            <path
              d="M 92 29 L 64 56 Q 60 52.8 56 48 L 90 27 Z"
              fill={`url(#${beamGradId})`}
              filter={`url(#${filterGlowId})`}
            />

            {/* Layer 3: Central Delicate Core Ray Filament */}
            <line
              x1="91"
              y1="28"
              x2="60"
              y2="52"
              stroke={`url(#${beamCoreGradId})`}
              strokeWidth="1.2"
              strokeLinecap="round"
              filter={`url(#${filterRimId})`}
            />

            {/* Layer 4: Soft Highlight kissing the top of the letter "o" */}
            <g transform="translate(60, 52)">
              {/* Elliptical soft ambient highlight */}
              <ellipse
                cx="0"
                cy="0"
                rx="8.5"
                ry="3.2"
                transform="rotate(-16)"
                fill={`url(#${highlightGradId})`}
                filter={`url(#${filterGlowId})`}
              />

              {/* Delicate rim light tracing the curved crown of "o" */}
              <path
                d="M -6.5 2 Q 0 -1.8 6.5 1.5"
                fill="none"
                stroke="rgba(255, 255, 255, 0.75)"
                strokeWidth="0.85"
                strokeLinecap="round"
                filter={`url(#${filterRimId})`}
              />
            </g>

            {/* Layer 5: Emitter Point Flare at the UFO Underside */}
            <circle
              cx="91"
              cy="28"
              r="3.2"
              fill={`url(#${emitterGlowId})`}
              filter={`url(#${filterRimId})`}
            />
          </svg>
        </div>

        {/* 
          Small silver flying saucer UFO icon positioned in the upper right corner:
          Anchored with precision, subtle soft aura, and 30-35% height proportion
        */}
        <div className="absolute -top-1 sm:-top-1.5 md:-top-2 lg:-top-3 -right-3.5 sm:-right-4 md:-right-6 lg:-right-8 -translate-y-1/4 flex items-center justify-center pointer-events-none z-20">
          {/* Subtle soft white & cool blue aura */}
          <div
            className="pointer-events-none absolute -inset-1.5 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(186, 230, 253, 0.35) 50%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          {/* UFO Saucer Logomark */}
          <UfoIcon
            gradient
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-11 lg:h-11 drop-shadow-[0_2px_14px_rgba(255,255,255,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
          />
        </div>
      </div>
    </div>
  );
};
