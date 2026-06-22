import imgCognitive from '@assets/sections/cognitive.webp';
import FadeUp from './shared/FadeUp';
import { BONUS_STACK } from '@/data/constants';

export default function BonusSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeUp>
          <img
            src={imgCognitive}
            alt="Cognitive enhancement — mushrooms, coffee and neurons"
            width={476}
            height={503}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-2xl"
          />
        </FadeUp>

        <div>
          <p className="text-bb-gold-mid text-[0.75rem] font-bold tracking-[0.3em] uppercase mb-3">
            Bonus
          </p>
          <FadeUp as="h2" className="text-[2rem] md:text-[2.75rem] font-bold! leading-[1.1] tracking-tight text-gold-gradient">
            Cognitive Enhancement Stack
          </FadeUp>
          <span
            className="block w-16 h-0.5 mt-4 mb-7 rounded-full"
            style={{ background: 'linear-gradient(90deg, #CF9947 0%, #7D5D2C 100%)' }}
          />

          <FadeUp delay={0.1}>
            <p className="text-white/80 text-[0.9375rem] leading-relaxed mb-5">
              While optimizing your hormones, Balls &amp; Brains also enhances brain performance:
            </p>

            <ul className="space-y-2.5">
              {BONUS_STACK.map(([name, desc]) => (
                <li key={name} className="flex gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-bb-gold-mid shrink-0" />
                  <span className="text-white/80 text-[0.9375rem] leading-relaxed">
                    <strong className="text-white font-semibold">{name}</strong> — {desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 border-l-4 border-bb-gold-mid rounded-r-lg bg-[#1a140b] px-5 py-4">
              <p className="text-bb-gold text-[0.9375rem] italic leading-relaxed">
                The Result: Razor-sharp mental clarity, sustained focus, and cognitive performance
                that lasts all day.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
