import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'dockview/dist/styles/dockview.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './Home';
import Editor from './Editor';
import Navbar from './Navbar';
import Footer from './Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <div className="vh-100 d-flex flex-column px-2">
          <div className="flex-column justify-content-center">
            <Navbar />
          </div>

          <div className="flex-column justify-content-center flex-grow-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/editor" element={<Editor />}/>
            </Routes>
          </div>

        <div className="flex-column justify-content-center">
          <Footer />
        </div>
      </div>
    </BrowserRouter>

  </React.StrictMode>
);
