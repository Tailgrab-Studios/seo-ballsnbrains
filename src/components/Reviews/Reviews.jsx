import React, { useState } from 'react';

const categories = ['Taste', 'Benefits', 'Caffeine', 'Testosterone'];

const reviews = {
  Taste: [
    {
      title: 'TASTE',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
    {
      title: 'Escrever título aqui',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
    {
      title: 'Escrever título aqui',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
  ],
  Benefits: [
    {
      title: 'Benefits',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
    {
      title: 'Escrever título aqui',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
    {
      title: 'Escrever título aqui',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
  ],
  Caffeine: [
    {
      title: 'Caffeine',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
    {
      title: 'Escrever título aqui',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
    {
      title: 'Escrever título aqui',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
  ],
  Testosterone: [
    {
      title: 'Testosterone',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
    {
      title: 'Escrever título aqui',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
    },
    {
      title: 'Escrever título aqui',
      body: 'Escrever relato aqui.',
      name: 'Nome, Idade',
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
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
            href="#comprar"
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
