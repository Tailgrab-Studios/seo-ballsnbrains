import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is Balls and Brains?',
    a: "Balls and Brains is the first testosterone-optimizing mushroom coffee specifically designed for men over 30. It combines premium Colombian coffee (100mg caffeine) with clinical doses of 11 functional ingredients—including Tongkat Ali, Fadogia, Ashwagandha, Lion's Mane, and adaptogens—to naturally raise your testosterone by 15-46% while providing sustained energy for 6-8 hours. It replaces both your morning coffee AND your supplement stack with one delicious ritual.",
  },
  {
    q: 'How is this different from regular coffee?',
    a: 'Regular coffee spikes cortisol by 20-30% per cup, which directly suppresses testosterone production and converts remaining T into estrogen. This creates the "Coffee-Cortisol Death Spiral" causing man boobs, belly fat, brain fog, and crashes. Balls and Brains delivers clean energy through MCT ketones + L-Theanine (no cortisol spike), while actively RAISING testosterone through Tongkat Ali + Fadogia, and LOWERING cortisol through Ashwagandha + Reishi. It\'s energy + hormone optimization in one product.',
  },
  {
    q: 'How is this different from RYZE or MUD\\WTR?',
    a: 'Great question. RYZE and MUD\\WTR are "wellness" mushroom coffees marketed to everyone. They reduce coffee side effects but don\'t optimize testosterone. Balls and Brains is the FIRST mushroom coffee designed specifically for men\'s hormonal health. We include clinical doses of Tongkat Ali (15-46% T increase), Fadogia (testicular optimization), Ashwagandha (27% cortisol reduction), and aromatase blockers—none of which are in generic mushroom coffees. Plus, it actually tastes like premium coffee, not dirt.',
  },
  {
    q: 'When will I see results?',
    a: 'Week 1: Immediate smooth energy, no jitters or crash, mental clarity improves, stress more manageable. Week 4: Morning wood returns, libido increases, faster workout recovery, strength gains noticeable, mood stabilizes. Week 8: Visible body composition changes (leaner, more muscle), testosterone increases 15-46%, all-day sustained energy, brain fog gone. Week 12+: Full hormonal optimization achieved, physical transformation visible, peak performance sustained. Most men feel the difference in Week 1 and see measurable changes by Week 8.',
  },
  {
    q: 'Does it really taste good?',
    a: 'Yes. We spent 11 formulation rounds getting this right because most mushroom coffees taste terrible. We use premium Colombian Arabica as the base (not cheap robusta), balanced the mushroom extracts so they\'re functional but not overpowering, and added natural flavors. Our customers say: "Tastes like real coffee, not mushrooms" and "Way better than RYZE. Not even close." If you don\'t love the taste, you get a full refund. Even if you drink the entire container.',
  },
  {
    q: 'How much caffeine does it have?',
    a: "100mg per serving—about 1/3 of regular coffee (which typically has 200-300mg). But here's the key: The 100mg is paired with L-Theanine (calm focus), MCT Oil (sustained ketone energy), and Cordyceps (cellular ATP). This creates SUSTAINED energy for 6-8 hours without the cortisol spike or crash. Most guys find 100mg in Balls and Brains gives them MORE functional energy than 300mg of regular coffee—because it's not being canceled out by cortisol suppression.",
  },
  {
    q: 'Will I go through caffeine withdrawal?',
    a: "Maybe mild symptoms for 2-3 days if you're currently at 400mg+ daily. Here's how to transition smoothly: Week 1: Balls and Brains in the morning, keep one regular coffee in afternoon if needed. Week 2: Balls and Brains morning, maybe half-caff afternoon. Week 3+: Just Balls and Brains—you won't need anything else. Within 3 weeks, you'll have MORE energy on LESS caffeine. And your testosterone will thank you.",
  },
  {
    q: 'Is this safe? Will it mess with my hormones?',
    a: "This is testosterone SUPPORT, not testosterone REPLACEMENT. We're not putting synthetic hormones in your body or shutting down natural production. We're supporting your body's natural ability to produce testosterone by lowering the cortisol blocking your HPG axis, providing nutrients needed for T synthesis, and amplifying the brain-to-testes signal. Every ingredient has decades (some centuries) of traditional use. Third-party tested for purity and banned substances. Manufactured in FDA-registered, cGMP-certified facilities. Informed-Sport certified for professional athletes.",
  },
  {
    q: "Can I take this if I'm already on TRT?",
    a: "Consult your doctor, but generally yes. Many TRT patients use this for the cognitive benefits (Lion's Mane, L-Theanine), stress management (Ashwagandha), and clean energy. Just discuss with your prescribing physician first.",
  },
  {
    q: 'Can I use this as a pre-workout?',
    a: 'Absolutely. Many guys drink it 30-45 minutes before training. The Cordyceps improves VO2 max and cellular ATP, MCT provides fat-burning energy, and the adaptogens support performance. You get clean energy without the jitters of traditional pre-workouts.',
  },
  {
    q: 'Do I need to cycle off?',
    a: 'No. This supports natural production, so there\'s no need to cycle. You can use it daily indefinitely. If you want to do a "Reset Week" every 3-4 months (like our founder does with all supplements), that\'s fine but not required.',
  },
  {
    q: 'How do I prepare it?',
    a: 'Super simple: Add 1 scoop to 8-12oz hot water. Stir or use a frother for 10 seconds. Enjoy. You can also add to cold water and shake, blend with ice for iced coffee, or mix with your favorite milk/creamer. Takes 30 seconds total.',
  },
  {
    q: "What's your refund policy?",
    a: "365-Day, 100% Money-Back Guarantee. Try Balls and Brains for 365 days (a whole year). If you don't feel dramatically better energy, focus, and vitality—if you don't see improvements in your workouts and body composition—We don't deserve your money. Just email us. We'll refund every penny. No questions asked. No return required. You can drink the entire container and still get your money back.",
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }) => (
  <div
    className="border border-[#1f1f1f] rounded-2xl overflow-hidden transition-all duration-200"
    style={{ background: isOpen ? '#161616' : '#111' }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-7 py-6 text-left gap-4"
    >
      <span className="text-white font-sans font-black text-base md:text-lg leading-snug">
        {q}
      </span>
      <span
        className="text-[#dca331] text-xl flex-shrink-0 transition-transform duration-200"
        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        ›
      </span>
    </button>

    {isOpen && (
      <div className="px-7 pb-6">
        <div className="border-t border-[#1f1f1f] pt-5">
          <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    )}
  </div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = i => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#0e0e0e] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">Your Questions </span>
            <span className="text-[#dca331]">Answered</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
