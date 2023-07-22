import React from 'react';

/*  Style  */
import RodapeItem_Style from "./RodapeItem_Style";





const style = RodapeItem_Style();





const RodapeItem = ({  item  }) => {
  return (
    <button
      onClick={  () => {
        window.location.href = item.link
      }}
      className={  " rodapeLink " + style.container  }
    >


      <img 
        alt="Icone do Link para os contatos"
        src={  item.imagem  }
        className={  " rodapeLinkImagem " + style.containerImagem  }
      />

      <h1 className={  " rodapeLinkTexto " + style.containerTexto  }>
        {  item.value  }
      </h1>


    </button>
  )
}

export default RodapeItem