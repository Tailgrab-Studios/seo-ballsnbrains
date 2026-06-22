import starIcon from '@assets/icons/Star.svg';
import kit1 from '@assets/products/1kit.webp';
import FadeUp from './shared/FadeUp';
import ReviewStars from './shared/ReviewStars';
import { REVIEW_DIST, REVIEW_TOTAL, PDP_REVIEWS } from '@/data/constants';

export default function ReviewsSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-[71.25rem] mx-auto">
        {/* Summary bar */}
        <FadeUp className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center pb-8 border-b border-bb-separator">
          <div>
            <p className="text-[3.5rem] font-black leading-none text-white">4.8</p>
            <div className="flex gap-1 my-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <img key={i} src={starIcon} alt="" aria-hidden="true" className="w-5 h-5" />
              ))}
            </div>
            <p className="text-white/50 text-sm">Based on 1,847 reviews</p>
          </div>

          <div className="space-y-1.5">
            {REVIEW_DIST.map(([star, count]) => (
              <div key={star} className="flex items-center gap-2 text-[0.75rem]">
                <span className="text-white/70 flex items-center gap-1 w-7 shrink-0">
                  {star}
                  <img src={starIcon} alt="" aria-hidden="true" className="w-2.5 h-2.5" />
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-bb-gold-mid"
                    style={{ width: `${((count / REVIEW_TOTAL) * 100).toFixed(1)}%` }}
                  />
                </div>
                <span className="text-white/50 w-10 text-right shrink-0">{count}</span>
              </div>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-[3.25rem] font-black leading-none text-white">96%</p>
            <p className="text-white/50 text-sm mt-2">would recommend these products</p>
          </div>
        </FadeUp>

        {/* Actions bar */}
        <div className="flex items-center justify-between gap-4 py-6 flex-wrap">
          <p className="text-white/50 text-sm">1,092 reviews · Sort: Most Recent</p>
          <a
            href="https://www.instagram.com/tryballsnbrains/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-gold text-[0.875rem]"
          >
            Write a Review
          </a>
        </div>

        {/* Review list */}
        <div>
          {PDP_REVIEWS.map((r, i) => (
            <FadeUp
              key={r.name}
              delay={Math.min(i, 4) * 0.05}
              className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-3 md:gap-8 py-7 border-b border-bb-separator"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-full bg-bb-gold-mid/15 text-bb-gold-mid text-[0.6875rem] font-bold flex items-center justify-center shrink-0">
                    {r.initials}
                  </span>
                  <span className="text-white font-semibold text-sm">{r.name}</span>
                </div>
                <p className="text-white/35 text-[0.625rem] uppercase tracking-[0.18em] mt-3 mb-1.5">
                  Reviewing
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={kit1}
                    alt=""
                    aria-hidden="true"
                    className="w-8 h-8 rounded object-contain bg-black/40 shrink-0"
                  />
                  <span className="text-white/60 text-xs leading-tight">
                    Balls &amp; Brains™
                    <br />
                    Testosterone Coffee
                  </span>
                </div>
                <p className="text-bb-green-light text-xs mt-2.5">✓ I recommend this product</p>
              </div>

              <div>
                <ReviewStars n={r.stars} />
                <p className="text-white font-bold text-[1.0625rem] mt-2 mb-2">{r.title}</p>
                <p className="text-white/60 text-[0.875rem] leading-relaxed whitespace-pre-line">
                  {r.body}
                </p>
                <p className="text-bb-gold-mid font-bold text-sm mt-2 cursor-pointer">Read More</p>
                <p className="text-white/35 text-xs mt-3 flex items-center gap-3">
                  Was this helpful? <span>👍 {r.helpful}</span> <span>👎 0</span>
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
