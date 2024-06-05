import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './cotexts/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import router from './Router/Router.jsx'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode   >
    
    <AuthProvider  >
    <QueryClientProvider client={queryClient}>

    <RouterProvider   router={ router}></RouterProvider>
    </QueryClientProvider>
    <Toaster></Toaster>
    </AuthProvider>

  </React.StrictMode>,
)
