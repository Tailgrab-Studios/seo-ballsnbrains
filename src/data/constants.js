const _cfg = (typeof window !== 'undefined' && window.__BB_CONFIG__) || {};

export const CHECKOUT = _cfg.checkout ?? {
  sub: [
    'https://links.ballsnbrains.com/go/1-mushroom-coffe-tmc-subscribe-adv8-mlk3sruu/?referrer=Organic',
    'https://links.ballsnbrains.com/go/2-mushroom-coffe-tmc-subscribe-adv8-mlk3t4rf/?referrer=Organic',
    'https://links.ballsnbrains.com/go/3-mushroom-coffe-tmc-subscribe-adv8-mlk3tm4w/?referrer=Organic',
  ],
  one: [
    'https://links.ballsnbrains.com/go/1-mushroom-coffe-tmc-onetime-adv8-mlk3rio9/?referrer=Organic',
    'https://links.ballsnbrains.com/go/2-mushroom-coffe-tmc-onetime-adv8-mlk3rwr5/?referrer=Organic',
    'https://links.ballsnbrains.com/go/3-mushroom-coffe-tmc-onetime-adv8-mlk3sac9/?referrer=Organic',
  ],
};

export const CART_POPUP = {
  sub: {
    subtitlePrice: '$69!',
    price: '$69',
    old: '$138',
    perPouch: '$34.50',
    discount: ['50%', 'OFF'],
    cta: 'YES! Get 2 Kits for $69',
    purchaseLink: _cfg.popup?.sub ?? 'https://links.ballsnbrains.com/go/1-mushroom-coffe-tmc-popup-subscribe-adv7-mkw8bv65/?referrer=Organic',
  },
  one: {
    subtitlePrice: '$89!',
    price: '$89',
    old: '$138',
    perPouch: '$44.50',
    discount: ['36%', 'OFF'],
    cta: 'YES! Get 2 Kits for $89',
    purchaseLink: _cfg.popup?.one ?? 'https://links.ballsnbrains.com/go/1-mushroom-coffe-tmc-popup-onetime-adv7-mkw8b3xn',
  },
};

export const PLANS_DATA = [
  {
    name: '1 Pouch',
    sub: { save: 'Save 29%', old: '$69.00', price: '$49.00', perUnit: null, totalLabel: null, cartTotal: '$49.00' },
    one: { save: 'Save 0%', old: null, price: '$69.00', perUnit: null, totalLabel: null, cartTotal: '$69.00' },
  },
  {
    name: '2 Pouches',
    sub: { save: 'Save 31%', old: '$138.00', price: '$44.00', perUnit: '/ Pouch', totalLabel: 'Total: $88.00', cartTotal: '$88.00' },
    one: { save: 'Save 7%', old: '$138.00', price: '$64.00', perUnit: '/ Pouch', totalLabel: 'Total: $128.00', cartTotal: '$128.00' },
  },
  {
    name: '3 Pouches',
    sub: { save: 'Save 34%', old: '$207.00', price: '$39.00', perUnit: '/ Pouch', totalLabel: 'Total: $117.00', cartTotal: '$117.00' },
    one: { save: 'Save 15%', old: '$207.00', price: '$59.00', perUnit: '/ Pouch', totalLabel: 'Total: $177.00', cartTotal: '$177.00' },
  },
];

export const PRODUCT_BENEFITS = [
  'Raises testosterone 15–46% naturally',
  'Sustained 6–8 hour energy (no crash)',
  'Blocks testosterone-to-estrogen conversion',
  'Tastes like premium coffee',
];

export const BONUSES_DATA = [
  { name: 'Manhood' },
  { name: 'Testosterone Boost' },
  { name: 'Longer Time in Bed' },
  { name: 'Energy' },
];

export const INGREDIENTS = [
  ['Tongkat Ali LJ100®', '300 mg'],
  ['Shilajit', '250 mg'],
  ['Zinc Glycinate', '15 mg'],
  ['Ashwagandha KSM-66®', '300 mg'],
  ['Cholecalciferol (Vitamin D)', '2,000 IU'],
  ["Lion's Mane", '1,000 mg'],
  ['Reishi', '500 mg'],
  ['Cordyceps Militaris', '1,000 mg'],
  ['L-Theanine', '100 mg'],
  ['Chaga', '500 mg'],
  ['Caffeine', '100 mg'],
  ['Organic Arabica Coffee', '50 mg'],
];

