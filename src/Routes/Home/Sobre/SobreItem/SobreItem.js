import React from 'react';

/*  Compontens */
import SobreItemImagem from "./SobreItemImagem/SobreItemImagem";

/*  Style  */
import SobreItem_Style from "./SobreItem_Style";
import SobreItemTextos from "./SobreItemTextos/SobreItemTextos";





const style = SobreItem_Style();





const SobreItem = ({  item, whatKey  }) => {

  const {  ImagemPrincipal, Titulo, Resumo  } = item;

  function verifyCard() {
    if (whatKey === 0) {
      return style.specialContainer
    }
    else {
      return style.container
    }
  }



  console.log(item)


  
  return (
    <section 
      className={  verifyCard()  }
    >



      <SobreItemImagem 
        isFirst={  whatKey === 0 ? true : false  }
        ImagemPrincipal={  ImagemPrincipal  }
      />

      <SobreItemTextos 
        isFirst={  whatKey === 0 ? true : false  }
        Titulo={  Titulo  }
        Resumo={  Resumo  }
      />


    </section>
  )
}

export default SobreItem;