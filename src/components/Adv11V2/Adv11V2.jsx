// ADV11 V2 — copy nova × layout B&B. Doc: "ADV11 l V2 l copy nova x layout BNB l 18.09.26".
// Do doc: coluna única, header preto/dourado, CTAs inline marcados + um CTA final, sem card lateral,
// sem barra de contador, sem referências, tabela 👍👎 da copy validada no ponto marcado.
// Visual: os fundamentos de UI da V1 (Satoshi/Mona, tokens bb-*, .btn-cta, ícones 3D, Trusted by em marquee).
import logo from '../../assets/adv11/logo-font-light.svg';
import { TrustedBy } from '../Adv11/Article';
import { Footer } from '../Adv11/Closing';
import { Comments } from '../Adv11/Social';
import Body from './Body';
import { header } from './data';

// Header preto/dourado: logo (símbolo dourado + marca em branco) centralizado, sem contador.
const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-bb-dark/95 backdrop-blur-md">
    <div className="mx-auto flex max-w-[71.25rem] items-center justify-center px-4 py-3">
      <a href="#top" aria-label="Balls & Brains">
        <img src={logo} alt="Balls & Brains" width={1015} height={346} fetchPriority="high" className="h-9 w-auto desk:h-10" />
      </a>
    </div>
  </header>
);

// Cabeçalho do artigo: label, breadcrumb, H1, byline, TRUSTED BY, autor + data.
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
    <div className="mt-5 flex items-center gap-4">
      {/* TODO: avatar IA do Mark Sullivan (regra da casa) — por enquanto iniciais */}
      <span
        className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-full font-mona text-[1rem] font-semibold text-bb-dark ring-2 ring-bb-gold ring-offset-2"
        style={{ background: 'radial-gradient(143% 71% at 38% -10%, #FED9A5 0%, #D09439 100%)' }}
        aria-hidden
      >
        MS
      </span>
      <div>
        <p className="text-[1rem] font-bold text-bb-text-dark">{header.byline}</p>
        <p className="text-[0.8125rem] text-bb-muted">
          <time dateTime={header.dateTime}>{header.date}</time>
        </p>
      </div>
    </div>
    <TrustedBy />
  </div>
);

export default function Adv11V2() {
  return (
    <div className="min-h-screen bg-white text-bb-text-dark">
      <SiteHeader />

      {/* Coluna única */}
      <main className="mx-auto max-w-[47.5rem] px-4 pb-6">
        <article>
          <ArticleHeader />
          <Body />
        </article>
        <Comments />
      </main>

      <Footer />
    </div>
  );
}