export const FAQS = [
  {
    q: 'What is Balls and Brains?',
    a: "Balls and Brains is the first testosterone-optimizing mushroom coffee designed for men over 30. It combines premium Colombian coffee (100mg caffeine) with clinical doses of 11 functional ingredients — including Tongkat Ali, Ashwagandha, and Lion's Mane — to naturally support testosterone while providing sustained energy for 6–8 hours.",
  },
  {
    q: 'When will I see results?',
    a: 'Most users notice cleaner energy and reduced afternoon crash within the first week. Testosterone-support effects typically build over 30–90 days as ingredients reach effective concentration.',
  },
  {
    q: 'How do I prepare it?',
    a: 'One scoop in 8–12oz of hot water. Stir or froth. Drink black or with your preferred milk. That\'s it.',
  },
  {
    q: "What's your refund policy?",
    a: '365-day money-back guarantee. If you\'re not satisfied for any reason, contact support@ballsnbrains.com and we\'ll refund every penny. No questions asked.',
  },
  {
    q: 'Is this safe to use with my current medications?',
    a: 'Balls & Brains uses natural, clinically-studied ingredients. However, we recommend consulting your physician if you are taking medications, especially those that affect hormone levels.',
  },
  {
    q: 'Can I drink it like regular coffee?',
    a: 'Yes. One scoop per 8–12oz of hot water. You can drink it black, with your preferred milk, or with sweetener. It tastes like smooth, premium coffee.',
  },
  {
    q: 'How long does one pouch last?',
    a: 'One pouch contains 30 servings — a full 30-day supply when taken once per day.',
  },
  {
    q: 'What is the shipping timeline?',
    a: 'Orders ship within 1–2 business days from our US facility. Standard delivery is 3–5 business days. Express shipping is available at checkout.',
  },
];

export const TRUST_DATA = [
  { id: 'shield', title: 'Money-Back Guarantee', sub: '365-day, no questions asked' },
  { id: 'lock', title: 'Secure Checkout', sub: '256-bit SSL encrypted' },
  { id: 'truck', title: 'Fast Shipping', sub: 'Delivered in 3–5 days' },
];

export const LEVEL2_CORTISOL = [
  ['Ashwagandha KSM-66 (300mg)', 'Reduces cortisol by 27.9% in 60 days (clinically proven)'],
  ['Reishi Mushroom (500mg)', 'Calms HPA axis, improves sleep quality, lowers chronic stress'],
];

export const LEVEL2_TESTO = [
  ['Tongkat Ali LJ100 (300mg)', 'Increases total testosterone 15–37% and FREE testosterone up to 46% in 8 weeks'],
  ['Fadogia Agrestis (600mg)', 'Enhances luteinizing hormone production, makes testes more sensitive to testosterone signals'],
  ['Zinc (15mg) + Vitamin D3 (2000 IU) + Shilajit (250mg)', 'Essential cofactors for testosterone synthesis'],
];

export const LEVEL3_INHIBITORS = [
  ['DIM (from cruciferous vegetables)', 'Directly blocks aromatase enzyme'],
  ['Chaga Mushroom (500mg)', 'Powerful antioxidant with additional aromatase inhibition'],
  ['Cordyceps Militaris (1000mg)', 'Supports testosterone while preventing conversion'],
];

export const BONUS_STACK = [
  ["Lion's Mane (1000mg)", 'Stimulates Nerve Growth Factor (NGF), improves memory and focus'],
  ['Cordyceps (1000mg)', 'Increases cellular ATP production, boosts mental and physical energy'],
  ['L-Theanine (100mg)', 'Creates calm, focused alertness'],
];

export const FOUNDER_POINTS = [
  'Why your morning coffee is destroying your testosterone',
  'The "Hormonal Seesaw" mechanism doctors never mention',
  'How I increased my testosterone 91% in 8 weeks without TRT',
];

export const HEALTH_ISSUES = [
  ['Low Testosterone', "Balls & Brains uses clinical doses of Tongkat Ali LJ100 and Fadogia Agrestis to reactivate your HPG axis and amplify testosterone production by 15–46%. Ashwagandha KSM-66 removes the cortisol brake that's been suppressing your natural production."],
  ['Low Energy & Afternoon Crashes', 'By replacing high-cortisol coffee with clean energy from MCT Oil, L-Theanine, and 100mg caffeine, you get sustained 6–8 hour energy without the spike-and-crash cycle. Cordyceps enhances cellular ATP production for real mitochondrial energy.'],
  ['Brain Fog & Poor Focus', "Lion's Mane stimulates Nerve Growth Factor to improve memory and cognitive function. L-Theanine creates calm, focused alertness. The combination eliminates brain fog and sharpens mental performance all day."],
  ['Low Libido & Sexual Performance', 'When testosterone rises and estrogen normalizes, sex drive returns naturally. 89% of users report improved libido within 4–6 weeks. Morning wood returns as a visible sign of hormonal optimization.'],
  ['Dad Bod & Stubborn Belly Fat', 'High cortisol causes belly fat storage and testosterone-to-estrogen conversion creates "soft" body composition. By lowering cortisol and raising testosterone, your body naturally burns fat and builds lean muscle more easily.'],
  ['Man Boobs (Gynecomastia)', 'Excess estrogen from testosterone conversion causes breast tissue growth in men. DIM and Chaga block the aromatase enzyme responsible, while raising testosterone reverses the feminizing effects.'],
  ['Stress & Irritability', "Ashwagandha and Reishi calm your stress response and lower cortisol by up to 27.9%. You'll feel calmer, more in control, and emotionally stable, even during high-pressure situations."],
];

