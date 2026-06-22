import kit2 from '@assets/products/2kits.webp';
import CartIcon from './shared/CartIcon';
import { CART_POPUP, CHECKOUT } from '@/data/constants';
import { withReferrer } from '@/utils/referrer';

export default function CartUpsellPopup({ mode, onClose }) {
  const cfg = CART_POPUP[mode] ?? CART_POPUP.one;
  const fallbackUrl = withReferrer(CHECKOUT.one[0]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-5 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-[#0f0f0f] rounded-2xl overflow-hidden border border-[#c49b43]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="h-[3px] w-full"
          style={{ background: 'linear-gradient(90deg, transparent, #c49b43, transparent)' }}
        />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#c49b43]/10 border border-[#c49b43]/30 flex items-center justify-center text-[#c49b43] hover:bg-[#c49b43]/20 transition-colors cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-[#1a1400] border-b border-[#c49b43]/30 px-6 pt-5 pb-4 text-center">
          <span className="inline-flex items-center gap-1.5 bg-[#c49b43]/10 border border-[#c49b43]/35 text-[#c49b43] text-[9px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full mb-2.5">
            ⚡ Flash Offer
          </span>
          <p className="text-2xl font-black text-white tracking-wide mb-1">
            WAIT! DON&apos;T MISS OUT
          </p>
          <p className="text-sm text-white/60">
            Upgrade to <span className="text-[#c49b43] font-black">2 Kits</span> and pay only{' '}
            <span className="text-[#c49b43] font-black">{cfg.subtitlePrice}</span>
          </p>
        </div>

        {/* Body */}
        <div className="px-6 pt-5 pb-4">
          <div className="flex items-center gap-4 mb-5">
            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-xl bg-[#c49b43]/[0.07] border border-[#c49b43]/20 overflow-hidden">
                <img src={kit2} alt="" aria-hidden="true" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -top-2 -right-2 bg-[#c49b43] text-[#0f0f0f] text-[8px] font-black w-8 h-8 rounded-full flex flex-col items-center justify-center leading-tight">
                <span>{cfg.discount[0]}</span>
                <span>{cfg.discount[1]}</span>
              </div>
            </div>
            <div>
              <p className="text-[9px] font-bold tracking-widest uppercase text-[#c49b43]/65 mb-1.5">
                2 Pouches · 60-Day Supply
              </p>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-[38px] font-black text-[#c49b43] leading-none">
                  {cfg.price}
                </span>
                <span className="text-white/40 line-through mb-1.5">{cfg.old}</span>
              </div>
              <p className="text-white/70 text-sm font-semibold">{cfg.perPouch} per pouch</p>
            </div>
          </div>

          <ul className="space-y-2 mb-4">
            {[
              'Double your results — 2x the support',
              '60-Day Money Back Guarantee',
              'Free Shipping included',
            ].map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-white/85 text-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 shrink-0 text-[#c49b43]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <p className="text-[10px] text-white/25 italic text-center">
            *For best results, consistent daily use for 60+ days is recommended.
          </p>
        </div>

        {/* CTA */}
        <div className="px-6 pb-6 space-y-2">
          <a
            href={withReferrer(cfg.purchaseLink)}
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#c49b43] hover:bg-[#d4aa52] text-[#0f0f0f] font-black text-sm rounded-xl transition-all hover:-translate-y-0.5 active:scale-[0.98] no-underline"
          >
            <CartIcon className="w-4 h-4" />
            {cfg.cta}
          </a>
          <a
            href={fallbackUrl}
            className="block w-full py-2 text-white/30 hover:text-white/55 font-medium text-xs text-center underline underline-offset-2 no-underline"
          >
            No thanks, I only want 1 kit at full price
          </a>
        </div>
      </div>
    </div>
  );
}
