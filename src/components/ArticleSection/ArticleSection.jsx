import { useState, useRef, useEffect } from 'react';

import vitaminD from '../../assets/ingredients/vitamind.webp';
import zinc from '../../assets/ingredients/zinc.webp';
import ashwagandha from '../../assets/ingredients/ashwagandha.webp';
import tongkat from '../../assets/ingredients/tongkat.webp';
import shilajit from '../../assets/ingredients/shilajit.webp';
import lionsMane from '../../assets/ingredients/lionsmane.webp';
import cordyceps from '../../assets/ingredients/cordyceps.webp';
import reishi from '../../assets/ingredients/reishi.webp';
import chaga from '../../assets/ingredients/chaga.webp';
import advImg05 from '../../assets/images/image-01.webp';
import advImg06 from '../../assets/images/image-02.webp';
import kit1 from '../../assets/products/1bundle.webp';
import kit2 from '../../assets/products/2bundle.webp';
import kit3 from '../../assets/products/3bundle.webp';
import badge365 from '../../assets/utils/badge-365days.webp';
import wallpaper from '../../assets/utils/black-wallpaper.webp';

const GOLD = '#dca331';
const PINK = '#e91e8c';

const getCheckoutLinks = () => {
  const get = (name, fallback) =>
    document.querySelector(`meta[name="${name}"]`)?.content || fallback;
  return {
    checkout1OneTime: get(
      'checkout-link-1-onetime',
      'https://links.ballsnbrains.com/go/1-bundle-ultimate-stack-onetime-backredirect-mpok9jkf',
    ) + '?source=backredirect',
    checkout2OneTime: get(
      'checkout-link-2-onetime',
      'https://links.ballsnbrains.com/go/2-bundle-ultimate-stack-onetime-backredirect-mpoka7j3',
    ) + '?source=backredirect',
    checkout3OneTime: get(
      'checkout-link-3-onetime',
      'https://links.ballsnbrains.com/go/3-bundle-ultimate-stack-onetime-backredirect-mpokbwgy',
    ) + '?source=backredirect',
    checkout1Subscribe: get(
      'checkout-link-1-subscribe',
      'https://links.ballsnbrains.com/go/1-bundle-ultimate-stack-subscribe-backredirect-mpq090ks',
    ) + '?source=backredirect',
    checkout2Subscribe: get(
      'checkout-link-2-subscribe',
      'https://links.ballsnbrains.com/go/2-bundle-ultimate-stack-subscribe-backredirect-mpq09tt8',
    ) + '?source=backredirect',
    checkout3Subscribe: get(
      'checkout-link-3-subscribe',
      'https://links.ballsnbrains.com/go/3-bundle-ultimate-stack-subscribe-backredirect-mpq0am03',
    ) + '?source=backredirect',
  };
};
const checkoutLinks = getCheckoutLinks();

const ballFuelIngredients = [
  {
    name: 'Vitamin D3 + Vitamin B3 + Zinc',
    desc: 'The building blocks your body actually needs to manufacture testosterone. What most men 40+ are deficient in without ever knowing it.',
    img: vitaminD,
  },
  {
    name: 'Ashwagandha (KSM-66 Grade)',
    desc: 'Clinically shown to drop cortisol by up to 27.9% in 60 days. Cortisol down, T comes up naturally.',
    img: ashwagandha,
  },
  {
    name: 'Tongkat Ali',
    desc: "Signals your Leydig cells directly to ramp up natural testosterone production. Doesn't flood your system with external hormones. Just turns your own system back on.",
    img: tongkat,
  },
  {
    name: 'Mucuna Pruriens',
    desc: "Dopamine precursor. Restores motivation, drive, and the desire to actually want things you've lost interest in over the last few years.",
    img: shilajit,
  },
];

const brainPumpIngredients = [
  {
    name: 'Cordyceps Sinensis',
    desc: 'Boosts cellular ATP production. Clean, sustained energy. No crash. No caffeine required.',
    img: cordyceps,
  },
  {
    name: "Lion's Mane",
    desc: 'Stimulates Nerve Growth Factor (NGF). Restores memory, focus, and mental clarity.',
    img: lionsMane,
  },
  {
    name: 'Reishi + Chaga',
    desc: 'Adaptogens. Lower brain inflammation and oxidative stress — the two mechanisms wrecking your hippocampus after 40.',
    img: reishi,
  },
  {
    name: 'Maitake + Sun + White Button + Wood Ear',
    desc: 'Immune, metabolic, circulatory, and neurological support. Traditional Chinese medicine for 2,000 years.',
    img: chaga,
  },
];

