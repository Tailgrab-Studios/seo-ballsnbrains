import { useState, useEffect } from 'react';
import heroImg from '../../assets/images/img-ballsnbrains-comparative.webp';
import ad1 from '../../assets/images/ad1.webp';
import ad2 from '../../assets/images/ad2.webp';
import ad3 from '../../assets/images/ad3.webp';
import ad4 from '../../assets/images/ad4.webp';
import ad5 from '../../assets/images/ad5.webp';
import ad6 from '../../assets/images/ad6.webp';
import ad7 from '../../assets/images/ad7.webp';
import ad8 from '../../assets/images/ad8.webp';
import ad9 from '../../assets/images/ad9.webp';
import ad10 from '../../assets/images/ad10.webp';

const CTA_URL = '#';
const TEAL = '#0d9488';
const INIT_SECONDS = 8630; // 2h 23m 50s

function useCountdown(init) {
  const [secs, setSecs] = useState(init);
  useEffect(() => {
    const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function AlertBanner() {
  const time = useCountdown(INIT_SECONDS);
  return (
    <div
      style={{
        background: '#1a0a0a',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 16px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '2px solid #7f1d1d',
      }}
    >
      <p
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(12px, 2vw, 14px)',
          letterSpacing: 0.5,
          margin: 0,
        }}
      >
        🔥 40% OFF + FREE SHIPPING + FREE GIFTS —{' '}
        <span style={{ color: '#d1d5db' }}>DEAL ENDING IN:</span>{' '}
        <span
          style={{
            color: '#fbbf24',
            fontFamily: 'monospace',
            fontSize: 'clamp(13px, 2vw, 15px)',
          }}
        >
          {time}
        </span>
      </p>
    </div>
  );
}

function QuoteBox({ text }) {
  return (
    <div
      style={{
        border: '1px solid #e5e0c0',
        background: '#fefdf5',
        borderRadius: 4,
        padding: '14px 20px',
        margin: '20px 0',
      }}
    >
      <p
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: 16,
          fontStyle: 'italic',
          color: '#333',
          margin: 0,
        }}
      >
        "{text}"
      </p>
    </div>
  );
}

const tableRows = [
  {
    label: 'Testosterone support',
    bb: '✓ 5 clinical actives',
    rc: '✗ None',
    om: '✗ None',
  },
  {
    label: 'Cortisol & crash',
    bb: '✓ Lowers it',
    rc: '✗ Spikes & crashes',
    om: '~ Too weak to feel',
  },
  {
    label: 'Real coffee taste',
    bb: '✓ Organic Arabica',
    rc: '✓ Yes',
    om: '~ Earthy / shroomy',
  },
  {
    label: 'Doses on the label',
    bb: '✓ Every dose shown',
    rc: '—',
    om: '✗ Proprietary blend',
  },
  { label: 'Value', bb: '✓ Best value', rc: 'Average', om: 'Pricey' },
];

function cellColor(val) {
  if (val.startsWith('✓')) return '#15803d';
  if (val.startsWith('✗')) return '#dc2626';
  if (val.startsWith('~')) return '#6b7280';
  if (val === '—') return '#9ca3af';
  return '#374151';
}

