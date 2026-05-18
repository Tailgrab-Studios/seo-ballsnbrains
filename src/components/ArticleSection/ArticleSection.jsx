import { useState, useEffect, useRef } from 'react';
import image01 from '../../assets/images/adv-img-01.webp';
import image02 from '../../assets/images/adv-img-02.webp';
import image03 from '../../assets/images/adv-img-03.webp';
import image04 from '../../assets/images/adv-img-04.webp';
import image05 from '../../assets/images/adv-img-05.webp';
import image06 from '../../assets/images/adv-img-06.webp';
import image07 from '../../assets/images/adv-img-07.webp';
import image08 from '../../assets/images/adv-img-08.webp';
import image09 from '../../assets/images/adv-img-09.webp';
import image10 from '../../assets/images/adv-img-10.webp';
import product from '../../assets/products/1kit-with-bg.webp';
import doctor from '../../assets/testimonials/man1.webp';

// ── Comparison table data ──────────────────────────────────────────────────
const compRows = [
  {
    label: 'Aromatase control',
    tmc: '✅ Yes',
    trt: '❌ Feeds it',
    gen: '❌ Ignores it',
  },
  { label: 'Monthly cost', tmc: '$49', trt: '$150-$400', gen: '$80-$90' },
  { label: 'Needles/Prescription', tmc: 'None', trt: 'Required', gen: 'None' },
  { label: 'Guarantee', tmc: '365 days', trt: 'None', gen: '30 days' },
];

// ── 10 reasons data ────────────────────────────────────────────────────────
const reasons = [
  {
    num: '01',
    title: "It Solves a Problem Men Didn't Know They Had",
    body: [
      "The message isn't \"boost your T.\" It's more uncomfortable: your body is converting your testosterone into estrogen right now. An enzyme called aromatase hijacks the T you produce and turns it into estradiol. After 40, it accelerates. Belly fat, man boobs, dead libido, brain fog — all consequences. Once a man learns this, he tells every man he knows. That's why it's spreading.",
    ],
    visual: 'image1',
  },
  {
    num: '02',
    title: "You Don't Add a Pill. You Upgrade Your Coffee.",
    body: [
      "80% of men quit supplements within 60 days. Pills get forgotten. Powders get pushed to the back of the cabinet. This formula replaces something you already do every morning. Same mug, same time, same counter. You don't add a habit — you upgrade one. That's why the retention rate (26.5%) is 5x the supplement industry average.",
    ],
    visual: 'image2',
  },
  {
    num: '03',
    title: 'Full Clinical Doses — Not Proprietary Blend Dust',
    body: [],
    bullets: [
      '🧬 KSM-66 Ashwagandha (300mg) — cortisol down 27.9%',
      '⚡ LJ100 Tongkat Ali (300mg) — supports LH signaling',
      '🔥 Fadogia Agrestis (600mg) — testicular T synthesis',
      "🧠 Lion's Mane (1,000mg) — nerve growth factor for focus",
      '🏔️ Cordyceps (1,000mg) — 7% VO2 max increase',
      '☕ Caffeine 100mg + L-Theanine 100mg — no cortisol spike',
    ],
    bodyAfter: [
      'Every dose matches the clinical trials. Fully disclosed on the label.',
    ],
    visual: 'image3',
  },
  {
    num: '04',
    title: 'It Costs $1.63/Day — Less Than the Starbucks It Replaces',
    body: [
      'A 3-pouch is $1.30/day. It replaces your regular coffee ($3-7/day), your T-booster ($40-80/mo), and your nootropic stack ($30-60/mo). Three products collapsed into one cup. In a year where budgets are tight, men are doing the math.',
    ],
    visual: 'image4',
  },
  {
    num: '05',
    title: "Facebook Groups Can't Stop Talking About Aromatase",
    body: [
      'Search "aromatase" in any men\'s health group. Posts tripled since January 2026. These aren\'t brand posts — they\'re men sharing bloodwork, comparing notes, teaching each other. The conversation shifted from "how do I boost T" to "how do I stop losing the T I already have." This coffee is the only product built around that shift.',
    ],
    visual: 'image5',
  },
  {
    num: '06',
    title: 'It Hits All 5 Symptoms — Not Just One',
    body: [
      'Blue pills fix one symptom. TRT fixes one number. This formula was built for the 5 symptoms men over 40 actually report:',
    ],
    bullets: [
      '🔋 Chronic fatigue → Cortisol reduction + sustained energy',
      '🫃 Stubborn belly fat → Aromatase reduction',
      "🧠 Brain fog → Lion's Mane + cortisol control",
      '🛏️ Dead libido → Tongkat Ali + Fadogia',
      '💪 Muscle loss → Testosterone support + Cordyceps',
    ],
    bodyAfter: ['One product. Five symptoms. One morning cup.'],
    visual: 'image6',
  },
  {
    num: '07',
    title: 'The Guarantee Is Absurd — 365 Days',
    body: [
      "Not 30 days. Not 90 days. A full year. If it doesn't work, email them, get every penny back. No phone trees. No retention scripts. You don't offer a 365-day guarantee on a product that doesn't work — the math would kill you. The fact they're growing tells you the return rate is negligible.",
    ],
    visual: 'image7',
  },
  {
    num: '08',
    title: 'Regular Coffee Is Working Against You After 40',
    body: [
      "200mg+ caffeine = 25-30% cortisol spike per cup. Cortisol stimulates aromatase. Your morning coffee is literally feeding the enzyme that converts your testosterone into estrogen. TMC uses 100mg caffeine + 100mg L-Theanine — sustained energy, zero cortisol spike. You don't quit coffee. You switch to one that works with your biology.",
    ],
    visual: 'image8',
  },
  {
    num: '09',
    title: 'Urologists Are Writing the Name Down',
    body: [
      "Integrative practitioners are hearing about it from patients showing up with improved bloodwork. When a man's free T goes up 20-30% and estradiol comes down, a doctor pays attention. This isn't a celebrity endorsement — it's organic clinical validation from lab results.",
    ],
    visual: 'image9',
  },
  {
    num: '10',
    title: 'The Men Who Try It Become Evangelists',
    body: [
      "A man orders skeptically. Week 3-4, something shifts. Energy. Morning wood. Belt notch. Wife makes a comment he hasn't heard in years. And then he tells every man he knows. Not because of a referral program — because he spent years feeling broken and this was the first thing that explained why (aromatase) and then fixed it. That emotional arc creates loyalty marketing can't manufacture.",
    ],
    visual: 'image10',
  },
];

