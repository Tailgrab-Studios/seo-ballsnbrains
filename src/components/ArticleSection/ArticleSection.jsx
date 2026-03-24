import { useState, useEffect, useRef } from 'react';
import image01 from '../../assets/images/PV-01.webp';
import image02 from '../../assets/images/PV-02.webp';
import image03 from '../../assets/images/PV-03.webp';
import image04 from '../../assets/images/PV-04.webp';
import image05 from '../../assets/images/PV-05.webp';
import image06 from '../../assets/images/PV-06.webp';
import image07 from '../../assets/images/PV-07.webp';
import image08 from '../../assets/images/PV-08.webp';
import image09 from '../../assets/images/PV-09.webp';
import image10 from '../../assets/images/PV-10.webp';
import product from '../../assets/products/1kit-with-bg.webp';
import doctor from '../../assets/testimonials/man1.webp';

// ── Comparison table data ──────────────────────────────────────────────────
const compRows = [
  { label: 'Jitter-free', bnb: true, ryze: true, trad: false },
  { label: 'Reduces cortisol', bnb: true, ryze: false, trad: false },
  { label: 'Increases T-levels', bnb: true, ryze: false, trad: false },
  { label: 'Improves libido', bnb: true, ryze: false, trad: false },
  { label: 'Improves muscle gain', bnb: true, ryze: false, trad: false },
  { label: 'Provides more energy', bnb: true, ryze: true, trad: false },
  { label: 'Sustained focus & clarity', bnb: true, ryze: true, trad: false },
];