function ComparisonTable() {
  const thStyle = bg => ({
    background: bg,
    color: '#fff',
    fontFamily: 'sans-serif',
    fontWeight: 700,
    fontSize: 13,
    padding: '10px 8px',
    textAlign: 'center',
    borderRight: '1px solid rgba(255,255,255,0.2)',
  });
  const labelStyle = {
    fontFamily: 'sans-serif',
    fontWeight: 700,
    fontSize: 13,
    color: '#1f2937',
    padding: '12px 10px',
    borderBottom: '1px solid #f3f4f6',
    verticalAlign: 'middle',
  };
  const cellStyle = (val, bg) => ({
    fontFamily: 'sans-serif',
    fontSize: 13,
    fontWeight: 600,
    color: cellColor(val),
    padding: '12px 8px',
    textAlign: 'center',
    borderBottom: '1px solid #f3f4f6',
    borderLeft: '1px solid #f3f4f6',
    background: bg,
    verticalAlign: 'middle',
  });

  return (
    <div style={{ margin: '24px 0' }}>
      <h3
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 700,
          fontSize: 18,
          color: '#111',
          marginBottom: 12,
        }}
      >
        How It Stacks Up
      </h3>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid #e5e7eb',
            borderRadius: 6,
            overflow: 'hidden',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  ...thStyle('#f59e0b'),
                  width: '28%',
                  textAlign: 'left',
                  paddingLeft: 10,
                }}
              ></th>
              <th style={thStyle('#f59e0b')}>Balls & Brains</th>
              <th style={thStyle('#f59e0b')}>Regular Coffee</th>
              <th style={thStyle('#f59e0b')}>Other Mushroom Coffees</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb' }}
              >
                <td style={labelStyle}>{row.label}</td>
                <td
                  style={cellStyle(row.bb, i % 2 === 0 ? '#f0fdf4' : '#ecfdf5')}
                >
                  {row.bb}
                </td>
                <td style={cellStyle(row.rc, 'transparent')}>{row.rc}</td>
                <td style={cellStyle(row.om, 'transparent')}>{row.om}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ImageBox({ src, caption }) {
  if (!src) return null;
  return (
    <div style={{ flexShrink: 0, width: '100%' }}>
      <img
        src={src}
        alt={caption}
        style={{
          width: '100%',
          display: 'block',
          borderRadius: 6,
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

function ReasonItem({ num, title, body, ctaText, image, imageCaption }) {
  return (
    <div
      className="reason-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: 20,
        alignItems: 'start',
        padding: '28px 0',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      <ImageBox src={image} caption={imageCaption} />
      <div>
        <p
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 900,
            fontSize: 13,
            color: TEAL,
            marginBottom: 4,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}
        >
          {num}.
        </p>
        <h3
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(15px, 2.2vw, 18px)',
            color: '#111',
            lineHeight: 1.3,
            marginBottom: 10,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 15,
            lineHeight: 1.75,
            color: '#333',
            marginBottom: 14,
          }}
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <a
          href={CTA_URL}
          style={{
            fontFamily: 'sans-serif',
            fontSize: 13,
            fontWeight: 700,
            color: TEAL,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            borderBottom: `1px solid ${TEAL}`,
            paddingBottom: 1,
          }}
        >
          ✓ {ctaText}
        </a>
      </div>
    </div>
  );
}

const reasons = [
  {
    num: 1,
    title: "The first coffee actually built for a man's body — not against it",
    body: "Balls & Brains created the first coffee that works <em>with</em> a man's body instead of against it. It starts with 100% real organic Arabica, then stacks in five ingredients clinically studied for the male body plus four functional mushrooms — so every morning cup is quietly doing the work your body slowed down on after 40.*",
    cta: "See What's Actually Inside",
    image: ad1,
    caption:
      'Balls & Brains pouch beside a dark, freshly poured mug on a kitchen counter.',
  },
  {
    num: 2,
    title: "It fuels your body's own testosterone production — naturally",
    body: 'Your body needs specific raw materials to make testosterone — most importantly Zinc and Vitamin D. Balls & Brains delivers both at the clinical daily dose (Zinc 15mg + Vitamin D3 2,000 IU), plus Tongkat Ali LJ100 (300mg) to support the LH signal that tells your body to produce more T. No needles, no TRT, no shutting down your own production.*',
    cta: 'Support Your T The Natural Way',
    image: ad2,
    caption:
      'Close-up of the supplement-facts panel, every dose clearly printed.',
  },
  {
    num: 3,
    title: 'It calms the cortisol that quietly works against your testosterone',
    body: "Here's what no one tells you: every cup of regular coffee spikes cortisol — and cortisol competes with testosterone for the same raw material. Balls & Brains flips that. KSM-66 Ashwagandha (300mg) is clinically shown to lower cortisol by 27.9% in 60 days, and 100mg of L-Theanine buffers the spike from the caffeine itself.*",
    cta: 'Calm The Hormone That Drains You',
    image: ad5,
    caption: 'A man looking calm and steady at his desk, mug in hand.',
  },
  {
    num: 4,
    title: 'It tastes like real coffee — not a chalky mushroom mud',
    body: "While other mushroom coffees taste earthy, gritty, or like dirt, we use 100% real coffee. You get the same rich, dark-roast flavor, texture, and aroma you already love — it's the only mushroom coffee where you genuinely can't taste the mushrooms. No chalk. No mud. Just coffee.",
    cta: 'Enjoy Real Coffee Taste, Every Time',
    image: ad3,
    caption:
      'Side-by-side: other mushroom coffees = murky/earthy cup; Balls & Brains = rich dark-roast crema.',
  },
  {
    num: 5,
    title: 'It replaces a $100+/month supplement stack with one cup',
    body: "Most men over 40 are already buying zinc, vitamin D, ashwagandha, tongkat ali, lion's mane and more — separately. That's a $100+/month pile of pills you have to remember to take. Balls & Brains puts all of it, at clinical doses, into one cup of coffee you were going to drink anyway.",
    cta: 'Ditch The Supplement Pile',
    image: ad8,
    caption:
      'A messy pile of supplement bottles next to a single clean Balls & Brains pouch.',
  },
  {
    num: 6,
    title:
      'One scoop, ready in seconds — just swap the coffee you already make',
    body: "No new habit to build. One scoop into hot water or your milk of choice and you're done in seconds — just swap it for the coffee you already make every morning. At 15 calories with no added sugar, you can even drink it fasted.",
    cta: 'Swap Your Coffee In Seconds',
    image: ad9,
    caption: 'One scoop being stirred into a mug, steam rising.',
  },
  {
    num: 7,
    title: 'All-day clean energy — no jitters, no 2pm crash',
    body: "The caffeine (100mg — about half a regular cup) gives you a real, noticeable lift, while 100mg of L-Theanine keeps it smooth and steady. That's the clinically validated 1:1 combo for calm, alert focus — so you get all-day energy with none of the jitters and none of the afternoon crash.",
    cta: 'Stay Sharp, Skip The Crash',
    image: ad6,
    caption:
      'Energy-over-time chart — Regular Coffee spikes then crashes below the line; Balls & Brains rises to a steady plateau that holds all day.',
  },
  {
    num: 8,
    title: "Sharper focus — and the physical edge you thought you'd lost",
    body: 'Lion\'s Mane (1,000mg) supports the BDNF and nerve growth factor behind sharp memory and focus — most men feel the fog lift within a couple of weeks. Cordyceps (1,000mg) is linked to a 7% bump in VO2 max for stamina, and Shilajit (250mg) has been shown to raise free testosterone 20% in 90 days. The edge you\'d written off as "just getting older" starts coming back.*',
    cta: 'Get Your Edge Back',
    image: ad7,
    caption: 'A man finishing a set at the gym, relaxed and strong.',
  },
  {
    num: 9,
    title: 'Thousands of 5-star reviews — and a full-year money-back guarantee',
    body: "Changing your coffee is a big deal, and we're confident enough to carry all the risk. Balls & Brains is backed by a full <strong>365-Day Money-Back Guarantee</strong> — a whole year, the longest in the category. If it doesn't work for you, we'll refund every penny. No phone calls, no hoops.",
    cta: 'Start Your Risk-Free Year',
    image: ad4,
    caption: '5-star review screenshots collage.',
  },
  {
    num: 10,
    title: 'Join the men who already made the switch',
    body: "Thousands of men have already ditched their old coffee for the one that actually does something for them. It's the fastest-growing testosterone-support coffee in America — and it's becoming the <strong>#1 trending morning drink for men in 2026</strong> for a reason.",
    cta: 'Join The Movement',
    image: ad10,
    caption: 'Grid of real men holding their morning Balls & Brains mug.',
  },
];

function OfferBox() {
  const time = useCountdown(INIT_SECONDS);
  return (
    <div style={{ marginTop: 28, borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.13)' }}>

      {/* ── dark header bar ── */}
      <div style={{ background: '#0f172a', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <p style={{ fontFamily: 'sans-serif', fontWeight: 800, fontSize: 12, color: '#fbbf24', letterSpacing: 2, textTransform: 'uppercase', margin: 0 }}>
          ⚡ Exclusive Reader Deal
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontFamily: 'sans-serif', fontSize: 12, color: '#94a3b8' }}>Deal ends in:</span>
          <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 15, color: '#fbbf24', background: 'rgba(251,191,36,0.12)', padding: '2px 8px', borderRadius: 4 }}>{time}</span>
        </div>
      </div>

      {/* ── main body ── */}
      <div style={{ background: '#fff', padding: '28px 24px' }}>

        {/* image + offer side by side */}
        <div className="offer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center', marginBottom: 24 }}>
          <img src={heroImg} alt="Balls & Brains" style={{ width: '100%', display: 'block', borderRadius: 10 }} />
          <div>
            <p style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: 11, color: '#dc2626', letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 6px' }}>Limited-Time Only</p>
            <p style={{ fontFamily: 'sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 7vw, 52px)', color: '#0f172a', lineHeight: 1, margin: '0 0 4px', letterSpacing: -1 }}>40<span style={{ color: '#ea580c' }}>%</span></p>
            <p style={{ fontFamily: 'sans-serif', fontWeight: 900, fontSize: 'clamp(16px, 3vw, 22px)', color: '#0f172a', margin: '0 0 16px', letterSpacing: -0.5 }}>OFF YOUR ORDER</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {['Free gifts with every order', 'Free shipping included', '365-Day money-back guarantee'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#16a34a', fontSize: 11, fontWeight: 900 }}>✓</span>
                  </span>
                  <span style={{ fontFamily: 'sans-serif', fontSize: 13, color: '#374151' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* stock bar */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontFamily: 'sans-serif', fontSize: 12, fontWeight: 700, color: '#374151' }}>Stock availability</span>
            <span style={{ fontFamily: 'sans-serif', fontSize: 12, fontWeight: 700, color: '#dc2626' }}>Almost sold out</span>
          </div>
          <div style={{ height: 7, background: '#f3f4f6', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '18%', background: 'linear-gradient(90deg, #dc2626, #ea580c)', borderRadius: 99 }} />
          </div>
        </div>

        {/* CTA */}
        <a
          href={CTA_URL}
          style={{ display: 'block', width: '100%', padding: '17px 0', background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)', color: '#fff', fontFamily: 'sans-serif', fontWeight: 900, fontSize: 'clamp(16px, 2.5vw, 19px)', textAlign: 'center', textDecoration: 'none', borderRadius: 8, letterSpacing: 0.5, boxSizing: 'border-box', boxShadow: '0 4px 20px rgba(234,88,12,0.4)' }}
        >
          CLAIM MY 40% OFF NOW →
        </a>

        {/* trust row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 14, flexWrap: 'wrap' }}>
          {['🔒 Secure checkout', '🏆 365-Day guarantee', '🇺🇸 Made in USA'].map((t, i) => (
            <span key={i} style={{ fontFamily: 'sans-serif', fontSize: 12, color: '#6b7280' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Article11Reasons() {
  return (
    <div
      style={{
        fontFamily: 'Georgia, serif',
        background: '#fff',
        color: '#111',
      }}
    >
      <AlertBanner />

      <div
        style={{ maxWidth: 740, margin: '0 auto', padding: '32px 24px 48px' }}
      >
        {/* ── TITLE ── */}
        <h1
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(22px, 4vw, 34px)',
            lineHeight: 1.15,
            color: '#111',
            marginBottom: 14,
          }}
        >
          11 Reasons Why This Testosterone Support Mushroom Coffee is the{' '}
          <span style={{ color: '#1d4ed8' }}>
            #1 Trending Drink for Men in 2026
          </span>
        </h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              background: TEAL,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'sans-serif',
                fontWeight: 700,
                fontSize: 13,
                color: '#fff',
              }}
            >
              DR
            </span>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'sans-serif',
                fontWeight: 700,
                fontSize: 13,
                color: '#111',
                margin: 0,
              }}
            >
              By Dan R.
            </p>
            <p
              style={{
                fontFamily: 'sans-serif',
                fontSize: 12,
                color: '#9ca3af',
                margin: 0,
              }}
            >
              Last Updated June 16, 2026
            </p>
          </div>
        </div>

        <QuoteBox text="Read this BEFORE you pour your next cup." />

        {/* ── COMPARISON TABLE ── */}
        <ComparisonTable />

        {/* ── TLDR ── */}
        <p style={{ fontFamily: 'sans-serif', fontSize: 15, marginBottom: 32 }}>
          <strong style={{ color: TEAL }}>TLDR:</strong>{' '}
          <strong>
            Drinking Balls & Brains Mushroom Coffee has 11+ life-changing
            benefits for the male body.
          </strong>
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #e5e7eb',
            marginBottom: 8,
          }}
        />

        {/* ── REASONS 1–10 ── */}
        {reasons.map(r => (
          <ReasonItem
            key={r.num}
            num={r.num}
            title={r.title}
            body={r.body}
            ctaText={r.cta}
            image={r.image}
            imageCaption={r.caption}
          />
        ))}

        {/* ── REASON 11 ── */}
        <div style={{ paddingTop: 32 }}>
          <h3
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(18px, 3vw, 22px)',
              color: '#1d4ed8',
              marginBottom: 12,
            }}
          >
            11. You made it this far — here's your hookup
          </h3>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 16,
              lineHeight: 1.7,
              color: '#333',
              marginBottom: 10,
            }}
          >
            Reaching #11 means one thing: you're done settling for a coffee that
            works against you.
          </p>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 16,
              lineHeight: 1.7,
              color: '#333',
              marginBottom: 24,
            }}
          >
            We don't hand these out every day… consider this your exclusive
            Balls & Brains hookup, just for you.
          </p>
          <OfferBox />
        </div>

        {/* ── DISCLAIMER ── */}
        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: 11,
            color: '#9ca3af',
            lineHeight: 1.6,
            borderTop: '1px solid #e5e7eb',
            paddingTop: 20,
            marginTop: 40,
            fontStyle: 'italic',
          }}
        >
          † These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure,
          or prevent any disease. Individual results may vary. Consult your
          physician before beginning any supplement regimen. Offer and pricing
          valid for a limited time at the discounted rate shown; free gifts
          included while supplies last. © 2026 Balls & Brains. All rights
          reserved. ·{' '}
          <a href="#" style={{ color: '#9ca3af' }}>
            Privacy Policy
          </a>{' '}
          ·{' '}
          <a href="#" style={{ color: '#9ca3af' }}>
            Terms of Service
          </a>
        </p>
      </div>

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        @media (max-width: 580px) {
          .reason-grid { grid-template-columns: 1fr !important; }
          .offer-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
