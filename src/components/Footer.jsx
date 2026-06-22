import footerLogo from '@assets/utils/footer-logo.svg';

export default function Footer() {
  return (
    <footer className="bg-bb-dark border-t border-white/10 px-4 py-12 md:py-16 text-center">
      <div className="max-w-[60rem] mx-auto flex flex-col items-center gap-5">
        <img src={footerLogo} alt="Balls & Brains" className="h-9 md:h-11 object-contain" />
        <p className="text-white text-[0.9375rem] md:text-[1.0625rem]">
          Still have questions? Email us at{' '}
          <a
            href="mailto:support@ballsnbrains.com"
            className="text-bb-gold-mid hover:underline"
          >
            support@ballsnbrains.com
          </a>
        </p>
        <p className="text-white/40 text-[0.8125rem]">© 2026 Balls and Brains.</p>
        <p className="text-white/25 text-[0.625rem] md:text-[0.75rem] leading-relaxed">
          All rights reserved. Not evaluated by FDA. Not intended to diagnose, treat, cure, or
          prevent disease. Consult physician. We recommend baseline testosterone testing. This site
          is not part of the Facebook website or Meta Inc. Additionally, this site is NOT endorsed
          by Facebook in any way. FACEBOOK is a registered trademark of FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
}
