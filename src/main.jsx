//  -- React Infos --
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//  -- Style --
import './assets/global.css';

//  -- Configs of React Router + Routes --
import {  
  RouterProvider as Router,
  createHashRouter
} from "react-router";

import Home from './Routes/Home/Home';
import Sobre from './Routes/Sobre/Sobre';
import Error from './Routes/Error/Error';




const routesPaths = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Sobre/",
    element: <Sobre />
  },
  {
    path: "*",
    element: <Error />
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router router={  routesPaths  }/>
  </StrictMode>,
)
