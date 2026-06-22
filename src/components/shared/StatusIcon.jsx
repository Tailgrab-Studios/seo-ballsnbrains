export default function StatusIcon({ status }) {
  if (status === 'ok') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 shrink-0 mt-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12l5 5L20 7" />
      </svg>
    );
  }
  if (status === 'no') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 shrink-0 mt-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    );
  }
  if (status === 'warn') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 shrink-0 mt-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    );
  }
  return null;
}
