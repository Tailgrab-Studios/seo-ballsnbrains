import { useState } from 'react';

export default function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 bg-black/[0.04] rounded-xl px-5 md:px-6 py-5 text-left cursor-pointer"
      >
        <span className="text-bb-text-dark font-semibold text-[0.9375rem] md:text-[1.0625rem]">{q}</span>
        <span className="text-bb-gold-mid text-2xl leading-none shrink-0 w-5 text-center">
          {open ? '–' : '+'}
        </span>
      </button>
      {open && (
        <p className="text-bb-text-dark/55 text-[0.875rem] md:text-[0.9375rem] leading-relaxed px-5 md:px-6 pt-4 pb-1">
          {a}
        </p>
      )}
    </div>
  );
}
