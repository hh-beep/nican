import { useState, useEffect } from "react";
import { useLocation } from "react-router"

//  -- Style --
import "./Navigation.scss"



const Navigation = () => {

    const thisRoute = useLocation().pathname;

    const [ heightStyle, setHeightStyle  ] = useState("");

    
    useEffect(  () => {
        if (  document.documentElement.scrollHeight > 1900  ) {
            setHeightStyle("heigh")
        }
        else {
            setHeightStyle("")
        }

        console.log(document.documentElement.scrollHeight);
    })


    return (
        <nav className={"NavBar " + heightStyle}>
            <h1>Navegation</h1>
        </nav>
    )
}

export default Navigation;