import React from "react";

/*  Image  */
import Logo from "../../../../Images/Icon.png" 

/*  Style  */
import HeaderImage_Style from "./HeaderImage_Style";





const style = HeaderImage_Style()





const HeaderImage = () => {
  return (
    <section
      className={  style.container  }
    >


      <img 
        src="https://raw.githubusercontent.com/hh-beep/ManualEscoteiro-Imagens/master/Outros/Icone-Nican-Azul.png"
        className={  "logoIcon" + style.containerImage  }
      />


    </section>
  )
}

export default HeaderImage;