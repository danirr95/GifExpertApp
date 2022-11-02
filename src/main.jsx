import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExperApp';

//Importamos el archivo de estilos en el 'main' para que afecte a la app de manera global
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