export const PRICE_COMPARE = [
  ['Tongkat Ali supplement', '(clinical dose): $40–60/month'],
  ['Ashwagandha KSM-66:', '$30–40/month'],
  ['Fadogia Agrestis:', '$35–45/month'],
  ["Mushroom complex (Lion's Mane, Cordyceps, Reishi, Chaga):", '$40–50/month'],
  ['Pre-workout or energy supplement:', '$40–50/month'],
  ['Premium coffee:', '$15–20/month'],
];

export const RESULTS_STATS_TEXT = [
  'of users reported noticeable energy improvement within the first week (no 2pm crash).',
  'of users experienced improved mental clarity and focus within 14 days.',
  'of users reported return of morning wood and improved libido within 4 weeks.',
  'of users who retested blood work showed measurable testosterone increases after 8 weeks (average increase: 32%).',
  'of users reported visible body composition changes (leaner waist, more muscle definition) within 8–10 weeks.',
];

export const COMPARE_ROWS = [
  ['Optimizes Testosterone', ['ok', 'Yes (15–46% increase)'], ['no', 'No (suppresses it)'], ['no', 'No'], ['warn', 'Sometimes (if taken separately)']],
  ['Lowers Cortisol', ['ok', 'Yes (up to 27.9%)'], ['no', 'No (spikes it 20–30%)'], ['warn', 'Minimal'], ['warn', 'Only if Ashwagandha included']],
  ['Sustained Energy (6–8 hrs)', ['ok', 'Yes'], ['no', 'No (2–3 hr crash)'], ['warn', 'Gentler but not optimized'], ['no', 'No energy benefit']],
  ['Clinical Doses', ['ok', 'Yes'], ['na', 'N/A'], ['no', 'Often underdosed'], ['warn', 'Varies by brand']],
  ['Tastes Great', ['ok', 'Premium coffee taste'], ['ok', 'Yes'], ['no', 'Often earthy/bitter'], ['warn', 'Pills (no taste)']],
  ['365-Day Guarantee', ['ok', 'Yes'], ['na', 'N/A'], ['warn', 'Varies'], ['warn', 'Varies']],
  ['Replaces Multiple Products', ['ok', 'Yes (coffee + 5–10 supplements)'], ['no', 'No'], ['warn', 'Replaces coffee only'], ['no', 'No (still need coffee)']],
];

export const REVIEW_DIST = [
  [5, 1643],
  [4, 148],
  [3, 37],
  [2, 11],
  [1, 8],
];

export const REVIEW_TOTAL = 1847;

export const PDP_REVIEWS = [
  {
    initials: 'MD',
    name: 'Mike_Denver',
    stars: 5,
    title: 'Works, but be realistic with expectations',
    helpful: 142,
    body: "Writing this after 10 weeks so hopefully this helps someone decide. I'm a 42-year-old software engineer so yeah, desk job = terrible posture, high stress, too much coffee.\nPROS:",
  },
  {
    initials: 'JM',
    name: 'Jennifer_M',
    stars: 5,
    title: "Bought this for my husband and he's a different person",
    helpful: 89,
    body: 'My husband is 46 and has been struggling with low energy and low sex drive for 2+ years. He tried testosterone pills, nothing worked. I found this and convinced him to try it.\nWeek 1: He stopped complaining about being tired all the time. Week 3: He initiated intimacy for the first time in months (and everything worked great!). Week 8: He looks leaner, more energized, and honestly more confident.',
  },
  {
    initials: 'JJ',
    name: 'Jess_J',
    stars: 5,
    title: 'Skeptical engineer approved',
    helpful: 67,
    body: 'I research EVERYTHING before buying. Read all the studies on Tongkat Ali, Ashwagandha, Fadogia. The doses in this check out—these are actual clinical doses, not pixie dust.\nBeen using for 12 weeks. Testosterone went from 410 to 695. Libido is back. Energy is sustained all day. Recovery from workouts is way faster.',
  },
  {
    initials: 'GC',
    name: 'George_C',
    stars: 4,
    title: 'Good product, slightly expensive',
    helpful: 53,
    body: 'Works as advertised. Energy is great, focus is sharp, libido improved noticeably. Lost about 12 pounds of belly fat in 8 weeks without changing my diet.\nOnly giving 4 stars because $50/month feels steep compared to regular coffee. But then again, I was spending $40/month on separate Tongkat Ali and Ashwagandha anyway, so it actually saves money.',
  },
  {
    initials: 'GJ',
    name: 'Gabriel_J',
    stars: 5,
    title: 'Avoided TRT thanks to this',
    helpful: 201,
    body: 'My endocrinologist wanted me on testosterone replacement at age 44. I was at 335 ng/dL. I asked if I could try natural optimization first. He said fine, retest in 3 months.\nBought the 3-month supply. Drank it every morning. Tracked everything.',
  },
];
