'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroLeft() {
  const stats = [
    { value: '04+', label: ['Years', 'Experience'] },
    { value: '50+', label: ['Projects', 'Completed'] },
    { value: '10+', label: ['Technologies', 'Mastered'] },
    { value: '100%', label: ['Client', 'Focus'] },
  ];

  return (
    <div className="w-full max-w-[620px] lg:max-w-[700px] xl:max-w-[760px] flex flex-col justify-center z-20 relative space-y-8 sm:space-y-9 lg:space-y-10">
      
      {/* Top Section: Availability, Headline, Narrative, CTAs */}
      <div>
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 mb-2.5 sm:mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a880] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a880] ring-4 ring-[#c5a880]/20" />
          </span>
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.24em] text-neutral-400 uppercase">
            Available For Selected Projects
          </span>
        </div>

        {/* Main Headline — Bold, Impressive Figtree Headline Scaled to Fill Space */}
        <h1 
          className="font-display font-extrabold uppercase text-[clamp(3.1rem,4.3vw,5.1rem)] text-white select-none w-full"
          style={{
            lineHeight: 1.02,
            letterSpacing: '-0.025em',
          }}
        >
          <span className="block whitespace-nowrap">
            I BUILD{' '}
            <span className="bg-gradient-to-r from-[#dfcaaa] via-[#c5a880] to-[#b89565] bg-clip-text text-transparent">
              DIGITAL
            </span>
          </span>
          <span className="block whitespace-nowrap">EXPERIENCES</span>
          <span className="block whitespace-nowrap">THAT MOVE.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="text-neutral-400 font-body text-sm sm:text-[15px] max-w-md leading-relaxed pt-3 sm:pt-4">
          Full-Stack Web Developer crafting modern, high-performance websites and digital experiences that help businesses grow.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-6 pt-5 sm:pt-6">
          {/* Primary CTA: Pill Button */}
          <Link
            href="#work"
            className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[#eae8e3] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
          >
            <span>View My Work</span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          {/* Secondary CTA: Text + Line */}
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] font-sans uppercase text-neutral-300 hover:text-white transition-colors py-2"
          >
            <span className="border-b border-transparent group-hover:border-white/40 pb-0.5 transition-colors">
              Let&apos;s Talk
            </span>
            <span className="w-10 h-[1px] bg-white/30 group-hover:w-14 group-hover:bg-[#c5a880] transition-all duration-300" />
          </Link>
        </div>
      </div>

      {/* Bottom Section: 4 Compact Stats */}
      <div className="pt-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pt-5 sm:pt-6 border-t border-white/[0.08]">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display font-bold text-2xl sm:text-3xl lg:text-[2rem] text-white tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11px] font-body text-neutral-400 leading-tight mt-1.5">
                {stat.label[0]}
                <br />
                {stat.label[1]}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
