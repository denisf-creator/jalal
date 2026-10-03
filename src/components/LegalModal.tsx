import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [renderedType, setRenderedType] = useState<'terms' | 'privacy' | null>(type);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (type) {
      setRenderedType(type);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setActive(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setActive(false);
      const timer = setTimeout(() => {
        setRenderedType(null);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [type]);

  // Close smoothly on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && type) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!renderedType) return null;

  const isTerms = renderedType === 'terms';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-350 ease-out"
      style={{
        backgroundColor: active ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: active ? 'blur(16px)' : 'blur(0px)',
        WebkitBackdropFilter: active ? 'blur(16px)' : 'blur(0px)',
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-[28px] p-6 sm:p-7 liquid-glass bg-[#09090D]/95 border border-white/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.95)] will-change-transform overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{
          transform: active ? 'scale(1) translateY(0px)' : 'scale(0.92) translateY(24px)',
          opacity: active ? 1 : 0,
          transition: active
            ? 'transform 0.44s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.36s cubic-bezier(0.16, 1, 0.3, 1)'
            : 'transform 0.25s cubic-bezier(0.4, 0, 1, 1), opacity 0.22s ease-in',
        }}
      >
        {/* Soft Ambient Depth Glow behind the modal */}
        <div
          className="pointer-events-none absolute -inset-8 rounded-[36px] blur-3xl transition-opacity duration-700"
          style={{
            opacity: active ? 0.35 : 0,
            background: 'radial-gradient(circle, rgba(140, 160, 255, 0.22), rgba(70, 90, 220, 0.08) 40%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#8A8A93] hover:text-white hover:bg-white/[0.1] active:scale-95 transition-all"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 id="legal-modal-title" className="text-2xl font-bold text-white mb-1.5 tracking-tight">
          {isTerms ? 'Terms of Service' : 'Privacy Policy'}
        </h3>
        <div className="text-xs font-mono text-[#5D5D66] mb-5">
          Last updated: January 2026
        </div>

        <div className="text-xs sm:text-sm text-[#8A8A93] space-y-3 leading-relaxed">
          {isTerms ? (
            <>
              <p>
                By downloading or utilizing Xeno (&ldquo;the Software&rdquo;), you acknowledge and agree to comply with the terms set forth herein.
              </p>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                <span className="text-xs font-semibold text-white block">1. Educational Scope</span>
                <p className="text-[12px] text-[#8A8A93]">
                  Xeno is intended strictly for educational purposes, software reverse engineering analysis, and Luau script testing in authorized environments.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                <span className="text-xs font-semibold text-white block">2. Disclaimer & Liability</span>
                <p className="text-[12px] text-[#8A8A93]">
                  The Software is provided &ldquo;as is&rdquo; without warranty. Users assume full responsibility for observing third-party platform terms and policies.
                </p>
              </div>
            </>
          ) : (
            <>
              <p>
                Your privacy is paramount. Xeno is built from the ground up with a strict zero-telemetry architecture.
              </p>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                <span className="text-xs font-semibold text-white block">1. Zero Telemetry & Data Collection</span>
                <p className="text-[12px] text-[#8A8A93]">
                  Xeno does not track, collect, store, or transmit any personally identifiable information, hardware IDs, or script contents.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                <span className="text-xs font-semibold text-white block">2. Local Storage Only</span>
                <p className="text-[12px] text-[#8A8A93]">
                  All configurations, script files, and preferences are stored exclusively on your local machine and never leave your computer.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-black bg-white rounded-xl hover:bg-[#EAEAEA] active:scale-95 transition-all"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
