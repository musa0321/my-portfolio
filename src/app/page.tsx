import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/hero/Hero';
import PlatformStrip from '@/components/platform/PlatformStrip';
import PlatformSections from '@/components/platform/PlatformSections';
import FooterMeta from '@/components/layout/FooterMeta';

/**
 * MD.MUSA Premium Portfolio Homepage
 * Faithfully reproducing the visual composition, hierarchy, and editorial aesthetics
 * of the design reference: public/design-reference/portfolio-home-reference.png.png
 */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090a] text-white flex flex-col justify-between selection:bg-[#c5a880] selection:text-black">
      {/* 1. Minimal Fixed/Sticky Header */}
      <Header currentSection="home" />

      {/* 2. Hero Section (Headline, Portrait, Editorial Accents, Stats) */}
      <main className="flex-1 flex flex-col">
        <Hero />

        {/* 3. Bottom Platform Strip (01 WordPress, 02 Wix, 03 Squarespace) */}
        <PlatformStrip />

        {/* 4. Viewport-Based Platform Chapters (01 WordPress, 02 Wix, 03 Squarespace) */}
        <PlatformSections />
      </main>

      {/* 4. Bottom Location & Editorial Meta Bar */}
      <FooterMeta />
    </div>
  );
}
