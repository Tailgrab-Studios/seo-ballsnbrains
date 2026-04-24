import React from 'react';
import logo from '../../assets/utils/ball-logo.svg'; 

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a]">
      {/* Top border dourada */}
      <div className="h-px w-full bg-[#dca331] opacity-30" />

      <div className="py-14 px-6 flex flex-col items-center gap-6">
        {/* Logo */}
        <img src={logo} alt="Balls & Brains" className="h-14 object-contain" />

        {/* Contact */}
        <p className="text-white/50 font-sans text-sm md:text-base text-center leading-relaxed">
          Still have questions? Email us at{' '}
          <a
            href="mailto:support@ballsnbrains.com"
            className="text-[#dca331] hover:text-[#f0b93a] transition-colors no-underline"
          >
            support@ballsnbrains.com
          </a>
        </p>

        {/* Copyright */}
        <p className="text-white/25 font-sans text-xs text-center">
          © 2026 Balls and Brains. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
