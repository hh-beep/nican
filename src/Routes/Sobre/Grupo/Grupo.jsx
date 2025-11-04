//  -- Image && Icon --  //
import Icon from "../../../Assets/Logo_Black.svg";
import Image from "../../../Assets/Sobre_Grupo.png";

//  -- Styles --  //
import "./Grupo.scss";



const Grupo = () => {
  return (
    <section className="Grupo">
      <section className="Grupo_Top">
        <img className="Grupo_Top__Icon" src={  Icon  }/>
        <h2 className="Grupo_Top__Tittle">Sobre o Grupo e Nosso Significado</h2>
        <img className="Grupo_Top__Icon" src={  Icon  }/>
      </section>

      <section className="Grupo_Section">
        <figure className="Grupo_Section__Figure">
          <img className="Grupo_Section__Figure-Image" src={  Image  }/>
        </figure>


        <section className="Grupo_Section__TextArea">
          <p className="Grupo_Section__TextArea-Text">
            O nome “Nican Mopohua” vem do antigo texto em náuatle que narra as aparições de Nossa Senhora de Guadalupe a São Juan Diego, no México.
            A expressão significa “Aqui se narra” — e é exatamente isso que desejamos fazer: narrar com nossas ações a presença de Deus em cada momento da nossa caminhada escoteira.
            No Grupo Escoteiro Católico Nican Mopohua, a fé não é uma parte isolada — ela está entranhada em tudo o que fazemos.
            Está na oração antes das atividades, na partilha em volta da fogueira, no respeito à criação, no serviço ao próximo e no amor com que cuidamos uns dos outros.
            Vivemos a espiritualidade de forma simples, alegre e cotidiana, do mesmo modo que Maria se fez presente na vida de Juan Diego — com ternura, esperança e propósito.
            Esse é o nosso diferencial: não apenas praticar o escotismo, mas viver um escotismo com alma, em que cada acampamento é um retiro, cada projeto é uma forma de servir, e cada jovem é chamado a descobrir o Cristo que vive dentro de si.
          </p>
        </section>
      </section>
    </section>
  )
}

export default Grupo;
