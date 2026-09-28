import { useEffect, useRef, useState } from 'react';
import checkGold from '../../assets/icons/check-gold.svg';
import { withCurrentParams } from '../../utils/withCurrentParams';
import { CHECKOUT_URL, RATING } from './data';
import { Icon, Stars } from './icons';

// A página é pré-renderizada no build: o HTML sai com a URL crua e os params (utm/fbclid)
// entram depois do mount — assim o hydrate não diverge e o link final leva a atribuição.
export const useCheckoutHref = () => {
  const [href, setHref] = useState(CHECKOUT_URL);
  useEffect(() => setHref(withCurrentParams(CHECKOUT_URL)), []);
  return href;
};

// Liga o giro da borda só enquanto o elemento está na tela.
export const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: '80px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView ? 'on' : 'off'];
};

export const CtaButton = ({ children = 'TRY IT NOW ➤', size = 'md', className = '' }) => {
  const sizes = { sm: 'btn-cta-sm', md: '', lg: 'btn-cta-lg' };
  const href = useCheckoutHref();
  const [ref, anim] = useInView();
  return (
    <a
      ref={ref}
      data-anim={anim}
      href={href}
      className={`btn-cta btn-cta-light flex w-full items-center justify-center gap-3 text-balance ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
};

export const CheckGold = ({ className = 'h-[1.125rem] w-[1.125rem]' }) => (
  <img src={checkGold} alt="" aria-hidden className={`shrink-0 ${className}`} />
);

export const GuaranteeLine = ({ className = '' }) => (
  <p className={`flex items-center justify-center gap-1.5 text-[0.8125rem] font-medium text-bb-muted ${className}`}>
    <Icon name="shield" size={15} className="text-bb-green-dark" />
    Try it today with a 365-day trial period. Money-back guarantee.
  </p>
);

// 2.4 — CTA inline: fundo claro, título, botão dourado, garantia.
export const InlineCta = () => (
  <aside className="my-10 rounded-2xl border border-bb-line bg-[#f6f5f2] px-5 py-7 text-center desk:px-10">
    <p className="font-mona text-[1.25rem] font-semibold leading-tight text-bb-text-dark desk:text-[1.375rem]">
      Try Today, Get 44% Off For Life
    </p>
    <div className="mx-auto mt-5 max-w-[26rem]">
      <CtaButton>TRY IT NOW ➤</CtaButton>
    </div>
    <GuaranteeLine className="mt-4" />
  </aside>
);

export const Badge = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    {icon}
    <span className="text-[0.75rem] font-bold leading-tight text-bb-text-dark">{label}</span>
  </div>
);

// 2.8 / 2.10 — faixa de rating repetida.
export const RatingStrip = () => (
  <div className="my-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 rounded-2xl border border-bb-line px-4 py-4 text-[0.8125rem] font-medium text-[#4a463f]">
    <span className="flex items-center gap-1.5">
      <Stars size={14} />
      <strong className="font-bold text-bb-text-dark">{RATING.score}</strong>
    </span>
    <span className="font-bold text-bb-text-dark">{RATING.reviews} Reviews</span>
    <span className="flex items-center gap-1.5">
      <Icon name="gift" size={15} className="text-bb-gold-mid" /> 44% Off For Life
    </span>
    <span className="flex items-center gap-1.5">
      <Icon name="truck" size={15} className="text-bb-gold-mid" /> Free Shipping
    </span>
    <span className="flex items-center gap-1.5">
      <Icon name="lock" size={15} className="text-bb-gold-mid" /> 365-Day Guarantee
    </span>
  </div>
);
