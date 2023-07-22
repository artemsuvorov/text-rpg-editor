import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Component from './Component';

import 'dockview/dist/styles/dockview.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>
);
