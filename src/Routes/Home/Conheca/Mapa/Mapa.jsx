//  -- Importando uma img (Temporario, substituiremos pela api do gogle meps) --  //
import Maps from "../../../../Assets/maps.png"

import "./Mapa.scss";



const Mapa = () => {
  return (
    <section className="Mapa">
      <section className="Mapa_Section">

        <section className="Mapa_Section__Texto">
          <h1 className="Mapa_Section__Texto-Titulo">Veja o nosso grupo pelo mapa!</h1>
          <p className="Mapa_Section__Texto-Texto">O nosso grupo fica na localizada na Rua Marapa, 456, na Itaipu A, em Foz do Iguacu - PR - Brasil</p>
        </section>

        <section className="Mapa_Section__Mapa">
          <img 
            className="Mapa_Section__Mapa-Imagem"
            src={  Maps  }
          />
        </section>


      </section>
    </section>
  )
}

export default Mapa;
