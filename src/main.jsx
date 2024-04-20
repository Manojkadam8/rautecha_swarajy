import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'




const router=createBrowserRouter(createRoutesFromElements(
              
  
             <Route path='/rautecha_swarajy/' element={<Layout />} >
            
            
            <Route path='/rautecha_swarajy/' element={<App />} />



             </Route>


))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
