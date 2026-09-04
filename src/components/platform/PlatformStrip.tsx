'use client';

import React from 'react';
import PlatformCard, { PlatformItem } from './PlatformCard';
import { WordPressIcon, WixIcon, SquarespaceIcon } from '@/components/icons/PlatformIcons';

export default function PlatformStrip() {
  const platforms: PlatformItem[] = [
    {
      id: 'wordpress',
      number: '01',
      name: 'WORDPRESS',
      tagline: ['POWERFUL WEBSITES', 'BEYOND THE TEMPLATE'],
      bgImage: '/images/platforms/wordpress-bg.jpg',
      logo: <WordPressIcon className="w-6 h-6 text-white group-hover:text-[#dfcaaa] transition-colors" />,
      href: '#wordpress',
    },
    {
      id: 'wix',
      number: '02',
      name: '',
      tagline: ['TURNING IDEAS INTO', 'POLISHED EXPERIENCES'],
      bgImage: '/images/platforms/wix-bg.jpg',
      logo: <WixIcon className="w-14 h-6 text-white group-hover:text-[#dfcaaa] transition-colors" />,
      href: '#wix',
    },
    {
      id: 'squarespace',
      number: '03',
      name: 'SQUARESPACE',
      tagline: ['ELEGANT WEBSITES', 'BUILT WITH PURPOSE'],
      bgImage: '/images/platforms/squarespace-bg.jpg',
      logo: <SquarespaceIcon className="w-6 h-6 text-white group-hover:text-[#dfcaaa] transition-colors" />,
      href: '#squarespace',
    },
  ];

  return (
    <section className="w-full border-t border-b border-white/[0.08] bg-[#08090a] relative z-20">
      <div className="max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              isLast={index === platforms.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
