import { useId, useState } from 'react';
import footerLogo from '../../assets/adv11/footer-logo.svg';
import faqArrow from '../../assets/icons/faq-arrow.svg';
import { faqs, references } from './data';
import { CtaButton, GuaranteeLine } from './ui';

// ── 2.9 FAQ em acordeão ────────────────────────────────────────────────────
const FaqItem = ({ q, a, open, onToggle }) => {
  const id = useId();
  return (
    <div
      className={`rounded-2xl border transition-colors ${
        open ? 'border-bb-gold bg-bb-sand' : 'border-bb-line bg-white hover:border-bb-gold'
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4.5 text-left text-[0.9375rem] font-bold text-bb-text-dark desk:text-[1rem]"
      >
        {q}
        <img
          src={faqArrow}
          alt=""
          aria-hidden
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
        />
      </button>
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[0.9375rem] leading-[1.7] text-[#4a463f]">{a}</p>
        </div>
      </div>
    </div>
  );
};

export const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="cv-auto mt-12">
      <h2 className="text-[1.375rem] text-bb-text-dark desk:text-[1.75rem]">
        The questions I had before clicking "buy"
      </h2>
      <div className="mt-5 flex flex-col gap-2.5">
        {faqs.map((f, i) => (
          <FaqItem
            key={f.q}
            {...f}
            open={open === i}
            onToggle={() => setOpen(open === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
};

// ── 2.10 CTA final ─────────────────────────────────────────────────────────
export const FinalCta = () => (
  <div className="mt-10">
    <CtaButton size="lg">TRY IT NOW ➤</CtaButton>
    <GuaranteeLine className="mt-4" />
  </div>
);

// ── 2.11 Referências ───────────────────────────────────────────────────────
const SUP = ['¹', '²', '³', '⁴'];

export const References = () => (
  <section className="mt-10 border-t border-bb-line pt-5 text-[0.71875rem] leading-[1.6] text-[#736e65]">
    <p className="mb-1.5 font-bold text-bb-muted">References</p>
    <ol className="space-y-1">
      {references.map((r, i) => (
        <li key={r.cite}>
          {SUP[i]} {r.authors} {r.title} <em>{r.journal}</em> {r.cite}
        </li>
      ))}
    </ol>
  </section>
);

// ── 2.13 Rodapé ────────────────────────────────────────────────────────────
const SUPPORT_EMAIL = 'support@ballsnbrains.com';
// TODO: ballsnbrains.com ainda não tem páginas de Terms/Privacy — trocar os '#' quando existirem
// (Meta/Google Ads pedem política de privacidade acessível na landing).
const FOOTER_LINKS = [
  ['Terms of Service', '#'],
  ['Privacy Policy', '#'],
  ['Contact', `mailto:${SUPPORT_EMAIL}`],
  ['Refund Policy', '#faq'],
];

export const Footer = () => (
  <footer className="cv-auto mt-16 bg-bb-dark px-4 pt-12 pb-24 text-center desk:pb-12">
    <img src={footerLogo} alt="Balls & Brains" loading="lazy" className="mx-auto h-10 w-auto" />
    <p className="mt-4 text-[0.9375rem] text-bb-text-dim">
      Your Entire Testosterone Stack. One Scoop. One Coffee.
    </p>
    <p className="mt-4 text-[0.875rem] text-bb-text-dim">
      Questions? Email us at{' '}
      <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white underline hover:text-bb-gold">
        {SUPPORT_EMAIL}
      </a>
    </p>
    <nav aria-label="Legal" className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.8125rem] text-white/55">
      {FOOTER_LINKS.map(([label, href]) => (
        <a key={label} href={href} className="transition-colors hover:text-bb-gold">
          {label}
        </a>
      ))}
    </nav>
    <p className="mx-auto mt-7 max-w-2xl border-t border-bb-separator pt-6 text-[0.71875rem] leading-[1.6] text-white/55">
      BNB Health Inc. 2026. *Statements have not been evaluated by the Food and Drug
      Administration. These products are not intended to diagnose, treat, cure, or prevent any
      disease. This is an advertorial. Individual results may vary.
    </p>
  </footer>
);
