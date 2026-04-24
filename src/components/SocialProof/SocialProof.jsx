import React, { useState } from 'react';

import video05 from '../../assets/videos/video-05.mp4';
import video06 from '../../assets/videos/video-06.mp4';
// ── Images ─────────────────────────────────────────────────────────────────
import image01 from '../../assets/images/image-01.webp';
import image02 from '../../assets/images/image-02.webp';
import image03 from '../../assets/images/image-03.webp';

export const SocialProof = () => {
  const [current, setCurrent] = useState(0);
  const [ctaHover, setCtaHover] = useState(false);

  const testimonials = [
    {
      video: video06,
      quote:
        "I did 3 months of Balls N'Brains without changing my diet or training. My T went from 410 to 820. My libido came back and my wife can't stop complimenting my performance in bed.",
      name: 'Marcus T., 44',
    },
    {
      video: video05,
      quote:
        'I felt a difference in focus and energy in the first week. After 60 days, my body composition changed completely. Leaner, stronger, and no more man boobs.',
      name: 'Daniel R., 38',
    },
  ];

  const dayImages = [image01, image02, image03];

  const days = [
    {
      label: 'Day 7',
      items: [
        {
          icon: '⚡',
          text: 'L-Theanine smooths your caffeine curve — energy feels cleaner, steadier.',
        },
        {
          icon: '🧠',
          text: 'Ashwagandha KSM-66 begins modulating your cortisol baseline.',
        },
        {
          icon: '🌿',
          text: "Lion's Mane starts supporting nerve growth factor (NGF) production.",
        },
        {
          icon: '☀️',
          text: 'The afternoon crash starts fading — no more 2pm collapse.',
        },
      ],
    },
    {
      label: 'Day 30',
      items: [
        {
          icon: '😴',
          text: 'Cortisol levels measurably lower — sleep improves, recovery accelerates.',
        },
        {
          icon: '💪',
          text: 'Tongkat Ali LJ100 reaches effective concentration — T-support kicks in.',
        },
        {
          icon: '🏋️',
          text: 'Cordyceps improves oxygen utilization — workouts feel different.',
        },
        { icon: '🎯', text: 'Focus sharpens. Energy sustains. The fog lifts.' },
      ],
    },
    {
      label: 'Day 90',
      items: [
        {
          icon: '🔥',
          text: 'Full hormonal optimization — cortisol down, testosterone supported, SHBG managed.',
        },
        {
          icon: '⚗️',
          text: 'Ashwagandha, Tongkat Ali and Shilajit working in sync at peak levels.',
        },
        {
          icon: '📈',
          text: 'Compounding effects visible in energy, body composition, drive, and bloodwork.',
        },
        { icon: '🏆', text: "This isn't a spike. This is your new baseline." },
      ],
    },
  ];

  const prev = () =>
    setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-[#0e0e0e] py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-24">
        {/* Block 1 - UGC Reviews Carousel */}
        <div>
          <div className="text-center mb-12">
            <div className="text-[#dca331] text-2xl mb-1">★★★★★</div>
            <p className="text-white/40 font-sans text-sm mb-6">
              63,028 Reviews
            </p>
            <h2 className="text-white font-serif text-4xl md:text-5xl font-bold leading-tight">
              Don&apos;t Just Take Our
              <br />
              Word For It
            </h2>
          </div>

          <div className="relative">
            <div className="border border-[#1f1f1f] rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 aspect-square shrink-0 overflow-hidden">
                <video
                  key={current}
                  src={testimonials[current].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center p-10 gap-6">
                <div className="text-[#dca331] text-lg">★★★★★</div>
                <p className="text-white font-serif text-2xl md:text-3xl font-bold leading-snug">
                  &quot;{testimonials[current].quote}&quot;
                </p>
                <p className="text-white/30 font-sans text-xs uppercase tracking-widest">
                  {testimonials[current].name}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-white/50 hover:text-white hover:border-[#dca331] transition-all"
              >
                ←
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-[#dca331]' : 'bg-[#2a2a2a]'}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-white/50 hover:text-white hover:border-[#dca331] transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1f1f1f]" />

        {/* Block 2 - Timeline */}
        <div>
          <div className="mb-16">
            <p className="text-[#dca331] font-sans font-bold text-xs tracking-[4px] uppercase mb-3">
              Clinically Dosed
            </p>
            <h2 className="text-white font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
              Here&apos;s What Happens
              <br />
              Inside Your Body
            </h2>
            <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-xl">
              Each ingredient works on its own timeline. Here&apos;s what to
              expect as they build up in your system.
            </p>
          </div>

          <div className="flex flex-col gap-28">
            {days.map((day, i) => (
              <div
                key={i}
                className={`flex flex-col gap-0 ${i === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className="w-full md:w-1/2 shrink-0 rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={dayImages[i]}
                    alt={day.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-10 gap-8">
                  <p className="text-[#dca331] font-sans font-bold text-xs tracking-[4px] uppercase">
                    {day.label}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {day.items.map((item, j) => (
                      <div key={j} className="flex flex-col gap-2">
                        <span className="text-3xl">{item.icon}</span>
                        <p className="text-white/60 font-sans text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <a
              href="https://lp.ballsnbrains.com/preclick"
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              className={`inline-block bg-[#dca331] text-black font-sans font-black text-sm uppercase tracking-widest py-5 px-12 rounded-full no-underline transition-all duration-200 ${
                ctaHover
                  ? 'scale-105 shadow-[0_0_60px_rgba(220,163,49,0.7)]'
                  : 'shadow-[0_0_40px_rgba(220,163,49,0.5)]'
              }`}
            >
              Experimente e Economize 44%
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
