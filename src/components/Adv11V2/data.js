// ADV11 V2 — copy nova × layout B&B (nossa página atual). Texto verbatim do doc
// "ADV11 l V2 l copy nova x layout BNB l 18.09.26": com a tabela 👍👎 no ponto marcado, sem referências.
// Marcação só de formato: **negrito** e *itálico* (o doc usa *softer* pra itálico).

const pvFiles = import.meta.glob('../../assets/adv11/pv/*.webp', { eager: true, import: 'default' });
const pv = (name, alt) => {
  const url = (w) => pvFiles[`../../assets/adv11/pv/${name}-${w}.webp`];
  return { src: url(960), srcSet: [640, 800, 960, 1280].map((w) => `${url(w)} ${w}w`).join(', '), alt };
};

export const header = {
  breadcrumb: ['Home', 'Trending', "Men's Performance · 6 min read"],
  h1: "I spent $385 testing mushroom coffees so you don't have to",
  byline: 'By Mark Sullivan',
  date: 'September 18th, 2026 | 7:00AM EST',
  dateTime: '2026-09-18T07:00:00-05:00',
};

// Corpo, na ordem do doc. 'img' logo depois de um h2 = seção com imagem (grid alternado do layout B&B).
// Tipos: p, h2, h3, quote, img, thumbs, list (itens com lead em negrito),
// steps (1. CUT …), checklist, cta, maths, details, compare, testimonials, offer, rating,
// faq, ps. Cada bloco vira um elemento do layout Erodus.
export const body = [
  { t: 'p', text: 'If you have a bag of mushroom coffee in your kitchen, go get it. Flip it over. Find the word "Turkey Tail."' },
  { t: 'p', text: "I'll wait. This article makes a lot more sense with the bag in your hand." },
  { t: 'p', text: 'You\'ve seen them. The $45 bag with the woman doing yoga on a dock. The $40 "adaptogenic" one your coworker swears by. The $60 one from the podcast. And you\'ve thought: "They all have lion\'s mane. They all have half the caffeine. What am I actually paying for?"' },
  { t: 'p', text: "I thought the same thing. So in January I went the budget route — the popular route — and spent five months and three bags finding out. Here's what I learned, in the order I learned it, so you can skip the part where you feel worse and don't know why." },

  { t: 'h2', text: 'The caffeine problem nobody admits' },
  { t: 'img', ...pv('PV-01', 'Ryze 48mg of caffeine versus Balls N\'Brains 100mg') },
  { t: 'p', text: "The first thing you notice with the popular mushroom coffee is that you're still tired." },
  { t: 'p', text: 'Ryze has about 48mg of caffeine per serving. Half a regular cup. The marketing calls it "calm energy." My body called it decaf. By week two I was drinking a regular coffee alongside it — so now I had two morning drinks, two crashes, and the cortisol spike I\'d switched coffees to avoid.' },
  { t: 'p', text: 'I\'m not the only one. Read the reviews: men who "don\'t feel enough" and end up back on regular coffee, defeating the whole point. That was $45 for a bag I was chasing with a $5 Starbucks.' },

  { t: 'h2', text: "The taste problem (that the ads don't mention)" },
  { t: 'img', ...pv('PV-02', "A cup of Ryze next to a cup of Balls N'Brains coffee") },
  { t: 'p', text: 'Second thing. It tasted like dirt.' },
  { t: 'p', text: 'I\'m not exaggerating for effect. The word most reviews use is "earthy." Some Reddit reviews are blunter — one describes it as tasting and smelling like vomit. I got through it with the honey packets they upsell you, which is a funny way to sell a health drink.' },
  { t: 'p', text: "I want a coffee that tastes like coffee. Apparently that's a lot to ask in this category." },

  { t: 'h2', text: 'Nothing in the bag was aimed at a man' },
  { t: 'img', ...pv('PV-05', "Ryze marketed for wellness next to Balls N'Brains made for men") },
  { t: 'p', text: 'Third thing, and this is where I started getting annoyed.' },
  { t: 'p', text: "Ryze, Four Sigmatic, Everyday Dose, MUD\\WTR — they're all sold on the same three words. Energy. Focus. Immunity. Read the whole bag and you will not find one line about testosterone, and you will not find one line about cortisol." },
  { t: 'p', text: 'That\'s not an oversight. These were built for wellness, for everybody, which in practice means they were built for nobody in particular. And a 47-year-old man whose problem is hormonal is not "everybody."' },
  { t: 'p', text: "I was drinking a wellness product and expecting it to fix a man's problem." },

  { t: 'h2', text: 'The "mycelium on grain" trick' },
  { t: 'img', ...pv('PV-08', "Balls N'Brains fruiting body mushrooms and their active compounds") },
  { t: 'p', text: 'Fourth thing, which I learned from a guy on a supplement forum and then confirmed for myself.' },
  { t: 'p', text: 'Most cheap mushroom coffees use "mycelium on grain." That\'s the mushroom\'s root system grown on rice, then ground up with the rice. The resulting powder can be 50–70% grain starch. You think you\'re drinking mushrooms. You\'re drinking ground rice at supplement prices. It\'s why the bag is so cheap.' },
  { t: 'p', text: "On top of that, mushroom cell walls are made of chitin. Without a dual-extraction process to break that wall, the active compounds pass straight through you. Doesn't matter what's on the label if your body can't get at it." },

  { t: 'h2', text: 'The real cost: I got *softer*' },
  { t: 'p', text: "Here's the part I almost didn't write." },
  { t: 'p', text: "By month four I wasn't just tired. I was… softer. Less drive. Less edge at the gym — bag sat in the trunk three weeks straight. Belt out a notch, but in the wrong places: chest and lower belly, where I'd never carried weight. And the bedroom had become something my wife and I didn't bring up." },
  { t: 'p', text: "I assumed it was age. I'm 47. That's what you tell yourself." },
  { t: 'p', text: 'Then I did bloodwork. My total testosterone had come back 512 the previous year. This time: 421. Ninety-one points down, in the year I\'d "gotten healthier." My GP said "still in normal range." I\'ve since learned that sentence keeps a lot of men tired for the rest of their lives.' },

  { t: 'h2', text: 'What a urologist found on the label' },
  { t: 'img', ...pv('PV-03', 'Shiitake and King Trumpet next to prolactin, testosterone and HDL vials') },
  { t: 'p', text: 'A friend sent me to Dr. Ben Palmer — Oxford-trained, medicine and urology, spends his week on exactly this: men over 40 whose numbers are "normal" and whose lives aren\'t. I brought my labs. My wife made me bring the bag.' },
  { t: 'p', text: 'He read the label for about fifteen seconds and put it down.' },
  { t: 'quote', text: '"Three of these six mushrooms work against a man\'s hormones. You\'ve been drinking an estrogen cup and calling it a health habit."' },
  { t: 'p', text: 'He drew it on the back of my lab sheet:' },
  {
    t: 'list',
    items: [
      ['Turkey Tail → aromatase.', "Aromatase is the enzyme that takes the testosterone in your blood and converts it to estradiol — a form of estrogen. Turkey Tail stimulates it. Every morning, a piece of the T I had was being turned into the hormone that puts fat on a man's chest and kills his drive."],
      ['Shiitake → prolactin.', 'Prolactin tells the hypothalamus to stop making testosterone. Useful for breastfeeding women. For me, a daily "off" switch.'],
      ['King Trumpet → HDL.', 'Its phytosterols lower HDL — the "good" cholesterol your body uses as raw material to build testosterone. Less raw material, less T.'],
    ],
  },
  { t: 'p', text: 'All of it sitting on top of the cortisol any morning coffee pushes up. Four pathways pulling my testosterone down before 8am, and I was paying $45 a month for the privilege.' },
  { t: 'quote', text: '"If you started a mushroom coffee and your libido dropped, your gym stalled, or you got tired for no reason," he said, "it\'s not in your head. It\'s in the bag."' },
  { t: 'p', text: "Sound familiar? Check the ones you've noticed since you switched coffees:" },
  {
    t: 'checklist',
    items: [
      "The 2pm crash came back (or never left)",
      'Less interest in sex than a year ago',
      'Gym progress stalled, or the bag stopped leaving the trunk',
      'New softness on the chest or lower belly',
      'Waking up tired after a full night',
      'A doctor told you your testosterone was "in normal range"',
    ],
  },
  { t: 'p', text: "Two or more, and you're reading the right article." },
  { t: 'p', text: "Dr. Palmer's recommendation is below — along with what happened to my bloodwork 90 days later." },
  { t: 'cta', label: 'SEE WHAT HE RECOMMENDS ➤', note: '365-Day Money-Back Guarantee' },

  { t: 'h2', text: "Why I'm telling you this" },
  { t: 'p', text: 'Because Dr. Palmer had a bag of something called Balls N\'Brains on his shelf. Not a sample — his own. "It\'s the only mushroom coffee I drink, and the only one I recommend to men," he said.' },
  { t: 'p', text: 'I was skeptical. It\'s $59. Fourteen dollars more than the bag that had just cost me 91 points of testosterone. But the guarantee is 365 days — they literally call it the "It Was The Bag" Guarantee — so I genuinely had nothing to lose, and I ordered it that night.' },
  { t: 'p', text: 'He explained it as a three-step protocol, which is the only reason I remembered it:' },
  {
    t: 'steps',
    items: [
      ['1. CUT.', 'Take out the three mushrooms working against you. No Turkey Tail, no Shiitake, no King Trumpet.'],
      ['2. SHIELD.', 'Stop the morning cortisol spike: 100mg caffeine balanced with 100mg L-Theanine, plus 300mg of Ashwagandha — the dose that dropped cortisol 27.9% in 60 days in the research.'],
      ['3. REBUILD.', 'Give the body the raw material to make its own T: Tongkat Ali 300mg, Shilajit 250mg, Zinc 15mg, Vitamin D3 2,000 IU.'],
    ],
  },
  { t: 'quote', text: '"Most men try to do step 3 with a cabinet full of pills," he said, "while their coffee undoes it every morning."' },
  { t: 'thumbs' },

  { t: 'h2', text: '5 changes that surprised me most after switching' },
  { t: 'h3', text: 'My 2pm wall disappeared in the first week' },
  { t: 'p', text: "Balls N'Brains has 100mg of caffeine — double Ryze, still half a regular cup — paired with 100mg of L-Theanine." },
  { t: 'p', text: 'The theanine smooths the peak and stretches the curve. I stopped reaching for the second cup within four days. No jitters. No crash.' },
  { t: 'h3', text: 'It actually tastes like coffee' },
  { t: 'p', text: 'Organic Arabica base. My wife took a sip and asked where the mushrooms were.' },
  { t: 'p', text: 'I stopped buying honey packets to get it down.' },
  { t: 'h3', text: 'I slept through the night by day 30' },
  { t: 'p', text: 'Ashwagandha at 300mg is the dose shown to lower cortisol by 27.9% over 60 days. I could feel the baseline shift.' },
  { t: 'p', text: 'The gym bag came out of the trunk. Cordyceps Militaris at 1,000mg made the sessions feel different — more air.' },
  { t: 'h3', text: 'The belt went back a notch by day 60' },
  { t: 'p', text: 'Not from dieting. From the chest and the lower belly, the exact places it had come from.' },
  { t: 'p', text: 'My wife noticed before I did. She noticed other things before I did too. We started talking about the bedroom again, because there was something to talk about.' },
  { t: 'h3', text: 'My retest at day 90' },
  { t: 'p', text: 'Total testosterone: 588. Up 167 points from the "normal" 421.' },
  { t: 'p', text: 'Dr. Palmer smiled and said the sentence I\'d waited a year to hear: "That\'s what your numbers should look like."' },
  { t: 'p', text: 'The only thing I changed was the coffee.' },

  { t: 'h2', text: 'The maths nobody shows you' },
  { t: 'p', text: 'I did this on a napkin the night I got home from his office.' },
  {
    t: 'maths',
    before: {
      label: 'What I was actually doing:',
      items: [
        'Ryze: $45/month',
        'Regular coffee to make up for the 48mg: ~$20/month',
        "The separate supplements I'd started buying to fix the problem the coffee was causing — ashwagandha, tongkat ali, lion's mane, cordyceps, shilajit, zinc, vitamin D — bought separately: over $250/month",
      ],
      total: 'Total: over $315/month. Testosterone: down 91 points.',
    },
    after: {
      label: 'What he recommended:',
      items: ["Balls N'Brains: $59/month — all seven of those, at the studied doses, in one scoop, minus the three mushrooms working against me"],
    },
  },
  { t: 'p', text: '$1.30 a day. Less than the Ryze + Starbucks morning I was already paying for.' },
  { t: 'p', text: "The cheapest mushroom coffee isn't the one with the lowest price. It's the one that doesn't cost you your testosterone.", strong: true },

  { t: 'h2', text: "How to spot a mushroom coffee that won't waste your money" },
  { t: 'img', ...pv('PV-07', "Front and back of the Balls N'Brains bag with the full label") },
  { t: 'p', text: "Dr. Palmer gave me this list. I'm giving it to you." },
  {
    t: 'list',
    items: [
      ['Fruiting body, dual-extracted.', 'Not "mycelium on grain." If it doesn\'t say, assume rice.'],
      ["No Turkey Tail, Shiitake or King Trumpet if you're a man.", 'Full stop.'],
      ['Ingredients aimed at men, at the doses from the trials.', "Ashwagandha and tongkat ali at 300mg for the hormonal side, not just lion's mane for focus."],
      ['Enough caffeine to feel, not enough to crash.', '100mg with L-Theanine is the sweet spot. 48mg is decaf with marketing.'],
      ["A guarantee you'd actually use.", '30 days is a trial. 365 days is confidence.'],
      ['Cancel in one click.', 'Search "Ryze subscription" on Reddit before you subscribe to anything. Ryze was investigated by the NAD in September 2025 and voluntarily withdrew its health claims.'],
    ],
  },

  { t: 'h2', text: 'My personal choice' },
  { t: 'img', ...pv('PV-06', "Balls N'Brains 365-day money-back guarantee, cancel anytime in one click") },
  { t: 'p', text: "Balls N'Brains ticks every box on that list, which is why it's the only one I'd put my name on." },
  { t: 'p', text: 'Twelve ingredients built around the male hormonal axis. Fruiting body, dual extraction. Zero hormone-negative mushrooms. And a company that lets you cancel in one click and refunds every penny for a full year.' },
  { t: 'p', text: "They're currently doing 44% off, locked in for life, with free shipping." },
  { t: 'cta', title: "Try Balls N'Brains — 44% off for life, 365-day money-back guarantee.", label: 'TRY IT NOW ➤', note: 'Tastes like coffee · Cancel anytime' },

  { t: 'h2', text: "What's actually in it" },
  {
    t: 'details',
    items: [
      { icon: 'bolt', lead: 'Tongkat Ali — 300mg.', text: 'The testosterone side. At this dose the research shows testosterone up 37% and cortisol down 16% in four weeks.' },
      { icon: 'leaf', lead: 'Ashwagandha — 300mg.', text: 'The cortisol side, backed by more than twenty human trials: cortisol down 27.9% over 60 days. This is the one that moves the baseline, and it takes weeks, not days.' },
      { icon: 'atom', lead: 'Shilajit 250mg · Zinc Glycinate 15mg · Vitamin D3 2,000 IU.', text: 'The hormonal co-factors most men buy as three separate bottles. Zinc alone: 73% of men over 40 are deficient.' },
      { icon: 'mushroom', lead: "Lion's Mane 1,000mg · Cordyceps Militaris 1,000mg · Reishi 500mg · Chaga 500mg.", text: 'Four functional mushrooms at the doses used in the studies. Fruiting body, dual-extracted. No Turkey Tail. No Shiitake. No King Trumpet.' },
      { icon: 'flask', lead: 'Caffeine 100mg + L-Theanine 100mg.', text: 'Energy without the spike. Organic Arabica base.' },
      { icon: 'shield', lead: 'Guarantee: 365 days.', text: 'Full refund. Cancel anytime, one click, no retention process.' },
    ],
  },

  { t: 'h2', text: 'My honest assessment (the part the ads leave out)' },
  { t: 'p', text: "Three things I'd want to know before buying, because I wish someone had told me:" },
  {
    t: 'list',
    items: [
      ["It's $14 more than Ryze.", "$59 vs $45. If you're only comparing bags, it loses. If you're comparing it to the bag plus the coffee you drink to make up for the bag plus the pills you buy to fix what the bag does, it's the cheapest thing in your kitchen."],
      ['One flavor.', 'Coffee. No mocha, no "golden turmeric latte." If you want a dessert drink, this isn\'t it.'],
      ['Week one is subtle.', "The crash disappears and that's it. The stuff you actually care about — sleep, belt, drive, bloodwork — is a 30-to-90-day story. That's the whole reason the guarantee is a year and not a month."],
    ],
  },

  { t: 'h2', text: 'How it compares to the other route' },
  { t: 'img', ...pv('PV-10', "Ryze cons versus Balls N'Brains pros") },
  {
    t: 'compare',
    columns: ["Balls N'Brains", 'TRT', 'Ryze'],
    rows: [
      ['Daily routine', 'One coffee', 'Injection / gel / pellet', 'One coffee + a second coffee'],
      ['Prescription', 'No', 'Yes', 'No'],
      ['Clinic visits & bloodwork', 'No', 'Ongoing', 'No'],
      ['Synthetic hormones', 'No', 'Yes', 'No'],
      ['Testosterone-support ingredients', 'Tongkat Ali, Ashwagandha, Shilajit, Zinc, D3', 'Replaces T directly', 'None'],
      ['Hormone-negative mushrooms', 'None', '—', 'Turkey Tail, Shiitake, King Trumpet'],
      ['Cancel', 'One click', 'Medical supervision', 'See Reddit'],
      ['Guarantee', '365 days', '—', '—'],
    ],
  },

  { t: 'h2', text: 'What other men are saying' },
  { t: 'testimonials' },
  { t: 'offer' },

  { t: 'h2', text: 'One more thing' },
  { t: 'p', text: "Buying a mushroom coffee isn't really about coffee. It's about the 2pm you don't lose, the gym bag that comes out of the trunk, the Saturday you don't spend on the couch, and the conversation with your wife that you get to have again." },
  { t: 'p', text: 'I got there without a prescription, without a clinic, and without a cabinet full of bottles — by not buying cheap.' },
  { t: 'p', text: "If you're on bag number two or three of the popular one and you feel softer and can't say why — it's not you. It's the bag. Look into Balls N'Brains before you buy another one. It'll save you five months and, if you're anything like me, a lot more than that." },
  { t: 'rating' },

  { t: 'faq' },

  { t: 'h2', text: 'Two paths from here' },
  { t: 'p', text: 'Path 1. Close this tab. Finish the bag. Buy another one, because it\'s $45 and it\'s "healthy." Get bloodwork in twelve months and hear "still in normal range" again. Keep telling yourself it\'s age.', lead: 'Path 1.' },
  { t: 'p', text: "Path 2. Order Balls N'Brains tonight. Drink it tomorrow instead of the bag. Give it 90 days. If your energy, your focus and your drive aren't different, email them and get every dollar back — any time in the next 365 days.", lead: 'Path 2.' },
  { t: 'p', text: "One path costs you a year. The other costs you nothing if I'm wrong." },
  { t: 'cta', label: "Try Balls N'Brains — 365-Day Guarantee", icon: 'right', final: true },
  { t: 'rating' },

  { t: 'ps', items: [
    ['P.S.', "The guarantee is 365 days because the effects are a 90-day story and they'd rather you find out for real than in a 30-day panic. Use it."],
    ['P.P.S.', 'Cancelling is one click in your account. I checked before I ordered, because of what cancelling Ryze had taken out of me.'],
    ['P.P.P.S.', 'If your wife sent you this article: she already knows. Order the coffee.'],
  ] },
];

