import React from 'react';
import  ReactDOM from 'react-dom/client';


import App from './App';
import './index.css';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// ReactDOM.render(<App/> , document.getElementById('root'));
// ReactDOM.createRoot(<App/> , document.getElementById('root'));

root.render(<App />);