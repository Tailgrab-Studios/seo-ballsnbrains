import React, { useState, useEffect, useRef } from 'react';
// ── Videos ─────────────────────────────────────────────────────────────────
import video01 from '../../assets/videos/video-01.mp4';
import video02 from '../../assets/videos/video-02.mp4';
import video04 from '../../assets/videos/video-04.mp4';
import video07 from '../../assets/videos/video-07.mp4';
import video08 from '../../assets/videos/video-08.mp4';

const playlist = [video02, video07, video08, video04, video01];

const HeroSection = () => {
  const [ctaHover, setCtaHover] = useState(false);
  const [activeSlot, setActiveSlot] = useState(0);
  const videoRefs = [useRef(null), useRef(null)];
  // índice do playlist em cada slot — ref pra evitar problema de closure/state assíncrono
  const slotIdx = useRef([0, 1]);

  useEffect(() => {
    const v0 = videoRefs[0].current;
    const v1 = videoRefs[1].current;
    v0.src = playlist[0];
    v1.src = playlist[1];
    v0.load();
    v1.load();
    v0.play();
  }, []);

  const handleEnded = finishedSlot => {
    const nextSlot = finishedSlot === 0 ? 1 : 0;

    // Toca o slot pré-carregado imediatamente
    videoRefs[nextSlot].current?.play();
    setActiveSlot(nextSlot);

    // Carrega o próximo-próximo no slot que terminou
    const nextNextIdx = (slotIdx.current[nextSlot] + 1) % playlist.length;
    slotIdx.current[finishedSlot] = nextNextIdx;
    const vid = videoRefs[finishedSlot].current;
    if (vid) {
      vid.src = playlist[nextNextIdx];
      vid.load();
    }
  };

  const tickerItems = [
    '🧠 MENTAL FOCUS',
    'NATURAL TESTOSTERONE',
    '🔥 ENERGY WITHOUT CRASH',
    'ORGANIC INGREDIENTS',
    '💪 STRENGTH & VITALITY',
    'NO SIDE EFFECTS',
    '🚀 RESULTS IN DAYS',
    'EXCLUSIVE FORMULA',
  ];

  return (
    <div className="font-serif relative overflow-hidden">
      {/* Announcement Bar */}
      <div className="bg-orange-700 text-white text-center py-2 px-4 text-xs font-semibold tracking-wide cursor-pointer">
        🎉 Launch offer — Save up to 44% forever →
      </div>

      {/* Hero — ocupa o restante da tela */}
      <div className="relative h-[calc(100vh-32px)] flex items-center justify-center overflow-hidden">
        {/* Double-buffer video BG — 2 elementos, mas cicla pelos 5 vídeos do playlist */}
        {[0, 1].map(slot => (
          <video
            key={slot}
            ref={videoRefs[slot]}
            muted
            playsInline
            preload="auto"
            onEnded={() => handleEnded(slot)}
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{
              opacity: activeSlot === slot ? 1 : 0,
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-6 max-w-3xl animate-[fadeUp_0.9s_ease_both]">
          <div className="text-yellow-400 text-2xl tracking-widest mb-2">
            ★★★★★
          </div>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-5 tracking-tight">
            Your Entire Testosterone Stack. <br />
            <em className="italic text-[#dca331] not-italic font-normal">
              One Scoop. One Coffee.
            </em>
          </h1>

          <p className="font-sans text-base md:text-lg leading-relaxed text-white/80 max-w-xl mx-auto mb-9">
            12 clinical-dose ingredients packed into one daily testosterone
            mushroom coffee.
          </p>

          <a
            href="https://lp.ballsnbrains.com/preclick"
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            className={`inline-block bg-[#dca331] text-white font-sans font-black text-sm uppercase tracking-widest py-5 px-12 rounded-full no-underline transition-all duration-200 ${
              ctaHover
                ? 'scale-105 shadow-[0_0_60px_rgba(249,115,22,0.7)]'
                : 'shadow-[0_0_40px_rgba(249,115,22,0.5)]'
            }`}
          >
            Try It & Save 44%
          </a>

          <p className="font-sans text-xs text-white/70 mt-4 tracking-wide">
            ✓ 365-Days Guarantee.
          </p>
        </div>

        {/* Ticker — grudado no bottom do hero */}
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-[#1a1a1a] border-t-2 border-b-2 border-orange-500 overflow-hidden py-3 whitespace-nowrap">
          <div className="inline-block animate-[ticker_25s_linear_infinite]">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className={`font-sans font-bold text-xs tracking-widest uppercase mr-12 ${
                  i % 2 === 0 ? 'text-white' : 'text-orange-500'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
