import React from 'react';

/*  Style  */
import MapTextos_Style from "./MapTextos_Style";





const style = MapTextos_Style();





const MapTextos = () => {
  return (
    <section className={  style.container  }>


      <h1 className={  style.containerTittle  }>
        Venha fazer uma atividade conosco! 
      </h1>

      <p className={  style.containerText  }>
        Nossos encontros são aos sabados, das 14:30 até as 17:30, na Rua Marapá, 85860-300, ao lado do hospital Costa Cavalcanti.
      </p>


    </section>
  )
}

export default MapTextos;