'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Palette, 
  ShoppingBag, 
  Puzzle, 
  Gauge, 
  ArrowRight,
  ArrowDown
} from 'lucide-react';

export default function WordPressSection() {
  const capabilities = [
    { label: 'CUSTOM THEMES', icon: <Palette className="w-3 h-3 text-[#c5a880]" /> },
    { label: 'WOOCOMMERCE', icon: <ShoppingBag className="w-3 h-3 text-[#c5a880]" /> },
    { label: 'CUSTOM PLUGINS', icon: <Puzzle className="w-3 h-3 text-[#c5a880]" /> },
    { label: 'PERFORMANCE', icon: <Gauge className="w-3 h-3 text-[#c5a880]" /> },
  ];

  return (
    <section
      id="wordpress"
      data-platform="wordpress"
      className="platform-section relative w-full min-h-[100svh] flex flex-col justify-between bg-[#070707] border-b border-white/[0.06] overflow-hidden select-none pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 scroll-mt-16 md:scroll-mt-20"
    >
      {/* =========================================================================
          BACKGROUND: Deep Near-Black Architectural Canvas
          No room photos, no desk clutter, no coffee mugs.
          Only subtle architectural lines, faint ambient glow, and subtle "01".
          ========================================================================= */}
      <div className="platform-background absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Architectural Grid Guidelines */}
        <div className="absolute inset-0 max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[6vw] flex justify-between">
          <div className="w-[1px] h-full bg-white/[0.03]" />
          <div className="hidden lg:block w-[1px] h-full bg-white/[0.025] left-[39%] absolute" />
          <div className="w-[1px] h-full bg-white/[0.03]" />
        </div>

        {/* Faint Champagne Ambient Glow behind Project Showcase */}
        <div className="absolute right-[5%] lg:right-[10%] top-1/2 -translate-y-1/2 w-[420px] sm:w-[560px] lg:w-[680px] h-[320px] sm:h-[420px] lg:h-[480px] bg-[#c5a880]/[0.055] blur-[120px] rounded-full pointer-events-none" />

        {/* Giant "01" at Very Low Opacity */}
        <div className="absolute right-4 sm:right-12 lg:right-20 top-1/2 -translate-y-1/2 font-display font-black text-[22vw] lg:text-[18vw] leading-none text-white/[0.02] select-none pointer-events-none tracking-tighter">
          01
        </div>

        {/* Subtle Edge Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,7,7,0.85)_100%)] pointer-events-none" />
      </div>

      {/* =========================================================================
          MAIN CONTENT STAGE: Split Layout
          Left (38–40%): Concise Editorial Copy
          Right (60–62%): Large Authentic WordPress Project Showcase
          ========================================================================= */}
      <div className="platform-content relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[6vw] flex-1 flex flex-col justify-center my-auto py-4 sm:py-6">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-14 xl:gap-20">

          {/* ===================================================================
              LEFT SIDE: Concise Editorial Content (~38–40% width on desktop)
              =================================================================== */}
          <div className="platform-copy w-full lg:w-[40%] xl:w-[38%] flex flex-col justify-center space-y-6 sm:space-y-7 pointer-events-auto">
            
            {/* 1. Section Eyebrow */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
                  01 / 03
                </span>
                <span className="w-6 sm:w-8 h-[1px] bg-[#c5a880]/40" />
                <span className="font-mono text-xs tracking-[0.24em] text-white uppercase font-bold">
                  WORDPRESS
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-neutral-400 uppercase">
                FLEXIBLE. POWERFUL. LIMITLESS.
              </p>
            </div>

            {/* 2. Headline: Controlled 3-Line Editorial Composition in Syne 800 */}
            <h2 className="font-display font-extrabold uppercase text-[clamp(2.1rem,3.3vw,3.6rem)] tracking-tight leading-[1.04] text-white select-none">
              <span className="block bg-gradient-to-r from-[#dfcaaa] via-[#c5a880] to-[#b89565] bg-clip-text text-transparent">
                WORDPRESS
              </span>
              <span className="block">EXPERIENCES</span>
              <span className="block text-neutral-100">BUILT TO PERFORM.</span>
            </h2>

            {/* 3. Concise Supporting Copy */}
            <p className="text-neutral-400 font-body text-sm sm:text-[15px] leading-relaxed max-w-sm sm:max-w-md">
              Custom WordPress development focused on performance, flexibility and scalable digital experiences.
            </p>

            {/* 4. Primary CTA Button */}
            <div className="pt-1">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#dfcaaa] via-[#c5a880] to-[#b89565] text-[#070707] font-sans font-bold text-xs tracking-[0.16em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,168,128,0.3)] hover:scale-[1.02]"
              >
                <span>Explore WordPress Work</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 5. Compact Technical Capabilities Strip (Below copy on desktop) */}
            <div className="pt-4 border-t border-white/[0.07] max-w-md">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono tracking-[0.16em] text-neutral-400">
                {capabilities.map((item, idx) => (
                  <React.Fragment key={item.label}>
                    <div className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {idx < capabilities.length - 1 && (
                      <span className="text-white/20">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* ===================================================================
              RIGHT SIDE: Large Real WordPress Project Showcase (~60–62% width)
              The visual hero of the section.
              =================================================================== */}
          <div className="platform-project w-full lg:w-[60%] xl:w-[62%] flex flex-col items-center lg:items-end pointer-events-auto mt-4 lg:mt-0">
            
            <div className="relative w-full max-w-[860px] xl:max-w-[940px] group">
              
              {/* Soft Ambient Backlight */}
              <div className="absolute -inset-4 sm:-inset-6 bg-[#c5a880]/[0.08] blur-2xl sm:blur-3xl rounded-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-70" />

              {/* Real WordPress Project Laptop Hardware Presentation */}
              <div className="relative w-full aspect-[1280/735] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] drop-shadow-[0_0_35px_rgba(197,168,128,0.08)] transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                <Image
                  src="/images/projects/wordpress/sculpted-laptop-transparent.png"
                  alt="Real WordPress Project — Sculpted Medical Aesthetics by MD.MUSA"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 920px"
                  className="object-contain"
                />
              </div>

              {/* Subtle Project Metadata Overlay Card */}
              <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 rounded-xl bg-[#0d0e11]/85 border border-white/[0.08] backdrop-blur-md shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#c5a880] uppercase font-semibold">
                    FEATURED WORDPRESS PROJECT
                  </span>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/30" />
                  <div className="flex items-center gap-2">
                    <span className="text-white font-display font-bold text-xs sm:text-sm tracking-wide">
                      SCULPTED
                    </span>
                    <span className="text-neutral-400 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase">
                      / AESTHETIC MEDICINE · WORDPRESS
                    </span>
                  </div>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-[0.16em] text-[#dfcaaa] hover:text-white uppercase transition-colors"
                >
                  <span>Explore</span>
                  <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION META & CHAPTER NAVIGATION STRIP (Bottom of full-screen chapter)
          ========================================================================= */}
      <div className="platform-meta relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[6vw] pt-4 sm:pt-5 border-t border-white/[0.06] pointer-events-auto">
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400">
          
          {/* Left: Scroll cue */}
          <div className="hidden md:flex items-center gap-3">
            <span>SCROLL TO EXPLORE</span>
            <span className="w-6 h-[1px] bg-white/20" />
          </div>

          {/* Center: Chapter Index (01 WORDPRESS active, 02 WIX, 03 SQUARESPACE) */}
          <div className="flex items-center gap-4 sm:gap-6 mx-auto md:mx-0">
            <span className="text-[#dfcaaa] font-bold">01 WORDPRESS</span>
            <span className="w-3 sm:w-4 h-[1px] bg-white/20" />
            <Link href="#wix" className="text-neutral-500 hover:text-white transition-colors">
              02 WIX
            </Link>
            <span className="w-3 sm:w-4 h-[1px] bg-white/20" />
            <Link href="#squarespace" className="text-neutral-500 hover:text-white transition-colors">
              03 SQUARESPACE
            </Link>
          </div>

          {/* Right: Scroll down indicator button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#wix"
              className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#c5a880] transition-colors"
              aria-label="Next Chapter: Wix"
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
