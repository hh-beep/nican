import React from 'react';

/*  Styles */
import SobreItemTextos_Style from "./SobreItemTextos_Style"





const style = SobreItemTextos_Style();





const SobreItemTextos = ({  isFirst, Titulo, Resumo  }) => {
  return (
    <section className={  isFirst ? style.containerSpecial : style.container  }>


      <h1 className={  isFirst ? style.containerSpecialTittle : style.containerTittle  }>
        {  Titulo  }
      </h1>
      { isFirst ? ((
          <p className={  style.containerSpecialText   }>
            {  Resumo  }
          </p>
        )) 
        :
        ((
          <div></div>
        ))
      }


    </section>
  )
}

export default SobreItemTextos;
