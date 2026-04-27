import React from 'react';
import badge from '../../assets/utils/badge-365days.webp';

export const Guarantee = () => {
  return (
    <section className="bg-[#070707] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-8 md:px-12 py-8 rounded-2xl"
          style={{
            border: '1.5px solid #dca331',
            boxShadow: '0 0 40px rgba(220,163,49,0.35), inset 0 0 40px rgba(220,163,49,0.06)',
          }}
        >
          {/* Badge 365 */}
          <div className="shrink-0">
            <img
              src={badge}
              alt="365-Day Guarantee Badge"
              className="w-24 h-24 md:w-40 md:h-40 object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center flex flex-col gap-4 items-center">
            <h3 className="text-[#dca331] font-sans font-black text-xl md:text-5xl tracking-wide">
              Money-Back Guarantee
            </h3>
            <p className="text-white/60 font-sans text-sm md:text-2xl leading-relaxed text-center">
              Not sure if it&apos;s for you? Try it risk-free for a full year.
              <br className="hidden md:block" />
              If you&apos;re not satisfied, we&apos;ll refund every penny — no questions asked.
            </p>
          </div>

          {/* Shield icon */}
          <div className="shrink-0">
            <svg viewBox="0 0 60 70" width="100" height="100" fill="none">
              <path
                d="M30 5L7 16v20c0 13 10.5 25 23 28 12.5-3 23-15 23-28V16L30 5z"
                fill="rgba(220,163,49,0.15)"
                stroke="#dca331"
                strokeWidth="2"
              />
              <polyline
                points="20,35 27,42 42,27"
                stroke="#dca331"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
