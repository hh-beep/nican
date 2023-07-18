import React from 'react';

/*  Components  */
import NavbarItem from "../NabarItem.js/NavbarItem";





const NavbarNormalList = ({  isHidden, data  }) => {
  return (
    <ul className=" navbarNormalList ">
      <section className=" navbarNormalListBox ">
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