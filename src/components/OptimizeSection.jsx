import videoOptimize from '@assets/sections/videos/video1.mp4';
import checkGold from '@assets/icons/check-gold.svg';
import FadeUp from './shared/FadeUp';

export default function OptimizeSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <FadeUp as="h2" className="text-[2rem] md:text-[2.75rem] font-bold! leading-[1.1] tracking-tight">
            <span className="text-white">Optimize</span>
            <br />
            <span className="text-gold-gradient">Testosterone Naturally</span>
          </FadeUp>
          <span
            className="block w-16 h-0.5 mt-4 mb-7 rounded-full"
            style={{ background: 'linear-gradient(90deg, #CF9947 0%, #7D5D2C 100%)' }}
          />

          <FadeUp delay={0.1}>
            <div className="space-y-4 text-white/80 text-[0.9375rem] leading-relaxed">
              <p>
                Modern years of stress, poor sleep, and high-cortisol coffee habits have disrupted
                your body&apos;s{' '}
                <strong className="text-white font-semibold">
                  natural hormone production system
                </strong>
                . When cortisol stays elevated 24/7, it suppresses the HPG axis (the
                brain-to-testicles signal) and blocks your body&apos;s ability to produce
                testosterone.
              </p>
              <p>
                Even worse: the testosterone you DO produce gets converted into estrogen by the
                aromatase enzyme, leading to{' '}
                <strong className="text-white font-semibold">
                  belly fat, man boobs, low libido, and brain fog.
                </strong>
              </p>
              <p>
                Drinking Balls &amp; Brains Testosterone Coffee each morning rebalances the Hormonal
                Seesaw—lowering cortisol by up to 27.9% while amplifying testosterone production by
                15–46%—using the combined power of clinical-dose Tongkat Ali, Ashwagandha, Fadogia,
                and functional mushrooms.
              </p>
              <p>
                This stops the testosterone-to-estrogen conversion and restores your natural
                masculine hormone levels, leaving you with{' '}
                <span className="text-bb-gold font-semibold">
                  sustained energy, sharp focus, lean muscle, and high sex drive.
                </span>{' '}
                Forever.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-7 rounded-xl border border-bb-separator bg-[#14100c] px-4 py-3.5">
              <img src={checkGold} alt="" aria-hidden="true" className="shrink-0 w-5 h-5" />
              <p className="text-white/70 text-[0.875rem]">
                <span className="text-bb-gold font-bold">89%</span> of users reported{' '}
                <span className="text-bb-gold">measurable testosterone increases</span> within 8
                weeks
              </p>
            </div>
          </FadeUp>
        </div>

        <FadeUp className="order-first md:order-none">
          <video
            src={videoOptimize}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-auto rounded-2xl"
          />
        </FadeUp>
      </div>
    </section>
  );
}
