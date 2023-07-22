import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Editor from './Editor';

import 'dockview/dist/styles/dockview.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>    
        <Route path="/editor" element={<Editor />}/>    
      </Routes>
    </BrowserRouter>    

  </React.StrictMode>
);
