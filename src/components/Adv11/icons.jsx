import starIcon from '../../assets/icons/Star.svg';

// ── Inline icons ───────────────────────────────────────────────────────────
const stroke = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: 18,
  height: 18,
  'aria-hidden': true,
};

const paths = {
  shield: (
    <>
      <path d="M12 2.8 19 5.6v5.1c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V5.6l7-2.8z" />
      <path d="m9 11.8 2.1 2.1 4-4.2" />
    </>
  ),
  truck: (
    <>
      <path d="M2.8 6.6h10.4v9.7H2.8z" />
      <path d="M13.2 10.3h3.6l3.4 3.4v2.6h-7z" />
      <circle cx="7" cy="18.4" r="1.9" />
      <circle cx="17" cy="18.4" r="1.9" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10" rx="2.5" />
      <path d="M8.2 10V7.2a3.8 3.8 0 0 1 7.6 0V10" />
    </>
  ),
  unlock: (
    <>
      <rect x="4.5" y="10" width="15" height="10" rx="2.5" />
      <path d="M8.2 10V7.2a3.8 3.8 0 0 1 7.3-1.4" />
    </>
  ),
  gift: (
    <>
      <rect x="3.5" y="8" width="17" height="4" rx="1" />
      <path d="M5 12v8h14v-8M12 8v12" />
      <path d="M12 8S10.5 3.5 8 4.2C6 4.8 7 8 12 8zM12 8s1.5-4.5 4-3.8C18 4.8 17 8 12 8z" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-9 5.5-14 15-14 0 9.5-5 15-14 15" />
      <path d="M5 19c3-5 6-7.5 10-9.5" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3h5M10 3v6L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9V3" />
      <path d="M7.3 15h9.4" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h12l-2.5 4L17 12H5" />
    </>
  ),
  cap: (
    <>
      <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5z" />
      <path d="M6.5 11v4.5c1.5 1.5 3.4 2.2 5.5 2.2s4-.7 5.5-2.2V11M21.5 9v5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.8 13.4-1.3 7.1 4.5-2.4 4.5 2.4-1.3-7.1" />
    </>
  ),
  bolt: <path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z" />,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  atom: (
    <>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
    </>
  ),
  mushroom: (
    <>
      <path d="M3 12.5a9 8 0 0 1 18 0z" />
      <path d="M9.5 12.5v6a2.5 2.5 0 0 0 5 0v-6" />
      <circle cx="9" cy="8.5" r="0.6" fill="currentColor" />
      <circle cx="14.5" cy="7.5" r="0.6" fill="currentColor" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  arrow: (
    <>
      <path d="M4 12h14.5" />
      <path d="M12.5 5.8 18.8 12l-6.3 6.2" />
    </>
  ),
  chevron: <path d="m9 5.5 6.5 6.5L9 18.5" />,
};

export const Icon = ({ name, size = 18, ...props }) => (
  <svg {...stroke} width={size} height={size} {...props}>
    {paths[name]}
  </svg>
);

export const Stars = ({ size = 16, className = '' }) => (
  <span className={`inline-flex gap-0.5 ${className}`} role="img" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }, (_, i) => (
      <img key={i} src={starIcon} alt="" width={size} height={size} style={{ width: size, height: size }} />
    ))}
  </span>
);

export const IconThumb = ({ up = true, size = 16 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden
    style={up ? undefined : { transform: 'rotate(180deg)' }}
  >
    <path d="M2 10.5h3.5V21H2zM7.5 20.2V10.4l4.6-7.2c.3-.5 1-.7 1.5-.4 1 .5 1.6 1.7 1.3 2.8L14 9.5h5.6a2.2 2.2 0 0 1 2.1 2.7l-1.7 7a2.2 2.2 0 0 1-2.1 1.7H8.3a.8.8 0 0 1-.8-.7z" />
  </svg>
);
