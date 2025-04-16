import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import('container/BootstrapCSS')
  .then(() => {
    console.log('Bootstrap CSS carregado remotamente!');
  })
  .catch((err) => console.error('Erro ao carregar Bootstrap CSS:', err));

// Substitua ReactDOM.render por ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
