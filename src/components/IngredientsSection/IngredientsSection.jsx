import React, { useState } from 'react';

// ============================================================
// IMAGES — substitua pelos seus imports reais
// ============================================================
import arabica from '../../assets/ingredients/arabica.webp';
import lionsMane from '../../assets/ingredients/lionsmane.webp';
import coconutFat from '../../assets/ingredients/coconut-fat.webp';
import tongkat from '../../assets/ingredients/tongkat.webp';
import ashwagandha from '../../assets/ingredients/ashwagandha.webp';
import cordyceps from '../../assets/ingredients/cordyceps.webp';
import ltheanine from '../../assets/ingredients/L-Theanine.webp';
import coffeeFlavor from '../../assets/ingredients/coffee-flavor.webp';
import zinc from '../../assets/ingredients/zinc.webp';
import acaciaGum from '../../assets/ingredients/acacia-gum.webp';
import shilajit from '../../assets/ingredients/shilajit.webp';
import reishi from '../../assets/ingredients/reishi.webp';
import chaga from '../../assets/ingredients/chaga.webp';
import sucralose from '../../assets/ingredients/sucralose.webp';
import caffeine from '../../assets/ingredients/caffeine.webp';
import vitaminD from '../../assets/ingredients/vitamind.webp';
import wallpaper from '../../assets/utils/black-wallpaper.webp';

