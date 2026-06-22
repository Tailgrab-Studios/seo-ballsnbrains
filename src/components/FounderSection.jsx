import { useRef, useState } from 'react';
import videoFounder from '@assets/sections/videos/video5.mp4';
import starIcon from '@assets/icons/Star.svg';
import playVideo from '@assets/icons/play-video.svg';
import FadeUp from './shared/FadeUp';
import { FOUNDER_POINTS } from '@/data/constants';

export default function FounderSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="bg-bb-light text-bb-text-dark px-4 py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <FadeUp as="h2" className="text-[2rem] md:text-[2.75rem] font-bold! leading-[1.1] tracking-tight">
            <span className="text-gold-gradient">Tired of Reading?</span>{' '}
            <span className="text-bb-text-dark">Here&apos;s a Message From Our Founder</span>
          </FadeUp>
          <span
            className="block w-16 h-0.5 mt-4 mb-7 rounded-full"
            style={{ background: 'linear-gradient(90deg, #CF9947 0%, #7D5D2C 100%)' }}
          />

          <FadeUp delay={0.1}>
            <div className="space-y-4 text-bb-text-dark/60 text-[0.9375rem] leading-relaxed">
              <p>
                I&apos;m Dr. Michael Bennett, MD, specialist in Sports Medicine &amp; Men&apos;s
                Hormonal Health at Mass General Hospital
              </p>
              <p>
                and I&apos;m the founder of{' '}
                <strong className="text-bb-gold font-semibold">Balls &amp; Brains.</strong>
              </p>
              <p>
                Three years ago, I was staring at my testosterone results: 360 ng/dL. Other doctors
                said it was &ldquo;normal for my age.&rdquo; But I felt like absolute shit.
              </p>
              <p>
                I spent 18 months researching the connection between cortisol, coffee, and
                testosterone. What I discovered changed everything.
              </p>
              <p>In this video, I&apos;ll explain:</p>
            </div>

            <ul className="space-y-2 my-4">
              {FOUNDER_POINTS.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5">
                  <img src={starIcon} alt="" aria-hidden="true" className="w-3.5 h-3.5 mt-1 shrink-0" />
                  <span className="text-bb-text-dark/60 text-[0.9375rem]">{pt}</span>
                </li>
              ))}
            </ul>

            <p className="text-bb-text-dark/60 text-[0.9375rem]">Watch to find out more.</p>
          </FadeUp>
        </div>

        <FadeUp className="relative w-full rounded-2xl overflow-hidden order-first md:order-none">
          <video
            ref={videoRef}
            src={videoFounder}
            preload="metadata"
            playsInline
            className="w-full h-auto"
          />
          <button
            type="button"
            aria-label={playing ? 'Pause video' : 'Play video'}
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center group cursor-pointer"
          >
            {!playing && (
              <img
                src={playVideo}
                alt=""
                className="w-20 h-20 transition-transform duration-300 group-hover:scale-110"
              />
            )}
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
