import React from 'react';

/*  Compontens */
import AtividadesItemImagem from "./AtividadesItemImagem/AtividadesItemImagem";
import AtividadesItemTextos from "./AtividadesItemTextos/AtividadesItemTextos";

/*  Style  */
import AtividadesItem_Style from "./AtividadesItem_Style";





const style = AtividadesItem_Style();





const AtividadesItem = ({  item, whatKey  }) => {

  const {  ImagemPrincipal, Titulo, Data  } = item;

  function verifyCard() {
    if (whatKey === 0) {
      return style.specialContainer
    }
    else {
      return style.container
    }
  }


  return (
    <section 
      className={  verifyCard()  }
    >



      <AtividadesItemImagem 
        isFirst={  whatKey === 0 ? true : false  }
        ImagemPrincipal={  ImagemPrincipal  }
      />

      <AtividadesItemTextos 
        isFirst={  whatKey === 0 ? true : false  }
        Titulo={  Titulo  }
        Data={  Data  }
      />


    </section>
  )
}

export default AtividadesItem;