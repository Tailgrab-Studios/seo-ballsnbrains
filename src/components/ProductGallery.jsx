import kit1 from '@assets/products/1kit.webp';
import kit2 from '@assets/products/2kits.webp';
import kit3 from '@assets/products/3kits.webp';
import checkGold from '@assets/icons/check-gold.svg';
import { PRODUCT_BENEFITS } from '@/data/constants';

const KIT_IMAGES = [kit1, kit2, kit3];

export default function ProductGallery({ qty = 0 }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-black border border-bb-separator">
        <img
          src={KIT_IMAGES[qty]}
          alt="Balls & Brains Testosterone Coffee"
          width={400}
          height={400}
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-contain"
        />
      </div>

      <ul className="rounded-2xl border border-bb-separator bg-[#14100c] p-5 space-y-3">
        {PRODUCT_BENEFITS.map(b => (
          <li key={b} className="flex items-center gap-3">
            <img
              src={checkGold}
              alt=""
              aria-hidden="true"
              className="shrink-0 w-5 h-5"
            />
            <span className="text-white/90 text-[0.875rem]">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
