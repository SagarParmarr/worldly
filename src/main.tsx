import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

polyfillCountryFlagEmojis();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
