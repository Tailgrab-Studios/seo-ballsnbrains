import kit1 from '@assets/products/1kit.webp';
import kit2 from '@assets/products/2kits.webp';
import kit3 from '@assets/products/3kits.webp';
import bonusManhood from '@assets/bonuses/manhood.webp';
import bonusBoost from '@assets/bonuses/boost.webp';
import bonusBed from '@assets/bonuses/bed.webp';
import bonusEnergy from '@assets/bonuses/energy.webp';
import { withReferrer } from '@/utils/referrer';
import StarRating from './shared/StarRating';
import CartIcon from './shared/CartIcon';
import Accordion from './shared/Accordion';
import ReviewsWidget from './ReviewsWidget';
import {
  PLANS_DATA,
  BONUSES_DATA,
  INGREDIENTS,
  TRUST_DATA,
  CHECKOUT,
} from '@/data/constants';

const KIT_IMAGES = [kit1, kit2, kit3];
const PLANS = PLANS_DATA.map((p, i) => ({ ...p, image: KIT_IMAGES[i] }));

const BONUS_IMAGES = [bonusManhood, bonusBoost, bonusBed, bonusEnergy];
const BONUSES = BONUSES_DATA.map((b, i) => ({ ...b, img: BONUS_IMAGES[i] }));

function TrustIcon({ id }) {
  if (id === 'shield') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (id === 'lock') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }
  if (id === 'truck') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M14 9h4l4 4v4a1 1 0 0 1-1 1h-1" />
        <circle cx="7.5" cy="18.5" r="1.5" />
        <circle cx="17.5" cy="18.5" r="1.5" />
      </svg>
    );
  }
  return null;
}

