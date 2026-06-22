import imgSeesaw from '@assets/sections/videos/video3.mp4';
import FadeUp from './shared/FadeUp';
import { LEVEL2_CORTISOL, LEVEL2_TESTO } from '@/data/constants';

export default function Level2Section() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeUp>
          <video
            src={imgSeesaw}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-auto rounded-2xl"
          />
        </FadeUp>

        <div>
          <p className="text-bb-gold-mid text-[0.75rem] font-bold tracking-[0.3em] uppercase mb-3">
            Level 2
          </p>
          <FadeUp as="h2" className="text-[2rem] md:text-[2.75rem] font-bold! leading-[1.1] tracking-tight">
            <span className="text-gold-gradient">Rebalance</span>{' '}
            <span className="text-white">The Hormonal Seesaw</span>
          </FadeUp>
          <span
            className="block w-16 h-0.5 mt-4 mb-7 rounded-full"
            style={{ background: 'linear-gradient(90deg, #CF9947 0%, #7D5D2C 100%)' }}
          />

          <FadeUp delay={0.1}>
            <div className="space-y-4 text-white/80 text-[0.9375rem] leading-relaxed">
              <p>
                <strong className="text-white font-semibold">The Problem:</strong> Your hormones
                exist on a biological seesaw. When cortisol goes up, testosterone MUST come down.
                Chronic stress and coffee keep cortisol elevated 24/7, crushing testosterone into
                the dirt.
              </p>
              <p>
                <strong className="text-white font-semibold">The Solution:</strong> Balls &amp;
                Brains Testosterone Coffee attacks both sides of the seesaw simultaneously:
              </p>
            </div>

            <p className="text-white font-bold text-[0.9375rem] mt-5 mb-2.5">
              Cortisol Reduction:
            </p>
            <ul className="space-y-2.5">
              {LEVEL2_CORTISOL.map(([name, desc]) => (
                <li key={name} className="flex gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-bb-gold-mid shrink-0" />
                  <span className="text-white/80 text-[0.9375rem] leading-relaxed">
                    <strong className="text-white font-semibold">{name}</strong> — {desc}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-white font-bold text-[0.9375rem] mt-5 mb-2.5">
              Testosterone Amplification:
            </p>
            <ul className="space-y-2.5">
              {LEVEL2_TESTO.map(([name, desc]) => (
                <li key={name} className="flex gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-bb-gold-mid shrink-0" />
                  <span className="text-white/80 text-[0.9375rem] leading-relaxed">
                    <strong className="text-white font-semibold">{name}</strong> — {desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 border-l-4 border-bb-gold-mid rounded-r-lg bg-[#14100c] px-5 py-4">
              <p className="text-bb-gold text-[0.9375rem] leading-relaxed">
                <strong className="font-bold">The Result:</strong> Cortisol DOWN, Testosterone UP —
                the seesaw rebalances for the first time in years.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
