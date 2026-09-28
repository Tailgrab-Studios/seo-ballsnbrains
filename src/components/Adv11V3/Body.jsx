import { Faq } from '../Adv11/Closing';
import { Icon, Stars } from '../Adv11/icons';
import { Icon3D } from '../Adv11/icons3d';
import { CheckGold, CtaButton, RatingStrip } from '../Adv11/ui';
import { body, caseStudy, testimonials } from './data';
import OfferBox from './Offer';

// **negrito** e *itálico* → elementos (só formatação; o texto é o do doc).
export const rich = (text) =>
  text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });

const P = ({ b }) => {
  const cls = `mb-5 text-[1.0625rem] leading-[1.75] text-[#1f1d1a] desk:text-[1.125rem] ${b.strong ? 'font-bold' : ''}`;
  if (b.lead && b.text.startsWith(b.lead)) {
    return (
      <p className={cls}>
        <strong>{b.lead}</strong>
        {b.text.slice(b.lead.length)}
      </p>
    );
  }
  return <p className={cls}>{rich(b.text)}</p>;
};

const slug = (t) => t.toLowerCase().replace(/\*/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// 2.4 — CTA inline: fundo cinza-claro, título em negrito (quando o doc traz), botão dourado, linha embaixo.
const InlineCta = ({ b }) => (
  <aside className={`${b.final ? 'my-8' : 'my-10'} rounded-2xl border border-bb-line bg-[#f6f5f2] px-5 py-7 text-center desk:px-10`}>
    {b.title && (
      <p className="mb-5 font-mona text-[1.125rem] font-semibold leading-snug text-bb-text-dark text-balance desk:text-[1.25rem]">
        {b.title}
      </p>
    )}
    <div className={`mx-auto ${b.final ? 'max-w-[36rem]' : 'max-w-[28rem]'}`}>
      <CtaButton size={b.final ? 'lg' : 'md'}>
        {b.icon && <Icon3D name={b.icon} size={28} className="-my-1" />}
        {b.label}
      </CtaButton>
    </div>
    {b.note && (
      <p className="mt-4 flex items-center justify-center gap-1.5 text-[0.8125rem] font-medium text-bb-muted">
        <Icon name="shield" size={15} className="text-bb-green-dark" />
        {b.note}
      </p>
    )}
  </aside>
);

const Figure = ({ b }) => (
  <figure className="my-7">
    <img
      src={b.src}
      srcSet={b.srcSet}
      sizes="(min-width: 900px) 760px, calc(100vw - 2rem)"
      alt={b.alt}
      loading="lazy"
      decoding="async"
      width={1024}
      height={1024}
      className="aspect-square w-full rounded-2xl bg-[#f4f3f0] object-cover"
    />
  </figure>
);

const LeadList = ({ items }) => (
  <ul className="mb-6 space-y-3.5">
    {items.map(([lead, text]) => (
      <li key={lead} className="flex gap-3 text-[1.0625rem] leading-[1.7] text-[#1f1d1a]">
        <CheckGold className="mt-[0.3rem] h-[1.125rem] w-[1.125rem]" />
        <span>
          <strong>{lead}</strong> {text}
        </span>
      </li>
    ))}
  </ul>
);

const Steps = ({ items }) => (
  <ol className="mb-6 space-y-3">
    {items.map(([lead, text]) => {
      const [num, word] = lead.split(' ');
      return (
        <li key={lead} className="flex gap-4 rounded-2xl border border-bb-sand-line bg-bb-sand p-4 desk:p-5">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mona text-[1.0625rem] font-semibold text-bb-dark"
            style={{ background: 'radial-gradient(143% 71% at 38% -10%, #FED9A5 0%, #D09439 100%)' }}
          >
            {num.replace('.', '')}
          </span>
          <p className="text-[1rem] leading-[1.65] text-[#1f1d1a]">
            <strong className="sr-only">{num} </strong>
            <strong>{word}</strong> {text}
          </p>
        </li>
      );
    })}
  </ol>
);

const Checklist = ({ items }) => (
  <ul className="mb-6 space-y-2.5 rounded-2xl border border-bb-sand-line bg-bb-sand p-5 desk:p-6">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-[1rem] leading-[1.55] text-bb-text-dark">
        <span className="mt-[0.2rem] h-[1.05rem] w-[1.05rem] shrink-0 rounded-[0.25rem] border-2 border-bb-text-dark" aria-hidden />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Maths = ({ b }) => (
  <div className="mb-6 grid gap-3 sm:grid-cols-2">
    <div className="rounded-2xl border border-bb-line bg-[#faf9f6] p-5">
      <p className="font-bold text-bb-text-dark">{b.before.label}</p>
      <ul className="mt-3 space-y-2 text-[0.9375rem] leading-[1.55] text-[#3a3631]">
        {b.before.items.map((i) => (
          <li key={i} className="flex gap-2">
            <Icon name="plus" size={14} className="mt-1 shrink-0 rotate-45 text-bb-red" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-bb-line pt-3 text-[0.9375rem] font-bold text-bb-red">{b.before.total}</p>
    </div>
    <div className="rounded-2xl bg-bb-dark p-5 text-white">
      <p className="font-bold text-bb-gold">{b.after.label}</p>
      <ul className="mt-3 space-y-2 text-[0.9375rem] leading-[1.55] text-bb-text-dim">
        {b.after.items.map((i) => (
          <li key={i} className="flex gap-2">
            <CheckGold className="mt-0.5 h-4 w-4" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// 2.5 — Product details: cards com ícone à esquerda, ingrediente/dose em negrito, função.
const Details = ({ items }) => (
  <div className="mb-6 grid gap-3 sm:grid-cols-2">
    {items.map((d) => (
      <div key={d.lead} className="flex gap-3.5 rounded-2xl border border-bb-separator bg-bb-dark p-4 text-white">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-bb-gold-dark/60 text-bb-gold">
          <Icon name={d.icon} size={21} />
        </span>
        <p className="text-[0.9375rem] leading-[1.55] text-bb-text-dim">
          <strong className="block text-white">{d.lead}</strong> {d.text}
        </p>
      </div>
    ))}
  </div>
);

const Compare = ({ b }) => (
  <div className="mb-6 overflow-x-auto rounded-2xl border border-bb-line">
    <table className="w-full min-w-[34rem] border-collapse text-[0.875rem]">
      <thead>
        <tr>
          <th className="bg-white" />
          {b.columns.map((c, i) => (
            <th
              key={c}
              scope="col"
              className={`px-3 py-3 text-center font-sans !font-bold ${i === 0 ? 'text-bb-dark' : 'bg-bb-dark text-white'}`}
              style={i === 0 ? { background: 'radial-gradient(143% 71% at 38% -10%, #FED9A5 0%, #D09439 100%)' } : undefined}
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {b.rows.map(([label, ...cells], r) => (
          <tr key={label} className={r % 2 ? 'bg-[#faf9f6]' : 'bg-white'}>
            <th scope="row" className="border-t border-bb-line px-3 py-3 text-left font-sans !font-bold text-bb-text-dark">
              {label}
            </th>
            {cells.map((c, i) => (
              <td
                key={i}
                className={`border-t border-bb-line px-3 py-3 text-center leading-snug ${
                  i === 0 ? 'border-x-2 border-x-bb-gold bg-bb-sand font-bold text-bb-text-dark' : 'text-[#4a463f]'
                } ${i === 0 && r === b.rows.length - 1 ? 'border-b-2 border-b-bb-gold' : ''}`}
              >
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// 2.6 — 3 cards lado a lado (desktop) + case study em texto corrido.
const Testimonials = () => (
  <>
    <div className="grid gap-3.5 xl:grid-cols-3">
      {testimonials.map((t) => (
        <figure key={t.name} className="flex flex-col rounded-2xl border border-bb-line bg-[#faf9f6] p-5">
          <figcaption className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem]">
            <Stars size={15} />
            <strong className="text-bb-text-dark">{t.name}</strong>
            <span className="inline-flex items-center gap-1 font-semibold text-[#2e7d3a]">
              · <Icon name="check" size={13} strokeWidth={3} /> Verified Purchase
            </span>
            {t.place && <span className="text-bb-muted">· {t.place}</span>}
          </figcaption>
          <blockquote className="mt-3 text-[0.9375rem] leading-[1.65] text-[#333]">{t.text}</blockquote>
        </figure>
      ))}
    </div>
    <figure className="mt-4 rounded-2xl bg-bb-dark p-5 text-white desk:p-7">
      <p className="text-[1rem] leading-[1.7] text-bb-text-dim">
        <strong className="text-bb-gold">{caseStudy.lead}</strong> <em>{caseStudy.quote}</em>{' '}
        {caseStudy.resultLead}{' '}
        <strong className="text-gold-gradient font-mona text-[1.375rem] font-semibold">{caseStudy.result}</strong>
      </p>
    </figure>
  </>
);

const PS = ({ items }) => (
  <div className="mt-8 space-y-3 border-t border-bb-line pt-6">
    {items.map(([lead, text]) => (
      <p key={lead} className="text-[1rem] leading-[1.7] text-[#1f1d1a]">
        <strong>{lead}</strong> {text}
      </p>
    ))}
  </div>
);

const Block = ({ b }) => {
  switch (b.t) {
    case 'p':
      return <P b={b} />;
    case 'h2':
      return (
        <h2 id={slug(b.text)} className="mt-12 mb-5 scroll-mt-24 text-[1.375rem] leading-[1.28] text-bb-text-dark text-balance desk:text-[1.625rem]">
          {rich(b.text)}
        </h2>
      );
    case 'h3':
      return <h3 className="mt-7 mb-3 text-[1.125rem] leading-snug text-bb-text-dark desk:text-[1.25rem]">{b.text}</h3>;
    case 'quote':
      return (
        <blockquote className="my-6 rounded-r-2xl border-l-4 border-bb-gold-mid bg-bb-sand px-5 py-4 text-[1.125rem] font-semibold leading-[1.5] text-bb-text-dark desk:text-[1.1875rem]">
          {b.text}
        </blockquote>
      );
    case 'img':
      return <Figure b={b} />;
    case 'list':
      return <LeadList items={b.items} />;
    case 'steps':
      return <Steps items={b.items} />;
    case 'checklist':
      return <Checklist items={b.items} />;
    case 'cta':
      return <InlineCta b={b} />;
    case 'maths':
      return <Maths b={b} />;
    case 'details':
      return <Details items={b.items} />;
    case 'compare':
      return <Compare b={b} />;
    case 'testimonials':
      return <Testimonials />;
    case 'offer':
      return <OfferBox />;
    case 'rating':
      return <RatingStrip />;
    case 'faq':
      return <Faq />;
    case 'ps':
      return <PS items={b.items} />;
    default:
      return null;
  }
};

// Agrupa em seções (cada H2 abre uma) pra aplicar content-visibility abaixo da dobra.
const sections = body.reduce((acc, b) => {
  if (b.t === 'h2' || b.t === 'faq' || acc.length === 0) acc.push([]);
  acc[acc.length - 1].push(b);
  return acc;
}, []);

export default function Body() {
  return (
    <div className="mt-6">
      {sections.map((blocks, i) => (
        <section key={i} className={i > 1 ? 'cv-auto' : ''}>
          {blocks.map((b, j) => (
            <Block key={j} b={b} />
          ))}
        </section>
      ))}
    </div>
  );
}
