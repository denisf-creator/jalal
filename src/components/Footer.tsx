import React from 'react';
import { UfoIcon } from './UfoIcon';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="mt-20 border-t border-white/[0.08] bg-[#030305]/80 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-white">
              <UfoIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-[#F5F5F7]">
              Xeno
            </span>
          </div>
          <span className="text-xs text-[#5D5D66]">
            © 2026 Xeno. All rights reserved.
          </span>
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-6 text-xs text-[#8A8A93]">
          <button
            onClick={onOpenTerms}
            className="hover:text-white transition-colors focus-visible:outline-none"
          >
            Terms
          </button>
          <button
            onClick={onOpenPrivacy}
            className="hover:text-white transition-colors focus-visible:outline-none"
          >
            Privacy
          </button>
        </div>
      </div>
    </footer>
  );
};
