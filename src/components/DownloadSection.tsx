import React from 'react';
import { ArrowDownToLine, Check, Shield } from 'lucide-react';

interface DownloadSectionProps {
  onOpenDownload: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenDownload }) => {
  return (
    <section id="download" className="py-24 px-4 max-w-4xl mx-auto">
      {/* Central Glass Monolith */}
      <div className="relative rounded-[28px] md:rounded-[36px] p-10 md:p-16 text-center liquid-glass overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/[0.1]">
        {/* Soft radial ambient sheen */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[100px] opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25), transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F7] mb-3 text-balance">
            Ready to experience Xeno?
          </h2>

          <p className="text-base sm:text-lg text-[#8A8A93] mb-8 text-balance">
            Download Xeno and get started.
          </p>

          <button
            onClick={onOpenDownload}
            className="group relative px-9 py-4 rounded-2xl bg-white text-black font-semibold text-base hover:bg-[#EAEAEA] active:scale-[0.98] transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.22)] flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white mb-6"
          >
            <ArrowDownToLine className="w-5 h-5 text-black group-hover:translate-y-0.5 transition-transform" />
            <span>Download Xeno</span>
          </button>

          {/* Subtext info */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-[#8A8A93] font-mono select-none">
            <span>Windows</span>
            <span className="text-[#5D5D66]">•</span>
            <span>Free</span>
            <span className="text-[#5D5D66]">•</span>
            <span>Latest Version</span>
          </div>

          {/* Quiet security footnote */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-center gap-2 text-xs text-[#5D5D66]">
            <Shield className="w-3.5 h-3.5 text-[#8A8A93]" />
            <span>Clean binary verified · SHA-256 integrity checked</span>
          </div>
        </div>
      </div>
    </section>
  );
};
