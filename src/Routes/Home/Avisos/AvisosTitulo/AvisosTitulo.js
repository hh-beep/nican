import React from 'react';

/*  React Router Dom  */
import {  Link  } from "react-router-dom";

/*  Style  */
import AvisosTitulo_Style from "./AvisosTitulo_Style";





const style = AvisosTitulo_Style();





const AvisosTitulo = () => {
  return (
    <section className={  style.container  }>


      <h1 className={  style.containerTittle  }>
        Noticias e Avisos Importantes!
      </h1>

      <Link
        to="/Avisos/"
        className={  " borderButton " + style.containerButton  }
      >
        Ver Avisos!
      </Link>


    </section>
  )
}

export default AvisosTitulo;