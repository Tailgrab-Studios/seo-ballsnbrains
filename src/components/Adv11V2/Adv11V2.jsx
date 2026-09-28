// ADV11 V2 — copy nova × layout B&B (a página atual: ballsnbrains.com/shp/tmc-seo/02/v1/).
// Doc: "ADV11 l V2 l copy nova x layout BNB l 18.09.26". Testa só copy: coluna única, sem card lateral,
// sem barra de contador, sem referências; tabela 👍👎 no ponto marcado. Estilos iguais aos do controle
// (Georgia, laranja #f97316, container 900px, seções com imagem alternando lado, faixa de oferta bege).
import { useId, useState } from 'react';
import product from '../../assets/products/1kit-with-bg.webp';
import { comparison, faqs } from '../Adv11/data';
import { Icon, IconThumb } from '../Adv11/icons';
import { Icon3D } from '../Adv11/icons3d';
import { Comments } from '../Adv11/Social';
import { useCheckoutHref } from '../Adv11/ui';
import { body, caseStudy, header, offer, testimonials } from './data';

const ORANGE = '#f97316';
const sans = 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const rich = (text) =>
  text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });

// ── Botão do controle (laranja, caixa alta) ────────────────────────────────
const OrangeButton = ({ children, size = 'md' }) => {
  const href = useCheckoutHref();
  return (
    <a
      href={href}
      className="flex w-full items-center justify-center gap-3 text-center text-white no-underline transition hover:-translate-y-0.5 hover:brightness-105"
      style={{
        padding: size === 'lg' ? '18px 20px' : '16px 20px',
        background: ORANGE,
        fontFamily: sans,
        fontWeight: 900,
        fontSize: size === 'lg' ? 18 : 16,
        letterSpacing: 1.5,
        borderRadius: 10,
        textTransform: 'uppercase',
        boxShadow: '0 8px 20px rgba(249, 115, 22, 0.35)',
      }}
    >
      {children}
    </a>
  );
};

const Note = ({ children }) => (
  <p className="mt-3 flex items-center justify-center gap-1.5 text-center font-sans text-sm text-gray-500">
    <Icon name="shield" size={15} style={{ color: ORANGE }} />
    {children}
  </p>
);

// ── Blocos de conteúdo ─────────────────────────────────────────────────────
const P = ({ b }) => {
  const cls = `mb-3 font-sans text-base leading-relaxed text-gray-700 ${b.strong ? 'font-bold text-gray-900' : ''}`;
  if (b.lead && b.text.startsWith(b.lead)) {
    return (
      <p className={cls}>
        <strong className="text-gray-900">{b.lead}</strong>
        {b.text.slice(b.lead.length)}
      </p>
    );
  }
  return <p className={cls}>{rich(b.text)}</p>;
};

const H2 = ({ text }) => (
  <h2
    style={{
      fontFamily: sans,
      fontWeight: 900,
      fontSize: 'clamp(18px,2.2vw,26px)',
      lineHeight: 1.15,
      textTransform: 'uppercase',
      letterSpacing: '-0.3px',
      color: '#111',
      marginBottom: 16,
    }}
  >
    {rich(text)}
  </h2>
);

const Quote = ({ text }) => (
  <div className="my-5 px-5 py-4" style={{ background: '#fff7ed', borderLeft: `4px solid ${ORANGE}` }}>
    <p style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#333', fontStyle: 'italic' }}>{text}</p>
  </div>
);

const LeadList = ({ items }) => (
  <ul className="mb-4 ml-4 list-disc space-y-2 marker:text-orange-500">
    {items.map(([lead, text]) => (
      <li key={lead} className="font-sans text-base leading-relaxed text-gray-700">
        <strong className="text-gray-900">{lead}</strong> {text}
      </li>
    ))}
  </ul>
);

const Steps = ({ items }) => (
  <ol className="mb-4 space-y-3">
    {items.map(([lead, text]) => {
      const [num, word] = lead.split(' ');
      return (
        <li key={lead} className="flex gap-3">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-sm font-black text-white"
            style={{ background: ORANGE }}
          >
            {num.replace('.', '')}
          </span>
          <p className="font-sans text-base leading-relaxed text-gray-700">
            <strong className="sr-only">{num} </strong>
            <strong className="text-gray-900">{word}</strong> {text}
          </p>
        </li>
      );
    })}
  </ol>
);

