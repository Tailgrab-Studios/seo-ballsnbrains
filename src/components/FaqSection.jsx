import FadeUp from './shared/FadeUp';
import FaqItem from './shared/FaqItem';
import { FAQS } from '@/data/constants';

export default function FaqSection() {
  return (
    <section className="bg-bb-light text-bb-text-dark px-4 py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto">
        <FadeUp as="p" className="text-center text-bb-gold-mid text-[0.8125rem] font-bold tracking-[0.35em] mb-3">
          [ F.A.Q ]
        </FadeUp>
        <FadeUp
          as="h2"
          className="text-center text-[2rem] md:text-[3rem] font-bold! leading-tight tracking-tight mb-10 md:mb-14"
        >
          Questions Answered
        </FadeUp>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <FadeUp key={f.q} delay={Math.min(i, 4) * 0.04}>
              <FaqItem q={f.q} a={f.a} defaultOpen={i === 0} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
