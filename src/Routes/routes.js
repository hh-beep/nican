import React from "react";

import {  createHashRouter  } from "react-router-dom";

/*  Imports  */
import Home from "./Home/Home.jsx";
import Tudo from "./Tudo/Tudo.jsx";
import Contatos from "./Contatos/Contatos.jsx";
import Atividades from "./Atividades/Atividades.jsx";




const routes = createHashRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/Contatos/",
    Component: Contatos
  },
  {
    path: "/Atividades/",
    Component: Atividades,
  },
  {
    path: "/Tudo/",
    Component: Tudo,
  },
  {
    path: "*",
    element: <h1>Uh... Pagina não encontrada :/</h1>
  }
])

export default routes