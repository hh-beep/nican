import React from 'react';

/*  Style  */
import HeaderText_Style from "./HeaderText_Style";





const style = HeaderText_Style();




const HeaderText = () => {
  return (
    <section className={  style.container  }>
      <h1 className={  style.containerTittle  }>GEC Nicān Mopohuā</h1>
      <p className={  style.containerText  }>
        Uma plataforma com as principais informações sobre as atividades, eventos e noticias do Grupo de Escoteiros Católico Nicān Mopohuā 
      </p>
    </section>
  )
}

export default HeaderText;