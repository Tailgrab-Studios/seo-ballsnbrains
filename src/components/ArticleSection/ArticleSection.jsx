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
import kit1 from '../../assets/products/1kit.webp';
import kit2 from '../../assets/products/2kits.webp';
import kit3 from '../../assets/products/3kits.webp';
import badge365 from '../../assets/utils/badge-365days.webp';
import wallpaper from '../../assets/utils/black-wallpaper.webp';

const GOLD = '#dca331';
const PINK = '#e91e8c';

const getCheckoutLinks = () => {
  const get = (name, fallback) => document.querySelector(`meta[name="${name}"]`)?.content || fallback;
  return {
    checkout1OneTime: get('checkout-link-1-onetime', 'https://track.ballsnbrains.com/click/1'),
    checkout2OneTime: get('checkout-link-2-onetime', 'https://track.ballsnbrains.com/click/2'),
    checkout3OneTime: get('checkout-link-3-onetime', 'https://track.ballsnbrains.com/click/3'),
    checkout1Subscribe: get('checkout-link-1-subscribe', 'https://track.ballsnbrains.com/click/4'),
    checkout2Subscribe: get('checkout-link-2-subscribe', 'https://track.ballsnbrains.com/click/5'),
    checkout3Subscribe: get('checkout-link-3-subscribe', 'https://track.ballsnbrains.com/click/6'),
  };
};
const checkoutLinks = getCheckoutLinks();

const ballFuelIngredients = [
  { name: 'Vitamin D3 + B3 + Zinc', desc: 'Building blocks for testosterone manufacturing. Most men 40+ are deficient without knowing it.', img: vitaminD },
  { name: 'Ashwagandha KSM-66®', desc: 'Clinically shown to drop cortisol by up to 27.9% in 60 days. Cortisol down, T comes up naturally.', img: ashwagandha },
  { name: 'Tongkat Ali', desc: 'Signals your Leydig cells directly to ramp up natural testosterone. Turns your own system back on.', img: tongkat },
  { name: 'Mucuna Pruriens', desc: 'Dopamine precursor. Restores motivation, drive, and desire you\'ve lost over the last few years.', img: shilajit },
  { name: 'Horny Goat Weed + Tribulus + Korean Ginseng', desc: 'Blood flow, sexual vitality, performance.', img: null },
  { name: 'Muira Puama + Ginkgo + Boron Citrate', desc: 'Circulation, sexual cognitive function, and a bump in free testosterone — the only kind that matters.', img: null },
  { name: 'DHEA', desc: 'Hormonal precursor that reboots the entire testosterone axis from the root.', img: null },
];

const brainPumpIngredients = [
  { name: 'Cordyceps Sinensis', desc: 'Boosts cellular ATP production. Clean, sustained energy. No crash. No caffeine required.', img: cordyceps },
  { name: "Lion's Mane", desc: 'Stimulates Nerve Growth Factor (NGF). Restores memory, focus, and mental clarity.', img: lionsMane },
  { name: 'Reishi + Chaga', desc: 'Adaptogens. Lower brain inflammation and oxidative stress — the two mechanisms wrecking your hippocampus after 40.', img: reishi },
  { name: 'Maitake + Sun + White Button + Wood Ear', desc: 'Immune, metabolic, circulatory, and neurological support. Traditional Chinese medicine for 2,000 years.', img: chaga },
];

const pricingTiers = [
  {
    bottles: 4, name: 'GOING DEEP', days: '120', supply: '4 Months',
    perBottle: '$22', perBottleOneTime: '$32', total: '$88', totalOneTime: '$128', originalTotal: '$128',
    savePercent: 31, label: 'POPULAR', recommended: false, img: kit2,
    autoDelivery: 'Every 60 Days', freeShipping: true,
    checkoutUrl: checkoutLinks.checkout2OneTime,
    subscriptionCheckoutUrl: checkoutLinks.checkout2Subscribe,
  },
  {
    bottles: 6, name: 'BALLS TO THE WALL', days: '180', supply: '6 Months',
    perBottle: '$19.50', perBottleOneTime: '$29.50', total: '$117', totalOneTime: '$177', originalTotal: '$177',
    savePercent: 34, label: 'BEST VALUE', recommended: true, img: kit3,
    autoDelivery: 'Every 90 Days', freeShipping: true,
    checkoutUrl: checkoutLinks.checkout3OneTime,
    subscriptionCheckoutUrl: checkoutLinks.checkout3Subscribe,
  },
  {
    bottles: 2, name: 'JUST THE TIP', days: '60', supply: '2 Months',
    perBottle: '$24.50', perBottleOneTime: '$34.50', total: '$49', totalOneTime: '$69', originalTotal: '$69',
    savePercent: 29, label: 'STARTER', recommended: false, img: kit1,
    autoDelivery: 'Every 30 Days', freeShipping: false,
    checkoutUrl: checkoutLinks.checkout1OneTime,
    subscriptionCheckoutUrl: checkoutLinks.checkout1Subscribe,
  },
];

