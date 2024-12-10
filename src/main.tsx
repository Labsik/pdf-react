import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
