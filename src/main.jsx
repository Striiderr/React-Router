import * as React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './expenses';
import Invoices from './invoices';
import Invoice from './invoice';

import './main.css';

let rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
