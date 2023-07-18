import React from 'react';

/*  Style  */
import AtividadesItemImagem_Style from "./AtividadesItemImagem_Style";





const style = AtividadesItemImagem_Style();





const AtividadesItemImagem = ({  isFirst, ImagemPrincipal: img  }) => {
  return (
    <section className={  style.container  }>
      <img 
        src={  img  }
        className={  isFirst ? style.containerSpecialImage : style.containerImage  }
      />
    </section>
  )
}

export default AtividadesItemImagem;