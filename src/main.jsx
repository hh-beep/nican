//  -- React Infos --  //
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//  -- Api's --  //
import initFirebase from './Api/firebase';

//  -- Style --  //
import './Assets/global.css';

//  -- React Router --  //
import {  
  RouterProvider as Router,
  createHashRouter
} from "react-router";

//  -- Components --  //
import Home from './Routes/Home/Home';
import Sobre from './Routes/Sobre/Sobre';
import Ramos from "./Routes/Ramos/Ramos";
import Contato from "./Routes/Contato/Contato";
import ContatoConcluido from "./Routes/Contato/ContatoConcluido/ContatoConcluido"
import Noticias from "./Routes/Noticias/Noticias";

import Error from './Routes/Error/Error';



//  -- Initializing & Creating thigs --  //

initFirebase();



const routesPaths = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Sobre",
    element: <Sobre />
  },
  {
    path: "/Ramos",
    element: <Ramos />
  },
  {
    path: "/Contato",
    element: <Contato />
  },
  {
    path: "/ContatoConcluido",
    element: <ContatoConcluido />
  },
  {
    path: "/Noticias",
    element: <Noticias />
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
