import imgCleanEnergy from '@assets/sections/videos/video2.mp4';
import FadeUp from './shared/FadeUp';

export default function Level1Section() {
  return (
    <section className="bg-bb-light text-bb-text-dark px-4 py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="text-bb-gold-mid text-[0.75rem] font-bold tracking-[0.3em] uppercase mb-3">
            Level 1
          </p>
          <FadeUp
            as="h2"
            className="text-[2rem] md:text-[2.75rem] font-bold! leading-[1.1] tracking-tight"
          >
            <span className="text-bb-text-dark">Clean Energy Without</span>
            <br />
            <span className="text-gold-gradient">Cortisol Spike</span>
          </FadeUp>
          <span
            className="block w-16 h-0.5 mt-4 mb-7 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #CF9947 0%, #7D5D2C 100%)',
            }}
          />

          <FadeUp delay={0.1}>
            <div className="space-y-4 text-bb-text-dark/70 text-[0.9375rem] leading-relaxed">
              <p>
                <strong className="text-bb-text-dark font-semibold">
                  The Problem:
                </strong>{' '}
                Regular coffee contains 200–300mg of caffeine that spikes
                cortisol by 20–30% within minutes. This cortisol surge directly{' '}
                <strong className="text-bb-text-dark font-semibold">
                  suppresses your HPG axis
                </strong>
                —the system that tells your body to make testosterone.
              </p>
              <p>
                <strong className="text-bb-text-dark font-semibold">
                  The Solution:
                </strong>{' '}
                Balls &amp; Brains uses just 100mg of caffeine (1/3 of regular
                coffee) combined with L-Theanine (100mg) and MCT Oil Powder
                (2000mg).
              </p>
              <p>
                This creates smooth, sustained energy for 6–8 hours with{' '}
                <span className="text-bb-gold-mid font-semibold">
                  zero cortisol spike
                </span>
                . You get alertness and mental clarity without triggering the
                stress response that destroys testosterone.
              </p>
              <p>
                <strong className="text-bb-text-dark font-semibold">
                  Clinical Backing:
                </strong>{' '}
                A study in the American Journal of Clinical Nutrition showed
                this exact combination provides{' '}
                <span className="text-bb-gold-mid font-semibold">
                  sustained cognitive performance
                </span>{' '}
                without raising cortisol levels.
              </p>
            </div>
          </FadeUp>
        </div>

        <FadeUp className="order-first md:order-none">
          <video
            src={imgCleanEnergy}
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
