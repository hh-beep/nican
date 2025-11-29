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
            A música é parte viva da espiritualidade do nosso grupo. A Equipe de Canto e a Equipe Litúrgica, formadas por jovens e adultos, animam missas, celebrações e momentos de oração com entusiasmo e fé. Cantar é nossa forma de servir com alegria e sentir a presença de Deus nas atividades. 
            Seja em uma missa, ao redor da fogueira ou em um evento, o canto se transforma em oração e partilha, unindo corações e fortalecendo nossa fraternidade escoteira.
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
