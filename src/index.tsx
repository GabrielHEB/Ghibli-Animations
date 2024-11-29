import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Arquivo de estilos, ajuste o nome se necessário.
import App from './App'; // O componente principal, ajuste se necessário.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Refere-se à div no index.html
);
