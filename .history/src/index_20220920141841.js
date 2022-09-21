import React from 'react';
import ReactDOM from 'react-dom/client';
import './auxiliary/App.css';
import App from './App';
// import reportWebVitals from './auxiliary/reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.createRoot(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
