//  -- Images/Icons --  //
import Icon from "../../../Assets/Logo_Sen.svg"
import Image from "../../../Assets/Ramos_Senior.png";



const Senior = () => {
  return (
    <section id="RamoSenior" className="Ramo white">
      <section className="Ramo_Top">
        <img className="Ramo_Top__Icon" src={  Icon  }/> 
        <h2 className="Ramo_Top__Tittle">Ramo Senior - dos 15 aos 17</h2>
        <img className="Ramo_Top__Icon" src={  Icon  }/> 
      </section>

      <section className="Ramo_Main">
        <figure className="Ramo_Main__Figure">
          <img className="Ramo_Main__Figure-Image" src={  Image  }/> 
        </figure>
      
        <section className="Ramo_Main__TextArea">
          <p clasName="Ramo_Main__TextArea-Text">
            O Ramo Sênior é formado por jovens com idades entre 15 e 17 anos, e nos incentiva a superar nossos próprios desafios! Nós já nos conhecemos melhor, aceitamos nossas características e as diferenças de um jeito mais simples, e estamos entendendo melhor nossa própria personalidade.
            Com a tropa sênior vivemos verdadeiras aventuras: fazemos rapel, navegamos, acampamos por vários dias, fazemos trilhas e escaladas, aprendemos jogos e atividades mais desafiadoras e somos incentivados a superar obstáculos.
          </p>
        </section>
      </section>
    </section>
  )
}

export default Senior;
