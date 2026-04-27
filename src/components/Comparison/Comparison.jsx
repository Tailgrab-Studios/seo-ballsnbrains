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
    <line x1="2" y1="2" x2="8" y2="8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="2" x2="2" y2="8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
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
            One Cup<span className="text-[#dca331]"> vs.</span> Everything Else
          </h2>
          <p className="text-white/50 font-sans text-base mt-4 max-w-md mx-auto leading-relaxed">
            See how Balls&amp;Brains compares to the solutions men typically rely on.
          </p>
        </div>

        {/* Images VS row */}
        <div className="grid grid-cols-[1fr_auto_1fr] border border-[#1f1f1f] rounded-2xl overflow-hidden mb-3">
          {/* Product image */}
          <div className="relative overflow-hidden">
            <div className="relative aspect-[4/3]">
              <img src={image04} alt="Balls N'Brains" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 md:p-4">
                <span className="text-white font-sans font-black text-[10px] md:text-xs uppercase tracking-widest">
                  Balls &amp; Brains
                </span>
              </div>
            </div>
          </div>

          {/* VS divider */}
          <div className="bg-[#0e0e0e] w-10 md:w-14 flex items-center justify-center">
            <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-[10px] md:text-xs font-black tracking-wider">VS.</span>
            </div>
          </div>

          {/* Competitors image */}
          <div className="relative overflow-hidden">
            <div className="relative aspect-[4/3]">
              <img src={image05} alt="Competitors" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 md:p-4 justify-end">
                <span className="text-white/70 font-sans font-black text-[10px] md:text-xs uppercase tracking-widest">
                  Everything Else
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="flex flex-col gap-2.5">
          {rows.map((row, i) => (
            <div key={i} className="flex flex-col md:grid md:grid-cols-2 gap-2">
              {/* Product pill */}
              <div className="bg-[#c47a1e] rounded-2xl md:rounded-full px-5 py-3.5 flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <CheckIcon />
                </div>
                <span className="text-white font-black text-xs md:text-[11px] uppercase tracking-[1px] md:tracking-[1.5px] leading-snug flex-1">
                  {row.product}
                </span>
              </div>

              {/* Others pill */}
              <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl md:rounded-full px-5 py-3.5 flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-red-600/80 flex items-center justify-center flex-shrink-0">
                  <XIcon />
                </div>
                <span className="text-white/40 font-bold text-xs md:text-[11px] uppercase tracking-[1px] md:tracking-[1.5px] leading-snug flex-1">
                  {row.others}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