const reviews = [
  {
    stars: 5,
    quote: '"I was skeptical of \'natural testosterone boosters\' after wasting money on garbage. But the two-formula approach made sense — address cortisol AND testosterone. Blood work doesn\'t lie: 425 to 695 in 3 weeks."',
    name: 'Jason L., 37',
    location: 'Chicago, IL',
  },
  {
    stars: 5,
    quote: '"The 2pm crash was destroying my productivity. I\'d be useless by afternoon, crushing caffeine just to function. Now? Sustained energy from 6am to 8pm. No crashes. No jitters. And I\'m down 15 pounds without changing my diet."',
    name: 'Kevin P., 41',
    location: 'Phoenix, AZ',
  },
  {
    stars: 5,
    quote: '"Stress was killing me. Running a business, three kids, zero energy. I\'d snap at everyone. After 6 weeks, I\'m calmer, more focused, and my wife says I\'m \'present again\'."',
    name: 'Derek M., 48',
    location: 'Nashville, TN',
  },
];

const faqs = [
  {
    q: 'Why two capsules and not just one?',
    a: 'The two axes — hormonal and cognitive — require different compounds at different concentrations. Cramming everything into a single capsule would mean cutting the clinical dose of every ingredient by more than half. We\'d rather do it right.',
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
    q: 'Can I take this if I\'m already on TRT?',
    a: 'You can. The Ultimate Stack doesn\'t compete with TRT — it complements it. Specifically, Ultimate Ball Fuel helps control the T-to-estrogen conversion that\'s the #1 issue for guys on TRT. But talk to your doctor before making any changes to your protocol.',
  },
  {
    q: 'Is there caffeine in the capsules?',
    a: 'Zero. Not a single milligram in either formula. The energy comes from the adaptogenic mushrooms (Cordyceps in particular) and the hormonal optimization itself. Clean energy. No crash. No anxiety. No messing with your sleep.',
  },
  {
    q: 'Does it work if I\'m over 60?',
    a: 'Yes. Honestly, the older you are, the more aromatase you produce — and the more dramatic the shift usually is. Our oldest active customer is 71 and he\'s on month 14.',
  },
  {
    q: 'What if it doesn\'t work for me?',
    a: 'You send it back. You\'ve got 365 days to test it. If you don\'t feel a difference, just email us and ask for a refund. We send your money back, no friction. That\'s the deal.',
  },
];

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: GOLD, fontSize: 14 }}>★</span>
    ))}
  </div>
);

const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  );
};

const CtaButton = ({ label = 'GET STARTED — RECLAIM YOUR TESTOSTERONE', className = '', href = checkoutLinks.checkout3Subscribe }) => (
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
        <img src={img} alt={name} loading="lazy" className="w-full h-full object-contain" />
      </div>
    ) : (
      <div className="w-28 h-28 shrink-0 flex items-center justify-center bg-[#1a1a1a]">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke={GOLD} strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l2 2" strokeLinecap="round" />
        </svg>
      </div>
    )}
    <div className="flex-1 px-4 py-3 flex flex-col gap-1.5 min-w-0">
      <p className="text-white font-sans font-black text-xs uppercase tracking-wide leading-snug">{name}</p>
      <p className="text-white/50 font-sans text-[11px] leading-snug">{desc}</p>
    </div>
  </div>
);

