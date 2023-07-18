import React from 'react';

/*  React Router Dom  */
import {  
  Link,
  useLocation
} from "react-router-dom";





const NavbarItem = ({  isHidden, item  }) => {

  const {  name, path  } = item;
  const currentPath = useLocation().pathname;


  const verify = (type, current, pathName) => {
    if (type === "container") {
      if (!isHidden && current === pathName) {
        return " selected navbarList__ItemNormal "
      }
      else if (isHidden) {
        return " navbarList__ItemHidden "
      }
      else {
        return " navbarList__ItemNormal "
      }
    }
    else {
      if (isHidden) {
        return " navbarList__ItemHiddenText "
      }
      else {
        return " navbarList__ItemNormalText "
      }
    }
  }


  return (
    <Link
      to={  path  }
      className={  verify("container", currentPath, path) + " navbarList__Item "}
    >
      <p className={  verify("text") + " navbarList__ItemText "  }>
        {  name  }
      </p>
    </Link>
  )
}

export default NavbarItem;