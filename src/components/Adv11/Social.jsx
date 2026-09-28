import { useState } from 'react';
import { caseStudy, comments, testimonials } from './data';
import { Icon, Stars } from './icons';

const Verified = () => (
  <span className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#2e7d3a]">
    <Icon name="check" size={13} strokeWidth={3} />
    Verified Purchase
  </span>
);

// ── 2.6 Testemunhos ────────────────────────────────────────────────────────
export const Testimonials = () => (
  <section aria-label="Testimonials" className="cv-auto mt-12">
    <div className="grid gap-3.5 xl:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="flex flex-col rounded-2xl border border-bb-line bg-[#faf9f6] p-5"
        >
          <Stars size={15} />
          <blockquote className="mt-3 flex-1 text-[0.9375rem] leading-[1.65] text-[#333]">
            {t.text}
          </blockquote>
          <figcaption className="mt-4 border-t border-bb-line pt-3">
            <p className="text-[0.875rem] font-bold text-bb-text-dark">
              {t.name}
              {t.place && <span className="font-normal text-bb-muted"> · {t.place}</span>}
            </p>
            <Verified />
          </figcaption>
        </figure>
      ))}
    </div>

    <figure className="mt-4 grid gap-4 rounded-2xl bg-bb-dark p-5 text-white desk:grid-cols-[1fr_auto] desk:items-center desk:gap-8 desk:p-7">
      <div>
        <p className="text-[0.875rem] font-bold text-bb-gold">Case study — {caseStudy.name}.</p>
        <blockquote className="mt-2 text-[1rem] italic leading-[1.7] text-bb-text-dim">
          "{caseStudy.quote}"
        </blockquote>
      </div>
      <p className="border-t border-bb-separator pt-4 desk:border-t-0 desk:border-l desk:pt-0 desk:pl-8">
        <span className="block text-[0.8125rem] text-bb-text-dim">Three months later:</span>
        <strong className="text-gold-gradient font-mona text-[1.75rem] leading-tight font-semibold">
          "{caseStudy.result}"
        </strong>
      </p>
    </figure>
  </section>
);

// ── 2.12 Comentários (estilo Facebook) ─────────────────────────────────────
// Spec: avatar + nome em negrito + texto + "Like · Reply · 2d" (sem contagem de likes).
const Comment = ({ c, reply = false }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="flex gap-2.5">
      <img
        src={c.avatar}
        alt=""
        loading="lazy"
        className={`shrink-0 rounded-full object-cover ${reply ? 'h-8 w-8' : 'h-10 w-10'}`}
      />
      <div className="min-w-0 flex-1">
        <div className="inline-block max-w-full rounded-2xl bg-[#f0f2f5] px-3.5 py-2">
          <p className="text-[0.84375rem] font-bold text-[#050505]">{c.name}</p>
          <p className="text-[0.90625rem] leading-snug text-[#050505]">{c.text}</p>
        </div>
        <div className="mt-1 flex gap-3.5 pl-3.5 text-[0.75rem] font-bold text-[#65676b]">
          <button
            type="button"
            onClick={() => setLiked((v) => !v)}
            className={`hover:underline ${liked ? 'text-[#1877f2]' : ''}`}
          >
            Like
          </button>
          <button type="button" className="hover:underline">
            Reply
          </button>
          <span className="font-normal">{c.time}</span>
        </div>
      </div>
    </div>
  );
};

const commentCount = comments.reduce((n, c) => n + 1 + (c.replies?.length ?? 0), 0);

export const Comments = () => (
  <section id="comments" className="cv-auto mt-14">
    <h3 className="flex items-center justify-between border-b border-bb-line pb-3 text-[0.9375rem] font-bold text-[#65676b]">
      <span>Comments ({commentCount})</span>
    </h3>
    <div className="mt-5 space-y-6">
      {comments.map((c) => (
        <div key={c.name} className="space-y-4">
          <Comment c={c} />
          {c.replies && (
            <div className="ml-[3.125rem] space-y-4">
              {c.replies.map((r) => (
                <Comment key={r.name} c={r} reply />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);
