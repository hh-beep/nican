//  -- Imports --  //
import {  Link  } from "react-router";

//  -- Images --  //
import Lob from "../../../../Assets/Logo_Lob.svg";
import Esc from "../../../../Assets/Logo_Esc.svg";
import Sen from "../../../../Assets/Logo_Sen.svg";
import Pio from "../../../../Assets/Logo_Pio.svg";

//  -- Styles Stuff --  //
import "./Ramos.scss";





const Ramos = () => {

    const ramos = [
        {  age: "7 aos 10", path: "/Ramos/", img: Lob, name: "Lobinho"  },
        {  age: "11 aos 14", path: "/Ramos/", img: Esc, name: "Escoteiro"  },
        {  age: "15 aos 17", path: "/Ramos/", img: Sen, name: "Senior"  },
        {  age: "18 aos 22", path: "/Ramos/", img: Pio, name: "Pioneiro"  }
    ]


    return (
        <section className="Ramos">
            <h1 className="Ramos_Tittle">Descubra os nossos Ramos:</h1>

            {/*  -- Carrosel stuff --  */}
            <ul className="Ramos_List">
                {
                    ramos.map(  (ramo, key) => {
                        return (
                            <Link 
                                to={  ramo.path  } 
                                className="Ramos_List__Ramo" 
                                id={  ramo.name  }
                                key={  key  }
                            >
                                <section className="Ramos_List__Ramo-Figure" id={  ramo.name  }>
                                  <img className="Ramos_List__Ramo-Figure--Img" src={  ramo.img  }/>
                                  <h1 className="Ramos_List__Ramo-Figure--Age">{  ramo.age  }</h1>
                                </section>

                                <section className="Ramos_List__Ramo-Section">
                                    <p className="Ramos_List__Ramo-Section--Text">{  ramo.name  }</p>
                                </section>
                            </Link>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Ramos;
