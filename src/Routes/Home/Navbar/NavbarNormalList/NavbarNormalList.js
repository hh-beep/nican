import React from 'react';

/*  Components  */
import NavbarItem from "../NabarItem.js/NavbarItem";

/*  Style  */
import NavbarNormalList_Style from "./NavbarNormalList_Style";





const style = NavbarNormalList_Style();





const NavbarNormalList = ({  isHidden, data  }) => {
  return (
    <ul className={  " navbarNormalList " + style.container  }>
      <section className={  " navbarNormalListBox " + style.containerBox  }>
        {data.map(  (item, key) => {
          return (
            <NavbarItem 
              key={  key  }
              item={  item  }
              isHidden={  isHidden  }
            />
          )
        })}
      </section>
    </ul>
  )
}

export default NavbarNormalList;