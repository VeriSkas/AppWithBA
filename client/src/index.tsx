import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import './app/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
