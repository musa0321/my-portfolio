import type { SiteConfig } from '@/types/portfolio';

export const siteConfig: SiteConfig = {
  name: 'MD.MUSA',
  role: 'Full-Stack Web Developer & Digital Experience Developer',
  description:
    'Crafting premium digital experiences across WordPress, Wix, and Squarespace. Specialized in high-performance websites with sophisticated design and seamless user experiences.',

  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],

  social: [
    { platform: 'GitHub', label: 'GitHub' },
    { platform: 'LinkedIn', label: 'LinkedIn' },
    { platform: 'Twitter', label: 'Twitter' },
    { platform: 'Dribbble', label: 'Dribbble' },
  ],

  contact: {
    email: undefined,
    phone: undefined,
    location: undefined,
  },
};
