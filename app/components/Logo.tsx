type Props = {
  className?: string;
};

// Monoline geometric "Doji" wordmark — strokes inherit `currentColor`
// so it adapts to light (nav) and dark (footer / mobile menu) surfaces.
export default function Logo({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 150 80"
      fill="none"
      className={className}
      role="img"
      aria-label="Doji"
    >
      <g
        stroke="currentColor"
        strokeWidth={3.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 18 L22 62" />
        <path d="M22 18 A 22 22 0 0 1 22 62" />
        <circle cx="74" cy="48" r="14" />
        <path d="M104 34 L104 63 A 9 9 0 0 1 90 70.5" />
        <path d="M122 34 L122 62" />
      </g>
      <g fill="currentColor" stroke="none">
        <circle cx="104" cy="25" r="2.7" />
        <circle cx="122" cy="25" r="2.7" />
      </g>
    </svg>
  );
}
