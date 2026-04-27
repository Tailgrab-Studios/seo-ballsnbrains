import React, { useState } from 'react';
import productImg from '../../assets/background/background-hero.webp';

const trustBadges = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 md:w-[34px] md:h-[34px]"
        fill="none"
        stroke="#dca331"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="m9 13 2 2 4-4" />
      </svg>
    ),
    text: '12 Clinical-Dose\nIngredients',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 md:w-[34px] md:h-[34px]"
        fill="none"
        stroke="#dca331"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    text: 'Made with Patented\nExtracts',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 md:w-[34px] md:h-[34px]"
        fill="none"
        stroke="#dca331"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12.5 2.5 2.5 4.5-5" />
      </svg>
    ),
    text: '100% Money Back\nGuarantee',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 md:w-[34px] md:h-[34px]"
        fill="none"
        stroke="#dca331"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
      </svg>
    ),
    text: 'Made in the USA\nGMP Certified',
  },
];

const HeroSection = () => {
  const [ctaHover, setCtaHover] = useState(false);

  return (
    <div className="bg-[#070707] w-full">
      {/* Hero — imagem full-bleed como background, texto sobreposto */}
      <div className="relative w-full min-h-screen md:h-screen overflow-hidden">
        {/* Imagem de fundo full-bleed */}
        <img
          src={productImg}
          alt="Balls & Brains — Testosterone Mushroom Coffee"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay — preto forte no mobile, transparente no desktop */}
        <div className="absolute inset-0 bg-black/70 md:bg-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-center h-full min-h-screen md:min-h-0 px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-0">
          <div className="flex flex-col gap-4 md:gap-7 max-w-[520px] mx-auto md:mx-0 w-full">
            <p className="text-[#dca331] font-sans font-bold text-[10px] md:text-sm tracking-[3px] md:tracking-[4px] uppercase text-center md:text-left">
              The Ultimate Daily Upgrade
            </p>

            <h1 className="text-white font-serif leading-[1.05] text-center md:text-left">
              <span className="block text-[32px] sm:text-5xl md:text-7xl lg:text-8xl font-extrabold md:whitespace-nowrap">
                Your Entire
              </span>
              <span className="block text-[32px] sm:text-5xl md:text-7xl lg:text-8xl font-extrabold md:whitespace-nowrap">
                Testosterone Stack.
              </span>
              <span className="block text-xl sm:text-3xl md:text-5xl lg:text-6xl font-light italic text-[#dca331] mt-1 md:mt-3 md:whitespace-nowrap">
                One Scoop. One Cup.
              </span>
            </h1>

            <p className="text-white/65 font-sans text-sm md:text-xl leading-relaxed text-center md:text-left">
              12 clinical-dose ingredients packed into one daily testosterone
              mushroom coffee.
            </p>

            <div className="flex flex-col items-stretch gap-2 md:gap-4">
              <a
                href="https://ballsnbrains.com/shp/tmc-adv/08/p2-v2/"
                onMouseEnter={() => setCtaHover(true)}
                onMouseLeave={() => setCtaHover(false)}
                className={`block w-full text-center bg-[#dca331] text-white font-sans font-black text-sm md:text-base uppercase tracking-widest py-4 md:py-6 rounded-xl no-underline transition-all duration-200 ${
                  ctaHover
                    ? 'scale-[1.02] shadow-[0_0_70px_rgba(249,115,22,0.75)]'
                    : 'shadow-[0_0_50px_rgba(249,115,22,0.55)]'
                }`}
              >
                Try It & Save 44%
              </a>

              <div className="flex items-center gap-2 justify-center md:justify-start">
                <svg viewBox="0 0 14 14" width="16" height="16" fill="none">
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
                <span className="text-white/55 font-sans text-xs md:text-base">
                  365-Day Guarantee
                </span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="pt-4 md:pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-5 sm:gap-y-0">
                {trustBadges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1.5 md:gap-3 text-center"
                  >
                    {badge.icon}
                    <p className="text-white/60 font-sans text-[9px] md:text-[11px] font-semibold uppercase tracking-[1px] leading-[1.4] whitespace-pre-line">
                      {badge.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
