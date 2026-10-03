import React, { useId } from 'react';
import { UfoIcon } from './UfoIcon';

export const UfoBeamLockup: React.FC = () => {
  const sparkId = useId();

  return (
    <div className="absolute -top-3.5 sm:-top-4 md:-top-5 lg:-top-7 right-[18px] sm:right-[22px] md:right-[30px] lg:right-[40px] translate-x-1/2 pointer-events-none flex flex-col items-center z-20">
      {/* UFO Icon - centered precisely above the letter 'o' */}
      <div className="relative flex items-center justify-center">
        {/* Very subtle sharp rim glow on UFO */}
        <div
          className="pointer-events-none absolute -inset-0.5 rounded-full blur-[3px] opacity-40 group-hover:opacity-70 transition-opacity"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7), transparent 75%)',
          }}
          aria-hidden="true"
        />
        <UfoIcon
          gradient
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-11 lg:h-11 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Laser Beam & Spark - strictly vertical, razor-sharp, zero diffuse cone */}
      <div className="relative -mt-0.5 sm:-mt-1 flex flex-col items-center">
        <svg
          viewBox="0 0 24 50"
          className="w-6 h-[20px] sm:h-[26px] md:h-[35px] lg:h-[46px] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Tiny Specular Radial Bloom for spark */}
            <radialGradient id={sparkId} cx="12" cy="48" r="8" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Laser Beam Outer Precision Sheath (1.6px, crisp white) */}
          <line
            x1="12"
            y1="0"
            x2="12"
            y2="48"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeOpacity="0.45"
            strokeLinecap="butt"
          />

          {/* 2. Laser Core Beam (1px intense 100% white) */}
          <line
            x1="12"
            y1="0"
            x2="12"
            y2="48"
            stroke="#FFFFFF"
            strokeWidth="0.85"
            strokeOpacity="1"
            strokeLinecap="butt"
            className="filter drop-shadow-[0_0_1.5px_#FFFFFF]"
          />

          {/* 3. Spark Micro-Halo in the point of contact */}
          <circle
            cx="12"
            cy="48"
            r="6"
            fill={`url(#${sparkId})`}
          />

          {/* 4. Tiny Needle-Sharp Specular Glint (Horizontal Ray) */}
          <polygon
            points="2,48 12,47.4 22,48 12,48.6"
            fill="#FFFFFF"
            className="filter drop-shadow-[0_0_1px_#FFFFFF]"
          />

          {/* 5. Tiny Needle-Sharp Specular Glint (Vertical Ray) */}
          <polygon
            points="12,39 12.6,48 12,57 11.4,48"
            fill="#FFFFFF"
            className="filter drop-shadow-[0_0_1px_#FFFFFF]"
          />

          {/* 6. Diagonal Micro-Sparks */}
          <polygon
            points="6,43 12,47.6 18,53 12,48.4"
            fill="#FFFFFF"
            fillOpacity="0.75"
          />
          <polygon
            points="18,43 12,47.6 6,53 12,48.4"
            fill="#FFFFFF"
            fillOpacity="0.75"
          />

          {/* 7. Intense Pinpoint Hotspot */}
          <circle
            cx="12"
            cy="48"
            r="1.4"
            fill="#FFFFFF"
            className="filter drop-shadow-[0_0_2px_#FFFFFF]"
          />

          {/* 8. Metallic Rim Accent on the top curve of 'o' */}
          <path
            d="M 7 48.7 Q 12 47.7 17 48.7"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeOpacity="0.85"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
