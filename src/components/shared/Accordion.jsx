import { useState } from 'react';

export default function Accordion({ label, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="border border-bb-separator rounded-xl overflow-hidden"
      style={{ background: open ? '#14100c' : 'transparent' }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
      >
        <span className="text-white font-medium text-[0.9375rem]">{label}</span>
        <svg
          viewBox="0 0 24 24"
          className={`w-4 h-4 text-bb-gold shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 text-bb-text-dim text-[0.875rem] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
