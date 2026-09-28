import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

// Injeta o HTML renderizado no servidor dentro do #root do dist/index.html.
// Conteúdo no HTML inicial = texto indexável sem JS e LCP sem esperar o bundle.
async function prerender() {
  const __dirname = path.resolve();
  const entry = path.resolve(__dirname, "dist-ssr/entry-server.js");
  const { render } = await import(pathToFileURL(entry).href);

  // Mesmo ajuste do afterBuild: assets relativos pra funcionar em qualquer subpasta.
  const appHtml = render().replace(/(["\s,])\/assets\//g, "$1assets/");

  const indexPath = path.resolve(__dirname, "dist/index.html");
  const html = fs.readFileSync(indexPath, "utf8");
  if (!html.includes('<div id="root"></div>')) {
    throw new Error('prerender: <div id="root"></div> não encontrado em dist/index.html');
  }
  fs.writeFileSync(indexPath, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
  fs.rmSync(path.resolve(__dirname, "dist-ssr"), { recursive: true, force: true });

  console.log(`Pré-renderizado: ${Math.round(appHtml.length / 1024)}KB de HTML injetado em dist/index.html`);
}

prerender();
