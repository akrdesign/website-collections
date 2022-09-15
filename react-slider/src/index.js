import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './container/Main';
import './styles/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
