import React from 'react';
import { Gauge, SlidersHorizontal, Cpu, ShieldCheck, RefreshCw } from 'lucide-react';

export const BentoSection: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-mono text-[#8A8A93] tracking-[0.2em] uppercase mb-2">
          Engineering Highlights
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F7] mb-3">
          Engineered for precision.
        </h2>
        <p className="text-sm sm:text-base text-[#8A8A93] max-w-xl">
          Every layer of Xeno is built from scratch with modern systems engineering standards.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
        {/* Bento 1: Performance (8 columns on lg) */}
        <div className="sm:col-span-2 lg:col-span-8 rounded-[24px] md:rounded-[28px] p-7 md:p-8 liquid-glass liquid-glass-interactive relative overflow-hidden flex flex-col justify-between min-h-[280px]">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
              <Gauge className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-mono text-[#8A8A93]">
              0.38ms compilation
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[#F5F5F7] mb-2 tracking-tight">
              Performance
            </h3>
            <p className="text-sm md:text-base text-[#8A8A93] leading-relaxed max-w-xl">
              Instantaneous script execution via direct bytecode dispatch. Hardware acceleration guarantees zero frame drops or in-game stuttering during intense physics interactions.
            </p>
          </div>

          {/* Micro telemetry bar */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#5D5D66]">
            <span>Latency: &lt; 1ms</span>
            <span className="text-emerald-400">Stable 144+ FPS</span>
          </div>
        </div>

        {/* Bento 2: Clean Interface (4 columns on lg) */}
        <div className="sm:col-span-1 lg:col-span-4 rounded-[24px] md:rounded-[28px] p-7 md:p-8 liquid-glass liquid-glass-interactive relative overflow-hidden flex flex-col justify-between min-h-[280px]">
          <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#F5F5F7] mb-2 tracking-tight">
              Clean Interface
            </h3>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Distraction-free environment. No third-party advertisements, no key checkpoints, and no deceptive link shorteners.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#5D5D66]">
            100% Ad-Free Experience
          </div>
        </div>

        {/* Bento 3: Lightweight (4 columns on lg) */}
        <div className="sm:col-span-1 lg:col-span-4 rounded-[24px] md:rounded-[28px] p-7 md:p-8 liquid-glass liquid-glass-interactive relative overflow-hidden flex flex-col justify-between min-h-[260px]">
          <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
            <Cpu className="w-5 h-5 text-white" />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#F5F5F7] mb-2 tracking-tight">
              Lightweight
            </h3>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Written in modern C++ with an ultra-lean memory footprint below 18 megabytes. Your system resources stay where they belong: in your game.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#5D5D66]">
            Zero Background Telemetry
          </div>
        </div>

        {/* Bento 4: Modern Architecture (4 columns on lg) */}
        <div className="sm:col-span-1 lg:col-span-4 rounded-[24px] md:rounded-[28px] p-7 md:p-8 liquid-glass liquid-glass-interactive relative overflow-hidden flex flex-col justify-between min-h-[260px]">
          <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#F5F5F7] mb-2 tracking-tight">
              Modern Architecture
            </h3>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Engineered natively for 64-bit client memory spaces. Features automated integrity verification and graceful error isolation.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#5D5D66]">
            Isolated Thread Sandbox
          </div>
        </div>

        {/* Bento 5: Updates (4 columns on lg) */}
        <div className="sm:col-span-1 lg:col-span-4 rounded-[24px] md:rounded-[28px] p-7 md:p-8 liquid-glass liquid-glass-interactive relative overflow-hidden flex flex-col justify-between min-h-[260px]">
          <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
            <RefreshCw className="w-5 h-5 text-white" />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#F5F5F7] mb-2 tracking-tight">
              Silent Updates
            </h3>
            <p className="text-sm text-[#8A8A93] leading-relaxed">
              Cloud offset synchronization detects and updates client memory hooks automatically without requiring manual software re-downloads.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#5D5D66]">
            Continuous Compatibility
          </div>
        </div>
      </div>
    </section>
  );
};
