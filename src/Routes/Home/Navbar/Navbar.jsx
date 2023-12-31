import React from 'react';

/*  Data  */
import Navbar_Data from "./Navbar_Data";

/*  Components  */
import NavbarHiddenList from "./NavbarHiddenList/NavbarHiddenList";
import NavbarHamburger from "./NavbarHamburger/NavbarHamburger";
import NavbarNormalList from "./NavbarNormalList/NavbarNormalList"; 

/*  Style  */
import Navbar_Style from "./Navbar_Style";
import "./Navbar_Styles.scss"




const style = Navbar_Style();





const Navbar = () => {

  const data = Navbar_Data();


  return (
    <section className={  "navbar" + style.container  }>


      <NavbarNormalList 
        isHidden={  false  }
        data={  data  }
      />

      <NavbarHamburger   />

      <NavbarHiddenList 
        isHidden={  true  }
        data={  data  }
      />


    </section>
  )
}

export default Navbar;