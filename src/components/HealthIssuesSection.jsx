import num1 from '@assets/art/art1.webp';
import num2 from '@assets/art/art2.webp';
import num3 from '@assets/art/art3.webp';
import num4 from '@assets/art/art4.webp';
import num5 from '@assets/art/art5.webp';
import num6 from '@assets/art/art6.webp';
import num7 from '@assets/art/art7.webp';
import FadeUp from './shared/FadeUp';
import { HEALTH_ISSUES } from '@/data/constants';

const NUMBERS = [num1, num2, num3, num4, num5, num6, num7];

export default function HealthIssuesSection() {
  return (
    <section className="px-4 md:px-[3.75rem] py-16 md:py-24">
      <FadeUp
        as="h2"
        className="text-[1.875rem] md:text-[3rem] font-bold! leading-tight tracking-tight text-center"
      >
        <span className="text-white">Beneficial Against Multiple </span>
        <span className="text-gold-gradient">Health Issues</span>
      </FadeUp>
      <FadeUp
        as="p"
        delay={0.1}
        className="text-white/55 text-[0.9375rem] md:text-[1.0625rem] leading-relaxed text-center max-w-[44rem] mx-auto mt-5 mb-12 md:mb-16"
      >
        With the help of functional medicine doctors and hormone specialists, we
        developed Balls &amp; Brains to target the most common issues men face
        from declining testosterone:
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {HEALTH_ISSUES.map(([title, body], i) => (
          <FadeUp
            key={title}
            delay={(i % 3) * 0.08}
            className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2.5 rounded-2xl border border-bb-separator bg-[#121212] p-5 md:p-6"
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-bb-gold-mid overflow-hidden flex items-center justify-center">
              <img
                src={NUMBERS[i]}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-white font-bold! text-[1.0625rem] leading-tight">
              {title}
            </h3>
            <p className="col-span-2 text-bb-gold/80 text-[0.75rem] md:text-[0.875rem] leading-relaxed">
              {body}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
