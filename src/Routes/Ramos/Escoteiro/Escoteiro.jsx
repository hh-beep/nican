//  -- Images/Icons --  //
import Icon from "../../../Assets/Logo_Esc_Black.svg"
import Image from "../../../Assets/Ramos_Escoteiros.png";



const Escoteiro = () => {
  return (
    <section id="RamoEscoteiro" className="Ramo">
      <section className="Ramo_Top">
        <img className="Ramo_Top__Icon" src={  Icon  }/> 
        <h2 className="Ramo_Top__Tittle">Ramo Escoteiro - dos 11 aos 15.</h2>
        <img className="Ramo_Top__Icon" src={  Icon  }/> 
      </section>

      <section className="Ramo_Main">
        <section className="Ramo_Main__TextArea">
          <p clasName="Ramo_Main__TextArea-Text">
            O Ramo Escoteiro é formado por jovens de 11 a 14 anos que vivem grandes aventuras em grupo. Divididos em patrulhas de 5 a 8 integrantes, aprendemos a trabalhar em equipe, respeitar a natureza e confiar em nós mesmos. Cada patrulha tem seu bastão, bandeirola e livro, onde guardamos lembranças e histórias das nossas atividades. 
            Com o lema “Sempre Alerta”, participamos de acampamentos, trilhas, passeios e muitas descobertas, sempre cercados de amigos e guiados por adultos que nos inspiram a crescer.
          </p>
        </section>

        
        <figure className="Ramo_Main__Figure">
          <img className="Ramo_Main__Figure-Image" src={  Image  }/> 
        </figure>
      </section>
    </section>
  )
}

export default Escoteiro;
