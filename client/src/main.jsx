import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Welcome from './pages/Welcome.jsx'
import Homepage from './pages/Homepage.jsx'
import Progresspage from './pages/Progresspage.jsx'
import Completedpage from './pages/Completedpage.jsx'
import Alltaskspage from './pages/Alltaskspage.jsx'
import MainLayout from './pages/MainLayout.jsx'
import Errorpage from './pages/Errorpage.jsx'


const myRouter = createBrowserRouter(
  [
    {
      path : '/welcome',
      element : <Welcome />
    },
    {
      path : '/',
      element : <MainLayout />,
      errorElement : <Errorpage />,
      children : 
      [
        {
          path : '/',
          element : <Homepage />
        },
        {
          path : 'progress',
          element : <Progresspage />
        },
        {
          path : 'finished',
          element : <Completedpage />
        },
        {
          path : 'all',
          element : <Alltaskspage />
        }
      ]

    }
    
  ]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter}/>
  </StrictMode>,
)
