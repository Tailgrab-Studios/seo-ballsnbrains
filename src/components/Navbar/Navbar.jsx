import React from 'react';
import logo from '../../assets/utils/ball-logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-[#070707] border-b border-[#1a1a1a] px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <img src={logo} alt="Balls & Brains" className="h-10 object-contain" />

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#ingredients"
            className="text-white/70 font-sans text-sm hover:text-white transition-colors no-underline"
          >
            Ingredients
          </a>
          <a
            href="#offer"
            className="text-white/70 font-sans text-sm hover:text-white transition-colors no-underline"
          >
            Pricing
          </a>
          <a
            href="#reviews"
            className="text-white/70 font-sans text-sm hover:text-white transition-colors no-underline"
          >
            Reviews
          </a>
          <a
            href="#faq"
            className="text-white/70 font-sans text-sm hover:text-white transition-colors no-underline"
          >
            FAQ
          </a>
        </div>

        <a
          href="https://ballsnbrains.com/shp/tmc-adv/08/p2-v2/"
          className="bg-[#dca331] text-white font-sans font-black text-xs uppercase tracking-widest py-3 px-6 rounded-full no-underline hover:bg-[#c8941d] transition-colors"
        >
          Get 34% Off
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
