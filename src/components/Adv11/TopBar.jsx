import { useEffect, useState } from 'react';
import logo from '../../assets/adv11/logo-font-light.svg';
import { useInView } from './ui';

// 3d 14h 22m a partir da primeira visita (igual Erodus). Guarda o deadline
// pra não resetar a cada reload.
const DURATION = (3 * 86400 + 14 * 3600 + 22 * 60) * 1000;
const STORAGE_KEY = 'adv11-deadline';

const getDeadline = () => {
  const fresh = Date.now() + DURATION;
  try {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    if (saved > Date.now()) return saved;
    localStorage.setItem(STORAGE_KEY, String(fresh));
  } catch {
    // storage bloqueado: segue com deadline em memória
  }
  return fresh;
};

// Pré-render: servidor e 1º render do cliente mostram a duração cheia; o deadline
// real (localStorage) só é lido depois do mount pra não divergir no hydrate.
const useCountdown = () => {
  const [deadline, setDeadline] = useState(null);
  const [now, setNow] = useState(0);
  useEffect(() => {
    setDeadline(getDeadline());
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = deadline === null ? DURATION : Math.max(0, deadline - now);
  return {
    days: Math.floor(diff / 864e5),
    hrs: Math.floor((diff % 864e5) / 36e5),
    min: Math.floor((diff % 36e5) / 6e4),
    sec: Math.floor((diff % 6e4) / 1e3),
  };
};

const pad = (n) => String(n).padStart(2, '0');

const TimeBox = ({ value, unit }) => (
  <span
    className="flex min-w-[2.125rem] flex-col items-center rounded-lg px-1.5 pt-1 pb-0.5 text-bb-dark desk:min-w-[2.625rem]"
    style={{ background: 'radial-gradient(143% 71% at 38% -10%, #FED9A5 0%, #D09439 100%)' }}
  >
    <span className="text-[0.875rem] font-black leading-none tabular-nums desk:text-[1.0625rem]">
      {value}
    </span>
    <span className="mt-0.5 text-[0.4375rem] font-bold leading-none tracking-[0.08em] desk:text-[0.5rem]">
      {unit}
    </span>
  </span>
);

const Sep = () => (
  <span className="text-[0.875rem] font-bold text-bb-gold" aria-hidden>
    :
  </span>
);

export default function TopBar() {
  const { days, hrs, min, sec } = useCountdown();
  const [shopRef, shopAnim] = useInView();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bb-dark/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-[71.25rem] items-center justify-between gap-3 px-4 py-2.5 desk:py-3">
        <a href="#top" className="shrink-0" aria-label="Balls & Brains">
          <img
            src={logo}
            alt="Balls & Brains"
            width={1015}
            height={346}
            fetchPriority="high"
            className="h-[1.875rem] w-auto desk:h-10"
          />
        </a>

        <div
          className="flex items-center gap-2 desk:gap-4"
          role="timer"
          aria-label={`44% off for life ends in ${days} days ${hrs} hours ${min} minutes`}
        >
          <span className="hidden text-[0.875rem] font-medium text-bb-text-dim sm:inline">
            44% Off For Life Ends In
          </span>
          <span className="flex items-center gap-1">
            <TimeBox value={days} unit="DAYS" />
            <Sep />
            <TimeBox value={pad(hrs)} unit="HRS" />
            <Sep />
            <TimeBox value={pad(min)} unit="MIN" />
            <Sep />
            <TimeBox value={pad(sec)} unit="SEC" />
          </span>
        </div>

        <a ref={shopRef} data-anim={shopAnim} href="#offer" className="btn-cta-gold hidden desk:inline-block">
          Shop Now
        </a>
      </div>
    </header>
  );
}
