'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroRight() {
  return (
    <div className="relative w-full h-full min-h-[580px] lg:min-h-[720px] xl:min-h-[800px] flex items-end justify-center lg:justify-end select-none">
      
      {/* 1. Oversized Background Didone "/01" */}
      <div 
        className="absolute top-2 lg:top-4 right-8 lg:right-20 xl:right-28 font-display font-black leading-none text-white/[0.045] pointer-events-none z-0 tracking-tighter select-none"
        style={{ fontSize: 'clamp(14rem, 24vw, 28rem)' }}
        aria-hidden="true"
      >
        /01
      </div>

      {/* 2. Warm Champagne Atmospheric Light behind Portrait Shoulders & Head */}
      <div 
        className="absolute bottom-14 lg:bottom-20 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 xl:right-10 w-[520px] h-[520px] sm:w-[600px] sm:h-[600px] lg:w-[720px] lg:h-[720px] xl:w-[800px] xl:h-[800px] rounded-full pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Outer warm atmospheric diffusion */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(214,184,142,0.30)_0%,rgba(197,168,128,0.14)_35%,rgba(197,168,128,0.04)_60%,transparent_75%)] blur-3xl pointer-events-none" />
        {/* Inner radiant warm glow centered behind head/neck */}
        <div className="absolute top-[18%] left-[22%] w-[56%] h-[56%] rounded-full bg-[radial-gradient(circle_at_center,rgba(223,202,170,0.35)_0%,rgba(197,168,128,0.15)_45%,transparent_70%)] blur-2xl pointer-events-none" />
      </div>

      {/* 3. Large Architectural Circular Arc Line */}
      <div 
        className="absolute bottom-8 lg:bottom-14 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-2 xl:right-8 w-[460px] h-[460px] sm:w-[550px] sm:h-[550px] lg:w-[670px] lg:h-[670px] xl:w-[760px] xl:h-[760px] rounded-full border border-[#c5a880]/30 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 4. Left-Side Editorial Details (Signature + Technical Tags) */}
      <div className="absolute left-0 sm:left-4 lg:-left-6 xl:-left-10 bottom-28 sm:bottom-36 lg:bottom-44 z-30 flex flex-col items-start pointer-events-auto">
        <span className="font-signature text-3xl sm:text-4xl lg:text-[2.65rem] text-[#dfcaaa] font-semibold -rotate-6 transform origin-bottom-left tracking-wide drop-shadow-md mb-3">
          MD.Musa
        </span>
        <div className="flex items-stretch gap-3 pl-1">
          <div className="w-[1px] bg-white/25 my-0.5" />
          <div className="flex flex-col text-[9px] sm:text-[10px] font-mono tracking-[0.28em] text-neutral-400 space-y-1">
            <span>CODE</span>
            <span>DESIGN</span>
            <span>SOLVE</span>
            <span>REPEAT</span>
          </div>
        </div>
      </div>

      {/* 5. Portrait Anchor Image — Scaled to reach above red line, strictly flush to bottom */}
      <div className="relative z-20 w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[780px] xl:max-w-[860px] 2xl:max-w-[920px] h-full flex justify-center lg:justify-end items-end lg:pr-8 xl:pr-14">
        <Image
          src="/images/profile/MD.MUSA.webp"
          alt="MD.MUSA — Full-Stack Web Developer & Digital Experience Developer"
          width={820}
          height={960}
          priority
          className="w-auto h-full max-h-[660px] sm:max-h-[750px] lg:max-h-[850px] xl:max-h-[920px] 2xl:max-h-[980px] object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.92)] filter contrast-[1.03] brightness-[0.98]"
        />
      </div>

      {/* 6. Right-Side Editorial Annotation: Turning Ideas Into Reality */}
      <div className="absolute right-6 sm:right-10 lg:right-12 xl:right-16 top-24 sm:top-32 lg:top-36 z-30 hidden sm:flex flex-col items-end pointer-events-none text-right">
        <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.26em] text-neutral-400 space-y-1">
          <div>TURNING</div>
          <div>IDEAS INTO</div>
          <div className="text-neutral-200 font-semibold">REALITY</div>
        </div>
      </div>

      {/* 7. Vertical SCROLL Indicator on the Far Right — Fully Visible */}
      <div className="absolute right-0 sm:right-2 lg:right-4 bottom-8 lg:bottom-12 z-30 hidden md:flex flex-col items-center gap-3 pointer-events-none">
        <span className="[writing-mode:vertical-rl] text-[9px] font-mono tracking-[0.35em] uppercase text-neutral-400">
          SCROLL
        </span>
        <div className="relative flex flex-col items-center my-1">
          <div className="w-[1px] h-14 bg-white/20" />
          <span className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#c5a880] ring-2 ring-[#c5a880]/40" />
        </div>
        <div className="w-6 h-6 rounded-full border border-white/25 flex items-center justify-center text-neutral-300 text-[10px]">
          ↓
        </div>
      </div>

    </div>
  );
}
