import React from 'react';

/*  Style  */
import SobreTitulo_Style from "./SobreTitulo_Style"





const style = SobreTitulo_Style();





const SobreTitulo = () => {
  return (
    <section className={  style.container  }>
      <h1 className={  style.containerTittle  }>
        As nossas mais recentes Atividades
      </h1>
    </section>
  )
}

export default SobreTitulo;