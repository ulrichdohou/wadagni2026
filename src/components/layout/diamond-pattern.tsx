export function DiamondPattern() {
  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="diamonds"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 0L20 10L10 20L0 10Z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
        <radialGradient id="diamond-fade" cx="50%" cy="25%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.05" />
          <stop offset="60%" stopColor="white" stopOpacity="0.03" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="diamond-mask">
          <rect width="100%" height="100%" fill="url(#diamond-fade)" />
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#diamonds)"
        mask="url(#diamond-mask)"
      />
    </svg>
  );
}
