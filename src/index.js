/*  Basic Imports */
import {  StrictMode  } from "react";
import {  createRoot  } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

/*  Style  */
import "./Global.css"

/*  Routes  */
import routes from "./Routes/routes";
import {  RouterProvider  } from 'react-router-dom'

/*  API's */
import initializeFirebase from "./Routes/Api/Firebase";





initializeFirebase();



const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={  routes  }/>
  </StrictMode>
);



reportWebVitals();