import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Preload das fontes usadas acima da dobra (corpo, negrito e títulos) pra evitar troca
// de fonte visível no primeiro paint. Os nomes têm hash, então o link é gerado no build.
const PRELOAD_FONTS = ['Satoshi-Regular', 'Satoshi-Bold', 'MonaSansExpanded-Medium']

function preloadFonts() {
  return {
    name: 'preload-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html
        const tags = Object.keys(ctx.bundle)
          .filter((file) => file.endsWith('.woff2') && PRELOAD_FONTS.some((f) => file.includes(`/${f}-`)))
          .map((file) => ({
            tag: 'link',
            attrs: { rel: 'preload', href: file, as: 'font', type: 'font/woff2', crossorigin: '' },
            injectTo: 'head',
          }))
        return { html, tags }
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), preloadFonts()],
})