// ── Week-by-week data ──────────────────────────────────────────────────────
const weeks = [
  {
    period: 'Week 1-2',
    title: 'The Energy Shift',
    body: 'Clean, sustained focus. No jitters, no 2pm crash. Brain fog starts lifting. Sleep improves as cortisol normalizes. You stop needing the second or third cup.',
  },
  {
    period: 'Week 3-4',
    title: 'The Hormonal Rebalance',
    body: 'Morning wood returns. Libido ticks up. Workouts feel stronger. Recovery improves. People around you start commenting. The bloated belly starts feeling different.',
  },
  {
    period: 'Week 6-8',
    title: 'The Compound Effect',
    body: 'Body composition shifts visibly. Less belly fat. More definition. Mental clarity sharpens further. Mood stabilizes. Confidence returns. Your wife notices before your bloodwork does.',
  },
  {
    period: 'Week 12+',
    title: 'The New Normal',
    body: "Higher sustained energy. Stronger workouts. Sharper cognition. Healthier hormonal balance. This is where most men get bloodwork done and see the numbers confirm what they've been feeling.",
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
              ADVERTORIAL
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
              10 Reasons This Testosterone Coffee Is Trending for Men 40-65+ in
              2026
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
                "It started in biohacking forums. Then it hit Facebook. Now
                urologists are writing the name down."
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
                  gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
                  background: '#111',
                  color: '#fff',
                }}
              >
                <div className="p-3 text-xs font-bold font-sans uppercase tracking-wider text-gray-400 text-center">
                  😓 Problem
                </div>
                <div className="p-3 text-xs font-bold font-sans uppercase tracking-wider text-orange-400 text-center">
                  ☕ Testosterone Mushroom Coffee
                </div>
                <div className="p-3 text-xs font-bold font-sans uppercase tracking-wider text-gray-400 text-center">
                  💉 TRT
                </div>
                <div className="p-3 text-xs font-bold font-sans uppercase tracking-wider text-gray-400 text-center">
                  💊 Generic T-Boosters
                </div>
              </div>
              {compRows.map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
                    background: i % 2 === 0 ? '#fff' : '#fafafa',
                    borderTop: '1px solid #e5e7eb',
                  }}
                >
                  <div className="p-3 text-sm font-bold font-sans text-gray-700">
                    {row.label}
                  </div>
                  <div className="p-3 text-center text-sm font-sans text-green-700 font-semibold">
                    {row.tmc}
                  </div>
                  <div className="p-3 text-center text-sm font-sans text-red-600">
                    {row.trt}
                  </div>
                  <div className="p-3 text-center text-sm font-sans text-gray-500">
                    {row.gen}
                  </div>
                </div>
              ))}
            </div>

            {/* TLDR */}
            <div
              className="mt-6 px-5 py-4"
              style={{
                background: '#f0fdf4',
                borderLeft: '4px solid #16a34a',
                borderRadius: 8,
              }}
            >
              <p className="text-gray-800 font-sans text-base leading-relaxed">
                <strong>TLDR:</strong> Testosterone Mushroom Coffee that targets
                aromatase (the enzyme converting your T into estrogen) is the
                fastest-growing men's supplement in 2026. It replaces your
                morning coffee, costs $1.63/day, and comes with a 365-day
                guarantee. Here's why men can't stop talking about it. 👇
              </p>
            </div>
          </FadeIn>
        </section>

        <div style={{ borderTop: '1px solid #e5e7eb', margin: '0 32px' }} />

        {/* ── 10 REASONS ── */}
        {reasons.map((r, idx) => (
          <section key={r.num} className="px-8 py-12">
            <FadeIn delay={80}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div
                  className={`flex justify-center ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                >
                  <VisualBlock type={r.visual} />
                </div>

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
                    <ul className="mb-3 ml-4 list-none space-y-1">
                      {r.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="text-gray-700 font-sans text-base leading-relaxed"
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
                  alt="Testosterone Mushroom Coffee"
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
                  Limited Time Only 👇
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

                {/* Trust badges */}
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700 font-sans text-sm font-semibold">
                    ✅ 365-Day Money-Back Guarantee
                  </p>
                  <p className="text-gray-700 font-sans text-sm font-semibold">
                    🔒 44% OFF — Locked For Life
                  </p>
                  <p className="text-gray-700 font-sans text-sm font-semibold">
                    🚚 Free Shipping on 2+ Pouches
                  </p>
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

                {/* Reviews */}
                <p className="text-center text-gray-600 font-sans text-sm mt-4">
                  ⭐⭐⭐⭐⭐&nbsp;
                  <span className="font-semibold">
                    12,847+ verified reviews
                  </span>
                </p>
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

      {/* ── WEEK-BY-WEEK ── */}
      <section style={{ background: '#fff', width: '100%' }} className="py-12">
        <FadeIn>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <h2
              style={{
                fontFamily: 'sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(22px, 3vw, 32px)',
                color: '#111',
                marginBottom: 32,
                textAlign: 'center',
              }}
            >
              What to Expect — Week by Week
            </h2>
            <div className="space-y-6">
              {weeks.map((w, i) => (
                <div
                  key={i}
                  style={{
                    borderLeft: '4px solid #f97316',
                    paddingLeft: 20,
                  }}
                >
                  <p className="text-orange-500 font-black text-sm font-sans uppercase tracking-widest mb-1">
                    {w.period}
                  </p>
                  <p
                    style={{
                      fontFamily: 'sans-serif',
                      fontWeight: 800,
                      fontSize: 18,
                      color: '#111',
                      marginBottom: 6,
                    }}
                  >
                    {w.title}
                  </p>
                  <p className="text-gray-700 font-sans text-base leading-relaxed">
                    {w.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <a
              href="https://lp.ballsnbrains.com/preclick"
              style={{
                display: 'block',
                width: '100%',
                marginTop: 40,
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
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(249, 115, 22, 0.35)',
              }}
            >
              TRY IT NOW — 44% OFF ➤
            </a>
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
          <p className="text-gray-600 text-sm font-sans mb-6">© 2026</p>
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
