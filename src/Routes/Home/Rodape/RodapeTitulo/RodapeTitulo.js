import React from 'react';

/*  Style  */
import RodapeTitulo_Style from "./RodapeTitulo_Style";





const style = RodapeTitulo_Style();





const RodapeTitulo = () => {
  return (
    <section className={  style.container  }>


      <h1 className={  style.containerTitulo  }>
        Siga as nossas redes sociais ou Entre em contato!
      </h1>


    </section>
  )
} 

export default RodapeTitulo;