interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 80, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* ── Outer gold ring (thick, complete circle) ── */}
      <circle cx="100" cy="100" r="99" fill="#f5b800" />

      {/* ── Gold ring gradient for 3D effect ── */}
      <defs>
        <radialGradient id="goldRing" cx="40%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#ffe566" />
          <stop offset="40%"  stopColor="#f5b800" />
          <stop offset="100%" stopColor="#c88000" />
        </radialGradient>
        <radialGradient id="greenBg" cx="40%" cy="35%" r="70%">
          <stop offset="0%"   stopColor="#2d7a46" />
          <stop offset="100%" stopColor="#1a5230" />
        </radialGradient>
      </defs>

      {/* Gold ring with gradient */}
      <circle cx="100" cy="100" r="99" fill="url(#goldRing)" />

      {/* ── Inner dark green circle ── */}
      <circle cx="100" cy="100" r="82" fill="url(#greenBg)" />

      {/* ── THREE CREAM/WHITE LEAVES ── */}

      {/* LEFT LEAF — wide, angled upper-left */}
      <path
        d="M 100 158
           C 90 140, 70 118, 58 96
           C 48 76, 52 56, 66 54
           C 78 52, 90 66, 96 86
           C 100 104, 101 132, 100 158 Z"
        fill="#f0ece0"
      />
      {/* Left leaf vein */}
      <path
        d="M 100 158 C 86 126, 68 88, 66 54"
        stroke="#1a5230"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* CENTER LEAF — tallest, points straight up */}
      <path
        d="M 100 162
           C 95 142, 90 116, 93 92
           C 96 70, 102 54, 110 60
           C 118 66, 117 94, 113 118
           C 109 138, 104 152, 100 162 Z"
        fill="#f0ece0"
      />
      {/* Center vein */}
      <line
        x1="100" y1="162"
        x2="106" y2="58"
        stroke="#1a5230"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* RIGHT LEAF — small, sweeps lower-right */}
      <path
        d="M 100 152
           C 112 143, 128 132, 142 120
           C 155 110, 158 96, 150 88
           C 142 80, 128 88, 118 100
           C 109 112, 103 132, 100 152 Z"
        fill="#f0ece0"
        opacity="0.95"
      />
      {/* Right leaf vein */}
      <path
        d="M 100 152 C 118 128, 144 100, 150 88"
        stroke="#1a5230"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
