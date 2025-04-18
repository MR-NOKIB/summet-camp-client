import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './provider/AuthProvider.jsx';

const queryclient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <div className=''>
    <QueryClientProvider client={queryclient}>
      <StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </StrictMode>
    </QueryClientProvider>
  </div>,
)
