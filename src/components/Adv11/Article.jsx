import doctor from '../../assets/testimonials/man1.webp';
import { comparison, credentials, productDetails, reasons, trustedBy } from './data';
import { Icon, IconThumb } from './icons';
import { Icon3D } from './icons3d';
import { CheckGold, InlineCta } from './ui';

// ── 2.2 Cabeçalho ──────────────────────────────────────────────────────────
const TrustedItem = ({ t, hidden }) => (
  <li aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-1.5 text-[0.8125rem] font-bold whitespace-nowrap desk:flex-col desk:gap-1 desk:text-center desk:text-[0.75rem] desk:leading-tight desk:whitespace-normal">
    <Icon name={t.icon} size={17} className="shrink-0 text-bb-gold" />
    {t.label}
  </li>
);

export const TrustedBy = () => (
  <div className="my-6 flex items-stretch overflow-hidden rounded-2xl bg-bb-dark text-white">
    <div className="flex shrink-0 items-center border-r border-bb-separator px-4 text-[0.8125rem] font-bold whitespace-nowrap text-bb-gold">
      Trusted by
    </div>

    {/* mobile/tablet: métricas passando sozinhas (lista 2x, pausa no toque/hover) */}
    <div className="group relative min-w-0 flex-1 overflow-hidden py-3.5 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_88%,transparent)] desk:hidden">
      <ul className="flex w-max animate-marquee gap-7 pr-7 group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] motion-reduce:animate-none">
        {[...trustedBy, ...trustedBy].map((t, i) => (
          <TrustedItem key={i} t={t} hidden={i >= trustedBy.length} />
        ))}
      </ul>
    </div>

    {/* desktop: 5 selos em grade */}
    <ul className="hidden flex-1 grid-cols-5 gap-2 px-3 py-3.5 desk:grid">
      {trustedBy.map((t) => (
        <TrustedItem key={t.label} t={t} />
      ))}
    </ul>
  </div>
);

