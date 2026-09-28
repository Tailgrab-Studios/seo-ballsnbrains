import { useId } from 'react';

// ── Ícones 3D (SVG) ────────────────────────────────────────────────────────
// Esfera dourada com luz no topo-esquerdo, sombra interna e glifo em relevo.
// Mesma receita de gradiente do .btn-cta (#FED9A5 → #D09439) pra conversar com o DS.

const Sphere = ({ id, children, size, className }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    aria-hidden
    className={`inline-block shrink-0 ${className}`}
    style={{ filter: 'drop-shadow(0 3px 4px rgba(125,93,44,0.45))' }}
  >
    <defs>
      <radialGradient id={`${id}-body`} cx="35%" cy="28%" r="75%">
        <stop offset="0" stopColor="#FFF1D6" />
        <stop offset="0.35" stopColor="#F2C77E" />
        <stop offset="0.75" stopColor="#D09439" />
        <stop offset="1" stopColor="#8A6428" />
      </radialGradient>
      <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFE9C2" />
        <stop offset="1" stopColor="#7D5D2C" />
      </linearGradient>
      <radialGradient id={`${id}-shine`} cx="50%" cy="0%" r="60%">
        <stop offset="0" stopColor="#fff" stopOpacity="0.85" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="24" cy="24" r="22" fill={`url(#${id}-rim)`} />
    <circle cx="24" cy="24" r="20.5" fill={`url(#${id}-body)`} />
    <ellipse cx="20" cy="12" rx="12" ry="6.5" fill={`url(#${id}-shine)`} />
    <g transform="translate(0 0.9)" opacity="0.35" fill="#fff" stroke="#fff">
      {children}
    </g>
    <g fill="#2a1d0b" stroke="#2a1d0b">{children}</g>
  </svg>
);

const glyphs = {
  down: (
    <path
      d="M24 13v17m-7.5-7.5L24 30l7.5-7.5"
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  right: (
    <path
      d="M14 24h18m-7.5-7.5L32 24l-7.5 7.5"
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  percent: (
    <>
      <path d="m16.5 31.5 15-15" fill="none" strokeWidth="3.6" strokeLinecap="round" />
      <circle cx="17.5" cy="17.5" r="3.4" stroke="none" />
      <circle cx="30.5" cy="30.5" r="3.4" stroke="none" />
    </>
  ),
  shield: (
    <>
      <path
        d="M24 11.5 34 15.5v7.3c0 6.2-4.2 11.5-10 13.4-5.8-1.9-10-7.2-10-13.4v-7.3z"
        stroke="none"
      />
      <path
        d="m19.3 23.8 3.3 3.3 6.3-6.6"
        fill="none"
        stroke="#F2C77E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  truck: (
    <>
      <path d="M10.5 16.5h16v13h-16z" stroke="none" rx="1.5" />
      <path d="M26.5 20.5h6l4.5 4.8v4.2h-10.5z" stroke="none" />
      <path d="M29 22.3h3.2l2.6 2.8H29z" fill="#F2C77E" stroke="none" />
      <circle cx="16" cy="31" r="3.4" stroke="#F2C77E" strokeWidth="1.6" />
      <circle cx="31.5" cy="31" r="3.4" stroke="#F2C77E" strokeWidth="1.6" />
    </>
  ),
};

export const Icon3D = ({ name, size = 28, className = '' }) => {
  const id = useId().replace(/:/g, '');
  return (
    <Sphere id={id} size={size} className={className}>
      {glyphs[name]}
    </Sphere>
  );
};

// Bandeira dos EUA recortada na bolinha, com o mesmo brilho/aro das esferas.
export const FlagUS3D = ({ size = 28, className = '' }) => {
  const id = useId().replace(/:/g, '');
  const stripes = Array.from({ length: 13 }, (_, i) => i);
  const stars = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < (r % 2 ? 5 : 6); c++) {
      stars.push([7.5 + c * 3.4 + (r % 2 ? 1.7 : 0), 7 + r * 3.3]);
    }
  }
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      aria-hidden
      className={`inline-block shrink-0 ${className}`}
      style={{ filter: 'drop-shadow(0 3px 4px rgba(10,9,8,0.35))' }}
    >
      <defs>
        <clipPath id={`${id}-c`}>
          <circle cx="24" cy="24" r="20.5" />
        </clipPath>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFE9C2" />
          <stop offset="1" stopColor="#7D5D2C" />
        </linearGradient>
        <radialGradient id={`${id}-shade`} cx="35%" cy="28%" r="80%">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id={`${id}-shine`} cx="50%" cy="0%" r="60%">
          <stop offset="0" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill={`url(#${id}-rim)`} />
      <g clipPath={`url(#${id}-c)`}>
        {stripes.map((i) => (
          <rect key={i} x="0" y={3.5 + i * 3.16} width="48" height="3.2" fill={i % 2 ? '#fff' : '#B22234'} />
        ))}
        <rect x="0" y="3.5" width="26" height="22.1" fill="#3C3B6E" />
        {stars.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.9" fill="#fff" />
        ))}
        <rect x="0" y="0" width="48" height="48" fill={`url(#${id}-shade)`} />
      </g>
      <ellipse cx="20" cy="12" rx="12" ry="6.5" fill={`url(#${id}-shine)`} />
    </svg>
  );
};
