import React from 'react';
import { Zap, Feather, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F7] mb-3 text-balance">
          Built around simplicity.
        </h2>
        <p className="text-base sm:text-lg text-[#8A8A93] font-normal text-balance">
          Everything you need. Nothing you don't.
        </p>
      </div>

      {/* Asymmetrical 4-Card Glass Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Card 1: Fast (Spans 7 cols on desktop) */}
        <div className="md:col-span-7 rounded-[24px] md:rounded-[28px] p-7 md:p-9 liquid-glass liquid-glass-interactive relative overflow-hidden flex flex-col justify-between group">
          {/* Subtle inner ambient glow */}
          <div
            className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity"
            style={{ background: 'radial-gradient(circle, rgba(160, 180, 255, 0.4), transparent 70%)' }}
            aria-hidden="true"
          />

          <div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 text-[#F5F5F7]">
              <Zap className="w-5 h-5 text-white stroke-[2]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#F5F5F7] tracking-tight mb-2">
              Fast
            </h3>
            <p className="text-[#8A8A93] text-sm md:text-base leading-relaxed max-w-lg mb-8">
              Optimized for a smooth and responsive execution experience. Bytecode dispatch runs in microsecond windows without dropped frames.
            </p>
          </div>

          {/* Micro-Visual: Benchmark bar */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[#8A8A93]">
              <span className="flex items-center gap-1.5 text-[#F5F5F7]">
                <span>Xeno Luau JIT Engine</span>
              </span>
              <span className="text-emerald-400 font-medium">0.38 ms</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-white via-indigo-200 to-emerald-400 rounded-full w-[8%] shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#5D5D66] pt-1">
              <span>Standard Script Exec</span>
              <span className="text-[#8A8A93]">14.20 ms</span>
            </div>
          </div>
        </div>

        {/* Card 2: Lightweight (Spans 5 cols on desktop) */}
        <div className="md:col-span-5 rounded-[24px] md:rounded-[28px] p-7 md:p-9 liquid-glass liquid-glass-interactive relative overflow-hidden flex flex-col justify-between group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 text-[#F5F5F7]">
              <Feather className="w-5 h-5 text-white stroke-[2]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#F5F5F7] tracking-tight mb-2">
              Lightweight
            </h3>
            <p className="text-[#8A8A93] text-sm leading-relaxed mb-6">
              Minimal resource usage with a clean and efficient architecture. Zero idle CPU cycles and an ultra-lean memory footprint.
            </p>
          </div>

          {/* Micro-visual: RAM footprint badge */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-[11px] font-mono text-[#5D5D66]">RAM FOOTPRINT</div>
              <div className="text-2xl font-semibold font-mono text-white tracking-tight">
                &lt; 18 <span className="text-xs text-[#8A8A93] font-normal">MB</span>
              </div>
            </div>
            <div className="text-right text-xs font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Optimized</span>
            </div>
          </div>
        </div>

        {/* Card 3: Simple (Spans 5 cols on desktop) */}
        <div className="md:col-span-5 rounded-[24px] md:rounded-[28px] p-7 md:p-9 liquid-glass liquid-glass-interactive relative overflow-hidden flex flex-col justify-between group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 text-[#F5F5F7]">
              <Compass className="w-5 h-5 text-white stroke-[2]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#F5F5F7] tracking-tight mb-2">
              Simple
            </h3>
            <p className="text-[#8A8A93] text-sm leading-relaxed mb-6">
              A straightforward interface designed to stay out of your way. Paste, attach, and execute with single-click certainty.
            </p>
          </div>

          {/* Micro-visual: Minimalist Step Row */}
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs flex items-center justify-between text-[#8A8A93]">
            <span className="text-white">Paste</span>
            <span className="text-[#5D5D66]">→</span>
            <span className="text-white">Attach</span>
            <span className="text-[#5D5D66]">→</span>
            <span className="text-emerald-400">Run</span>
          </div>
        </div>

        {/* Card 4: Modern (Spans 7 cols on desktop) */}
        <div className="md:col-span-7 rounded-[24px] md:rounded-[28px] p-7 md:p-9 liquid-glass liquid-glass-interactive relative overflow-hidden flex flex-col justify-between group">
          {/* Subtle glow */}
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 w-60 h-60 rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity"
            style={{ background: 'radial-gradient(circle, rgba(200, 210, 255, 0.4), transparent 70%)' }}
            aria-hidden="true"
          />

          <div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 text-[#F5F5F7]">
              <Sparkles className="w-5 h-5 text-white stroke-[2]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#F5F5F7] tracking-tight mb-2">
              Modern
            </h3>
            <p className="text-[#8A8A93] text-sm md:text-base leading-relaxed max-w-lg mb-8">
              A polished experience built with a modern visual system. Native 64-bit client hooks, high DPI scaling, and dark glass elegance.
            </p>
          </div>

          {/* Micro-visual: Architecture tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]">
              x64 Memory Space
            </span>
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]">
              Hardware DPI Aware
            </span>
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]">
              Silent Synchronization
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
