import React from 'react';

/*  Style  */
import SobreItemImagem_Style from "./SobreItemImagem_Style";





const style = SobreItemImagem_Style();





const SobreItemImagem = ({  isFirst, ImagemPrincipal: img  }) => {
  return (
    <section className={  style.container  }>
      <img 
        src={  img  }
        className={  isFirst ? style.containerSpecialImage : style.containerImage  }
      />
    </section>
  )
}

export default SobreItemImagem;