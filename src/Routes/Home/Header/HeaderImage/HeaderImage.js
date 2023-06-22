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
        src={  Logo  }
        className={  "logoIcon" + style.containerImage  }
      />


    </section>
  )
}

export default HeaderImage;