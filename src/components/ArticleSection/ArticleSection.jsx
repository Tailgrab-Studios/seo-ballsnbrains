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
  { label: 'Price', trt: '$150-$400/month', tmc: '$1.63/day' },
  { label: 'Estrogen', trt: 'Feeds aromatase → Estrogen spikes', tmc: 'Reduces aromatase stimulation' },
  { label: 'Testicular Health', trt: 'Testicles shrink (documented)', tmc: 'Supports natural testicular function' },
  { label: 'Dependency', trt: "Can't stop without crashing", tmc: 'Stop anytime. No dependency.' },
  { label: 'Safety', trt: 'FDA black box cardiovascular warning', tmc: 'No side effects' },
  { label: 'Guarantee', trt: 'No guarantee', tmc: '365-Day Money-Back Guarantee' },
];

// ── 10 reasons data ────────────────────────────────────────────────────────
const reasons = [
  {
    num: '01',
    title: "TRT Doesn't Fix the Real Problem — It Feeds It",
    body: [
      "Your T isn't low because production stopped. An enzyme called aromatase is converting it into estrogen. TRT adds more testosterone — but aromatase converts synthetic T too. Your estradiol spikes. Now you need anastrozole. Two drugs instead of zero. The alternative: address the enzyme directly.",
    ],
    visual: 'image1',
  },
  {
    num: '02',
    title: 'TRT Shrinks Your Testicles. This Supports Them.',
    body: [
      "Exogenous testosterone tells your brain to stop sending LH (luteinizing hormone). Without LH, your testicles shut down. They atrophy. Testosterone Morning Coffee contains LJ100 Tongkat Ali (300mg) which supports LH signaling, and Fadogia Agrestis (600mg) which supports testicular synthesis. Your natural machinery stays active.",
    ],
    visual: 'image2',
  },
  {
    num: '03',
    title: 'TRT Costs $150-400/Month. This Is $1.63/Day.',
    body: [
      "Monthly testosterone. Quarterly bloodwork. Clinic visits. Anastrozole. HCG. Syringes. That's $1,800-4,800/year for a therapy you can't stop without medical supervision. TMC is $49/month. It also replaces your regular coffee and your T-booster. Net savings: $1,200-4,200/year.",
    ],
    visual: 'image3',
  },
  {
    num: '04',
    title: 'TRT Spikes Estrogen. This Targets the Enzyme That Creates It.',
    body: [
      "Inject T → aromatase converts it → estradiol rises → add anastrozole → joint pain, mood swings, bone density loss. TMC takes a different path: KSM-66 Ashwagandha (300mg) reduces cortisol by 27.9%. Less cortisol = less aromatase stimulation = less conversion. No second drug needed.",
    ],
    visual: 'image4',
  },
  {
    num: '05',
    title: "You Can't Stop TRT Without Crashing. You Can Stop TMC Anytime.",
    body: [
      "After months on TRT, your HPG axis is suppressed. Stop injecting and your T crashes below baseline. You need a managed taper with HCG and/or clomiphene. Some men never fully recover. TMC supports natural production — doesn't replace it. Stop drinking it and you return to baseline. No taper. No PCT.",
    ],
    visual: 'image5',
  },
  {
    num: '06',
    title: 'It Fixes the Brain Fog That TRT Completely Misses',
    body: [
      "TRT adds testosterone. It doesn't touch cognition. TMC includes Lion's Mane (1,000mg) — stimulates nerve growth factor for brain cell repair. Users report cleared fog within 7-10 days. Plus Cordyceps (1,000mg) — 7% VO2 max increase. Less fatigue, more endurance. One cup hits hormones, brain, and body.",
    ],
    visual: 'image6',
  },
  {
    num: '07',
    title: 'No Needles. No Pharmacy. No Awkward Conversations.',
    body: [
      "Testosterone is Schedule III. Refills require prescriptions. Some pharmacies flag it. Some wives have questions about injections. TMC ships in a plain box. It's coffee. Nobody asks questions at the breakfast table. Same mug, same morning, same routine. The simplicity is the point.",
    ],
    visual: 'image7',
  },
  {
    num: '08',
    title: "TRT Has an FDA Cardiovascular Black Box Warning. This Doesn't.",
    body: [
      "The TRAVERSE trial found higher incidence of major cardiovascular events in men on TRT. TRT commonly elevates hematocrit — increasing blood viscosity and stroke risk. Regular CBC monitoring required. TMC contains no exogenous hormones. No mechanism to elevate hematocrit. No cardiac monitoring needed.",
    ],
    visual: 'image8',
  },
  {
    num: '09',
    title: 'Men Who Switched Are Getting Better Bloodwork',
    body: [
      "Self-reported results from men transitioning off TRT to TMC at 90 days: total T up 15-30% from pre-TRT baseline. Free T up 20-35%. Estradiol down to 20-30 pg/mL (vs. 40-60+ on TRT). Hematocrit normalized. When you stop flooding the system with synthetic T and instead support natural production while reducing aromatase, your body finds a healthier balance.",
    ],
    visual: 'image9',
  },
  {
    num: '10',
    title: "365-Day Guarantee. Your TRT Clinic Doesn't Offer Refunds.",
    body: [
      "If TRT doesn't work, you're out the money AND you need medical support to discontinue. TMC: try it for up to a full year. If you're not satisfied, email them, get every penny back. No phone calls. No retention scripts. 26.5% returning customer rate and 4.8 stars across 12,847 reviews says the bet is paying off.",
    ],
    visual: 'image10',
  },
];

