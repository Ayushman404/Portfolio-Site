import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Index from './pages/Index.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element= {<Index />} />
      <Route path = "*" element= {<div>404 Not Found</div>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router} />
  </StrictMode>,
)
