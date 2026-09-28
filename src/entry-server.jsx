// Entrada de SSR usada só no build (prerender.js) pra gerar o HTML estático da página.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