export default function BuyBox({ mode, qty, setMode, setQty, onOpenPopup }) {
  const plan = PLANS[qty];
  const offer = plan[mode];
  const checkoutUrl = withReferrer(CHECKOUT[mode][qty]);

  function handleAddToCart() {
    if (qty === 0) {
      onOpenPopup?.();
    } else {
      window.location.href = checkoutUrl;
    }
  }

  return (
    <div className="min-w-0">
      <StarRating />

      <h1 className="text-[1.5rem] md:text-[1.75rem] font-bold! leading-tight tracking-tight my-4">
        Balls &amp; Brains™ Testosterone&nbsp;Coffee
      </h1>

      <div className="flex items-center gap-2.5 flex-wrap mb-4">
        <span className="text-[1.5rem] font-bold text-bb-green-light">
          {offer.price}
          {offer.perUnit && (
            <span className="text-white/55 text-[1rem] font-medium">
              {' '}
              {offer.perUnit}
            </span>
          )}
        </span>
        {offer.old && (
          <span className="text-white/40 text-[0.9375rem] line-through">
            {offer.old}
          </span>
        )}
        <span className="bg-[#008236] text-white text-[0.6875rem] font-bold px-2.5 py-0.5 rounded uppercase tracking-wide">
          {offer.save}
        </span>
      </div>

      <p className="text-white/65 text-[0.9375rem] leading-relaxed mb-3">
        Naturally{' '}
        <strong className="text-white font-semibold">
          optimize testosterone
        </strong>{' '}
        in weeks, and eliminate brain fog, dead libido, low energy, and dad bod
        — all with your morning coffee ritual.
      </p>

      {/* Mode tabs */}
      <div className="grid grid-cols-2 border-b border-bb-separator mb-4">
        {[
          { key: 'sub', label: 'Subscribe & Save' },
          { key: 'one', label: 'One-Time Purchase' },
        ].map(t => (
          <button
            key={t.key}
            type="button"
            onClick={() => setMode(t.key)}
            className={`py-2.5 text-[0.8125rem] font-semibold transition-all cursor-pointer ${
              mode === t.key
                ? 'text-white font-bold shadow-[inset_0_-2px_0_var(--color-bb-gold-mid)]'
                : 'text-white/45 hover:text-white/70'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="text-white/65 text-[0.875rem] mb-5">
        Bundle &amp; Save:{' '}
        <strong className="text-white">
          {mode === 'sub' ? 'Monthly Subscription' : 'One-Time Purchase'}
        </strong>
      </p>

      {/* Bundle cards */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {PLANS.map((p, i) => {
          const o = p[mode];
          const active = qty === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setQty(i)}
              className={`relative text-center rounded-xl border-2 p-2.5 pt-5 transition-colors cursor-pointer ${
                active
                  ? 'border-bb-gold-mid bg-[#261F16]'
                  : 'border-bb-separator bg-[#181818] hover:border-white/30'
              }`}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bb-gold-mid text-bb-text-dark text-[0.625rem] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                {o.save}
              </span>
              <img
                src={p.image}
                alt=""
                className="w-10 h-10 mx-auto object-contain mb-2"
              />
              <p className="text-white text-[0.8125rem] font-bold leading-tight">
                {p.name}
              </p>
              {o.old && (
                <p className="text-white/35 text-[0.6875rem] line-through">
                  {o.old}
                </p>
              )}
              <p className="text-white text-[0.8125rem] font-bold mt-0.5">
                {o.price}
                {o.perUnit && (
                  <span className="text-white/55 font-normal">
                    {' '}
                    {o.perUnit}
                  </span>
                )}
              </p>
              {o.totalLabel && (
                <p className="text-white/45 text-[0.625rem] mt-0.5">
                  {o.totalLabel}
                </p>
              )}
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="flex items-center justify-center gap-2.5 w-full h-14 bg-[#008236] hover:brightness-110 text-white text-[0.875rem] font-extrabold tracking-widest uppercase rounded-lg transition-all cursor-pointer mb-4"
      >
        <CartIcon className="w-4 h-4" />
        Add to Cart — {offer.cartTotal}
      </button>

      <div className="flex items-center gap-3 flex-wrap mb-5">
        <div className="flex items-center gap-2 text-white/65 text-[0.875rem]">
          <span className="w-2.5 h-2.5 rounded-full bg-bb-green shrink-0" />
          In stock — 121,847+ Optimized Men
        </div>
        <div className="flex items-center gap-1.5 text-bb-gold text-[0.875rem] font-semibold">
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M14 9h4l4 4v4a1 1 0 0 1-1 1h-1" />
            <circle cx="7.5" cy="18.5" r="1.5" />
            <circle cx="17.5" cy="18.5" r="1.5" />
          </svg>
          Free Shipping on All Orders
        </div>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 rounded-xl border border-bb-gold-dark/40 bg-[#14100c] overflow-hidden mb-6">
        {TRUST_DATA.map((t, i) => (
          <div
            key={t.title}
            className={`p-3.5 text-center ${i > 0 ? 'border-l border-bb-separator' : ''}`}
          >
            <span className="block w-6 h-6 mx-auto mb-1.5 text-bb-gold-mid">
              <TrustIcon id={t.id} />
            </span>
            <p className="text-white text-[0.75rem] font-bold leading-tight">
              {t.title}
            </p>
            <p className="text-white/70 text-[0.6875rem] leading-tight mt-0.5">
              {t.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Bonuses */}
      <p className="text-white/75 text-[0.875rem] mb-3">
        <strong className="text-white">Exclusive Offer!</strong> Order today for
        free bonuses:
      </p>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {BONUSES.map(b => (
          <div key={b.name} className="text-center">
            <div className="w-12 h-12 mx-auto mb-1.5 overflow-hidden">
              <img
                src={b.img}
                alt={b.name}
                width={148}
                height={147}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white/90 text-[0.75rem] leading-tight">
              {b.name}
            </p>
          </div>
        ))}
      </div>

      {/* Accordions */}
      <div className="space-y-2.5">
        <Accordion label="Shipping Details" defaultOpen>
          <p>All orders ship free within the US.</p>
        </Accordion>

        <Accordion label="Ingredients">
          <p className="mb-3">
            12 clinical-dose ingredients in every cup, on a base of smooth
            organic Colombian Arabica:
          </p>
          <ul className="space-y-1.5">
            {INGREDIENTS.map(([name, dose]) => (
              <li
                key={name}
                className="flex items-center justify-between gap-4 border-b border-bb-separator/60 pb-1.5"
              >
                <span className="text-white/85">{name}</span>
                <span className="text-bb-gold-mid font-medium whitespace-nowrap">
                  {dose}
                </span>
              </li>
            ))}
          </ul>
        </Accordion>
      </div>

      <ReviewsWidget />
    </div>
  );
}
