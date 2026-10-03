import React, { useId } from 'react';

interface UfoCyberBeamProps {
  className?: string;
}

export const UfoCyberBeam: React.FC<UfoCyberBeamProps> = ({ className = '' }) => {
  const uniqueId = useId();
  const beamGradId = `cyber-beam-grad-${uniqueId}`;
  const coreGradId = `cyber-core-grad-${uniqueId}`;
  const glareCenterId = `cyber-glare-center-${uniqueId}`;
  const glareHaloId = `cyber-glare-halo-${uniqueId}`;
  const beamBlurId = `cyber-beam-blur-${uniqueId}`;
  const coreBlurId = `cyber-core-blur-${uniqueId}`;
  const glareBlurId = `cyber-glare-blur-${uniqueId}`;

  return (
    <svg
      className={`absolute inset-0 overflow-visible pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Soft volumetric blur filters */}
        <filter id={beamBlurId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4.5" />
        </filter>
        <filter id={coreBlurId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <filter id={glareBlurId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" />
        </filter>

        {/* Cold Cyber Blue to White beam gradient */}
        <linearGradient
          id={beamGradId}
          x1="43.5"
          y1="65.5"
          x2="-105"
          y2="155"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="12%" stopColor="#E0F7FF" stopOpacity="0.85" />
          <stop offset="38%" stopColor="#38BDF8" stopOpacity="0.65" />
          <stop offset="72%" stopColor="#0EA5E9" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.04" />
        </linearGradient>

        {/* Focused inner core gradient */}
        <linearGradient
          id={coreGradId}
          x1="43.5"
          y1="65.5"
          x2="-105"
          y2="155"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="18%" stopColor="#F0F9FF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#7DD3FC" stopOpacity="0.75" />
          <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.08" />
        </linearGradient>

        {/* Soft glare radial gradient on the letter 'o' */}
        <radialGradient id={glareCenterId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="25%" stopColor="#E0F7FF" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.5" />
          <stop offset="85%" stopColor="#0284C7" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
        </radialGradient>

        {/* Ambient glare halo */}
        <radialGradient id={glareHaloId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="transition-opacity duration-300">
        {/* Layer 1: Ambient volumetric glow haze (smooth, no geometric edges) */}
        <path
          d="M 38 60 L -122 136 L -88 174 L 49 71 Z"
          fill={`url(#${beamGradId})`}
          filter={`url(#${beamBlurId})`}
          opacity="0.55"
        />

        {/* Layer 2: Main directional cyber light beam */}
        <path
          d="M 40 62 L -116 142 L -94 168 L 47 69 Z"
          fill={`url(#${beamGradId})`}
          filter={`url(#${coreBlurId})`}
          opacity="0.85"
        />

        {/* Layer 3: Concentrated high-intensity light shaft */}
        <path
          d="M 42 64 L -110 148 L -100 162 L 45 67 Z"
          fill={`url(#${coreGradId})`}
          filter={`url(#${coreBlurId})`}
          opacity="0.95"
        />

        {/* Layer 4: Fine central light ray */}
        <line
          x1="43.5"
          y1="65.5"
          x2="-105"
          y2="155"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeOpacity="0.85"
          strokeLinecap="round"
        />

        {/* UFO bottom emitter corona glow */}
        <ellipse
          cx="43.5"
          cy="65.5"
          rx="6"
          ry="3.5"
          transform="rotate(24 43.5 65.5)"
          fill="#38BDF8"
          filter={`url(#${coreBlurId})`}
          opacity="0.9"
        />
        <ellipse
          cx="43.5"
          cy="65.5"
          rx="3.5"
          ry="2"
          transform="rotate(24 43.5 65.5)"
          fill="#FFFFFF"
          opacity="1"
        />

        {/* Touchdown Glare on letter 'o' (Блик на букве О) */}
        {/* Ambient atmospheric cyan haze on the curve */}
        <circle
          cx="-105"
          cy="155"
          r="24"
          fill={`url(#${glareHaloId})`}
          filter={`url(#${beamBlurId})`}
        />

        {/* Bright optical glare spot */}
        <circle
          cx="-105"
          cy="155"
          r="14"
          fill={`url(#${glareCenterId})`}
          filter={`url(#${glareBlurId})`}
        />

        {/* Soft diagonal highlight flare on letter 'o' rim */}
        <ellipse
          cx="-105"
          cy="155"
          rx="18"
          ry="4"
          transform="rotate(-32 -105 155)"
          fill={`url(#${glareCenterId})`}
          opacity="0.9"
        />

        {/* Specular white reflection point */}
        <circle
          cx="-105"
          cy="155"
          r="3"
          fill="#FFFFFF"
          opacity="0.95"
        />
      </g>
    </svg>
  );
};
