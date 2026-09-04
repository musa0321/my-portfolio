'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface PlatformItem {
  id: string;
  number: string;
  name: string;
  tagline: [string, string];
  bgImage: string;
  logo: React.ReactNode;
  href: string;
}

interface PlatformCardProps {
  platform: PlatformItem;
  isLast?: boolean;
}

export default function PlatformCard({ platform, isLast = false }: PlatformCardProps) {
  return (
    <Link
      href={platform.href}
      className={`group relative flex items-center justify-between min-h-[140px] md:min-h-[155px] p-6 lg:p-8 overflow-hidden bg-[#08090a] transition-colors duration-500 hover:bg-[#0c0e12] ${
        !isLast ? 'border-b md:border-b-0 md:border-r border-white/[0.08]' : ''
      }`}
    >
      {/* 1. Subtle Background Visual on the Right with Dark Fade Overlay */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 md:w-3/5 overflow-hidden pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500">
        <Image
          src={platform.bgImage}
          alt={`${platform.name || 'Platform'} visual theme`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-90"
        />
        {/* Smooth Gradient Overlay: solid dark on the left blending into the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-transparent to-[#08090a]/40" />
      </div>

      {/* 2. Left Meta: Platform Number */}
      <div className="relative z-10 flex flex-col items-start gap-1 pr-4">
        <span className="text-xs font-mono tracking-widest text-neutral-400 group-hover:text-champagne transition-colors">
          {platform.number}
        </span>
        <span className="w-4 h-[1px] bg-white/20 group-hover:w-6 group-hover:bg-[#c5a880] transition-all duration-300" />
      </div>

      {/* 3. Center Content: Logo + Title + Tagline */}
      <div className="relative z-10 flex-1 pl-3 pr-4 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-2">
          {platform.logo}
          {platform.name && (
            <span className="font-display font-bold text-sm tracking-[0.16em] uppercase text-white group-hover:text-[#dfcaaa] transition-colors">
              {platform.name}
            </span>
          )}
        </div>
        
        <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.14em] text-neutral-400 uppercase leading-snug group-hover:text-neutral-200 transition-colors">
          <div>{platform.tagline[0]}</div>
          <div>{platform.tagline[1]}</div>
        </div>

        {/* Small subtle line detail below description */}
        <div className="w-8 h-[1px] bg-white/15 mt-3 group-hover:w-14 group-hover:bg-[#c5a880]/60 transition-all duration-300" />
      </div>

      {/* 4. Subtle Arrow Indicator */}
      <div className="relative z-10 hidden sm:flex items-center text-neutral-400 group-hover:text-white transition-colors duration-300 pl-2">
        <span className="text-sm transform group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </div>

    </Link>
  );
}