const pricingTiers = [
  {
    tagText: 'JUST THE TIP',
    title: '2 BOTTLES',
    supply: '60 DAY SUPPLY',
    pricePerBottle: '34.50',
    subscriptionPricePerBottle: '24.50',
    oldTotal: '$69',
    newTotal: '$69',
    subscriptionTotal: '$49',
    shippingInfo: '+ SHIPPING!',
    shippingInfoSubscribe: '+ SHIPPING!',
    recommended: false,
    img: kit1,
    checkoutUrl: checkoutLinks.checkout1OneTime,
    subscriptionCheckoutUrl: checkoutLinks.checkout1Subscribe,
    valueProps: ['60-Days Money Back Guarantee'],
    subscriptionValueProps: [
      'Auto-Delivery Every 30 Days',
      '365-Days Money Back Guarantee',
      'Cancel Anytime',
    ],
  },
  {
    tagText: 'GOING DEEP',
    title: '4 BOTTLES',
    supply: '120 DAY SUPPLY',
    pricePerBottle: '32',
    subscriptionPricePerBottle: '22',
    oldTotal: '$128',
    newTotal: '$128',
    subscriptionTotal: '$88',
    shippingInfo: '+ SHIPPING!',
    shippingInfoSubscribe: 'FREE SHIPPING!',
    recommended: false,
    img: kit2,
    checkoutUrl: checkoutLinks.checkout2OneTime,
    subscriptionCheckoutUrl: checkoutLinks.checkout2Subscribe,
    valueProps: ['60-Days Money Back Guarantee'],
    subscriptionValueProps: [
      'Auto-Delivery Every 60 Days',
      'Free Shipping',
      '365-Days Money Back Guarantee',
      'Cancel Anytime',
    ],
  },
  {
    tagText: 'BALLS TO THE WALL',
    title: '6 BOTTLES',
    supply: '180 DAY SUPPLY',
    pricePerBottle: '29.50',
    subscriptionPricePerBottle: '19.50',
    oldTotal: '$177',
    newTotal: '$177',
    subscriptionTotal: '$117',
    shippingInfo: '+ SHIPPING!',
    shippingInfoSubscribe: 'FREE SHIPPING!',
    recommended: true,
    img: kit3,
    checkoutUrl: checkoutLinks.checkout3OneTime,
    subscriptionCheckoutUrl: checkoutLinks.checkout3Subscribe,
    valueProps: ['60-Days Money Back Guarantee', 'Free Shipping'],
    subscriptionValueProps: [
      'Auto-Delivery Every 90 Days',
      'Free Shipping',
      '365-Days Money Back Guarantee',
      'Cancel Anytime',
    ],
  },
];

const reviews = [
  {
    stars: 5,
    quote:
      "\"I was skeptical of 'natural testosterone boosters' after wasting money on garbage. But the two-formula approach made sense — address cortisol AND testosterone. Blood work doesn't lie: 425 to 695 in 3 weeks.\"",
    name: 'Jason L., 37',
    location: 'Chicago, IL',
  },
  {
    stars: 5,
    quote:
      '"The 2pm crash was destroying my productivity. I\'d be useless by afternoon, crushing caffeine just to function. Now? Sustained energy from 6am to 8pm. No crashes. No jitters. And I\'m down 15 pounds without changing my diet."',
    name: 'Kevin P., 41',
    location: 'Phoenix, AZ',
  },
  {
    stars: 5,
    quote:
      "\"Stress was killing me. Running a business, three kids, zero energy. I'd snap at everyone. After 6 weeks, I'm calmer, more focused, and my wife says I'm 'present again'.\"",
    name: 'Derek M., 48',
    location: 'Nashville, TN',
  },
];

const faqs = [
  {
    q: 'Why two capsules and not just one?',
    a: "The two axes — hormonal and cognitive — require different compounds at different concentrations. Cramming everything into a single capsule would mean cutting the clinical dose of every ingredient by more than half. We'd rather do it right.",
  },
  {
    q: 'How many capsules a day?',
    a: '2 capsules of Ultimate Ball Fuel + 2 capsules of Ultimate Brain Pump in the morning. With water or your first meal. 60 seconds out of your day.',
  },
  {
    q: 'When will I feel it?',
    a: 'Most men start feeling shifts in energy and mental clarity between days 7 and 14. Real hormonal shifts (libido, morning wood, body composition) start kicking in between weeks 4 and 8. Full optimization: 12–16 weeks. Not magic. Just biochemistry.',
  },
  {
    q: "Can I take this if I'm already on TRT?",
    a: "You can. The Ultimate Stack doesn't compete with TRT — it complements it. Specifically, Ultimate Ball Fuel helps control the T-to-estrogen conversion that's the #1 issue for guys on TRT. But talk to your doctor before making any changes to your protocol.",
  },
  {
    q: 'What if I also want to take the Testosterone Mushroom Coffee?',
    a: "Go for it. Plenty of our customers run the full stack (TMC + Ultimate Stack). Just don't double up on the ingredients that overlap. If you want guidance on stacking the two, shoot an email to support@ballsnbrains.com with your situation and we'll dial it in for you.",
  },
  {
    q: 'Is there caffeine in the capsules?',
    a: 'Zero. Not a single milligram of caffeine in either formula. The energy comes from the adaptogenic mushrooms (Cordyceps in particular) and the hormonal optimization itself. Clean energy. No crash. No anxiety. No messing with your sleep.',
  },
  {
    q: "Does it work if I'm over 60?",
    a: "Yes. Honestly, the older you are, the more aromatase you produce — and the more dramatic the shift usually is. Our oldest active customer is 71 and he's on month 14.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "You send it back. You've got 365 days to test it. If you don't feel a difference, just email us and ask for a refund. We send your money back, no friction. That's the deal.",
  },
];

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: GOLD, fontSize: 14 }}>
        ★
      </span>
    ))}
  </div>
);

