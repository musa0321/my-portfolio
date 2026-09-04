import type { Metadata } from 'next';
import { Figtree, Poppins, JetBrains_Mono, Caveat } from 'next/font/google';
import ThemeProvider from '@/components/theme/ThemeProvider';
import SmoothScroll from '@/components/animation/SmoothScroll';
import './globals.css';

// =============================================================================
// FONTS — Variable & Google fonts loaded via next/font/google
// =============================================================================

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-jb',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-signature',
  display: 'swap',
});

// =============================================================================
// METADATA
// =============================================================================

export const metadata: Metadata = {
  title: 'MD.MUSA — Full-Stack Web Developer & Digital Experience Developer',
  description:
    'Crafting premium digital experiences across WordPress, Wix, and Squarespace. Specialized in high-performance websites with sophisticated design and seamless user experiences.',
};

// =============================================================================
// ROOT LAYOUT
// =============================================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${poppins.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#08090a] text-white antialiased selection:bg-[#c5a880] selection:text-black"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
