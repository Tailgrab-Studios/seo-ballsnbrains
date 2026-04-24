import React, { useState } from 'react';

const categories = ['Taste', 'Benefits', 'Caffeine', 'Testosterone'];

const reviews = {
  Taste: [
    {
      title: 'Tastes Like Real Coffee',
      body: "I've tried four different mushroom coffees. They all tasted like someone brewed a boot. This one actually tastes like coffee. Because it IS coffee. My wife tried it and now she steals mine every morning.",
      name: 'Mark R., 34 — Austin, TX',
    },
    {
      title: "Wait, That's It?",
      body: "Not gonna lie — I expected it to taste like dirt. First sip and I literally said 'wait, that's it?' out loud. Smooth, rich, no weird aftertaste. I cancelled my Starbucks order the same week.",
      name: 'Jason T., 41 — Denver, CO',
    },
    {
      title: 'Clean, Solid Arabica',
      body: "I'm a black coffee guy. No sugar, no cream, no BS. If this tasted off, I'd know immediately. It doesn't. It's a clean, solid Arabica. The fact that it has all these adaptogens in it and you can't taste them? That's impressive.",
      name: 'David L., 52 — Nashville, TN',
    },
    {
      title: 'Zero Mushroom Taste',
      body: 'My biggest fear was the mushroom taste. Zero. None. It just tastes like a good cup of dark roast. I actually look forward to making it in the morning now — which is more than I can say about the Folgers I was drinking.',
      name: 'Chris M., 29 — Portland, OR',
    },
  ],
  Benefits: [
    {
      title: 'Brain Fog Is Gone',
      body: "Three weeks in and the brain fog is gone. I used to hit a wall at 2 PM every single day. Now I'm focused straight through to 5. My productivity at work has honestly never been better.",
      name: 'Ryan K., 47 — San Diego, CA',
    },
    {
      title: 'A Different Man',
      body: "I sleep better, I wake up sharper, and I don't crash anymore. I thought those were just 'getting older' things. Turns out it was just my coffee working against me. This one works WITH me.",
      name: 'Steve W., 55 — Charlotte, NC',
    },
    {
      title: 'She Noticed Before I Did',
      body: "First thing I noticed was my mood. I was less irritable, less on edge. My girlfriend noticed before I did — she said 'you seem calmer.' Week two, the bloating went down. Week three, I started sleeping through the night. One cup of coffee did all that.",
      name: 'Tyler B., 38 — Chicago, IL',
    },
    {
      title: 'Replaced Three Supplements',
      body: "I've spent hundreds on supplements trying to get my energy back. This replaced my morning coffee AND three of those supplements. Better energy, better focus, better sleep. I feel like I got five years back.",
      name: 'Brian H., 44 — Miami, FL',
    },
  ],
  Caffeine: [
    {
      title: 'One Cup, All Day',
      body: 'I was a 4-cup-a-day guy. Jittery by noon, crashed by 3. Switched to this — one cup, smooth energy all day. 100mg of caffeine plus L-Theanine is a game changer. No jitters, no crash, no anxiety. Just focus.',
      name: 'Matt S., 31 — Brooklyn, NY',
    },
    {
      title: 'My Apple Watch Stopped Yelling at Me',
      body: 'I work in tech. I used to mainline cold brew just to get through stand-ups. My heart rate was through the roof. This gives me the same mental clarity with half the caffeine and none of the side effects.',
      name: 'Kevin D., 36 — Seattle, WA',
    },
    {
      title: '100mg Is the Sweet Spot',
      body: '100mg is the sweet spot. Enough to wake you up, not enough to wreck you. I used to get palpitations from my third cup of regular coffee. With this, I can have two cups and feel great — calm, focused, zero shaking.',
      name: 'Andrew P., 42 — Dallas, TX',
    },
    {
      title: 'L-Theanine Is the Secret Weapon',
      body: "The L-Theanine is the secret weapon nobody talks about. I've taken it as a supplement before, but having it already built into my coffee? That's genius. Clean energy, no anxiety spike, no 2 PM crash. I'll never go back to regular coffee.",
      name: 'Jake F., 28 — Los Angeles, CA',
    },
  ],
  Testosterone: [
    {
      title: 'Free T Up 23%',
      body: "Got my bloodwork done before and after 90 days. My free T went up 23%. My doctor asked what I changed. I said 'my coffee.' He didn't believe me until I showed him the ingredient list. Tongkat Ali and Ashwagandha in a coffee — why didn't this exist sooner?",
      name: 'Greg N., 51 — Phoenix, AZ',
    },
    {
      title: 'My Body Finally Has What It Needs',
      body: "I'm 58. I was tired of feeling like a deflated version of myself. Two months on this and my wife says I'm a different man. More energy, more drive, the belly's going down. I'm not saying it's magic — I'm saying my body finally has the raw materials it needs.",
      name: 'Robert M., 58 — Atlanta, GA',
    },
    {
      title: 'Saved Me a Fortune and a Lot of Needles',
      body: "I was considering TRT. The needles, the clinic visits, the $300/month. My buddy told me to try this first. Eight weeks later — my energy's back, the man boobs are shrinking, and I actually want to go to the gym again.",
      name: 'Marcus J., 45 — Houston, TX',
    },
    {
      title: "My Grandkids Can't Keep Up With Me",
      body: "At my age, you accept that things slow down. But they don't have to stop. This coffee has Tongkat Ali, Shilajit, Zinc, D3 — everything I was already buying separately. My strength is coming back. My grandkids can't keep up with me anymore.",
      name: 'Tom C., 62 — Tampa, FL',
    },
  ],
};