// ── 10 reasons data ────────────────────────────────────────────────────────
const reasons = [
  {
    num: '01',
    title: 'Ryze Isn\'t Very Effective at Preventing the "Afternoon Crash"',
    body: [
      "Ryze contains about 48mg of caffeine per serving — half of a regular cup of coffee. Many men report they simply don't feel enough energy and end up drinking regular coffee alongside it, defeating the entire purpose.",
      "Balls N'Brains contains 100mg of caffeine — double what Ryze offers, but still half of traditional coffee. The difference is that those 100mg are paired with 100mg of L-Theanine, which smooths the caffeine peak, extends the energy curve, and eliminates crash and jitters.",
      'The result? You actually feel your body being energized by the caffeine. Without that afternoon collapse that makes you want to crawl under your desk.',
    ],
    visual: 'image1',
  },
  {
    num: '02',
    title: 'Ryze Has an "Earthy" Taste That\'s Nothing Like Coffee',
    body: [
      'One of the biggest barriers I see with my patients is the fear of taste. And for good reason. Ryze has a flavor that many people describe as "earthy," "different," and even "unpleasant." Some Reddit reviews are pretty blunt: "it tastes and smells like vomit."',
      "Balls N'Brains was formulated to taste like coffee — not like mushrooms, not like dirt, not like a supplement. Most users report that the taste is virtually indistinguishable from conventional coffee.",
    ],
    visual: 'image2',
  },
  {
    num: '03',
    title: 'Ryze Contains Two Mushrooms That Can Lower Your Testosterone',
    body: [
      "Ryze contains Shiitake and King Trumpet. Shiitake can elevate prolactin — the hormone that directly suppresses testosterone production in the hypothalamus. It's useful for breastfeeding women. For men? High prolactin means less T, less drive, less energy.",
      'King Trumpet contains phytosterols that reduce HDL cholesterol. Your body uses exactly this "good" cholesterol as raw material to produce testosterone. Less good cholesterol = less raw material = less T.',
      'If you started taking mushroom coffee and noticed your libido dropping, more difficulty gaining muscle at the gym, or unexplained fatigue — now you know why.',
      "Balls N'Brains contains neither Shiitake nor King Trumpet. Every mushroom in the formula was specifically chosen for not interfering with the male hormonal axis.",
    ],
    visual: 'image3',
  },
  {
    num: '04',
    title: 'Ryze Converts Your Testosterone Into Estrogen',
    body: [
      'Turkey Tail is present in most mushroom coffees, including Ryze. The problem: Turkey Tail stimulates aromatase — an enzyme that takes the testosterone in your blood and converts it into estradiol, a form of estrogen.',
      "Estrogen is the female hormone. Every time you drink a mushroom coffee containing Turkey Tail, you're helping your body transform its primary male hormone into a female hormone. The result: less testosterone, more fat retention, less muscle mass, and lower libido.",
      "Balls N'Brains does not contain Turkey Tail. A deliberate formulation decision. Because if a coffee is made for men, it shouldn't contain an ingredient that converts your testosterone into estrogen.",
    ],
    visual: 'image4',
  },
  {
    num: '05',
    title:
      'Ryze (and Other Mushroom Coffees) Were Made for Women — Not for Men',
    body: [
      'Ryze, Four Sigmatic, Everyday Dose, MUD\\WTR — all of them were formulated for "wellness." Energy, focus, immunity. No gender specificity. No hormonal targeting. Not a single one contains an ingredient that addresses testosterone or modulates cortisol specifically for the male body.',
      "Balls N'Brains was built around the male hormonal axis:",
    ],
    bullets: [
      'Tongkat Ali LJ100 (300mg) and Fadogia Agrestis (600mg) for testosterone support.',
      'Ashwagandha KSM-66 (300mg) for cortisol reduction.',
      'Shilajit (250mg), Zinc (15mg), and Vitamin D3 (2,000 IU) as hormonal co-factors.',
    ],
    bodyAfter: [
      "All on top of 4 functional mushrooms at clinical doses and caffeine modulated by L-Theanine. It's not a coffee with extras. It's a male performance system delivered in the form of coffee.",
    ],
    visual: 'image5',
  },
  {
    num: '06',
    title: 'Ryze Is Extremely Hard to Cancel (and Was Investigated by the NAD)',
    body: [
      'Search "Ryze subscription" on Reddit. You\'ll find reports from people who were automatically charged without clear authorization, who tried to cancel and were told by the company that "there\'s nothing we can do to stop this month\'s shipment."',
      "Ryze was investigated by the NAD (National Advertising Division) in September 2025 and voluntarily withdrew its health claims. I don't recommend any product from a company with that track record to my patients.",
      "Balls N'Brains works the opposite way. Cancel anytime. One click. No calling anyone. No retention process. And if at any point within 365 days you decide it wasn't worth it, they refund every penny. No questions asked.",
    ],
    visual: 'image6',
  },
  {
    num: '07',
    title: "Ryze Hides What You're Actually Taking",
    body: [
      "Ryze lists the ingredients on the label but doesn't reveal the individual dose of each one. This is called a \"proprietary blend.\" You know there's lion's mane in there. But you don't know if it's 500mg or 50mg. The same goes for every other ingredient.",
      "Balls N'Brains has a 100% transparent label. Every ingredient, every milligram, individually declared. Everything out in the open. No mystery.",
      "If a brand hides the doses, they have a reason. If a brand shows everything, it's because they trust what they put inside.",
    ],
    visual: 'image7',
  },
  {
    num: '08',
    title: 'Ryze May Be "Rice Powder" Disguised as Mushroom Coffee',
    body: [
      'Ryze likely uses "mycelium on grain" — which explains why it\'s so cheap.',
      "Mycelium on grain is essentially the root of the mushroom grown on rice, then ground up together with the rice. The result is a powder that can be 50-70% grain starch. You think you're taking mushrooms. In reality, you're taking ground rice at supplement prices.",
      'The ideal approach is to cultivate mushrooms as "fruiting body" — which takes longer to grow but guarantees far greater potency of active compounds.',
      "On top of that, the cell wall of mushrooms is made of chitin. Without an extraction process that breaks this wall, the active compounds pass through your body without being absorbed. It doesn't matter what's on the label if your body can't access it.",
      "Balls N'Brains exclusively uses fruiting body with dual extraction. This process breaks the chitin and releases all of the mushrooms' compounds: beta-glucans, hericenones, erinacines, and triterpenes. Ensuring higher quality and efficacy throughout the formula.",
    ],
    visual: 'image8',
  },
  {
    num: '09',
    title: "Ryze Doesn't Have a Single Patented Raw Material",
    body: [
      'Most mushroom coffees include ingredients on the label at doses that exist to decorate marketing — not to have a real effect.',
      "Balls N'Brains contains 1,000mg of Lion's Mane and 1,000mg of Cordyceps Militaris — within the range used in clinical studies.",
      'For the male hormonal axis, it uses Ashwagandha KSM-66® (300mg) the patented raw material with over 24 human studies, standardized for 5% withanolides. And Tongkat Ali LJ100® (300mg) patented, standardized for eurypeptides, with studies demonstrating real testosterone support.',
      "Balls N'Brains also includes Fadogia Agrestis (600mg), Shilajit (250mg), Zinc Glycinate (15mg), and Vitamin D3 (2,000 IU) — each dosed within the ranges referenced in the literature.",
      'When a brand uses patented, clinically studied raw materials, it\'s saying: "We didn\'t buy the cheapest option — we bought the one with real science behind it."',
    ],
    visual: 'image9',
  },
  {
    num: '10',
    title:
      "Ryze Is More Expensive and Less Effective for Men Than Balls N'Brains",
    body: [
      "Bottom line? Ryze costs $45, wasn't made for your body, and doesn't do half of what it should.",
      "Balls N'Brains is the only mushroom coffee designed exclusively for the male body — and it saves you over $250/month you'd otherwise spend on separate supplements like ashwagandha, tongkat ali, lion's mane, cordyceps, shilajit, zinc, and vitamin D.",
      'In a single scoop that tastes just like real coffee, BNB delivers stable energy with no crash or jitters, less cortisol, and more testosterone — for just $59 a month.',
      "You can try it risk-free. If you don't like it, just ask for your money back — thanks to their incredible 365-day guarantee. You can also cancel anytime. No stress. No hoops to jump through.",
    ],
    visual: 'image10',
  },
];

