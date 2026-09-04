'use client';

import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-[calc(100vh-64px)] xl:min-h-[820px] 2xl:min-h-[880px] pt-16 md:pt-[64px] flex flex-col justify-between overflow-hidden bg-[#08090a]"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 max-w-[1720px] mx-auto px-6 md:px-12 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.05]" />
        <div className="hidden lg:block w-[1px] h-full bg-white/[0.04] left-[48%] xl:left-[50%] absolute" />
        <div className="hidden xl:block w-[1px] h-full bg-white/[0.04] left-[88%] absolute" />
        <div className="w-[1px] h-full bg-white/[0.05]" />
      </div>

      {/* Right Hero Stage: Anchored directly to bottom within content container boundaries */}
      <div className="w-full lg:absolute lg:right-0 lg:bottom-0 lg:w-[58%] xl:w-[55%] 2xl:w-[54%] h-full flex items-end justify-center lg:justify-end z-10 pointer-events-none pt-8 lg:pt-0 max-w-[1720px] mx-auto lg:right-[max(0px,calc((100vw-1720px)/2))] px-6 md:px-12">
        <HeroRight />
      </div>

      {/* Unified Hero Composition Stage: Vertically Centered Left Content */}
      <div className="relative z-20 w-full max-w-[1720px] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center py-8 lg:py-12">
        <div className="w-full lg:w-[48%] xl:w-[45%] flex flex-col justify-center my-auto">
          <HeroLeft />
        </div>
      </div>
    </section>
  );
}
