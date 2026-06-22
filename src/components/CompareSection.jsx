import bbSymbol from '@assets/utils/bb-symbol.svg';
import FadeUp from './shared/FadeUp';
import CompareCell from './shared/CompareCell';
import { COMPARE_ROWS } from '@/data/constants';

export default function CompareSection() {
  return (
    <section className="px-4 md:px-[3.75rem] py-16 md:py-24">
      <FadeUp
        as="h2"
        className="text-[1.875rem] md:text-[2.75rem] font-bold! leading-tight tracking-tight text-center mb-10 md:mb-14"
      >
        <span className="text-white">What Makes </span>
        <span className="text-gold-gradient">Balls &amp; Brains</span>
        <span className="text-white"> Better?</span>
      </FadeUp>

      <div
        className="overflow-x-auto"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black calc(100% - 3rem), transparent)',
          maskImage: 'linear-gradient(to right, black calc(100% - 3rem), transparent)',
        }}
      >
        <div className="grid grid-cols-[minmax(9rem,1.1fr)_minmax(max-content,0.7fr)_minmax(max-content,1fr)_minmax(max-content,1.05fr)_minmax(max-content,1.05fr)]">
          {/* Header */}
          <div />
          <div className="rounded-t-2xl border-t border-x border-bb-gold-mid bg-bb-gold-mid/[0.06] px-4 pt-6 pb-5 flex flex-col items-center text-center">
            <img src={bbSymbol} alt="" aria-hidden="true" className="h-7 w-auto mb-2" />
          </div>
          <div className="px-4 py-5 flex items-end justify-center text-center">
            <span className="text-white/80 font-bold text-[0.95rem] whitespace-nowrap">
              Regular Coffee
            </span>
          </div>
          <div className="px-4 py-5 flex items-end justify-center text-center">
            <span className="text-white/80 font-bold text-[0.95rem] whitespace-nowrap">
              Other Mushroom Coffee
            </span>
          </div>
          <div className="px-4 py-5 flex items-end justify-center text-center">
            <span className="text-white/80 font-bold text-[0.95rem] whitespace-nowrap">
              Testosterone Pills
            </span>
          </div>

          {/* Rows */}
          {COMPARE_ROWS.map((row, ri) => {
            const last = ri === COMPARE_ROWS.length - 1;
            const [label, bb, ...rest] = row;
            return (
              <div key={label} className="contents">
                <div className="border-b border-bb-separator py-5 pl-2 pr-4 flex items-center">
                  <span className="text-white/55 font-bold uppercase tracking-[0.08em] text-[0.6875rem] leading-tight">
                    {label}
                  </span>
                </div>
                <div
                  className={`border-x border-bb-gold-mid bg-bb-gold-mid/[0.06] px-4 py-5 flex items-center justify-center ${
                    last ? 'border-b rounded-b-2xl' : ''
                  }`}
                >
                  <CompareCell cell={bb} />
                </div>
                {rest.map((c, ci) => (
                  <div
                    key={ci}
                    className="border-b border-bb-separator px-4 py-5 flex items-center justify-center"
                  >
                    <CompareCell cell={c} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
