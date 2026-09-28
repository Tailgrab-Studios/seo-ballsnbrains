// ADV11 V1 — copy validada × layout Erodus (ref: drinkerodus.com/pages/erodus-review),
// com os fundamentos de UI do projeto seo-balls-and-brains-desing.
// Ordem dos blocos segue a spec do doc "ADV11 l V1 l copy validada x layout ERODUS".
import { ArticleHeader, ComparisonTable, ProductDetails, Reasons } from './Article';
import { Faq, Footer, References } from './Closing';
import { MobileBar, OfferBox, SidebarCard } from './Offer';
import { Comments, Testimonials } from './Social';
import TopBar from './TopBar';
import { RatingStrip } from './ui';

export default function Adv11V1() {
  return (
    <div className="min-h-screen bg-white text-bb-text-dark">
      <TopBar />

      <div className="mx-auto flex max-w-[71.25rem] items-start gap-10 px-4 xl:gap-14">
        <main className="min-w-0 max-w-[47.5rem] flex-1 pb-6">
          <article>
            <ArticleHeader />
            <ComparisonTable />
            <Reasons />
            <ProductDetails />
            <Testimonials />
            <OfferBox />
            <RatingStrip />
            <Faq />
            <RatingStrip />
            <References />
          </article>
          <Comments />
        </main>

        <div className="hidden w-[16.875rem] shrink-0 self-stretch pt-6 desk:block xl:w-[18.75rem]">
          <SidebarCard />
        </div>
      </div>

      <Footer />
      <MobileBar />
    </div>
  );
}
