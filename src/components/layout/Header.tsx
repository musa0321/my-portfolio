'use client';

import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  currentSection?: string;
}

export default function Header({ currentSection = 'home' }: HeaderProps) {
  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-[64px] bg-[#08090a]/95 backdrop-blur-md border-b border-white/[0.08] transition-all duration-300">
      <div className="w-full h-full max-w-[1720px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Brand / Logo with architectural line */}
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="text-white font-display font-extrabold tracking-[0.24em] text-sm md:text-[15px] uppercase hover:text-[#c5a880] transition-colors"
          >
            MD.MUSA
          </Link>
          <span className="hidden sm:inline-block w-10 md:w-14 h-[1px] bg-white/25" aria-hidden="true" />
        </div>

        {/* Center: Minimalist Uppercase Navigation */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-12">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative text-[11px] tracking-[0.22em] uppercase font-sans font-medium transition-colors duration-200 py-1.5 ${
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none w-10">
                    <span className="w-full h-[1px] bg-[#c5a880]/70" />
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#c5a880] absolute" />
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Let's Talk CTA Pill Button */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/20 hover:border-white/50 text-[11px] tracking-wider uppercase font-sans text-neutral-200 hover:text-white transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.06]"
          >
            <span>Let&apos;s Talk</span>
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
