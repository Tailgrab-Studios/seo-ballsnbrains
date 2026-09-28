import fs from "fs";
import path from "path";

function afterBuild() {
  const __dirname = path.resolve();
  // open /dist/assets/index-*.js and change all '/assets' to 'assets'
  const files = fs.readdirSync(path.resolve(__dirname, "dist/assets"));
  // CSS também vai pra raiz do dist: url(/assets/fonte.woff2) quebraria em subpasta
  // (/shp/...) → vira url(assets/fonte.woff2), relativo ao próprio CSS.
  files.forEach((file) => {
    if (file.startsWith("index-") && file.endsWith(".css")) {
      const filePath = path.resolve(__dirname, "dist/assets", file);
      const content = fs.readFileSync(filePath, "utf8").replace(/url\(\/assets\//g, "url(assets/");
      fs.writeFileSync(filePath, content);
      console.log("Modificado url(/assets/ para url(assets/ em", file);
    }
  });

  files.forEach((file) => {
    if (file.startsWith("index-") && file.endsWith(".js")) {
      const filePath = path.resolve(__dirname, "dist/assets", file);
      let content = fs.readFileSync(filePath, "utf8");
      // Replace all occurrences of /assets with assets
      content = content.replace(/\/assets/g, "assets");
      fs.writeFileSync(filePath, content);

      console.log("Modificado /assets para assets em", file);
    }
  });

  // move index-*.js and index-*.css from /dist/assets to /dist
  files.forEach((file) => {
    if (
      file.startsWith("index-") &&
      (file.endsWith(".js") || file.endsWith(".css"))
    ) {
      fs.renameSync(
        path.resolve(__dirname, "dist/assets", file),
        path.resolve(__dirname, "dist", file)
      );
      console.log("Movido", file, "de /dist/assets para /dist");
    }
  });

  // open /dist/index.html and change /assets/index-*.js to index-*.js and /assets/index-*.css to index-*.css
  let content;

  const indexPath = path.resolve(__dirname, "dist/index.html");
  content = fs.readFileSync(indexPath, "utf8");
  content = content.replace(/\/assets\/(index-.*\.js)/g, "$1");
  content = content.replace(/\/assets\/(index-.*\.css)/g, "$1");

  // CSS inline no <head>: tira um request bloqueante do caminho do primeiro paint.
  // As url(assets/...) continuam válidas porque o CSS já vivia na raiz do dist.
  content = content.replace(
    /<link rel="stylesheet"[^>]*href="(index-[^"]+\.css)"[^>]*>/,
    (tag, file) => {
      const css = fs.readFileSync(path.resolve(__dirname, "dist", file), "utf8");
      return `<style>${css}</style>`;
    }
  );
  fs.writeFileSync(indexPath, content);

  console.log(
    "Modificado /assets/index-*.js para index-*.js e /assets/index-*.css para index-*.css em index.html"
  );
}



afterBuild();