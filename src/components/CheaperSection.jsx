import imgCheaper from '@assets/sections/videos/video6.mp4';
import FadeUp from './shared/FadeUp';
import { PRICE_COMPARE } from '@/data/constants';

export default function CheaperSection() {
  return (
    <section className="bg-bb-light text-bb-text-dark px-4 py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <FadeUp as="h2" className="text-[2rem] md:text-[2.75rem] font-bold! leading-[1.1] tracking-tight">
            <span className="text-gold-gradient">25 Times Cheaper</span>{' '}
            <span className="text-bb-text-dark">Than Separate Supplements</span>
          </FadeUp>
          <span
            className="block w-16 h-0.5 mt-4 mb-7 rounded-full"
            style={{ background: 'linear-gradient(90deg, #CF9947 0%, #7D5D2C 100%)' }}
          />

          <FadeUp delay={0.1}>
            <p className="text-bb-text-dark/60 text-[0.9375rem] leading-relaxed">
              Balls &amp; Brains combines testosterone optimization, cognitive enhancement, stress
              reduction, and clean energy in one product. Conventionally...
            </p>

            <ul className="space-y-2.5 my-5">
              {PRICE_COMPARE.map(([label, val]) => (
                <li key={label} className="flex gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-bb-gold-mid shrink-0" />
                  <span className="text-[0.9375rem] leading-relaxed">
                    <strong className="text-bb-text-dark font-semibold">{label}</strong>{' '}
                    <span className="text-bb-gold/80">{val}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-bb-text-dark/20 pt-4 mb-5">
              <p className="text-bb-text-dark font-bold text-[0.9375rem]">
                Total separate cost: $200–265/month
              </p>
            </div>

            <div className="space-y-4 text-bb-text-dark/60 text-[0.9375rem] leading-relaxed">
              <p>
                At the supplement-recommended standard of clinical doses, buying these separately
                would cost about{' '}
                <strong className="text-bb-text-dark font-semibold">$2,400–3,180 per year</strong>, which
                is{' '}
                <span className="text-bb-gold font-semibold">
                  up to 25 times more expensive than Balls &amp; Brains subscription price
                </span>{' '}
                ($39/month).
              </p>
              <p>
                Plus you&apos;d be choking down 10+ pills every morning instead of enjoying one
                delicious cup of coffee.
              </p>
              <p>
                Our sale ends soon, so click &ldquo;add to cart&rdquo; to get your Balls &amp;
                Brains Testosterone Coffee before inventory runs out.
              </p>
            </div>
          </FadeUp>
        </div>

        <FadeUp className="order-first md:order-none">
          <video
            src={imgCheaper}
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