const Stars = () => (
  <div
    style={{
      display: 'flex',
      gap: 4,
      justifyContent: 'center',
      marginBottom: 8,
    }}
  >
    {[...Array(5)].map((_, i) => (
      <span key={i} style={{ color: '#dca331', fontSize: 16 }}>
        ★
      </span>
    ))}
  </div>
);

export const Reviews = () => {
  const [active, setActive] = useState('Taste');
  const [ctaHover, setCtaHover] = useState(false);
  return (
    <section
      style={{
        background: '#0e0e0e',
        padding: '80px 24px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              marginBottom: 10,
            }}
          >
            <span style={{ color: '#dca331', fontSize: 18, letterSpacing: 2 }}>
              ★★★★★
            </span>
            <span
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}
            >
              Over 60,000 Five Star Reviews
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#fff',
              fontSize: 'clamp(2.4rem, 6vw, 4rem)',
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Read Our Reviews
          </h2>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 48,
          }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background: 'transparent',
                border: `1.5px solid ${active === cat ? '#dca331' : 'rgba(255,255,255,0.2)'}`,
                borderRadius: 100,
                padding: '12px 28px',
                color: active === cat ? '#dca331' : 'rgba(255,255,255,0.6)',
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 900,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Review cards */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          {reviews[active].map((r, i) => (
            <div
              key={`${active}-${i}`}
              style={{
                background: '#181818',
                border: '1px solid #1f1f1f',
                borderRadius: 16,
                padding: '32px 28px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                flex: '1 1 260px',
                maxWidth: 320,
              }}
            >
              <Stars />
              <p
                style={{
                  color: '#dca331',
                  fontWeight: 900,
                  fontSize: 13,
                  letterSpacing: 1,
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                {r.title}
              </p>
              <p
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: 14,
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                }}
              >
                {r.body}
              </p>
              <p
                style={{
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                {r.name}
              </p>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="flex flex-col items-center gap-3 mt-12">
          <a
            href="https://lp.ballsnbrains.com/preclick"
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            className={`inline-block bg-[#dca331] text-black font-sans font-black text-xs uppercase tracking-widest py-5 px-14 rounded-full no-underline transition-all duration-200 ${
              ctaHover
                ? 'scale-105 shadow-[0_0_60px_rgba(220,163,49,0.7)]'
                : 'shadow-[0_0_40px_rgba(220,163,49,0.5)]'
            }`}
          >
            Try It & Save 44%
          </a>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 14 14" width="14" height="14" fill="none">
              <circle cx="7" cy="7" r="6.5" stroke="#dca331" strokeWidth="1" />
              <polyline
                points="4,7 6,9.5 10,4.5"
                stroke="#dca331"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white/35 font-sans text-xs tracking-[1.5px] uppercase">
              365-Days Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
