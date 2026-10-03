import React, { useState, useRef, useEffect } from 'react';
import {
  LayoutGrid,
  Code2,
  Bookmark,
  Users,
  Settings,
  ChevronLeft,
  Minus,
  Maximize2,
  X,
  Play,
  Trash2,
  Power,
  Save,
  FolderOpen,
  Link as LinkIcon,
} from 'lucide-react';
import { UfoIcon } from './UfoIcon';

export const ProductMockup: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDirectHover, setIsDirectHover] = useState(false);
  const [isNearby, setIsNearby] = useState(false);

  // Global smooth mouse tracking with proximity detection for weak nearby tilt
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cursorX = e.clientX;
      const cursorY = e.clientY;

      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Check if cursor is directly on the card
      const insideCard =
        cursorX >= rect.left &&
        cursorX <= rect.right &&
        cursorY >= rect.top &&
        cursorY <= rect.bottom;

      // Distance from card edge
      const dx = Math.max(rect.left - cursorX, 0, cursorX - rect.right);
      const dy = Math.max(rect.top - cursorY, 0, cursorY - rect.bottom);
      const distFromCard = Math.sqrt(dx * dx + dy * dy);

      const halfW = rect.width / 2;
      const halfH = rect.height / 2;
      const MAX_TILT = 3.6; // Gentle, restrained maximum tilt angle
      const proximityRadius = 400; // Distance in pixels to trigger gentle tilt

      // Relative coordinates on card for spotlight
      setMousePos({
        x: cursorX - rect.left,
        y: cursorY - rect.top,
      });

      if (insideCard) {
        setIsDirectHover(true);
        setIsNearby(true);

        // Smooth normalized offset from center (0 at center, ±1 at edges)
        const normX = (cursorX - cardCenterX) / halfW;
        const normY = (cursorY - cardCenterY) / halfH;

        setTilt({
          rotateX: -normY * MAX_TILT,
          rotateY: normX * MAX_TILT,
          scale: 1.008,
        });
      } else if (distFromCard < proximityRadius) {
        setIsDirectHover(false);
        setIsNearby(true);

        // Smooth decay from 1.0 at card edge to 0 at proximityRadius
        const falloff = Math.max(0, 1 - distFromCard / proximityRadius);
        const smoothFalloff = falloff * falloff;

        // Normalized direction continuous with edge value
        const dirX = Math.sign(cursorX - cardCenterX) * Math.min(1, Math.abs(cursorX - cardCenterX) / halfW);
        const dirY = Math.sign(cursorY - cardCenterY) * Math.min(1, Math.abs(cursorY - cardCenterY) / halfH);

        setTilt({
          rotateX: -dirY * MAX_TILT * smoothFalloff,
          rotateY: dirX * MAX_TILT * smoothFalloff,
          scale: 1 + 0.003 * smoothFalloff,
        });
      } else {
        setIsDirectHover(false);
        setIsNearby(false);
        setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsDirectHover(false);
      setIsNearby(false);
      setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, []);

  // Tabs matching the exact screenshot
  const tabs = [
    { name: 'Infinite Yield', active: true },
    { name: 'Sirius', active: false },
    { name: 'Visualizer', active: false },
    { name: 'UNC Check', active: false },
    { name: 'WebSocket', active: false },
    { name: 'Prototype', active: false },
    { name: 'Flin...', active: false },
  ];

  return (
    <section className="relative px-3 sm:px-6 max-w-6xl mx-auto -mt-2 pb-24 [perspective:1400px]">
      {/* Interactive 3D Tilt Card Wrapper */}
      <div
        ref={cardRef}
        className="relative mx-auto rounded-[20px] transition-transform will-change-transform [transform-style:preserve-3d] cursor-default"
        style={{
          transform: `perspective(1400px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) scale3d(${tilt.scale.toFixed(3)}, ${tilt.scale.toFixed(3)}, ${tilt.scale.toFixed(3)})`,
          transition: (isDirectHover || isNearby)
            ? 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
            : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Dynamic Trailing Light Spot behind the card (ambient depth glow) */}
        <div
          className="pointer-events-none absolute -inset-6 rounded-[32px] blur-3xl transition-opacity duration-500"
          style={{
            opacity: isDirectHover ? 0.4 : isNearby ? 0.16 : 0.06,
            background: (isDirectHover || isNearby)
              ? `radial-gradient(330px circle at ${mousePos.x}px ${mousePos.y}px, rgba(120, 150, 255, 0.15), rgba(80, 110, 240, 0.06) 30%, transparent 65%)`
              : 'radial-gradient(ellipse at 50% 20%, rgba(110, 130, 255, 0.08), transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Dynamic Specular Border Glow following the mouse */}
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-[21px] transition-opacity duration-500 z-30"
          style={{
            opacity: isDirectHover ? 0.6 : 0,
            background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03) 40%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Window Container strictly reproducing the attached photo */}
        <div className="relative rounded-[20px] overflow-hidden border border-white/[0.12] bg-[#000000] shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col select-none">
          
          {/* Surface Light Sheen overlay that follows the mouse across the window */}
          <div
            className="pointer-events-none absolute inset-0 z-40 transition-opacity duration-500 mix-blend-screen"
            style={{
              opacity: isDirectHover ? 0.65 : 0,
              background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.04), rgba(160, 190, 255, 0.015) 25%, transparent 55%)`,
            }}
            aria-hidden="true"
          />

          {/* Window Frame: Sidebar + Main Area */}
          <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[530px]">
            
            {/* ================= LEFT SIDEBAR ================= */}
            <aside className="w-full md:w-[200px] shrink-0 border-b md:border-b-0 md:border-r border-[#1C1C22] bg-[#000000] flex flex-col justify-between py-1">
              <div>
                {/* Header: Logo + Xeno text + collapse chevron */}
                <div className="h-14 px-4 flex items-center justify-between border-b border-[#141418]">
                  <div className="flex items-center gap-2.5">
                    <UfoIcon className="w-6 h-6 text-white" />
                    <span className="font-semibold text-base tracking-tight text-white">
                      Xeno
                    </span>
                  </div>
                  <div className="text-[#8E8E98] p-1">
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                </div>

                {/* Sidebar Navigation */}
                <nav className="p-2 space-y-1">
                  {/* Dashboard */}
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-normal text-[#8E8E98]">
                    <LayoutGrid className="w-4 h-4 shrink-0" />
                    <span>Dashboard</span>
                  </div>

                  {/* Executor (ACTIVE - White, Code icon, highlight) */}
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-white bg-white/[0.04] relative">
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-white rounded-r" />
                    <Code2 className="w-4 h-4 shrink-0 text-white" />
                    <span>Executor</span>
                  </div>

                  {/* Scripthub */}
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-normal text-[#8E8E98]">
                    <Bookmark className="w-4 h-4 shrink-0" />
                    <span>Scripthub</span>
                  </div>

                  {/* Client Manager (with green '1' badge) */}
                  <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-normal text-[#8E8E98]">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Users className="w-4 h-4 shrink-0" />
                      </div>
                      <span>Client Manager</span>
                    </div>
                    {/* Green circular badge with '1' */}
                    <span className="w-4 h-4 rounded-full bg-[#10B981] text-black text-[10px] font-bold flex items-center justify-center">
                      1
                    </span>
                  </div>

                  {/* Settings */}
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-normal text-[#8E8E98]">
                    <Settings className="w-4 h-4 shrink-0" />
                    <span>Settings</span>
                  </div>
                </nav>
              </div>
            </aside>

            {/* ================= RIGHT WORKSPACE ================= */}
            <div className="flex-1 flex flex-col bg-[#050507] overflow-hidden">
              
              {/* Top Titlebar Row: Tabs + Window Controls */}
              <div className="h-14 px-3 sm:px-4 bg-[#0A0A0C] border-b border-[#1A1A20] flex items-center justify-between gap-2 overflow-x-auto">
                {/* Horizontal Script Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
                  {tabs.map((tab) => (
                    <div
                      key={tab.name}
                      className={`h-9 px-3.5 rounded-lg flex items-center gap-2.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors border ${
                        tab.active
                          ? 'bg-[#121217] border-white/20 text-white shadow-sm'
                          : 'bg-[#0E0E12] border-white/[0.08] text-[#8E8E98]'
                      }`}
                    >
                      <span>{tab.name}</span>
                      <X className="w-3 h-3 text-[#5A5A66]" />
                    </div>
                  ))}
                </div>

                {/* Window Top-Right Controls: - ⤢ ✕ */}
                <div className="flex items-center gap-3.5 shrink-0 pl-3 text-[#8E8E98]">
                  <Minus className="w-3.5 h-3.5" />
                  <Maximize2 className="w-3.5 h-3.5" />
                  <X className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Sub-toolbar: Execute, Clear, Kill Roblox, Save, Open, Attach */}
              <div className="px-3 sm:px-4 py-2.5 bg-[#07070A] border-b border-[#16161C] flex items-center gap-2 overflow-x-auto">
                {/* 1. Execute */}
                <div className="h-8 px-3.5 rounded-lg border border-white/[0.14] bg-[#121216] text-xs font-medium text-white flex items-center gap-2 shrink-0">
                  <Play className="w-3.5 h-3.5 fill-current text-white" />
                  <span>Execute</span>
                </div>

                {/* 2. Clear */}
                <div className="h-8 px-3 rounded-lg border border-white/[0.08] bg-[#0E0E12] text-xs text-[#9E9EA8] flex items-center gap-1.5 shrink-0">
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </div>

                {/* 3. Kill Roblox */}
                <div className="h-8 px-3 rounded-lg border border-white/[0.08] bg-[#0E0E12] text-xs text-[#9E9EA8] flex items-center gap-1.5 shrink-0">
                  <Power className="w-3.5 h-3.5" />
                  <span>Kill Roblox</span>
                </div>

                {/* 4. Save */}
                <div className="h-8 px-3 rounded-lg border border-white/[0.08] bg-[#0E0E12] text-xs text-[#9E9EA8] flex items-center gap-1.5 shrink-0">
                  <Save className="w-3.5 h-3.5" />
                  <span>Save</span>
                </div>

                {/* 5. Open */}
                <div className="h-8 px-3 rounded-lg border border-white/[0.08] bg-[#0E0E12] text-xs text-[#9E9EA8] flex items-center gap-1.5 shrink-0">
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span>Open</span>
                </div>

                {/* 6. Attach */}
                <div className="h-8 px-3 rounded-lg border border-white/[0.08] bg-[#0E0E12] text-xs text-[#9E9EA8] flex items-center gap-1.5 shrink-0">
                  <LinkIcon className="w-3.5 h-3.5" />
                  <span>Attach</span>
                </div>
              </div>

              {/* Code Editor Body + Minimap */}
              <div className="flex-1 flex overflow-hidden bg-[#030305]">
                {/* Code Lines with line numbers exactly as in the photo */}
                <div className="flex-1 p-3 sm:p-5 overflow-y-auto max-h-[390px] font-mono text-[13px] leading-6 select-none">
                  {/* Line 1 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">1</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      <span className="text-[#569CD6]">if </span>
                      <span className="text-[#9CDCFE]">IY_LOADED </span>
                      <span className="text-[#569CD6]">and not </span>
                      <span className="text-[#4FC1FF]">_G.IY_DEBUG </span>
                      <span>== </span>
                      <span className="text-[#569CD6]">true </span>
                      <span className="text-[#569CD6]">then</span>
                    </span>
                  </div>

                  {/* Line 2 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">2</span>
                    <span className="flex-1 whitespace-pre text-[#6A9955] italic">
                      {'    -- error("Infinite Yield is already running!", 0)'}
                    </span>
                  </div>

                  {/* Line 3 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">3</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      {'    '}<span className="text-[#569CD6]">return</span>
                    </span>
                  </div>

                  {/* Line 4 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">4</span>
                    <span className="flex-1 whitespace-pre text-[#569CD6]">end</span>
                  </div>

                  {/* Line 5 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">5</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">&nbsp;</span>
                  </div>

                  {/* Line 6 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">6</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      <span className="text-[#DCDCAA]">pcall</span>(<span className="text-[#569CD6]">function</span>() <span className="text-[#DCDCAA]">getgenv</span>().<span className="text-[#9CDCFE]">IY_LOADED</span> = <span className="text-[#569CD6]">true</span> <span className="text-[#569CD6]">end</span>)
                    </span>
                  </div>

                  {/* Line 7 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">7</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      <span className="text-[#569CD6]">if not </span><span className="text-[#9CDCFE]">game</span>:<span className="text-[#DCDCAA]">IsLoaded</span>() <span className="text-[#569CD6]">then </span><span className="text-[#9CDCFE]">game</span>.<span className="text-[#9CDCFE]">Loaded</span>:<span className="text-[#DCDCAA]">Wait</span>() <span className="text-[#569CD6]">end</span>
                    </span>
                  </div>

                  {/* Line 8 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">8</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">&nbsp;</span>
                  </div>

                  {/* Line 9 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">9</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      <span className="text-[#569CD6]">function </span><span className="text-[#DCDCAA]">missing</span>(<span className="text-[#9CDCFE]">t</span>, <span className="text-[#9CDCFE]">f</span>, <span className="text-[#9CDCFE]">fallback</span>)
                    </span>
                  </div>

                  {/* Line 10 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">10</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      {'    '}<span className="text-[#569CD6]">if </span><span className="text-[#DCDCAA]">type</span>(<span className="text-[#9CDCFE]">f</span>) == <span className="text-[#9CDCFE]">t </span><span className="text-[#569CD6]">then return </span><span className="text-[#9CDCFE]">f </span><span className="text-[#569CD6]">end</span>
                    </span>
                  </div>

                  {/* Line 11 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">11</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      {'    '}<span className="text-[#569CD6]">return </span><span className="text-[#9CDCFE]">fallback</span>
                    </span>
                  </div>

                  {/* Line 12 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">12</span>
                    <span className="flex-1 whitespace-pre text-[#569CD6]">end</span>
                  </div>

                  {/* Line 13 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">13</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">&nbsp;</span>
                  </div>

                  {/* Line 14 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">14</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      <span className="text-[#9CDCFE]">cloneref </span>= <span className="text-[#DCDCAA]">missing</span>(<span className="text-[#CE9178]">"function"</span>, <span className="text-[#9CDCFE]">cloneref</span>, <span className="text-[#569CD6]">function</span>(...) <span className="text-[#569CD6]">return </span>... <span className="text-[#569CD6]">end</span>)
                    </span>
                  </div>

                  {/* Line 15 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">15</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      <span className="text-[#9CDCFE]">sethidden </span>= <span className="text-[#DCDCAA]">missing</span>(<span className="text-[#CE9178]">"function"</span>, <span className="text-[#9CDCFE]">sethiddenproperty </span><span className="text-[#569CD6]">or </span><span className="text-[#9CDCFE]">set_hidden_property </span><span className="text-[#569CD6]">or </span><span className="text-[#9CDCFE]">set_hidden_prop</span>)
                    </span>
                  </div>

                  {/* Line 16 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">16</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      <span className="text-[#9CDCFE]">gethidden </span>= <span className="text-[#DCDCAA]">missing</span>(<span className="text-[#CE9178]">"function"</span>, <span className="text-[#9CDCFE]">gethiddenproperty </span><span className="text-[#569CD6]">or </span><span className="text-[#9CDCFE]">get_hidden_property </span><span className="text-[#569CD6]">or </span><span className="text-[#9CDCFE]">get_hidden_prop</span>)
                    </span>
                  </div>

                  {/* Line 17 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">17</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      <span className="text-[#9CDCFE]">queueteleport </span>= <span className="text-[#DCDCAA]">missing</span>(<span className="text-[#CE9178]">"function"</span>, <span className="text-[#9CDCFE]">queue_on_teleport </span><span className="text-[#569CD6]">or </span>(<span className="text-[#9CDCFE]">syn </span><span className="text-[#569CD6]">and </span><span className="text-[#9CDCFE]">syn</span>.<span className="text-[#9CDCFE]">queue_on_teleport</span>) <span className="text-[#569CD6]">or</span>
                    </span>
                  </div>

                  {/* Line 18 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">18</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      <span className="text-[#9CDCFE]">httprequest </span>= <span className="text-[#DCDCAA]">missing</span>(<span className="text-[#CE9178]">"function"</span>, <span className="text-[#9CDCFE]">request </span><span className="text-[#569CD6]">or </span><span className="text-[#9CDCFE]">http_request </span><span className="text-[#569CD6]">or </span>(<span className="text-[#9CDCFE]">syn </span><span className="text-[#569CD6]">and </span><span className="text-[#9CDCFE]">syn</span>.<span className="text-[#9CDCFE]">request</span>) <span className="text-[#569CD6]">or </span>(<span className="text-[#9CDCFE]">http</span>
                    </span>
                  </div>

                  {/* Line 19 */}
                  <div className="flex">
                    <span className="w-8 select-none text-right pr-4 text-[#52525E] text-xs tabular-nums">19</span>
                    <span className="flex-1 whitespace-pre text-[#D4D4D8]">
                      <span className="text-[#9CDCFE]">everyClipboard </span>= <span className="text-[#DCDCAA]">missing</span>(<span className="text-[#CE9178]">"function"</span>, <span className="text-[#9CDCFE]">setclipboard </span><span className="text-[#569CD6]">or </span><span className="text-[#9CDCFE]">toclipboard </span><span className="text-[#569CD6]">or </span><span className="text-[#9CDCFE]">set_clipboard </span><span className="text-[#569CD6]">or </span>(<span className="text-[#9CDCFE]">Clipboa</span>
                    </span>
                  </div>
                </div>

                {/* Minimap (Right side) */}
                <div
                  className="hidden sm:block w-20 shrink-0 border-l border-[#1A1A22] bg-[#07070A] p-2 relative overflow-hidden select-none pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="space-y-[3px] opacity-70">
                    <div className="h-[2px] w-12 bg-[#569CD6]/70 rounded" />
                    <div className="h-[2px] w-14 bg-[#6A9955]/80 rounded ml-2" />
                    <div className="h-[2px] w-6 bg-[#569CD6]/70 rounded ml-2" />
                    <div className="h-[2px] w-5 bg-[#569CD6]/70 rounded" />
                    <div className="h-[2px] w-0 my-1" />
                    <div className="h-[2px] w-16 bg-[#DCDCAA]/80 rounded" />
                    <div className="h-[2px] w-14 bg-[#569CD6]/70 rounded" />
                    <div className="h-[2px] w-0 my-1" />
                    <div className="h-[2px] w-10 bg-[#569CD6]/70 rounded" />
                    <div className="h-[2px] w-12 bg-[#569CD6]/70 rounded ml-2" />
                    <div className="h-[2px] w-8 bg-[#569CD6]/70 rounded ml-2" />
                    <div className="h-[2px] w-4 bg-[#569CD6]/70 rounded" />
                    <div className="h-[2px] w-0 my-1" />
                    <div className="h-[2px] w-15 bg-[#DCDCAA]/70 rounded" />
                    <div className="h-[2px] w-16 bg-[#DCDCAA]/70 rounded" />
                    <div className="h-[2px] w-16 bg-[#DCDCAA]/70 rounded" />
                    <div className="h-[2px] w-14 bg-[#DCDCAA]/70 rounded" />
                    <div className="h-[2px] w-14 bg-[#DCDCAA]/70 rounded" />
                    <div className="h-[2px] w-15 bg-[#DCDCAA]/70 rounded" />
                    <div className="h-[2px] w-11 bg-[#DCDCAA]/70 rounded" />
                    <div className="h-[2px] w-13 bg-[#DCDCAA]/70 rounded" />
                  </div>

                  {/* Viewport Box */}
                  <div className="absolute top-1.5 inset-x-1 h-24 bg-white/[0.05] border border-white/20 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
