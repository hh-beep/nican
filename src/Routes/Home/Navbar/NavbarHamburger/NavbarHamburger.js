import React from 'react';

/*  Style  */
import NavbarHamburger_Style from "./NavbarHamburger_Style";

const style = NavbarHamburger_Style(); 





const NavbarHamburger = () => {

  function toggleStyles() {
    /*  Toggle do Style da Lista */
    const list = document.getElementsByClassName("navbarHiddenList")[0]
    list.classList.toggle("hiddeList")
    list.classList.toggle("shownList")


    /*  Toggle do Style do Hamburger */
    const hamburger = document.getElementsByClassName("navbarHamburger")[0]
    hamburger.classList.toggle("navbarHamburgerActive")
    hamburger.classList.toggle("navbarHamburgerNormal")
  }


  return (
    <button 
      onClick={() => {  toggleStyles()  }} 
      className={  " navbarHamburger navbarHamburgerNormal " + style.container  }
    >


      <section className={  " navbarHamburgerIcon " + style.containerIcon  }>
        <span className={  " navbarHamburgerIcon-Detail top " + style.containerIconDetail  }></span>
        <span className={  " navbarHamburgerIcon-Detail mid " + style.containerIconDetail  }></span>
        <span className={  " navbarHamburgerIcon-Detail bot " + style.containerIconDetail  }></span>
      </section>

      <section className={  " navbarHamburgerSection " + style.containerSection  }>
        <h1 className={  " navbarHamburgerSection-Text " + style.containerSectionText  }>Menu</h1>
      </section>


    </button>
  )
}

export default NavbarHamburger;