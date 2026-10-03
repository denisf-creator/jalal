/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductMockup } from './components/ProductMockup';
import { BentoSection } from './components/BentoSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  const handleOpenDownload = () => setDownloadModalOpen(true);
  const handleCloseDownload = () => setDownloadModalOpen(false);

  return (
    <div className="min-h-screen bg-[#050507] text-[#F5F5F7] selection:bg-white/20 selection:text-white relative overflow-x-hidden">
      {/* Background Liquid Noise / Subtle Star Dust Sheen */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Ambient Top Glow */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] blur-[150px] opacity-15"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(130, 140, 255, 0.22), transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* Floating Header */}
      <Header onOpenDownload={handleOpenDownload} />

      {/* Main Content Area */}
      <main className="relative z-10">
        <Hero onOpenDownload={handleOpenDownload} />
        <ProductMockup />
        <BentoSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={handleCloseDownload}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
