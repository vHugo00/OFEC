import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'

import Home from './routes/Home.jsx'
import Store from './routes/Store.jsx'
import News from './routes/Social.jsx'
import Challengs from './routes/Challengs.jsx'
import ErrorPage from './routes/ErrorPage.jsx'


import App from './App.jsx'
import Settings from './routes/Settings.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'store',
        element: <Store />
      },
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'challengs',
        element: <Challengs />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
