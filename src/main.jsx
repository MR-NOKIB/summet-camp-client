import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <div className='max-w-[1450px] mx-auto'>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </div>,
)
