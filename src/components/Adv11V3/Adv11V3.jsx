// ADV11 V3 — copy nova × layout Erodus (clone da fórmula inteira).
// Doc: "ADV11 l V3 l copy nova x layout ERODUS l 18.09.26". Sem tabela 👍👎; com referências e comentários.
// Topbar, card lateral, Trusted by, FAQ, referências, comentários, rodapé e barra mobile são os da V1 (mesma spec).
import { TrustedBy } from '../Adv11/Article';
import { Footer, References } from '../Adv11/Closing';
import { MobileBar, SidebarCard } from '../Adv11/Offer';
import { Comments } from '../Adv11/Social';
import TopBar from '../Adv11/TopBar';
import Body from './Body';
import { header } from './data';

// 2.2 — Cabeçalho: label, breadcrumb, H1, byline, barra TRUSTED BY, card do autor.
// Card: avatar + nome + data/hora. Os "3 contadores" da spec não entram (o doc não traz dados pro autor da V3).
const ArticleHeader = () => (
  <div id="top">
    <p className="border-b border-bb-line pt-6 pb-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[#736e65]">
      Advertorial
    </p>
    <nav aria-label="Breadcrumb" className="py-2.5 text-[0.8125rem] text-[#736e65]">
      <a href="#top" className="hover:underline">{header.breadcrumb[0]}</a>
      <span className="mx-1.5">›</span>
      <a href="#top" className="hover:underline">{header.breadcrumb[1]}</a>
      <span className="mx-1.5">›</span>
      <span className="text-bb-muted">{header.breadcrumb[2]}</span>
    </nav>
    <h1 className="mt-2 text-[1.75rem] leading-[1.18] tracking-[-0.01em] text-bb-text-dark text-balance desk:text-[2.375rem] desk:leading-[1.14]">
      {header.h1}
    </h1>
    <p className="mt-3 text-[1rem] text-bb-muted">{header.byline}</p>
    <TrustedBy />
    <div className="flex items-center gap-4 border-y border-bb-line py-4">
      {/* TODO: avatar IA do Mark Sullivan (regra da casa) — por enquanto iniciais */}
      <span
        className="flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full font-mona text-[1.125rem] font-semibold text-bb-dark ring-2 ring-bb-gold ring-offset-2"
        style={{ background: 'radial-gradient(143% 71% at 38% -10%, #FED9A5 0%, #D09439 100%)' }}
        aria-hidden
      >
        MS
      </span>
      <div>
        <p className="text-[1rem] font-bold text-bb-text-dark">{header.byline.replace(/^By /, '')}</p>
        <p className="text-[0.8125rem] text-bb-muted">
          <time dateTime={header.dateTime}>{header.date}</time>
        </p>
      </div>
    </div>
  </div>
);

export default function Adv11V3() {
  return (
    <div className="min-h-screen bg-white text-bb-text-dark">
      <TopBar />

      <div className="mx-auto flex max-w-[71.25rem] items-start gap-10 px-4 xl:gap-14">
        <main className="min-w-0 max-w-[47.5rem] flex-1 pb-6">
          <article>
            <ArticleHeader />
            <Body />
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
