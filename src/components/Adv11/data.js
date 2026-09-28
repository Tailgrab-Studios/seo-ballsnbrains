// ADV11 V1 — copy validada (verbatim, sem Fadogia) no layout Erodus.
// Fonte: ref/ADV11/ADV11 l V1 l copy validada x layout ERODUS l 18.09.26.docx
import avGary from '../../assets/testimonials/person-14-comment.webp';
import avNick from '../../assets/testimonials/person-3-comment.webp';
import avSteve from '../../assets/testimonials/person-17-comment.webp';
import avDave from '../../assets/testimonials/person-6-comment.webp';
import avMike from '../../assets/testimonials/person-13-comment.webp';
import avTom from '../../assets/testimonials/person-5-comment.webp';
import avRaj from '../../assets/testimonials/person-2-comment.webp';
import avJames from '../../assets/testimonials/person-12-comment.webp';

// PV-XX em 640/800/960/1280 (gerado a partir de assets/images/PV-XX.webp).
const pvFiles = import.meta.glob('../../assets/adv11/pv/*.webp', { eager: true, import: 'default' });
const pv = (name) => {
  const url = (w) => pvFiles[`../../assets/adv11/pv/${name}-${w}.webp`];
  return { src: url(960), srcSet: [640, 800, 960, 1280].map((w) => `${url(w)} ${w}w`).join(', ') };
};
const imgCrash = pv('PV-01');
const imgMushrooms = pv('PV-03');
const imgAromatase = pv('PV-04');
const imgLabel = pv('PV-07');
const imgVersus = pv('PV-10');

export const CHECKOUT_URL = 'https://lp.vitavaulthealth.com/preclick';

export const PRICE = { was: '$105', now: '$59', per: '/month', perDay: '$1.30' };

export const RATING = { score: '4.9', reviews: '61,028' };

export const trustedBy = [
  { icon: 'star', label: '61,028 Verified Reviews' },
  { icon: 'shield', label: '365-Day Guarantee' },
  { icon: 'leaf', label: 'Fruiting Body' },
  { icon: 'flask', label: 'Dual-Extracted' },
  { icon: 'flag', label: 'Made in USA' },
];

export const credentials = [
  { icon: 'cap', label: 'Medicine & Urology', org: 'University of Oxford' },
  { icon: 'flask', label: 'Biotechnology', org: 'Columbia University' },
  { icon: 'award', label: 'PhD, MS', org: '' },
];

export const comparison = {
  columns: ["BALLS N'BRAINS", 'RYZE', 'TRADITIONAL COFFEE'],
  rows: [
    ['Jitter-free', true, true, false],
    ['Reduces cortisol', true, false, false],
    ['Increases T‑levels', true, false, false],
    ['Improves libido', true, false, false],
    ['Improves muscle gain', true, false, false],
    ['Provides more energy', true, true, false],
    ['Sustained focus & clarity', true, true, false],
  ],
};

