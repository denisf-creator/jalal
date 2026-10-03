import React, { useId } from 'react';

interface UfoIconProps {
  className?: string;
  gradient?: boolean;
}

export const UfoIcon: React.FC<UfoIconProps> = ({ className = 'w-5 h-5 text-white', gradient = false }) => {
  const maskId = useId();
  const gradId = useId();

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill={gradient ? `url(#${gradId})` : 'currentColor'}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Xeno UFO Logo"
    >
      <defs>
        {gradient && (
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#F5F5F7" />
            <stop offset="100%" stopColor="#8A8A96" />
          </linearGradient>
        )}
      </defs>
      <mask id={maskId}>
        {/* Visible Base */}
        <rect width="100" height="100" fill="white" />

        {/* Tilted Cutouts matching the uploaded icon */}
        <g transform="rotate(24 50 50)">
          {/* Black cutout between dome and saucer */}
          <path
            d="M 28 44 C 36 54, 64 54, 72 44"
            fill="none"
            stroke="black"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Three circular portholes */}
          <circle cx="21" cy="49" r="5" fill="black" />
          <circle cx="50" cy="57" r="5.2" fill="black" />
          <circle cx="79" cy="49" r="5" fill="black" />
        </g>
      </mask>

      {/* Rendered Saucer with Cutout Mask */}
      <g mask={`url(#${maskId})`}>
        <g transform="rotate(24 50 50)">
          {/* Upper Dome */}
          <path
            d="M 29 45 C 29 18, 71 18, 71 45 Z"
            fill="currentColor"
          />

          {/* Oval Saucer Disk */}
          <path
            d="M 10 49 C 10 33, 90 33, 90 49 C 90 67, 10 67, 10 49 Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
};
