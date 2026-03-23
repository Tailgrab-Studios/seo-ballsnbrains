import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 mt-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo Institucional */}
        <div className="text-3xl font-bold mb-10 tracking-tight">
          Mushroom Coffee Labs
          <span className="text-xs align-top font-normal">®</span>
        </div>

        {/* Links de Navegação Centralizados */}
        <nav className="flex justify-center gap-8 mb-14 text-[15px] font-medium border-b border-gray-900 pb-10 w-full">
          <a href="#" className="underline underline-offset-4 decoration-1">
            Privacy
          </a>
          <a href="#" className="underline underline-offset-4 decoration-1">
            Refund
          </a>
          <a href="#" className="underline underline-offset-4 decoration-1">
            Shipping
          </a>
          <a href="#" className="underline underline-offset-4 decoration-1">
            T&C
          </a>
        </nav>

        {/* Informações de Contato e Endereço */}
        <div className="w-full text-left space-y-8 mb-12">
          <div className="space-y-4">
            <h4 className="font-black text-base uppercase">Contact</h4>
            <div>
              <p className="font-bold text-[14px]">Send us an email at:</p>
              <p className="text-[14px] opacity-90">
                support@tryMushroom Coffee Labs.com
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-[14px]">Office hours:</h4>
            <p className="text-[14px] opacity-90">9am - 5pm EDT (Mon - Sat)</p>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-[14px]">Business Address:</h4>
            <address className="not-italic text-[14px] leading-relaxed opacity-90">
              Mushroom Coffee Labs LLC
              <br />
              447 Broadway, 2nd floor, suite 2530, NY 10030, USA
              <br />
              <span className="text-xs opacity-80">
                (for mail only, not for returning items)
              </span>
            </address>
          </div>
        </div>

        {/* Disclosure Médico e Avisos Legais */}
        <div className="w-full text-[12px] leading-[1.6] space-y-6 opacity-80 text-left border-t border-gray-900 pt-10">
          <p>
            <span className="font-bold">MEDICAL & HEALTH DISCLOSURE:</span> The
            information and other content provided in this page, or in any
            linked materials, are not intended and should not be construed as
            medical advice, nor is the information a substitute for professional
            medical expertise or treatment.
          </p>
          <p>
            If you or any other person has a medical concern, you should consult
            with your health care provider or seek other professional medical
            treatment. Never disregard professional medical advice or delay in
            seeking it because of something that have read on this page or in
            any linked materials. If you think you may have a medical emergency,
            call your doctor or emergency services immediately. These statements
            have not been evaluated by the Food and Drug Administration. This
            product is not intended to diagnose, treat, cure or prevent any
            disease, including sleep apnea.
          </p>
          <p className="italic">
            *The reviews and comments on this page are real customer reviews
            sent via email and social media comments by real customers, all
            individuals are unique, results may vary.
          </p>
        </div>

        <div className="w-full text-center text-[11px] font-medium opacity-70 pt-16 pb-20">
          © 2026, Copyright Mushroom Coffee Labs™ | All Rights Reserved. |
          Mushroom Coffee Labs™ is a registered trademark and a patented
          technology.
        </div>
      </div>
    </footer>
  );
}