// `image` entra logo depois do título; `cta` entra depois do bloco inteiro.
export const reasons = [
  {
    num: '01',
    title: 'Ryze Isn\'t Very Effective at Preventing the "Afternoon Crash"',
    image: {
      ...imgCrash,
      alt: '48mg vs. 100mg of caffeine — and what 3pm looks like on each.',
    },
    body: [
      "Ryze contains about 48mg of caffeine per serving — half of a regular cup of coffee. Many men report they simply don't feel enough energy and end up drinking regular coffee alongside it, defeating the entire purpose.",
      "Balls N'Brains contains 100mg of caffeine — double what Ryze offers, but still half of traditional coffee. The difference is that those 100mg are paired with 100mg of L-Theanine, which smooths the caffeine peak, extends the energy curve, and eliminates crash and jitters.",
      'The result? You actually feel your body being energized by the caffeine. Without that afternoon collapse that makes you want to crawl under your desk.',
    ],
  },
  {
    num: '02',
    title: 'Ryze Has an "Earthy" Taste That\'s Nothing Like Coffee',
    body: [
      'One of the biggest barriers I see with my patients is the fear of taste. And for good reason. Ryze has a flavor that many people describe as "earthy," "different," and even "unpleasant." Some Reddit reviews are pretty blunt: "it tastes and smells like vomit."',
      "Balls N'Brains was formulated to taste like coffee — not like mushrooms, not like dirt, not like a supplement. Most users report that the taste is virtually indistinguishable from conventional coffee.",
    ],
  },
  {
    num: '03',
    title: 'Ryze Contains Two Mushrooms That Can Lower Your Testosterone',
    image: {
      ...imgMushrooms,
      alt: 'Shiitake and King Trumpet on one side. Neither on the other.',
    },
    body: [
      "Ryze contains Shiitake and King Trumpet. Shiitake can elevate prolactin — the hormone that directly suppresses testosterone production in the hypothalamus. It's useful for breastfeeding women. For men? High prolactin means less T, less drive, less energy.",
      'King Trumpet contains phytosterols that reduce HDL cholesterol. Your body uses exactly this "good" cholesterol as raw material to produce testosterone. Less good cholesterol = less raw material = less T.',
      'If you started taking mushroom coffee and noticed your libido dropping, more difficulty gaining muscle at the gym, or unexplained fatigue — now you know why.',
      "Balls N'Brains contains neither Shiitake nor King Trumpet. Every mushroom in the formula was specifically chosen for not interfering with the male hormonal axis.",
    ],
    cta: true,
  },
  {
    num: '04',
    title: 'Ryze Converts Your Testosterone Into Estrogen',
    image: {
      ...imgAromatase,
      alt: 'Turkey Tail stimulates aromatase — the enzyme that turns T into estradiol.',
    },
    body: [
      'Turkey Tail is present in most mushroom coffees, including Ryze. The problem: Turkey Tail stimulates aromatase — an enzyme that takes the testosterone in your blood and converts it into estradiol, a form of estrogen.',
      "Estrogen is the female hormone. Every time you drink a mushroom coffee containing Turkey Tail, you're helping your body transform its primary male hormone into a female hormone. The result: less testosterone, more fat retention, less muscle mass, and lower libido.",
      "Balls N'Brains does not contain Turkey Tail. A deliberate formulation decision. Because if a coffee is made for men, it shouldn't contain an ingredient that converts your testosterone into estrogen.",
    ],
  },
  {
    num: '05',
    title: 'Ryze (and Other Mushroom Coffees) Were Made for Women — Not for Men',
    body: [
      'Ryze, Four Sigmatic, Everyday Dose, MUD\\WTR — all of them were formulated for "wellness." Energy, focus, immunity. No gender specificity. No hormonal targeting. Not a single one contains an ingredient that addresses testosterone or modulates cortisol specifically for the male body.',
      "Balls N'Brains was built around the male hormonal axis:",
    ],
    bullets: [
      'Tongkat Ali (300mg) for testosterone support — the dose where the research shows testosterone up 37% and cortisol down 16% in four weeks.',
      'Ashwagandha (300mg) for cortisol reduction — cortisol down 27.9% over 60 days, across more than twenty human trials.',
      'Shilajit (250mg), Zinc (15mg), and Vitamin D3 (2,000 IU) as hormonal co-factors.',
    ],
    bodyAfter: [
      "All on top of 4 functional mushrooms at clinical doses and caffeine modulated by L-Theanine. It's not a coffee with extras. It's a male performance system delivered in the form of coffee.",
    ],
  },
  {
    num: '06',
    title: 'Ryze Is Extremely Hard to Cancel (and Was Investigated by the NAD)',
    body: [
      'Search "Ryze subscription" on Reddit. You\'ll find reports from people who were automatically charged without clear authorization, who tried to cancel and were told by the company that "there\'s nothing we can do to stop this month\'s shipment."',
      "Ryze was investigated by the NAD (National Advertising Division) in September 2025 and voluntarily withdrew its health claims. I don't recommend any product from a company with that track record to my patients.",
      "Balls N'Brains works the opposite way. Cancel anytime. One click. No calling anyone. No retention process. And if at any point within 365 days you decide it wasn't worth it, they refund every penny. No questions asked.",
    ],
    cta: true,
  },
  {
    num: '07',
    title: "Ryze Doesn't Touch the Hormone That's Actually Draining You",
    body: [
      'Every mushroom coffee on the shelf sells the same three words: energy, focus, immunity. Not one of them says anything about cortisol.',
      "That's the problem. Cortisol is the stress hormone that suppresses testosterone directly. It runs highest in the morning, it gets pushed higher by caffeine on an empty stomach, and it's the reason a man can sleep eight hours and still wake up flat.",
      'Switching to a coffee with less caffeine softens the spike a little. It does nothing to bring the baseline down.',
      "Balls N'Brains was built the other way around. Ashwagandha for the cortisol side, L-Theanine so the caffeine doesn't spike it in the first place, and the testosterone support on top of that. For a man over 40, that order matters more than which mushroom is on the front of the bag.",
    ],
  },
  {
    num: '08',
    title: 'Ryze May Be "Rice Powder" Disguised as Mushroom Coffee',
    image: {
      ...imgLabel,
      alt: 'Fruiting body, dual-extracted — every dose printed on the back of the bag.',
    },
    body: [
      'Ryze likely uses "mycelium on grain" — which explains why it\'s so cheap.',
      "Mycelium on grain is essentially the root of the mushroom grown on rice, then ground up together with the rice. The result is a powder that can be 50-70% grain starch. You think you're taking mushrooms. In reality, you're taking ground rice at supplement prices.",
      'The ideal approach is to cultivate mushrooms as "fruiting body" — which takes longer to grow but guarantees far greater potency of active compounds.',
      "On top of that, the cell wall of mushrooms is made of chitin. Without an extraction process that breaks this wall, the active compounds pass through your body without being absorbed. It doesn't matter what's on the label if your body can't access it.",
      "Balls N'Brains exclusively uses fruiting body with dual extraction. This process breaks the chitin and releases all of the mushrooms' compounds: beta-glucans, hericenones, erinacines, and triterpenes. Ensuring higher quality and efficacy throughout the formula.",
    ],
  },
  {
    num: '09',
    title: 'Ryze Still Leaves You Buying Six Other Bottles',
    body: [
      "Drink Ryze and you've handled exactly one thing: the coffee. Everything a man over 40 actually needs for his hormones is still sitting in the supplement aisle.",
      "So the cabinet fills up. Ashwagandha. Tongkat ali. Shilajit. Zinc. Vitamin D. A jar of lion's mane, because the coffee didn't carry enough of it. Six bottles, six habits — and by Wednesday most men have taken none of them.",
      "That's the real reason supplement stacks fail. Not the ingredients. The remembering.",
      "Balls N'Brains puts the whole stack inside the one thing a man never forgets. Same mug, same time, same taste. Nothing to remember, nothing to swallow, nothing going stale in the cabinet.",
    ],
    cta: true,
  },
  {
    num: '10',
    title: "Ryze Is More Expensive and Less Effective for Men Than Balls N'Brains",
    image: {
      ...imgVersus,
      alt: 'Side by side: what each bag actually does for a man.',
    },
    body: [
      "Bottom line? Ryze costs $45, wasn't made for your body, and doesn't do half of what it should.",
      "Balls N'Brains is the only mushroom coffee designed exclusively for the male body — and it saves you over $250/month you'd otherwise spend on separate supplements like ashwagandha, tongkat ali, lion's mane, cordyceps, shilajit, zinc, and vitamin D.",
      'In a single scoop that tastes just like real coffee, BNB delivers stable energy with no crash or jitters, less cortisol, and more testosterone — for just $59 a month.',
      "You can try it risk-free. If you don't like it, just ask for your money back — thanks to their incredible 365-day guarantee. You can also cancel anytime. No stress. No hoops to jump through.",
    ],
  },
];

