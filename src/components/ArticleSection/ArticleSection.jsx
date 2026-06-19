import product1 from '../../assets/products/1kit.webp';

const CTA_URL = '#';

const s = {
  titleColor: '#1a5c47',
  prosColor: '#2d6a4f',
  consColor: '#b91c1c',
  btnBg: '#1e3a8a',
  linkColor: '#1a5c47',
};

function Divider() {
  return (
    <div style={{ textAlign: 'center', color: '#999', fontSize: 18, margin: '32px 0', letterSpacing: 6 }}>
      • • •
    </div>
  );
}

function ImageBox({ src, alt, caption }) {
  return (
    <div style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 4, padding: '24px 16px', textAlign: 'center', margin: '20px 0' }}>
      {src ? (
        <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: 280, objectFit: 'contain', margin: '0 auto', display: 'block' }} />
      ) : (
        <span style={{ fontSize: 28, display: 'block', marginBottom: 8 }}>📷</span>
      )}
      <p style={{ color: '#6b7280', fontFamily: 'sans-serif', fontSize: 13, marginTop: src ? 12 : 0 }}>{caption}</p>
    </div>
  );
}

function ProsList({ items }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: 15, color: s.prosColor, marginBottom: 10, letterSpacing: 0.5 }}>PROS</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, fontFamily: 'Georgia, serif', fontSize: 15, lineHeight: 1.55, color: '#222' }}>
            <span style={{ color: s.prosColor, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
            <span>
              {item.bold && <strong>{item.bold}</strong>}
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConsList({ items }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: 15, color: s.consColor, marginBottom: 10, letterSpacing: 0.5 }}>CONS</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, fontFamily: 'Georgia, serif', fontSize: 15, lineHeight: 1.55, color: '#222' }}>
            <span style={{ color: s.consColor, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✗</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BuyButton({ label = 'BUY IT HERE', href = CTA_URL }) {
  return (
    <a
      href={href}
      style={{ display: 'block', width: '100%', padding: '14px 0', background: s.btnBg, color: '#fff', fontFamily: 'sans-serif', fontWeight: 700, fontSize: 17, textAlign: 'center', textDecoration: 'none', borderRadius: 3, marginTop: 16, cursor: 'pointer', letterSpacing: 0.5 }}
    >
      {label}
    </a>
  );
}

function BuyLink({ label, href = CTA_URL }) {
  return (
    <p style={{ marginTop: 12 }}>
      <a href={href} style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: s.linkColor, fontStyle: 'italic', textDecoration: 'underline' }}>
        {label}
      </a>
    </p>
  );
}

function PromoBox() {
  return (
    <div style={{ border: '2px solid #f59e0b', background: '#fffbeb', borderRadius: 4, padding: '16px 20px', margin: '20px 0' }}>
      <p style={{ fontFamily: 'sans-serif', fontSize: 15, color: '#111', lineHeight: 1.6, margin: 0 }}>
        <strong style={{ color: '#d97706' }}>LIMITED TIME PROMO:</strong> 40% off + free shipping for new customers if you order right now! Backed by a 365-day money-back guarantee — if it doesn't work, they'll return 100% of your money.{' '}
        <a href={CTA_URL} style={{ color: s.titleColor, fontWeight: 700, textDecoration: 'underline' }}>CLICK to activate.</a>
      </p>
    </div>
  );
}

function ProductSection({ rank, name, tagline, image, imageCaption, pros, cons, ctaType, ctaLabel, ctaHref, showPromo }) {
  const headingColor = rank === 1 ? s.titleColor : '#1a3c6e';
  return (
    <section style={{ marginBottom: 8 }}>
      <h2 style={{ fontFamily: 'sans-serif', fontWeight: 800, fontSize: 'clamp(18px, 3vw, 24px)', color: headingColor, marginBottom: 8, letterSpacing: 0.5 }}>
        #{rank}&nbsp;&nbsp;{name}
        {tagline && <span style={{ fontSize: 13, fontWeight: 600, marginLeft: 12, verticalAlign: 'middle' }}>— {tagline}</span>}
      </h2>
      <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', marginBottom: 20 }} />
      <ImageBox src={image} alt={name} caption={imageCaption} />
      <ProsList items={pros} />
      <ConsList items={cons} />
      {ctaType === 'button' ? (
        <BuyButton label={ctaLabel} href={ctaHref} />
      ) : (
        <BuyLink label={ctaLabel} href={ctaHref} />
      )}
      {showPromo && <PromoBox />}
    </section>
  );
}

