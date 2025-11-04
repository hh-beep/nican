//  -- Image && Icon --  //
import Padre from "../../../Assets/Sobre_Padre.png";
import { FaCampground as Icon } from 'react-icons/fa';

//  -- Styles --  //
import "./Historia.scss"



const Historia = () => {
  return (
    <section className="Historia">

      <section className="Historia_Top">
          <Icon color="#2c2c2c" className="Historia_Top__Icon" />
          <h2 className="Historia_Top__Tittle">Historia do Escotismo</h2>
          <Icon color="#2c2c2c" className="Historia_Top__Icon" />
      </section>


      <section className="Historia_Section">
        

        <section className="Historia_Section__TextArea">
          <p className="Historia_Section__TextArea-Text">
            O escotismo nasceu em 1907, com o general inglês Robert Baden-Powell, que acreditava que os jovens poderiam se tornar líderes melhores e cidadãos mais conscientes através da vida ao ar livre, do companheirismo e do serviço.
            Com o tempo, o movimento se espalhou pelo mundo e se adaptou a diferentes culturas e realidades, tornando-se uma das maiores forças juvenis globais.
            Foi nesse contexto que surgiu o escotismo católico, graças ao trabalho inspirador do Padre Jacques Sevin, S.J., um jesuíta francês que enxergou no método escoteiro uma poderosa forma de viver o Evangelho.
            Para ele, o escotismo deveria formar não apenas bons cidadãos, mas também bons cristãos — jovens que servissem com alegria, humildade e amor.
            Inspirado por essa visão, o Grupo Escoteiro Católico Nican Mopohua – 222/PR nasceu em Foz do Iguaçu como resposta ao chamado de unir aventura, formação humana e fé viva.
          </p>
        </section>




      <figure className="Historia_Section__Figure">
        <img alt="Padre Jacques Sevin, Pai do Escotismo Catolico" src={  Padre  } className="Historia_Section__Figure-Image"/>
      </figure>
    </section>

    </section>
  )
}

export default Historia;
