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
      {/* ── Dark green circle background ── */}
      <circle cx="100" cy="100" r="100" fill="#1a5c2e" />

      {/* ── Golden oval ring ──
          Open gap at top-left. Ring starts from top-left gap,
          sweeps clockwise all the way around.
          cx=100, cy=108 (slightly lower to match image)
          rx=84, ry=76
      ── */}

      {/* Main gold ring — thick */}
      <ellipse
        cx="100" cy="108"
        rx="84" ry="76"
        stroke="url(#goldGrad)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeDasharray="490 68"
        strokeDashoffset="58"
        fill="none"
      />

      {/* Shine streak inside the ring at top */}
      <ellipse
        cx="100" cy="108"
        rx="84" ry="76"
        stroke="url(#shineGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="80 478"
        strokeDashoffset="82"
        fill="none"
        opacity="0.85"
      />

      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#c8860a" />
          <stop offset="30%"  stopColor="#f5b800" />
          <stop offset="60%"  stopColor="#ffd040" />
          <stop offset="100%" stopColor="#c8860a" />
        </linearGradient>
        <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(255,255,220,0)" />
          <stop offset="40%"  stopColor="rgba(255,255,220,0.9)" />
          <stop offset="100%" stopColor="rgba(255,255,220,0)" />
        </linearGradient>
      </defs>

      {/* ── THREE WHITE LEAVES ── */}

      {/* LEFT LEAF — wide, tilts to upper-left */}
      <path
        d="M 98 158
           C 88 140, 68 118, 56 96
           C 46 76, 50 56, 64 54
           C 76 52, 88 66, 94 86
           C 98 104, 99 132, 98 158 Z"
        fill="white"
      />
      {/* Left leaf vein — dark green cut */}
      <path
        d="M 98 158 C 84 128, 68 90, 64 54"
        stroke="#1a5c2e"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* CENTER LEAF — tallest, points straight up */}
      <path
        d="M 100 162
           C 95 142, 90 118, 92 94
           C 94 72, 100 54, 108 60
           C 116 66, 116 92, 112 116
           C 108 136, 103 150, 100 162 Z"
        fill="white"
      />
      {/* Center vein */}
      <line
        x1="100" y1="162"
        x2="104" y2="58"
        stroke="#1a5c2e"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* RIGHT LEAF — small, sweeps to lower-right */}
      <path
        d="M 100 150
           C 112 142, 128 132, 142 120
           C 154 110, 158 96, 150 88
           C 142 80, 128 88, 118 100
           C 109 112, 103 132, 100 150 Z"
        fill="white"
        opacity="0.95"
      />
      {/* Right leaf vein */}
      <path
        d="M 100 150 C 118 128, 144 100, 150 88"
        stroke="#1a5c2e"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}
