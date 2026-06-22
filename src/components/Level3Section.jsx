import imgBlockConversion from '@assets/sections/videos/video4.mp4';
import FadeUp from './shared/FadeUp';
import { LEVEL3_INHIBITORS } from '@/data/constants';

export default function Level3Section() {
  return (
    <section className="bg-bb-light text-bb-text-dark px-4 py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="text-bb-gold-mid text-[0.75rem] font-bold tracking-[0.3em] uppercase mb-3">
            Level 3
          </p>
          <FadeUp
            as="h2"
            className="text-[2rem] md:text-[2.75rem] font-bold! leading-[1.1] tracking-tight"
          >
            <span className="text-bb-text-dark">Block </span>
            <span className="text-gold-gradient">
              Testosterone-to-Estrogen Conversion
            </span>
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
                When testosterone is low, an enzyme called{' '}
                <strong className="text-bb-text-dark font-semibold">
                  aromatase
                </strong>{' '}
                activates and converts your remaining testosterone into
                estrogen. This causes man boobs, belly fat, mood swings, and
                further testosterone suppression.
              </p>
              <p>
                <strong className="text-bb-text-dark font-semibold">
                  The Solution:
                </strong>{' '}
                Balls &amp; Brains Testosterone Coffee includes natural
                aromatase inhibitors:
              </p>
            </div>

            <ul className="space-y-2.5 mt-4">
              {LEVEL3_INHIBITORS.map(([name, desc]) => (
                <li key={name} className="flex gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-bb-gold-mid shrink-0" />
                  <span className="text-bb-text-dark/70 text-[0.9375rem] leading-relaxed">
                    <strong className="text-bb-text-dark font-semibold">
                      {name}
                    </strong>{' '}
                    — {desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 border-l-4 border-bb-gold-mid rounded-r-lg bg-[#1a140b] px-5 py-4">
              <p className="text-bb-gold text-[0.9375rem] italic leading-relaxed">
                The Result: You KEEP the testosterone your body produces instead
                of watching it convert into the female hormone.
              </p>
            </div>
          </FadeUp>
        </div>

        <FadeUp className="order-first md:order-none">
          <video
            src={imgBlockConversion}
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
