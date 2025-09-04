//  -- Images --  //
import Lob from "../../../../Assets/Logo_Lob.svg";
import Esc from "../../../../Assets/Logo_Esc.svg";
import Sen from "../../../../Assets/Logo_Sen.svg";
import Pio from "../../../../Assets/Logo_Pio.svg";

//  -- Styles Stuff --  //
import "./Ramos.scss";



const Ramos = () => {

    const ramos = [
        {  path: "/Ramos/", img: Lob, name: "Lobinho"  },
        {  path: "/Ramos/", img: Esc, name: "Escoteiro"  },
        {  path: "/Ramos/", img: Sen, name: "Senior"  },
        {  path: "/Ramos/", img: Pio, name: "Pioneiro"  }
    ]


    return (
        <section className="Ramos">
            <h1 className="Ramos_Tittle">Descubra os nossos Ramos:</h1>

            {/*  -- Carrosel stuff --  */}
            <ul className="Ramos_List">
                {
                    ramos.map(  ramo => {
                        return (
                            <section className={  "Ramos_List__Ramo " + ramo.name  }>
                                <img className="Ramos_List__Ramo-Img" src={  ramo.img  }/>
                                <p className="Ramos_List__Ramo-Text"></p>
                            </section>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Ramos;