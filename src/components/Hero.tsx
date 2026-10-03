import React, { useState } from 'react';
import { ArrowDownToLine } from 'lucide-react';
import { UfoIcon } from './UfoIcon';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const [isUfoHovered, setIsUfoHovered] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleUfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRotationAngle((prev) => prev + 360);
  };
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 text-center overflow-hidden"
    >
      {/* Subtle Liquid Glass Ambient Glow (pure CSS, ultra-restrained) */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(160, 180, 255, 0.18), rgba(90, 80, 220, 0.08), transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle secondary ambient reflection */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[350px] rounded-[100%] blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Kicker label */}
        <div className="mb-6 flex items-center gap-2 text-xs md:text-sm font-mono tracking-[0.28em] text-[#8A8A93] uppercase select-none">
          <span>Xeno</span>
          <span className="text-white/30">•</span>
          <span>Next Generation</span>
        </div>

        {/* Brand Title with Xeno wordmark and integrated superscript planet icon */}
        <div className="relative flex justify-center items-center mb-6 select-none">
          <div className="relative inline-flex items-center justify-center cursor-default">
            {/* Exactly centered Xeno wordmark */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F0F0F3] to-[#7B7B88] drop-shadow-sm text-center">
              Xeno
            </h1>

            {/* Planet icon strictly bounded to its icon size */}
            <div
              className="absolute -top-1 sm:-top-1.5 md:-top-2 lg:-top-3 -right-3.5 sm:-right-4 md:-right-6 lg:-right-8 -translate-y-1/4 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-11 lg:h-11 rounded-full pointer-events-auto cursor-pointer z-20"
              onMouseEnter={() => setIsUfoHovered(true)}
              onMouseLeave={() => setIsUfoHovered(false)}
              onClick={handleUfoClick}
              role="button"
              tabIndex={0}
              aria-label="Xeno UFO emblem"
            >
              {/* Subtle soft white glow */}
              <div
                className={`pointer-events-none absolute -inset-1 rounded-full blur-md transition-all duration-300 ${
                  isUfoHovered ? 'opacity-85 scale-120' : 'opacity-40 scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(160, 180, 255, 0.3) 50%, transparent 75%)',
                }}
                aria-hidden="true"
              />
              <div
                className="transition-all ease-out will-change-transform"
                style={{
                  transform: `rotate(${rotationAngle + (isUfoHovered ? 12 : 0)}deg) scale(${isUfoHovered ? 1.2 : 1.0})`,
                  transition: 'transform 0.75s cubic-bezier(0.34, 1.4, 0.64, 1), filter 0.3s ease',
                  filter: isUfoHovered
                    ? 'drop-shadow(0 4px 18px rgba(255,255,255,0.6))'
                    : 'drop-shadow(0 2px 10px rgba(255,255,255,0.25))',
                }}
              >
                <UfoIcon
                  gradient
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-11 lg:h-11"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Premium Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#F5F5F7] max-w-2xl mb-4 text-balance">
          A new standard for Roblox execution.
        </p>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#8A8A93] max-w-xl mb-10 leading-relaxed text-balance font-normal">
          A fast, lightweight and modern execution experience built with simplicity in mind.
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center w-full sm:w-auto">
          {/* Primary Action Button */}
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto group relative px-8 py-3.5 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-[#EAEAEA] transition-all duration-200 shadow-[0_0_24px_rgba(255,255,255,0.18)] flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowDownToLine className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
            <span>Download Xeno</span>
          </button>
        </div>

        {/* Metadata info line */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-[#5D5D66] font-mono">
          <span>Windows 10 / 11 (64-bit)</span>
          <span aria-hidden="true">·</span>
          <span>Zero Keys</span>
          <span aria-hidden="true">·</span>
          <span>Free Forever</span>
        </div>
      </div>
    </section>
  );
};