// ── Visual block ───────────────────────────────────────────────────────────
const VisualBlock = ({ type }) => {
  const darkCard =
    'bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center';
  const lightCard =
    'bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center';

  const darkTypes = [
    'image1',
    'image3',
    'image4',
    'image6',
    'image7',
    'image8',
    'image9',
  ];

  const srcMap = {
    image1: image01,
    image2: image02,
    image3: image03,
    image4: image04,
    image5: image05,
    image6: image06,
    image7: image07,
    image8: image08,
    image9: image09,
    image10: image10,
  };

  const isDark = darkTypes.includes(type);
  return (
    <div
      className={`${isDark ? darkCard : lightCard} w-full aspect-square max-w-sm`}
      style={isDark ? { background: '#111' } : {}}
    >
      <img src={srcMap[type]} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

// ── Animated section wrapper ───────────────────────────────────────────────
const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ── Main page ──────────────────────────────────────────────────────────────
export default function ArticleSection() {
  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: '#fff',
        color: '#111',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* ── HEADER ── */}
        <header className="px-8 pt-6 pb-2 border-b border-gray-200 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span
              style={{
                fontFamily: 'monospace',
                fontWeight: 900,
                fontSize: 22,
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              Balls N'Brains
            </span>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#f97316',
                display: 'inline-block',
              }}
            />
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="px-8 pt-10 pb-6">
          <FadeIn>
            <p className="text-sm text-gray-500 mb-3 font-sans">
              🌿 Natural Support &nbsp;|&nbsp; ⚡ Real Results &nbsp;|&nbsp; 🛡️
              Proven Safe
            </p>
            <h1
              style={{
                fontFamily: "'Georgia', serif",
                fontWeight: 900,
                fontSize: 'clamp(28px, 4vw, 44px)',
                lineHeight: 1.1,
                letterSpacing: '-0.5px',
                color: '#111',
              }}
            >
              Top Doctor: "10 Reasons Why I Don't Recommend Ryze Mushroom Coffee
              to Any of My Patients"
            </h1>
            <div
              className="mt-5 mb-6 px-5 py-4"
              style={{ background: '#fff7ed', borderLeft: '4px solid #f97316' }}
            >
              <p
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 18,
                  color: '#333',
                  fontStyle: 'italic',
                }}
              >
                "Men over 40 shouldn't drink a single cup of this — and here's
                why…"
              </p>
            </div>

            {/* Doctor bio */}
            <div className="flex items-start gap-4 mb-2">
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <img
                  src={doctor}
                  alt="Dr. Ben Palmer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    fontFamily: 'sans-serif',
                  }}
                >
                  Dr. Ben Palmer, PhD, MS
                </p>
                <p className="text-gray-500 text-sm font-sans">
                  Medicine & Urology, University of Oxford;
                  <br />
                  Biotechnology, Columbia University.
                </p>
                <p className="text-gray-400 text-xs font-sans mt-1">
                  Last Updated: March 20, 2026
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="px-8 py-8">
          <FadeIn delay={100}>
            <div
              style={{
                border: '1.5px solid #e5e7eb',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1fr',
                  background: '#111',
                  color: '#fff',
                }}
              >
                <div className="p-3 text-xs font-bold font-sans uppercase tracking-wider text-gray-400" />
                <div className="p-3 text-xs font-bold font-sans uppercase tracking-wider text-orange-400 text-center">
                  Balls N'Brains
                </div>
                <div className="p-3 text-xs font-bold font-sans uppercase tracking-wider text-gray-400 text-center">
                  Ryze
                </div>
                <div className="p-3 text-xs font-bold font-sans uppercase tracking-wider text-gray-400 text-center">
                  Traditional Coffee
                </div>
              </div>
              {compRows.map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    background: i % 2 === 0 ? '#fff' : '#fafafa',
                    borderTop: '1px solid #e5e7eb',
                  }}
                >
                  <div className="p-3 text-sm font-sans text-gray-700">
                    {row.label}
                  </div>
                  <div className="p-3 text-center text-lg">
                    {row.bnb ? '👍' : '👎'}
                  </div>
                  <div className="p-3 text-center text-lg">
                    {row.ryze ? '👍' : '👎'}
                  </div>
                  <div className="p-3 text-center text-lg">
                    {row.trad ? '👍' : '👎'}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-gray-700 font-sans text-base">
              <strong>In short:</strong> Balls N'Brains Mushroom Coffee offers
              over 10 benefits for men that Ryze and traditional coffee simply
              can't match. 👇
            </p>
          </FadeIn>
        </section>

        <div style={{ borderTop: '1px solid #e5e7eb', margin: '0 32px' }} />

        {/* ── 10 REASONS ── */}
        {reasons.map((r, idx) => (
          <section key={r.num} className="px-8 py-12">
            <FadeIn delay={80}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* BLOCO DA IMAGEM: Fica sempre em cima no mobile (ordem natural do grid-cols-1).
            No desktop (md:), ele alterna entre a coluna da direita ou da esquerda. */}
                <div
                  className={`flex justify-center ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                >
                  <VisualBlock type={r.visual} />
                </div>

                {/* BLOCO DE TEXTO: Fica embaixo no mobile.
            No desktop, ocupa o espaço oposto ao da imagem. */}
                <div
                  className={`${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                >
                  <p className="text-orange-500 font-black text-sm tracking-widest font-sans mb-2">
                    #{r.num}
                  </p>
                  <h2
                    style={{
                      fontFamily: 'sans-serif',
                      fontWeight: 900,
                      fontSize: 'clamp(18px,2.2vw,26px)',
                      lineHeight: 1.15,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.3px',
                      color: '#111',
                      marginBottom: 16,
                    }}
                  >
                    {r.title}
                  </h2>
                  {r.body.map((p, i) => (
                    <p
                      key={i}
                      className="text-gray-700 font-sans text-base leading-relaxed mb-3"
                    >
                      {p}
                    </p>
                  ))}
                  {r.bullets && (
                    <ul className="mb-3 ml-4 list-disc">
                      {r.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="text-gray-700 font-sans text-base leading-relaxed mb-1"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {r.bodyAfter &&
                    r.bodyAfter.map((p, i) => (
                      <p
                        key={i}
                        className="text-gray-700 font-sans text-base leading-relaxed mb-3"
                      >
                        {p}
                      </p>
                    ))}
                </div>
              </div>
            </FadeIn>
            {idx < reasons.length - 1 && (
              <div className="border-t border-gray-200 mt-12" />
            )}
          </section>
        ))}
      </div>

      {/* ── CTA SECTION ── */}
      <section
        style={{
          background: '#fff7ed',
          borderTop: '2px solid #f97316',
          width: '100%',
        }}
        className="py-12"
      >
        <FadeIn>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'var(--cols, 1fr 1fr)',
                gap: 'var(--gap, 48px)',
                alignItems: 'center',
              }}
              className="offer-grid"
            >
              {/* Product image */}
              <div
                style={{
                  borderRadius: 16,
                  padding: 'var(--img-pad, 32px)',
                  textAlign: 'center',
                }}
              >
                <img
                  src={product}
                  alt="Balls N'Brains"
                  className="w-full h-auto object-contain"
                  style={{ maxWidth: 280, margin: '0 auto', display: 'block' }}
                />
              </div>

              {/* Offer */}
              <div>
                <p
                  className="text-orange-500 font-black leading-tight"
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: 'clamp(24px, 5vw, 36px)',
                  }}
                >
                  LIMITED TIME ONLY 👇
                </p>
                <h2
                  style={{
                    fontFamily: 'sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(26px, 5vw, 36px)',
                    color: '#111',
                    lineHeight: 1.1,
                    marginTop: 8,
                  }}
                >
                  Try Today, Get 44% Off
                  <br />
                  For Life!
                </h2>

                {/* Doctor quote */}
                <div
                  style={{
                    background: '#1a1a1a',
                    borderRadius: 12,
                    padding: 20,
                    marginTop: 20,
                  }}
                >
                  <p className="text-white text-sm font-sans italic leading-relaxed">
                    "Personally, I think it's worth a try. It's organic,
                    natural, has no side effects, and you'll likely notice
                    changes within the first few days."
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={doctor}
                        alt="Dr. Ben Palmer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm font-sans">
                        Dr. Ben Palmer
                      </p>
                      <p className="text-orange-400 text-xs font-sans tracking-wider">
                        MEDICINE & UROLOGY, OXFORD
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}

                <a
                  href="https://lp.ballsnbrains.com/preclick"
                  style={{
                    width: '100%',
                    marginTop: 24,
                    padding: '18px 0',
                    background: '#f97316',
                    color: '#fff',
                    fontFamily: 'sans-serif',
                    fontWeight: 900,
                    fontSize: 18,
                    letterSpacing: 1.5,
                    border: 'none',
                    borderRadius: 10,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    display: 'block',
                    textAlign: 'center',
                    boxShadow: '0 8px 20px rgba(249, 115, 22, 0.35)',
                  }}
                >
                  TRY IT NOW ➤
                </a>

                <div className="flex items-center gap-3 mt-4">
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      border: '2px solid #f97316',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    🚀
                  </div>
                  <p className="text-gray-700 font-sans text-sm font-semibold">
                    Try it today with a 365-day trial period.
                    <br />
                    <span className="text-gray-500 font-normal">
                      Money-back guarantee.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Inline responsive styles */}
        <style>{`
    .offer-grid {
      --cols: 1fr 1fr;
      --gap: 48px;
      --img-pad: 32px;
    }
    @media (max-width: 640px) {
      .offer-grid {
        --cols: 1fr;
        --gap: 24px;
        --img-pad: 8px 8px 0;
      }
    }
  `}</style>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: '#111',
          color: '#fff',
          width: '100%',
          padding: '48px 0',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span
              style={{
                fontFamily: 'monospace',
                fontWeight: 900,
                fontSize: 18,
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              Balls N'Brains
            </span>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#f97316',
                display: 'inline-block',
              }}
            />
          </div>
          <p className="text-gray-500 text-sm font-sans mb-1">
            Terms of Service | Privacy Policy
          </p>
          <p className="text-gray-600 text-sm font-sans mb-6">
            BNB Health Inc. 2026
          </p>
          <p className="text-gray-600 text-xs font-sans max-w-xl mx-auto leading-relaxed">
            *Statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
      </footer>
    </div>
  );
}
