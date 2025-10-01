import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router"

//  -- Style --  //
import "./Navigation.scss"
import LogoBlack from "../Assets/Logo_Black.svg"



const Navigation = () => {

  const [color, hasColor] = useState(false);


    const thisRoute = useLocation().pathname;
    const paths = [
        {  name: "Início", path: "/"  },
        {  name: "Sobre", path: "/Sobre/"  },
        {  name: "Ramos", path: "/Ramos/"  }
    ]


    function changeColor() {
      hasColor(!color) 
    }


    return (
        <nav className={"NavBar"}>

            {/*  On Laptop-Pc  */}
            <section className="Laptop">
                <section className="Laptop_Name">
                    <img className="Laptop_Name__Image" src={  LogoBlack  }/>
                    <h1 className="Laptop_Name__Tittle">Nican Mopohua</h1>
                </section>


                {/*  Laptop Navigations Stuff  */}
                <ul className="Laptop_Navigations">
                    {
                        paths.map(  (path, key) => {
                            console.log()
                            return (
                                <Link 
                                    className={"Laptop_Navigations__Link " + (thisRoute == path.path ? "current" : "")} 
                                    to={   path.path  }
                                    key={  key  }
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



          <section onClick={  () => {  changeColor()  }} className={"Phone " + (color ? "" : "leColor")}>        
                <section className="Phone_Name">
                    <img className="Phone_Name__Image" src={  LogoBlack  }/>
                    <h1 className="Phone_Name__Tittle">Nican Mopohua</h1>
                </section>

                <ul>
                </ul>
          </section>



        </nav>
    )
}

export default Navigation;