// Testemunhos — formato do doc: "★★★★★ Nome · Verified Purchase · Cidade" + citação.
export const testimonials = [
  { name: 'Daniel R.', place: 'Austin, TX', text: '"The 3pm crash is just gone. I swapped my morning cup for this about six weeks ago and the first thing I noticed wasn\'t dramatic — I just stopped hitting a wall after lunch. My wife says I\'m actually awake at dinner now instead of nodding off on the couch."' },
  { name: 'Marcus T.', place: '', text: '"I was a week out from booking testosterone shots and tried this first because, well, no needles. Three months in and the morning drive is back to where it was in my early thirties. The clinic can wait."' },
  { name: 'Eric M.', place: 'Denver, CO', text: '"My cabinet is a graveyard of half-empty supplement bottles. This one is just my coffee so I never skip it. I\'m down a notch on the belt and the gym sessions feel the way they used to."' },
];

export const caseStudy = {
  lead: 'Case study — Marcus T., 65.',
  quote: '"I\'ve been drinking the same coffee for 35 years. Folgers Black, two cups. Don\'t fix what ain\'t broke. My daughter sent me this back in January and said, \'Dad, just try it for a month.\'"',
  resultLead: 'Three months later:',
  result: '"My T doubled."',
};

// Bloco de oferta — texto do doc V3 (linhas "BALLS N'BRAINS™…" até "Join later, pay full price.").
export const offer = {
  name: "BALLS N'BRAINS™ Mushroom Coffee For Men",
  tagline: 'Your entire testosterone stack. One scoop. One coffee.',
  was: '$105',
  now: '$59',
  label: '44% OFF FOR LIFE — NO CODE NEEDED',
  includedTitle: 'Included:',
  included: [
    ['truck', 'Free shipping on every order'],
    ['unlock', 'Cancel anytime — one click, no calls'],
    ['shield', '365-Day Money-Back Guarantee — no questions'],
  ],
  badges: ['365-Day "It Was The Bag" Guarantee', 'Free Shipping', 'Made in USA'],
  cta: 'Claim Your 44% Discount Now',
  note: "As low as $1.30/day · The 44% is locked at today's price for as long as you stay subscribed. Join later, pay full price.",
};
