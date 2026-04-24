import React, { useState } from 'react';
import image05 from '../../assets/images/image-04.webp';
import image04 from '../../assets/images/image-05.webp';
const rows = [
  {
    product: 'Works with your morning coffee ritual',
    others: 'Pills you forget to take by Wednesday',
  },
  {
    product: 'Supports natural T production',
    others: 'Shuts down or ignores your hormonal axis',
  },
  {
    product: '12 clinical-dose ingredients in one scoop',
    others: 'Underdosed formulas padded with fillers',
  },
  {
    product: 'Patented extracts (KSM-66®, LJ100®)',
    others: 'Generic, unbranded, unverified ingredients',
  },
  {
    product: 'No needles, no prescriptions, no side effects',
    others: 'Injections, doctor visits, and ongoing dependency',
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 10 8" fill="none" width="10" height="10">
    <polyline
      points="1,4 4,7 9,1"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 10 10" fill="none" width="10" height="10">
    <line
      x1="2"
      y1="2"
      x2="8"
      y2="8"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="8"
      y1="2"
      x2="2"
      y2="8"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const Comparison = () => {
  const [ctaHover, setCtaHover] = useState(false);

  return (
    <section className="bg-[#070707] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-serif text-4xl md:text-5xl font-bold leading-tight">
            One Cup<span className="text-[#dca331]"> vs.</span> What
            <br />
            Most Men Are Doing
          </h2>
        </div>

        {/* Images VS row */}
        <div className="grid grid-cols-[1fr_auto_1fr] border border-[#1f1f1f] rounded-2xl overflow-hidden mb-8">
          {/* Product image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image04}
              alt="Balls N'Brains"
              className="w-full h-full object-cover"
            />
          </div>

          {/* VS divider */}
          <div className="bg-[#0e0e0e] w-14 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-xs font-black tracking-wider">
                VS.
              </span>
            </div>
          </div>

          {/* Competitors image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image05}
              alt="Competitors"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Comparison rows */}
        <div className="flex flex-col gap-2.5">
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-2 gap-2.5">
              {/* Product pill */}
              <div className="bg-[#c47a1e] rounded-full px-5 py-3.5 flex items-center justify-between gap-3">
                <span className="text-white font-black text-[11px] uppercase tracking-[1.5px] leading-snug flex-1 text-center">
                  {row.product}
                </span>
                <div className="w-5 h-5 rounded-full bg-white/25 border border-white/50 flex items-center justify-center flex-shrink-0">
                  <CheckIcon />
                </div>
              </div>

              {/* Others pill */}
              <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-full px-5 py-3.5 flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#111] border border-[#333] flex items-center justify-center flex-shrink-0">
                  <XIcon />
                </div>
                <span className="text-white/40 font-bold text-[11px] uppercase tracking-[1.5px] leading-snug flex-1">
                  {row.others}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 mt-12">
          <a
            href="https://lp.ballsnbrains.com/preclick"
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            className={`inline-block bg-[#dca331] text-black font-sans font-black text-xs uppercase tracking-widest py-5 px-14 rounded-full no-underline transition-all duration-200 ${
              ctaHover
                ? 'scale-105 shadow-[0_0_60px_rgba(220,163,49,0.7)]'
                : 'shadow-[0_0_40px_rgba(220,163,49,0.5)]'
            }`}
          >
            Try It & Save 44%
          </a>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 14 14" width="14" height="14" fill="none">
              <circle cx="7" cy="7" r="6.5" stroke="#dca331" strokeWidth="1" />
              <polyline
                points="4,7 6,9.5 10,4.5"
                stroke="#dca331"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white/35 font-sans text-xs tracking-[1.5px] uppercase">
              365-Days Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
