import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Route'
import AuthProvider from './Provider/AuthProvider'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='mx-20 bg-slate-200 shrink-0'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>

  </React.StrictMode>,
)
