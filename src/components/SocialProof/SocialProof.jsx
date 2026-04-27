import React, { useState } from 'react';

import video05 from '../../assets/videos/video-05.mp4';
import video06 from '../../assets/videos/video-06.mp4';
import wallpaper from '../../assets/background/background-black.webp';
import bgCoffee from '../../assets/background/background-ground.webp';

export const SocialProof = () => {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);

  const testimonials = [
    {
      video: video06,
      title: 'My T doubled in 3 months.',
      quote:
        "I did 3 months of Balls N'Brains without changing my diet or training. My T went from 410 to 820. My libido came back and my wife can't stop complimenting my performance in bed.",
      name: 'Marcus T., 44',
    },
    {
      video: video05,
      title: 'Changed my body completely.',
      quote:
        'I felt a difference in focus and energy in the first week. After 60 days, my body composition changed completely. Leaner, stronger, and no more man boobs.',
      name: 'Daniel R., 38',
    },
  ];

  const day7Items = [
    'L-Theanine smooths your caffeine curve — energy feels cleaner, steadier.',
    'Ashwagandha KSM-66 begins modulating your cortisol baseline.',
    "Lion's Mane starts supporting nerve growth factor (NGF) production.",
    'The afternoon crash starts fading — no more 2pm collapse.',
  ];

  const prev = () =>
    setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section
      className="relative py-20 px-6"
      id="reviews"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'inset 0 0 50px rgba(249, 115, 22, 0.4)',
      }}
    >
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        {/* Block 1 — Testimonials Carousel */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_320px_1fr] md:h-[360px]">
              {/* Col 1 — Stars + heading */}
              <div className="flex flex-col justify-center items-center text-center gap-2 px-6 py-6 border-b md:border-b-0 md:border-r border-[#1f1f1f]">
                <div className="text-[#dca331] text-lg tracking-wider">★★★★★</div>
                <p className="text-white/40 font-sans text-lg">63,028 Reviews</p>
                <h2 className="text-white font-serif text-2xl md:text-6xl font-bold leading-tight">
                  Don&apos;t Just Take Our Word For It
                </h2>
              </div>

              {/* Col 2 — Vídeo */}
              <div className="relative h-[260px] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-[#1f1f1f]">
                <video
                  key={current}
                  src={testimonials[current].video}
                  autoPlay
                  muted={muted}
                  loop
                  playsInline
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setMuted(m => !m)}
                />
                <button
                  onClick={() => setMuted(m => !m)}
                  className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
                >
                  {muted ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Col 3 — Quote */}
              <div className="flex flex-col justify-between px-6 py-6 bg-[#0d0d0d] border-t md:border-t-0 md:border-l border-[#1f1f1f]">
                <div className="flex flex-col gap-2">
                  <div className="text-[#dca331] text-base">★★★★★</div>
                  <p className="text-white font-serif font-bold text-base md:text-2xl leading-snug">
                    {testimonials[current].title}
                  </p>
                  <p className="text-white/90 font-sans text-lg leading-relaxed">
                    &quot;{testimonials[current].quote}&quot;
                  </p>
                </div>
                <div className="flex flex-col gap-1 mt-3">
                  <p className="text-white/45 font-sans text-[11px] uppercase tracking-widest">
                    {testimonials[current].name}
                  </p>
                  <span className="text-white/30 font-sans text-[10px] border border-white/20 rounded px-2 py-0.5 w-fit">
                    Verified Buyer
                  </span>
                </div>
              </div>
            </div>

            {/* Setas — desktop: coluna à direita */}
            <div className="hidden md:flex flex-col gap-3 shrink-0">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#dca331]/40 flex items-center justify-center text-[#dca331] hover:bg-[#dca331] hover:text-white hover:shadow-[0_0_20px_rgba(220,163,49,0.6)] transition-all text-2xl font-light"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#dca331]/40 flex items-center justify-center text-[#dca331] hover:bg-[#dca331] hover:text-white hover:shadow-[0_0_20px_rgba(220,163,49,0.6)] transition-all text-2xl font-light"
              >
                ›
              </button>
            </div>
          </div>

          {/* Setas — mobile: linha abaixo do card */}
          <div className="flex md:hidden justify-center gap-4">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-[#1a1a1a] border border-[#dca331]/50 flex items-center justify-center text-[#dca331] active:bg-[#dca331] active:text-white transition-all text-3xl font-light shadow-[0_0_16px_rgba(220,163,49,0.3)]"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-[#1a1a1a] border border-[#dca331]/50 flex items-center justify-center text-[#dca331] active:bg-[#dca331] active:text-white transition-all text-3xl font-light shadow-[0_0_16px_rgba(220,163,49,0.3)]"
            >
              ›
            </button>
          </div>
        </div>

        {/* Block 2 — Timeline: esquerda preta, direita com café */}
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-[#1f1f1f]">
          {/* Left: Title + description — fundo preto */}
          <div className="w-full md:w-2/5 bg-black p-10 flex flex-col justify-center gap-6">
            <p className="text-[#dca331] font-sans font-bold text-xs tracking-[4px] uppercase">
              The Timeline
            </p>
            <h2 className="text-white font-serif text-3xl md:text-4xl font-bold leading-tight">
              Here&apos;s What Happens Inside Your Body
            </h2>
            <p className="text-white/60 font-sans text-base leading-relaxed">
              Each ingredient works on its own timeline. Here&apos;s what to
              expect as they build up in your system.
            </p>
          </div>

          {/* Right: Day 7 — fundo de café */}
          <div
            className="relative w-full md:w-3/5 p-10 flex flex-col gap-8 border-t md:border-t-0 md:border-l border-white/10"
            style={{
              backgroundImage: `url(${bgCoffee})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Overlay sutil só pra garantir leitura */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />

            <div className="relative z-10 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#dca331]" />
              <h3 className="text-white font-serif text-2xl font-bold">
                Day 7
              </h3>
            </div>

            <div className="relative z-10 flex flex-col gap-5">
              {day7Items.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <svg
                    viewBox="0 0 14 14"
                    width="18"
                    height="18"
                    fill="none"
                    className="mt-0.5 shrink-0"
                  >
                    <circle
                      cx="7"
                      cy="7"
                      r="6.5"
                      stroke="#dca331"
                      strokeWidth="1"
                    />
                    <polyline
                      points="4,7 6,9.5 10,4.5"
                      stroke="#dca331"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-white/80 font-sans text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;