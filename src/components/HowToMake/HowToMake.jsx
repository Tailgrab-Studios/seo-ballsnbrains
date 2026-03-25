import React from 'react';

export const HowToMake = () => {
  return (
    <section className="bg-[#070707] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#dca331] font-sans font-bold text-xs tracking-[4px] uppercase mb-3">
            Ready in 30 seconds
          </p>
          <h2 className="text-white font-serif text-4xl md:text-5xl font-bold leading-tight">
            How to <span className="text-[#dca331]">Make</span>
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Video 1:1 */}
            <div className="w-full md:w-[420px] md:h-[420px] shrink-0 aspect-square bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] flex items-center justify-center">
              <span className="text-white/20 text-sm font-sans">[ Vídeo ]</span>
            </div>
            {/* Steps */}
            <div className="flex flex-col flex-1 gap-8">
              <h3 className="text-white font-serif text-3xl md:text-4xl font-bold">
                Tastes like <span className="text-[#dca331]"> coffee</span>.
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-5 items-start">
                  <div className="w-9 h-9 shrink-0 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#dca331] font-bold text-sm">
                    1
                  </div>
                  <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed pt-1">
                    It tastes like the coffee you already drink.
                  </p>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-9 h-9 shrink-0 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#dca331] font-bold text-sm">
                    2
                  </div>
                  <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed pt-1">
                    The difference is what happens after — no crash at 2pm, no
                    jitters, no reaching for a second cup.
                  </p>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-9 h-9 shrink-0 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#dca331] font-bold text-sm">
                    3
                  </div>
                  <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed pt-1">
                    Just steady, clean energy that carries you through the day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1f1f1f]" />

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Video 1:1 */}
            <div className="w-full md:w-[420px] md:h-[420px] shrink-0 aspect-square bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] flex items-center justify-center">
              <span className="text-white/20 text-sm font-sans">[ Vídeo ]</span>
            </div>
            {/* Steps */}
            <div className="flex flex-col flex-1 gap-8">
              <h3 className="text-white font-serif text-3xl md:text-4xl font-bold">
                Works like a <span className="text-[#dca331]"> protocol</span>.
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-5 items-start">
                  <div className="w-9 h-9 shrink-0 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#dca331] font-bold text-sm">
                    1
                  </div>
                  <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed pt-1">
                    The testosterone-support stack most men
                  </p>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-9 h-9 shrink-0 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#dca331] font-bold text-sm">
                    2
                  </div>
                  <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed pt-1">
                    Piece together with 6–8 separate supplements — in one scoop.
                  </p>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-9 h-9 shrink-0 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#dca331] font-bold text-sm">
                    3
                  </div>
                  <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed pt-1">
                    Nothing to add. Nothing to remember. Nothing to swallow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToMake;
