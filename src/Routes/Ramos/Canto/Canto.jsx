//  -- Images/Icons --  //
import {  LuMusic4 as Icon  } from 'react-icons/lu'
import Image from "../../../Assets/Ramos_Canto.png";



const Canto = () => {
  return (
    <section id="RamoCanto" className="Ramo white">
      <section className="Ramo_Top">
        <Icon color="#f2f2f2" className="Ramo_Top__Icon"/> 
        <h2 className="Ramo_Top__Tittle">Equipe de Canto e Liturgica</h2>
        <Icon color="#f2f2f2" className="Ramo_Top__Icon"/> 
      </section>

      <section className="Ramo_Main">
        <section className="Ramo_Main__TextArea">
          <p clasName="Ramo_Main__TextArea-Text">
          Dentro do Grupo Escoteiro Católico Nican Mopohua – 222/PR, a música também é parte viva da nossa espiritualidade.
          Contamos com uma Equipe de Canto e uma Equipe Liturgica formada por jovens e adultos do próprio grupo, que anima as missas, celebrações e momentos de oração com entusiasmo, fé e dedicação.
          A música é, pra nós, uma forma de servir com alegria e expressar a presença de Deus nas nossas atividades.
          Seja durante uma celebração comunitária, uma fogueira no acampamento ou um evento do grupo, o canto se torna oração e partilha, unindo corações e fortalecendo a fraternidade escoteira.
          </p>
        </section>
     

        <figure className="Ramo_Main__Figure">
          <img className="Ramo_Main__Figure-Image" src={  Image  }/> 
        </figure>
      </section>
    </section>
  )
}

export default Canto;