const Checklist = ({ items }) => (
  <ul className="mb-4 space-y-2 rounded-xl border border-gray-200 bg-gray-50 p-5">
    {items.map((item) => (
      <li key={item} className="flex gap-3 font-sans text-base text-gray-800">
        <span className="mt-1 h-4 w-4 shrink-0 rounded-[3px] border-2 border-gray-800" aria-hidden />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const InlineCta = ({ b }) => (
  <div className="my-8 text-center">
    {b.title && <p className="mb-4 font-sans text-lg font-bold text-gray-900">{b.title}</p>}
    <div className="mx-auto max-w-[460px]">
      <OrangeButton size={b.final ? 'lg' : 'md'}>
        {b.icon && <Icon3D name={b.icon} tone="orange" size={26} className="-my-1" />}
        {b.label}
      </OrangeButton>
    </div>
    {b.note && <Note>{b.note}</Note>}
  </div>
);

// Tabela da copy validada — mesmo componente visual do controle (cabeçalho preto, BNB em laranja).
const ThumbsTable = () => (
  <div className="my-6" style={{ border: '1.5px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#111', color: '#fff' }}>
      <div className="p-3" />
      {comparison.columns.map((c, i) => (
        <div
          key={c}
          className={`p-3 text-center font-sans text-xs font-bold uppercase tracking-wider ${i === 0 ? 'text-orange-400' : 'text-gray-400'}`}
        >
          {c}
        </div>
      ))}
    </div>
    {comparison.rows.map(([label, ...cells], r) => (
      <div
        key={label}
        style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: r % 2 ? '#fafafa' : '#fff', borderTop: '1px solid #e5e7eb' }}
      >
        <div className="p-3 font-sans text-sm text-gray-700">{label}</div>
        {cells.map((ok, i) => (
          <div key={i} className="flex items-center justify-center p-3" role="img" aria-label={ok ? 'Yes' : 'No'}>
            <span style={{ color: ok ? ORANGE : '#9ca3af' }}>
              <IconThumb up={ok} size={18} />
            </span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const CompareTable = ({ b }) => (
  <div className="my-6 overflow-x-auto" style={{ border: '1.5px solid #e5e7eb', borderRadius: 12 }}>
    <table className="w-full min-w-[34rem] border-collapse font-sans text-sm">
      <thead>
        <tr style={{ background: '#111', color: '#fff' }}>
          <th className="p-3" />
          {b.columns.map((c, i) => (
            <th key={c} scope="col" className={`p-3 text-center text-xs font-bold uppercase tracking-wider ${i === 0 ? 'text-orange-400' : 'text-gray-400'}`}>
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {b.rows.map(([label, ...cells], r) => (
          <tr key={label} style={{ background: r % 2 ? '#fafafa' : '#fff', borderTop: '1px solid #e5e7eb' }}>
            <th scope="row" className="p-3 text-left font-semibold text-gray-800">
              {label}
            </th>
            {cells.map((c, i) => (
              <td key={i} className={`p-3 text-center leading-snug ${i === 0 ? 'font-bold text-gray-900' : 'text-gray-600'}`} style={i === 0 ? { background: '#fff7ed' } : undefined}>
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Maths = ({ b }) => (
  <div className="mb-4 grid gap-3 sm:grid-cols-2">
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 font-sans">
      <p className="font-bold text-gray-900">{b.before.label}</p>
      <ul className="mt-3 ml-4 list-disc space-y-2 text-[15px] leading-relaxed text-gray-700">
        {b.before.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p className="mt-4 border-t border-gray-200 pt-3 text-[15px] font-bold text-red-600">{b.before.total}</p>
    </div>
    <div className="rounded-xl p-5 font-sans" style={{ background: '#fff7ed', border: `2px solid ${ORANGE}` }}>
      <p className="font-bold" style={{ color: '#c2410c' }}>{b.after.label}</p>
      <ul className="mt-3 ml-4 list-disc space-y-2 text-[15px] leading-relaxed text-gray-800">
        {b.after.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Details = ({ items }) => (
  <div className="mb-4 grid gap-3 sm:grid-cols-2">
    {items.map((d) => (
      <div key={d.lead} className="flex gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 font-sans">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: '#fff7ed', color: ORANGE }}>
          <Icon name={d.icon} size={20} />
        </span>
        <p className="text-[15px] leading-relaxed text-gray-700">
          <strong className="block text-gray-900">{d.lead}</strong> {d.text}
        </p>
      </div>
    ))}
  </div>
);

const StarsOrange = ({ size = 16 }) => (
  <span className="inline-flex gap-0.5" role="img" aria-label="5 out of 5 stars" style={{ color: ORANGE }}>
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
        <path d="m12 2.4 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.2l6.5-.9z" />
      </svg>
    ))}
  </span>
);

const Testimonials = () => (
  <>
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure key={t.name} className="rounded-xl border border-gray-200 bg-gray-50 p-5 font-sans">
          <figcaption className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <StarsOrange size={14} />
            <strong className="text-gray-900">{t.name}</strong>
            <span className="text-green-700">· Verified Purchase</span>
            {t.place && <span className="text-gray-500">· {t.place}</span>}
          </figcaption>
          <blockquote className="mt-3 text-[15px] leading-relaxed text-gray-700">{t.text}</blockquote>
        </figure>
      ))}
    </div>
    <div className="mt-4 rounded-xl p-5 font-sans" style={{ background: '#1a1a1a' }}>
      <p className="text-sm leading-relaxed text-white">
        <strong className="text-orange-400">{caseStudy.lead}</strong> <em>{caseStudy.quote}</em> {caseStudy.resultLead}{' '}
        <strong className="text-lg text-orange-400">{caseStudy.result}</strong>
      </p>
    </div>
  </>
);

const RatingStrip = () => (
  <div className="my-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-y border-gray-200 py-4 font-sans text-sm text-gray-700">
    <span className="flex items-center gap-1.5">
      <StarsOrange size={14} /> <strong>4.9</strong>
    </span>
    <span className="font-semibold">61,028 Reviews</span>
    <span className="flex items-center gap-1.5">
      <Icon name="gift" size={15} style={{ color: ORANGE }} /> 44% Off For Life
    </span>
    <span className="flex items-center gap-1.5">
      <Icon name="truck" size={15} style={{ color: ORANGE }} /> Free Shipping
    </span>
    <span className="flex items-center gap-1.5">
      <Icon name="lock" size={15} style={{ color: ORANGE }} /> 365-Day Guarantee
    </span>
  </div>
);

const FaqItem = ({ q, a, open, onToggle }) => {
  const id = useId();
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left font-sans text-base font-bold text-gray-900"
      >
        {q}
        <span className="text-xl font-black" style={{ color: ORANGE }} aria-hidden>
          {open ? '–' : '+'}
        </span>
      </button>
      <div id={id} role="region" hidden={!open}>
        <p className="pb-4 font-sans text-base leading-relaxed text-gray-700">{a}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="px-8 py-12">
      <H2 text='The questions I had before clicking "buy"' />
      <div className="border-t border-gray-200">
        {faqs.map((f, i) => (
          <FaqItem key={f.q} {...f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </section>
  );
};

const PS = ({ items }) => (
  <div className="space-y-2">
    {items.map(([lead, text]) => (
      <p key={lead} className="font-sans text-base leading-relaxed text-gray-700">
        <strong className="text-gray-900">{lead}</strong> {text}
      </p>
    ))}
  </div>
);

// ── Oferta: a faixa de CTA do controle (fundo #fff7ed, borda laranja, produto + texto) ──
const OfferBand = () => (
  <section id="offer" className="py-12" style={{ background: '#fff7ed', borderTop: `2px solid ${ORANGE}`, width: '100%' }}>
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
      <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
        <div className="text-center md:p-8">
          <img
            src={product}
            alt="Balls N'Brains Mushroom Coffee For Men"
            loading="lazy"
            className="mx-auto block h-auto w-full object-contain"
            style={{ maxWidth: 280 }}
          />
        </div>
        <div className="font-sans">
          <h2 style={{ fontFamily: sans, fontWeight: 900, fontSize: 'clamp(22px, 4vw, 30px)', color: '#111', lineHeight: 1.15 }}>
            {offer.name}
          </h2>
          <p className="mt-1 text-gray-600">{offer.tagline}</p>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <s className="text-xl text-gray-400">{offer.was}</s>
            <span style={{ fontSize: 44, fontWeight: 900, color: '#111', lineHeight: 1 }}>{offer.now}</span>
            <span className="rounded-md px-2 py-1 text-xs font-bold text-white" style={{ background: '#dc2626' }}>
              {offer.label}
            </span>
          </p>
          <p className="mt-4 font-bold text-gray-900">{offer.includedTitle}</p>
          <ul className="mt-2 space-y-1.5">
            {offer.included.map(([icon, item]) => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <Icon name={icon} size={16} style={{ color: ORANGE }} /> {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-gray-800">
            <span className="flex items-center gap-1.5">
              <Icon name="lock" size={15} style={{ color: ORANGE }} /> {offer.badges[0]}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="truck" size={15} style={{ color: ORANGE }} /> {offer.badges[1]}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="flag" size={15} style={{ color: ORANGE }} /> {offer.badges[2]}
            </span>
          </p>
          <div className="mt-6">
            <OrangeButton size="lg">
              <Icon3D name="percent" tone="orange" size={28} className="-my-1" />
              {offer.cta}
            </OrangeButton>
          </div>
          <p className="mt-3 text-sm text-gray-600">{offer.note}</p>
        </div>
      </div>
    </div>
  </section>
);

// ── Seções ─────────────────────────────────────────────────────────────────
const WIDE = new Set(['checklist', 'cta', 'thumbs', 'steps', 'compare', 'details', 'maths', 'testimonials', 'rating', 'ps']);

const Block = ({ b }) => {
  switch (b.t) {
    case 'p':
      return <P b={b} />;
    case 'h3':
      return (
        <h3 className="mt-6 mb-2 font-sans text-lg font-extrabold text-gray-900" style={{ fontFamily: sans }}>
          {b.text}
        </h3>
      );
    case 'quote':
      return <Quote text={b.text} />;
    case 'list':
      return <LeadList items={b.items} />;
    case 'steps':
      return <Steps items={b.items} />;
    case 'checklist':
      return <Checklist items={b.items} />;
    case 'cta':
      return <InlineCta b={b} />;
    case 'thumbs':
      return <ThumbsTable />;
    case 'compare':
      return <CompareTable b={b} />;
    case 'maths':
      return <Maths b={b} />;
    case 'details':
      return <Details items={b.items} />;
    case 'testimonials':
      return <Testimonials />;
    case 'rating':
      return <RatingStrip />;
    case 'ps':
      return <PS items={b.items} />;
    default:
      return null;
  }
};

// Divide o corpo em seções (h2 abre; offer/faq são faixas próprias).
const sections = body.reduce((acc, b) => {
  if (b.t === 'h2' || b.t === 'offer' || b.t === 'faq' || acc.length === 0) acc.push([]);
  acc[acc.length - 1].push(b);
  if (b.t === 'offer' || b.t === 'faq') acc.push([]);
  return acc;
}, []).filter((s) => s.length);

// Seção com imagem = grid do controle (imagem de um lado, texto do outro, alternando).
// Blocos largos (checklist, CTA, tabelas…) e o parágrafo que os introduz saem do grid e vêm embaixo.
const splitForGrid = (blocks) => {
  const firstWide = blocks.findIndex((b) => WIDE.has(b.t));
  if (firstWide === -1) return [blocks, []];
  let cut = firstWide;
  if (cut > 0 && blocks[cut - 1].t === 'p' && blocks[cut - 1].text.trim().endsWith(':')) cut -= 1;
  return [blocks.slice(0, cut), blocks.slice(cut)];
};

const Section = ({ blocks, imgIndex, last }) => {
  const [h2, maybeImg, ...rest] = blocks;
  const hasH2 = h2.t === 'h2';
  const img = hasH2 && maybeImg?.t === 'img' ? maybeImg : null;

  if (img) {
    const [inGrid, below] = splitForGrid(rest);
    const left = imgIndex % 2 === 0;
    return (
      <section className="cv-auto px-8 py-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className={`flex justify-center ${left ? 'md:order-1' : 'md:order-2'}`}>
            <div className="aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={img.src}
                srcSet={img.srcSet}
                sizes="(min-width: 768px) 384px, calc(100vw - 4rem)"
                alt={img.alt}
                loading="lazy"
                decoding="async"
                width={384}
                height={384}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className={left ? 'md:order-2' : 'md:order-1'}>
            <H2 text={h2.text} />
            {inGrid.map((b, i) => (
              <Block key={i} b={b} />
            ))}
          </div>
        </div>
        {below.length > 0 && (
          <div className="mt-6">
            {below.map((b, i) => (
              <Block key={i} b={b} />
            ))}
          </div>
        )}
        {!last && <div className="mt-12 border-t border-gray-200" />}
      </section>
    );
  }

  // a faixa de rating já tem borda embaixo: sem divisor extra depois dela
  const endsWithStrip = blocks[blocks.length - 1].t === 'rating';
  return (
    <section className="cv-auto px-8 py-12">
      {hasH2 && <H2 text={h2.text} />}
      {(hasH2 ? blocks.slice(1) : blocks).map((b, i) => (
        <Block key={i} b={b} />
      ))}
      {!last && !endsWithStrip && <div className="mt-12 border-t border-gray-200" />}
    </section>
  );
};

export default function Adv11V2() {
  let imgCount = 0;
  const intro = sections[0];
  const rest = sections.slice(1);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: '#fff', color: '#111' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* ── HEADER (igual ao controle) ── */}
        <header className="flex items-center justify-center border-b border-gray-200 px-8 pt-6 pb-2">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 22, letterSpacing: 4, textTransform: 'uppercase' }}>
              Balls N'Brains
            </span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: ORANGE, display: 'inline-block' }} />
          </div>
        </header>

        {/* ── HERO ── */}
        <section id="top" className="px-8 pt-10 pb-6">
          <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Advertorial</p>
          <nav aria-label="Breadcrumb" className="mb-3 font-sans text-sm text-gray-500">
            {header.breadcrumb[0]} <span className="mx-1">›</span> {header.breadcrumb[1]} <span className="mx-1">›</span> {header.breadcrumb[2]}
          </nav>
          <h1 style={{ fontFamily: "'Georgia', serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.5px', color: '#111' }}>
            {header.h1}
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-lg font-black text-white"
              style={{ background: ORANGE }}
              aria-hidden
            >
              MS
            </span>
            <div className="font-sans">
              <p className="text-base font-bold text-gray-900">{header.byline}</p>
              <p className="text-xs text-gray-400">
                <time dateTime={header.dateTime}>{header.date}</time>
              </p>
            </div>
          </div>
          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-sm text-gray-500">
            <strong className="text-gray-700">TRUSTED BY:</strong>
            {['61,028 Verified Reviews', '365-Day Guarantee', 'Fruiting Body', 'Dual-Extracted', 'Made in USA'].map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>·</span>}
                {t}
              </span>
            ))}
          </p>
        </section>

        {/* intro (antes do 1º subtítulo) */}
        <section className="px-8 pb-4">
          {intro.map((b, i) => (
            <Block key={i} b={b} />
          ))}
        </section>
        <div style={{ borderTop: '1px solid #e5e7eb', margin: '0 32px' }} />
      </div>

      {rest.map((blocks, i) => {
        if (blocks[0].t === 'offer') return <OfferBand key={i} />;
        const isImg = blocks[0].t === 'h2' && blocks[1]?.t === 'img';
        const idx = isImg ? imgCount++ : 0;
        const inner =
          blocks[0].t === 'faq' ? (
            <Faq />
          ) : (
            <Section blocks={blocks} imgIndex={idx} last={i === rest.length - 1 || rest[i + 1]?.[0].t === 'offer'} />
          );
        return (
          <div key={i} style={{ maxWidth: 900, margin: '0 auto' }}>
            {inner}
          </div>
        );
      })}

      <div style={{ maxWidth: 900, margin: '0 auto' }} className="px-8 pb-12">
        <Comments />
      </div>

      {/* ── FOOTER (igual ao controle, com o texto do doc) ── */}
      <footer style={{ background: '#111', color: '#fff', width: '100%', padding: '48px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <div className="mb-2 flex items-center justify-center gap-2">
            <span style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 18, letterSpacing: 4, textTransform: 'uppercase' }}>
              Balls N'Brains
            </span>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: ORANGE, display: 'inline-block' }} />
          </div>
          <p className="mb-4 font-sans text-sm text-gray-400">Your Entire Testosterone Stack. One Scoop. One Coffee.</p>
          <p className="mb-6 font-sans text-sm text-gray-500">
            <a href="#" className="hover:text-white">Terms of Service</a> |{' '}
            <a href="#" className="hover:text-white">Privacy Policy</a> |{' '}
            <a href="mailto:support@ballsnbrains.com" className="hover:text-white">Contact</a> |{' '}
            <a href="#faq" className="hover:text-white">Refund Policy</a> · BNB Health Inc. 2026
          </p>
          <p className="mx-auto max-w-xl font-sans text-xs leading-relaxed text-gray-400">
            Statements have not been evaluated by the Food and Drug Administration. These products are not intended to
            diagnose, treat, cure, or prevent any disease. This is an advertorial. Individual results may vary.
          </p>
        </div>
      </footer>
    </div>
  );
}