const CountdownTimer = () => {
  const [secs, setSecs] = useState(10 * 60 - 1);
  useEffect(() => {
    const id = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(secs / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');
  return (
    <div className="py-2 text-center" style={{ background: '#b91c1c' }}>
      <p className="font-sans font-black text-white text-xl tracking-[5px]">00:{mm}:{ss}</p>
      <p className="text-white/80 font-sans text-[9px] font-semibold uppercase tracking-[1.5px]">Only 7 Bundles Left At This Price</p>
    </div>
  );
};

const FAQItem = ({ q, a, open, onToggle }) => (
  <div className="border border-[#1f1f1f] rounded-2xl overflow-hidden" style={{ background: open ? '#161616' : '#111' }}>
    <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
      <span className="text-white font-sans font-black text-sm md:text-base leading-snug">{q}</span>
      <span style={{ color: GOLD, fontSize: 22, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>+</span>
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
  const [subscribedTiers, setSubscribedTiers] = useState([true, true, true]);

  return (
    <div className="bg-[#070707]">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/82 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Left: Copy */}
            <FadeIn>
              <div className="flex flex-col gap-6">
                <h1 className="font-sans font-extrabold leading-[1.08]" style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}>
                  <span className="text-white block">Cortisol Is</span>
                  <span className="block" style={{ color: PINK }}>Feminizing You.</span>
                  <span className="block" style={{ color: GOLD }}>Here's How to Stop It.</span>
                </h1>

                <p className="text-white/75 font-sans text-base md:text-lg leading-relaxed">
                  <strong className="text-white">34% OFF</strong> the only testosterone-optimizing dual-formula
                  system scientifically designed to stop the Stress-Cortisol Death Spiral, raise your T by{' '}
                  <strong style={{ color: PINK }}>15–46%</strong>, and give you all-day energy—without needles,
                  prescriptions, or pharmaceutical side effects.
                </p>

                <a
                  href={checkoutLinks.checkout3Subscribe}
                  className="inline-block text-center font-sans font-black text-sm md:text-base uppercase tracking-widest py-5 px-6 rounded-full no-underline transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: GOLD, color: '#000', boxShadow: `0 0 40px rgba(220,163,49,0.4)` }}
                >
                  Get 34% Off — Reclaim Your Testosterone
                </a>

                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#22c55e' }} />
                  <span className="text-white/55 font-sans text-sm">High Demand | Ships in 24h</span>
                </div>
              </div>
            </FadeIn>

            {/* Right: Product images + badge */}
            <FadeIn delay={150}>
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl overflow-hidden border border-[#1f1f1f]">
                      <img src={advImg05} alt="Ultimate Ball Fuel" className="w-full h-full object-cover" loading="eager" />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#1f1f1f]">
                      <img src={advImg06} alt="Ultimate Brain Pump" className="w-full h-full object-cover" loading="eager" />
                    </div>
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
                    <span className="text-white font-sans font-black text-[8px] uppercase tracking-tight leading-tight">FLASH SALE</span>
                    <span className="text-white font-sans font-black leading-tight" style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}>34%</span>
                    <span className="text-white font-sans font-black text-[9px] uppercase tracking-tight">OFF</span>
                  </div>
                </div>

                {/* Reviews bar */}
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a]/90">
                  <span style={{ color: GOLD, fontSize: 15, letterSpacing: 2 }}>★★★★★</span>
                  <span className="text-white font-sans font-black text-xs md:text-sm tracking-[2px] uppercase">+2,847 Reviews</span>
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
              Some guys land on our Testosterone Mushroom Coffee page, read the whole thing, it clicks, and they buy. They're recurring customers by month three.
            </p>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mb-10">
              And some guys read the whole thing, it clicks just as hard, but they freeze before hitting "Add to Cart." Usually it's one of three reasons:
            </p>
          </FadeIn>

          <div className="flex flex-col gap-4 mb-10">
            {[
              { num: '01', title: "You don't drink coffee.", body: "Never have. And you're not starting at 47 just to fix your testosterone." },
              { num: '02', title: 'You drink too much of it.', body: 'At this point caffeine makes you jittery, wrecks your sleep, and spikes your anxiety. The last thing you need is another cup.' },
              { num: '03', title: 'You saw "mushroom coffee" and filed it under "trendy wellness stuff."', body: "Not your style. You want a man's supplement, not a photogenic drink." },
            ].map((r, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex items-start gap-5 p-6 rounded-2xl border border-[#1f1f1f] bg-[#111]">
                  <span className="font-sans font-black text-2xl shrink-0" style={{ color: GOLD }}>{r.num}</span>
                  <div>
                    <p className="text-white font-sans font-black text-sm md:text-base mb-1">{r.title}</p>
                    <p className="text-white/55 font-sans text-sm leading-relaxed">{r.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mb-4">All fair. All legit.</p>
            <p className="text-white font-sans font-black text-base md:text-lg leading-relaxed mb-6">But the problem doesn't go away, does it?</p>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
              Cortisol jacked up 24/7. Testosterone dropping every year. Aromatase quietly converting what little T you have left into estrogen. Energy that tanks at 2 PM. Brain fog that won't lift. A sex drive that stopped showing up without warning.
            </p>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mt-4">
              You know it's happening. Otherwise you wouldn't have landed on our page in the first place.
            </p>
            <p className="text-white font-sans font-black text-base md:text-xl leading-relaxed mt-6">
              That's exactly why we built the <span style={{ color: GOLD }}>Ultimate Stack</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── PRODUCT OVERVIEW ──────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="font-sans font-black text-xs tracking-[4px] uppercase mb-4" style={{ color: GOLD }}>The Ultimate Stack</p>
              <h2 className="text-white font-serif font-bold leading-tight" style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}>
                Two Bottles. Same Mission. Zero Coffee.
              </h2>
              <p className="text-white/55 font-sans text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                Two supplements. Working together. Hitting the two systems that fall apart in a man after 40: the hormonal axis and the cognitive axis.
              </p>
              <p className="text-white/55 font-sans text-base mt-3 max-w-2xl mx-auto leading-relaxed">
                This isn't some generic "men's health" stack you grab at GNC. It's the same engineering behind our Testosterone Mushroom Coffee — reformulated into capsules, with the same compounds at clinical doses.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'ULTIMATE BALL FUEL', sub: 'Testosterone Support', color: '#c47a1e', img: advImg05 },
              { label: 'ULTIMATE MIND PUMP', sub: 'Mushroom Complex', color: '#1a5c4a', img: advImg06 },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#111]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.label} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5">
                      <p className="text-white font-sans font-black text-xs uppercase tracking-[3px] mb-1">{p.label}</p>
                      <p className="font-sans text-sm font-bold" style={{ color: GOLD }}>{p.sub}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BALL FUEL INGREDIENTS ─────────────────────────────── */}
      <section className="py-16 px-6 bg-[#0a0a0a] border-t border-[#1a1a1a]" id="ingredients">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <p className="font-sans font-black text-xs tracking-[4px] uppercase mb-3" style={{ color: GOLD }}>Formula 01</p>
              <h2 className="text-white font-serif font-bold leading-tight mb-3" style={{ fontSize: 'clamp(20px, 3vw, 36px)' }}>
                Ultimate Ball Fuel — Hormonal Support
              </h2>
              <p className="text-white/55 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                The formula that hits the <strong className="text-white">Balls</strong> side. Lowers cortisol. Stimulates natural testosterone production. Blocks T-to-estrogen conversion via aromatase. Restores libido, energy, and drive.
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
              All at clinical doses. No proprietary blend hiding ridiculous low doses behind a label. No fillers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── BRAIN PUMP INGREDIENTS ────────────────────────────── */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <p className="font-sans font-black text-xs tracking-[4px] uppercase mb-3" style={{ color: GOLD }}>Formula 02</p>
              <h2 className="text-white font-serif font-bold leading-tight mb-3" style={{ fontSize: 'clamp(20px, 3vw, 36px)' }}>
                Ultimate Brain Pump — Cognitive Support
              </h2>
              <p className="text-white/55 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                The formula that hits the <strong className="text-white">Brains</strong> side. Clean energy without caffeine. Cuts through brain fog. Brings back the focus and mental clarity you haven't felt since you were 30. Reduces the chronic inflammation cortisol's been quietly using to age your brain.
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
              The same medicinal mushrooms used in traditional Chinese medicine for over 2,000 years. At standardized doses. No fluff. No coffee maker required.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── THE STRESS-CORTISOL DEATH SPIRAL ──────────────────── */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]" style={{ background: '#0e0e0e' }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-sans font-black text-xs tracking-[4px] uppercase mb-4 text-center" style={{ color: GOLD }}>
              The Science
            </p>
            <h2 className="text-white font-serif font-bold text-center leading-tight mb-12" style={{ fontSize: 'clamp(22px, 3.5vw, 42px)' }}>
              Why Two Bottles Instead of One?
            </h2>
          </FadeIn>

          <FadeIn delay={80}>
            <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed mb-8">
              Because a 40+ man who's exhausted, carrying belly fat, has zero libido, and is stuck in brain fog <strong className="text-white">doesn't have one problem. He's got two broken systems running at the same time:</strong>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                num: '1',
                title: 'The Hormonal Axis',
                body: 'Chronic cortisol shuts down testosterone production. Aromatase converts whatever T you\'ve got left into estrogen. You go to bed with 220 ng/dL of total testosterone and estradiol levels that look like your wife\'s.',
              },
              {
                num: '2',
                title: 'The Neurocognitive Axis',
                body: 'Years of elevated cortisol grind down your hippocampus — your memory center. Low T tanks your motivation, drive, and mental sharpness. You wake up feeling like you aged 10 years overnight.',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl border flex flex-col gap-4" style={{ borderColor: GOLD + '40', background: '#151515' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm font-sans" style={{ background: GOLD, color: '#000' }}>
                      {item.num}
                    </div>
                    <h3 className="text-white font-sans font-black text-sm uppercase tracking-wide" style={{ color: GOLD }}>{item.title}</h3>
                  </div>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-2xl p-6 border border-[#1f1f1f] bg-[#111] mb-8">
              <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed">
                TRT hits one axis. With a needle. A generic T-booster hits another. With a promise. A nootropic hits a third. With caffeine in disguise.
              </p>
              <p className="text-white font-sans font-black text-sm md:text-base mt-3">None of them hit both at the same time.</p>
              <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed mt-4">
                The Ultimate Stack was built to attack both axes in parallel. No needles. No prescriptions. No changes to your routine — other than swallowing two capsules in the morning with water.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-6 border-t border-[#1a1a1a]" id="offer">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-white font-serif font-extrabold leading-tight uppercase" style={{ fontSize: 'clamp(20px, 3.5vw, 40px)' }}>
                Make Your Balls Great Again 
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-end mb-10">
            {pricingTiers.map((tier, i) => {
              const isSubscribed = subscribedTiers[i];
              const displayPrice = isSubscribed ? tier.perBottle : tier.perBottleOneTime;
              const displayTotal = isSubscribed ? tier.total : tier.totalOneTime;

              return (
                <FadeIn key={i} delay={i * 80}>
                  <div
                    className={`flex flex-col rounded-2xl overflow-hidden${tier.recommended ? ' md:-mt-6' : ''}`}
                    style={{
                      border: tier.recommended ? `2px solid ${GOLD}` : '1px solid #2a2a2a',
                      background: tier.recommended ? '#130f03' : '#111',
                      boxShadow: tier.recommended ? `0 0 40px rgba(220,163,49,0.25)` : 'none',
                    }}
                  >
                    {/* Header banner */}
                    <div
                      className="py-2.5 px-4 text-center font-sans font-black text-xs tracking-[3px] uppercase"
                      style={tier.recommended
                        ? { background: GOLD, color: '#000' }
                        : { background: '#1a1a1a', color: 'rgba(255,255,255,0.5)' }}
                    >
                      {tier.recommended ? `★ ${tier.name}` : tier.name}
                    </div>

                    {tier.recommended && <CountdownTimer />}

                    <div className="p-5 flex flex-col gap-4 flex-1">
                      {/* Bottle count & supply */}
                      <div className="text-center">
                        <p
                          className="font-sans font-black text-white leading-tight"
                          style={{ fontSize: tier.recommended ? 'clamp(24px, 3vw, 34px)' : 'clamp(18px, 2.5vw, 26px)' }}
                        >
                          {tier.bottles} BOTTLES
                        </p>
                        <p className="text-white/40 font-sans text-[10px] uppercase tracking-[2px] mt-1">{tier.days} DAY SUPPLY</p>
                      </div>

                      {/* Product image */}
                      <div className="flex justify-center">
                        <img
                          src={tier.img}
                          alt={`${tier.bottles} bottles`}
                          className="object-contain"
                          style={{ width: tier.recommended ? 190 : 130, height: tier.recommended ? 140 : 100 }}
                          loading="lazy"
                        />
                      </div>

                      {/* Subscribe toggle */}
                      <div className="flex rounded-full overflow-hidden border border-[#2a2a2a] text-[8px] md:text-[9px] font-black uppercase tracking-wide">
                        <button
                          className="flex-1 py-2.5 text-center transition-colors"
                          style={!isSubscribed ? { background: '#2a2a2a', color: '#fff' } : { color: 'rgba(255,255,255,0.35)' }}
                          onClick={() => setSubscribedTiers(prev => prev.map((v, j) => j === i ? false : v))}
                        >
                          One-time
                        </button>
                        <button
                          className="flex-1 py-2.5 text-center transition-colors"
                          style={isSubscribed ? { background: GOLD, color: '#000' } : { color: 'rgba(255,255,255,0.35)' }}
                          onClick={() => setSubscribedTiers(prev => prev.map((v, j) => j === i ? true : v))}
                        >
                          Subscribe & Save {tier.savePercent}%
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-center">
                        <p
                          className="font-sans font-black leading-none"
                          style={{ color: GOLD, fontSize: tier.recommended ? 'clamp(32px, 4vw, 46px)' : 'clamp(26px, 3vw, 36px)' }}
                        >
                          {displayPrice}
                        </p>
                        <p className="text-white/35 font-sans text-[10px] uppercase tracking-[2px] mt-1.5">Per Bottle</p>
                      </div>

                      {/* Features */}
                      <ul className="flex flex-col gap-2.5">
                        {[
                          `Auto-Delivery ${tier.autoDelivery}`,
                          ...(tier.freeShipping ? ['Free Shipping'] : []),
                          '365-Days Money Back Guarantee',
                          'Cancel Anytime',
                        ].map((feat, fi) => (
                          <li key={fi} className="flex items-center gap-2">
                            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" className="shrink-0">
                              <circle cx="8" cy="8" r="7.5" fill={tier.recommended ? GOLD : 'transparent'} stroke={GOLD} strokeWidth="1" />
                              <polyline points="4.5,8 7,10.5 11.5,5.5" stroke={tier.recommended ? '#000' : GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-white/65 font-sans text-[11px]">{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <a
                        href={isSubscribed ? tier.subscriptionCheckoutUrl : tier.checkoutUrl}
                        className="flex items-center justify-center gap-2 w-full text-center py-4 rounded-xl font-sans font-black text-sm uppercase tracking-widest no-underline transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                        style={tier.recommended
                          ? { background: GOLD, color: '#fff', boxShadow: `0 0 20px rgba(220,163,49,0.35)` }
                          : { border: '1.5px solid #333', color: '#fff', background: '#1a1a1a' }}
                      >
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                        Order Now
                      </a>

                      {tier.recommended && (
                        <div className="flex items-center justify-center gap-1.5">
                          <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0110 0v4" />
                          </svg>
                          <span className="text-white/25 font-sans text-[9px] uppercase tracking-[1px]">Secure 256-bit SSL Encryption</span>
                        </div>
                      )}

                      {/* Total */}
                      <div className="text-center pt-3 border-t border-[#1f1f1f] mt-auto">
                        <p className="text-white/50 font-sans text-xs">
                          Total:{' '}
                          {isSubscribed && (
                            <span className="line-through text-white/25 mr-1">{tier.originalTotal}</span>
                          )}
                          <span className="text-white font-black">{displayTotal}</span>
                        </p>
                        <p
                          className="font-sans text-[10px] font-bold mt-0.5"
                          style={{ color: tier.freeShipping ? GOLD : 'rgba(255,255,255,0.3)' }}
                        >
                          {tier.freeShipping ? 'FREE SHIPPING!' : '+ SHIPPING'}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {[
                'Free Shipping (US)',
                'Cancel Anytime',
                'Made in USA · cGMP Certified',
                'Non-GMO · Vegan',
              ].map((badge, i) => (
                <div key={i} className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#111] border border-[#1f1f1f]">
                  <svg viewBox="0 0 14 14" width="14" height="14" fill="none">
                    <circle cx="7" cy="7" r="6.5" stroke={GOLD} strokeWidth="1" />
                    <polyline points="4,7 6,9.5 10,4.5" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white/60 font-sans text-[10px] font-semibold uppercase tracking-wide">{badge}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0a0a0a] border-t border-[#1a1a1a]" id="reviews">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span style={{ color: GOLD, fontSize: 16, letterSpacing: 3 }}>★★★★★</span>
                <span className="text-white/40 font-sans text-xs font-bold tracking-[3px] uppercase">50,000+ Men Optimized</span>
              </div>
              <h2 className="text-white font-serif font-bold leading-tight" style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}>
                Real Men. Real Results.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex flex-col gap-4 p-6 rounded-2xl border border-[#1f1f1f] bg-[#111] h-full">
                  <Stars />
                  <p className="text-white/75 font-sans text-sm leading-relaxed flex-1">{r.quote}</p>
                  <div className="pt-4 border-t border-[#1f1f1f]">
                    <p className="text-white font-sans font-black text-xs">{r.name}</p>
                    <p className="text-white/35 font-sans text-[10px] uppercase tracking-wider mt-0.5">{r.location} · Verified Buyer</p>
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
              style={{ border: `1.5px solid ${GOLD}`, boxShadow: `0 0 40px rgba(220,163,49,0.3), inset 0 0 40px rgba(220,163,49,0.05)` }}
            >
              <div className="shrink-0">
                <img src={badge365} alt="365-Day Money-Back Guarantee" className="w-24 h-24 md:w-36 md:h-36 object-contain" />
              </div>
              <div className="text-center md:text-left flex flex-col gap-3">
                <h3 className="font-sans font-black text-xl md:text-4xl" style={{ color: GOLD }}>
                  The Transformation Guarantee
                </h3>
                <p className="text-white font-sans font-black text-base md:text-xl">365 Days. Zero Risk.</p>
                <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
                  Take it for a full 365 days. If you don't feel a real difference in your energy, your focus, your drive, your body, your libido — <strong className="text-white">we refund every penny.</strong>
                </p>
                <p className="text-white/55 font-sans text-sm leading-relaxed">
                  No phone call. No retention script. No questions. You can take the entire supply and still get your money back. Because either this works for you, or we don't deserve your money. Simple as that.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0e0e0e] border-t border-[#1a1a1a]" id="faq">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="font-sans font-black text-xs tracking-[4px] uppercase mb-3" style={{ color: GOLD }}>FAQ</p>
              <h2 className="text-white font-serif font-bold leading-tight" style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}>
                Questions You're Probably Asking
              </h2>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 40}>
                <FAQItem q={faq.q} a={faq.a} open={faqOpen === i} onToggle={() => setFaqOpen(faqOpen === i ? null : i)} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM LINE CTA ───────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-sans font-black text-xs tracking-[4px] uppercase mb-6 text-center" style={{ color: GOLD }}>Bottom Line</p>
            <div className="flex flex-col gap-5 mb-10 text-center">
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
                You landed on the Testosterone Mushroom Coffee page because you know something's off. Your energy, your body, your sex drive, your head.
              </p>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
                You left the page because the coffee format doesn't work for you.
              </p>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
                Fair enough.
              </p>
              <p className="text-white font-sans font-black text-base md:text-lg leading-relaxed">
                Here's the capsule version. Same mechanism. Same engineering. No coffee. No caffeine. Clinical doses.
              </p>
              <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
                Aromatase doesn't take a day off. Cortisol doesn't take a day off. Every day that goes by, more of your testosterone gets converted into estrogen.
              </p>
              <p className="text-white font-sans font-black text-lg md:text-xl" style={{ color: GOLD }}>
                You can hit this now. Or you can hit it in 2 years, with the problem 2 years worse.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <CtaButton label="Get 34% Off — Start Your Transformation" />
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6">
              {['Third-Party Tested', 'Made in USA', '365-Day Money-Back', '50,000+ Men Optimized'].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg viewBox="0 0 14 14" width="13" height="13" fill="none">
                    <circle cx="7" cy="7" r="6.5" stroke={GOLD} strokeWidth="1" />
                    <polyline points="4,7 6,9.5 10,4.5" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white/50 font-sans text-[11px] font-semibold uppercase tracking-wider">{b}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-white/25 font-sans text-[10px] text-center mt-10 leading-relaxed">
              *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
