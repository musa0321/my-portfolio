import React from 'react';

/**
 * Platform SVG Icons with pixel-precision matching the official brand marks.
 */

export function WordPressIcon({ className = 'w-7 h-7 text-white' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.2c5.964 0 10.8 4.836 10.8 10.8 0 2.22-.67 4.283-1.815 6.002L15.347 5.64c.264-.02.516-.04.743-.04.228 0 .428.02.597.04v-.44H11.75v.44c.228-.02.443-.04.646-.04.298 0 .54.02.726.04l2.127 6.136-2.91-7.85c.196-.02.39-.04.582-.04.243 0 .45.02.62.04v-.44H9.2v.44c.224-.02.427-.04.61-.04.27 0 .493.02.668.04l3.528 9.508-2.383 6.945C6.012 19.387 1.2 16.035 1.2 12 1.2 6.036 6.036 1.2 12 1.2zm-7.618 10.8c0 1.266.31 2.457.854 3.504l4.28-11.72C6.04 4.82 4.382 8.212 4.382 12zm7.746 9.683c-.043 0-.085-.004-.128-.004-.847 0-1.658-.155-2.414-.436l3.447-9.98 3.526 9.654c-1.353.486-2.822.766-4.431.766zm6.398-3.036l-3.326-9.102 2.76-7.447c1.782 1.83 2.87 4.318 2.87 7.066 0 3.666-1.95 6.883-4.887 8.718l2.583.765z" />
    </svg>
  );
}

export function WixIcon({ className = 'w-10 h-6 text-white' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 40"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* W */}
      <path d="M4 8h6.5l4.5 16.5L19.5 8H26l4.5 16.5L35 8h6.5l-7.5 24h-6.5l-4.5-16.5L18.5 32H12L4 8z" />
      {/* I */}
      <circle cx="48" cy="11" r="3.5" />
      <rect x="44.5" y="17" width="7" height="15" rx="1" />
      {/* X */}
      <path d="M57 17h7.5l5 7 5-7H82l-8.5 11.5L82.5 32H75l-5.5-7.5L64 32h-7.5l9-11.5L57 17z" />
    </svg>
  );
}

export function SquarespaceIcon({ className = 'w-7 h-7 text-white' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.46 8.54l-3.8-3.8a4.99 4.99 0 0 0-7.07 0l-1.42 1.41 2.12 2.12 1.42-1.41a2 2 0 0 1 2.83 0l3.8 3.8a2 2 0 0 1 0 2.83l-2.12 2.12 2.12 2.12 2.12-2.12a4.99 4.99 0 0 0 0-7.07zm-14.92 6.92l3.8 3.8a4.99 4.99 0 0 0 7.07 0l1.42-1.41-2.12-2.12-1.42 1.41a2 2 0 0 1-2.83 0l-3.8-3.8a2 2 0 0 1 0-2.83l2.12-2.12-2.12-2.12-2.12 2.12a4.99 4.99 0 0 0 0 7.07z" />
    </svg>
  );
}