function Comment({ name, time, likes, text, reply = false }) {
  return (
    <div style={{ borderBottom: '1px solid #e5e7eb', paddingTop: 20, paddingBottom: 20, paddingLeft: reply ? 32 : 0, background: reply ? '#f9fafb' : 'transparent' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <strong style={{ fontFamily: 'sans-serif', fontSize: 14, color: reply ? s.titleColor : '#111' }}>{name}</strong>
        <span style={{ fontFamily: 'sans-serif', fontSize: 12, color: '#9ca3af' }}>· {time} · {likes} Likes{reply && ' (reply)'}</span>
      </div>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: 15, lineHeight: 1.6, color: '#333', margin: 0 }}>{text}</p>
    </div>
  );
}

export default function ArticleSection() {
  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#fff', color: '#111', minHeight: '100vh' }}>

      {/* ── SITE HEADER ── */}
      <header style={{ borderBottom: '1px solid #e5e7eb', padding: '12px 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'sans-serif', fontWeight: 900, fontSize: 16, letterSpacing: 3, textTransform: 'uppercase', margin: 0, color: '#111' }}>
          THE EVERYDAY MAN
          <span style={{ fontWeight: 400, fontSize: 12, color: '#6b7280', marginLeft: 8, letterSpacing: 1 }}>WELLNESS · REVIEWS</span>
        </p>
      </header>

      <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px' }}>

        {/* ── ARTICLE META ── */}
        <div style={{ paddingTop: 32, paddingBottom: 4 }}>
          <p style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: 11, color: s.titleColor, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            COMPARATIVE REVIEW
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 'clamp(26px, 4vw, 40px)', lineHeight: 1.15, color: '#111', marginBottom: 24 }}>
            The 5 Best Mushroom Coffees for Men: Ranked Best to Worst
          </h1>
        </div>

        {/* ── HERO IMAGE ── */}
        <ImageBox
          src={null}
          caption="Overhead lineup of all 5 mushroom coffee pouches on a kitchen counter, each with a freshly poured mug in front of it — casual, real-photo style. Balls & Brains sits first on the left."
        />

        {/* ── INTRO ── */}
        <div style={{ fontSize: 16, lineHeight: 1.7, color: '#222', marginBottom: 8 }}>
          <p style={{ marginBottom: 16 }}>As a die-hard coffee drinker, I've had a love/hate relationship with caffeine. The jitters were getting worse, I was painfully aware of the 3pm crash and the morning fog, and on top of all that, somewhere in my 40s the things I used to take for granted — energy, drive, focus — just weren't what they used to be. I blamed it on getting older.</p>
          <p style={{ marginBottom: 16 }}>Enter — my search for a new morning drink that could give me the same energy and focus coffee provides, but without any of the fallout. I wanted to sleep better, feel less wired, skip the crash, and honestly, I wanted to feel like myself again.</p>
          <p style={{ marginBottom: 16 }}>After a ton of research I honed in on mushroom coffee. I know — sounds gross, right? But after reading countless studies I decided I had to try it. So I tried all the best mushroom coffee brands (according to the internet) and I drank each one for 12 days straight, with a weekend off in between to reset my body and mind.</p>
          <p style={{ marginBottom: 16 }}>Here's the thing nobody warned me about: almost every one of them is the exact same idea — low-caffeine coffee with a pinch of mushrooms thrown in. Only <strong>one</strong> was actually built for a man's body. And the difference was night and day.</p>
          <p style={{ marginBottom: 0 }}><strong>Here are my top 5 mushroom coffees for men on the market:</strong></p>
        </div>

        <Divider />

        {/* ── #1 BALLS & BRAINS ── */}
        <ProductSection
          rank={1}
          name="BALLS & BRAINS"
          tagline="TOP PICK FOR MEN"
          image={product1}
          imageCaption="1. Balls & Brains Mushroom Coffee"
          pros={[
            { bold: 'The taste was a 10/10 for me. My favorite by far.', text: ' A rich, robust dark-roast flavor because the base is real organic Arabica coffee — and it was the only one where I couldn\'t taste the mushrooms or any of the extra ingredients they packed in. The only one that didn\'t feel like I was "giving up" coffee or sacrificing taste for the health benefits.' },
            { text: 'No jitters, no crash, no afternoon slump. 100mg of caffeine (about half a regular cup) paired 1:1 with 100mg of L-Theanine had me energized and focused all day without reaching for a second cup. The others cut the caffeine so low I barely felt awake — this was the only one that actually replaced my coffee.' },
            { bold: "It's the only one on this list actually formulated for men.", text: " Every other coffee here is just low-caf coffee with a little mushroom dust. This one has five ingredients with real human studies behind them for the male body: Tongkat Ali (300mg), Ashwagandha KSM-66 (300mg), Shilajit (250mg), Zinc (15mg) and Vitamin D3 (2,000 IU). Not one of the other four has a single one of these on the label." },
            { text: 'After a few weeks I felt more like myself — steadier mood, more drive, sharper focus. The stuff I\'d written off as "just my age."' },
            { text: 'I slept better and felt way less wired and anxious — the L-Theanine plus Ashwagandha (clinically shown to drop cortisol around 28% in 60 days) plus Reishi do exactly that.' },
            { bold: 'Clinical-dose mushrooms, not pixie dust.', text: " 1,000mg Lion's Mane and 1,000mg Cordyceps, plus Reishi and Chaga. My brain fog lifted in the first couple weeks and my gym stamina came back." },
            { bold: '100% transparent label.', text: ' Every single dose is printed right there — no "proprietary blend" hiding how little you\'re actually getting. Once I saw how the others hide their numbers, I couldn\'t unsee it.' },
            { text: 'Offers a one-time purchase — no forced subscription you have to fight to escape.' },
            { text: '365-day money-back guarantee. A full year — the longest of anyone on this list, by a mile.' },
            { text: 'Made in the USA (Colorado). No added sugar, no additives, Non-GMO, 15 calories a cup — clean enough to drink first thing on an empty stomach.' },
          ]}
          cons={[
            'The name. "Balls & Brains"? Yeah, I know. I almost scrolled right past it — it sounds like something a couple of fifth-graders came up with on a dare. Ridiculous name, dead-serious formula. I\'m glad I got over myself, and you should too.',
            'Only available online — not on Amazon or in stores. (Their site was extremely easy to order from, though, and it sells out a lot, so don\'t sit on it.)',
          ]}
          ctaType="button"
          ctaLabel="BUY IT HERE"
          ctaHref={CTA_URL}
          showPromo
        />

        <Divider />

        {/* ── #2 RYZE ── */}
        <ProductSection
          rank={2}
          name="RYZE"
          tagline={null}
          image={null}
          imageCaption="2. Ryze Mushroom Coffee"
          pros={[
            { text: 'The most popular mushroom coffee in America right now — the brand is everywhere, and it\'s well made.' },
            { text: '6 functional mushrooms — the broadest variety on this list (lion\'s mane, cordyceps, reishi, shiitake, turkey tail, king trumpet).' },
            { text: 'Includes MCT oil and mixes easily without a frother. Comforting, creamy consistency and easy to travel with since it\'s already blended in.' },
            { text: 'One of the cheaper options at around $0.90 per serving.' },
          ]}
          cons={[
            'Proprietary blend — the doses are hidden. Six mushrooms crammed into roughly 2,000mg total works out to about 250–330mg of each. Clinical doses start around 1,000mg. The red flag with any of these: the more ingredients they cram in, the less of each one actually fits in a single scoop.',
            "Zero ingredients for a man's hormones. No Tongkat Ali, no Ashwagandha, no Shilajit — nothing dosed for testosterone or cortisol. It's a coffee swap, not an upgrade.",
            "Earthy, almost dirt-like aftertaste. Very mushroom-forward — it just didn't satisfy my coffee craving at all because it tasted so wildly different.",
            'Subscription only, and canceling is a known hassle (their Better Business Bureau page is full of complaints about exactly that). No money-back guarantee, either.',
          ]}
          ctaType="link"
          ctaLabel="Buy Ryze →"
          ctaHref={CTA_URL}
          showPromo={false}
        />

        <Divider />

        {/* ── #3 FOUR SIGMATIC ── */}
        <ProductSection
          rank={3}
          name="FOUR SIGMATIC"
          tagline={null}
          image={null}
          imageCaption="3. Four Sigmatic"
          pros={[
            { text: 'The original. They were doing mushroom coffee before it was a TikTok trend — real heritage, and credit where it\'s due.' },
            { text: 'Available in grounds, instant and whole bean. Wide selection of products too — lattes, creamers, protein powders.' },
            { text: 'Tested for mycotoxins and mold, high-quality organic ingredients.' },
            { text: 'Money-back guarantee.' },
          ]}
          cons={[
            'The flagship "Think" coffee has just 2 mushrooms (lion\'s mane and chaga), in a proprietary blend that doesn\'t disclose doses. The third-party tests I found put the lion\'s mane well under the 1,000mg used in the studies.',
            'Zero male/hormonal ingredients — no L-Theanine, no Ashwagandha, nothing for testosterone.',
            'Pricey at around $1.58 per serving ($1.30 if you subscribe), plus shipping — a lot for two underdosed mushrooms.',
            'Despite the "no mushroom flavor" claims on the site, I could actually taste the mushrooms. Dark and thin — closer to instant than a real brew.',
            'Hard to understand the difference between products like "Think" and "Focus." Lots of overlap — it gets confusing fast.',
          ]}
          ctaType="link"
          ctaLabel="Buy Four Sigmatic →"
          ctaHref={CTA_URL}
          showPromo={false}
        />

        <Divider />

        {/* ── #4 EVERYDAY DOSE ── */}
        <ProductSection
          rank={4}
          name="EVERYDAY DOSE"
          tagline={null}
          image={null}
          imageCaption="4. Everyday Dose"
          pros={[
            { text: 'The collagen makes it really creamy.' },
            { text: 'Mixes easily (no frother needed) and leaves no residue in the mug.' },
            { text: 'Not the earthy, shroomy taste some of the others have.' },
            { text: 'Comes with goodies — free spoon and frother.' },
          ]}
          cons={[
            "The collagen has a strong taste that a lot of guys (me included) find overpowering. I didn't even realize it was the collagen I was tasting until I lined it up against the others — it's an acquired taste, and it was my main gripe.",
            'The dosing is wildly off. They tell you to use 2 servings per 7oz of water, so my "30-serving" bag was gone in about 16 days. That basically makes it twice as expensive as advertised — a very common complaint in the reviews.',
            "Sneaky subscription. It's not at all obvious you'll be billed again every 30 days, and their own reviews are full of guys who got caught by it.",
            "Still zero ingredients for a man's hormones. Collagen is the gimmick — there's nothing here for testosterone or cortisol.",
          ]}
          ctaType="link"
          ctaLabel="Buy Everyday Dose →"
          ctaHref={CTA_URL}
          showPromo={false}
        />

        <Divider />

        {/* ── #5 MUD\WTR ── */}
        <ProductSection
          rank={5}
          name="MUD\WTR"
          tagline={null}
          image={null}
          imageCaption="5. MUD\WTR"
          pros={[
            { text: '4 functional mushrooms plus some great spices (cacao, masala chai, turmeric, cinnamon) for flavor and antioxidant benefits.' },
            { text: 'Tested for mycotoxins and mold, high-quality organic ingredients.' },
            { text: 'Offers a one-time purchase.' },
            { text: 'Every purchase donates back to mental health.' },
          ]}
          cons={[
            "It's not really coffee. With a black-tea base it has barely any caffeine — about 35mg, roughly 1/7th of a regular cup. Great if you're quitting caffeine entirely, but if you're a man who actually needs to wake up and get after it, this goes too far.",
            'Tastes both bland and bitter at the same time. I loved the ingredient list and really wanted to love it, but the turmeric was overpowering.',
            "Watery unless you bulk it up with creamer — which defeats the whole point of a healthier cup. And it doesn't mix well even with a frother, so you waste a ton of the blend at the bottom of the mug.",
            'The most expensive on the list at around $1.67 per serving ($1.33 if you subscribe), plus shipping.',
            "Zero male/hormonal support — it's a wellness drink, not something built for a man over 40.",
          ]}
          ctaType="link"
          ctaLabel="Buy Mud\Wtr →"
          ctaHref={CTA_URL}
          showPromo={false}
        />

        <Divider />

        {/* ── THE FINAL VERDICT ── */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'sans-serif', fontWeight: 800, fontSize: 'clamp(20px, 3vw, 28px)', color: '#111', marginBottom: 16, letterSpacing: 0.3 }}>
            THE FINAL VERDICT
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#222', marginBottom: 16 }}>
            <strong>Balls & Brains by a landslide</strong> — and trust me, I <em>wanted</em> to hate it because of the name. I even did a blind taste test of my top 3 with my brother (who pulled espresso at a coffee shop for years) and my buddy who calls himself a coffee snob, and Balls & Brains was their #1 pick too.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#222', marginBottom: 20 }}>
            Three months in, my energy, focus and drive are the best they've been since my 30s — and I'm not going back to regular coffee. It's the only one on this list that tastes like real coffee <em>and</em> was actually built for a man's body.
          </p>
          <BuyButton label="BUY IT HERE" href={CTA_URL} />

          <div style={{ marginTop: 24, fontFamily: 'sans-serif', fontSize: 15 }}>
            <p style={{ color: s.titleColor, fontWeight: 700, marginBottom: 4 }}>#1&nbsp;&nbsp;Balls & Brains</p>
            <p style={{ color: '#333', marginBottom: 4 }}>#2&nbsp;&nbsp;Ryze</p>
            <p style={{ color: '#333', marginBottom: 4 }}>#3&nbsp;&nbsp;Four Sigmatic</p>
            <p style={{ color: '#333', marginBottom: 4 }}>#4&nbsp;&nbsp;Everyday Dose</p>
            <p style={{ color: '#333', marginBottom: 0 }}>#5&nbsp;&nbsp;MUD\WTR</p>
          </div>
        </section>

        <Divider />

        {/* ── COMMENTS ── */}
        <section style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4, borderBottom: '2px solid #e5e7eb', paddingBottom: 12 }}>
            <h3 style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: 18, color: '#111', margin: 0 }}>COMMENTS (3)</h3>
            <span style={{ fontFamily: 'sans-serif', fontSize: 13, color: '#9ca3af' }}>Newest First</span>
          </div>
          <Comment
            name="Dave M."
            time="a year ago"
            likes="6 Likes"
            text="Thank you for this! Of the ones I've tried I completely agree (Ryze, Everyday Dose and MUD\WTR). Ryze is gross and leaves sludge in the bottom of the mug. Everyday Dose tastes better but the collagen is a lot, and MUD\WTR barely woke me up. Balls & Brains tastes just like a rich, premium coffee and the energy + focus is unmatched. 60 days in and I just reordered."
          />
          <Comment
            name="Tom K."
            time="a year ago"
            likes="9 Likes"
            text="ok the name is terrible lol but where can I buy balls and brains coffee?"
          />
          <div style={{ paddingLeft: 32, background: '#f9fafb', borderBottom: '1px solid #e5e7eb', paddingTop: 20, paddingBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <strong style={{ fontFamily: 'sans-serif', fontSize: 14, color: s.titleColor }}>Mike R.</strong>
              <span style={{ fontFamily: 'sans-serif', fontSize: 12, color: '#9ca3af' }}>· a year ago · 3 Likes (reply)</span>
            </div>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: 15, lineHeight: 1.6, color: '#333', margin: 0 }}>
              <a href={CTA_URL} style={{ color: s.titleColor, textDecoration: 'underline' }}>You can buy Balls & Brains here →</a>
            </p>
          </div>
        </section>

        {/* ── DISCLAIMER ── */}
        <p style={{ fontFamily: 'sans-serif', fontSize: 11, color: '#9ca3af', lineHeight: 1.6, borderTop: '1px solid #e5e7eb', paddingTop: 20, marginBottom: 40, fontStyle: 'italic' }}>
          † These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. This article contains affiliate links — if you purchase through our links we may receive a commission at no additional cost to you. All products were independently purchased and evaluated.
        </p>

      </div>
    </div>
  );
}
