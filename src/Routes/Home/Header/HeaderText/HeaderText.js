import React from 'react';

/*  Style  */
import HeaderText_Style from "./HeaderText_Style";





const style = HeaderText_Style();




const HeaderText = () => {
  return (
    <section className={  style.container  }>
      <h1 className={  style.containerTittle  }>GE Nicān Mopohuā 222/PR</h1>
      {/*<p className={  style.containerText  }>
        Uma plataforma com as principais informações sobre as atividades, eventos e noticias do Grupo de Escoteiros Católico Nicān Mopohuā 
  </p>*/}
      <p className={  style.containerText  }>
        Encontros nos Sabados das 14:30 ás 17:30, na Rua Marapá, 85860-300.
      </p>
    </section>
  )
}

export default HeaderText;