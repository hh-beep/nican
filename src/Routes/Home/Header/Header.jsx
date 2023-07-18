import React from 'react';

/*  Components  */
import HeaderImage from "./HeaderImage/HeaderImage";
import HeaderText from "./HeaderText/HeaderText";

/*  Styles  */
import "./Header_Styles.scss"
import Header_Style from "./Header_Style";





const style = Header_Style();





const Header = () => {
  return (
    <section className={  style.container  }>
      <section className={  "mask" + style.containerBox  }>
        <section className={  "cardHeader" + style.containerBoxSection  }>


          <HeaderImage />

          <HeaderText />


        </section>
      </section>
    </section>
  )
}

export default Header;