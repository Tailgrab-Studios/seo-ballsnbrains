import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is Balls and Brains?',
    a: "Balls and Brains is the first testosterone-optimizing mushroom coffee specifically designed for men over 30. It combines premium Colombian coffee (100mg caffeine) with clinical doses of 11 functional ingredients—including Tongkat Ali, Fadogia, Ashwagandha, Lion's Mane, and adaptogens—to naturally raise your testosterone by 15-46% while providing sustained energy for 6-8 hours. It replaces both your morning coffee AND your supplement stack with one delicious ritual.",
  },
  {
    q: 'Who is Balls & Brains for?',
    a: 'Men over 30 who feel their energy, drive, and performance declining. If you rely on 3+ cups of coffee to function, skip workouts because you feel drained, or notice belly fat increasing and muscle decreasing — this was designed for you.',
  },
  {
    q: 'How is this different from RYZE or MUD\\WTR?',
    a: "RYZE and MUD\\WTR are wellness mushroom coffees marketed to everyone. They reduce coffee side effects but don't optimize testosterone. Balls and Brains is the FIRST mushroom coffee designed specifically for men's hormonal health, with clinical doses of Tongkat Ali, Ashwagandha, and Shilajit.",
  },
  {
    q: 'When will I see results?',
    a: 'Week 1: Immediate smooth energy, no jitters or crash. Week 4: Morning wood returns, libido increases, faster workout recovery. Week 8: Visible body composition changes, testosterone increases 15-46%. Most men feel the difference in Week 1.',
  },
  {
    q: 'How do I prepare it?',
    a: 'Super simple: Add 1 scoop to 8-12oz hot water. Stir or use a frother for 10 seconds. Enjoy. You can also blend with ice for iced coffee, or mix with your favorite milk/creamer. Takes 30 seconds total.',
  },
  {
    q: 'Does it really taste good?',
    a: "Yes. We spent 11 formulation rounds getting this right. We use premium Colombian Arabica as the base, balanced the mushroom extracts so they're functional but not overpowering. Our customers say: 'Tastes like real coffee, not mushrooms.'",
  },
  {
    q: 'How much caffeine does it have?',
    a: '100mg per serving—about 1/3 of regular coffee. The 100mg is paired with L-Theanine (calm focus) and Cordyceps (cellular ATP). This creates SUSTAINED energy for 6-8 hours without the cortisol spike or crash.',
  },
  {
    q: 'Will I go through caffeine withdrawal?',
    a: "Maybe mild symptoms for 2-3 days if you're at 400mg+ daily. Week 1: Keep one regular coffee in afternoon if needed. Week 2: Maybe half-caff afternoon. Week 3+: Just Balls and Brains — you won't need anything else.",
  },
  {
    q: 'Is this safe? Will it mess with my hormones?',
    a: "This is testosterone SUPPORT, not replacement. We're supporting your body's natural ability to produce testosterone. Every ingredient has decades of traditional use. Third-party tested, manufactured in FDA-registered, cGMP-certified facilities.",
  },
  {
    q: "Can I take this if I'm already on TRT?",
    a: "Consult your doctor, but generally yes. Many TRT patients use this for the cognitive benefits (Lion's Mane, L-Theanine), stress management (Ashwagandha), and clean energy. Discuss with your prescribing physician first.",
  },
  {
    q: 'Can I use this as a pre-workout?',
    a: 'Absolutely. Many guys drink it 30-45 minutes before training. The Cordyceps improves VO2 max and cellular ATP, MCT provides fat-burning energy, and the adaptogens support performance without jitters.',
  },
  {
    q: 'Do I need to cycle off?',
    a: "No. This supports natural production, so there's no need to cycle. You can use it daily indefinitely.",
  },
  {
    q: "What's your refund policy?",
    a: "365-Day, 100% Money-Back Guarantee. Try Balls and Brains for 365 days. If you don't feel dramatically better — just email us. We'll refund every penny. No questions asked. No return required. You can drink the entire container and still get your money back.",
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }) => (
  <div
    className="border border-[#1f1f1f] rounded-2xl overflow-hidden transition-all duration-200"
    style={{ background: isOpen ? '#161616' : '#111' }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
    >
      <span className="text-white font-sans font-black text-sm md:text-base leading-snug">
        {q}
      </span>
      <span
        className="text-[#dca331] text-xl flex-shrink-0 transition-transform duration-200"
        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
      >
        +
      </span>
    </button>

    {isOpen && (
      <div className="px-6 pb-5">
        <div className="border-t border-[#1f1f1f] pt-4">
          <p className="text-white/60 font-sans text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    )}
  </div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = i => setOpenIndex(openIndex === i ? null : i);

  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  return (
    <section className="bg-[#0e0e0e] py-20 px-6" id="faq">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two-column accordion */}
        <div className="grid md:grid-cols-2 gap-3">
          {/* Left column */}
          <div className="flex flex-col gap-3">
            {leftFaqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            {rightFaqs.map((faq, i) => (
              <FAQItem
                key={half + i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === half + i}
                onToggle={() => toggle(half + i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
