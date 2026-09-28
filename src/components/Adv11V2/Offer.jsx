import pouch from '../../assets/adv11/pouch.webp';
import stamp from '../../assets/adv11/guarantee-stamp.webp';
import { Icon } from '../Adv11/icons';
import { FlagUS3D, Icon3D } from '../Adv11/icons3d';
import { Badge, CtaButton } from '../Adv11/ui';
import { offer } from './data';

// 2.7 — Bloco de oferta (fundo branco, borda, centralizado; alvo do "Shop Now" do topo).
export default function OfferBox() {
  return (
    <section
      id="offer"
      className="relative mt-10 scroll-mt-24 overflow-hidden rounded-3xl border-2 border-bb-gold bg-white px-5 pt-8 pb-8 shadow-[0_1.5rem_4rem_-1.5rem_rgba(125,93,44,0.35)] desk:px-10"
    >
      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative mx-auto w-full max-w-[17.5rem]">
          <div className="absolute inset-x-6 bottom-2 h-6 rounded-[50%] bg-black/25 blur-xl" aria-hidden />
          <img src={pouch} alt="Balls N'Brains Mushroom Coffee For Men" loading="lazy" width={546} height={681} className="relative w-full" />
          <img
            src={stamp}
            alt="365-day money-back guarantee"
            loading="lazy"
            className="absolute -right-2 bottom-4 w-[5.5rem] rotate-[-8deg] drop-shadow-lg desk:w-24"
          />
        </div>

        <div>
          <h2 className="text-[1.25rem] leading-snug text-bb-text-dark desk:text-[1.375rem]">{offer.name}</h2>
          <p className="mt-1 text-[0.9375rem] text-bb-muted">{offer.tagline}</p>

          <div className="mt-4 flex items-end gap-3">
            <span className="pb-1.5 text-[1.25rem] font-medium text-[#736e65] line-through decoration-bb-red decoration-2">
              {offer.was}
            </span>
            <span className="font-mona text-[3.25rem] leading-none font-semibold text-bb-text-dark">{offer.now}</span>
          </div>
          <p className="mt-3 inline-block rounded-md bg-bb-red px-2.5 py-1 text-[0.75rem] font-bold text-white">
            {offer.label}
          </p>

          <p className="mt-4 text-[0.875rem] font-bold text-bb-text-dark">{offer.includedTitle}</p>
          <ul className="mt-2 space-y-2">
            {offer.included.map(([icon, item]) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.9375rem] text-[#2a2723]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bb-sand text-bb-gold-dark">
                  <Icon name={icon} size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-2 border-y border-bb-line py-5">
        <Badge icon={<Icon3D name="shield" size={48} />} label={offer.badges[0]} />
        <Badge icon={<Icon3D name="truck" size={48} />} label={offer.badges[1]} />
        <Badge icon={<FlagUS3D size={48} />} label={offer.badges[2]} />
      </div>

      <div className="mt-7">
        <CtaButton size="lg">
          <Icon3D name="percent" size={30} className="-my-1" />
          {offer.cta}
        </CtaButton>
        <p className="mt-3 text-center text-[0.8125rem] text-bb-muted">{offer.note}</p>
      </div>
    </section>
  );
}
