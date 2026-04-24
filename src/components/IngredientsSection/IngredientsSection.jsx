import React, { useState } from 'react';

import tongkat from '../../assets/ingredients/tongkat.webp';
import shilajit from '../../assets/ingredients/shilajit.webp';
import zinc from '../../assets/ingredients/zinc.webp';
import ashwagandha from '../../assets/ingredients/ashwagandha.webp';
import vitaminD from '../../assets/ingredients/vitamind.webp';
import lionsMane from '../../assets/ingredients/lionsmane.webp';
import reishi from '../../assets/ingredients/reishi.webp';
import cordyceps from '../../assets/ingredients/cordyceps.webp';
import ltheanine from '../../assets/ingredients/ltheanine.webp';
import chaga from '../../assets/ingredients/chaga.webp';
import caffeine from '../../assets/ingredients/caffeine.webp';
import arabica from '../../assets/ingredients/arabica.webp';
import wallpaper from '../../assets/utils/black-wallpaper.webp';

const ingredients = [
  {
    name: 'Tongkat Ali LJ100®',
    dose: '300mg',
    benefit:
      'Increased testosterone by 37% and reduced cortisol by 16% in 4 weeks.',
    img: tongkat,
  },
  {
    name: 'Shilajit',
    dose: '250mg',
    benefit: 'Increased total testosterone by 20% in healthy men over 90 days.',
    img: shilajit,
  },
  {
    name: 'Zinc Glycinate',
    dose: '15mg',
    benefit:
      'Zinc supplementation nearly doubled serum testosterone in deficient elderly men.',
    img: zinc,
  },
  {
    name: 'Ashwagandha KSM-66®',
    dose: '300mg',
    benefit: 'Reduced cortisol levels by 27.9% in 60 days.',
    img: ashwagandha,
  },
  {
    name: 'Vitamin D',
    dose: '2,000 UI',
    benefit:
      'Men supplementing Vitamin D saw a 25% increase in total testosterone over 12 months.',
    img: vitaminD,
  },
  {
    name: "Lion's Mane",
    dose: '1,000mg',
    benefit:
      'Significant cognitive improvement in adults with mild cognitive impairment over 16 weeks.',
    img: lionsMane,
  },
  {
    name: 'Reishi',
    dose: '500mg',
    benefit: 'Shown to support sleep quality by modulating serotonin pathways.',
    img: reishi,
  },
  {
    name: 'Cordyceps Militaris',
    dose: '1,000mg',
    benefit:
      'Improved VO2max and increased time to exhaustion by 70 seconds in 3 weeks.',
    img: cordyceps,
  },
  {
    name: 'L-Theanine',
    dose: '100mg',
    benefit:
      'Combined with caffeine, improved attention accuracy and reduced mental fatigue.',
    img: ltheanine,
  },
  {
    name: 'Chaga',
    dose: '500mg',
    benefit:
      'Rich in polysaccharides with demonstrated antioxidant and immunomodulatory properties.',
    img: chaga,
  },
  {
    name: 'Caffeine',
    dose: '100mg',
    benefit:
      'Significantly improved attention, processing speed, and accuracy across 13 studies.',
    img: caffeine,
  },
  {
    name: 'Organic Arabica Coffee',
    dose: '50mg',
    benefit:
      'The base. Smooth flavor profile, low acidity. The ritual stays the same.',
    img: arabica,
  },
];

const badges = [
  'cGMP Certified Facility',
  'Hormone-Free',
  'Third-Party Tested',
  'Vegan',
  'Non-GMO',
  'Made in USA',
  'NO Fillers',
];

const IngredientsSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="py-20 px-6 relative"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* SEM overlay global — wallpaper aparece limpo */}

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <p className="text-orange-500 font-sans font-bold text-xs tracking-[4px] uppercase mb-3">
          Clinically Dosed + Effective
        </p>
        <h2 className="text-white font-serif text-4xl md:text-5xl font-bold leading-tight mb-5">
          12 Clinical-Dose Ingredients <br className="hidden md:block" /> in 1
          Cup
        </h2>
        <p className="text-white/50 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Industrial coffee floods your body with cortisol every morning.{' '}
          <span className="text-white/70">
            Cortisol suppresses testosterone.
          </span>
          <br />
          <span className="text-orange-400 font-semibold">
            We engineered a coffee that reverses this cycle.
          </span>
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {ingredients.map((ing, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`relative rounded-2xl overflow-hidden min-h-[180px] cursor-default transition-all duration-300
              ${hovered === i ? 'scale-[1.03] shadow-[0_0_28px_rgba(249,115,22,0.25)]' : ''}`}
          >
            {/* Background image do ingrediente */}
            <img
              src={ing.img}
              alt={ing.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay escuro só no card — ajuste o valor conforme necessário */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Gradient na base pra destacar o texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Content */}
            <div className="relative z-10 p-4 flex flex-col justify-between h-full min-h-[180px]">
              <div />
              <div>
                <p className="text-white font-serif font-bold text-base leading-tight mb-1">
                  {ing.name}
                </p>
                <p className="text-white/75 font-sans text-xs leading-relaxed mb-3">
                  {ing.benefit}
                </p>
                <span className="inline-block bg-white text-black font-sans font-bold text-xs px-3 py-1 rounded-full tracking-wider">
                  {ing.dose}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="relative z-10 max-w-5xl mx-auto mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
        {badges.map((b, i) => (
          <span
            key={i}
            className="text-white/50 font-sans text-xs font-semibold tracking-widest uppercase"
          >
            {b}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 text-center mt-12">
        <a
          href="https://lp.ballsnbrains.com/preclick"
          className="inline-block bg-[#dca331] hover:bg-orange-400 transition-colors text-white font-sans font-black text-sm uppercase tracking-widest py-5 px-16 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)]"
        >
          Try It Now →
        </a>
      </div>
    </section>
  );
};

export default IngredientsSection;
