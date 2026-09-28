import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// No build o HTML vem pré-renderizado (prerender.js) → hidrata; no dev o root vem vazio.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
