import kitImg from '@assets/products/3kits-us.webp';

const EXIT_URL = 'https://ballsnbrains.com/shp/backredirect/us/01/';

export default function ExitIntentPopup({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[22rem] rounded-2xl overflow-hidden"
        style={{
          background: '#0d0b08',
          boxShadow: '0 0 0 1.5px #c49b43, 0 0 60px 0 rgba(207,153,71,0.25), 0 24px 64px rgba(0,0,0,0.7)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top line */}
        <div
          className="h-[3px] w-full"
          style={{ background: 'linear-gradient(90deg, transparent 0%, #FED9A5 40%, #D09439 70%, transparent 100%)' }}
        />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 transition-colors cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        {/* Product image */}
        <div
          className="relative w-full flex items-end justify-center overflow-hidden"
          style={{
            height: '200px',
            background: 'radial-gradient(ellipse 70% 80% at 50% 100%, rgba(207,153,71,0.18) 0%, transparent 70%)',
          }}
        >
          <img
            src={kitImg}
            alt="Balls & Brains"
            className="h-full w-auto object-contain relative z-10"
            style={{ filter: 'drop-shadow(0 8px 32px rgba(207,153,71,0.3))' }}
          />
        </div>

        {/* Content */}
        <div className="px-6 pt-4 pb-6 text-center" style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}>
          {/* Badge */}
          <span
            className="inline-flex items-center gap-1 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
            style={{
              background: 'rgba(207,153,71,0.12)',
              border: '1px solid rgba(207,153,71,0.35)',
              color: '#D3AE79',
            }}
          >
            ⚡ Wait — Don&apos;t Leave Yet
          </span>

          {/* Headline */}
          <p
            className="text-[1.5rem] font-black leading-tight mb-2"
            style={{ fontFamily: "'Mona Sans', system-ui, sans-serif" }}
          >
            <span className="text-white">Coffee not </span>
            <span
              style={{
                background: 'linear-gradient(90deg, #FED9A5 0%, #D09439 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              your thing?
            </span>
          </p>

          <p className="text-white/55 text-[0.8125rem] leading-relaxed mb-5">
            No worries — we have other formats to help you{' '}
            <span style={{ color: '#D3AE79', fontWeight: 600 }}>optimize testosterone</span>{' '}
            without a single sip of coffee.
          </p>

          {/* CTA */}
          <a
            href={EXIT_URL}
            className="flex items-center justify-center w-full py-3.5 rounded-xl font-extrabold text-[0.9375rem] tracking-wide no-underline transition-all hover:brightness-110 active:scale-[0.98] mb-3"
            style={{
              background: 'radial-gradient(143% 71% at 38% -10%, #FED9A5 0%, #D09439 100%)',
              color: '#0a0908',
              border: '1px solid rgba(255,220,150,0.4)',
              boxShadow: '0 0 40px rgba(207,153,71,0.5)',
              fontFamily: "'Satoshi', system-ui, sans-serif",
            }}
          >
            Check Out Our Other Solutions →
          </a>

          <button
            type="button"
            onClick={onClose}
            className="text-white/25 hover:text-white/50 text-xs font-medium transition-colors cursor-pointer"
            style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
          >
            No thanks, I&apos;ll stick with coffee
          </button>
        </div>
      </div>
    </div>
  );
}
