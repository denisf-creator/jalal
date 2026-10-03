import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, Menu, X } from 'lucide-react';
import { UfoIcon } from './UfoIcon';

interface HeaderProps {
  onOpenDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-50 transition-all duration-300">
      <div
        className={`w-full h-14 px-4 sm:px-6 rounded-2xl flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-[#08080C]/80 backdrop-blur-2xl border border-white/[0.12] shadow-[0_12px_32px_rgba(0,0,0,0.6)]'
            : 'bg-white/[0.035] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Left: Brand / Logo */}
        <div className="flex items-center justify-start flex-1">
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white focus-visible:outline-none group"
            aria-label="Xeno Home"
          >
            {/* Minimalist UFO logomark */}
            <div className="flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <UfoIcon className="w-7 h-7 text-white" />
            </div>
            <span className="font-semibold text-base tracking-tight text-[#F5F5F7]">
              Xeno
            </span>
          </a>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-[#8A8A93] flex-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#F5F5F7] transition-colors relative py-1 text-center"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center justify-end gap-3 flex-1">
          <button
            onClick={onOpenDownload}
            className="text-xs font-semibold text-black bg-[#F5F5F7] hover:bg-white px-3.5 py-1.5 rounded-lg shadow-sm hover:shadow-[0_0_16px_rgba(255,255,255,0.2)] transition-all flex items-center gap-1.5"
          >
            <ArrowDownToLine className="w-3.5 h-3.5 text-black" />
            <span>Download</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#8A8A93] hover:text-[#F5F5F7] p-1.5 rounded-lg focus-visible:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#08080C]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#8A8A93] hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-white/[0.08] my-1" />
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDownload();
            }}
            className="w-full text-center text-xs font-semibold text-black bg-white hover:bg-[#EAEAEA] py-2.5 rounded-lg flex items-center justify-center gap-2"
          >
            <ArrowDownToLine className="w-3.5 h-3.5 text-black" />
            <span>Download</span>
          </button>
        </div>
      )}
    </header>
  );
};
