import React from 'react';

/*  Styles */
import AtividadesItemTextos_Style from "./AtividadesItemTextos_Style"





const style = AtividadesItemTextos_Style();





const AtividadesItemTextos = ({  isFirst, Titulo, Resumo, Data  }) => {
  return (
    <section className={  isFirst ? style.containerSpecial : style.container  }>


      <h1 className={  isFirst ? style.containerSpecialTittle : style.containerTittle  }>
        {  Titulo  }
      </h1>
      <p className={  style.containerData  }>{  Data  }</p>


    </section>
  )
}

export default AtividadesItemTextos;
