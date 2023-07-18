import React from 'react';

/*  React Router Dom  */
import {  Link  } from "react-router-dom";

/*  Style  */
import AtividadesTitulo_Style from "./AtividadesTitulo_Style"





const style = AtividadesTitulo_Style();





const SobreTitulo = ({  items  }) => {
  return (
    <section className={  style.container  }>



      <h1 className={  style.containerTittle  }>
        As nossas mais recentes Atividades
      </h1>
      
      <Link 
        to="/Atividades" 
        state={{  items: items  }}
        className={  "borderButton" + style.containerButton  }
      >
        Ver Tudo!
      </Link>



    </section>
  )
}

export default SobreTitulo;