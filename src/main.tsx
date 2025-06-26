import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './common/styles/variables.scss';
import { RouterApp } from './common/routers/RouterApp.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <RouterApp />
    </StrictMode>,
  </BrowserRouter>
)