const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const CtaButton = ({
  label = 'GET STARTED — RECLAIM YOUR TESTOSTERONE',
  className = '',
  href = checkoutLinks.checkout3OneTime,
}) => (
  <a
    href={href}
    className={`block w-full text-center text-white font-sans font-black text-sm uppercase tracking-widest py-5 rounded-xl no-underline transition-all duration-200 hover:opacity-90 hover:scale-[1.01] ${className}`}
    style={{ background: GOLD, boxShadow: `0 0 40px rgba(220,163,49,0.45)` }}
  >
    {label}
  </a>
);

const IngredientCard = ({ name, desc, img }) => (
  <div className="flex items-center gap-0 rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#111]">
    {img ? (
      <div className="w-28 h-28 shrink-0 flex items-center justify-center p-2 bg-[#0d0d0d]">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
    ) : (
      <div className="w-28 h-28 shrink-0 flex items-center justify-center bg-[#1a1a1a]">
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke={GOLD}
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l2 2" strokeLinecap="round" />
        </svg>
      </div>
    )}
    <div className="flex-1 px-4 py-3 flex flex-col gap-1.5 min-w-0">
      <p className="text-white font-sans font-black text-xs uppercase tracking-wide leading-snug">
        {name}
      </p>
      <p className="text-white/50 font-sans text-[11px] leading-snug">{desc}</p>
    </div>
  </div>
);

const CountdownTimer = ({ durationSeconds = 2100, cardId = 'default' }) => {
  const storageKey = `pc_timer_${cardId}`;
  const [secs, setSecs] = useState(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const { end } = JSON.parse(stored);
        const remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
        if (remaining > 0) return remaining;
      }
    } catch (_) {}
    const end = Date.now() + durationSeconds * 1000;
    localStorage.setItem(storageKey, JSON.stringify({ end }));
    return durationSeconds;
  });
  useEffect(() => {
    const id = setInterval(
      () =>
        setSecs(s => {
          if (s <= 1) {
            clearInterval(id);
            return 0;
          }
          return s - 1;
        }),
      1000,
    );
    return () => clearInterval(id);
  }, []);
  const hh = String(Math.floor(secs / 3600)).padStart(2, '0');
  const mm = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');
  return (
    <div
      className="rounded-lg px-4 py-2 text-center"
      style={{
        background: 'linear-gradient(180deg,#c81e1e,#9f1414)',
        border: '1px solid rgba(0,0,0,0.28)',
      }}
    >
      <p
        className="font-sans font-black text-white tracking-[3px]"
        style={{ fontSize: 16 }}
      >
        {hh}:{mm}:{ss}
      </p>
      <p
        className="text-white/80 font-sans font-semibold uppercase tracking-[1px] mt-0.5"
        style={{ fontSize: 8 }}
      >
        Only 7 Bundles Left At This Price
      </p>
    </div>
  );
};

