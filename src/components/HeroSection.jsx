import ProductGallery from './ProductGallery';
import BuyBox from './BuyBox';

export default function HeroSection({ mode, qty, setMode, setQty, onOpenPopup }) {
  return (
    <main className="px-4 py-6 md:py-12">
      <div className="max-w-[71.25rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
        <ProductGallery qty={qty} />
        <BuyBox mode={mode} qty={qty} setMode={setMode} setQty={setQty} onOpenPopup={onOpenPopup} />
      </div>
    </main>
  );
}
