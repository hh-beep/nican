//  -- Link --  //
import {  Link  } from "react-router";

//  -- Styles --  //
import "./Noticias.scss";

//  -- Component --  //
import Carrosel from "./Carrosel/Carrosel";





const Noticias = ({  noticiasInfos  }) => {
  return (
    <section className="Noticias">

      <section className="Noticias_Section">
        <h1 className="Noticias_Section__Tittle">Veja as ultimas noticias:</h1>
        <Link to="/Noticias" className="Noticias_Section__Button">Ver Mais</Link>
      </section>

      <Carrosel noticiasInfos={  noticiasInfos  }/>

    </section>
  )
}

export default Noticias;
