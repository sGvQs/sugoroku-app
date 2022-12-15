import React from 'react';
import ReactDOM from 'react-dom/client';
import { SugorokuStateProvider } from './contexts';
import { App } from './pages/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SugorokuStateProvider>
    <App />
  </SugorokuStateProvider>
);