// 2.5 — 4 cards; a linha de função é trecho literal do #05 (sem texto novo).
export const productDetails = [
  { icon: 'bolt', name: 'Tongkat Ali', dose: '300mg', role: 'For testosterone support' },
  { icon: 'leaf', name: 'Ashwagandha', dose: '300mg', role: 'For cortisol reduction' },
  {
    icon: 'atom',
    name: 'Shilajit · Zinc · Vitamin D3',
    dose: '250mg · 15mg · 2,000 IU',
    role: 'As hormonal co-factors',
  },
  {
    icon: 'mushroom',
    name: "Lion's Mane · Cordyceps",
    dose: '1,000mg · 1,000mg',
    role: 'Functional mushrooms at clinical doses',
  },
];

// 2.6 — os 4 da home.
export const testimonials = [
  {
    name: 'Daniel R.',
    place: 'Austin, TX',
    text: "The 3pm crash is just gone. I swapped my morning cup for this about six weeks ago and the first thing I noticed wasn't dramatic — I just stopped hitting a wall after lunch. My wife says I'm actually awake at dinner now instead of nodding off on the couch.",
  },
  {
    name: 'Marcus T.',
    place: '',
    text: "I was a week out from booking testosterone shots and tried this first because, well, no needles. Three months in and the morning drive is back to where it was in my early thirties. The clinic can wait.",
  },
  {
    name: 'Eric M.',
    place: 'Denver, CO',
    text: "My cabinet is a graveyard of half-empty supplement bottles. This one is just my coffee so I never skip it. I'm down a notch on the belt and the gym sessions feel the way they used to.",
  },
];

export const caseStudy = {
  name: 'Marcus T., 65',
  quote:
    "I've been drinking the same coffee for 35 years. Folgers Black, two cups. Don't fix what ain't broke. My daughter sent me this back in January and said, 'Dad, just try it for a month.'",
  result: 'My T doubled.',
};

