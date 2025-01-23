import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import AuthProvider from './AuthProvider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className='max-w-7xl mx-auto scroll-smooth'>
          <AuthProvider>
            <RouterProvider router={router}>
            </RouterProvider>
          </AuthProvider>
        </div>
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>,
)
