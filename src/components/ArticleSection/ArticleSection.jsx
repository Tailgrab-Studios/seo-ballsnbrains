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
    title: 'MarsMen Completely Ignores Cortisol — The #1 Testosterone Killer',
    body: [
      "Here's what most testosterone supplements won't tell you: it doesn't matter how much you boost T if cortisol is eating it alive.",
      "Cortisol (the stress hormone) directly suppresses the HPG axis, which is the system your body uses to produce testosterone. When cortisol goes up, testosterone goes down. It's basic endocrinology.",
      "MarsMen has 8 ingredients. Not a single one targets cortisol. No Ashwagandha. No adaptogen of any kind. They're trying to fill a bathtub without plugging the drain.",
      "Balls N'Brains contains Ashwagandha KSM-66® (300mg) — the most clinically studied cortisol-lowering adaptogen on earth, with over 24 human trials. It reduces cortisol by up to 27.9% in 60 days. You're not just boosting T — you're removing the thing that's been suppressing it.",
    ],
    visual: 'image1',
  },
  {
    num: '02',
    title: 'MarsMen Is Another Pill You Have to Remember to Take',
    body: [
      "Let's be real. You already have a cabinet full of supplements you bought with good intentions and forgot about by week three.",
      'MarsMen is capsules. Two a day. Another thing to remember. Another bottle on the counter. Another habit that fades the moment life gets busy.',
      "Balls N'Brains replaces something you're already doing every single morning: drinking coffee. There's no new habit to build. No extra step. You just swap your regular cup for one that actually works for your body.",
      'The best supplement in the world is the one you actually take. And nothing has a higher compliance rate than your morning coffee.',
    ],
    visual: 'image2',
  },
  {
    num: '03',
    title: "MarsMen Doesn't Use Patented, Clinically Validated Raw Materials",
    body: [
      'MarsMen lists "Tongkat Ali — 1,000mg" on the label. Sounds impressive. But which Tongkat Ali? From which supplier? Standardized for what? They don\'t say.',
      'Not all Tongkat Ali is the same. Generic, unstandardized Tongkat Ali can vary wildly in eurypeptide content — the active compounds responsible for testosterone support. You might be getting 1,000mg of plant powder with almost no active compound.',
      "Balls N'Brains uses Tongkat Ali LJ100® (300mg) — patented, standardized for eurypeptides, with clinical studies demonstrating real testosterone support. And Ashwagandha KSM-66® (300mg) — patented, standardized for 5% withanolides, with over 24 human studies.",
      "When a brand uses patented raw materials, it's saying: \"We didn't buy the cheapest option — we bought the one with real science behind it.\" When a brand doesn't specify… ask yourself why.",
    ],
    visual: 'image3',
  },
  {
    num: '04',
    title:
      'MarsMen Contains Fenugreek — A Controversial Ingredient With Real Downsides',
    body: [
      'MarsMen includes 675mg of Fenugreek. It\'s one of the cheapest "T-booster" ingredients on the market — and one of the most problematic.',
      'Fenugreek contains phytoestrogens — plant compounds that mimic estrogen in the body. Some studies have shown it can increase levels of DHT (which may accelerate hair loss) while simultaneously elevating estrogen-like activity. Not exactly what you want in a testosterone supplement.',
      'Then there are the side effects: body odor (a distinct maple syrup smell from sweat and urine), gastrointestinal discomfort, bloating, and diarrhea are commonly reported.',
      "Balls N'Brains does not contain Fenugreek. Every ingredient was specifically chosen to support the male hormonal axis without introducing estrogenic activity or unwanted side effects.",
    ],
    visual: 'image4',
  },
  {
    num: '05',
    title:
      "MarsMen Doesn't Have Fadogia Agrestis — The Missing Piece of the T Puzzle",
    body: [
      'Tongkat Ali and Fadogia Agrestis work through different mechanisms: Tongkat Ali supports the signaling cascade (LH stimulation), while Fadogia works directly at the testicular level to support testosterone synthesis.',
      "Together, they create a synergistic effect — you're supporting T production from both ends of the chain. Separately, you're only addressing half the equation.",
      "MarsMen has Tongkat Ali but no Fadogia. It's like having a car with the engine but no transmission.",
      "Balls N'Brains contains Fadogia Agrestis (600mg) paired with Tongkat Ali LJ100® (300mg) — the full synergistic stack for comprehensive testosterone support.",
    ],
    visual: 'image5',
  },
  {
    num: '06',
    title: 'MarsMen Gives You Zero Cognitive Support',
    body: [
      'Testosterone is only one dimension of male performance. What about focus? Mental clarity? The ability to concentrate for hours without your brain fogging out?',
      "MarsMen has nothing for your brain. No Lion's Mane. No Cordyceps. No L-Theanine. No nootropic of any kind. It's a one-dimensional product in a multi-dimensional world.",
      "Balls N'Brains contains 1,000mg of Lion's Mane (fruiting body, dual extraction) — which supports nerve growth factor (NGF) production, the protein responsible for brain cell growth and repair. Plus 1,000mg of Cordyceps Militaris for oxygen utilization and physical endurance. And 100mg of L-Theanine paired with 100mg of caffeine for smooth, sustained focus without jitters.",
      'Your brain is the most important performance organ you have. Any serious male performance product should address it.',
    ],
    visual: 'image6',
  },
  {
    num: '07',
    title:
      'MarsMen Still Forces You to Drink Regular Coffee — Which Destroys Your T',
    body: [
      "Here's the irony that nobody talks about: you take your MarsMen capsules to boost testosterone. Then you drink a cup of regular coffee. That coffee spikes cortisol by 25-30%. That cortisol suppresses the HPG axis. And the testosterone boost you just paid for? Gone.",
      "You're spending $59/month on a T-booster and then undoing it with your morning cup. Every. Single. Day.",
      "Balls N'Brains eliminates this problem entirely. It IS your morning coffee. 100mg of caffeine modulated by L-Theanine — enough to energize you, smooth enough to avoid the cortisol spike. You're not fighting your own habits. You're upgrading them.",
    ],
    visual: 'image7',
  },
  {
    num: '08',
    title: "MarsMen's Guarantee Is 4x Shorter Than Balls N'Brains",
    body: [
      'MarsMen offers a 90-day money-back guarantee. Sounds reasonable until you realize that their own product page says real results take 90 days to fully manifest (their "Liftoff" phase).',
      "So by the time you'd actually know if the product works, your guarantee window is already closed. Convenient for them. Not so much for you.",
      "Balls N'Brains offers a 365-day money-back guarantee. A full year. No questions asked. Cancel anytime with one click. No calling anyone. No retention tricks.",
      'If a brand truly believes in its product, it bets on time. 90 days is hedging. 365 days is confidence.',
    ],
    visual: 'image8',
  },
  {
    num: '09',
    title:
      "MarsMen Doesn't Have Mushrooms — The Adaptogenic Powerhouse You're Missing",
    body: [
      "Functional mushrooms are one of the most well-studied categories in natural performance. Lion's Mane for neurogenesis. Cordyceps for endurance and oxygen utilization. Reishi for sleep and recovery. Chaga for immune defense.",
      "MarsMen has zero mushrooms in its formula. None. It's a T-booster pill in a bottle. It doesn't address energy, recovery, immunity, or cognitive function through adaptogens.",
      "Balls N'Brains contains 4 clinical-dose functional mushrooms — all fruiting body with dual extraction, so the active compounds (beta-glucans, hericenones, erinacines, triterpenes) are actually bioavailable. Not filler. Not mycelium-on-grain. Real mushrooms, real doses, real extraction.",
      'Testosterone matters. But so does everything else your body needs to perform. A mushroom coffee covers the full spectrum. A T-booster pill does not.',
    ],
    visual: 'image9',
  },
  {
    num: '10',
    title: 'MarsMen Costs the Same as BnB But Gives You Half the Benefits',
    body: [
      "Let's do the math. MarsMen: $59/month. You get testosterone support from 8 ingredients (no cortisol management, no cognitive support, no energy system, no mushrooms). And you still need to buy coffee separately — let's say $30-50/month for decent coffee.",
      "Balls N'Brains: $59/month. You get testosterone support, cortisol reduction, 4 clinical-dose mushrooms, sustained energy, cognitive performance, and it replaces your coffee entirely. Total cost of your morning routine: $59. Period.",
      "That's testosterone + cortisol control + mushrooms + nootropics + coffee — all in one scoop. MarsMen gives you pills and a hole in your routine.",
      "Bottom line: Same price, half the stack, and you still need coffee on top. MarsMen isn't a bad product — it's just an incomplete one.",
    ],
    visual: 'image10',
  },
];

