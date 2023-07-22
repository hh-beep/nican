import React from 'react';

/*  Style  */
import AvisosItemImage_Style from "./AvisosItemImage_Style";





const style = AvisosItemImage_Style();





const AvisosItemImage = ({  Imagem  }) => {
  return (
    <section className={  style.container  }>
      <img
        alt="imagem em um card sobre os avisos"
        src={  Imagem  }
        className={  style.containerImage  }
      />
    </section>
  )
}

export default AvisosItemImage;