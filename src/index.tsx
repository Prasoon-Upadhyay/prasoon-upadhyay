import React from 'react';
import { createRoot } from 'react-dom/client';
import process from 'process/browser';
import 'normalize.css';
import './theme/icons';
import App from './App';
import './index.css';

// Older markdown dependencies still expect CRA-style browser shims.
if (typeof globalThis.process === 'undefined') {
  globalThis.process = process;
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
