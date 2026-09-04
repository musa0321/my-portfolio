'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface PlatformChapterProps {
  id: string;
  chapterNumber: string;
  platformName: string;
  platformLogo: React.ReactNode;
  badge: string;
  headline: string;
  description: string;
  capabilities: string[];
  ctaText: string;
  ctaHref: string;
  projectImage: string;
  projectTitle: string;
  projectCategory: string;
  metric: { value: string; label: string };
  isReversed?: boolean;
}

export default function PlatformChapter({
  id,
  chapterNumber,
  platformName,
  platformLogo,
  badge,
  headline,
  description,
  capabilities,
  ctaText,
  ctaHref,
  projectImage,
  projectTitle,
  projectCategory,
  metric,
}: PlatformChapterProps) {
  return (
    <section
      id={id}
      className="relative w-full min-h-[100svh] flex flex-col justify-center bg-[#08090a] border-b border-white/[0.08] overflow-hidden pt-20 sm:pt-24 lg:pt-20 pb-12 lg:pb-16 scroll-mt-16 md:scroll-mt-20"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 max-w-[1720px] mx-auto px-6 md:px-12 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.03]" />
        <div className="hidden lg:block w-[1px] h-full bg-white/[0.02] left-[50%] absolute" />
        <div className="w-[1px] h-full bg-white/[0.03]" />
      </div>

      {/* Subtle Background Glow behind the project visual */}
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.08)_0%,rgba(197,168,128,0.02)_45%,transparent_70%)] blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: Platform Chapter Editorial Details (7 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7">
            
            {/* Top Meta: Chapter Indicator + Platform Badge */}
            <div className="flex flex-wrap items-center gap-3.5">
              <span className="font-mono text-xs tracking-[0.24em] uppercase text-[#c5a880] font-semibold">
                {chapterNumber}
              </span>
              <span className="w-6 h-[1px] bg-white/20" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                {platformLogo}
                <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-neutral-300">
                  {badge}
                </span>
              </div>
            </div>

            {/* Platform Headline in Figtree */}
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3.1rem] text-white tracking-tight leading-[1.08] select-none">
              {headline}
            </h2>

            {/* Description in Poppins */}
            <p className="text-neutral-400 font-body text-sm sm:text-[15px] leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Capabilities Grid */}
            <div className="pt-1">
              <span className="block text-[10px] font-mono tracking-[0.24em] text-neutral-400 uppercase mb-3">
                Core Capabilities & Architecture
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-neutral-300 text-xs font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]/80" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA and Metric Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[#eae8e3] hover:shadow-[0_0_30px_rgba(255,255,255,0.22)] hover:scale-[1.02]"
              >
                <span>{ctaText}</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              {/* Architectural metric */}
              <div className="flex items-center gap-3 pl-2 border-l border-white/15">
                <span className="font-display font-bold text-xl sm:text-2xl text-white">
                  {metric.value}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase leading-tight">
                  {metric.label}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Project Visual Showcase (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-center lg:items-end">
            <div className="relative w-full max-w-[620px] rounded-xl overflow-hidden border border-white/[0.12] bg-[#0c0e12] shadow-[0_20px_60px_rgba(0,0,0,0.85)] group">
              
              {/* Window Bar / Architectural Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#111317] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  {projectCategory}
                </div>
                <div className="w-10" />
              </div>

              {/* Main Project Image */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-neutral-950">
                <Image
                  src={projectImage}
                  alt={`${platformName} — ${projectTitle}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Bottom Caption Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#0e1014] border-t border-white/[0.06]">
                <div>
                  <span className="block font-display font-bold text-sm text-white tracking-wide">
                    {projectTitle}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                    {platformName} Case Study
                  </span>
                </div>
                <Link
                  href={ctaHref}
                  className="text-xs font-mono text-[#c5a880] tracking-widest uppercase hover:underline"
                >
                  Explore →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
