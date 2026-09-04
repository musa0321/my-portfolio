'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const emptySubscribe = () => () => {};

/**
 * ThemeToggle — Accessible dark/light mode toggle.
 *
 * - Uses useSyncExternalStore to guard against hydration mismatch without cascading renders.
 * - Animated icon rotation on toggle.
 * - Keyboard accessible with visible focus states.
 */
export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Render a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className={cn(
          'relative flex h-10 w-10 items-center justify-center rounded-full',
          'border border-[var(--border)] bg-[var(--bg-surface)]',
          'transition-colors duration-200',
          className
        )}
        aria-label="Toggle theme"
        disabled
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative flex h-10 w-10 items-center justify-center rounded-full',
        'border border-[var(--border)] bg-[var(--bg-surface)]',
        'hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
        'transition-colors duration-200',
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun
        className={cn(
          'absolute h-5 w-5 text-[var(--text-primary)]',
          'transition-all duration-300 ease-out',
          isDark
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        )}
      />
      <Moon
        className={cn(
          'absolute h-5 w-5 text-[var(--text-primary)]',
          'transition-all duration-300 ease-out',
          isDark
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0'
        )}
      />
    </button>
  );
}
