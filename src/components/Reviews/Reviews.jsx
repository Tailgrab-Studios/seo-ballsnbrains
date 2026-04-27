import React, { useState } from 'react';
import wallpaper from '../../assets/background/background-black.webp';

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
  <div className="flex gap-1 justify-center mb-1">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-[#dca331] text-base">★</span>
    ))}
  </div>
);

export const Reviews = () => {
  const [active, setActive] = useState('Taste');
  const [mobileIdx, setMobileIdx] = useState(0);
  const [ctaHover, setCtaHover] = useState(false);

  const handleCategory = cat => {
    setActive(cat);
    setMobileIdx(0);
  };

  const currentReviews = reviews[active];
  const mobilePrev = () => setMobileIdx(i => (i === 0 ? currentReviews.length - 1 : i - 1));
  const mobileNext = () => setMobileIdx(i => (i === currentReviews.length - 1 ? 0 : i + 1));

  const ReviewCard = ({ r }) => (
    <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col gap-3 text-center h-full">
      <Stars />
      <p className="text-[#dca331] font-sans font-black text-xs uppercase tracking-[1.5px] leading-snug">
        {r.title}
      </p>
      <p className="text-white/65 font-sans text-sm leading-relaxed flex-1">
        {r.body}
      </p>
      <div className="pt-3 border-t border-white/10 flex flex-col gap-1">
        <p className="text-white/35 font-sans text-[10px] font-bold tracking-[2px] uppercase">
          {r.name}
        </p>
        <span className="text-white/25 font-sans text-[10px] border border-white/15 rounded px-2 py-0.5 w-fit mx-auto">
          Verified Buyer
        </span>
      </div>
    </div>
  );

  return (
    <section
      className="relative py-20 px-6"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#dca331] text-lg tracking-wider">★★★★★</span>
            <span className="text-white/40 font-sans text-xs font-bold tracking-[3px] uppercase">
              Over 60,000 Five Star Reviews
            </span>
          </div>
          <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Read Our Reviews
          </h2>
        </div>

        {/* Tabs — scroll horizontal no mobile, centralizado no desktop */}
        <div className="relative">
          {/* Fade nas bordas — só mobile */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 md:hidden"
            style={{ background: 'linear-gradient(to right, rgba(7,7,7,0.9), transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 md:hidden"
            style={{ background: 'linear-gradient(to left, rgba(7,7,7,0.9), transparent)' }} />

          <div className="flex overflow-x-auto md:justify-center gap-3 md:flex-wrap"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`font-sans font-black text-xs uppercase tracking-[2px] px-6 py-3 rounded-full border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  active === cat
                    ? 'bg-[#dca331] border-[#dca331] text-white'
                    : 'bg-transparent border-white/20 text-white/55 hover:border-white/40 hover:text-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile — carrossel 1 card + setas */}
        <div className="flex flex-col gap-4 md:hidden">
          <ReviewCard r={currentReviews[mobileIdx]} />
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={mobilePrev}
              className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#dca331]/50 flex items-center justify-center text-[#dca331] text-2xl shadow-[0_0_14px_rgba(220,163,49,0.3)] active:bg-[#dca331] active:text-white transition-all"
            >
              ‹
            </button>
            {/* Dots */}
            <div className="flex gap-2">
              {currentReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIdx(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === mobileIdx
                      ? 'w-5 h-2 bg-[#dca331]'
                      : 'w-2 h-2 bg-white/25'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={mobileNext}
              className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#dca331]/50 flex items-center justify-center text-[#dca331] text-2xl shadow-[0_0_14px_rgba(220,163,49,0.3)] active:bg-[#dca331] active:text-white transition-all"
            >
              ›
            </button>
          </div>
        </div>

        {/* Desktop — grid 4 colunas */}
        <div className="hidden md:grid md:grid-cols-4 gap-4">
          {currentReviews.map((r, i) => (
            <ReviewCard key={`${active}-${i}`} r={r} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
