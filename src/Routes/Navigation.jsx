import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router"

//  -- Style --  //
import "./Navigation.scss"
import LogoBlack from "../Assets/Logo_Black.svg"



const Navigation = () => {

    const thisRoute = useLocation().pathname;
    const paths = [
        {  name: "Início", path: "/"  },
        {  name: "Sobre", path: "/Sobre/"  },
        {  name: "Ramos", path: "/Ramos/"  }
    ]


    return (
        <nav className={"NavBar "}>

            {/*  On Laptop-Pc  */}
            <section className="Laptop">
                <section className="Laptop_Name">
                    <img className="Laptop_Name__Image" src={  LogoBlack  }/>
                    <h1 className="Laptop_Name__Tittle">Nican Mopohua</h1>
                </section>


                {/*  Laptop Navigations Stuff  */}
                <ul className="Laptop_Navigations">
                    {
                        paths.map(  path => {
                            console.log()
                            return (
                                <Link 
                                    className={"Laptop_Navigations__Link " + (thisRoute == path.path ? "current" : "")} 
                                    to={   path.path  }
                                >

                                    <p className="Laptop_Navigations__Link-Text">
                                        {  path.name  }
                                    </p>
                                </Link>
                            )
                        })
                    }
                </ul>
            </section>


            


        </nav>
    )
}

export default Navigation;