import React from 'react';

/*  Components  */
import NavbarItem from "../NabarItem.js/NavbarItem";





const NavbarHiddenList = ({  isHidden, data  }) => {
  return (
    <ul className=" navbarHiddenList hiddeList ">
      <section className=" navbarHiddenListBox ">
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

export default NavbarHiddenList;