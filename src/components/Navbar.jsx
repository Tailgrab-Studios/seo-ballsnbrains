import bbSymbol from '@assets/utils/bb-symbol.svg';
import CartIcon from './shared/CartIcon';

export default function Navbar({ onCartClick }) {
  return (
    <nav className="px-4 border-b border-bb-separator">
      <div className="max-w-[71.25rem] mx-auto flex items-center justify-between py-3.5">
        <a href="#/" aria-label="Balls & Brains home">
          <img src={bbSymbol} alt="Balls & Brains" className="h-8 w-auto object-contain" />
        </a>
        <span className="text-bb-gold/80 text-[0.8125rem] font-medium tracking-[0.3em] uppercase">
          Testosterone Coffee
        </span>
        <button
          type="button"
          onClick={onCartClick}
          aria-label="Cart"
          className="flex items-center text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <CartIcon className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