// ── Week-by-week data ──────────────────────────────────────────────────────
const weeks = [
  {
    period: 'Week 1-2',
    title: 'The Energy Shift',
    body: "Clean, sustained focus. No jitters, no 2pm crash. Brain fog starts lifting. Sleep improves as cortisol normalizes. You stop needing the second or third cup.",
  },
  {
    period: 'Week 3-4',
    title: 'The Hormonal Rebalance',
    body: "Morning wood returns. Libido ticks up. Workouts feel stronger. Recovery improves. People around you start commenting. The bloated belly starts feeling different.",
  },
  {
    period: 'Week 6-8',
    title: 'The Compound Effect',
    body: "Body composition shifts visibly. Less belly fat. More definition. Mental clarity sharpens further. Mood stabilizes. Confidence returns. Your wife notices before your bloodwork does.",
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
              10 Reasons Why Men With Low T Are Ditching TRT for This $1.63/Day Morning Coffee
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
                "More men are asking how to get off TRT than how to get on it. That wasn't the case two years ago."
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
                border: '2px solid #e5e7eb',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              }}
            >
              {/* Table header */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 1fr 1.2fr',
                  background: '#111',
                }}
              >
                <div style={{ padding: '14px 16px' }} />
                <div
                  style={{
                    padding: '14px 12px',
                    textAlign: 'center',
                    borderLeft: '1px solid #333',
                  }}
                >
                  <p style={{ color: '#9ca3af', fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4 }}>
                    💉 TRT
                  </p>
                  <p style={{ color: '#ef4444', fontFamily: 'sans-serif', fontSize: 11, fontWeight: 600 }}>
                    High risk
                  </p>
                </div>
                <div
                  style={{
                    padding: '14px 12px',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #1c1400 0%, #2d1f00 100%)',
                    borderLeft: '1px solid #f97316',
                  }}
                >
                  <p style={{ color: '#fb923c', fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4 }}>
                    ☕ Testosterone Mushroom Coffee
                  </p>
                  <p style={{ color: '#4ade80', fontFamily: 'sans-serif', fontSize: 11, fontWeight: 600 }}>
                    ✓ Winner
                  </p>
                </div>
              </div>

              {/* Table rows */}
              {compRows.map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1fr 1.2fr',
                    background: i % 2 === 0 ? '#fff' : '#fafafa',
                    borderTop: '1px solid #e5e7eb',
                  }}
                >
                  <div
                    style={{
                      padding: '14px 16px',
                      fontFamily: 'sans-serif',
                      fontSize: 13,
                      fontWeight: 800,
                      color: '#374151',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {row.label}
                  </div>
                  <div
                    style={{
                      padding: '14px 12px',
                      textAlign: 'center',
                      fontFamily: 'sans-serif',
                      fontSize: 13,
                      color: '#dc2626',
                      borderLeft: '1px solid #e5e7eb',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4,
                    }}
                  >
                    <span style={{ fontSize: 16 }}>✗</span>
                    {row.trt}
                  </div>
                  <div
                    style={{
                      padding: '14px 12px',
                      textAlign: 'center',
                      fontFamily: 'sans-serif',
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#15803d',
                      background: i % 2 === 0 ? '#f0fdf4' : '#e8faf0',
                      borderLeft: '2px solid #f97316',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4,
                    }}
                  >
                    <span style={{ fontSize: 16, color: '#16a34a' }}>✓</span>
                    {row.tmc}
                  </div>
                </div>
              ))}
            </div>

            {/* TLDR */}
            <div
              className="mt-6 px-5 py-4"
              style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                borderLeft: '4px solid #16a34a',
                borderRadius: 10,
                boxShadow: '0 2px 8px rgba(22, 163, 74, 0.1)',
              }}
            >
              <p className="text-gray-800 font-sans text-base leading-relaxed">
                <strong>TLDR:</strong> TRT doesn't address aromatase — the enzyme converting your T into estrogen. It actually feeds it. Testosterone Mushroom Coffee targets the root cause, supports natural production, and costs $1.63/day. No needles. No dependency. 365-day guarantee. 👇
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
                <p
                  className="text-gray-500 font-sans text-xs uppercase tracking-widest mb-3"
                  style={{ letterSpacing: 3 }}
                >
                  [ POUCH BnB ]
                </p>
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
                  <p className="text-gray-700 font-sans text-sm font-semibold">✅ 365-Day Money-Back Guarantee</p>
                  <p className="text-gray-700 font-sans text-sm font-semibold">🔒 44% OFF — Locked For Life</p>
                  <p className="text-gray-700 font-sans text-sm font-semibold">🚚 Free Shipping on 2+ Pouches</p>
                </div>

                {/* CTA */}
                <a
                  href="https://lp.vitavaulthealth.com/preclick"
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
                  <span className="font-semibold">12,847+ verified reviews</span>
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
              href="https://lp.vitavaulthealth.com/preclick"
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