const FaCheckCircle = ({ size = 13, color = 'currentColor' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    className="shrink-0"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const FaShoppingCart = ({ size = 14, color = 'currentColor' }) => (
  <svg
    viewBox="0 0 576 512"
    width={size}
    height={size}
    fill={color}
    className="shrink-0"
  >
    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
  </svg>
);

const FaLock = ({ size = 9, color = 'currentColor' }) => (
  <svg
    viewBox="0 0 448 512"
    width={size}
    height={size}
    fill={color}
    className="shrink-0"
  >
    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
  </svg>
);

const PricingCard = ({ tier, isFeatured = false }) => {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const currentProps = isSubscribed
    ? tier.subscriptionValueProps
    : tier.valueProps;
  const currentPrice = isSubscribed
    ? tier.subscriptionPricePerBottle
    : tier.pricePerBottle;
  const currentTotal = isSubscribed ? tier.subscriptionTotal : tier.newTotal;
  const currentShipping = isSubscribed
    ? tier.shippingInfoSubscribe
    : tier.shippingInfo;
  const currentCheckout = isSubscribed
    ? tier.subscriptionCheckoutUrl
    : tier.checkoutUrl;

  const textMain = isFeatured ? '#3e2d09' : '#fff';
  const textMuted = isFeatured ? 'rgba(62,45,9,0.55)' : 'rgba(255,255,255,0.5)';
  const textDim = isFeatured ? 'rgba(62,45,9,0.35)' : 'rgba(255,255,255,0.25)';
  const checkColor = isFeatured ? '#3e2d09' : GOLD;
  const titleShadow = isFeatured
    ? '0 1px 1px rgba(0,0,0,0.25), 0 3px 8px rgba(0,0,0,0.15)'
    : '0 1px 1px rgba(0,0,0,0.9),  0 3px 8px rgba(0,0,0,0.45)';

  return (
    <div className={isFeatured ? 'relative pt-5' : 'relative'}>
      {/* Floating badge — gold/featured card only */}
      {isFeatured && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-20 px-6 py-2 rounded-full whitespace-nowrap flex items-center justify-center"
          style={{
            background: '#2B2210',
            border: '2.5px solid rgb(255, 238, 205)',
            boxShadow:
              '0 0 0 1px rgba(0,0,0,0.6), 0 2px 14px rgba(62,45,9,0.65), inset 0 0 0 3px #1c1a14',
          }}
        >
          <span
            className="font-sans font-bold text-[11px] uppercase tracking-[2.5px] inline-flex items-center gap-1.5"
            style={{ color: '#F3DFA2', lineHeight: 1 }}
          >
            <span style={{ color: '#F3DFA2' }}>★</span>
            {tier.tagText}
          </span>
        </div>
      )}

      {/* Card shell */}
      <div
        className={`pc-shell ${isFeatured ? 'pc-gold' : 'pc-dark'} flex flex-col`}
      >
        {/* Non-featured topbar label — inset, with margin and rounded corners */}
        {!isFeatured && (
          <div className="relative z-10 mx-3 mt-3 py-2 text-center rounded-xl pc-topbar">
            <span
              className="font-sans font-bold text-[11px] uppercase tracking-[3px]"
              style={{ color: 'rgba(255,255,255,0.92)', lineHeight: 1 }}
            >
              {tier.tagText}
            </span>
          </div>
        )}

        <div
          className={`relative z-10 flex flex-col gap-4 flex-1 ${isFeatured ? 'px-7 pb-7 pt-6' : 'px-6 pb-6 pt-4'}`}
        >
          {/* Title + supply */}
          <div className="text-center">
            <p
              className="font-sans font-bold leading-tight"
              style={{
                fontSize: isFeatured ? 48 : 32,
                color: textMain,
                textShadow: titleShadow,
              }}
            >
              {tier.title}
            </p>
            <p
              className="font-sans font-semibold uppercase tracking-[2.5px] mt-1.5"
              style={{ fontSize: 11, color: textMuted }}
            >
              {tier.supply}
            </p>
          </div>

          {/* Countdown — compact box, featured only */}
          {isFeatured && (
            <CountdownTimer durationSeconds={2100} cardId={tier.tagText} />
          )}

          {/* Product image */}
          <div className="flex justify-center">
            <img
              src={tier.img}
              alt={tier.title}
              className="object-contain"
              style={{
                width: isFeatured ? 280 : 190,
                height: isFeatured ? 220 : 150,
              }}
              loading="lazy"
            />
          </div>

          {/* Subscribe / One-time toggle */}
          <div className="pc-pill-track pc-pill flex p-[3px]">
            <button
              onClick={() => setIsSubscribed(false)}
              className="flex-1 py-2.5 rounded-full relative text-center"
            >
              {!isSubscribed && (
                <span
                  className={`absolute inset-0 pc-pill pc-bevel ${isFeatured ? 'pc-pill-sub-featured' : 'pc-pill-sub'}`}
                />
              )}
              <span
                className="relative z-10 font-sans font-semibold text-[9px] uppercase tracking-wide"
                style={{
                  color: !isSubscribed
                    ? isFeatured
                      ? '#3e2d09'
                      : 'rgba(255,255,255,0.92)'
                    : isFeatured
                      ? 'rgba(62,45,9,0.42)'
                      : 'rgba(255,255,255,0.38)',
                }}
              >
                One-time
              </span>
            </button>
            <button
              onClick={() => setIsSubscribed(true)}
              className="flex-1 py-2.5 rounded-full relative text-center"
            >
              {isSubscribed && (
                <span
                  className={`absolute inset-0 pc-pill pc-bevel ${isFeatured ? 'pc-pill-sub-featured' : 'pc-pill-sub'}`}
                />
              )}
              <span
                className="relative z-10 font-sans font-semibold text-[9px] uppercase tracking-wide"
                style={{
                  color: isSubscribed
                    ? isFeatured
                      ? '#3e2d09'
                      : 'rgba(255,255,255,0.92)'
                    : isFeatured
                      ? 'rgba(62,45,9,0.42)'
                      : 'rgba(255,255,255,0.38)',
                }}
              >
                Subscribe & Save
              </span>
            </button>
          </div>

          {/* Price — superscript $, no inset shadow */}
          <div className="text-center py-1">
            <div className="inline-flex items-start gap-0.5">
              <span
                className="font-sans font-bold leading-none mt-3"
                style={{ fontSize: 20, color: textMain }}
              >
                $
              </span>
              <span
                className="font-sans font-extrabold leading-none"
                style={{ fontSize: isFeatured ? 62 : 50, color: textMain }}
              >
                {currentPrice}
              </span>
            </div>
            <p
              className="font-sans font-semibold uppercase tracking-[2.5px] mt-1"
              style={{ fontSize: 10, color: textMuted }}
            >
              Per Bottle
            </p>
          </div>

          {/* Value props — semi-transparent box */}
          <div
            className="rounded-xl p-3.5"
            style={{
              background: isFeatured
                ? 'rgba(62,45,9,0.1)'
                : 'rgba(255,255,255,0.05)',
              border: `1px solid ${isFeatured ? 'rgba(62,45,9,0.18)' : 'rgba(255,255,255,0.09)'}`,
            }}
          >
            <ul className="flex flex-col gap-2.5">
              {currentProps.map((prop, pi) => (
                <li key={pi} className="flex items-center gap-2.5">
                  <FaCheckCircle size={14} color={checkColor} />
                  <span
                    className="font-sans font-semibold leading-snug"
                    style={{
                      fontSize: 12,
                      color: isFeatured ? '#3e2d09' : 'rgba(255,255,255,0.82)',
                    }}
                  >
                    {prop}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          {isFeatured ? (
            <a
              href={currentCheckout}
              className="pc-cta-featured-gold flex items-center justify-center gap-2 w-full py-4 font-sans font-black text-sm uppercase tracking-widest no-underline"
              style={{ color: '#3e2d09' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaShoppingCart size={15} color="#3e2d09" />
                Order Now
              </span>
            </a>
          ) : (
            <a
              href={currentCheckout}
              className="pc-cta pc-bevel flex items-center justify-center gap-2 w-full py-4 font-sans font-black text-sm uppercase tracking-widest no-underline"
              style={{ color: '#fff', borderRadius: '0.9rem' }}
            >
              <FaShoppingCart size={15} color="#fff" />
              Order Now
            </a>
          )}

          {/* Lock */}
          <div className="flex items-center justify-center gap-1.5">
            <FaLock size={9} color={textDim} />
            <span
              className="font-sans font-medium text-[9px] uppercase tracking-[1px]"
              style={{ color: textDim }}
            >
              Secure 256-bit SSL Encryption
            </span>
          </div>

          {/* Total + shipping */}
          <div
            className="text-center pt-3 mt-auto"
            style={{
              borderTop: `1px solid ${isFeatured ? 'rgba(62,45,9,0.2)' : 'rgba(255,255,255,0.1)'}`,
            }}
          >
            {isSubscribed ? (
              <p
                className="font-sans font-semibold text-xs"
                style={{ color: textMuted }}
              >
                Total:{' '}
                <span className="line-through mr-1" style={{ color: textDim }}>
                  {tier.oldTotal}
                </span>
                <span className="font-black" style={{ color: textMain }}>
                  {currentTotal}
                </span>
              </p>
            ) : (
              <p
                className="font-sans font-semibold text-xs"
                style={{ color: textMuted }}
              >
                Total:{' '}
                <span className="font-black" style={{ color: textMain }}>
                  {currentTotal}
                </span>
              </p>
            )}
            <p
              className="font-sans font-bold mt-0.5"
              style={{
                fontSize: 12,
                color:
                  currentShipping === 'FREE SHIPPING!'
                    ? isFeatured
                      ? '#3e2d09'
                      : GOLD
                    : textDim,
              }}
            >
              {currentShipping}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ q, a, open, onToggle }) => (
  <div
    className="border border-[#1f1f1f] rounded-2xl overflow-hidden"
    style={{ background: open ? '#161616' : '#111' }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
    >
      <span className="text-white font-sans font-black text-sm md:text-base leading-snug">
        {q}
      </span>
      <span
        style={{
          color: GOLD,
          fontSize: 22,
          transform: open ? 'rotate(45deg)' : 'none',
          transition: 'transform 0.2s',
          flexShrink: 0,
        }}
      >
        +
      </span>
    </button>
    {open && (
      <div className="px-6 pb-5">
        <div className="border-t border-[#1f1f1f] pt-4">
          <p className="text-white/60 font-sans text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    )}
  </div>
);

export default function ArticleSection() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="bg-[#070707]">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/82 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: Copy */}
            <FadeIn>
              <div className="flex flex-col gap-6">
                <h1
                  className="font-sans font-extrabold leading-[1.1]"
                  style={{ fontSize: 'clamp(28px, 4.5vw, 54px)' }}
                >
                  <span className="text-white block">
                    Mushroom Coffee's Not Your Thing?
                  </span>
                  <span className="block" style={{ color: GOLD }}>
                    Here's Something You Might Actually Like.
                  </span>
                </h1>

                <p
                  className="font-sans text-base md:text-lg leading-relaxed italic"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  Same mechanism. Same clinically-dosed ingredients. No coffee.
                  No caffeine. In capsules.
                </p>

                <p className="text-white/75 font-sans text-base md:text-lg leading-relaxed">
                  <strong className="text-white">34% OFF</strong> the only
                  testosterone-optimizing dual-formula system scientifically
                  designed to stop the Stress-Cortisol Death Spiral, raise your
                  T by <strong style={{ color: PINK }}>15–46%</strong>, and give
                  you all-day energy — without needles, prescriptions, or
                  pharmaceutical side effects.
                </p>

                <a
                  href={checkoutLinks.checkout3Subscribe}
                  className="inline-block text-center font-sans font-black text-sm md:text-base uppercase tracking-widest py-5 px-6 rounded-full no-underline transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                  style={{
                    background: GOLD,
                    color: '#000',
                    boxShadow: `0 0 40px rgba(220,163,49,0.4)`,
                  }}
                >
                  Get 34% Off — Reclaim Your Testosterone
                </a>

                <div className="flex items-center gap-2.5">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: '#22c55e' }}
                  />
                  <span className="text-white/55 font-sans text-sm">
                    High Demand | Ships in 24h
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Right: Product images + badge */}
            <FadeIn delay={150}>
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={kit3}
                      alt="Ultimate Stack — 6 Bottles"
                      className="w-full object-contain"
                      loading="eager"
                    />
                  </div>

                  {/* Flash sale badge */}
                  <div
                    className="absolute -top-4 -right-2 w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center"
                    style={{
                      background: `radial-gradient(circle, ${GOLD} 0%, #b8860b 100%)`,
                      border: '2px dashed rgba(255,255,255,0.45)',
                      transform: 'rotate(12deg)',
                      boxShadow: '0 4px 20px rgba(220,163,49,0.45)',
                    }}
                  >
                    <span className="text-white font-sans font-black text-[8px] uppercase tracking-tight leading-tight">
                      FLASH SALE
                    </span>
                    <span
                      className="text-white font-sans font-black leading-tight"
                      style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}
                    >
                      34%
                    </span>
                    <span className="text-white font-sans font-black text-[9px] uppercase tracking-tight">
                      OFF
                    </span>
                  </div>
                </div>

                {/* Reviews bar */}
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a]/90">
                  <span style={{ color: GOLD, fontSize: 15, letterSpacing: 2 }}>
                    ★★★★★
                  </span>
                  <span className="text-white font-sans font-black text-xs md:text-sm tracking-[2px] uppercase">
                    +2,847 Reviews
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── INTRO — 3 REASONS ────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mb-8">
              Look, we get it.
            </p>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mb-8">
              Some guys land on our Testosterone Mushroom Coffee page, read the
              whole thing, it clicks, and they buy. They're recurring customers
              by month three.
            </p>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mb-10">
              And some guys read the whole thing, it clicks just as hard, but
              they freeze before hitting "Add to Cart." Usually it's one of
              three reasons:
            </p>
          </FadeIn>

          <div className="flex flex-col gap-4 mb-10">
            {[
              {
                num: '01',
                title: "You don't drink coffee.",
                body: "Never have. And you're not starting at 47 just to fix your testosterone.",
              },
              {
                num: '02',
                title: 'You drink too much of it.',
                body: 'At this point caffeine makes you jittery, wrecks your sleep, and spikes your anxiety. The last thing you need is another cup in the rotation.',
              },
              {
                num: '03',
                title:
                  'You saw "mushroom coffee" and your brain filed it under "trendy wellness stuff."',
                body: "Not your style. You want a man's supplement, not a photogenic drink.",
              },
            ].map((r, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex items-start gap-5 p-6 rounded-2xl border border-[#1f1f1f] bg-[#111]">
                  <span
                    className="font-sans font-black text-2xl shrink-0"
                    style={{ color: GOLD }}
                  >
                    {r.num}
                  </span>
                  <div>
                    <p className="text-white font-sans font-black text-sm md:text-base mb-1">
                      {r.title}
                    </p>
                    <p className="text-white/55 font-sans text-sm leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mb-4">
              All fair. All legit.
            </p>
            <p className="text-white font-sans font-black text-base md:text-lg leading-relaxed mb-6">
              But the problem doesn't go away, does it?
            </p>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
              Cortisol jacked up 24/7. Testosterone dropping every year.
              Aromatase quietly converting what little T you have left into
              estrogen. Energy that tanks at 2 PM. Brain fog that won't lift. A
              sex drive that stopped showing up without warning.
            </p>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mt-4">
              You know it's happening. Otherwise you wouldn't have landed on our
              page in the first place.
            </p>
            <p className="text-white font-sans font-black text-base md:text-xl leading-relaxed mt-6">
              That's exactly why we built the{' '}
              <span style={{ color: GOLD }}>Ultimate Stack</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── PRODUCT OVERVIEW ──────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p
                className="font-sans font-black text-xs tracking-[4px] uppercase mb-4"
                style={{ color: GOLD }}
              >
                The Ultimate Stack
              </p>
              <h2
                className="text-white font-serif font-bold leading-tight"
                style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}
              >
                Two Bottles. Same Mission. Zero Coffee.
              </h2>
              <p className="text-white/55 font-sans text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                Two supplements. Working together. Hitting the two systems that
                fall apart in a man after 40: the hormonal axis and the
                cognitive axis.
              </p>
              <p className="text-white/55 font-sans text-base mt-3 max-w-2xl mx-auto leading-relaxed">
                This isn't some generic "men's health" stack you grab at GNC.
                It's the same engineering behind our Testosterone Mushroom
                Coffee — reformulated into capsules, with the same compounds at
                clinical doses.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: 'ULTIMATE BALL FUEL',
                sub: 'Testosterone Support',
                color: '#c47a1e',
                img: advImg05,
              },
              {
                label: 'ULTIMATE MIND PUMP',
                sub: 'Mushroom Complex',
                color: '#1a5c4a',
                img: advImg06,
              },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#111]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5">
                      <p className="text-white font-sans font-black text-xs uppercase tracking-[3px] mb-1">
                        {p.label}
                      </p>
                      <p
                        className="font-sans text-sm font-bold"
                        style={{ color: GOLD }}
                      >
                        {p.sub}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BALL FUEL INGREDIENTS ─────────────────────────────── */}
      <section
        className="py-16 px-6 bg-[#0a0a0a] border-t border-[#1a1a1a]"
        id="ingredients"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <p
                className="font-sans font-black text-xs tracking-[4px] uppercase mb-3"
                style={{ color: GOLD }}
              >
                Formula 01
              </p>
              <h2
                className="text-white font-serif font-bold leading-tight mb-3"
                style={{ fontSize: 'clamp(20px, 3vw, 36px)' }}
              >
                Ultimate Ball Fuel — Hormonal Support
              </h2>
              <p className="text-white/55 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                The formula that hits the{' '}
                <strong className="text-white">Balls</strong> side. Lowers
                cortisol. Stimulates natural testosterone production. Blocks
                T-to-estrogen conversion via aromatase. Restores libido, energy,
                and drive.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ballFuelIngredients.map((ing, i) => (
              <FadeIn key={i} delay={i * 60}>
                <IngredientCard {...ing} />
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="mt-6 text-white/40 font-sans text-xs">
              All at clinical doses. No proprietary blend hiding ridiculous low
              doses behind a label. No fillers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── BRAIN PUMP INGREDIENTS ────────────────────────────── */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <p
                className="font-sans font-black text-xs tracking-[4px] uppercase mb-3"
                style={{ color: GOLD }}
              >
                Formula 02
              </p>
              <h2
                className="text-white font-serif font-bold leading-tight mb-3"
                style={{ fontSize: 'clamp(20px, 3vw, 36px)' }}
              >
                Ultimate Brain Pump — Cognitive Support
              </h2>
              <p className="text-white/55 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                The formula that hits the{' '}
                <strong className="text-white">Brains</strong> side. Clean
                energy without caffeine. Cuts through brain fog. Brings back the
                focus and mental clarity you haven't felt since you were 30.
                Reduces the chronic inflammation cortisol's been quietly using
                to age your brain.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {brainPumpIngredients.map((ing, i) => (
              <FadeIn key={i} delay={i * 60}>
                <IngredientCard {...ing} />
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="mt-6 text-white/40 font-sans text-xs">
              The same medicinal mushrooms used in traditional Chinese medicine
              for over 2,000 years. At standardized doses. No fluff. No coffee
              maker required.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── THE STRESS-CORTISOL DEATH SPIRAL ──────────────────── */}
      <section
        className="py-20 px-6 border-t border-[#1a1a1a]"
        style={{ background: '#0e0e0e' }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p
              className="font-sans font-black text-xs tracking-[4px] uppercase mb-4 text-center"
              style={{ color: GOLD }}
            >
              The Science
            </p>
            <h2
              className="text-white font-serif font-bold text-center leading-tight mb-12"
              style={{ fontSize: 'clamp(22px, 3.5vw, 42px)' }}
            >
              Why Two Bottles Instead of One?
            </h2>
          </FadeIn>

          <FadeIn delay={80}>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mb-8">
              Because a 40+ man who's exhausted, carrying belly fat, has zero
              libido, and is stuck in brain fog{' '}
              <strong className="text-white">
                doesn't have one problem. He's got two broken systems running at
                the same time:
              </strong>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                num: '1',
                title: 'The Hormonal Axis',
                body: "Chronic cortisol shuts down testosterone production. Aromatase converts whatever T you've got left into estrogen. You go to bed with 220 ng/dL of total testosterone and estradiol levels that look like your wife's.",
              },
              {
                num: '2',
                title: 'The Neurocognitive Axis',
                body: 'Years of elevated cortisol grind down your hippocampus — your memory center. Low T tanks your motivation, drive, and mental sharpness. You wake up feeling like you aged 10 years overnight.',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div
                  className="p-6 rounded-2xl border flex flex-col gap-4"
                  style={{ borderColor: GOLD + '40', background: '#151515' }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm font-sans"
                      style={{ background: GOLD, color: '#000' }}
                    >
                      {item.num}
                    </div>
                    <h3
                      className="text-white font-sans font-black text-sm uppercase tracking-wide"
                      style={{ color: GOLD }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-2xl p-6 border border-[#1f1f1f] bg-[#111] mb-8">
              <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed">
                TRT hits one axis. With a needle. A generic T-booster hits
                another. With a promise. A nootropic hits a third. With caffeine
                in disguise.
              </p>
              <p className="text-white font-sans font-black text-sm md:text-base mt-3">
                None of them hit both at the same time.
              </p>
              <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed mt-4">
                The Ultimate Stack was built to attack both axes in parallel. No
                needles. No prescriptions. No changes to your routine — other
                than swallowing two capsules in the morning with water.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────── */}
      <section
        className="py-20 px-4 md:px-6 border-t border-[#1a1a1a]"
        id="offer"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-white font-serif font-extrabold leading-tight uppercase"
                style={{ fontSize: 'clamp(20px, 3.5vw, 40px)' }}
              >
                Make Your Balls Great Again
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-center mb-10">
            {/* JUST THE TIP */}
            <div className="order-3">
              <FadeIn delay={160}>
                <PricingCard tier={pricingTiers[0]} isFeatured={false} />
              </FadeIn>
            </div>
            {/* GOING DEEP */}
            <div className="order-2 md:order-1">
              <FadeIn delay={80}>
                <PricingCard tier={pricingTiers[1]} isFeatured={false} />
              </FadeIn>
            </div>
            {/* BALLS TO THE WALL — featured, elevated on desktop */}
            <div className="order-1 md:order-2 md:-my-8">
              <FadeIn delay={0}>
                <PricingCard tier={pricingTiers[2]} isFeatured={true} />
              </FadeIn>
            </div>
          </div>

          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {[
                'Free Shipping (US)',
                'Cancel Anytime',
                'Made in USA · cGMP Certified',
                'Non-GMO · Vegan',
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#111] border border-[#1f1f1f]"
                >
                  <svg viewBox="0 0 14 14" width="14" height="14" fill="none">
                    <circle
                      cx="7"
                      cy="7"
                      r="6.5"
                      stroke={GOLD}
                      strokeWidth="1"
                    />
                    <polyline
                      points="4,7 6,9.5 10,4.5"
                      stroke={GOLD}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white/60 font-sans text-[10px] font-semibold uppercase tracking-wide">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section
        className="py-20 px-6 bg-[#0a0a0a] border-t border-[#1a1a1a]"
        id="reviews"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span style={{ color: GOLD, fontSize: 16, letterSpacing: 3 }}>
                  ★★★★★
                </span>
                <span className="text-white/40 font-sans text-xs font-bold tracking-[3px] uppercase">
                  50,000+ Men Optimized
                </span>
              </div>
              <h2
                className="text-white font-serif font-bold leading-tight"
                style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}
              >
                Real Men. Real Results.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex flex-col gap-4 p-6 rounded-2xl border border-[#1f1f1f] bg-[#111] h-full">
                  <Stars />
                  <p className="text-white/75 font-sans text-sm leading-relaxed flex-1">
                    {r.quote}
                  </p>
                  <div className="pt-4 border-t border-[#1f1f1f]">
                    <p className="text-white font-sans font-black text-xs">
                      {r.name}
                    </p>
                    <p className="text-white/35 font-sans text-[10px] uppercase tracking-wider mt-0.5">
                      {r.location} · Verified Buyer
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ─────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div
              className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 rounded-2xl"
              style={{
                border: `1.5px solid ${GOLD}`,
                boxShadow: `0 0 40px rgba(220,163,49,0.3), inset 0 0 40px rgba(220,163,49,0.05)`,
              }}
            >
              <div className="shrink-0">
                <img
                  src={badge365}
                  alt="365-Day Money-Back Guarantee"
                  className="w-24 h-24 md:w-36 md:h-36 object-contain"
                />
              </div>
              <div className="text-center md:text-left flex flex-col gap-3">
                <h3
                  className="font-sans font-black text-xl md:text-4xl"
                  style={{ color: GOLD }}
                >
                  The Transformation Guarantee
                </h3>
                <p className="text-white font-sans font-black text-base md:text-xl">
                  365 Days. Zero Risk.
                </p>
                <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
                  Take it for a full 365 days. If you don't feel a real
                  difference in your energy, your focus, your drive, your body,
                  your libido —{' '}
                  <strong className="text-white">we refund every penny.</strong>
                </p>
                <p className="text-white/55 font-sans text-sm leading-relaxed">
                  No phone call. No retention script. No questions. You can take
                  the entire supply and still get your money back. Because
                  either this works for you, or we don't deserve your money.
                  Simple as that.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 bg-[#0e0e0e] border-t border-[#1a1a1a]"
        id="faq"
      >
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p
                className="font-sans font-black text-xs tracking-[4px] uppercase mb-3"
                style={{ color: GOLD }}
              >
                FAQ
              </p>
              <h2
                className="text-white font-serif font-bold leading-tight"
                style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}
              >
                Questions You're Probably Asking
              </h2>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 40}>
                <FAQItem
                  q={faq.q}
                  a={faq.a}
                  open={faqOpen === i}
                  onToggle={() => setFaqOpen(faqOpen === i ? null : i)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM LINE CTA ───────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p
              className="font-sans font-black text-xs tracking-[4px] uppercase mb-6 text-center"
              style={{ color: GOLD }}
            >
              Bottom Line
            </p>
            <div className="flex flex-col gap-5 mb-10 text-center">
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
                You landed on the Testosterone Mushroom Coffee page because you
                know something's off. Your energy, your body, your sex drive,
                your head.
              </p>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
                You left the page because the coffee format doesn't work for
                you.
              </p>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
                Fair enough.
              </p>
              <p className="text-white font-sans font-black text-base md:text-lg leading-relaxed">
                Here's the capsule version. Same mechanism. Same engineering. No
                coffee. No caffeine. Clinical doses.
              </p>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
                Aromatase doesn't take a day off. Cortisol doesn't take a day
                off. Every day that goes by, more of your testosterone gets
                converted into estrogen.
              </p>
              <p
                className="text-white font-sans font-black text-lg md:text-xl"
                style={{ color: GOLD }}
              >
                You can hit this now. Or you can hit it in 2 years, with the
                problem 2 years worse.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <CtaButton label="Get 34% Off — Start Your Transformation" />
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6">
              {[
                'Third-Party Tested',
                'Made in USA',
                '365-Day Money-Back',
                '50,000+ Men Optimized',
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg viewBox="0 0 14 14" width="13" height="13" fill="none">
                    <circle
                      cx="7"
                      cy="7"
                      r="6.5"
                      stroke={GOLD}
                      strokeWidth="1"
                    />
                    <polyline
                      points="4,7 6,9.5 10,4.5"
                      stroke={GOLD}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white/50 font-sans text-[11px] font-semibold uppercase tracking-wider">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-white/25 font-sans text-[10px] text-center mt-10 leading-relaxed">
              *These statements have not been evaluated by the FDA. This product
              is not intended to diagnose, treat, cure, or prevent any disease.
              Individual results may vary.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
