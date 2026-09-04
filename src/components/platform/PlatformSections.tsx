'use client';

import React from 'react';
import PlatformChapter, { PlatformChapterProps } from './PlatformChapter';
import WordPressSection from './WordPressSection';
import { WixIcon, SquarespaceIcon } from '@/components/icons/PlatformIcons';

export default function PlatformSections() {
  const otherChapters: PlatformChapterProps[] = [
    {
      id: 'wix',
      chapterNumber: '02 / 03',
      platformName: 'Wix Studio',
      platformLogo: <WixIcon className="w-8 h-3.5 text-[#c5a880]" />,
      badge: 'Wix Studio & Velo Code',
      headline: 'BESPOKE WIX STUDIO EXPERIENCES FOR MODERN BRANDS',
      description:
        'Leveraging Wix Studio and custom Velo JavaScript to push boundaries. Delivering fluid responsive layouts, custom dynamic CMS databases, and bespoke micro-interactions that elevate brand perception.',
      capabilities: [
        'Wix Studio Responsive Breakpoints',
        'Velo Full-Stack JavaScript & APIs',
        'Custom Dynamic CMS Architecture',
        'Smooth Micro-Interactions & Transitions',
      ],
      ctaText: 'Explore Wix Studio Work',
      ctaHref: '#contact',
      projectImage: '/images/projects/wix/Wix-stodio.jpg',
      projectTitle: 'Astra Creative Studio',
      projectCategory: 'Interactive Wix Studio Platform',
      metric: { value: '100%', label: 'Fluid Breakpoint Mastery' },
    },
    {
      id: 'squarespace',
      chapterNumber: '03 / 03',
      platformName: 'Squarespace',
      platformLogo: <SquarespaceIcon className="w-4 h-4 text-[#c5a880]" />,
      badge: 'Squarespace Fluid Engine',
      headline: 'EDITORIAL ELEGANCE & COMMERCE ON SQUARESPACE',
      description:
        'Combining aesthetic perfection with commercial clarity. Custom CSS/JS injections, tailored fluid engine layouts, and seamless commerce experiences built for architecture, design, and premium retail.',
      capabilities: [
        'Fluid Engine Custom Grid Architecture',
        'Advanced CSS & JavaScript Injections',
        'Squarespace Commerce & Membership',
        'Editorial Typography & Visual Storytelling',
      ],
      ctaText: 'Explore Squarespace Work',
      ctaHref: '#contact',
      projectImage: '/images/projects/squarespace/Squirespace.jpg',
      projectTitle: 'Mono Architecture & Design',
      projectCategory: 'Editorial Portfolio & Showcase',
      metric: { value: '50+', label: 'Successful Deployments' },
    },
  ];

  return (
    <div id="work" className="w-full relative z-20">
      {/* 01 — WordPress Section (Redesigned Editorial Chapter) */}
      <WordPressSection />

      {/* 02 & 03 — Remaining Platform Chapters (Unchanged) */}
      {otherChapters.map((chapter) => (
        <PlatformChapter key={chapter.id} {...chapter} />
      ))}
    </div>
  );
}