// ============================================================
// DADOS — exatamente a tabela fornecida (ordem e doses)
// ============================================================
const ingredients = [
  {
    name: 'Organic Instant Coffee Powder',
    subtitle: 'Arabica',
    dose: '1,000mg',
    percent: '26.17%',
    benefit:
      'The base. Smooth Arabica profile, low acidity — your daily ritual, upgraded.',
    img: arabica,
  },
  {
    name: "Organic Lion's Mane Extract",
    subtitle: 'Hericium erinaceus',
    dose: '800mg',
    percent: '18.16%',
    benefit:
      'Supports cognitive performance and focus in adults over 16 weeks of use.',
    img: lionsMane,
  },
  {
    name: 'Coconut Fat Powder',
    subtitle: 'MCT source',
    dose: '750.7mg',
    percent: '6.64%',
    benefit:
      'Delivers fast-acting energy via medium-chain triglycerides — fuel without the crash.',
    img: coconutFat,
  },
  {
    name: 'Tongkat Ali Extract',
    subtitle: 'Eurycoma longifolia',
    dose: '300mg',
    percent: '9.00%',
    benefit:
      'Increased testosterone by 37% and reduced cortisol by 16% in 4 weeks.',
    img: tongkat,
  },
  {
    name: 'Ashwagandha Root Extract',
    subtitle: 'Withania somnifera',
    dose: '300mg',
    percent: '3.87%',
    benefit: 'Reduced cortisol levels by 27.9% over 60 days of use.',
    img: ashwagandha,
  },
  {
    name: 'Cordyceps Militaris Extract',
    subtitle: 'Mushroom extract',
    dose: '250mg',
    percent: '3.46%',
    benefit:
      'Improved VO2max and added 70 seconds to time-to-exhaustion in 3 weeks.',
    img: cordyceps,
  },
  {
    name: 'L-Theanine',
    subtitle: 'Amino acid',
    dose: '200mg',
    percent: '5.18%',
    benefit:
      'Paired with caffeine, improves attention accuracy and reduces mental fatigue.',
    img: ltheanine,
  },
  {
    name: 'Organic Coffee Type Flavor',
    subtitle: 'Natural flavoring',
    dose: '200mg',
    percent: '4.02%',
    benefit:
      'Reinforces the rich, roasted coffee profile — no artificial aftertaste.',
    img: coffeeFlavor,
  },
  {
    name: 'Zinc Glycinate',
    subtitle: 'Chelated mineral',
    dose: '30mg',
    percent: '2.22%',
    benefit:
      'Supplementation nearly doubled serum testosterone in deficient men.',
    img: zinc,
  },
  {
    name: 'Acacia Gum',
    subtitle: 'Soluble fiber',
    dose: '150mg',
    percent: '1.62%',
    benefit:
      'Supports gut health and improves mouthfeel — a cleaner, smoother cup.',
    img: acaciaGum,
  },
  {
    name: 'Shilajit Extract',
    subtitle: 'Mineral resin',
    dose: '100mg',
    percent: '5.84%',
    benefit: 'Increased total testosterone by 20% in healthy men over 90 days.',
    img: shilajit,
  },
  {
    name: 'Organic Reishi Extract',
    subtitle: 'Ganoderma lucidum',
    dose: '100mg',
    percent: '2.23%',
    benefit:
      'Supports sleep quality and stress modulation through serotonin pathways.',
    img: reishi,
  },
  {
    name: 'Organic Chaga Extract',
    subtitle: 'Inonotus obliquus',
    dose: '100mg',
    percent: '1.12%',
    benefit:
      'Rich in polysaccharides with antioxidant and immune-supporting properties.',
    img: chaga,
  },
  {
    name: 'Sucralose',
    subtitle: 'Zero-calorie sweetener',
    dose: '100mg',
    percent: '3.23%',
    benefit:
      'Adds subtle sweetness — no sugar, no calories, no blood-sugar spike.',
    img: sucralose,
  },
  {
    name: 'Caffeine',
    subtitle: 'From coffee bean',
    dose: '70mg',
    percent: '3.15%',
    benefit:
      'Improves attention, processing speed, and accuracy across 13 clinical studies.',
    img: caffeine,
  },
  {
    name: 'Vitamin D3',
    subtitle: 'Cholecalciferol',
    dose: '50mcg',
    percent: '0.56%',
    benefit:
      'Men supplementing Vitamin D saw a 25% increase in total testosterone over 12 months.',
    img: vitaminD,
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
      id="ingredients"
      className="py-20 px-6 relative"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Header */}
      <div className="relative z-10 text-center mb-14 max-w-3xl mx-auto">
        <p className="text-[#dca331] font-sans font-bold text-xs tracking-[4px] uppercase mb-4">
          Full Transparency
        </p>
        <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
          18 Clinical-Dose Ingredients{' '}
          <em className="text-[#dca331] not-italic">in 1 Cup</em>
        </h2>
        <p className="text-white/60 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Engineered to lower cortisol, boost T-levels, and fuel your day —
          without the crash. Every dose disclosed.
        </p>
      </div>

      {/* Grid de ingredientes */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {ingredients.map((ing, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`flex flex-row items-center gap-0 rounded-2xl overflow-hidden bg-[#111] border border-[#1f1f1f] cursor-default transition-all duration-300 ${
              hovered === i
                ? 'scale-[1.02] shadow-[0_0_24px_rgba(249,115,22,0.2)] border-[#dca331]/30'
                : ''
            }`}
          >
            {/* Imagem — lado esquerdo */}
            <div className="w-32 h-32 shrink-0 overflow-hidden flex items-center justify-center p-2">
              <img
                src={ing.img}
                alt={ing.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Texto — lado direito */}
            <div className="flex-1 px-4 py-4 flex flex-col gap-1.5 min-w-0">
              <p className="text-white font-serif font-bold text-sm leading-tight">
                {ing.name}
              </p>
              <p className="text-white/45 font-sans text-[10px] italic leading-snug">
                {ing.subtitle}
              </p>
              <span className="mt-1 inline-block bg-[#dca331]/15 border border-[#dca331]/40 text-[#dca331] font-sans font-bold text-[11px] px-2.5 py-0.5 rounded-full w-fit tracking-wide">
                {ing.dose}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Badges de confiança */}
      <div className="relative z-10 max-w-5xl mx-auto mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3">
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
          href="#offer"
          className="inline-block bg-[#dca331] hover:bg-orange-400 transition-colors text-white font-sans font-black text-sm uppercase tracking-widest py-5 px-16 rounded-xl shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)]"
        >
          Try It Now →
        </a>
      </div>
    </section>
  );
};

export default IngredientsSection;