// ── Visual placeholders per section ───────────────────────────────────────
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
  const lightTypes = ['image2', 'image5', 'image10'];

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
  const cardClass = isDark ? darkCard : lightCard;
  const cardStyle = isDark ? { background: '#111' } : {};

  return (
    <div
      className={`${cardClass} w-full aspect-square max-w-sm`}
      style={cardStyle}
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
export default function BallsNBrainsPage() {
  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: '#fff',
        color: '#111',
      }}
    >
      {/* ── CENTERED CONTENT WRAPPER ── */}
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
                  background: '#e5e7eb',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={doctor} alt="" />
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
                <div className="p-3 text-xs font-bold font-sans uppercase tracking-wider text-gray-400"></div>
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
                    {row.bnb ? '😊' : '😞'}
                  </div>
                  <div className="p-3 text-center text-lg">
                    {row.ryze ? '😊' : '😞'}
                  </div>
                  <div className="p-3 text-center text-lg">
                    {row.trad ? '😊' : '😞'}
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
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                  gap: 48,
                  alignItems: 'center',
                }}
                className="flex-col md:flex-row"
              >
                {/* Visual LEFT on even, RIGHT on odd */}
                {idx % 2 === 0 ? (
                  <>
                    <div className="flex justify-center">
                      <VisualBlock type={r.visual} num={r.num} />
                    </div>
                    <div>
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
                        <ul className="mb-3 ml-4">
                          {r.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="text-gray-700 font-sans text-base leading-relaxed mb-1 list-disc"
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
                  </>
                ) : (
                  <>
                    <div>
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
                        <ul className="mb-3 ml-4">
                          {r.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="text-gray-700 font-sans text-base leading-relaxed mb-1 list-disc"
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
                    <div className="flex justify-center">
                      <VisualBlock type={r.visual} num={r.num} />
                    </div>
                  </>
                )}
              </div>
            </FadeIn>
            {idx < reasons.length - 1 && (
              <div style={{ borderTop: '1px solid #e5e7eb', marginTop: 48 }} />
            )}
          </section>
        ))}
      </div>
      {/* end centered wrapper */}

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
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 48,
                alignItems: 'center',
              }}
            >
              {/* Left: product visual */}
              <div
                style={{
                  borderRadius: 16,
                  padding: 32,
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <img src={product} alt="" />
              </div>

              {/* Right: offer text */}
              <div>
                <p
                  className="text-orange-500 font-black text-4xl leading-tight"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  LIMITED TIME ONLY 👇
                </p>
                <h2
                  style={{
                    fontFamily: 'sans-serif',
                    fontWeight: 900,
                    fontSize: 36,
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
                        background: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img src={doctor} alt="" />
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
                {/* CTA button */}
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
                    display: 'inline-block',
                    textAlign: 'center',
                    boxShadow: '0 8px 20px rgba(249, 115, 22, 0.35)',
                    transition: 'all 0.2s ease-in-out',
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
