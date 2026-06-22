import pct1 from '@assets/stats/pct-1.svg';
import pct2 from '@assets/stats/pct-2.svg';
import pct3 from '@assets/stats/pct-3.svg';
import pct4 from '@assets/stats/pct-4.svg';
import pct5 from '@assets/stats/pct-5.svg';
import FadeUp from './shared/FadeUp';
import { RESULTS_STATS_TEXT } from '@/data/constants';

const PCT_ICONS = [pct1, pct2, pct3, pct4, pct5];
const RESULTS_STATS = RESULTS_STATS_TEXT.map((text, i) => ({ icon: PCT_ICONS[i], text }));

export default function ResultsSection() {
  return (
    <section className="bg-bb-light text-bb-text-dark px-4 py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <FadeUp as="h2" className="text-[2.625rem] md:text-[3.625rem] font-bold! leading-[1.05] tracking-tight">
            <span className="text-bb-text-dark">Real </span>
            <span className="text-gold-gradient">Results,</span>
            <br />
            <span className="text-bb-text-dark">Real People</span>
          </FadeUp>
          <span
            className="block w-16 h-0.5 mt-5 mb-7 rounded-full"
            style={{ background: 'linear-gradient(90deg, #CF9947 0%, #7D5D2C 100%)' }}
          />
          <FadeUp
            as="p"
            delay={0.1}
            className="text-bb-text-dark/70 text-[0.9375rem] md:text-[1rem] leading-relaxed max-w-[28rem]"
          >
            We conducted a pilot study where{' '}
            <span className="text-bb-gold-mid font-medium">
              287 men aged 35–60 with confirmed low testosterone
            </span>{' '}
            (under 450 ng/dL.) used Balls &amp; Brains for 8–12 weeks. Here are the results:
          </FadeUp>
        </div>

        <div className="space-y-6">
          {RESULTS_STATS.map(({ icon, text }, i) => (
            <FadeUp key={text} delay={i * 0.08} className="flex items-center gap-4">
              <img src={icon} alt="" aria-hidden="true" className="w-16 h-16 shrink-0" />
              <p className="text-bb-text-dark/70 text-[0.9375rem] leading-relaxed">{text}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
