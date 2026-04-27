import React from 'react';
import video07 from '../../assets/videos/video-07.mp4';
import video08 from '../../assets/videos/video-08.mp4';

export const HowToMake = () => {
  return (
    <section className="bg-[#070707] border-t border-b border-[#1f1f1f]" id="how-it-works">
      <div className="grid grid-cols-1 md:grid-cols-4 md:h-[460px]">

        {/* Col 1 — Vídeo "Tastes like coffee" */}
        <div className="relative h-[280px] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-[#1f1f1f]">
          <video
            src={video07}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Col 2 — Texto "Tastes like coffee" */}
        <div className="flex flex-col justify-center gap-4 px-8 py-10 border-b md:border-b-0 md:border-r border-[#1f1f1f]">
          <h3 className="text-white font-serif text-2xl md:text-3xl font-bold leading-tight">
            Tastes like{' '}
            <span className="text-[#dca331]">coffee</span>.
          </h3>
          <p className="text-white/55 font-sans text-sm leading-relaxed">
            It tastes like the coffee you already drink. The difference is what
            happens after — no crash at 2pm, no jitters, no reaching for a
            second cup. Just steady, clean energy that carries you through the
            day.
          </p>
        </div>

        {/* Col 3 — Vídeo "Works like a protocol" */}
        <div className="relative h-[280px] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-[#1f1f1f]">
          <video
            src={video08}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Col 4 — Texto "Works like a protocol" */}
        <div className="flex flex-col justify-center gap-4 px-8 py-10">
          <h3 className="text-white font-serif text-2xl md:text-3xl font-bold leading-tight">
            Works like a{' '}
            <span className="text-[#dca331]">protocol</span>.
          </h3>
          <p className="text-white/55 font-sans text-sm leading-relaxed">
            The testosterone-support stack most men piece together with 6–8
            separate supplements — in one scoop. Nothing to add. Nothing to
            remember. Nothing to swallow.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowToMake;
