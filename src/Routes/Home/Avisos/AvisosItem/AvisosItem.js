import React from 'react';

/*  Components  */
import AvisosItemImage from "./AvisosItemImage/AvisosItemImage";
import AvisosItemTextos from "./AvisosItemTextos/AvisosItemTextos";

/*  Style  */
import AvisosItem_Style from "./AvisosItem_Style";





const style = AvisosItem_Style();





const AvisosItem = ({  item  }) => {

  const {  ImagemPrincipal, Titulo, Resumo, Data  } = item;


  return (
    <section className={  style.container  }>
      

      <AvisosItemImage 
        Imagem={  ImagemPrincipal  }
      />

      <AvisosItemTextos 
        Titulo={  Titulo  }
        Resumo={  Resumo  }
        Data={  Data  }
      />


    </section>
  )
}

export default AvisosItem;