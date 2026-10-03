import React, { useState, useEffect } from 'react';
import { X, ArrowDownToLine, ShieldCheck, RotateCcw } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [rendered, setRendered] = useState(isOpen);
  const [active, setActive] = useState(false);
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');

  // Smooth mount/unmount and opening/closing animation lifecycle
  useEffect(() => {
    if (isOpen) {
      setRendered(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setActive(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setActive(false);
      const timer = setTimeout(() => {
        setRendered(false);
        setDownloadState('idle');
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close smoothly on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!rendered) return null;

  const handleStartDownload = () => {
    setDownloadState('downloading');
    const element = document.createElement("a");
    const file = new Blob([
      `Xeno Executor v2.4.1 (64-bit)\n\nOfficial Next Generation release.`
    ], { type: 'application/zip' });
    element.href = URL.createObjectURL(file);
    element.download = "Xeno-v2.4.1.zip";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => {
      setDownloadState('completed');
    }, 1200);
  };

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
      aria-labelledby="download-modal-title"
    >
      {/* Modal Container Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-[28px] p-6 sm:p-8 liquid-glass bg-[#09090D]/95 border border-white/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.95)] will-change-transform"
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
            background: 'radial-gradient(circle, rgba(140, 160, 255, 0.25), rgba(70, 90, 220, 0.1) 40%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#8A8A93] hover:text-white hover:bg-white/[0.1] active:scale-95 transition-all"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="text-xs font-mono text-[#8A8A93] tracking-widest uppercase mb-1">
            Windows 64-Bit Release
          </div>
          <h3 id="download-modal-title" className="text-2xl font-bold text-white tracking-tight">
            Download Xeno
          </h3>
          <p className="text-xs text-[#8A8A93] mt-1">
            v2.4.1 · Updated for latest Roblox client
          </p>
        </div>

        {/* Download Action Box */}
        <div className="mb-5 space-y-2.5">
          <button
            onClick={handleStartDownload}
            className="w-full py-3.5 px-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-[#EAEAEA] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            {downloadState === 'downloading' ? (
              <>
                <ArrowDownToLine className="w-4 h-4 text-black animate-bounce" />
                <span>Downloading (.zip)...</span>
              </>
            ) : downloadState === 'completed' ? (
              <>
                <RotateCcw className="w-4 h-4 text-black" />
                <span>Download again (.zip)</span>
              </>
            ) : (
              <>
                <ArrowDownToLine className="w-4 h-4 text-black" />
                <span>Download (.zip)</span>
              </>
            )}
          </button>

          {downloadState === 'completed' && (
            <p className="text-center text-xs text-[#8A8A93] animate-in fade-in duration-200">
              Download started! Didn&apos;t start automatically? Click above to retry.
            </p>
          )}
        </div>

        {/* Antivirus False Positive Notice */}
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-[#8A8A93] leading-relaxed mb-6 space-y-1.5">
          <div className="flex items-center gap-1.5 text-white/90 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Clean & Verified Software</span>
          </div>
          <p className="text-[11px] text-[#8A8A93]">
            Like all game modding & execution tools, Windows Defender may flag memory injection hooks as a false positive. You can safely add an exclusion in your security settings.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono text-[#8A8A93]">
          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <span className="text-white block font-medium mb-0.5">1. Extract</span>
            <span>Unzip folder</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <span className="text-white block font-medium mb-0.5">2. Launch</span>
            <span>Start Roblox</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <span className="text-white block font-medium mb-0.5">3. Attach</span>
            <span>Run Xeno</span>
          </div>
        </div>
      </div>
    </div>
  );
};