const AuthorCard = () => (
  <div className="flex items-start gap-4 border-y border-bb-line py-4">
    <img
      src={doctor}
      alt="Dr. Ben Palmer"
      width={60}
      height={60}
      className="h-[3.75rem] w-[3.75rem] shrink-0 rounded-full object-cover ring-2 ring-bb-gold ring-offset-2"
    />
    <div className="min-w-0 flex-1">
      <p className="flex items-center gap-1.5 text-[1rem] font-bold text-bb-text-dark">
        Dr. Ben Palmer, PhD, MS
        <span
          className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1d9bf0] text-white"
          title="Verified"
        >
          <Icon name="check" size={11} strokeWidth={3.2} />
        </span>
      </p>
      <p className="text-[0.8125rem] text-bb-muted">
        Last Updated: <time dateTime="2026-03-20">March 20, 2026</time>
      </p>
      <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
        {credentials.map((c) => (
          <li key={c.label} className="flex items-center gap-1.5 text-[0.8125rem] text-[#4a463f]">
            <Icon name={c.icon} size={15} className="text-bb-gold-mid" />
            <span>
              {c.label}
              {c.org && (
                <>
                  , <strong className="font-bold text-bb-text-dark">{c.org}</strong>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const ArticleHeader = () => (
  <div id="top">
    <p className="border-b border-bb-line pt-6 pb-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[#736e65]">
      Advertorial
    </p>
    <nav aria-label="Breadcrumb" className="py-2.5 text-[0.8125rem] text-[#736e65]">
      <a href="#top" className="hover:underline">Home</a>
      <span className="mx-1.5">›</span>
      <a href="#top" className="hover:underline">Trending</a>
      <span className="mx-1.5">›</span>
      <span className="text-bb-muted">Men's Performance</span>
    </nav>
    {/* Linha de abertura da copy validada (🌿 ⚡ 🛡️ viraram ícones) */}
    <ul className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] font-medium text-bb-muted">
      {[
        ['leaf', 'Natural Support'],
        ['bolt', 'Real Results'],
        ['shield', 'Proven Safe'],
      ].map(([icon, label], i) => (
        <li key={label} className="flex items-center gap-1.5">
          {i > 0 && <span className="mr-0.5 text-bb-line" aria-hidden>|</span>}
          <Icon name={icon} size={14} className="text-bb-gold-mid" />
          {label}
        </li>
      ))}
    </ul>
    <h1 className="mt-2 text-[1.625rem] leading-[1.2] tracking-[-0.01em] text-bb-text-dark text-balance desk:text-[2.25rem] desk:leading-[1.16]">
      Top Doctor: "10 Reasons Why I Don't Recommend Ryze Mushroom Coffee to Any of My Patients"
    </h1>
    <p className="mt-3 text-[1.1875rem] italic leading-snug text-bb-muted desk:text-[1.3125rem]">
      "Men over 40 shouldn't drink a single cup of this — and here's why…"
    </p>
    <TrustedBy />
    <AuthorCard />
  </div>
);

// ── 2.4 Abertura: tabela 👍👎 ───────────────────────────────────────────────
const Mark = ({ ok }) => (
  <span
    className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
      ok ? 'bg-bb-green/15 text-bb-green-dark' : 'bg-bb-red/10 text-bb-red'
    }`}
    role="img"
    aria-label={ok ? 'Yes' : 'No'}
  >
    <IconThumb up={ok} size={15} />
  </span>
);

export const ComparisonTable = () => (
  <div className="mt-8 overflow-hidden rounded-2xl border border-bb-line">
    <table className="w-full table-fixed border-collapse">
      <colgroup>
        <col className="w-[34%] desk:w-[31%]" />
        <col className="w-[24%]" />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th className="bg-white" />
          {comparison.columns.map((c, i) => (
            <th
              key={c}
              scope="col"
              className={`px-1 py-3.5 text-center font-sans text-[0.625rem] leading-tight !font-bold uppercase sm:text-[0.6875rem] desk:px-3 desk:text-[0.75rem] desk:tracking-[0.06em] ${
                i === 0 ? 'text-bb-dark' : 'bg-bb-dark text-white'
              }`}
              style={
                i === 0
                  ? { background: 'radial-gradient(143% 71% at 38% -10%, #FED9A5 0%, #D09439 100%)' }
                  : undefined
              }
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {comparison.rows.map(([label, ...cells], r) => (
          <tr key={label} className={r % 2 ? 'bg-[#faf9f6]' : 'bg-white'}>
            <th
              scope="row"
              className="border-t border-bb-line px-3 py-3 text-left font-sans text-[0.8125rem] !font-bold leading-snug text-bb-text-dark desk:px-4 desk:text-[0.9375rem]"
            >
              {label}
            </th>
            {cells.map((ok, i) => (
              <td
                key={i}
                className={`border-t border-bb-line py-2.5 text-center ${
                  i === 0 ? 'border-x-2 border-x-bb-gold bg-bb-sand' : ''
                } ${i === 0 && r === comparison.rows.length - 1 ? 'border-b-2 border-b-bb-gold' : ''}`}
              >
                <Mark ok={ok} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ── 2.4 Corpo: #01 a #10 ───────────────────────────────────────────────────
// Legenda da spec fica de fora: o doc não traz o texto (a descrição vai só no alt).
const Figure = ({ src, srcSet, alt }) => (
  <figure className="my-7">
    <img
      src={src}
      srcSet={srcSet}
      sizes="(min-width: 900px) 760px, calc(100vw - 2rem)"
      alt={alt}
      loading="lazy"
      decoding="async"
      width={1024}
      height={1024}
      className="aspect-square w-full rounded-2xl bg-[#f4f3f0] object-cover"
    />
  </figure>
);

const P = ({ children }) => (
  <p className="mb-5 text-[1.0625rem] leading-[1.75] text-[#1f1d1a] desk:text-[1.125rem]">
    {children}
  </p>
);

const Reason = ({ r }) => (
  <section id={`r${r.num}`} className={`scroll-mt-24 pt-10 ${r.num === '01' ? '' : 'cv-auto'}`}>
    <p className="text-cofee-gradient w-fit font-mona text-[0.9375rem] font-semibold">#{r.num}</p>
    <h2 className="mt-1.5 mb-5 text-[1.25rem] leading-[1.28] text-bb-text-dark text-balance desk:text-[1.5rem]">
      {r.title}
    </h2>
    {r.image && <Figure {...r.image} />}
    {r.body.map((p) => (
      <P key={p.slice(0, 24)}>{p}</P>
    ))}
    {r.bullets && (
      <ul className="mb-6 space-y-3 rounded-2xl border border-bb-sand-line bg-bb-sand p-5 desk:p-6">
        {r.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-[1rem] leading-[1.6] text-bb-text-dark">
            <CheckGold className="mt-[0.1875rem] h-[1.125rem] w-[1.125rem]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    )}
    {r.bodyAfter?.map((p) => (
      <P key={p.slice(0, 24)}>{p}</P>
    ))}
    {r.cta && <InlineCta />}
  </section>
);

export const Reasons = () => (
  <>
    <p className="mt-6 flex items-center gap-4 rounded-2xl border-l-4 border-bb-gold-mid bg-bb-sand px-5 py-4 text-[1.0625rem] font-medium leading-relaxed text-bb-text-dark desk:text-[1.125rem]">
      <span>
        In short: Balls N'Brains Mushroom Coffee offers over 10 benefits for men that Ryze and
        traditional coffee simply can't match.
      </span>
      <Icon3D name="down" size={34} className="animate-bounce [animation-duration:1.8s]" />
    </p>
    {reasons.map((r) => (
      <Reason key={r.num} r={r} />
    ))}
  </>
);

// ── 2.5 Product details ────────────────────────────────────────────────────
export const ProductDetails = () => (
  <section className="cv-auto mt-14 rounded-3xl bg-bb-dark p-5 text-white desk:p-8">
    <h2 className="text-gold-gradient w-fit text-[1.375rem] desk:text-[1.75rem]">Product details</h2>
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {productDetails.map((d) => (
        <div key={d.name} className="flex gap-3.5 rounded-2xl border border-bb-separator bg-[#14100c] p-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-bb-gold-dark/60 text-bb-gold">
            <Icon name={d.icon} size={21} />
          </span>
          <div>
            <p className="text-[0.9375rem] font-bold leading-snug">{d.name}</p>
            <p className="text-[0.8125rem] font-bold text-bb-gold">{d.dose}</p>
            <p className="mt-1 text-[0.875rem] leading-snug text-bb-text-dim">{d.role}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
