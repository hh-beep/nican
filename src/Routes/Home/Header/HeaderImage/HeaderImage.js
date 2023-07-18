import React from "react";

/*  Image  */
import Logo from "../../../../Images/Icon.svg" 

/*  Style  */
import HeaderImage_Style from "./HeaderImage_Style";





const style = HeaderImage_Style()





const HeaderImage = () => {
  return (
    <section
      className={  style.container  }
    >


      <img 
        src="https://github.com/hh-beep/ManualEscoteiro-Imagens/blob/master/Outros/Icone-Nican-Azul.png?raw=true"
        className={  "logoIcon" + style.containerImage  }
      />


    </section>
  )
}

export default HeaderImage;