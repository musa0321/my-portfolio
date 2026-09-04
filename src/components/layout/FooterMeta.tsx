'use client';

import React from 'react';
import Link from 'next/link';

export default function FooterMeta() {
  return (
    <footer className="w-full bg-[#08090a] py-6 px-6 md:px-12 z-20 border-t border-white/[0.04]">
      <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-neutral-400">
        
        {/* Left: Location indicator */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
          <span>Based in Dhaka, Bangladesh</span>
        </div>

        {/* Right: Editorial Callout */}
        <Link
          href="#contact"
          className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
        >
          <span>Let&apos;s Create Something Better</span>
          <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
          <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-white transition-all duration-300" />
        </Link>

      </div>
    </footer>
  );
}
