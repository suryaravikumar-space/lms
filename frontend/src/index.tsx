// project entry point from index.html page

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
const rootElement = document.getElementById('root') as HTMLElement | null;
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
  } else {
    console.error("Root element not found");
  }


