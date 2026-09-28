import doctor from '../../assets/testimonials/man1.webp';
import pouch from '../../assets/adv11/pouch.webp';
import stamp from '../../assets/adv11/guarantee-stamp.webp';
import { PRICE, RATING, offerIncluded } from './data';
import { Stars } from './icons';
import { FlagUS3D, Icon3D } from './icons3d';
import { Badge, CheckGold, CtaButton, useCheckoutHref } from './ui';

// ── 2.7 Bloco de oferta (fundo branco, borda, centralizado) ────────────────
export const OfferBox = () => (
  <section
    id="offer"
    className="relative mt-14 scroll-mt-24 overflow-hidden rounded-3xl border-2 border-bb-gold bg-white shadow-[0_1.5rem_4rem_-1.5rem_rgba(125,93,44,0.35)]"
  >
    <div className="flex items-center justify-center gap-2 bg-bb-dark px-5 py-2.5 text-[0.875rem] font-bold text-bb-gold">
      LIMITED TIME ONLY
      <Icon3D name="down" size={22} />
    </div>

    <div className="px-5 pt-7 pb-8 desk:px-10">
      <h2 className="text-center text-[1.625rem] leading-[1.15] text-bb-text-dark text-balance desk:text-[2rem]">
        Try Today, Get 44% Off For Life!
      </h2>

      <div className="mt-7 grid items-center gap-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative mx-auto w-full max-w-[17.5rem]">
          <div className="absolute inset-x-6 bottom-2 h-6 rounded-[50%] bg-black/25 blur-xl" aria-hidden />
          <img
            src={pouch}
            alt="Balls N'Brains Mushroom Coffee For Men"
            loading="lazy"
            width={546}
            height={681}
            className="relative w-full"
          />
          <img
            src={stamp}
            alt="365-day money-back guarantee"
            loading="lazy"
            className="absolute -right-2 bottom-4 w-[5.5rem] rotate-[-8deg] drop-shadow-lg desk:w-24"
          />
        </div>

        <div>
          <p className="text-[1.0625rem] font-bold leading-snug text-bb-text-dark">
            BALLS N'BRAINS™ Mushroom Coffee For Men
          </p>
          <p className="text-[0.875rem] text-bb-muted">
            Your Entire Testosterone Stack. One Scoop. One Coffee.
          </p>

          <div className="mt-4 flex items-end gap-3">
            <span className="pb-1.5 text-[1.25rem] font-medium text-[#736e65] line-through decoration-bb-red decoration-2">
              {PRICE.was}
            </span>
            <span className="font-mona text-[3.25rem] leading-none font-semibold text-bb-text-dark">
              {PRICE.now}
            </span>
            <span className="pb-1.5 text-[0.9375rem] text-bb-muted">{PRICE.per}</span>
          </div>
          <p className="mt-3 inline-block rounded-md bg-bb-red px-2.5 py-1 text-[0.75rem] font-bold text-white">
            44% OFF — NO CODE NEEDED
          </p>

          <ul className="mt-4 space-y-2">
            {offerIncluded.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.9375rem] text-[#2a2723]">
                <CheckGold />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-2 border-y border-bb-line py-5">
        <Badge icon={<Icon3D name="shield" size={48} />} label="365-Day Guarantee" />
        <Badge icon={<Icon3D name="truck" size={48} />} label="Free Shipping" />
        <Badge icon={<FlagUS3D size={48} />} label="Made in USA" />
      </div>

      {/* "Claim Your 44% Discount Now" é chamada em texto, não botão — o botão é o TRY IT NOW ➤ abaixo */}
      <div className="mt-7 text-center">
        <p className="inline-flex items-center justify-center gap-2.5 font-mona text-[1.25rem] font-semibold leading-snug text-bb-text-dark desk:text-[1.375rem]">
          <Icon3D name="percent" size={28} />
          Claim Your 44% Discount Now
        </p>
        <p className="mt-1.5 text-[0.8125rem] text-bb-muted">
          As low as <strong className="text-bb-text-dark">{PRICE.perDay}/day</strong>
        </p>
      </div>

      {/* Fecho da copy validada, na ordem do doc: citação → assinatura → TRY IT NOW ➤ → garantia */}
      <figure className="mt-7 flex items-center gap-4 rounded-2xl bg-bb-sand p-4 desk:p-5">
        <img
          src={doctor}
          alt="Dr. Ben Palmer"
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-bb-gold"
        />
        <div>
          <blockquote className="text-[0.9375rem] italic leading-snug text-[#2a2723]">
            "Personally, I think it's worth a try. It's organic, natural, has no side effects, and
            you'll likely notice changes within the first few days."
          </blockquote>
          <figcaption className="mt-1.5 text-[0.8125rem] text-bb-muted">
            <strong className="text-bb-text-dark">Dr. Ben Palmer</strong> — MEDICINE &amp; UROLOGY,
            OXFORD
          </figcaption>
        </div>
      </figure>

      <div className="mt-6">
        <CtaButton size="lg">TRY IT NOW ➤</CtaButton>
        <p className="mt-3 text-center text-[0.8125rem] text-bb-muted">
          Try it today with a 365-day trial period. Money-back guarantee.
        </p>
      </div>
    </div>
  </section>
);

// ── 2.3 Card lateral fixo ──────────────────────────────────────────────────
const sidebarSeals = ['365 Days', '61k Reviews', 'Fruiting Body', 'Made in USA'];
const sidebarChecks = [
  'Save $250/month vs. buying 7 separate supplements',
  '12 clinical-dose ingredients in one scoop',
  'Zero Turkey Tail. Zero Shiitake. Zero King Trumpet.',
  '365-day money-back guarantee',
];

export const SidebarCard = () => (
  <aside className="sticky top-[5.5rem]" aria-label="Recommended product">
    <p className="border-b border-bb-line pb-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-[#736e65]">
      Featured
    </p>
    <div className="mt-3.5 overflow-hidden rounded-3xl border border-bb-line bg-white shadow-[0_1rem_2.5rem_-1rem_rgba(10,9,8,0.18)]">
      <div className="bg-bb-dark px-5 pt-5 pb-4 text-center text-white">
        <h2 className="text-[1.125rem]">Recommended</h2>
        <div className="mt-1.5 flex justify-center">
          <Stars size={17} />
        </div>
        <p className="mt-1 text-[0.8125rem] text-bb-text-dim">
          <strong className="text-white">{RATING.score}</strong> out of 5 based on{' '}
          <strong className="text-white">{RATING.reviews} reviews</strong>
        </p>
        <img
          src={pouch}
          alt="Balls N'Brains Mushroom Coffee For Men"
          width={546}
          height={681}
          className="mx-auto mt-4 w-full max-w-[9.5rem] drop-shadow-[0_0.75rem_1.5rem_rgba(207,153,71,0.35)]"
        />
      </div>

      <div className="p-5">
        <p className="text-center text-[0.75rem] font-bold text-bb-muted">Trusted by</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {sidebarSeals.map((s) => (
            <span
              key={s}
              className="rounded-lg bg-bb-sand px-2 py-1.5 text-center text-[0.6875rem] font-bold text-bb-gold-dark"
            >
              {s}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-2.5">
          {sidebarChecks.map((c) => (
            <li key={c} className="flex gap-2 text-[0.8125rem] leading-snug text-[#2a2723]">
              <CheckGold className="mt-px h-4 w-4" />
              {c}
            </li>
          ))}
        </ul>

        <CtaButton size="sm" className="mt-5">
          TRY IT NOW ➤
        </CtaButton>
        <p className="mt-2.5 text-center text-[0.75rem] text-bb-muted">
          44% off for life · Cancel anytime
        </p>
      </div>
    </div>
  </aside>
);

// ── 2.14 Mobile: card lateral vira barra fixa no rodapé ────────────────────
// Visível desde o primeiro paint (já vem no HTML pré-renderizado): botão de compra de cara no mobile.
export const MobileBar = () => {
  const href = useCheckoutHref();

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-bb-dark/55 backdrop-blur-xl backdrop-saturate-150 desk:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <img src={pouch} alt="" width={546} height={681} className="h-11 w-auto shrink-0" />
          <div className="leading-tight">
            <p className="flex items-center gap-1 text-[0.75rem] text-bb-text-dim">
              <Stars size={11} /> {RATING.score}
            </p>
            <p className="font-mona text-[1.125rem] font-semibold text-white">{PRICE.now}</p>
          </div>
        </div>
        <a href={href} data-anim="on" className="btn-cta btn-cta-sm shrink-0 whitespace-nowrap">
          TRY IT NOW ➤
        </a>
      </div>
    </div>
  );
};