export const offerIncluded = [
  'Free shipping on every order',
  'Cancel anytime, one click, no retention calls',
  '365-Day Money-Back Guarantee',
];

export const faqs = [
  {
    q: 'Is there a discount code?',
    a: 'No code needed. The 44% off applies automatically at checkout and is locked in for life on subscription.',
  },
  {
    q: 'Is this as good as TRT?',
    a: "It's a different thing. TRT is prescription synthetic testosterone that requires a clinic, bloodwork and monitoring — and synthetic T is converted by aromatase just like your own. Balls N'Brains supports your body's own production through cortisol reduction and the hormonal co-factors most men are missing, with nothing to inject and nothing to cycle off. Many men on TRT drink it for the cortisol and energy side. Ask your doctor about your protocol.",
  },
  {
    q: 'Does it really taste like coffee?',
    a: "Yes. Organic Arabica base, low acidity. Most men can't tell it from their regular cup. If you can, the 365-day guarantee is there.",
  },
  {
    q: 'How much caffeine?',
    a: '100mg. Half a regular cup, double Ryze. Paired with 100mg L-Theanine so the curve is smooth and long. Most men drop their second cup within a week.',
  },
  {
    q: 'When will I feel something?',
    a: 'Week 1: cleaner energy, no afternoon crash. Day 30: cortisol baseline lower, sleep and recovery improve, Tongkat Ali reaches effective concentration. Day 90: full effect on energy, body composition, drive and bloodwork.',
  },
  {
    q: "What's the refund policy?",
    a: '365 days. Email support, full refund, no questions. Cancel the subscription anytime in one click.',
  },
];

export const references = [
  {
    authors: 'Chandrasekhar K, Kapoor J, Anishetty S.',
    title:
      'A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of Ashwagandha root in reducing stress and anxiety in adults.',
    journal: 'Indian J Psychol Med.',
    cite: '2012;34(3):255-262.',
  },
  {
    authors: 'Talbott SM, Talbott JA, George A, Pugh M.',
    title:
      'Effect of Tongkat Ali on stress hormones and psychological mood state in moderately stressed subjects.',
    journal: 'J Int Soc Sports Nutr.',
    cite: '2013;10:28.',
  },
  {
    authors: 'Pandit S, Biswas S, Jana U, De RK, Mukhopadhyay SC, Biswas TK.',
    title:
      'Clinical evaluation of purified Shilajit on testosterone levels in healthy volunteers.',
    journal: 'Andrologia.',
    cite: '2016;48(5):570-575.',
  },
  {
    authors: 'Prasad AS, Mantzoros CS, Beck FW, Hess JW, Brewer GJ.',
    title: 'Zinc status and serum testosterone levels of healthy adults.',
    journal: 'Nutrition.',
    cite: '1996;12(5):344-348.',
  },
];

export const comments = [
  {
    name: 'Gary H.',
    avatar: avGary,
    text: 'Anyone actually tried this? I\'m on my second bag of Ryze and this article is describing me. "Softer" is the word.',
    time: '1d',
    replies: [
      {
        name: 'Nick R.',
        avatar: avNick,
        text: "Month 3. Energy isn't wired, it's just… on. Wife noticed the gym thing before I said anything.",
        time: '1d',
      },
      {
        name: 'Steve M.',
        avatar: avSteve,
        text: 'Was on TRT a year, hated the clinic. Not saying this replaces it, but the cortisol side is way better and I sleep now.',
        time: '5h',
      },
    ],
  },
  {
    name: 'Dave L.',
    avatar: avDave,
    text: 'Does it actually taste like coffee or is that marketing? Ryze tasted like a wet basement.',
    time: '1d',
    replies: [
      {
        name: 'Mike C.',
        avatar: avMike,
        text: "Medium roast. Put it in front of my brother-in-law without telling him. He didn't blink.",
        time: '1d',
      },
    ],
  },
  {
    name: 'Tom P.',
    avatar: avTom,
    text: "365 days is insane. Ordering because there's literally no way to lose on that.",
    time: '2d',
  },
  {
    name: 'Raj H.',
    avatar: avRaj,
    text: '42. Same "normal range" story. 10 weeks in, drive is back. Didn\'t think I\'d type that in a comment section.',
    time: '2d',
  },
  {
    name: 'James F.',
    avatar: avJames,
    text: 'Cancelled Ryze after the NAD thing. Took three emails and a phone call. Ordered this and the cancel button is right there in the account. That alone.',
    time: '5h',
  },
];
