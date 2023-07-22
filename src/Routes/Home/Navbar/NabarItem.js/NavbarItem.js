import React from 'react';

/*  React Router Dom  */
import {  
  Link,
  useLocation
} from "react-router-dom";

/*  Style  */
import NavbarItem_Style from "./NavbarItem_Style";





const style = NavbarItem_Style();





const NavbarItem = ({  isHidden, item  }) => {

  const {  name, path  } = item;
  const currentPath = useLocation().pathname;


  const verify = (current, pathName) => {
      if (!isHidden && current === pathName) {
        return " selected navbarList__ItemNormal "
      }
      else if (isHidden && current === pathName) {
        return " selected navbarList__ItemHidden "
      }
      else if (isHidden) {
        return " navbarList__ItemHidden "
      }
      else {
        return " navbarList__ItemNormal "
      }
  }


  return (
    <Link
      to={  path  }
      className={  verify(currentPath, path) + " navbarList__Item " + style.container  }
    >
      <p className={  style.containerText  }>
        {  name  }
      </p>
    </Link>
  )
}

export default NavbarItem;