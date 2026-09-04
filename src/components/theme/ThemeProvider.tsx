'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * ThemeProvider — Wraps next-themes with class-based dark mode.
 * Default theme is "dark" (Cinematic Obsidian).
 */
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
