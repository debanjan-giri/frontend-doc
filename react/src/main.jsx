import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Basic } from './Basic';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Basic />
  </StrictMode>,
)
