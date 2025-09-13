//  -- Link --  //
import {  Link  } from "react-router";

// img path Home_ConhecaBg.png
import "./Conheca.scss";



const Conheca = () => {
    return (
      <section className="Conheca">            
        <section className="Conheca_Glass">
          
          <h1 className="Conheca_Glass__Titulo">Faça uma atividade conosco!</h1>
          <p className="Conheca_Glass__Texto">
            Entre em contato conosco 
            <Link className="Conheca_Glass__Texto-Link" to="/Mapa"> clicando aqui </Link> 
            ou venha fazer uma visita na nossa sede!
          </p>

        </section>      
      </section>
    )
}

export default Conheca;
