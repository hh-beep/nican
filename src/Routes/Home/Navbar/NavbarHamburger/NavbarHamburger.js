import React from 'react';





const NavbarHamburger = () => {

  function toggleStyles() {
    const list = document.getElementsByClassName("navbarHiddenList")[0]
    list.classList.toggle("hiddeList")
    list.classList.toggle("shownList")


    const hamburger = document.getElementsByClassName("navbarHamburger")[0]
    hamburger.classList.toggle("navbarHamburgerActive")
    hamburger.classList.toggle("navbarHamburgerNormal")

    console.log(hamburger)
  }


  return (
    <button 
      onClick={() => {  toggleStyles()  }} 
      className=" navbarHamburger navbarHamburgerNormal "
    >


      <section className=" navbarHamburgerIcon ">
        <span className=" navbarHamburgerIcon-Detail top "></span>
        <span className=" navbarHamburgerIcon-Detail mid "></span>
        <span className=" navbarHamburgerIcon-Detail bot "></span>
      </section>

      <section className=" navbarHamburgerSection ">
        <h1 className=" navbarHamburgerSection-Text ">Menu</h1>
      </section>


    </button>
  )
}

export default NavbarHamburger;