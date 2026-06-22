import fs from "fs";
import path from "path";

function afterBuild() {
  const __dirname = path.resolve();
  // open /dist/assets/index-*.js and change all '/assets' to 'assets'
  const files = fs.readdirSync(path.resolve(__dirname, "dist/assets"));
  files.forEach((file) => {
    if (file.startsWith("index-") && (file.endsWith(".js") || file.endsWith(".css"))) {
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

  // open /dist/index.html and fix all paths
  let content;

  const indexPath = path.resolve(__dirname, "dist/index.html");
  content = fs.readFileSync(indexPath, "utf8");

  // Fix JS/CSS references
  content = content.replace(/\/assets\/(index-.*\.js)/g, "$1");
  content = content.replace(/\/assets\/(index-.*\.css)/g, "$1");

  // Fix favicon
  content = content.replace(/href="\/favicon\.svg"/g, 'href="favicon.svg"');

  // Fix font preload hrefs: replace /src/assets/fonts/X.woff2 with assets/X-HASH.woff2
  const allDistFiles = fs.readdirSync(path.resolve(__dirname, "dist/assets"));
  const fontPreloadNames = ["Satoshi-Regular", "Satoshi-Bold", "MonaSansExpanded-ExtraBold"];
  fontPreloadNames.forEach((name) => {
    const hashedFile = allDistFiles.find(
      (f) => f.startsWith(name) && f.endsWith(".woff2")
    );
    if (hashedFile) {
      content = content.replace(
        new RegExp(`href="[^"]*${name}[^"]*\\.woff2"`),
        `href="assets/${hashedFile}"`
      );
      console.log(`Preload font atualizado: ${name} → assets/${hashedFile}`);
    }
  });

  fs.writeFileSync(indexPath, content);
  console.log("index.html atualizado.");
}



afterBuild();