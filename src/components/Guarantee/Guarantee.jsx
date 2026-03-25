import React from 'react';
import badge from '../../assets/utils/badge-365days.webp';

export const Guarantee = () => {
  return (
    <section className="bg-[#0e0e0e] pt-20 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Badge fica metade pra fora do card */}
        <div className="flex justify-center">
          <img
            src={badge}
            alt="365-Days Guarantee Badge"
            className="w-40 h-40 object-contain relative z-10"
            style={{ marginBottom: '-80px' }}
          />
        </div>

        <div
          className="rounded-3xl px-10 pt-20 pb-12 text-center"
          style={{
            background:
              'linear-gradient(160deg, #1a1f2e 0%, #0E0E0E 60%, #0a0a0a 100%)',
            border: '4px solid rgba(243, 167, 52, 0.35)',
          }}
        >
          {/* Title */}
          <h2 className="text-white font-sans font-black text-2xl md:text-3xl uppercase tracking-wide mb-6 leading-tight">
            365-Days, 100% Money-Back Guarantee
          </h2>

          {/* Body */}
          <p className="text-white/60 font-sans text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Try Balls and Brains for 365 days. If you don&apos;t feel
            dramatically better—if your energy doesn&apos;t sustain for 6-8
            hours, if your focus doesn&apos;t sharpen, if your workouts
            don&apos;t improve—We don&apos;t deserve your money. Simply email us
            for a full refund. No questions asked. No return required.
          </p>

          {/* Bold claim */}
          <p className="text-white font-sans font-black text-base md:text-lg mb-6">
            You can drink the entire container and still get your money back.
          </p>

          {/* Sub */}
          <p className="text-white/35 font-sans text-sm leading-relaxed max-w-xl mx-auto mb-8">
            Why? Because we know this works. You&apos;re either going to be
            thrilled with your results, or we don&apos;t want your money.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
