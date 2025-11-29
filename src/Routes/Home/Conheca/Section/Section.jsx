//  -- Link --  //
import {  Link  } from "react-router"


import "./Section.scss";



const Section  = () => {
  return (
    <section className="Section">
      <section className="Section_Glass">
          
          <h1 className="Section_Glass__Titulo">Faça uma atividade conosco!</h1>


          <p className="Section_Glass__Texto">
            Entre em contato conosco 
            <Link className="Section_Glass__Texto-Link" to="/Contato"> clicando aqui </Link> 
            ou venha fazer uma visita na nossa sede!
          </p>

        </section>  
    </section>
  )
}

export default Section;
