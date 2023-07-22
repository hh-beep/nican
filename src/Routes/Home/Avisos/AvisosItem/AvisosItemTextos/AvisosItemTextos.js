import React from 'react';

/*  Style  */
import AvisosItemTextos_Style from "./AvisosItemTextos_Style"; 





const style = AvisosItemTextos_Style();





const AvisosItemTextos = ({  Titulo, Data, Resumo  }) => {
  return (
    <section className={  style.container  }>


      <section className={  style.containerSection  }>
        <h1 className={  style.containerSectionTittle  }>{  Titulo  }</h1>
        <p className={  style.containerSectionDate  }>{  Data  }</p>
      </section>

      <section className={  style.containerBox  }>
        <p className={  style.containerBoxResume  }>{  Resumo  }</p>
      </section>


    </section>
  )
}

export default AvisosItemTextos;