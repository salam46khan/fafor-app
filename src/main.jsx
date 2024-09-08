import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-MyFont'>
      <RouterProvider router={Router} />
    </div>
  </StrictMode>,
)
